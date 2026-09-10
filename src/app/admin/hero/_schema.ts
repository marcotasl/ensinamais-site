import { z } from "zod";

// Espelha emha_is_valid_cta_link() em
// wordpress-plugins/ensina-mais-hero-api/ensina-mais-hero-api.php: âncora,
// caminho interno de separador único (bloqueia "//" e "/\", que o WHATWG
// URL Standard trata como equivalentes em esquemas http/https) ou HTTPS.
export function isValidCtaLink(value: string): boolean {
  if (value.startsWith("#")) return true;
  const second = value.charAt(1);
  if (value.startsWith("/") && second !== "/" && second !== "\\") return true;
  if (/^https:\/\//i.test(value)) return true;
  return false;
}

export const HEX_COLOR_RE = /^#[0-9a-fA-F]{6}$/;

export const bannerContentSchema = z.object({
  title: z.string().trim().min(1, "Título é obrigatório").max(120, "Até 120 caracteres"),
  subtitulo: z.string().trim().min(1, "Subtítulo é obrigatório").max(80, "Até 80 caracteres"),
  descricao: z.string().trim().min(1, "Descrição é obrigatória").max(320, "Até 320 caracteres"),
  cta_texto: z.string().trim().min(1, "Texto do CTA é obrigatório").max(60, "Até 60 caracteres"),
  cta_link: z
    .string()
    .trim()
    .min(1, "Link do CTA é obrigatório")
    .refine(isValidCtaLink, "Use âncora (#...), caminho interno (/...) ou URL https://"),
  cor_overlay: z.string().trim().regex(HEX_COLOR_RE, "Cor precisa ser um hexadecimal válido (#rrggbb)"),
});
export type BannerContentData = z.infer<typeof bannerContentSchema>;

// imagem_fundo aqui é o ID do anexo, não a URL: o plugin lê URL mas grava
// ID (ver emha_resolve_image_url / emha_update_acf_rest_value no PHP). 0
// significa "manter a imagem atual" no modo edição — ver _actions.ts.
export const bannerPayloadSchema = bannerContentSchema.extend({
  imagem_fundo: z.number().int().nonnegative(),
});
export type BannerPayload = z.infer<typeof bannerPayloadSchema>;
