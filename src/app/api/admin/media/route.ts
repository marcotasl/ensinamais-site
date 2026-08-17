import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin-client";
import { buildWpUrl } from "@/lib/wp-url";

const MAX_BYTES = 8 * 1024 * 1024;
// SVG e GIF ficam de fora intencionalmente: SVG é XML executável (vetor de
// XSS armazenado ao ser servido direto do CMS) e GIF não é usado em nenhum
// módulo do admin (hero/blog usam imagem estática). Para reintroduzir SVG,
// sanitizar com svgo/DOMPurify antes do POST para o WP.
const ALLOWED = new Set(["image/png", "image/jpeg", "image/webp"]);

export async function POST(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  const form = await req.formData().catch(() => null);
  const file = form?.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ ok: false, error: "missing_file" }, { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ ok: false, error: "file_too_large" }, { status: 413 });
  }
  if (!ALLOWED.has(file.type)) {
    return NextResponse.json({ ok: false, error: "unsupported_type" }, { status: 415 });
  }

  const safeName = (file.name || "upload").replace(/[^a-zA-Z0-9._-]+/g, "-").slice(0, 120);
  const token = Buffer.from(`${session.user}:${session.appPassword}`).toString("base64");

  const wpRes = await fetch(buildWpUrl("/wp/v2/media"), {
    method: "POST",
    headers: {
      Authorization: `Basic ${token}`,
      "Content-Type": file.type,
      "Content-Disposition": `attachment; filename="${safeName}"`,
    },
    body: await file.arrayBuffer(),
  });

  if (!wpRes.ok) {
    // Mesma regra do adminFetchWP: o corpo do erro do WP pode trazer stack PHP,
    // nome de plugin e user_login. Fica no log do servidor, não volta ao browser.
    const text = await wpRes.text().catch(() => "");
    if (text) console.error(`[admin/media] ${wpRes.status}:`, text.slice(0, 500));
    return NextResponse.json(
      { ok: false, error: "wp_upload_failed" },
      { status: wpRes.status },
    );
  }

  const media = (await wpRes.json()) as {
    id: number;
    source_url: string;
    media_details?: { width?: number; height?: number };
    alt_text?: string;
  };
  return NextResponse.json({
    ok: true,
    id: media.id,
    url: media.source_url,
    width: media.media_details?.width ?? null,
    height: media.media_details?.height ?? null,
    altText: media.alt_text ?? "",
  });
}
