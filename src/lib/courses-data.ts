import { BookOpen, Cpu, Monitor, Globe, Brain, Lightbulb, Users, Puzzle, Code, Gamepad2, Smartphone, Video, Box, Languages, Calculator, Pencil, Baby, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// -----------------------------------------------------------------------------
// CATEGORIES (4) — "Apoio Escolar", "Robótica", "Programação", "Inglês"
// -----------------------------------------------------------------------------

export interface Category {
  slug: string;
  title: string;
  subtitle: string;
  desc: string;
  longDesc: string;
  icon: LucideIcon;
  color: string;
  light: string;
  ageRange: string;
  img: string;
  skills: { icon: LucideIcon; title: string; desc: string }[];
  benefits: string[];
}

export const CATEGORIES: Category[] = [
  {
    slug: "apoio-escolar",
    title: "Apoio Escolar",
    subtitle: "Português e Matemática",
    desc: "Reforço individualizado em Português e Matemática com ensino híbrido, acompanhamento contínuo e relatórios de evolução para os pais.",
    longDesc: "Cada aluno tem seu próprio ritmo. Na Ensina Mais, o apoio escolar combina aulas digitais interativas com mediação de instrutores especializados, garantindo que seu filho supere dificuldades em Português e Matemática de forma personalizada e eficaz.",
    icon: BookOpen,
    color: "#039BE5",
    light: "#E1F5FE",
    ageRange: "4 a 15 anos",
    img: "/images/courses/apoio-escolar.jpg",
    skills: [
      { icon: Brain, title: "Raciocínio Lógico", desc: "Resolução de problemas matemáticos com pensamento estruturado." },
      { icon: BookOpen, title: "Leitura e Escrita", desc: "Compreensão textual, produção de texto e gramática aplicada." },
      { icon: Lightbulb, title: "Autonomia no Estudo", desc: "Técnicas de estudo e organização para aprender sozinho." },
      { icon: Users, title: "Confiança Escolar", desc: "Superação de dificuldades e melhora da autoestima acadêmica." },
    ],
    benefits: [
      "Acompanhamento individual com educadores especializados",
      "Aulas 100% digitais e interativas",
      "Material didático exclusivo com atividades práticas",
      "Portal dos pais com relatórios de evolução",
      "Plataforma online com conteúdo extra disponível 24h",
      "Games educativos que desenvolvem habilidades cognitivas",
    ],
  },
  {
    slug: "robotica",
    title: "Robótica",
    subtitle: "Educacional e Infantil",
    desc: "Raciocínio lógico, criatividade e resolução de problemas na prática com kits de robótica educacional.",
    longDesc: "A robótica educacional da Ensina Mais vai além de montar robôs. É uma metodologia STEAM completa que desenvolve raciocínio lógico, criatividade, trabalho em equipe e capacidade de resolver problemas reais — habilidades essenciais para o futuro.",
    icon: Cpu,
    color: "#7CB342",
    light: "#F1F8E9",
    ageRange: "4 a 15 anos",
    img: "/images/courses/robotica.jpg",
    skills: [
      { icon: Puzzle, title: "Resolução de Problemas", desc: "Desafios práticos que exigem criatividade e pensamento crítico." },
      { icon: Brain, title: "Raciocínio Lógico", desc: "Sequências, condicionais e loops aplicados à construção de robôs." },
      { icon: Users, title: "Trabalho em Equipe", desc: "Projetos colaborativos que desenvolvem comunicação e liderança." },
      { icon: Lightbulb, title: "Criatividade", desc: "Liberdade para criar, testar e iterar soluções próprias." },
    ],
    benefits: [
      "Kits de robótica completos fornecidos pela escola",
      "Aulas práticas com montagem e programação real",
      "Instrutores especializados em metodologia STEAM",
      "Participação em competições de robótica",
      "Desenvolvimento de soft skills como liderança e comunicação",
      "Projetos em equipe que simulam desafios do mundo real",
    ],
  },
  {
    slug: "programacao",
    title: "Programação",
    subtitle: "Games, apps e lógica",
    desc: "Games, apps, Minecraft e lógica de programação de forma divertida, preparando para as profissões do futuro.",
    longDesc: "Da criação de jogos no Scratch à programação de apps reais, nossos cursos de programação ensinam lógica computacional de forma divertida e prática. Seu filho aprende a pensar como um programador — uma habilidade essencial para qualquer carreira.",
    icon: Monitor,
    color: "#FF9800",
    light: "#FFF3E0",
    ageRange: "6 a 14 anos",
    img: "/images/courses/programacao.jpg",
    skills: [
      { icon: Code, title: "Lógica de Programação", desc: "Algoritmos, variáveis, condicionais e loops de forma visual e prática." },
      { icon: Gamepad2, title: "Criação de Games", desc: "Desenvolvimento de jogos 2D e 3D com ferramentas profissionais." },
      { icon: Smartphone, title: "Desenvolvimento de Apps", desc: "Criação de aplicativos móveis com interfaces funcionais." },
      { icon: Lightbulb, title: "Pensamento Computacional", desc: "Decomposição de problemas complexos em etapas simples." },
    ],
    benefits: [
      "Equipamentos e software fornecidos pela escola",
      "Projetos práticos com resultado tangível a cada módulo",
      "Gamificação que mantém o engajamento alto",
      "Introdução progressiva a linguagens reais (JavaScript, Python)",
      "Plataforma online com exercícios extras",
      "Preparação para profissões do futuro com abordagem STEAM",
    ],
  },
  {
    slug: "ingles",
    title: "Inglês",
    subtitle: "Fluência desde a infância",
    desc: "Fluência desde a infância com abordagem comunicativa, imersão e material didático exclusivo por faixa etária.",
    longDesc: "O inglês da Ensina Mais vai além da gramática. Com abordagem comunicativa e imersiva, seu filho desenvolve fluência natural desde cedo, usando o idioma em situações reais do dia a dia — com material didático exclusivo para cada faixa etária.",
    icon: Globe,
    color: "#EF5350",
    light: "#FFEBEE",
    ageRange: "4 a 15 anos",
    img: "/images/courses/ingles.jpg",
    skills: [
      { icon: Languages, title: "Comunicação Oral", desc: "Conversação, pronúncia e fluência desde as primeiras aulas." },
      { icon: BookOpen, title: "Leitura e Escrita", desc: "Compreensão de textos e produção escrita progressiva." },
      { icon: Brain, title: "Pensamento Bilíngue", desc: "Transição natural entre português e inglês no raciocínio." },
      { icon: Users, title: "Imersão Cultural", desc: "Contato com a cultura anglófona através de música, filmes e jogos." },
    ],
    benefits: [
      "Material didático exclusivo por faixa etária",
      "Abordagem comunicativa com máxima exposição ao inglês",
      "Aulas com jogos, músicas e dinâmicas imersivas",
      "Instrutores com fluência comprovada",
      "Acompanhamento individual do progresso",
      "Imersão progressiva — do português de apoio à aula 100% em inglês",
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

// -----------------------------------------------------------------------------
// COURSES (13) — individual courses belonging to a category
// -----------------------------------------------------------------------------

export interface Course {
  slug: string;
  categorySlug: string;
  title: string;
  subtitle: string;
  desc: string;
  longDesc: string;
  objective: string;
  icon: LucideIcon;
  ageRange: string;
  modality: string;
  duration: string;
  frequency: string;
  workload: string;
  img: string;
  audience: string[];
  modules: { title: string; desc: string }[];
  methodology: string;
  testimonial: { quote: string; name: string; city: string };
  faq: { q: string; a: string }[];
}

export const COURSES: Course[] = [
  // APOIO ESCOLAR
  {
    slug: "matematica-2h",
    categorySlug: "apoio-escolar",
    title: "Matemática — 2h semanais",
    subtitle: "Reforço de matemática",
    desc: "Reforço individualizado em Matemática com 2 horas semanais de aula.",
    longDesc: "Programa de manutenção e reforço pontual em Matemática. Ideal para alunos que precisam consolidar conteúdos vistos na escola, com ritmo e acompanhamento personalizados.",
    objective: "Reforçar os conteúdos de Matemática trabalhados na escola, com foco em operações, geometria, frações e resolução de problemas. O aluno avança no próprio ritmo, com avaliação diagnóstica e plano de estudos personalizado.",
    icon: Calculator,
    ageRange: "6 a 15 anos",
    modality: "Presencial",
    duration: "2 meses por módulo",
    frequency: "2h semanais",
    workload: "8 horas por módulo",
    img: "/images/courses/apoio-escolar.jpg",
    audience: [
      "Alunos que precisam de reforço pontual em matemática",
      "Crianças com dificuldades em operações básicas",
      "Estudantes que querem manter o desempenho escolar",
      "Pais que buscam acompanhamento extra sem alta carga horária",
    ],
    modules: [
      { title: "Avaliação Diagnóstica", desc: "Identificação dos pontos fortes e dificuldades do aluno." },
      { title: "Operações e Resolução de Problemas", desc: "Reforço em adição, subtração, multiplicação, divisão e problemas contextualizados." },
      { title: "Frações e Geometria", desc: "Trabalho progressivo com frações, decimais e noções de geometria." },
    ],
    methodology: "O aluno faz uma avaliação diagnóstica inicial e recebe um plano de estudos personalizado. As aulas combinam conteúdo digital interativo com mediação presencial do instrutor.",
    testimonial: {
      quote: "Meu filho estava com muita dificuldade em matemática. Em poucos meses, a evolução foi incrível — ele ganhou confiança e as notas subiram de verdade!",
      name: "Carla Mendes",
      city: "São Paulo, SP",
    },
    faq: [
      { q: "Qual a idade mínima?", a: "A partir de 6 anos. O conteúdo é adaptado para cada faixa etária e nível escolar." },
      { q: "2h semanais é suficiente?", a: "Sim, para reforço pontual e manutenção. Alunos com dificuldades mais acentuadas podem optar pelo programa de 4h." },
      { q: "Os pais recebem feedback?", a: "Sim. A cada módulo concluído, enviamos relatórios detalhados de evolução." },
      { q: "Qual o valor do curso?", a: "Os valores variam por unidade. Entre em contato com a escola mais perto de você." },
    ],
  },
  {
    slug: "matematica-4h",
    categorySlug: "apoio-escolar",
    title: "Matemática — 4h semanais",
    subtitle: "Reforço intensivo de matemática",
    desc: "Programa intensivo de matemática com 4 horas semanais para alunos com dificuldades mais acentuadas.",
    longDesc: "Programa intensivo de reforço em Matemática com 4 horas semanais. Recomendado para alunos que precisam de mais tempo de acompanhamento e exercícios práticos para consolidar o aprendizado.",
    objective: "Oferecer reforço aprofundado em Matemática com carga horária dobrada, permitindo cobrir mais conteúdo e praticar mais exercícios. O aluno evolui de forma mais rápida no seu próprio ritmo.",
    icon: Calculator,
    ageRange: "6 a 15 anos",
    modality: "Presencial",
    duration: "2 meses por módulo",
    frequency: "4h semanais",
    workload: "16 horas por módulo",
    img: "/images/courses/apoio-escolar.jpg",
    audience: [
      "Alunos com dificuldades significativas em matemática",
      "Estudantes em fase de recuperação escolar",
      "Crianças que precisam acelerar o aprendizado",
      "Famílias que buscam acompanhamento intensivo",
    ],
    modules: [
      { title: "Avaliação Diagnóstica", desc: "Identificação detalhada dos pontos fracos do aluno." },
      { title: "Fundamentos", desc: "Revisão completa de operações, frações e conceitos básicos." },
      { title: "Aplicação e Problemas", desc: "Resolução de problemas, geometria, lógica e interpretação matemática." },
    ],
    methodology: "O aluno faz uma avaliação diagnóstica inicial e recebe um plano de estudos personalizado. Com 4h semanais, há tempo extra para resolução de exercícios, tira-dúvidas e fixação.",
    testimonial: {
      quote: "A carga horária maior fez toda a diferença. Meu filho finalmente entendeu os conceitos que tinha dificuldade há anos.",
      name: "Paulo Henrique",
      city: "Curitiba, PR",
    },
    faq: [
      { q: "Qual a diferença entre 2h e 4h?", a: "O programa de 4h tem mais tempo para exercícios práticos, revisão e fixação de conteúdo. Recomendado para alunos com dificuldades maiores." },
      { q: "Posso migrar de 4h para 2h?", a: "Sim, conforme a evolução do aluno. O instrutor pode recomendar a redução da carga horária." },
      { q: "Tem acompanhamento dos pais?", a: "Sim, com relatórios detalhados de frequência e desempenho a cada módulo." },
      { q: "Qual o valor do curso?", a: "Os valores variam por unidade. Entre em contato com a escola mais perto de você." },
    ],
  },
  {
    slug: "portugues-2h",
    categorySlug: "apoio-escolar",
    title: "Português — 2h semanais",
    subtitle: "Reforço de português",
    desc: "Reforço individualizado em Português com 2 horas semanais de aula.",
    longDesc: "Programa de manutenção e reforço em Português. Trabalha leitura, interpretação, gramática e produção textual de forma prática e personalizada.",
    objective: "Desenvolver habilidades de leitura, interpretação, gramática e produção textual. O aluno trabalha no próprio ritmo, com foco nas dificuldades específicas identificadas na avaliação inicial.",
    icon: Pencil,
    ageRange: "6 a 15 anos",
    modality: "Presencial",
    duration: "2 meses por módulo",
    frequency: "2h semanais",
    workload: "8 horas por módulo",
    img: "/images/courses/apoio-escolar.jpg",
    audience: [
      "Alunos em fase de alfabetização",
      "Crianças com dificuldade em leitura ou escrita",
      "Estudantes que querem melhorar a produção textual",
      "Pais que buscam reforço pontual em português",
    ],
    modules: [
      { title: "Avaliação Diagnóstica", desc: "Identificação dos pontos fortes e dificuldades na língua portuguesa." },
      { title: "Leitura e Interpretação", desc: "Desenvolvimento da compreensão textual e análise de textos." },
      { title: "Gramática e Produção", desc: "Regras gramaticais aplicadas e exercícios de produção textual." },
    ],
    methodology: "O aluno faz uma avaliação diagnóstica inicial e recebe um plano de estudos personalizado. As aulas combinam leitura, exercícios de gramática e produção textual supervisionada.",
    testimonial: {
      quote: "Minha filha tinha muito medo de escrever. Hoje ela adora produzir textos e tem notas ótimas em redação.",
      name: "Luciana Martins",
      city: "Fortaleza, CE",
    },
    faq: [
      { q: "Qual a idade mínima?", a: "A partir de 6 anos, adaptado para alfabetização e ensino fundamental." },
      { q: "Trabalha redação para vestibular?", a: "Para alunos mais velhos, sim. O instrutor adapta o programa conforme o objetivo." },
      { q: "Ajuda com interpretação de texto?", a: "Sim, é um dos focos principais do curso de Português." },
      { q: "Qual o valor do curso?", a: "Os valores variam por unidade. Entre em contato com a escola mais perto de você." },
    ],
  },
  {
    slug: "portugues-4h",
    categorySlug: "apoio-escolar",
    title: "Português — 4h semanais",
    subtitle: "Reforço intensivo de português",
    desc: "Programa intensivo de português com 4 horas semanais para alunos com necessidades maiores.",
    longDesc: "Programa intensivo de reforço em Português com 4 horas semanais. Ideal para alunos em fase de alfabetização ou com dificuldades significativas em leitura, escrita e interpretação.",
    objective: "Oferecer reforço aprofundado em Português com o dobro da carga horária, permitindo maior tempo de prática em leitura, escrita e produção textual. Recomendado para alunos que precisam de acompanhamento intensivo.",
    icon: Pencil,
    ageRange: "6 a 15 anos",
    modality: "Presencial",
    duration: "2 meses por módulo",
    frequency: "4h semanais",
    workload: "16 horas por módulo",
    img: "/images/courses/apoio-escolar.jpg",
    audience: [
      "Alunos em fase de alfabetização com dificuldades",
      "Estudantes que precisam recuperar conteúdo escolar",
      "Crianças com dislexia ou outras dificuldades de leitura",
      "Jovens preparando-se para vestibular ou concursos",
    ],
    modules: [
      { title: "Avaliação Diagnóstica", desc: "Identificação detalhada das necessidades específicas do aluno." },
      { title: "Leitura e Compreensão", desc: "Trabalho intensivo de leitura, vocabulário e interpretação." },
      { title: "Gramática Aplicada", desc: "Regras gramaticais com exercícios práticos e contextualizados." },
      { title: "Produção Textual", desc: "Redação de diferentes gêneros com correção individualizada." },
    ],
    methodology: "Com 4h semanais, há tempo para leitura supervisionada, exercícios de gramática, produção textual e correção individualizada. O aluno evolui significativamente em cada módulo.",
    testimonial: {
      quote: "Meu filho melhorou muito a escrita e a leitura depois que começou no programa intensivo. Foi a melhor escolha que fizemos.",
      name: "Roberto Almeida",
      city: "Salvador, BA",
    },
    faq: [
      { q: "Trabalha com alunos disléxicos?", a: "Sim, com metodologia adaptada e acompanhamento individualizado por instrutores especializados." },
      { q: "Prepara para vestibular?", a: "Para alunos mais velhos, trabalhamos interpretação, redação dissertativa e análise literária." },
      { q: "Posso escolher o foco (leitura, escrita, gramática)?", a: "Sim, o plano de estudos é personalizado conforme as necessidades identificadas na avaliação." },
      { q: "Qual o valor do curso?", a: "Os valores variam por unidade. Entre em contato com a escola mais perto de você." },
    ],
  },

  // ROBÓTICA
  {
    slug: "educacional",
    categorySlug: "robotica",
    title: "Robótica Educacional",
    subtitle: "Projetos avançados e competições",
    desc: "Robótica avançada com programação, eletrônica e participação em competições.",
    longDesc: "Programa completo de robótica educacional para crianças e adolescentes de 8 a 15 anos. Combina montagem, programação, eletrônica e projetos colaborativos em um ambiente STEAM.",
    objective: "Desenvolver habilidades em robótica através de projetos práticos que envolvem montagem, programação e eletrônica. O aluno aprende a criar soluções para desafios reais, trabalhar em equipe e participar de competições.",
    icon: Cpu,
    ageRange: "8 a 15 anos",
    modality: "Presencial",
    duration: "2 meses por módulo",
    frequency: "2h semanais",
    workload: "8 horas por módulo",
    img: "/images/courses/robotica.jpg",
    audience: [
      "Crianças e adolescentes interessados em tecnologia",
      "Alunos que gostam de construir e resolver problemas",
      "Jovens que querem participar de competições de robótica",
      "Pais que buscam formação STEAM para os filhos",
    ],
    modules: [
      { title: "Fundamentos de Robótica", desc: "Introdução a componentes, sensores e atuadores." },
      { title: "Montagem Avançada", desc: "Construção de robôs complexos com múltiplos componentes." },
      { title: "Programação", desc: "Lógica de programação aplicada ao controle de robôs." },
      { title: "Projetos e Competições", desc: "Desenvolvimento de projetos próprios e preparação para torneios." },
    ],
    methodology: "Ciclo de aprendizagem: desafio → planejamento → construção → programação → teste → apresentação. O instrutor media o processo sem dar respostas prontas.",
    testimonial: {
      quote: "A robótica despertou no meu filho um interesse que eu nunca tinha visto. Ele chega em casa animado, querendo construir coisas.",
      name: "Roberto Silva",
      city: "Campinas, SP",
    },
    faq: [
      { q: "Precisa ter experiência prévia?", a: "Não. O programa começa com fundamentos e avança gradualmente." },
      { q: "Os kits estão inclusos?", a: "Sim, todo o material de montagem é fornecido pela escola durante as aulas." },
      { q: "Tem competições?", a: "Sim, alunos avançados podem participar de torneios internos e externos." },
      { q: "Qual o valor do curso?", a: "Os valores variam por unidade. Entre em contato com a escola." },
    ],
  },
  {
    slug: "little-kids",
    categorySlug: "robotica",
    title: "Robótica Little Kids",
    subtitle: "Introdução lúdica à robótica",
    desc: "Introdução à robótica para crianças de 6 a 8 anos com peças maiores e programação visual.",
    longDesc: "Programa lúdico de introdução à robótica para crianças de 6 a 8 anos. Usa peças seguras, programação visual por blocos e projetos simples que despertam a curiosidade pela tecnologia.",
    objective: "Introduzir conceitos básicos de robótica e programação de forma lúdica e segura. A criança aprende brincando, desenvolvendo coordenação motora, raciocínio lógico e criatividade.",
    icon: Rocket,
    ageRange: "6 a 8 anos",
    modality: "Presencial",
    duration: "2 meses por módulo",
    frequency: "2h semanais",
    workload: "8 horas por módulo",
    img: "/images/courses/robotica.jpg",
    audience: [
      "Crianças pequenas interessadas em tecnologia",
      "Pais que querem introduzir STEAM cedo",
      "Alunos em transição da educação infantil para o fundamental",
      "Famílias que buscam atividades lúdicas e educativas",
    ],
    modules: [
      { title: "Conceitos Básicos", desc: "Introdução ao que é um robô e como funciona." },
      { title: "Montagem Lúdica", desc: "Construção de robôs simples com peças grandes." },
      { title: "Programação Visual", desc: "Primeiros passos em programação por blocos coloridos." },
    ],
    methodology: "Aulas com forte componente lúdico, jogos e desafios adaptados à faixa etária. O instrutor guia as crianças em um ambiente seguro e estimulante.",
    testimonial: {
      quote: "Minha filha de 7 anos adora as aulas. Ela chega em casa contando sobre os robôs que montou e já está aprendendo a programar!",
      name: "Fernanda Lima",
      city: "Porto Alegre, RS",
    },
    faq: [
      { q: "É seguro para crianças pequenas?", a: "Sim. Usamos peças grandes, seguras e projetadas para a idade." },
      { q: "Já ensina programação?", a: "Sim, de forma visual e lúdica, com blocos coloridos adaptados à idade." },
      { q: "Tem material extra para casa?", a: "Durante o curso, o material fica na escola. O acesso a plataformas online pode ser disponibilizado." },
      { q: "Qual o valor do curso?", a: "Os valores variam por unidade. Entre em contato com a escola." },
    ],
  },
  {
    slug: "infantil",
    categorySlug: "robotica",
    title: "Robótica Infantil",
    subtitle: "Primeiros passos na tecnologia",
    desc: "Primeiros passos na robótica para crianças de 4 a 6 anos com montagens simples e seguras.",
    longDesc: "Programa especial de robótica para crianças de 4 a 6 anos. Focado em desenvolver coordenação motora, reconhecimento de formas e introdução lúdica aos conceitos de tecnologia.",
    objective: "Introduzir conceitos de tecnologia e movimento através de montagens simples e brincadeiras educativas. Desenvolve coordenação motora fina, reconhecimento de formas e raciocínio sequencial.",
    icon: Baby,
    ageRange: "4 a 6 anos",
    modality: "Presencial",
    duration: "2 meses por módulo",
    frequency: "2h semanais",
    workload: "8 horas por módulo",
    img: "/images/courses/robotica.jpg",
    audience: [
      "Crianças em idade pré-escolar",
      "Pais que querem estimular curiosidade científica desde cedo",
      "Famílias que buscam atividades educativas lúdicas",
      "Crianças interessadas em construir e explorar",
    ],
    modules: [
      { title: "Descoberta", desc: "Exploração de peças, cores, formas e movimentos." },
      { title: "Montagens Simples", desc: "Construção de objetos e personagens com peças grandes." },
      { title: "Movimento e Interação", desc: "Introdução a mecanismos simples de movimento." },
    ],
    methodology: "Metodologia 100% lúdica com foco em descoberta, brincadeira e estímulo cognitivo. Cada aula é uma nova aventura adaptada à capacidade das crianças.",
    testimonial: {
      quote: "Meu filho de 5 anos ama as aulas. Ele volta para casa feliz mostrando o que montou e inventando histórias.",
      name: "Juliana Costa",
      city: "Recife, PE",
    },
    faq: [
      { q: "Idade mínima para começar?", a: "A partir de 4 anos. Usamos peças grandes e seguras para a faixa etária." },
      { q: "Precisa saber ler?", a: "Não. As aulas são totalmente visuais e orientadas pelo instrutor." },
      { q: "É só brincadeira ou tem conteúdo?", a: "É lúdico, mas com objetivos pedagógicos claros de desenvolvimento cognitivo e motor." },
      { q: "Qual o valor do curso?", a: "Os valores variam por unidade. Entre em contato com a escola." },
    ],
  },

  // PROGRAMAÇÃO
  {
    slug: "trilha-code",
    categorySlug: "programacao",
    title: "Trilha Code",
    subtitle: "Fundamentos de programação",
    desc: "Fundamentos de lógica de programação com Scratch e ferramentas visuais.",
    longDesc: "Trilha completa de introdução à programação usando ferramentas visuais como Scratch. O aluno aprende lógica de programação através de projetos práticos e criativos.",
    objective: "Ensinar os fundamentos da lógica de programação através de ferramentas visuais acessíveis. O aluno aprende algoritmos, variáveis, condicionais e loops criando projetos próprios.",
    icon: Code,
    ageRange: "6 a 14 anos",
    modality: "Presencial",
    duration: "2 meses por módulo",
    frequency: "2h semanais",
    workload: "8 horas por módulo",
    img: "/images/courses/programacao.jpg",
    audience: [
      "Crianças iniciantes em programação",
      "Alunos curiosos sobre como apps e games funcionam",
      "Pais que querem introduzir tecnologia de forma educativa",
      "Jovens interessados em carreiras de TI",
    ],
    modules: [
      { title: "Introdução ao Scratch", desc: "Primeiros passos na programação visual por blocos." },
      { title: "Lógica de Programação", desc: "Variáveis, condicionais, loops e funções." },
      { title: "Projetos Criativos", desc: "Criação de animações e jogos simples." },
    ],
    methodology: "Aprender fazendo: cada módulo é um projeto completo. O aluno sai com resultados tangíveis que pode compartilhar com família e amigos.",
    testimonial: {
      quote: "Meu filho criou o primeiro jogo dele e ficou tão orgulhoso! Agora só quer saber de programar.",
      name: "Amanda Costa",
      city: "Belo Horizonte, MG",
    },
    faq: [
      { q: "Precisa ter computador em casa?", a: "Não. O equipamento é fornecido pela escola durante as aulas." },
      { q: "A partir de que idade?", a: "A partir de 6 anos, com adaptações por faixa etária." },
      { q: "Ensina linguagens reais?", a: "Nesta trilha usamos Scratch, uma linguagem visual. Linguagens textuais vêm em módulos avançados." },
      { q: "Qual o valor do curso?", a: "Os valores variam por unidade. Entre em contato com a escola." },
    ],
  },
  {
    slug: "games",
    categorySlug: "programacao",
    title: "Games",
    subtitle: "Criação de jogos 2D e 3D",
    desc: "Criação de jogos 2D e 3D com ferramentas profissionais — dos 6 aos 14 anos.",
    longDesc: "Curso completo de desenvolvimento de jogos. O aluno aprende a criar games 2D e 3D usando ferramentas profissionais da indústria, do design ao código.",
    objective: "Ensinar desenvolvimento de games de forma prática e progressiva. O aluno cria seus próprios jogos — do conceito à publicação — usando ferramentas profissionais.",
    icon: Gamepad2,
    ageRange: "6 a 14 anos",
    modality: "Presencial",
    duration: "2 meses por módulo",
    frequency: "2h semanais",
    workload: "8 horas por módulo",
    img: "/images/courses/programacao.jpg",
    audience: [
      "Crianças apaixonadas por games",
      "Jovens que querem criar seus próprios jogos",
      "Alunos interessados em desenvolvimento de software",
      "Famílias que buscam canalizar a paixão por jogos em aprendizado",
    ],
    modules: [
      { title: "Fundamentos de Game Design", desc: "Conceitos básicos: mecânicas, narrativa e balanceamento." },
      { title: "Criação de Jogos 2D", desc: "Desenvolvimento completo de um jogo 2D com Scratch ou Unity." },
      { title: "Introdução ao 3D", desc: "Primeiros passos em desenvolvimento de games 3D." },
      { title: "Publicação e Apresentação", desc: "Como finalizar e compartilhar o jogo com amigos e família." },
    ],
    methodology: "Aprendizado por projeto: cada módulo resulta em um jogo completo. Gamificação e desafios mantêm o engajamento do aluno durante todo o curso.",
    testimonial: {
      quote: "Minha filha criou um jogo inteiro e agora quer ser desenvolvedora de games. Nunca vi ela tão focada!",
      name: "Marcelo Oliveira",
      city: "Brasília, DF",
    },
    faq: [
      { q: "Qual idade mínima?", a: "A partir de 6 anos, com ferramentas adaptadas." },
      { q: "Precisa saber programar?", a: "Não. O curso começa com ferramentas visuais e progride conforme o aluno avança." },
      { q: "Os jogos criados são jogáveis?", a: "Sim, todos os projetos resultam em jogos completos que o aluno pode compartilhar." },
      { q: "Qual o valor do curso?", a: "Os valores variam por unidade. Entre em contato com a escola." },
    ],
  },
  {
    slug: "apps",
    categorySlug: "programacao",
    title: "Apps",
    subtitle: "Desenvolvimento de aplicativos",
    desc: "Desenvolvimento de aplicativos para dispositivos móveis.",
    longDesc: "Curso de criação de apps para dispositivos móveis. O aluno aprende a desenvolver aplicativos funcionais, do conceito à interface, com ferramentas como App Inventor.",
    objective: "Ensinar desenvolvimento de aplicativos móveis de forma prática. O aluno cria seus próprios apps funcionais e aprende noções de UX, design e lógica de programação.",
    icon: Smartphone,
    ageRange: "8 a 14 anos",
    modality: "Presencial",
    duration: "2 meses por módulo",
    frequency: "2h semanais",
    workload: "8 horas por módulo",
    img: "/images/courses/programacao.jpg",
    audience: [
      "Jovens interessados em tecnologia mobile",
      "Alunos que usam smartphones diariamente e querem entender como funcionam",
      "Crianças criativas com ideias de apps próprios",
      "Futuros empreendedores de tecnologia",
    ],
    modules: [
      { title: "Introdução ao App Inventor", desc: "Primeiros passos na criação de apps visuais." },
      { title: "Interface e Design", desc: "Noções de UX, layout e usabilidade mobile." },
      { title: "Lógica e Funcionalidade", desc: "Programação de funcionalidades reais do app." },
      { title: "Projeto Final", desc: "Desenvolvimento de um app completo do zero." },
    ],
    methodology: "Projetos práticos com entregáveis reais. O aluno sai do curso com apps funcionais que pode instalar no próprio celular.",
    testimonial: {
      quote: "Meu filho criou um app de lista de tarefas e instalou no celular dele. Ele está super orgulhoso!",
      name: "Patricia Moraes",
      city: "Florianópolis, SC",
    },
    faq: [
      { q: "Precisa ter smartphone?", a: "Não é obrigatório. Os apps são testados em dispositivos da escola ou emuladores." },
      { q: "Os apps podem ser publicados?", a: "O foco é o aprendizado. Publicação em lojas oficiais pode ser trabalhada em módulos avançados." },
      { q: "A partir de que idade?", a: "A partir de 8 anos. Requer alfabetização e noções básicas de lógica." },
      { q: "Qual o valor do curso?", a: "Os valores variam por unidade. Entre em contato com a escola." },
    ],
  },
  {
    slug: "youtuber",
    categorySlug: "programacao",
    title: "Youtuber",
    subtitle: "Produção de conteúdo digital",
    desc: "Edição de vídeo, roteiro e produção de conteúdo digital para YouTube.",
    longDesc: "Curso completo de produção de conteúdo digital para YouTube. O aluno aprende desde o planejamento do canal até edição profissional, passando por roteiro, gravação e estratégia de audiência.",
    objective: "Ensinar produção profissional de conteúdo digital. O aluno aprende a planejar, gravar, editar e publicar vídeos de qualidade, desenvolvendo habilidades de comunicação e produção audiovisual.",
    icon: Video,
    ageRange: "8 a 14 anos",
    modality: "Semi-presencial",
    duration: "2 meses por módulo",
    frequency: "2h semanais",
    workload: "8 horas por módulo",
    img: "/images/courses/programacao.jpg",
    audience: [
      "Jovens que querem criar seu canal no YouTube",
      "Crianças interessadas em produção de conteúdo",
      "Alunos que gostam de contar histórias e gravar vídeos",
      "Futuros criadores de conteúdo digital",
    ],
    modules: [
      { title: "Planejamento de Canal", desc: "Definição de nicho, nome, estilo e público-alvo." },
      { title: "Roteiro e Gravação", desc: "Técnicas de escrita para vídeo e boas práticas de gravação." },
      { title: "Edição de Vídeo", desc: "Edição profissional com cortes, transições e efeitos." },
      { title: "Publicação e Engajamento", desc: "Upload, miniaturas, descrições e estratégias de audiência." },
    ],
    methodology: "O aluno cria seu próprio canal ao longo do curso, aplicando cada conceito aprendido. Ao final, tem um canal funcional com conteúdo próprio.",
    testimonial: {
      quote: "Meu filho sempre quis fazer vídeos. Agora ele sabe editar, tem um canal próprio e ainda aprendeu sobre comunicação!",
      name: "Cristina Souza",
      city: "Goiânia, GO",
    },
    faq: [
      { q: "Precisa ter equipamento próprio?", a: "Não. A escola fornece equipamento de gravação e edição durante as aulas." },
      { q: "Meu filho pode publicar vídeos?", a: "Sim, com autorização dos pais. O instrutor orienta sobre segurança e privacidade online." },
      { q: "Trabalha monetização?", a: "Em módulos avançados, sim. Mas o foco é qualidade de conteúdo, não ganho financeiro." },
      { q: "Qual o valor do curso?", a: "Os valores variam por unidade. Entre em contato com a escola." },
    ],
  },
  {
    slug: "minecraft",
    categorySlug: "programacao",
    title: "Minecraft Educacional",
    subtitle: "Programação dentro do Minecraft",
    desc: "Programação e lógica dentro do universo Minecraft.",
    longDesc: "Curso que usa o Minecraft como plataforma de aprendizagem. O aluno desenvolve lógica de programação, matemática e trabalho em equipe em um ambiente que já conhece e adora.",
    objective: "Usar o universo Minecraft para ensinar programação, lógica e conceitos matemáticos de forma divertida. O aluno aprende comandos, redstone, construção e até programação em Python dentro do jogo.",
    icon: Box,
    ageRange: "7 a 14 anos",
    modality: "Presencial",
    duration: "2 meses por módulo",
    frequency: "2h semanais",
    workload: "8 horas por módulo",
    img: "/images/courses/programacao.jpg",
    audience: [
      "Crianças apaixonadas por Minecraft",
      "Alunos que aprendem melhor com gamificação",
      "Famílias que querem transformar o tempo de jogo em aprendizado",
      "Jovens interessados em lógica de programação",
    ],
    modules: [
      { title: "Fundamentos no Minecraft", desc: "Comandos, construção e mecânicas do jogo como ferramenta de aprendizado." },
      { title: "Redstone e Lógica", desc: "Circuitos de redstone como introdução a portas lógicas e eletrônica." },
      { title: "Programação em Minecraft", desc: "Uso de comandos e plugins para automatizar ações no jogo." },
    ],
    methodology: "Aprendizagem baseada em games. A criança mal percebe que está estudando — ela está jogando enquanto desenvolve habilidades técnicas e cognitivas.",
    testimonial: {
      quote: "Meu filho já jogava Minecraft há anos. Agora ele aprende matemática e programação enquanto joga. Foi a melhor escolha!",
      name: "Rafael Santos",
      city: "Manaus, AM",
    },
    faq: [
      { q: "Precisa ter Minecraft em casa?", a: "Não. A escola fornece o ambiente de jogo durante as aulas." },
      { q: "Qual versão do Minecraft?", a: "Usamos a versão educacional do Minecraft, adaptada para aprendizado." },
      { q: "Ensina programação real?", a: "Sim, os módulos avançados incluem programação em Python dentro do jogo." },
      { q: "Qual o valor do curso?", a: "Os valores variam por unidade. Entre em contato com a escola." },
    ],
  },

  // INGLÊS
  {
    slug: "presencial",
    categorySlug: "ingles",
    title: "Inglês Presencial",
    subtitle: "Fluência com abordagem comunicativa",
    desc: "Programa completo de inglês presencial com abordagem comunicativa e imersiva.",
    longDesc: "Programa presencial de inglês com abordagem comunicativa. As aulas são conduzidas com máxima exposição ao idioma, usando jogos, músicas e situações do cotidiano para garantir fluência natural.",
    objective: "Desenvolver fluência em inglês de forma comunicativa e imersiva. O aluno aprende a se expressar naturalmente no idioma, sem tradução literal, através de atividades práticas adaptadas à sua faixa etária.",
    icon: Globe,
    ageRange: "4 a 15 anos",
    modality: "Presencial",
    duration: "Programa semestral",
    frequency: "2h semanais",
    workload: "Semestral completo",
    img: "/images/courses/ingles.jpg",
    audience: [
      "Crianças que nunca tiveram contato com inglês",
      "Alunos que já estudam e querem acelerar a fluência",
      "Pais que valorizam educação bilíngue desde cedo",
      "Jovens preparando-se para intercâmbio ou provas",
    ],
    modules: [
      { title: "Iniciante", desc: "Primeiras palavras, cumprimentos e frases básicas do dia a dia." },
      { title: "Intermediário", desc: "Construção de frases, leitura de textos curtos e conversação básica." },
      { title: "Avançado", desc: "Conversação fluente, interpretação de textos e produção escrita." },
    ],
    methodology: "As aulas são conduzidas com máxima exposição ao inglês. O instrutor utiliza jogos, músicas, dinâmicas e situações do cotidiano para que o aluno internalize o idioma de forma natural, sem tradução literal.",
    testimonial: {
      quote: "A metodologia individualizada faz toda a diferença. Minha filha tem acompanhamento personalizado e agora adora ir pra aula.",
      name: "Juliana Ferreira",
      city: "Rio de Janeiro, RJ",
    },
    faq: [
      { q: "Meu filho nunca teve contato com inglês. Pode começar?", a: "Claro! O programa começa do zero e avança no ritmo do aluno." },
      { q: "O material didático está incluso?", a: "Sim, material exclusivo da Ensina Mais adaptado para cada faixa etária." },
      { q: "Quanto tempo até ter fluência?", a: "Depende da frequência e do aluno, mas após 2-3 semestres já é possível manter conversas simples." },
      { q: "As aulas são 100% em inglês?", a: "Progressivamente. Iniciantes têm apoio em português; avançados têm aulas 100% em inglês." },
      { q: "Qual o valor do curso?", a: "Os valores variam por unidade. Entre em contato com a escola." },
    ],
  },
];

export function getCourseBySlug(categorySlug: string, courseSlug: string): Course | undefined {
  return COURSES.find((c) => c.categorySlug === categorySlug && c.slug === courseSlug);
}

export function getCoursesByCategory(categorySlug: string): Course[] {
  return COURSES.filter((c) => c.categorySlug === categorySlug);
}
