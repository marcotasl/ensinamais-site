import { BookOpenCheck, CalendarClock, MessagesSquare, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface PathLink {
  label: string;
  href?: string;
}

export interface LearningPath {
  id: string;
  eyebrow: string;
  title: string;
  desc: string;
  Icon: LucideIcon;
  color: string;
  light: string;
  ctaLabel: string;
  ctaHref: string;
  items: PathLink[];
}

export interface CourseCombo {
  id: string;
  courses: string;
  hours: string;
  title: string;
  desc: string;
}

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: "desempenho-escolar",
    eyebrow: "Trilha 01",
    title: "Quero melhorar o desempenho escolar do meu filho",
    desc: "Para crianças que precisam de mais segurança, acompanhamento e evolução nas principais disciplinas da escola.",
    Icon: BookOpenCheck,
    color: "bg-em-blue",
    light: "bg-em-blue-pale",
    ctaLabel: "Ver cursos de apoio",
    ctaHref: "/cursos/apoio-escolar",
    items: [
      { label: "Português", href: "/cursos/apoio-escolar/portugues-apoio-escolar-2-horas-semanais-presencial" },
      { label: "Matemática", href: "/cursos/apoio-escolar/matematica-apoio-escolar-2-horas-presencial" },
      { label: "Inglês", href: "/cursos/ingles-ensina" },
    ],
  },
  {
    id: "preparar-futuro",
    eyebrow: "Trilha 02",
    title: "Quero preparar meu filho para o futuro",
    desc: "Para desenvolver criatividade, raciocínio lógico, tecnologia, comunicação e habilidades digitais.",
    Icon: Rocket,
    color: "bg-em-orange",
    light: "bg-[#FFF7E6]",
    ctaLabel: "Ver cursos de tecnologia",
    ctaHref: "/cursos/programacao-ensina",
    items: [
      { label: "Programação", href: "/cursos/programacao-ensina" },
      { label: "Robótica", href: "/cursos/robotica-ensina" },
      { label: "Informática" },
      { label: "Youtuber", href: "/cursos/programacao-ensina/curso-youtuber" },
      { label: "Internet e redes sociais" },
    ],
  },
  {
    id: "contraturno",
    eyebrow: "Trilha 03",
    title: "Quero uma atividade completa no contraturno escolar",
    desc: "Para famílias que buscam uma rotina produtiva, educativa e segura fora do horário da escola.",
    Icon: CalendarClock,
    color: "bg-em-green",
    light: "bg-em-green-pale",
    ctaLabel: "Conhecer combos",
    ctaHref: "#combos",
    items: [
      { label: "Apoio escolar" },
      { label: "Robótica" },
      { label: "Programação" },
      { label: "Inglês" },
    ],
  },
  {
    id: "orientacao",
    eyebrow: "Trilha 04",
    title: "Ainda não sei qual caminho meu filho precisa",
    desc: "A Ensina Mais entende o perfil do seu filho e indica a melhor opção de curso ou combo.",
    Icon: MessagesSquare,
    color: "bg-em-coral",
    light: "bg-em-coral-pale",
    ctaLabel: "Pedir orientação",
    ctaHref: "#lead",
    items: [
      { label: "Avaliação do perfil" },
      { label: "Indicação da trilha" },
      { label: "Contato da unidade" },
    ],
  },
];

export const COURSE_COMBOS: CourseCombo[] = [
  {
    id: "aprende-cria",
    courses: "Apoio + Robótica",
    hours: "4h",
    title: "Combo Aprende & Cria",
    desc: "Escola forte, mente criativa",
  },
  {
    id: "aprende-cria-intensivo",
    courses: "Apoio 4h + Robótica",
    hours: "6h",
    title: "Combo Aprende & Cria Intensivo",
    desc: "Mesma trilha, com reforço dobrado",
  },
  {
    id: "aprende-programa",
    courses: "Apoio + Programação",
    hours: "4h",
    title: "Combo Aprende & Programa",
    desc: "Base escolar com lógica de programação",
  },
  {
    id: "aprende-programa-intensivo",
    courses: "Apoio 4h + Programação",
    hours: "6h",
    title: "Combo Aprende & Programa Intensivo",
    desc: "Mais reforço, mesma pegada digital",
  },
  {
    id: "aprende-comunica",
    courses: "Apoio + Inglês",
    hours: "4h",
    title: "Combo Aprende & Comunica",
    desc: "Desempenho escolar com fluência no idioma",
  },
  {
    id: "aprende-comunica-intensivo",
    courses: "Apoio 4h + Inglês",
    hours: "6h",
    title: "Combo Aprende & Comunica Intensivo",
    desc: "Acompanhamento ampliado com Inglês",
  },
  {
    id: "mente-maker",
    courses: "Robótica + Programação",
    hours: "4h",
    title: "Combo Mente Maker",
    desc: "Tecnologia pura, do código ao projeto",
  },
  {
    id: "codigo-global",
    courses: "Inglês + Programação",
    hours: "4h",
    title: "Combo Código Global",
    desc: "Programação com a língua da tecnologia",
  },
  {
    id: "inventa-ingles",
    courses: "Inglês + Robótica",
    hours: "4h",
    title: "Combo Inventa em Inglês",
    desc: "Idioma e mão na massa",
  },
  {
    id: "futuro-completo",
    courses: "Apoio + Programação + Robótica",
    hours: "6h",
    title: "Combo Futuro Completo",
    desc: "Escola e tecnologia de ponta a ponta",
  },
  {
    id: "futuro-completo-intensivo",
    courses: "Apoio 4h + Programação + Robótica",
    hours: "8h",
    title: "Combo Futuro Completo Intensivo",
    desc: "A versão mais robusta da trilha tech",
  },
  {
    id: "mundo-completo",
    courses: "Apoio + Inglês + Robótica",
    hours: "6h",
    title: "Combo Mundo Completo",
    desc: "Escola, idioma e tecnologia",
  },
  {
    id: "mundo-completo-intensivo",
    courses: "Apoio 4h + Inglês + Robótica",
    hours: "8h",
    title: "Combo Mundo Completo Intensivo",
    desc: "Máximo acompanhamento nas três frentes",
  },
  {
    id: "geracao-tech",
    courses: "Programação + Robótica + Inglês",
    hours: "6h",
    title: "Combo Geração Tech",
    desc: "A trilha 100% futuro, sem reforço",
  },
];
