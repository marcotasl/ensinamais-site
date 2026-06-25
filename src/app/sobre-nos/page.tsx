import type { Metadata } from "next";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  Cpu,
  Gamepad2,
  HeartHandshake,
  Lightbulb,
  ListChecks,
  Monitor,
  Smartphone,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Placeholder from "@/components/ui/Placeholder";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Sobre Nós · Ensina Mais Turma da Mônica",
  description:
    "Cada criança aprende de um jeito. A Ensina Mais Turma da Mônica acompanha o seu filho de perto, com escuta, método e cuidado.",
};

/* PARTE 3 , 5 itens "como ajudamos no dia a dia" em bento alternado */
const DIA_A_DIA = [
  {
    Icon: BookOpen,
    title: "Fortalecendo a base escolar",
    desc: "Apoiamos o aluno nas principais dificuldades, especialmente em Língua Portuguesa e Matemática, para que ele avance com mais segurança.",
    bg: "bg-em-blue",
  },
  {
    Icon: ListChecks,
    title: "Criando rotina de estudos",
    desc: "A criança aprende a estudar com mais organização, constância e responsabilidade.",
    bg: "bg-em-green",
  },
  {
    Icon: Sparkles,
    title: "Desenvolvendo autonomia",
    desc: "Com acompanhamento próximo, o aluno passa a participar mais do próprio aprendizado e a confiar mais na sua capacidade.",
    bg: "bg-em-coral",
  },
  {
    Icon: Lightbulb,
    title: "Tornando o aprendizado mais leve",
    desc: "As atividades são pensadas para estimular a curiosidade, o raciocínio e a vontade de aprender.",
    bg: "bg-em-orange",
  },
  {
    Icon: HeartHandshake,
    title: "Mantendo a família próxima",
    desc: "Os responsáveis acompanham a evolução do aluno com mais clareza e segurança, entendendo como ele está progredindo a cada etapa.",
    bg: "bg-em-purple",
  },
];

/* PARTE 5 , 6 motivos em cards de cor SÓLIDA (estilo Numbers, não white) */
const POR_QUE: { Icon: LucideIcon; title: string; desc: string; bg: string; tilt: string }[] = [
  {
    Icon: Target,
    title: "Acompanhamento individualizado",
    desc: "Cada aluno é acompanhado de perto, com atenção às suas dificuldades, ao seu ritmo e às suas conquistas.",
    bg: "bg-em-blue",
    tilt: "tilt-l1",
  },
  {
    Icon: Cpu,
    title: "Educação + tecnologia",
    desc: "Desde 2012 combinamos o melhor da educação com recursos digitais, jogos, robótica e programação para tornar o aprendizado envolvente.",
    bg: "bg-em-green",
    tilt: "tilt-r1",
  },
  {
    Icon: ListChecks,
    title: "Rotina estruturada",
    desc: "Ajudamos a criança a criar organização, constância e responsabilidade com os estudos. Habilidades que ficam pra vida.",
    bg: "bg-em-coral",
    tilt: "tilt-l1",
  },
  {
    Icon: Lightbulb,
    title: "Feedback claro",
    desc: "O aluno entende onde precisa avançar. A família acompanha essa evolução com mais clareza e segurança.",
    bg: "bg-em-orange",
    tilt: "tilt-r1",
  },
  {
    Icon: Sparkles,
    title: "Além das matérias",
    desc: "Trabalhamos raciocínio lógico, criatividade, autonomia e habilidades digitais, preparando pro presente e pro futuro.",
    bg: "bg-em-purple",
    tilt: "tilt-l1",
  },
  {
    Icon: Users,
    title: "Parceria com a família",
    desc: "Pais e responsáveis têm uma escola parceira que acompanha, informa e caminha junto em cada etapa.",
    bg: "bg-em-green-dark",
    tilt: "tilt-r1",
  },
];

