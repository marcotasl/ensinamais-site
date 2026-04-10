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
    title: "Onde aprender é uma experiência transformadora",
    subtitle: "Licenciado Turma da Mônica",
    desc: "Apoio Escolar, Inglês, Robótica e Programação com metodologia individualizada que respeita o ritmo de cada criança. Mais de 100 escolas em todo o Brasil.",
    ctaText: "Agende uma aula grátis",
    ctaHref: "#lead",
    overlayColor: "#5A8A2A",
    image: "/images/turma-da-monica/pose-6.png",
    bgImage: "/images/hero/banner-sala-aula.jpg",
  },
  {
    id: 2,
    title: "Cursos que preparam para o presente e o futuro",
    subtitle: "Do reforço escolar à programação",
    desc: "Português, Matemática, Robótica Educacional, Programação e Inglês — cada curso com material exclusivo, aulas interativas e acompanhamento individualizado.",
    ctaText: "Conheça nossos cursos",
    ctaHref: "#cursos",
    overlayColor: "#0277BD",
    image: "/images/hero/aluna-computador.jpg",
    bgImage: "/images/hero/banner-robotica.jpg",
  },
  {
    id: 3,
    title: "Transforme vidas e construa seu próprio negócio",
    subtitle: "Seja um franqueado",
    desc: "A microfranquia de educação mais premiada do Brasil. Investimento a partir de R$120 mil, rentabilidade de 30 a 40% e retorno estimado em até 12 meses.",
    ctaText: "Quero ser franqueado",
    ctaHref: "#franquia",
    overlayColor: "#3949AB",
    image: "/images/turma-da-monica/pose-10.png",
    bgImage: "/images/hero/banner-recepcao.jpg",
  },
];
