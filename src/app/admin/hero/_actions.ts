"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { adminFetchWP } from "@/lib/admin-client";
import { CACHE_TAG_BANNERS } from "@/lib/wordpress";
import { bannerPayloadSchema, type BannerPayload } from "./_schema";

function revalidate() {
  revalidateTag(CACHE_TAG_BANNERS, "max");
  revalidatePath("/");
}

// Requisito explícito: antes de persistir, confirmar que o alvo existe e é
// imagem. Só é chamado quando um novo ID foi escolhido (> 0) — um ID
// inalterado já passou por esta mesma checagem no upload original via
// POST /wp/v2/media (rota /api/admin/media), então revalidar de novo seria
// redundante sem reduzir risco.
async function assertIsImage(mediaId: number) {
  const media = await adminFetchWP<{ media_type?: string }>(`/wp/v2/media/${mediaId}`);
  if (media.media_type !== "image") {
    throw new Error("O arquivo selecionado não é uma imagem.");
  }
}

function buildAcfPayload(data: Omit<BannerPayload, "title" | "imagem_fundo">) {
  return {
    subtitulo: data.subtitulo,
    descricao: data.descricao,
    cta_texto: data.cta_texto,
    cta_link: data.cta_link,
    cor_overlay: data.cor_overlay,
  };
}

export async function createBannerAction(data: BannerPayload) {
  const parsed = bannerPayloadSchema.parse(data);
  if (parsed.imagem_fundo <= 0) {
    throw new Error("Selecione uma imagem de fundo.");
  }
  await assertIsImage(parsed.imagem_fundo);

  // menu_order explícito: um post novo nasce com menu_order 0 no WP core,
  // o que empataria com qualquer banner já existente e quebraria o
  // reordenar (swap entre iguais é no-op). max(existing) + 1, não
  // existing.length: depois de um delete no meio da lista, length fica
  // menor que o maior menu_order em uso e colidiria com um banner que
  // ainda existe (ex.: A=0,B=1,C=2; apaga B; length=2 colide com C=2).
  const existing = await adminFetchWP<{ menu_order: number }[]>("/wp/v2/banner", {
    query: { per_page: "100", _fields: "menu_order" },
  });
  const nextMenuOrder = existing.reduce((max, b) => Math.max(max, b.menu_order), -1) + 1;

  await adminFetchWP<{ id: number }>("/wp/v2/banner", {
    method: "POST",
    body: JSON.stringify({
      title: parsed.title,
      status: "publish",
      menu_order: nextMenuOrder,
      acf: { ...buildAcfPayload(parsed), imagem_fundo: parsed.imagem_fundo },
    }),
  });

  revalidate();
  redirect("/admin/hero?created=1");
}

export async function updateBannerAction(id: number, data: BannerPayload) {
  const parsed = bannerPayloadSchema.parse(data);

  const acf: Record<string, unknown> = buildAcfPayload(parsed);
  if (parsed.imagem_fundo > 0) {
    await assertIsImage(parsed.imagem_fundo);
    acf.imagem_fundo = parsed.imagem_fundo;
  }
  // imagem_fundo omitido (0 = inalterado): o shim REST do plugin só grava
  // as chaves presentes no corpo (array_key_exists), então não reenviar a
  // chave preserva a imagem atual sem precisar saber o ID dela (o GET só
  // devolve a URL resolvida, nunca o ID).

  await adminFetchWP(`/wp/v2/banner/${id}`, {
    method: "POST",
    body: JSON.stringify({ title: parsed.title, acf }),
  });

  revalidate();
  return { ok: true as const };
}

export async function deleteBannerAction(id: number) {
  await adminFetchWP(`/wp/v2/banner/${id}`, {
    method: "DELETE",
    query: { force: "true" },
  });
  revalidate();
}

type BannerOrderSlim = { id: number; menu_order: number };

export async function moveBannerAction(id: number, direction: "up" | "down") {
  const list = await adminFetchWP<BannerOrderSlim[]>("/wp/v2/banner", {
    query: { per_page: "100", orderby: "menu_order", order: "asc", _fields: "id,menu_order" },
  });

  const idx = list.findIndex((b) => b.id === id);
  if (idx < 0) return;
  const swapIdx = direction === "up" ? idx - 1 : idx + 1;
  if (swapIdx < 0 || swapIdx >= list.length) return;

  const a = list[idx];
  const b = list[swapIdx];
  await Promise.all([
    adminFetchWP(`/wp/v2/banner/${a.id}`, { method: "POST", body: JSON.stringify({ menu_order: b.menu_order }) }),
    adminFetchWP(`/wp/v2/banner/${b.id}`, { method: "POST", body: JSON.stringify({ menu_order: a.menu_order }) }),
  ]);

  revalidate();
}