/* PARTE 6 , 6 áreas de curso em strip horizontal com number + pastel */
const CURSOS = [
  { Icon: BookOpen, title: "Língua Portuguesa", desc: "Leitura, interpretação e escrita. Segurança pra se comunicar dentro e fora da escola.", bg: "bg-em-blue-pale", iconBg: "bg-em-blue" },
  { Icon: Calculator, title: "Matemática", desc: "Fortalecimento da base, raciocínio lógico e confiança pra resolver problemas do dia a dia.", bg: "bg-em-green-pale", iconBg: "bg-em-green" },
  { Icon: Cpu, title: "Robótica", desc: "Atividades práticas que estimulam criatividade, curiosidade e pensamento lógico.", bg: "bg-em-coral-pale", iconBg: "bg-em-coral" },
  { Icon: Smartphone, title: "Apps", desc: "Contato orientado com a tecnologia, desenvolvendo organização, autonomia e pensamento digital.", bg: "bg-em-orange-pale", iconBg: "bg-em-orange" },
  { Icon: Gamepad2, title: "Games", desc: "Aprendizado por meio de desafios e interação, tornando o processo mais leve e envolvente.", bg: "bg-em-blue-pale", iconBg: "bg-em-purple" },
  { Icon: Monitor, title: "Programação", desc: "Primeiros passos no universo da lógica e da criação digital, habilidades essenciais pro futuro.", bg: "bg-em-green-pale", iconBg: "bg-em-green-dark" },
];

const FAQ = [
  { q: "O que é a Ensina Mais Turma da Mônica?", a: "A Ensina Mais Turma da Mônica é uma rede de apoio escolar do Grupo MoveEdu, criada para acompanhar crianças e adolescentes em diferentes momentos da aprendizagem. Com licenciamento da Turma da Mônica, a rede une uma marca presente na infância de muitas famílias brasileiras a uma proposta pedagógica que valoriza acolhimento, método e desenvolvimento individual." },
  { q: "A Ensina Mais é só reforço escolar?", a: "Não. Além do apoio às disciplinas escolares, como Língua Portuguesa e Matemática, a Ensina Mais oferece atividades de Robótica, Programação, Apps e Games, áreas que desenvolvem raciocínio lógico, criatividade, autonomia e habilidades digitais. A proposta vai além de revisar conteúdo: é ajudar a criança a construir uma relação mais positiva com o aprendizado." },
  { q: "Para qual idade ou série a Ensina Mais atende?", a: "A Ensina Mais atende crianças e adolescentes em diferentes fases escolares, desde o ensino fundamental até o ensino médio. O acompanhamento é individualizado, o que significa que o programa é ajustado de acordo com o momento de cada aluno, independentemente da série." },
  { q: "Como a Ensina Mais acompanha a evolução do meu filho?", a: "O acompanhamento acontece durante o processo de aprendizagem, não só no final do bimestre. O aluno recebe orientação e feedback nas próprias atividades, o que ajuda a identificar dificuldades e avançar com mais segurança. A família também acompanha a evolução com clareza, sem depender apenas do boletim escolar." },
  { q: "O que significa ensino individualizado na Ensina Mais?", a: "Significa que cada aluno é acompanhado de acordo com seu ritmo, suas dificuldades e suas necessidades, não pelo ritmo médio de uma turma. As atividades são organizadas a partir do nível do aluno, e o instrutor ajusta o caminho sempre que necessário, sem fazer a criança se sentir mal por ter dificuldade." },
  { q: "Qual é o papel da Turma da Mônica na Ensina Mais?", a: "A Turma da Mônica é uma das marcas mais queridas e reconhecidas do Brasil, presente na infância de muitas gerações. Na Ensina Mais, essa presença ajuda a criar um ambiente mais familiar, acolhedor e lúdico para a criança, tornando o aprendizado mais próximo do universo infantil e facilitando o engajamento do aluno nas atividades." },
  { q: "A Ensina Mais trabalha em parceria com a família?", a: "Sim. A família não fica de fora do processo. Os pais e responsáveis acompanham a evolução do aluno com clareza e têm uma escola parceira que informa, escuta e caminha junto em cada etapa do desenvolvimento da criança." },
  { q: "Como a tecnologia é usada na Ensina Mais?", a: "A tecnologia é usada com orientação e propósito, não como entretenimento. Recursos digitais, games, robótica, apps e programação são ferramentas escolhidas para desenvolver habilidades reais, como raciocínio lógico, criatividade, concentração e autonomia. O instrutor está sempre presente para garantir que cada atividade digital tenha um objetivo claro de aprendizagem." },
  { q: "A Ensina Mais funciona para crianças que não têm dificuldade escolar?", a: "Sim. A Ensina Mais atende tanto alunos que precisam superar dificuldades escolares quanto crianças e adolescentes que querem ir além do que a escola regular oferece. As atividades de Robótica, Programação, Games e Apps são especialmente indicadas para quem quer desenvolver novas habilidades e se preparar para os desafios do futuro." },
  { q: "Como posso conhecer a Ensina Mais antes de matricular meu filho?", a: "A Ensina Mais oferece uma aula experimental gratuita, sem compromisso. É a melhor forma de conhecer o ambiente, entender como o acompanhamento funciona na prática e avaliar se faz sentido para o seu filho. Basta encontrar a unidade mais próxima e entrar em contato." },
];

