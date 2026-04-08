// Sitemap baseado no site atual ensinamais.com.br

export interface SubCourse {
  label: string;
  href: string;
}

export interface CourseCategory {
  title: string;
  color: string;
  icon: string; // lucide icon name
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
    color: "#039BE5",
    icon: "BookOpen",
    courses: [
      { label: "Matematica — 2h semanais", href: "/cursos/apoio-escolar/matematica-2h" },
      { label: "Matematica — 4h semanais", href: "/cursos/apoio-escolar/matematica-4h" },
      { label: "Portugues — 2h semanais", href: "/cursos/apoio-escolar/portugues-2h" },
      { label: "Portugues — 4h semanais", href: "/cursos/apoio-escolar/portugues-4h" },
    ],
  },
  {
    title: "Robotica",
    color: "#7CB342",
    icon: "Cpu",
    courses: [
      { label: "Robotica Educacional", href: "/cursos/robotica/educacional" },
      { label: "Robotica Little Kids", href: "/cursos/robotica/little-kids" },
      { label: "Robotica Infantil", href: "/cursos/robotica/infantil" },
    ],
  },
  {
    title: "Programacao",
    color: "#FF9800",
    icon: "Monitor",
    courses: [
      { label: "Trilha Code", href: "/cursos/programacao/trilha-code" },
      { label: "Games — dos 6 aos 14 anos", href: "/cursos/programacao/games" },
      { label: "Apps", href: "/cursos/programacao/apps" },
      { label: "Youtuber", href: "/cursos/programacao/youtuber" },
      { label: "Minecraft", href: "/cursos/programacao/minecraft" },
    ],
  },
  {
    title: "Ingles",
    color: "#EF5350",
    icon: "Globe",
    courses: [
      { label: "Ingles — Presencial", href: "/cursos/ingles/presencial" },
    ],
  },
];

export const MAIN_NAV: NavDropdown[] = [
  {
    label: "Cursos",
    href: "/cursos",
    // mega menu handled separately
  },
  {
    label: "Escolas",
    href: "/escolas",
  },
  {
    label: "Sobre Nos",
    href: "/sobre",
    children: [
      { label: "Conheca a Ensina Mais", href: "/sobre" },
      { label: "Metodologia", href: "/sobre/metodologia" },
      { label: "Beneficios", href: "/sobre/beneficios" },
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
