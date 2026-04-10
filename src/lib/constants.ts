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
    desc: "Reforço individualizado em Português e Matemática com ensino híbrido, acompanhamento contínuo e relatórios de evolução para os pais.",
    color: "#039BE5",
    light: "#E1F5FE",
    img: "/images/courses/apoio-escolar.jpg",
  },
  {
    icon: Cpu,
    title: "Robótica Educacional",
    desc: "Da montagem à programação: uma trilha completa que exercita raciocínio lógico, criatividade e resolução de problemas na prática.",
    color: "#7CB342",
    light: "#F1F8E9",
    img: "/images/courses/robotica.jpg",
  },
  {
    icon: Monitor,
    title: "Programação",
    desc: "Games, apps, Minecraft e lógica de programação — de forma divertida e leve, atendendo às novas demandas do mercado com abordagem STEAM.",
    color: "#FF9800",
    light: "#FFF3E0",
    img: "/images/courses/programacao.jpg",
  },
  {
    icon: Globe,
    title: "Inglês",
    desc: "Fluência desde a infância com abordagem comunicativa, imersão no universo bilíngue e material didático exclusivo para cada faixa etária.",
    color: "#EF5350",
    light: "#FFEBEE",
    img: "/images/courses/ingles.jpg",
  },
];

export const REASONS: Reason[] = [
  {
    icon: Users,
    title: "Ensino Individualizado",
    desc: "Cada aluno no seu próprio ritmo, sem formação de turmas, com mediação de instrutores especializados e plano pedagógico personalizado.",
  },
  {
    icon: Zap,
    title: "Aulas Digitais Interativas",
    desc: "Gamificação, dinâmicas e jogos educativos que transformam o aprendizado em uma experiência envolvente e significativa para a criança.",
  },
  {
    icon: TrendingUp,
    title: "Acompanhamento em Tempo Real",
    desc: "Pais e responsáveis acompanham a evolução do aluno com avaliações contínuas, relatórios de desempenho e feedback dos educadores.",
  },
  {
    icon: Heart,
    title: "Universo Turma da Mônica",
    desc: "Licenciamento exclusivo do Estúdio Maurício de Sousa que gera identificação imediata e confiança nas famílias brasileiras.",
  },
  {
    icon: Award,
    title: "Metodologia Comprovada",
    desc: "Mais de 10 anos de resultados consistentes, unindo o melhor das teorias construtivista e sociocultural com tecnologia educacional.",
  },
  {
    icon: Sparkles,
    title: "Profissões do Futuro",
    desc: "Robótica, programação e inglês preparando crianças e adolescentes para um mercado de trabalho em constante transformação.",
  },
];

export const STATS: Stat[] = [
  { icon: DollarSign, number: "120", prefix: "R$", suffix: " mil", label: "Investimento inicial" },
  { icon: TrendingUp, number: "40", prefix: "", suffix: "%", label: "Lucratividade média" },
  { icon: Clock, number: "12", prefix: "", suffix: " meses", label: "Payback estimado" },
  { icon: Building2, number: "100", prefix: "+", suffix: "", label: "Escolas no Brasil" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Meu filho estava com muita dificuldade em matemática. Em poucos meses na Ensina Mais, a evolução foi incrível — ele ganhou confiança e as notas subiram de verdade!",
    name: "Carla Mendes",
    city: "São Paulo, SP",
    img: "/images/turma-da-monica/pose-14.png",
    stars: 5,
  },
  {
    quote: "A robótica despertou no meu filho um interesse que eu nunca tinha visto. Ele chega em casa animado, querendo construir coisas e explicar como tudo funciona.",
    name: "Roberto Silva",
    city: "Campinas, SP",
    img: "/images/turma-da-monica/pose-4.png",
    stars: 5,
  },
  {
    quote: "A metodologia individualizada faz toda a diferença. Minha filha tem acompanhamento personalizado e agora adora ir pra aula. Recomendo de olhos fechados!",
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
      { label: "Benefícios", href: "#metodologia" },
      { label: "Escolas", href: "#escolas" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Institucional",
    links: [
      { label: "Seja um Franqueado", href: "#franquia" },
      { label: "Portal do Aluno", href: "#" },
      { label: "Sobre Nós", href: "#sobre" },
      { label: "Fale Conosco", href: "#lead" },
    ],
  },
];

export const REASON_COLORS = ["#039BE5", "#7CB342", "#EF5350", "#FDD835", "#5C6BC0", "#FF9800"];

export const SCHOOL_IMAGES = [
  { src: "/images/schools/fachada-1.jpg", label: "Fachada da unidade" },
  { src: "/images/schools/fachada-2.jpg", label: "Unidade colonial" },
  { src: "/images/schools/recepcao.jpg", label: "Recepção" },
  { src: "/images/schools/lab-computacao.jpg", label: "Laboratório de informática" },
];
