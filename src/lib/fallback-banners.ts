// Banners estáticos usados enquanto o WP não está configurado
export interface FallbackBanner {
  id: number;
  title: string;
  subtitle: string;
  desc: string;
  ctaText: string;
  ctaHref: string;
  overlayColor: string;
  image: string;
  bgImage: string;
}

export const FALLBACK_BANNERS: FallbackBanner[] = [
  {
    id: 1,
    title: "Aqui, aprender e mais experiencia",
    subtitle: "Licenciado Turma da Monica",
    desc: "Apoio escolar, Ingles, Robotica e Programacao com metodologia individualizada que desenvolve seu filho para o presente e o futuro.",
    ctaText: "Agendar aula gratis",
    ctaHref: "#lead",
    overlayColor: "#5A8A2A",
    image: "/images/turma-da-monica/pose-6.png",
    bgImage: "/images/hero/banner-sala-aula.jpg",
  },
  {
    id: 2,
    title: "4 cursos para todas as idades",
    subtitle: "Nossos Cursos",
    desc: "Do apoio escolar as profissoes do futuro. Cada curso com metodologia propria, material exclusivo e acompanhamento individualizado.",
    ctaText: "Conheca os cursos",
    ctaHref: "#cursos",
    overlayColor: "#0277BD",
    image: "/images/hero/aluna-computador.jpg",
    bgImage: "/images/hero/banner-robotica.jpg",
  },
  {
    id: 3,
    title: "Invista no futuro da educacao",
    subtitle: "Seja um Franqueado",
    desc: "Micro franquia com mais de 100 unidades no Brasil. Investimento a partir de R$90 mil com retorno em ate 12 meses.",
    ctaText: "Quero ser franqueado",
    ctaHref: "#franquia",
    overlayColor: "#3949AB",
    image: "/images/turma-da-monica/pose-10.png",
    bgImage: "/images/hero/banner-recepcao.jpg",
  },
];
