import { BookOpen, Cpu, Monitor, Globe, Brain, Lightbulb, Users, Puzzle, Code, Gamepad2, Smartphone, Video, Box, Languages } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface CourseDetail {
  slug: string;
  title: string;
  subtitle: string;
  desc: string;
  longDesc: string;
  objective: string;
  icon: LucideIcon;
  color: string;
  light: string;
  ageRange: string;
  modality: string;
  duration: string;
  frequency: string;
  workload: string;
  img: string;
  skills: { icon: LucideIcon; title: string; desc: string }[];
  benefits: string[];
  modules: { title: string; desc: string }[];
  methodology: string;
  testimonial: { quote: string; name: string; city: string };
  faq: { q: string; a: string }[];
}

export const COURSES_DATA: CourseDetail[] = [
  {
    slug: "apoio-escolar",
    title: "Apoio Escolar",
    subtitle: "Português e Matemática",
    desc: "Reforço individualizado em Português e Matemática com ensino híbrido, acompanhamento contínuo e relatórios de evolução para os pais.",
    longDesc: "Cada aluno tem seu próprio ritmo. Na Ensina Mais, o apoio escolar combina aulas digitais interativas com mediação de instrutores especializados, garantindo que seu filho supere dificuldades em Português e Matemática de forma personalizada e eficaz.",
    objective: "Desenvolver competências em Português e Matemática através de ensino individualizado, com aulas digitais interativas e acompanhamento contínuo de instrutores especializados. O aluno evolui no seu próprio ritmo, com avaliações diagnósticas e relatórios de progresso para os pais.",
    icon: BookOpen,
    color: "#039BE5",
    light: "#E1F5FE",
    ageRange: "4 a 15 anos",
    modality: "Presencial",
    duration: "2 meses por módulo",
    frequency: "2h ou 4h semanais",
    workload: "8 horas por módulo",
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
    modules: [
      { title: "Matemática — 2h semanais", desc: "Operações, geometria, frações e resolução de problemas no ritmo do aluno." },
      { title: "Matemática — 4h semanais", desc: "Programa intensivo para quem precisa de reforço mais aprofundado." },
      { title: "Português — 2h semanais", desc: "Leitura, interpretação, gramática e produção textual." },
      { title: "Português — 4h semanais", desc: "Imersão completa no universo da língua portuguesa." },
    ],
    methodology: "O aluno faz uma avaliação diagnóstica no início e recebe um plano de estudos sob medida. As aulas combinam conteúdo digital interativo com mediação presencial do instrutor. A cada módulo, relatórios de evolução são enviados aos pais.",
    testimonial: {
      quote: "Meu filho estava com muita dificuldade em matemática. Em poucos meses na Ensina Mais, a evolução foi incrível — ele ganhou confiança e as notas subiram de verdade!",
      name: "Carla Mendes",
      city: "São Paulo, SP",
    },
    faq: [
      { q: "Qual a idade mínima para o apoio escolar?", a: "A partir de 4 anos. O programa é adaptado para cada faixa etária, desde a alfabetização até o ensino fundamental completo." },
      { q: "Como funciona a avaliação inicial?", a: "O aluno faz uma avaliação diagnóstica gratuita que identifica seus pontos fortes e dificuldades, gerando um plano de estudos personalizado." },
      { q: "Os pais recebem feedback?", a: "Sim. A cada módulo concluído, enviamos relatórios detalhados de evolução com notas, frequência e recomendações dos instrutores." },
      { q: "Posso escolher entre 2h e 4h semanais?", a: "Sim. O programa de 2h é ideal para manutenção e reforço pontual. O de 4h é recomendado para alunos com dificuldades mais acentuadas." },
      { q: "Qual o valor do curso?", a: "Os valores variam por unidade e modalidade. Entre em contato com a escola mais perto de você para conhecer as condições especiais." },
    ],
  },
  {
    slug: "robotica",
    title: "Robótica Educacional",
    subtitle: "Da montagem à programação",
    desc: "Raciocínio lógico, criatividade e resolução de problemas na prática com kits de robótica educacional.",
    longDesc: "A robótica educacional da Ensina Mais vai além de montar robôs. É uma metodologia STEAM completa que desenvolve raciocínio lógico, criatividade, trabalho em equipe e capacidade de resolver problemas reais — habilidades essenciais para o futuro.",
    objective: "Desenvolver habilidades STEAM através da montagem e programação de robôs. O aluno aprende raciocínio lógico, trabalho em equipe e resolução de problemas em um ambiente prático e divertido, seguindo o ciclo de desafio, construção, programação e apresentação.",
    icon: Cpu,
    color: "#7CB342",
    light: "#F1F8E9",
    ageRange: "4 a 15 anos",
    modality: "Presencial",
    duration: "2 meses por módulo",
    frequency: "2h semanais",
    workload: "8 horas por módulo",
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
    modules: [
      { title: "Robótica Infantil", desc: "Para os pequenos de 4 a 6 anos. Montagens simples com peças grandes e conceitos básicos de movimento." },
      { title: "Robótica Little Kids", desc: "De 6 a 8 anos. Introdução à programação visual e montagens mais elaboradas com sensores." },
      { title: "Robótica Educacional", desc: "De 8 a 15 anos. Projetos completos com programação, eletrônica e competições." },
    ],
    methodology: "As aulas seguem o ciclo: desafio → planejamento → construção → programação → teste → apresentação. O aluno aprende fazendo, errando e melhorando — o instrutor media o processo sem dar respostas prontas.",
    testimonial: {
      quote: "A robótica despertou no meu filho um interesse que eu nunca tinha visto. Ele chega em casa animado, querendo construir coisas e explicar como tudo funciona.",
      name: "Roberto Silva",
      city: "Campinas, SP",
    },
    faq: [
      { q: "Precisa ter experiência prévia?", a: "Não. O programa é dividido por faixas etárias e nível de experiência, começando do zero." },
      { q: "Os kits de robótica estão inclusos?", a: "Sim. Todo o material didático e kits de montagem são fornecidos pela escola durante as aulas." },
      { q: "Meu filho tem 4 anos, já pode fazer?", a: "Sim! O módulo Robótica Infantil é especialmente desenhado para crianças a partir de 4 anos, com peças grandes e seguras." },
      { q: "Tem competições de robótica?", a: "Sim. Alunos dos níveis avançados podem participar de torneios internos e externos de robótica educacional." },
      { q: "Qual o valor do curso?", a: "Os valores variam por unidade. Entre em contato com a escola mais perto de você para conhecer as condições." },
    ],
  },
  {
    slug: "programacao",
    title: "Programação",
    subtitle: "Games, apps e lógica",
    desc: "Games, apps, Minecraft e lógica de programação de forma divertida, preparando para as profissões do futuro.",
    longDesc: "Da criação de jogos no Scratch à programação de apps reais, nossos cursos de programação ensinam lógica computacional de forma divertida e prática. Seu filho aprende a pensar como um programador — uma habilidade essencial para qualquer carreira.",
    objective: "Ensinar lógica de programação e pensamento computacional através da criação de projetos reais — jogos, apps, vídeos e mundos virtuais. O aluno desenvolve habilidades técnicas e criativas enquanto se diverte com plataformas como Scratch, Unity, AppInventor e Minecraft.",
    icon: Monitor,
    color: "#FF9800",
    light: "#FFF3E0",
    ageRange: "6 a 14 anos",
    modality: "Presencial",
    duration: "2 meses por módulo",
    frequency: "2h semanais",
    workload: "8 horas por módulo",
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
    modules: [
      { title: "Trilha Code", desc: "Fundamentos de lógica de programação com Scratch e ferramentas visuais." },
      { title: "Games", desc: "Criação de jogos 2D e 3D — dos 6 aos 14 anos." },
      { title: "Apps", desc: "Desenvolvimento de aplicativos para dispositivos móveis." },
      { title: "Youtuber", desc: "Edição de vídeo, roteiro e produção de conteúdo digital." },
      { title: "Minecraft Educacional", desc: "Programação e lógica dentro do universo Minecraft." },
    ],
    methodology: "Cada módulo é um projeto completo. O aluno começa com um briefing do que vai criar, passa pelas etapas de desenvolvimento e apresenta o resultado final. A gamificação mantém o engajamento alto do começo ao fim.",
    testimonial: {
      quote: "Minha filha criou um joguinho inteiro no curso de Games. Ela ficou tão orgulhosa que mostrou pra família inteira. Nunca vi ela tão empolgada com aprendizado.",
      name: "Amanda Costa",
      city: "Belo Horizonte, MG",
    },
    faq: [
      { q: "Precisa ter computador em casa?", a: "Não. Todo o equipamento é fornecido pela escola durante as aulas. Mas ter um computador em casa ajuda a praticar." },
      { q: "Qual a diferença entre os módulos?", a: "Cada módulo trabalha uma plataforma diferente (Scratch, Unity, AppInventor, Minecraft). O aluno pode fazer um ou todos, na ordem que preferir." },
      { q: "A partir de que idade?", a: "A partir de 6 anos. Os módulos são adaptados para cada faixa etária." },
      { q: "O curso ensina linguagens de programação reais?", a: "Nos módulos iniciais, usamos programação visual (blocos). Nos avançados, introduzimos JavaScript e Python de forma gradual." },
      { q: "Qual o valor do curso?", a: "Os valores variam por unidade. Entre em contato com a escola mais perto de você para conhecer as condições." },
    ],
  },
  {
    slug: "ingles",
    title: "Inglês",
    subtitle: "Fluência desde a infância",
    desc: "Fluência desde a infância com abordagem comunicativa, imersão e material didático exclusivo por faixa etária.",
    longDesc: "O inglês da Ensina Mais vai além da gramática. Com abordagem comunicativa e imersiva, seu filho desenvolve fluência natural desde cedo, usando o idioma em situações reais do dia a dia — com material didático exclusivo para cada faixa etária.",
    objective: "Desenvolver fluência em inglês desde a infância com abordagem comunicativa e imersiva. O aluno aprende a se expressar naturalmente no idioma, sem tradução literal, através de jogos, músicas, dinâmicas e situações do cotidiano.",
    icon: Globe,
    color: "#EF5350",
    light: "#FFEBEE",
    ageRange: "4 a 15 anos",
    modality: "Presencial",
    duration: "Semestral",
    frequency: "2h semanais",
    workload: "Programa semestral completo",
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
    modules: [
      { title: "Inglês Presencial", desc: "Programa completo com material didático exclusivo, abordagem comunicativa e imersão progressiva por faixa etária." },
    ],
    methodology: "As aulas são conduzidas com máxima exposição ao inglês. O instrutor utiliza jogos, músicas, dinâmicas e situações do cotidiano para que o aluno internalize o idioma de forma natural, sem tradução literal.",
    testimonial: {
      quote: "A metodologia individualizada faz toda a diferença. Minha filha tem acompanhamento personalizado e agora adora ir pra aula. Recomendo de olhos fechados!",
      name: "Juliana Ferreira",
      city: "Rio de Janeiro, RJ",
    },
    faq: [
      { q: "Meu filho nunca teve contato com inglês. Pode começar?", a: "Claro! O programa começa do zero e avança no ritmo do aluno. Temos turmas específicas para iniciantes de todas as idades." },
      { q: "O material didático está incluso?", a: "Sim. O material é exclusivo da Ensina Mais e adaptado para cada faixa etária." },
      { q: "Quanto tempo leva para o aluno ter fluência?", a: "Depende da frequência e do aluno, mas após 2-3 semestres a maioria dos alunos já consegue manter conversas simples com confiança." },
      { q: "As aulas são 100% em inglês?", a: "Progressivamente. Nas turmas iniciais, o português é usado como apoio. À medida que o aluno avança, a imersão no inglês aumenta." },
      { q: "Qual o valor do curso?", a: "Os valores variam por unidade. Entre em contato com a escola mais perto de você para conhecer as condições." },
    ],
  },
];

export function getCourseBySlug(slug: string): CourseDetail | undefined {
  return COURSES_DATA.find((c) => c.slug === slug);
}
