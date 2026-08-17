"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { adminFetchWP } from "@/lib/admin-client";
import { CACHE_TAG_POSTS } from "@/lib/wordpress";
import {
  postFormSchema,
  postMetaSchema,
  type PostFormData,
  type PostMetaData,
  type PostStatus,
} from "./_schema";

interface WPPostSlim {
  id: number;
  slug: string;
}

function revalidate() {
  revalidateTag(CACHE_TAG_POSTS, "max");
  revalidatePath("/blog", "layout");
}

function metaPayload(data: PostMetaData): Record<string, unknown> {
  return {
    title: data.title,
    excerpt: data.excerpt,
    status: data.status,
    categories: data.categories,
    featured_media: data.featuredMedia || 0,
  };
}

export async function createPostAction(data: PostFormData) {
  const parsed = postFormSchema.parse(data);
  const payload = { ...metaPayload(parsed), content: parsed.content };
  const created = await adminFetchWP<WPPostSlim>("/wp/v2/posts", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  revalidate();
  redirect(`/admin/blog/${created.id}/editar?created=1`);
}

/** Salva só título, resumo, status, categoria e imagem destaque. Nunca envia `content`. */
export async function updatePostMetaAction(id: number, data: PostMetaData) {
  const parsed = postMetaSchema.parse(data);
  await adminFetchWP(`/wp/v2/posts/${id}`, {
    method: "POST",
    body: JSON.stringify(metaPayload(parsed)),
  });
  revalidate();
  return { ok: true as const };
}

/** Salva metadados e corpo juntos. Quem chama decide isso sabendo do risco em posts Gutenberg. */
export async function updatePostBodyAction(id: number, data: PostFormData) {
  const parsed = postFormSchema.parse(data);
  await adminFetchWP(`/wp/v2/posts/${id}`, {
    method: "POST",
    body: JSON.stringify({ ...metaPayload(parsed), content: parsed.content }),
  });
  revalidate();
  return { ok: true as const };
}

/** Despublicar (draft) é reversível; não há exclusão definitiva nesta V1. */
export async function togglePostStatusAction(id: number, status: PostStatus) {
  await adminFetchWP(`/wp/v2/posts/${id}`, {
    method: "POST",
    body: JSON.stringify({ status }),
  });
  revalidate();
  return { ok: true as const };
}
