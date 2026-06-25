import type { Metadata } from "next";
import {
  BookOpen,
  Brain,
  Calculator,
  Cpu,
  Eye,
  Gamepad2,
  HeartHandshake,
  ListChecks,
  Monitor,
  Smartphone,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Metodologia · Ensina Mais Turma da Mônica",
  description:
    "Um jeito de ensinar que começa pelo aluno, não pelo conteúdo. Acompanhamento individualizado, ensino híbrido e tecnologia com propósito.",
};

const ACOMPANHAMENTO: { Icon: LucideIcon; title: string; desc: string; iconBg: string }[] = [
  {
    Icon: Eye,
    iconBg: "bg-em-blue",
    title: "Entendemos o momento do aluno",
    desc: "Observamos as principais dificuldades, a relação da criança com os estudos e os pontos que precisam de mais atenção antes de qualquer atividade.",
  },
  {
    Icon: ListChecks,
    iconBg: "bg-em-green",
    title: "Construímos uma rotina de aprendizagem",
    desc: "Cada aluno tem um percurso organizado, com atividades que ajudam a desenvolver constância, foco e autonomia nos estudos.",
  },
  {
    Icon: Users,
    iconBg: "bg-em-coral",
    title: "Acompanhamos de perto cada etapa",
    desc: "O aluno não fica sozinho diante de uma dificuldade. Tem sempre um instrutor presente para orientar, explicar de novo e ajudar a encontrar o caminho.",
  },
  {
    Icon: Sparkles,
    iconBg: "bg-em-orange",
    title: "Damos feedback durante o processo",
    desc: "A criança não precisa esperar o fim do bimestre para saber como está indo. O retorno acontece durante as atividades, o que ajuda o aluno a entender, corrigir e avançar com mais segurança.",
  },
  {
    Icon: HeartHandshake,
    iconBg: "bg-em-purple",
    title: "Mantemos a família informada",
    desc: "Os responsáveis acompanham a evolução do filho com clareza, entendendo como ele está progredindo e o que está sendo trabalhado em cada etapa.",
  },
];

const INDIVIDUALIZADO: { Icon: LucideIcon; title: string; desc: string; iconBg: string }[] = [
  {
    Icon: Target,
    iconBg: "bg-em-blue",
    title: "O ponto de partida é ele",
    desc: "As atividades são organizadas a partir do nível e das necessidades do aluno, não de um programa fixo igual para todos.",
  },
  {
    Icon: ListChecks,
    iconBg: "bg-em-green",
    title: "O ritmo é respeitado",
    desc: "A criança avança quando está pronta, com segurança, sem pular etapas e sem se sentir pressionada a acompanhar os outros.",
  },
  {
    Icon: HeartHandshake,
    iconBg: "bg-em-coral",
    title: "A dificuldade é tratada com cuidado",
    desc: "Quando o aluno não entende, o instrutor explica de outro jeito. Busca um caminho diferente. Não repete a mesma explicação esperando um resultado diferente.",
  },
  {
    Icon: Eye,
    iconBg: "bg-em-orange",
    title: "A evolução é acompanhada de perto",
    desc: "Cada avanço é observado e reconhecido, inclusive os pequenos, que muitas vezes são os mais importantes para a criança voltar a acreditar que consegue aprender.",
  },
];

const TECNOLOGIA: { Icon: LucideIcon; title: string; desc: string; iconBg: string; tilt: string }[] = [
  {
    Icon: BookOpen,
    iconBg: "bg-em-blue",
    tilt: "lg:tilt-l1",
    title: "Língua Portuguesa",
    desc: "Leitura, interpretação e escrita trabalhadas de forma interativa, ajudando a criança a se comunicar melhor dentro e fora da escola.",
  },
  {
    Icon: Calculator,
    iconBg: "bg-em-green",
    tilt: "lg:tilt-r1",
    title: "Matemática",
    desc: "Raciocínio lógico e resolução de problemas com atividades que tornam o conteúdo mais visual, prático e compreensível.",
  },
  {
    Icon: Cpu,
    iconBg: "bg-em-coral",
    tilt: "lg:tilt-l1",
    title: "Robótica",
    desc: "Criatividade, trabalho em equipe e pensamento lógico desenvolvidos por meio de desafios práticos e colaborativos.",
  },
  {
    Icon: Smartphone,
    iconBg: "bg-em-orange",
    tilt: "lg:tilt-r1",
    title: "Apps",
    desc: "Contato orientado com a tecnologia, desenvolvendo organização, autonomia e pensamento digital com segurança e propósito.",
  },
  {
    Icon: Gamepad2,
    iconBg: "bg-em-purple",
    tilt: "lg:tilt-l1",
    title: "Games",
    desc: "Aprendizado por meio de desafios e interação, tornando o processo mais leve, motivador e envolvente para o aluno.",
  },
  {
    Icon: Monitor,
    iconBg: "bg-em-green-dark",
    tilt: "lg:tilt-r1",
    title: "Programação",
    desc: "Primeiros passos no universo da lógica e da criação digital, preparando a criança para um mundo cada vez mais conectado.",
  },
];

