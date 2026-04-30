// Sitemap baseado no site atual ensinamais.com.br
// URLs preservadas do XML real (sem redirects).

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
      { label: "Matemática — 2h semanais", href: "/cursos/apoio-escolar/matematica-apoio-escolar-2-horas-presencial" },
      { label: "Matemática — 4h semanais", href: "/cursos/apoio-escolar/matematica-apoio-escolar-4-horas-presencial" },
      { label: "Português — 2h semanais", href: "/cursos/apoio-escolar/portugues-apoio-escolar-2-horas-semanais-presencial" },
      { label: "Português — 4h semanais", href: "/cursos/apoio-escolar/portugues-apoio-escolar-4-horas-semanais-presencial" },
    ],
  },
  {
    title: "Robótica",
    slug: "robotica-ensina",
    href: "/cursos/robotica-ensina",
    color: "#7CB342",
    icon: "Cpu",
    courses: [
      { label: "Robótica Educacional", href: "/cursos/robotica-ensina/robotica-educacional-presencial" },
      { label: "Robótica Little Kids", href: "/cursos/robotica-ensina/robotica-little-kids-presencial" },
      { label: "Robótica Infantil", href: "/cursos/robotica-ensina/robotica-infantil-presencial" },
    ],
  },
  {
    title: "Programação",
    slug: "programacao-ensina",
    href: "/cursos/programacao-ensina",
    color: "#FF9800",
    icon: "Monitor",
    courses: [
      { label: "Trilha Code", href: "/cursos/programacao-ensina/trilha-code-presencial" },
      { label: "Games", href: "/cursos/programacao-ensina/games-presencial" },
      { label: "Apps", href: "/cursos/programacao-ensina/apps-presencial" },
      { label: "Youtuber", href: "/cursos/programacao-ensina/curso-youtuber" },
      { label: "Minecraft Educacional", href: "/cursos/programacao-ensina/curso-minecraft" },
    ],
  },
  {
    title: "Inglês",
    slug: "ingles-ensina",
    href: "/cursos/ingles-ensina",
    color: "#EF5350",
    icon: "Globe",
    courses: [
      { label: "Inglês Presencial", href: "/cursos/ingles-ensina/ingles-presencial" },
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
    href: "/sobre-nos",
    children: [
      { label: "Conheça a Ensina Mais", href: "/conheca-a-ensinamais" },
      { label: "Nossa História", href: "/nossa-historia" },
      { label: "Metodologia", href: "/metodologia" },
      { label: "Benefícios", href: "/beneficios" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Fale Conosco",
    href: "/fale-conosco",
  },
];

export const PORTAL_LINKS = [
  { label: "Portal do Aluno", href: "#" },
];