export default function SobreNosPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* HERO , bg navy com pattern */}
      <section className="relative bg-em-dark pt-24 pb-16 sm:pb-20 px-4 sm:px-6 rounded-b-[46px] overflow-clip">
        <div aria-hidden className="absolute inset-0 opacity-12 bg-repeat pointer-events-none" style={{ backgroundImage: "url(/images/3d/pattern-dense.webp)", backgroundSize: "520px" }} />
        <div className="relative max-w-[1200px] mx-auto text-center">
          <FadeIn>
            <p className="eyebrow text-em-yellow mb-4">Sobre Nós</p>
            <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-black tracking-tight text-white mb-5 max-w-[920px] mx-auto leading-[1.05]">
              Cada criança aprende de um jeito. <span className="marker-yellow">Entender isso é o primeiro passo do nosso trabalho.</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-[760px] mx-auto leading-relaxed mb-4 font-semibold">
              Na Ensina Mais Turma da Mônica, seu filho é acompanhado de perto, com escuta, método e cuidado, para aprender com mais confiança, criar rotina de estudos e desenvolver habilidades que fazem diferença hoje e no futuro.
            </p>
            <p className="text-sm sm:text-base text-white/75 max-w-[720px] mx-auto leading-relaxed">
              Sabemos que por trás de cada dificuldade escolar existe uma história. E que entender essa história é o que faz a diferença no aprendizado. Aqui, o ponto de partida é sempre o aluno, seu ritmo, suas dificuldades e o que ele já traz de potencial.
            </p>
          </FadeIn>
          <FadeIn delay={0.12}>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a href="/cursos" className="inline-flex items-center justify-center text-sm sm:text-base font-black text-em-dark bg-em-yellow rounded-full px-6 sm:px-7 py-3 sm:py-3.5 hover:bg-white transition-colors shadow-button">
                Conheça nossos cursos
              </a>
              <a href="/escolas" className="inline-flex items-center justify-center text-sm sm:text-base font-bold text-white bg-white/10 backdrop-blur rounded-full px-6 sm:px-7 py-3 sm:py-3.5 hover:bg-white/20 transition-colors">
                Encontre a unidade mais próxima
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PARTE 2 , Conheça (split em painel com bg gradient sutil + blobs decorativos) */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 left-12 w-72 h-72 bg-em-yellow/15 rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-10 w-80 h-80 bg-em-blue/12 rounded-full blur-2xl" />
        </div>
        <div className="relative max-w-[1180px] mx-auto bg-gradient-to-br from-white via-em-green-pale/40 to-em-blue-pale/35 rounded-[2rem] lg:rounded-[2.5rem] px-6 sm:px-12 lg:px-16 py-12 sm:py-16 shadow-[0_24px_60px_-32px_rgba(26,39,68,0.25)] border border-white">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center">
            <FadeIn>
              <p className="eyebrow text-em-green-dark mb-3">Quem somos</p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1] mb-6">
                Conheça a <span className="marker-yellow">Ensina Mais Turma da Mônica</span>
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-em-dark-soft/85 leading-relaxed">
                <p>A Ensina Mais Turma da Mônica é uma rede de apoio escolar do Grupo MoveEdu, criada para acompanhar crianças e adolescentes em diferentes momentos da aprendizagem.</p>
                <p>Com o licenciamento da Turma da Mônica, uma das turmas mais queridas e reconhecidas do Brasil, unimos uma marca presente na infância de muitas famílias a uma proposta pedagógica que valoriza acolhimento, método e desenvolvimento individual.</p>
                <p className="font-semibold text-em-dark">Aqui, crianças e adolescentes aprendem com acompanhamento próximo, e a família encontra uma escola parceira que caminha junto em cada etapa.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.12}>
              <div className="relative">
                <div className="absolute inset-x-10 inset-y-14 bg-em-yellow rounded-3xl -rotate-3" />
                <Placeholder className="relative w-full aspect-[4/5] rounded-3xl" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PARTE 3 , Como ajudamos: BENTO alternado (1 hero card + 4 mini) */}
      <section className="bg-em-green-pale px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="max-w-[820px] mb-10 lg:mb-12">
              <p className="eyebrow text-em-green-dark mb-3">Apoio escolar no dia a dia</p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1] mb-6">
                Apoio escolar pra aprender melhor, <span className="marker-green">com mais confiança</span>
              </h2>
              <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed">
                As dificuldades escolares podem aparecer de várias formas: queda nas notas, falta de rotina, insegurança pra tirar dúvidas. Na Ensina Mais, seu filho recebe acompanhamento individualizado pra fortalecer a base, organizar os estudos e desenvolver autonomia.
              </p>
            </div>
          </FadeIn>

          {/* Bento: card hero (col-span-2) + 4 mini cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {/* Card hero ocupando 2 colunas */}
            <FadeIn>
              <article className={`group h-full bg-em-dark rounded-3xl p-7 sm:p-8 lg:col-span-2 md:col-span-2 relative overflow-clip shadow-[0_18px_42px_-22px_rgba(26,39,68,0.4)]`}>
                <div aria-hidden className="absolute inset-0 opacity-15 bg-repeat" style={{ backgroundImage: "url(/images/3d/pattern-confetti.webp)", backgroundSize: "320px" }} />
                <div className="relative">
                  <span className="sticker-icon bg-em-yellow text-em-dark mb-5 shadow-[0_12px_24px_-12px_rgba(0,0,0,0.4)]">
                    <Sparkles size={26} strokeWidth={1.8} />
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 leading-tight">
                    Mais do que revisar conteúdos, ajudamos seu filho a construir uma <span className="marker-yellow">relação positiva com o aprendizado</span>
                  </h3>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                    Com apoio, paciência e orientação em cada etapa, o aluno se sente acolhido pra tentar, errar e tentar de novo.
                  </p>
                </div>
              </article>
            </FadeIn>

            {DIA_A_DIA.slice(0, 2).map((b, i) => {
              const Icon = b.Icon;
              return (
                <FadeIn key={b.title} delay={(i + 1) * 0.06}>
                  <article className={`group h-full ${b.bg} rounded-3xl p-6 ${i % 2 === 0 ? "tilt-l1" : "tilt-r1"} tilt-hover-straighten shadow-[0_18px_42px_-22px_rgba(26,39,68,0.3)]`}>
                    <Icon size={28} strokeWidth={1.8} className="text-white mb-4" />
                    <h3 className="text-lg font-black text-white mb-2 leading-tight">{b.title}</h3>
                    <p className="text-sm text-white/85 leading-relaxed">{b.desc}</p>
                  </article>
                </FadeIn>
              );
            })}

            {DIA_A_DIA.slice(2).map((b, i) => {
              const Icon = b.Icon;
              return (
                <FadeIn key={b.title} delay={(i + 3) * 0.06}>
                  <article className={`group h-full ${b.bg} rounded-3xl p-6 ${i % 2 === 0 ? "tilt-r1" : "tilt-l1"} tilt-hover-straighten shadow-[0_18px_42px_-22px_rgba(26,39,68,0.3)]`}>
                    <Icon size={28} strokeWidth={1.8} className="text-white mb-4" />
                    <h3 className="text-lg font-black text-white mb-2 leading-tight">{b.title}</h3>
                    <p className="text-sm text-white/85 leading-relaxed">{b.desc}</p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARTE 4 , Turma da Mônica: split com cluster decorativo (sticker amarelo atrás da foto) */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-em-coral/12 rounded-full blur-2xl" />
        </div>
        <div className="relative max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-center">
          <FadeIn>
            <div className="relative">
              <div className="absolute inset-x-8 inset-y-12 bg-em-coral rounded-3xl rotate-2" />
              <Placeholder className="relative w-full aspect-[4/5] rounded-3xl" />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="eyebrow text-em-coral-dark mb-3">Marca querida</p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1] mb-6">
              Aprender com uma das <span className="marker-coral">turmas mais queridas do Brasil</span>
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-em-dark-soft/85 leading-relaxed">
              <p>A Turma da Mônica carrega uma força única: aproxima gerações, desperta memórias e cria familiaridade desde o primeiro contato.</p>
              <p>São personagens que muitos pais cresceram vendo, e que continuam fazendo parte da vida de muitas famílias brasileiras. Essa conexão transforma o ambiente de aprendizagem.</p>
              <p className="font-semibold text-em-dark">Quando o aluno se sente acolhido, aprender fica mais leve.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PARTE 5 , Por que escolher: 6 cards COLOR SÓLIDO (estilo Numbers, não white) */}
      <section className="bg-em-blue-pale px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="max-w-[820px] mb-10 lg:mb-12 text-center mx-auto">
              <p className="eyebrow text-em-blue-dark mb-3">Diferenciais</p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1] mb-6">
                Por que escolher a <span className="marker-blue">Ensina Mais Turma da Mônica?</span>
              </h2>
              <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed">
                Porque aprender melhor não depende só de repetir conteúdo. Depende de acompanhamento próximo, método, estímulo certo e um ambiente em que a criança se sinta segura pra tentar.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {POR_QUE.map((b, i) => {
              const Icon = b.Icon;
              return (
                <FadeIn key={b.title} delay={Math.min(i * 0.06, 0.24)}>
                  <article className={`relative ${b.bg} ${b.tilt} tilt-hover-straighten rounded-3xl p-6 sm:p-7 shadow-[0_18px_42px_-22px_rgba(26,39,68,0.3)] h-full`}>
                    <Icon size={32} strokeWidth={1.8} className="text-white mb-5" />
                    <h3 className="text-lg sm:text-xl font-black text-white mb-2 leading-tight">{b.title}</h3>
                    <p className="text-sm sm:text-base text-white/85 leading-relaxed">{b.desc}</p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARTE 6 , Nossos cursos: cards com number badge + bg pastel alternado */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="max-w-[820px] mb-10 lg:mb-12">
              <p className="eyebrow text-em-orange-dark mb-3">Áreas de aprendizado</p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1] mb-6">
                O que seu filho <span className="marker-yellow">desenvolve na Ensina Mais</span>
              </h2>
              <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed">
                Além do apoio às disciplinas escolares, a Ensina Mais oferece atividades que estimulam raciocínio, criatividade e habilidades digitais, preparando cada aluno pra aprender melhor hoje e pros desafios do futuro.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {CURSOS.map((c, i) => {
              const Icon = c.Icon;
              return (
                <FadeIn key={c.title} delay={Math.min(i * 0.06, 0.24)}>
                  <article className={`relative ${c.bg} rounded-3xl p-6 sm:p-7 h-full overflow-clip`}>
                    <span aria-hidden className="absolute right-4 top-2 text-[5rem] font-black leading-none text-white/55">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="relative">
                      <span className={`sticker-icon ${c.iconBg} text-white mb-5 shadow-[0_12px_24px_-12px_rgba(26,39,68,0.4)]`}>
                        <Icon size={24} strokeWidth={1.8} />
                      </span>
                      <h3 className="text-lg sm:text-xl font-black text-em-dark mb-2 leading-tight">{c.title}</h3>
                      <p className="text-sm sm:text-base text-em-dark-soft/82 leading-relaxed">{c.desc}</p>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARTE 7 , Acompanhamento: BAND ESCURA full com layout split */}
      <section className="px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="relative rounded-[2rem] lg:rounded-[2.75rem] bg-em-purple px-6 py-12 sm:p-12 lg:p-14 overflow-clip shadow-[0_24px_56px_-28px_rgba(26,39,68,0.48)]">
              <div aria-hidden className="absolute inset-0 opacity-15 bg-repeat pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url(/images/3d/pattern-dense.webp)", backgroundSize: "520px" }} />
              <div className="relative grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
                <div>
                  <p className="eyebrow text-em-yellow mb-3">Acompanhamento contínuo</p>
                  <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-white leading-[1.1] mb-6">
                    Acompanhamento que <span className="marker-yellow">faz diferença no dia a dia</span>
                  </h2>
                  <div className="space-y-4 text-base sm:text-lg text-white/85 leading-relaxed">
                    <p>Na Ensina Mais, o aluno não precisa esperar o fim do bimestre pra saber como está indo. O acompanhamento acontece durante o processo, e isso muda a forma como a criança aprende.</p>
                    <p>Quando o aluno recebe orientação no momento certo, ele entende onde precisa melhorar, encontra novos caminhos e avança com mais segurança. Pra família, é a mesma coisa: acompanha com clareza, sem depender só do boletim.</p>
                    <p className="font-semibold text-white">Cada avanço, por menor que pareça, é reconhecido e celebrado.</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-x-8 inset-y-12 bg-em-yellow/30 rounded-3xl rotate-2" />
                  <Placeholder className="relative w-full aspect-[4/5] rounded-3xl" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PARTE 8 , CTA Final */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn>
            <div className="relative rounded-[2rem] lg:rounded-[2.75rem] bg-em-dark px-6 py-12 sm:p-12 lg:p-16 overflow-clip shadow-[0_24px_56px_-28px_rgba(26,39,68,0.48)]">
              <div aria-hidden className="absolute inset-0 opacity-12 bg-repeat pointer-events-none" style={{ backgroundImage: "url(/images/3d/pattern-confetti.webp)", backgroundSize: "520px" }} />
              <div className="relative max-w-[760px] mx-auto text-center">
                <p className="eyebrow text-em-yellow mb-3">Vamos começar?</p>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight text-white leading-[1.1] mb-5">
                  Dê o primeiro passo <span className="marker-yellow">junto com a gente</span>
                </h2>
                <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-8">
                  Se você sente que seu filho precisa de mais apoio pra aprender, criar rotina ou ganhar confiança nos estudos, a Ensina Mais pode caminhar junto com a sua família. Sem compromisso, só pra você ver e sentir o ambiente.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  <a href="#lead" className="inline-flex items-center justify-center gap-2 text-sm sm:text-base font-black text-em-dark bg-em-yellow rounded-full px-7 sm:px-8 py-3.5 sm:py-4 hover:bg-white transition-colors shadow-button w-full sm:w-auto">
                    Agendar aula experimental gratuita <ArrowRight size={16} strokeWidth={2.4} />
                  </a>
                  <a href="/escolas" className="inline-flex items-center justify-center text-sm sm:text-base font-bold text-white bg-white/10 backdrop-blur rounded-full px-7 sm:px-8 py-3.5 sm:py-4 hover:bg-white/20 transition-colors w-full sm:w-auto">
                    Encontrar a unidade mais próxima
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <FaqAccordion eyebrow="FAQ" title="Perguntas frequentes sobre a Ensina Mais" items={FAQ} marker="yellow" />
    </main>
  );
}