const BENEFICIOS: { Icon: LucideIcon; title: string; desc: string; iconBg: string }[] = [
  {
    Icon: Sparkles,
    iconBg: "bg-em-blue",
    title: "Mais confiança para aprender",
    desc: "A criança começa a tentar antes de desistir. Passa a perguntar mais, participar mais e se sentir menos travada diante de uma dificuldade.",
  },
  {
    Icon: BookOpen,
    iconBg: "bg-em-green",
    title: "Melhora na base escolar",
    desc: "Com as dificuldades tratadas de forma orientada, o aluno passa a compreender melhor os conteúdos, e isso aparece nas notas, nas avaliações e no desempenho em sala de aula.",
  },
  {
    Icon: ListChecks,
    iconBg: "bg-em-coral",
    title: "Rotina de estudos mais organizada",
    desc: "A criança desenvolve constância e responsabilidade com os estudos, criando hábitos que fazem diferença ao longo de toda a vida escolar.",
  },
  {
    Icon: Target,
    iconBg: "bg-em-orange",
    title: "Mais autonomia no aprendizado",
    desc: "O aluno passa a participar mais do próprio processo, organiza melhor o tempo, tenta resolver antes de pedir ajuda e confia mais na própria capacidade.",
  },
  {
    Icon: Brain,
    iconBg: "bg-em-purple",
    title: "Raciocínio lógico mais desenvolvido",
    desc: "As atividades de Matemática, Robótica, Games e Programação estimulam a criança a pensar melhor, criar soluções e enfrentar desafios com mais repertório.",
  },
  {
    Icon: HeartHandshake,
    iconBg: "bg-em-green-dark",
    title: "Mais tranquilidade para os pais",
    desc: "A família conta com uma escola parceira que acompanha, informa e caminha junto, sem deixar os responsáveis no escuro sobre o desenvolvimento do filho.",
  },
];

