export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string; // ISO
  readTime: string;
  cover: string;
  content: string; // markdown-ish
}

export const BLOG_CATEGORIES = [
  "Todos",
  "Apoio Escolar",
  "Robótica",
  "Programação",
  "Inglês",
  "Família",
  "Educação",
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "sinais-apoio-escolar",
    title: "5 sinais de que seu filho precisa de apoio escolar",
    excerpt: "Identificar cedo as dificuldades escolares pode evitar um ciclo de frustração. Veja os principais sinais que os pais devem observar no dia a dia.",
    category: "Apoio Escolar",
    author: "Equipe Ensina Mais",
    date: "2026-03-28",
    readTime: "6 min",
    cover: "/images/blog/cover-1.jpg",
    content: "Conteúdo do post aqui...",
  },
  {
    slug: "robotica-para-criancas",
    title: "Robótica educacional: por que crianças de 4 anos já podem começar",
    excerpt: "Os primeiros anos são fundamentais para desenvolver raciocínio lógico. A robótica na primeira infância trabalha habilidades essenciais para toda a vida.",
    category: "Robótica",
    author: "Equipe Ensina Mais",
    date: "2026-03-22",
    readTime: "5 min",
    cover: "/images/blog/cover-2.jpg",
    content: "Conteúdo do post aqui...",
  },
  {
    slug: "melhor-franquia-educacao",
    title: "Como escolher a melhor franquia de educação em 2026",
    excerpt: "O mercado de microfranquias educacionais cresce ano a ano. Entenda os critérios para escolher uma franquia sólida, rentável e com propósito.",
    category: "Educação",
    author: "Equipe Ensina Mais",
    date: "2026-03-15",
    readTime: "8 min",
    cover: "/images/blog/cover-3.jpg",
    content: "Conteúdo do post aqui...",
  },
  {
    slug: "como-ajudar-filho-matematica",
    title: "Como ajudar seu filho a gostar de matemática",
    excerpt: "A matemática é a disciplina que mais gera bloqueios em crianças. Veja estratégias práticas que pais podem usar em casa para mudar essa relação.",
    category: "Apoio Escolar",
    author: "Equipe Ensina Mais",
    date: "2026-03-10",
    readTime: "7 min",
    cover: "/images/blog/cover-4.jpg",
    content: "Conteúdo do post aqui...",
  },
  {
    slug: "programacao-profissoes-futuro",
    title: "Programação para crianças: preparando para as profissões do futuro",
    excerpt: "Até 2030, 65% das profissões ainda não existem. Ensinar lógica de programação desde cedo prepara seu filho para um mundo em constante mudança.",
    category: "Programação",
    author: "Equipe Ensina Mais",
    date: "2026-03-05",
    readTime: "6 min",
    cover: "/images/blog/cover-5.jpg",
    content: "Conteúdo do post aqui...",
  },
  {
    slug: "ingles-desde-a-infancia",
    title: "Inglês desde a infância: mitos e verdades",
    excerpt: "Aprender um segundo idioma cedo atrapalha o português? Gera confusão? Desmistificamos as principais crenças sobre educação bilíngue.",
    category: "Inglês",
    author: "Equipe Ensina Mais",
    date: "2026-02-28",
    readTime: "5 min",
    cover: "/images/blog/cover-6.jpg",
    content: "Conteúdo do post aqui...",
  },
  {
    slug: "rotina-de-estudos-criancas",
    title: "Como criar uma rotina de estudos saudável em casa",
    excerpt: "Rotina não precisa ser rígida para ser eficaz. Veja como estruturar os estudos do seu filho respeitando o ritmo dele.",
    category: "Família",
    author: "Equipe Ensina Mais",
    date: "2026-02-20",
    readTime: "6 min",
    cover: "/images/blog/cover-7.jpg",
    content: "Conteúdo do post aqui...",
  },
  {
    slug: "turma-da-monica-educacao",
    title: "O papel da Turma da Mônica na educação brasileira",
    excerpt: "Por mais de 60 anos, os personagens de Mauricio de Sousa ensinaram gerações. Entenda como usamos esse universo para potencializar o aprendizado.",
    category: "Educação",
    author: "Equipe Ensina Mais",
    date: "2026-02-14",
    readTime: "7 min",
    cover: "/images/blog/cover-8.jpg",
    content: "Conteúdo do post aqui...",
  },
  {
    slug: "tecnologia-e-criancas",
    title: "Tecnologia e crianças: como equilibrar telas e aprendizado",
    excerpt: "Não é sobre evitar telas, é sobre qualificar o tempo. Dicas para transformar o tempo digital em oportunidade educativa.",
    category: "Família",
    author: "Equipe Ensina Mais",
    date: "2026-02-08",
    readTime: "6 min",
    cover: "/images/blog/cover-9.jpg",
    content: "Conteúdo do post aqui...",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
