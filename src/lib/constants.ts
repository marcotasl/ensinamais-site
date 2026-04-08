import {
  BookOpen,
  Cpu,
  Monitor,
  Globe,
  Users,
  Zap,
  TrendingUp,
  Heart,
  Award,
  Sparkles,
  DollarSign,
  Clock,
  Building2,
} from "lucide-react";
import type { Course, Reason, Stat, Testimonial, NavLink, FooterLinkGroup } from "@/types";

export const COURSES: Course[] = [
  {
    icon: BookOpen,
    title: "Apoio Escolar",
    desc: "Reforco individualizado em Portugues e Matematica com ensino hibrido e acompanhamento continuo.",
    color: "#039BE5",
    light: "#E1F5FE",
    img: "/images/courses/apoio-escolar.jpg",
  },
  {
    icon: Cpu,
    title: "Robotica Educacional",
    desc: "Da montagem a programacao: raciocinio logico, criatividade e resolucao de problemas na pratica.",
    color: "#7CB342",
    light: "#F1F8E9",
    img: "/images/courses/robotica.jpg",
  },
  {
    icon: Monitor,
    title: "Programacao",
    desc: "Games, apps, Minecraft e logica de programacao para criancas e adolescentes dos 6 aos 14 anos.",
    color: "#FF9800",
    light: "#FFF3E0",
    img: "/images/courses/programacao.jpg",
  },
  {
    icon: Globe,
    title: "Ingles",
    desc: "Fluencia desde a infancia com abordagem comunicativa e imersao no universo bilingue.",
    color: "#EF5350",
    light: "#FFEBEE",
    img: "/images/courses/ingles.jpg",
  },
];

export const REASONS: Reason[] = [
  {
    icon: Users,
    title: "Ensino Individualizado",
    desc: "Cada aluno no seu ritmo, sem formacao de turmas, com mediacao de instrutor especializado.",
  },
  {
    icon: Zap,
    title: "Aulas Digitais Interativas",
    desc: "Gamificacao, dinamicas e jogos que transformam aprendizado em experiencia envolvente.",
  },
  {
    icon: TrendingUp,
    title: "Feedback em Tempo Real",
    desc: "Pais e alunos acompanham a evolucao com avaliacoes continuas e relatorios de desempenho.",
  },
  {
    icon: Heart,
    title: "Universo Turma da Monica",
    desc: "Licenciamento exclusivo que gera identificacao imediata e confianca nas familias brasileiras.",
  },
  {
    icon: Award,
    title: "Metodologia Comprovada",
    desc: "12+ anos de resultados com o melhor das teorias construtivista e sociocultural.",
  },
  {
    icon: Sparkles,
    title: "Profissoes do Futuro",
    desc: "Robotica, programacao e ingles preparando criancas para um mercado em transformacao.",
  },
];

export const STATS: Stat[] = [
  { icon: DollarSign, number: "90", prefix: "R$", suffix: " mil", label: "Investimento inicial" },
  { icon: TrendingUp, number: "40", prefix: "", suffix: "%", label: "Rentabilidade media" },
  { icon: Clock, number: "12", prefix: "", suffix: " meses", label: "Retorno do investimento" },
  { icon: Building2, number: "100", prefix: "+", suffix: "", label: "Escolas no Brasil" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Meu filho estava com muita dificuldade em matematica. Em poucos meses na Ensina Mais, a evolucao foi incrivel. Ele ganhou confianca e as notas subiram!",
    name: "Carla Mendes",
    city: "Sao Paulo, SP",
    img: "/images/turma-da-monica/pose-14.png",
    stars: 5,
  },
  {
    quote: "A robotica despertou no meu filho um interesse que eu nunca tinha visto. Ele chega em casa animado, querendo construir coisas e explicar como funciona!",
    name: "Roberto Silva",
    city: "Campinas, SP",
    img: "/images/turma-da-monica/pose-4.png",
    stars: 5,
  },
  {
    quote: "A metodologia individualizada faz toda a diferenca. Minha filha tem acompanhamento personalizado e agora ama ir pra aula. Recomendo muito!",
    name: "Juliana Ferreira",
    city: "Rio de Janeiro, RJ",
    img: "/images/turma-da-monica/pose-15.png",
    stars: 5,
  },
];

export const NAV_LINKS: NavLink[] = [
  { label: "Cursos", href: "#cursos" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Escolas", href: "#escolas" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Franquia", href: "#franquia" },
];

export const FOOTER_LINKS: FooterLinkGroup[] = [
  {
    title: "Links",
    links: [
      { label: "Cursos", href: "#cursos" },
      { label: "Metodologia", href: "#metodologia" },
      { label: "Beneficios", href: "#metodologia" },
      { label: "Escolas", href: "#escolas" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Institucional",
    links: [
      { label: "Seja um Franqueado", href: "#franquia" },
      { label: "Portal do Aluno", href: "#" },
      { label: "Sobre Nos", href: "#sobre" },
      { label: "Fale Conosco", href: "#lead" },
    ],
  },
];

export const REASON_COLORS = ["#039BE5", "#7CB342", "#EF5350", "#FDD835", "#5C6BC0", "#FF9800"];

export const SCHOOL_IMAGES = [
  { src: "/images/schools/fachada-1.jpg", label: "Fachada da unidade" },
  { src: "/images/schools/fachada-2.jpg", label: "Unidade colonial" },
  { src: "/images/schools/recepcao.jpg", label: "Recepcao" },
  { src: "/images/schools/lab-computacao.jpg", label: "Laboratorio de informatica" },
];