const FAQ = [
  {
    q: "O que é a metodologia da Ensina Mais Turma da Mônica?",
    a: "A metodologia da Ensina Mais combina acompanhamento individualizado, ensino híbrido e tecnologia com propósito para ajudar cada aluno a aprender no seu próprio ritmo. O ponto de partida não é o conteúdo, é o aluno. Antes de qualquer atividade, a equipe observa onde a criança está, o que ela já sabe e o que precisa de mais atenção para construir um caminho de aprendizagem pensado para ela.",
  },
  {
    q: "O que é ensino híbrido e como ele funciona na Ensina Mais?",
    a: "Ensino híbrido é a combinação do acompanhamento presencial com recursos digitais e tecnológicos. Na Ensina Mais, isso significa que o instrutor está sempre presente, orientando o aluno, enquanto atividades interativas, games, robótica, apps e programação são usados como ferramentas de aprendizagem com objetivo claro. A tecnologia não substitui o professor, ela potencializa o acompanhamento.",
  },
  {
    q: "Como a Ensina Mais adapta o ensino para cada criança?",
    a: "Cada aluno tem um percurso organizado a partir do seu nível, das suas dificuldades e do seu ritmo de aprendizagem. Não existe um programa fixo igual para todos. Se uma criança precisa de mais tempo para entender um conteúdo, ela tem esse tempo. Se já avançou e quer ir além, também encontra espaço. O instrutor acompanha de perto e ajusta o caminho sempre que necessário.",
  },
  {
    q: "Como funciona o feedback na Ensina Mais?",
    a: "O feedback acontece durante as atividades, não só no final do bimestre. Quando o aluno erra ou trava em algum ponto, o instrutor orienta no momento certo, ajudando a criança a entender onde precisa melhorar, encontrar novos caminhos e avançar com mais segurança. Esse acompanhamento contínuo evita que as dúvidas se acumulem e torna o aprendizado mais eficiente.",
  },
  {
    q: "Quanto tempo leva para ver resultados com a metodologia da Ensina Mais?",
    a: "Os resultados variam de acordo com o momento de cada criança, mas as famílias costumam notar mudanças na postura, na rotina e na confiança do aluno antes mesmo de aparecerem nas notas. Com acompanhamento próximo e rotina bem construída, a evolução acontece de forma gradual e consistente, sem promessas de resultados imediatos, mas com um processo sólido e orientado.",
  },
  {
    q: "A metodologia da Ensina Mais funciona para crianças com dificuldade de concentração?",
    a: "Sim. As atividades são pensadas para ser interativas, dinâmicas e conectadas com o cotidiano do aluno, o que ajuda a manter o engajamento e reduzir a dispersão. O uso orientado de games, robótica e programação também contribui para desenvolver foco e concentração de forma mais leve e envolvente.",
  },
  {
    q: "Como a Ensina Mais desenvolve autonomia no aluno?",
    a: "A autonomia é construída gradualmente. Com um percurso organizado e acompanhamento próximo, o aluno aprende a se organizar, criar rotina de estudos e participar mais ativamente do próprio aprendizado. Com o tempo, ele passa a tentar resolver antes de pedir ajuda e a confiar mais na própria capacidade, habilidades que fazem diferença dentro e fora da escola.",
  },
  {
    q: "De que forma a tecnologia ajuda no aprendizado na Ensina Mais?",
    a: "Na Ensina Mais, a tecnologia é usada com intenção pedagógica clara. Recursos digitais, games, robótica, apps e programação desenvolvem habilidades reais como raciocínio lógico, criatividade, pensamento digital e resolução de problemas. Não se trata de entretenimento, cada atividade tecnológica tem um objetivo de aprendizagem e acontece com orientação do instrutor.",
  },
  {
    q: "Como os pais acompanham o desenvolvimento do filho na Ensina Mais?",
    a: "Os responsáveis acompanham a evolução do aluno com clareza ao longo do processo, não apenas por meio do boletim escolar. A equipe da Ensina Mais mantém a família informada sobre o que está sendo trabalhado, como o aluno está progredindo e quais são os próximos passos.\n\nPara facilitar esse acompanhamento, a Ensina Mais disponibiliza um aplicativo onde os pais podem acompanhar o desenvolvimento do filho de forma prática e atualizada, sem precisar esperar pelo retorno da escola.\n\nO objetivo é que os pais se sintam parceiros do processo, não observadores distantes.",
  },
  {
    q: "Como posso conhecer a metodologia da Ensina Mais na prática?",
    a: "A melhor forma é agendar uma aula experimental gratuita. Nela, é possível ver de perto como o acompanhamento acontece, conhecer o ambiente e entender como a metodologia se aplica ao momento do seu filho, sem compromisso e sem pressão. Basta encontrar a unidade mais próxima e entrar em contato com a equipe.",
  },
];

