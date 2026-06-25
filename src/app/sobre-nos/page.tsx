import type { Metadata } from "next";
import {
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

const DIA_A_DIA: { Icon: LucideIcon; title: string; desc: string; iconBg: string }[] = [
  {
    Icon: BookOpen,
    iconBg: "bg-em-blue",
    title: "Fortalecendo a base escolar",
    desc: "Apoiamos o aluno nas principais dificuldades, especialmente em Língua Portuguesa e Matemática, para que ele avance com mais segurança.",
  },
  {
    Icon: ListChecks,
    iconBg: "bg-em-green",
    title: "Criando rotina de estudos",
    desc: "A criança aprende a estudar com mais organização, constância e responsabilidade.",
  },
  {
    Icon: Sparkles,
    iconBg: "bg-em-coral",
    title: "Desenvolvendo autonomia",
    desc: "Com acompanhamento próximo, o aluno passa a participar mais do próprio aprendizado e a confiar mais na sua capacidade.",
  },
  {
    Icon: Lightbulb,
    iconBg: "bg-em-orange",
    title: "Tornando o aprendizado mais leve",
    desc: "As atividades são pensadas para estimular a curiosidade, o raciocínio e a vontade de aprender.",
  },
  {
    Icon: HeartHandshake,
    iconBg: "bg-em-purple",
    title: "Mantendo a família próxima do processo",
    desc: "Os responsáveis acompanham a evolução do aluno com mais clareza e segurança, entendendo como ele está progredindo a cada etapa.",
  },
];

const POR_QUE: { Icon: LucideIcon; title: string; desc: string; iconBg: string }[] = [
  {
    Icon: Target,
    iconBg: "bg-em-blue",
    title: "Acompanhamento individualizado",
    desc: "Cada aluno é acompanhado de perto, com atenção às suas dificuldades, ao seu ritmo e às suas conquistas ao longo do processo.",
  },
  {
    Icon: Cpu,
    iconBg: "bg-em-green",
    title: "Metodologia que une educação e tecnologia",
    desc: "Desde 2012, combinamos o melhor da educação com recursos digitais, jogos, robótica e programação para tornar o aprendizado mais eficiente e envolvente.",
  },
  {
    Icon: ListChecks,
    iconBg: "bg-em-coral",
    title: "Rotina estruturada",
    desc: "Ajudamos a criança a criar organização, constância e responsabilidade com os estudos, habilidades que fazem diferença dentro e fora da escola.",
  },
  {
    Icon: Lightbulb,
    iconBg: "bg-em-orange",
    title: "Feedback claro para o aluno e para a família",
    desc: "O aluno entende onde precisa avançar. E a família acompanha essa evolução com mais clareza e segurança.",
  },
  {
    Icon: Sparkles,
    iconBg: "bg-em-purple",
    title: "Desenvolvimento que vai além das matérias",
    desc: "Trabalhamos raciocínio lógico, criatividade, autonomia e habilidades digitais, preparando a criança para os desafios do presente e do futuro.",
  },
  {
    Icon: Users,
    iconBg: "bg-em-green-dark",
    title: "Parceria com a família",
    desc: "A família não fica de fora do processo. Aqui, pais e responsáveis têm uma escola parceira que acompanha, informa e caminha junto.",
  },
];

const CURSOS: { Icon: LucideIcon; title: string; desc: string; iconBg: string; tilt: string }[] = [
  {
    Icon: BookOpen,
    iconBg: "bg-em-blue",
    tilt: "lg:tilt-l1",
    title: "Língua Portuguesa",
    desc: "Mais leitura, interpretação e escrita. A criança desenvolve segurança para se comunicar melhor dentro e fora da escola.",
  },
  {
    Icon: Calculator,
    iconBg: "bg-em-green",
    tilt: "lg:tilt-r1",
    title: "Matemática",
    desc: "Fortalecimento da base, raciocínio lógico e mais confiança para resolver problemas do dia a dia.",
  },
  {
    Icon: Cpu,
    iconBg: "bg-em-coral",
    tilt: "lg:tilt-l1",
    title: "Robótica",
    desc: "Atividades práticas que estimulam criatividade, curiosidade, pensamento lógico e capacidade de resolver problemas de forma colaborativa.",
  },
  {
    Icon: Smartphone,
    iconBg: "bg-em-orange",
    tilt: "lg:tilt-r1",
    title: "Apps",
    desc: "Contato orientado com a tecnologia, desenvolvendo organização, autonomia e pensamento digital de forma segura e com propósito.",
  },
  {
    Icon: Gamepad2,
    iconBg: "bg-em-purple",
    tilt: "lg:tilt-l1",
    title: "Games",
    desc: "Aprendizado por meio de desafios e interação, tornando o processo mais leve, envolvente e motivador para o aluno.",
  },
  {
    Icon: Monitor,
    iconBg: "bg-em-green-dark",
    tilt: "lg:tilt-r1",
    title: "Programação",
    desc: "Primeiros passos no universo da lógica e da criação digital, habilidades cada vez mais importantes para o presente e para o futuro.",
  },
];

const FAQ = [
  {
    q: "O que é a Ensina Mais Turma da Mônica?",
    a: "A Ensina Mais Turma da Mônica é uma rede de apoio escolar do Grupo MoveEdu, criada para acompanhar crianças e adolescentes em diferentes momentos da aprendizagem. Com licenciamento da Turma da Mônica, a rede une uma marca presente na infância de muitas famílias brasileiras a uma proposta pedagógica que valoriza acolhimento, método e desenvolvimento individual.",
  },
  {
    q: "A Ensina Mais é só reforço escolar?",
    a: "Não. Além do apoio às disciplinas escolares, como Língua Portuguesa e Matemática, a Ensina Mais oferece atividades de Robótica, Programação, Apps e Games, áreas que desenvolvem raciocínio lógico, criatividade, autonomia e habilidades digitais. A proposta vai além de revisar conteúdo: é ajudar a criança a construir uma relação mais positiva com o aprendizado.",
  },
  {
    q: "Para qual idade ou série a Ensina Mais atende?",
    a: "A Ensina Mais atende crianças e adolescentes em diferentes fases escolares, desde o ensino fundamental até o ensino médio. O acompanhamento é individualizado, o que significa que o programa é ajustado de acordo com o momento de cada aluno, independentemente da série.",
  },
  {
    q: "Como a Ensina Mais acompanha a evolução do meu filho?",
    a: "O acompanhamento acontece durante o processo de aprendizagem, não só no final do bimestre. O aluno recebe orientação e feedback nas próprias atividades, o que ajuda a identificar dificuldades e avançar com mais segurança. A família também acompanha a evolução com clareza, sem depender apenas do boletim escolar.",
  },
  {
    q: "O que significa ensino individualizado na Ensina Mais?",
    a: "Significa que cada aluno é acompanhado de acordo com seu ritmo, suas dificuldades e suas necessidades, não pelo ritmo médio de uma turma. As atividades são organizadas a partir do nível do aluno, e o instrutor ajusta o caminho sempre que necessário, sem fazer a criança se sentir mal por ter dificuldade.",
  },
  {
    q: "Qual é o papel da Turma da Mônica na Ensina Mais?",
    a: "A Turma da Mônica é uma das marcas mais queridas e reconhecidas do Brasil, presente na infância de muitas gerações. Na Ensina Mais, essa presença ajuda a criar um ambiente mais familiar, acolhedor e lúdico para a criança, tornando o aprendizado mais próximo do universo infantil e facilitando o engajamento do aluno nas atividades.",
  },
  {
    q: "A Ensina Mais trabalha em parceria com a família?",
    a: "Sim. A família não fica de fora do processo. Os pais e responsáveis acompanham a evolução do aluno com clareza e têm uma escola parceira que informa, escuta e caminha junto em cada etapa do desenvolvimento da criança.",
  },
  {
    q: "Como a tecnologia é usada na Ensina Mais?",
    a: "A tecnologia é usada com orientação e propósito, não como entretenimento. Recursos digitais, games, robótica, apps e programação são ferramentas escolhidas para desenvolver habilidades reais, como raciocínio lógico, criatividade, concentração e autonomia. O instrutor está sempre presente para garantir que cada atividade digital tenha um objetivo claro de aprendizagem.",
  },
  {
    q: "A Ensina Mais funciona para crianças que não têm dificuldade escolar?",
    a: "Sim. A Ensina Mais atende tanto alunos que precisam superar dificuldades escolares quanto crianças e adolescentes que querem ir além do que a escola regular oferece. As atividades de Robótica, Programação, Games e Apps são especialmente indicadas para quem quer desenvolver novas habilidades e se preparar para os desafios do futuro.",
  },
  {
    q: "Como posso conhecer a Ensina Mais antes de matricular meu filho?",
    a: "A Ensina Mais oferece uma aula experimental gratuita, sem compromisso. É a melhor forma de conhecer o ambiente, entender como o acompanhamento funciona na prática e avaliar se faz sentido para o seu filho. Basta encontrar a unidade mais próxima e entrar em contato.",
  },
];

export default function SobreNosPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* HERO , abertura */}
      <section className="relative bg-em-dark pt-24 pb-16 sm:pb-20 px-4 sm:px-6 rounded-b-[46px] overflow-clip">
        <div
          aria-hidden
          className="absolute inset-0 opacity-12 bg-repeat pointer-events-none"
          style={{ backgroundImage: "url(/images/3d/pattern-dense.webp)", backgroundSize: "520px" }}
        />
        <div className="relative max-w-[1200px] mx-auto text-center">
          <FadeIn>
            <p className="eyebrow text-em-yellow mb-4">Sobre Nós</p>
            <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-black tracking-tight text-white mb-5 max-w-[920px] mx-auto leading-[1.05]">
              Cada criança aprende de um jeito.{" "}
              <span className="marker-yellow">Entender isso é o primeiro passo do nosso trabalho.</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-[760px] mx-auto leading-relaxed mb-4 font-semibold">
              Na Ensina Mais Turma da Mônica, seu filho é acompanhado de perto, com escuta, método e
              cuidado, para aprender com mais confiança, criar rotina de estudos e desenvolver
              habilidades que fazem diferença hoje e no futuro.
            </p>
            <p className="text-sm sm:text-base text-white/75 max-w-[720px] mx-auto leading-relaxed">
              Sabemos que por trás de cada dificuldade escolar existe uma história. E que entender essa
              história é o que faz a diferença no aprendizado. Aqui, o ponto de partida é sempre o
              aluno, seu ritmo, suas dificuldades e o que ele já traz de potencial.
            </p>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="/cursos"
                className="inline-flex items-center justify-center text-sm sm:text-base font-black text-em-dark bg-em-yellow rounded-full px-6 sm:px-7 py-3 sm:py-3.5 hover:bg-white transition-colors shadow-button"
              >
                Conheça nossos cursos
              </a>
              <a
                href="/escolas"
                className="inline-flex items-center justify-center text-sm sm:text-base font-bold text-white bg-white/10 backdrop-blur rounded-full px-6 sm:px-7 py-3 sm:py-3.5 hover:bg-white/20 transition-colors"
              >
                Encontre a unidade mais próxima
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PARTE 2 , Conheça a Ensina Mais */}
      <section className="px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <FadeIn>
            <p className="eyebrow text-em-blue-dark mb-3">Quem somos</p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1] mb-6">
              Conheça a <span className="marker-yellow">Ensina Mais Turma da Mônica</span>
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-em-dark-soft/85 leading-relaxed">
              <p>
                A Ensina Mais Turma da Mônica é uma rede de apoio escolar do Grupo MoveEdu, criada
                para acompanhar crianças e adolescentes em diferentes momentos da aprendizagem.
              </p>
              <p>
                Com o licenciamento da Turma da Mônica, uma das turmas mais queridas e reconhecidas
                do Brasil, unimos uma marca presente na infância de muitas famílias a uma proposta
                pedagógica que valoriza acolhimento, método e desenvolvimento individual.
              </p>
              <p>
                Nossa abordagem combina acompanhamento individualizado, atividades interativas e
                tecnologia com propósito para ajudar cada aluno a fortalecer sua base escolar, ganhar
                autonomia e desenvolver uma relação mais positiva com o aprendizado.
              </p>
              <p className="font-semibold text-em-dark">
                Aqui, crianças e adolescentes aprendem com acompanhamento próximo, e a família
                encontra uma escola parceira que caminha junto em cada etapa.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.12}>
            <Placeholder className="w-full aspect-[4/5] rounded-3xl" />
          </FadeIn>
        </div>
      </section>

      {/* PARTE 3 , Como ajudamos no dia a dia */}
      <section className="bg-em-green-pale px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="max-w-[820px] mb-12 lg:mb-14">
              <p className="eyebrow text-em-green-dark mb-3">Apoio escolar no dia a dia</p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1] mb-6">
                Apoio escolar para aprender melhor,{" "}
                <span className="marker-green">com mais confiança</span>
              </h2>
              <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed mb-3">
                As dificuldades escolares podem aparecer de várias formas: queda nas notas, falta de
                rotina, insegurança para tirar dúvidas ou sensação de que aprender está ficando cada
                vez mais difícil.
              </p>
              <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed">
                Na Ensina Mais Turma da Mônica, seu filho recebe acompanhamento individualizado para
                fortalecer a base escolar, organizar os estudos e desenvolver mais autonomia no
                processo de aprendizagem.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {DIA_A_DIA.map((b, i) => {
              const Icon = b.Icon;
              const tilt = i % 2 === 0 ? "lg:tilt-l1" : "lg:tilt-r1";
              return (
                <FadeIn key={b.title} delay={Math.min(i * 0.06, 0.24)}>
                  <article
                    className={`group h-full bg-white rounded-3xl p-6 sm:p-7 shadow-[0_18px_42px_-22px_rgba(26,39,68,0.24)] ${tilt} tilt-hover-straighten`}
                  >
                    <span
                      className={`sticker-icon ${b.iconBg} text-white mb-5 shadow-[0_12px_24px_-12px_rgba(26,39,68,0.4)]`}
                    >
                      <Icon size={26} strokeWidth={1.8} />
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-em-dark mb-2 leading-tight">
                      {b.title}
                    </h3>
                    <p className="text-sm sm:text-base text-em-dark-soft/82 leading-relaxed">
                      {b.desc}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={0.2}>
            <p className="mt-12 lg:mt-14 max-w-[820px] mx-auto text-center text-base sm:text-lg font-semibold text-em-dark leading-relaxed">
              Mais do que revisar conteúdos, a Ensina Mais ajuda seu filho a construir uma relação
              mais positiva com o aprendizado, com apoio, paciência e orientação em cada etapa.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* PARTE 4 , A força da Turma da Mônica */}
      <section className="px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-center">
          <FadeIn>
            <Placeholder className="w-full aspect-[4/5] rounded-3xl" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="eyebrow text-em-coral-dark mb-3">Aprender com uma marca querida</p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1] mb-6">
              Aprender com uma das{" "}
              <span className="marker-coral">turmas mais queridas do Brasil</span>
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-em-dark-soft/85 leading-relaxed">
              <p>
                A Turma da Mônica carrega uma força única: aproxima gerações, desperta memórias e
                cria uma sensação de familiaridade desde o primeiro contato.
              </p>
              <p>
                Na Ensina Mais Turma da Mônica, essa presença ajuda a criança a chegar em um ambiente
                que já parece conhecido. São personagens que muitos pais cresceram vendo, e que
                continuam fazendo parte da vida de muitas famílias brasileiras.
              </p>
              <p>
                Essa conexão transforma o ambiente de aprendizagem. A criança se sente mais à vontade
                para participar, perguntar e se envolver com as atividades. E quando o aluno se sente
                acolhido, aprender fica mais leve.
              </p>
              <p className="font-semibold text-em-dark">
                Aqui, a Turma da Mônica ajuda a tornar o aprendizado mais próximo da infância, mais
                afetivo e mais conectado com o universo da criança brasileira.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PARTE 5 , Por que escolher */}
      <section className="bg-em-blue-pale px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="max-w-[820px] mb-12 lg:mb-14">
              <p className="eyebrow text-em-blue-dark mb-3">Diferenciais</p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1] mb-6">
                Por que escolher a{" "}
                <span className="marker-blue">Ensina Mais Turma da Mônica?</span>
              </h2>
              <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed mb-3">
                Porque aprender melhor não depende só de repetir conteúdo. Depende de acompanhamento
                próximo, método, estímulo certo e um ambiente em que a criança se sinta segura para
                tentar, errar e tentar de novo.
              </p>
              <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed">
                Na Ensina Mais, seu filho encontra tudo isso, com professores que escutam, atividades
                que estimulam e uma proposta que respeita o jeito de cada aluno aprender.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {POR_QUE.map((b, i) => {
              const Icon = b.Icon;
              const tilt = i % 2 === 0 ? "lg:tilt-l1" : "lg:tilt-r1";
              return (
                <FadeIn key={b.title} delay={Math.min(i * 0.06, 0.24)}>
                  <article
                    className={`group h-full bg-white rounded-3xl p-6 sm:p-7 shadow-[0_18px_42px_-22px_rgba(26,39,68,0.24)] ${tilt} tilt-hover-straighten`}
                  >
                    <span
                      className={`sticker-icon ${b.iconBg} text-white mb-5 shadow-[0_12px_24px_-12px_rgba(26,39,68,0.4)]`}
                    >
                      <Icon size={26} strokeWidth={1.8} />
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-em-dark mb-2 leading-tight">
                      {b.title}
                    </h3>
                    <p className="text-sm sm:text-base text-em-dark-soft/82 leading-relaxed">
                      {b.desc}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={0.2}>
            <p className="mt-12 lg:mt-14 max-w-[820px] mx-auto text-center text-base sm:text-lg font-semibold text-em-dark leading-relaxed">
              Seja para superar dificuldades escolares, criar rotina de estudos ou desenvolver novas
              habilidades, a Ensina Mais Turma da Mônica está pronta para caminhar junto com o seu
              filho, e com a sua família.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* PARTE 6 , Nossos cursos */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="max-w-[820px] mb-12 lg:mb-14">
              <p className="eyebrow text-em-orange-dark mb-3">Áreas de aprendizado</p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1] mb-6">
                O que seu filho{" "}
                <span className="marker-yellow">desenvolve na Ensina Mais</span>
              </h2>
              <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed">
                Além do apoio às disciplinas escolares, a Ensina Mais Turma da Mônica oferece
                atividades que estimulam o raciocínio, a criatividade e as habilidades digitais,
                preparando cada aluno para aprender melhor hoje e para os desafios do futuro.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {CURSOS.map((c, i) => {
              const Icon = c.Icon;
              return (
                <FadeIn key={c.title} delay={Math.min(i * 0.06, 0.24)}>
                  <article
                    className={`group h-full bg-white rounded-3xl p-6 sm:p-7 shadow-[0_18px_42px_-22px_rgba(26,39,68,0.24)] ${c.tilt} tilt-hover-straighten`}
                  >
                    <span
                      className={`sticker-icon ${c.iconBg} text-white mb-5 shadow-[0_12px_24px_-12px_rgba(26,39,68,0.4)]`}
                    >
                      <Icon size={26} strokeWidth={1.8} />
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-em-dark mb-2 leading-tight">
                      {c.title}
                    </h3>
                    <p className="text-sm sm:text-base text-em-dark-soft/82 leading-relaxed">
                      {c.desc}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={0.2}>
            <p className="mt-12 lg:mt-14 max-w-[820px] mx-auto text-center text-base sm:text-lg font-semibold text-em-dark leading-relaxed">
              Seja para fortalecer o que a escola ensina ou para desenvolver novas habilidades, a
              Ensina Mais oferece um caminho completo de aprendizagem, com método, cuidado e
              tecnologia com propósito.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* PARTE 7 , Feedback imediato */}
      <section className="bg-em-coral-pale px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <FadeIn>
            <p className="eyebrow text-em-coral-dark mb-3">Acompanhamento contínuo</p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1] mb-6">
              Acompanhamento que{" "}
              <span className="marker-coral">faz diferença no dia a dia</span>
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-em-dark-soft/85 leading-relaxed">
              <p>
                Na Ensina Mais Turma da Mônica, o aluno não precisa esperar o fim do bimestre para
                saber como está indo. O acompanhamento acontece durante o processo, e isso muda a
                forma como a criança aprende.
              </p>
              <p>
                Quando o aluno recebe orientação no momento certo, ele entende onde precisa melhorar,
                encontra novos caminhos para resolver uma dificuldade e avança com mais segurança. Em
                vez de acumular dúvidas, ele aprende a superá-las passo a passo.
              </p>
              <p>
                Para a família, isso também faz diferença. Os pais acompanham a evolução do filho com
                mais clareza, sem depender só do boletim para entender como ele está se desenvolvendo.
              </p>
              <p className="font-semibold text-em-dark">
                Aqui, o progresso da criança é observado de perto, e cada avanço, por menor que
                pareça, é reconhecido e celebrado.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.12}>
            <Placeholder className="w-full aspect-[4/5] rounded-3xl" />
          </FadeIn>
        </div>
      </section>

      {/* PARTE 8 , CTA Final */}
      <section className="px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn>
            <div className="relative rounded-[2rem] lg:rounded-[2.75rem] bg-em-dark px-6 py-12 sm:p-12 lg:p-16 overflow-clip shadow-[0_24px_56px_-28px_rgba(26,39,68,0.48)]">
              <div
                aria-hidden
                className="absolute inset-0 opacity-12 bg-repeat pointer-events-none"
                style={{ backgroundImage: "url(/images/3d/pattern-confetti.webp)", backgroundSize: "520px" }}
              />
              <div className="relative max-w-[760px] mx-auto text-center">
                <p className="eyebrow text-em-yellow mb-3">Vamos começar?</p>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight text-white leading-[1.1] mb-5">
                  Dê o primeiro passo{" "}
                  <span className="marker-yellow">junto com a gente</span>
                </h2>
                <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-8">
                  Se você sente que seu filho precisa de mais apoio para aprender, criar rotina ou
                  ganhar confiança nos estudos, a Ensina Mais Turma da Mônica pode caminhar junto com
                  a sua família. Agende uma aula experimental gratuita e conheça de perto como
                  trabalhamos. Sem compromisso, só para você ver, sentir o ambiente e entender se faz
                  sentido para o seu filho.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  <a
                    href="#lead"
                    className="inline-flex items-center justify-center text-sm sm:text-base font-black text-em-dark bg-em-yellow rounded-full px-7 sm:px-8 py-3.5 sm:py-4 hover:bg-white transition-colors shadow-button w-full sm:w-auto"
                  >
                    Agendar aula experimental gratuita
                  </a>
                  <a
                    href="/escolas"
                    className="inline-flex items-center justify-center text-sm sm:text-base font-bold text-white bg-white/10 backdrop-blur rounded-full px-7 sm:px-8 py-3.5 sm:py-4 hover:bg-white/20 transition-colors w-full sm:w-auto"
                  >
                    Encontrar a unidade mais próxima
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <FaqAccordion
        eyebrow="FAQ"
        title="Perguntas frequentes sobre a Ensina Mais"
        items={FAQ}
        marker="yellow"
      />
    </main>
  );
}
