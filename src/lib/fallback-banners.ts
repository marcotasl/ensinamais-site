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
    title: "Seu filho pode aprender com mais confiança.",
    subtitle: "Apoio escolar com a Turma da Mônica",
    desc: "Apoio escolar, inglês, robótica e programação com acompanhamento individualizado, rotina de estudos e uma metodologia que respeita o ritmo de cada criança.",
    ctaText: "Agende uma aula experimental gratuita",
    ctaHref: "#lead",
    overlayColor: "#5A8A2A",
    image: "/images/turma-da-monica/pose-6.png",
    bgImage: "/images/hero/banner-sala-aula.jpg",
  },
  {
    id: 2,
    title: "Mais segurança para aprender.",
    subtitle: "Acolhimento e confiança",
    desc: "Na Ensina Mais, seu filho encontra um ambiente acolhedor para superar dificuldades, ganhar autonomia e avançar com mais confiança em cada etapa.",
    ctaText: "Agende uma aula gratuita",
    ctaHref: "#lead",
    overlayColor: "#0277BD",
    image: "/images/hero/aluna-computador.jpg",
    bgImage: "/images/hero/banner-robotica.jpg",
  },
  {
    id: 3,
    title: "Mais do que reforço: habilidades para hoje e para o futuro.",
    subtitle: "Cursos que abrem caminhos",
    desc: "Apoio escolar, inglês, robótica e programação para desenvolver raciocínio, criatividade, comunicação, autonomia e confiança em cada fase da aprendizagem.",
    ctaText: "Conheça nossos cursos",
    ctaHref: "#cursos",
    overlayColor: "#3949AB",
    image: "/images/turma-da-monica/pose-10.png",
    bgImage: "/images/hero/banner-recepcao.jpg",
  },
];