export default function MetodologiaPage() {
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
            <p className="eyebrow text-em-yellow mb-4">Metodologia</p>
            <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-black tracking-tight text-white mb-5 max-w-[920px] mx-auto leading-[1.05]">
              Um jeito de ensinar que começa pelo aluno,{" "}
              <span className="marker-yellow">não pelo conteúdo.</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-[760px] mx-auto leading-relaxed mb-4 font-semibold">
              Na Ensina Mais Turma da Mônica, a metodologia foi pensada para respeitar o ritmo de
              cada criança, combinando acompanhamento individualizado, tecnologia com propósito e
              ensino híbrido para tornar o aprendizado mais eficiente e mais humano.
            </p>
            <p className="text-sm sm:text-base text-white/75 max-w-[720px] mx-auto leading-relaxed">
              Todo professor sabe que não existe uma fórmula única para ensinar. O que funciona para
              uma criança pode não funcionar para outra. Por isso, nossa metodologia não começa pelo
              conteúdo, ela começa pelo aluno. Antes de ensinar, a gente observa.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION , Como funciona o acompanhamento */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="max-w-[820px] mb-12 lg:mb-14">
              <p className="eyebrow text-em-blue-dark mb-3">Acompanhamento</p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1] mb-6">
                Como funciona o{" "}
                <span className="marker-blue">acompanhamento na Ensina Mais</span>
              </h2>
              <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed mb-3">
                Quando uma criança chega na Ensina Mais, o primeiro passo não é colocá-la direto nas
                atividades. É entender onde ela está, o que já sabe, onde trava e o que precisa de
                mais atenção.
              </p>
              <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed">
                A partir daí, construímos um caminho de aprendizagem pensado para ela. Com atividades
                orientadas, acompanhamento próximo e tecnologia como apoio, o aluno avança no seu
                próprio ritmo, sem pressão e sem comparação com os outros.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {ACOMPANHAMENTO.map((b, i) => {
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
              Esse acompanhamento contínuo é o que faz a diferença. Não é só sobre aprender o
              conteúdo, é sobre a criança perceber que está evoluindo, ganhar confiança e desenvolver
              uma relação mais positiva com os estudos.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION , Ensino individualizado */}
      <section className="bg-em-green-pale px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="max-w-[820px] mb-12 lg:mb-14">
              <p className="eyebrow text-em-green-dark mb-3">Ensino individualizado</p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1] mb-6">
                Cada criança tem um caminho.{" "}
                <span className="marker-green">A gente ajuda a construir o dela.</span>
              </h2>
              <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed mb-3">
                Muito se fala em ensino individualizado. Mas na prática, isso significa que cada
                aluno recebe atenção de acordo com o seu momento, não com o momento médio da turma.
              </p>
              <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed">
                Na Ensina Mais, não existe um ritmo único que todos precisam acompanhar. Se uma
                criança precisa de mais tempo para entender um conceito de Matemática, ela tem esse
                tempo. Se outra já avançou e quer ir além, ela também encontra espaço para isso.
                Nosso papel é observar cada aluno com atenção, identificar onde ele está travando e
                ajustar o caminho, sempre com orientação próxima e sem fazer a criança se sentir mal
                por ter dificuldade.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {INDIVIDUALIZADO.map((b, i) => {
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
              É esse olhar individualizado que transforma o aprendizado. Não porque a criança de
              repente ficou mais inteligente, mas porque ela finalmente encontrou um espaço onde o
              jeito dela de aprender é respeitado.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION , Tecnologia com propósito */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="max-w-[820px] mb-12 lg:mb-14">
              <p className="eyebrow text-em-orange-dark mb-3">Tecnologia com propósito</p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1] mb-6">
                Tecnologia que ensina,{" "}
                <span className="marker-yellow">não que distrai.</span>
              </h2>
              <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed mb-3">
                A tecnologia faz parte da vida das crianças. O que muda na Ensina Mais é a forma como
                ela é usada, com orientação, intenção e um objetivo claro de aprendizagem.
              </p>
              <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed mb-3">
                Aqui, recursos digitais, games, robótica, apps e programação não são entretenimento
                disfarçado de aula. São ferramentas escolhidas para desenvolver habilidades reais:
                raciocínio lógico, criatividade, concentração, autonomia e capacidade de resolver
                problemas.
              </p>
              <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed">
                E é por isso que chamamos de ensino híbrido, porque unimos o melhor da educação
                presencial com o que a tecnologia tem de mais eficiente. O instrutor está sempre
                presente, orientando o aluno e garantindo que cada atividade digital tenha propósito
                e direção.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {TECNOLOGIA.map((c, i) => {
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
              Não se trata de colocar uma tela na frente da criança e esperar que ela aprenda.
              Trata-se de usar a tecnologia como o que ela é, uma ferramenta poderosa quando está nas
              mãos certas, com orientação certa e objetivo claro.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION , Benefícios (consolidado de /beneficios/) */}
      <section
        id="beneficios"
        className="bg-em-coral-pale px-4 sm:px-6 py-16 sm:py-20 lg:py-24 scroll-mt-24"
      >
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="max-w-[820px] mb-12 lg:mb-14">
              <p className="eyebrow text-em-coral-dark mb-3">Benefícios na prática</p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1] mb-6">
                O que muda na vida do seu filho,{" "}
                <span className="marker-coral">e na sua.</span>
              </h2>
              <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed mb-3">
                Metodologia boa é aquela que aparece na vida da criança, não só no discurso da
                escola. Na Ensina Mais, os resultados do acompanhamento individualizado vão além das
                notas. Eles aparecem na postura, na rotina e na forma como o filho se relaciona com
                os estudos.
              </p>
              <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed font-semibold">
                O que as famílias costumam notar:
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {BENEFICIOS.map((b, i) => {
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
              Esses resultados não acontecem da noite para o dia. Mas com acompanhamento próximo,
              rotina bem construída e um ambiente em que a criança se sente segura para aprender,
              eles aparecem, e fazem diferença real na vida escolar e fora dela.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA Final */}
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
                <p className="eyebrow text-em-yellow mb-3">Veja na prática</p>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight text-white leading-[1.1] mb-5">
                  Quer ver como isso{" "}
                  <span className="marker-yellow">funciona com o seu filho?</span>
                </h2>
                <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-8">
                  A melhor forma de entender a metodologia da Ensina Mais é vivenciando. Agende uma
                  aula experimental gratuita e veja de perto como o acompanhamento acontece, sem
                  compromisso e sem pressão. Se preferir, encontre a unidade mais próxima de você e
                  converse com a nossa equipe.
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
        title="Perguntas frequentes sobre a metodologia"
        items={FAQ}
        marker="blue"
      />
    </main>
  );
}
