import { z } from "zod";

export { decodeHtmlEntities } from "@/lib/html-entities";

export const POST_STATUSES = ["publish", "draft"] as const;
export type PostStatus = (typeof POST_STATUSES)[number];

// Metadados: campos que qualquer save (com ou sem corpo) sempre valida e envia.
export const postMetaSchema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  excerpt: z.string(),
  status: z.enum(POST_STATUSES, { error: "Selecione um status" }),
  categories: z.array(z.number().int().positive()).min(1, "Selecione ao menos uma categoria"),
  featuredMedia: z.number().int().nonnegative(),
  featuredMediaUrl: z.string(),
});

export type PostMetaData = z.infer<typeof postMetaSchema>;

// Corpo separado do schema de metadados: "salvar só metadados" nunca deve
// nem carregar esse campo no payload enviado ao WP (ver _actions.ts).
export const postFormSchema = postMetaSchema.extend({
  content: z.string(),
});

export type PostFormData = z.infer<typeof postFormSchema>;

/** Post legado escrito no Gutenberg: content.raw carrega comentários de bloco. */
export function isGutenbergContent(raw: string): boolean {
  return raw.includes("<!-- wp:");
}
