import { decodeHtmlEntities } from "./html-entities";
import type { WPBanner } from "./wordpress";
import type { FallbackBanner } from "./fallback-banners";

// Único ponto que traduz o shape do REST (WPBanner) pro shape que Hero.tsx
// consome (FallbackBanner). Usado pela home pública (src/app/page.tsx); o
// preview do admin monta o mesmo shape a partir do estado do formulário
// (texto puro, sem entidade, não passa por aqui).
export function wpBannerToSlide(banner: WPBanner): FallbackBanner {
  return {
    id: banner.id,
    title: decodeHtmlEntities(banner.title.rendered),
    subtitle: banner.acf.subtitulo,
    desc: banner.acf.descricao,
    ctaText: banner.acf.cta_texto,
    ctaHref: banner.acf.cta_link,
    overlayColor: banner.acf.cor_overlay,
    image: banner.acf.imagem_destaque,
    bgImage: banner.acf.imagem_fundo,
  };
}
