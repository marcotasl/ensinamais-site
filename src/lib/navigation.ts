// Sitemap baseado no site atual ensinamais.com.br

export interface SubCourse {
  label: string;
  href: string;
}

export interface CourseCategory {
  title: string;
  slug: string;
  href: string;
  color: string;
  icon: string;
  courses: SubCourse[];
}

export interface NavDropdown {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const COURSE_CATEGORIES: CourseCategory[] = [
  {
    title: "Apoio Escolar",
    slug: "apoio-escolar",
    href: "/cursos/apoio-escolar",
    color: "#039BE5",
    icon: "BookOpen",
    courses: [
      { label: "Matemática — 2h semanais", href: "/cursos/apoio-escolar/matematica-2h" },
      { label: "Matemática — 4h semanais", href: "/cursos/apoio-escolar/matematica-4h" },
      { label: "Português — 2h semanais", href: "/cursos/apoio-escolar/portugues-2h" },
      { label: "Português — 4h semanais", href: "/cursos/apoio-escolar/portugues-4h" },
    ],
  },
  {
    title: "Robótica",
    slug: "robotica",
    href: "/cursos/robotica",
    color: "#7CB342",
    icon: "Cpu",
    courses: [
      { label: "Robótica Educacional", href: "/cursos/robotica/educacional" },
      { label: "Robótica Little Kids", href: "/cursos/robotica/little-kids" },
      { label: "Robótica Infantil", href: "/cursos/robotica/infantil" },
    ],
  },
  {
    title: "Programação",
    slug: "programacao",
    href: "/cursos/programacao",
    color: "#FF9800",
    icon: "Monitor",
    courses: [
      { label: "Trilha Code", href: "/cursos/programacao/trilha-code" },
      { label: "Games", href: "/cursos/programacao/games" },
      { label: "Apps", href: "/cursos/programacao/apps" },
      { label: "Youtuber", href: "/cursos/programacao/youtuber" },
      { label: "Minecraft Educacional", href: "/cursos/programacao/minecraft" },
    ],
  },
  {
    title: "Inglês",
    slug: "ingles",
    href: "/cursos/ingles",
    color: "#EF5350",
    icon: "Globe",
    courses: [
      { label: "Inglês Presencial", href: "/cursos/ingles/presencial" },
    ],
  },
];

export const MAIN_NAV: NavDropdown[] = [
  {
    label: "Cursos",
    href: "/cursos",
  },
  {
    label: "Escolas",
    href: "/escolas",
  },
  {
    label: "Sobre Nós",
    href: "/sobre",
    children: [
      { label: "Conheça a Ensina Mais", href: "/sobre" },
      { label: "Metodologia", href: "/sobre/metodologia" },
      { label: "Benefícios", href: "/sobre/beneficios" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Fale Conosco",
    href: "/contato",
  },
];

export const PORTAL_LINKS = [
  { label: "Portal do Aluno", href: "#" },
];
