import type { Metadata } from "next";
import {
  ArrowRight,
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
  alternates: { canonical: "/metodologia/" },
};

/* SECTION 1 , 5 passos do acompanhamento (numbered steps) */
const PASSOS: { Icon: LucideIcon; title: string; desc: string; color: string }[] = [
  { Icon: Eye, color: "bg-em-blue", title: "Entendemos o momento do aluno", desc: "Observamos dificuldades, relação com os estudos e pontos que precisam de mais atenção, antes de qualquer atividade." },
  { Icon: ListChecks, color: "bg-em-green", title: "Construímos uma rotina", desc: "Cada aluno tem um percurso organizado, com atividades que desenvolvem constância, foco e autonomia." },
  { Icon: Users, color: "bg-em-coral", title: "Acompanhamos cada etapa", desc: "O aluno não fica sozinho diante da dificuldade. Tem sempre instrutor presente pra orientar e ajudar." },
  { Icon: Sparkles, color: "bg-em-orange", title: "Damos feedback durante", desc: "O retorno acontece nas atividades, não só no fim do bimestre. Ajuda o aluno a corrigir e avançar com segurança." },
  { Icon: HeartHandshake, color: "bg-em-purple", title: "Mantemos a família próxima", desc: "Os responsáveis acompanham a evolução do filho com clareza, sabendo o que está sendo trabalhado." },
];

/* SECTION 2 , 4 cards bento de "Ensino individualizado" */
const INDIVIDUALIZADO = [
  { Icon: Target, title: "O ponto de partida é ele", desc: "Atividades organizadas a partir do nível e das necessidades do aluno, não de um programa fixo igual pra todos.", bg: "bg-em-blue-pale", iconBg: "bg-em-blue", textTone: "text-em-blue-dark" },
  { Icon: ListChecks, title: "O ritmo é respeitado", desc: "A criança avança quando está pronta. Sem pular etapas, sem pressão pra acompanhar os outros.", bg: "bg-em-green-pale", iconBg: "bg-em-green", textTone: "text-em-green-dark" },
  { Icon: HeartHandshake, title: "Dificuldade tratada com cuidado", desc: "Quando o aluno não entende, o instrutor explica de outro jeito. Não repete a mesma explicação esperando resultado diferente.", bg: "bg-em-coral-pale", iconBg: "bg-em-coral", textTone: "text-em-coral-dark" },
  { Icon: Eye, title: "Evolução acompanhada de perto", desc: "Cada avanço é observado e reconhecido. Inclusive os pequenos, que são os mais importantes pra criança voltar a acreditar que consegue.", bg: "bg-em-orange-pale", iconBg: "bg-em-orange", textTone: "text-em-orange-dark" },
];

/* SECTION 3 , 6 áreas tecnológicas em grid glassmorphism dentro de band escura */
const TECNOLOGIA = [
  { Icon: BookOpen, title: "Língua Portuguesa", desc: "Leitura, interpretação e escrita de forma interativa." },
  { Icon: Calculator, title: "Matemática", desc: "Raciocínio lógico e resolução de problemas com conteúdo visual e prático." },
  { Icon: Cpu, title: "Robótica", desc: "Criatividade, trabalho em equipe e pensamento lógico via desafios práticos." },
  { Icon: Smartphone, title: "Apps", desc: "Contato orientado, desenvolvendo organização e pensamento digital." },
  { Icon: Gamepad2, title: "Games", desc: "Aprendizado por desafios e interação, tornando o processo leve e motivador." },
  { Icon: Monitor, title: "Programação", desc: "Lógica e criação digital, preparando pra um mundo conectado." },
];

/* SECTION 4 , 6 benefícios em cards de COR sólida (estilo Numbers) */
const BENEFICIOS: { Icon: LucideIcon; title: string; desc: string; bg: string; tilt: string }[] = [
  { Icon: Sparkles, bg: "bg-em-blue", tilt: "tilt-l1", title: "Mais confiança pra aprender", desc: "A criança tenta antes de desistir. Passa a perguntar mais, participar mais." },
  { Icon: BookOpen, bg: "bg-em-green", tilt: "tilt-r1", title: "Melhora na base escolar", desc: "Com dificuldades tratadas de forma orientada, isso aparece nas notas e no desempenho em sala." },
  { Icon: ListChecks, bg: "bg-em-coral", tilt: "tilt-l1", title: "Rotina mais organizada", desc: "Constância e responsabilidade com os estudos, criando hábitos pra vida toda." },
  { Icon: Target, bg: "bg-em-orange", tilt: "tilt-r1", title: "Mais autonomia", desc: "Organiza melhor o tempo, tenta resolver antes de pedir ajuda, confia mais na própria capacidade." },
  { Icon: Brain, bg: "bg-em-purple", tilt: "tilt-l1", title: "Raciocínio lógico", desc: "Matemática, Robótica, Games e Programação estimulam a criança a pensar e criar soluções." },
  { Icon: HeartHandshake, bg: "bg-em-green-dark", tilt: "tilt-r1", title: "Mais tranquilidade pros pais", desc: "Escola parceira que acompanha, informa e caminha junto, sem deixar no escuro." },
];

const FAQ = [
  { q: "O que é a metodologia da Ensina Mais Turma da Mônica?", a: "A metodologia da Ensina Mais combina acompanhamento individualizado, ensino híbrido e tecnologia com propósito para ajudar cada aluno a aprender no seu próprio ritmo. O ponto de partida não é o conteúdo, é o aluno. Antes de qualquer atividade, a equipe observa onde a criança está, o que ela já sabe e o que precisa de mais atenção para construir um caminho de aprendizagem pensado para ela." },
  { q: "O que é ensino híbrido e como ele funciona na Ensina Mais?", a: "Ensino híbrido é a combinação do acompanhamento presencial com recursos digitais e tecnológicos. Na Ensina Mais, isso significa que o instrutor está sempre presente, orientando o aluno, enquanto atividades interativas, games, robótica, apps e programação são usados como ferramentas de aprendizagem com objetivo claro. A tecnologia não substitui o professor, ela potencializa o acompanhamento." },
  { q: "Como a Ensina Mais adapta o ensino para cada criança?", a: "Cada aluno tem um percurso organizado a partir do seu nível, das suas dificuldades e do seu ritmo de aprendizagem. Não existe um programa fixo igual para todos. Se uma criança precisa de mais tempo para entender um conteúdo, ela tem esse tempo. Se já avançou e quer ir além, também encontra espaço. O instrutor acompanha de perto e ajusta o caminho sempre que necessário." },
  { q: "Como funciona o feedback na Ensina Mais?", a: "O feedback acontece durante as atividades, não só no final do bimestre. Quando o aluno erra ou trava em algum ponto, o instrutor orienta no momento certo, ajudando a criança a entender onde precisa melhorar, encontrar novos caminhos e avançar com mais segurança. Esse acompanhamento contínuo evita que as dúvidas se acumulem e torna o aprendizado mais eficiente." },
  { q: "Quanto tempo leva para ver resultados com a metodologia da Ensina Mais?", a: "Os resultados variam de acordo com o momento de cada criança, mas as famílias costumam notar mudanças na postura, na rotina e na confiança do aluno antes mesmo de aparecerem nas notas. Com acompanhamento próximo e rotina bem construída, a evolução acontece de forma gradual e consistente, sem promessas de resultados imediatos, mas com um processo sólido e orientado." },
  { q: "A metodologia da Ensina Mais funciona para crianças com dificuldade de concentração?", a: "Sim. As atividades são pensadas para ser interativas, dinâmicas e conectadas com o cotidiano do aluno, o que ajuda a manter o engajamento e reduzir a dispersão. O uso orientado de games, robótica e programação também contribui para desenvolver foco e concentração de forma mais leve e envolvente." },
  { q: "Como a Ensina Mais desenvolve autonomia no aluno?", a: "A autonomia é construída gradualmente. Com um percurso organizado e acompanhamento próximo, o aluno aprende a se organizar, criar rotina de estudos e participar mais ativamente do próprio aprendizado. Com o tempo, ele passa a tentar resolver antes de pedir ajuda e a confiar mais na própria capacidade, habilidades que fazem diferença dentro e fora da escola." },
  { q: "De que forma a tecnologia ajuda no aprendizado na Ensina Mais?", a: "Na Ensina Mais, a tecnologia é usada com intenção pedagógica clara. Recursos digitais, games, robótica, apps e programação desenvolvem habilidades reais como raciocínio lógico, criatividade, pensamento digital e resolução de problemas. Não se trata de entretenimento, cada atividade tecnológica tem um objetivo de aprendizagem e acontece com orientação do instrutor." },
  { q: "Como os pais acompanham o desenvolvimento do filho na Ensina Mais?", a: "Os responsáveis acompanham a evolução do aluno com clareza ao longo do processo, não apenas por meio do boletim escolar. A equipe da Ensina Mais mantém a família informada sobre o que está sendo trabalhado, como o aluno está progredindo e quais são os próximos passos.\n\nPara facilitar esse acompanhamento, a Ensina Mais disponibiliza um aplicativo onde os pais podem acompanhar o desenvolvimento do filho de forma prática e atualizada, sem precisar esperar pelo retorno da escola.\n\nO objetivo é que os pais se sintam parceiros do processo, não observadores distantes." },
  { q: "Como posso conhecer a metodologia da Ensina Mais na prática?", a: "A melhor forma é agendar uma aula experimental gratuita. Nela, é possível ver de perto como o acompanhamento acontece, conhecer o ambiente e entender como a metodologia se aplica ao momento do seu filho, sem compromisso e sem pressão. Basta encontrar a unidade mais próxima e entrar em contato com a equipe." },
];

export default function MetodologiaPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* HERO , bg navy */}
      <section className="relative bg-em-dark pt-24 pb-16 sm:pb-20 px-4 sm:px-6 rounded-b-[46px] overflow-clip">
        <div aria-hidden className="absolute inset-0 opacity-12 bg-repeat pointer-events-none" style={{ backgroundImage: "url(/images/3d/pattern-dense.webp)", backgroundSize: "520px" }} />
        <div className="relative max-w-[1200px] mx-auto text-center">
          <FadeIn>
            <p className="eyebrow text-em-yellow mb-4">Metodologia</p>
            <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-black tracking-tight text-white mb-5 max-w-[920px] mx-auto leading-[1.05]">
              Um jeito de ensinar que começa pelo aluno, <span className="marker-yellow">não pelo conteúdo.</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-[760px] mx-auto leading-relaxed mb-4 font-semibold">
              Na Ensina Mais, a metodologia foi pensada pra respeitar o ritmo de cada criança, combinando acompanhamento individualizado, tecnologia com propósito e ensino híbrido pra tornar o aprendizado mais eficiente e humano.
            </p>
            <p className="text-sm sm:text-base text-white/75 max-w-[720px] mx-auto leading-relaxed">
              Todo professor sabe que não existe uma fórmula única pra ensinar. Por isso, nossa metodologia não começa pelo conteúdo, ela começa pelo aluno. Antes de ensinar, a gente observa.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 1 , Acompanhamento em 5 STEPS numerados conectados */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="max-w-[820px] mb-12 lg:mb-14 text-center mx-auto">
              <p className="eyebrow text-em-blue-dark mb-3">Acompanhamento</p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1] mb-6">
                Como funciona o <span className="marker-blue">acompanhamento na Ensina Mais</span>
              </h2>
              <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed">
                Quando uma criança chega, o primeiro passo não é colocá-la nas atividades. É entender onde ela está, o que já sabe, onde trava. A partir daí, construímos um caminho pensado pra ela.
              </p>
            </div>
          </FadeIn>

          {/* Steps verticais com linha conectora (desktop em 2 colunas tipo timeline; mobile vertical) */}
          <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-5 lg:gap-3">
            {PASSOS.map((p, i) => {
              const Icon = p.Icon;
              return (
                <FadeIn key={p.title} delay={Math.min(i * 0.08, 0.32)}>
                  <article className="relative bg-white rounded-3xl p-6 sm:p-7 h-full shadow-[0_18px_42px_-22px_rgba(26,39,68,0.18)]">
                    <div className="flex items-start gap-4 mb-4">
                      <span className={`shrink-0 sticker-icon ${p.color} text-white shadow-[0_12px_24px_-12px_rgba(26,39,68,0.4)]`}>
                        <Icon size={22} strokeWidth={1.8} />
                      </span>
                      <span aria-hidden className="text-4xl sm:text-5xl font-black leading-none text-em-dark/10">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-em-dark mb-2 leading-tight">{p.title}</h3>
                    <p className="text-sm text-em-dark-soft/82 leading-relaxed">{p.desc}</p>
                  </article>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={0.2}>
            <p className="mt-12 lg:mt-14 max-w-[820px] mx-auto text-center text-base sm:text-lg font-semibold text-em-dark leading-relaxed">
              Não é só sobre aprender o conteúdo. É sobre a criança perceber que está evoluindo, ganhar confiança e desenvolver uma relação mais positiva com os estudos.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2 , Ensino individualizado: SPLIT com 4 mini-cards pastel à direita */}
      <section className="bg-em-green-pale px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
            <FadeIn>
              <p className="eyebrow text-em-green-dark mb-3">Ensino individualizado</p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1] mb-6">
                Cada criança tem um caminho. <span className="marker-green">A gente ajuda a construir o dela.</span>
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-em-dark-soft/85 leading-relaxed">
                <p>Muito se fala em ensino individualizado. Na prática, isso significa que cada aluno recebe atenção de acordo com o seu momento, não com o da turma.</p>
                <p>Se uma criança precisa de mais tempo pra entender um conceito, ela tem esse tempo. Se outra já avançou e quer ir além, encontra espaço pra isso.</p>
                <p className="font-semibold text-em-dark">É esse olhar que transforma o aprendizado. Não porque a criança ficou mais inteligente, mas porque ela finalmente encontrou um espaço onde o jeito dela de aprender é respeitado.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.12}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                {INDIVIDUALIZADO.map((b, i) => {
                  const Icon = b.Icon;
                  const tilt = i % 2 === 0 ? "lg:tilt-l1" : "lg:tilt-r1";
                  return (
                    <article key={b.title} className={`${b.bg} ${tilt} tilt-hover-straighten rounded-3xl p-6 h-full`}>
                      <span className={`sticker-icon ${b.iconBg} text-white mb-4 shadow-[0_12px_24px_-12px_rgba(26,39,68,0.4)]`}>
                        <Icon size={22} strokeWidth={1.8} />
                      </span>
                      <h3 className={`text-base sm:text-lg font-black ${b.textTone} mb-2 leading-tight`}>{b.title}</h3>
                      <p className="text-sm text-em-dark-soft/82 leading-relaxed">{b.desc}</p>
                    </article>
                  );
                })}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 3 , Tecnologia com propósito: BAND ESCURA full com glassmorphism */}
      <section className="px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="relative rounded-[2rem] lg:rounded-[2.75rem] bg-em-dark px-6 py-12 sm:p-12 lg:p-14 overflow-clip shadow-[0_24px_56px_-28px_rgba(26,39,68,0.48)]">
              <div aria-hidden className="absolute inset-0 opacity-15 bg-repeat pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url(/images/3d/pattern-dense.webp)", backgroundSize: "520px" }} />
              <div className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-10 items-start mb-10">
                  <div>
                    <p className="eyebrow text-em-yellow mb-3">Tecnologia com propósito</p>
                    <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-white leading-[1.1]">
                      Tecnologia que ensina, <span className="marker-yellow">não que distrai.</span>
                    </h2>
                  </div>
                  <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                    A tecnologia faz parte da vida das crianças. O que muda na Ensina Mais é a forma como ela é usada: com orientação, intenção e objetivo claro. Recursos digitais, games, robótica, apps e programação não são entretenimento disfarçado de aula. São ferramentas pra desenvolver raciocínio lógico, criatividade e autonomia.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {TECNOLOGIA.map((t) => {
                    const Icon = t.Icon;
                    return (
                      <article key={t.title} className="group rounded-2xl bg-white/10 px-5 py-5 hover:bg-white/15 transition-colors">
                        <Icon size={26} strokeWidth={1.8} className="text-em-yellow mb-3" />
                        <h3 className="text-base sm:text-lg font-black text-white leading-snug mb-1">{t.title}</h3>
                        <p className="text-sm text-white/72 leading-relaxed">{t.desc}</p>
                      </article>
                    );
                  })}
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-center text-base sm:text-lg font-semibold text-white/90 leading-relaxed max-w-[760px] mx-auto">
                    O instrutor está sempre presente, orientando o aluno. É por isso que chamamos de <span className="marker-yellow">ensino híbrido</span> , o melhor da educação presencial com o que a tecnologia tem de mais eficiente.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 4 , Benefícios na prática: 6 stat cards COR SÓLIDA */}
      <section id="beneficios" className="bg-em-coral-pale px-4 sm:px-6 py-16 sm:py-20 lg:py-24 scroll-mt-24">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="max-w-[820px] mb-10 lg:mb-12 text-center mx-auto">
              <p className="eyebrow text-em-coral-dark mb-3">Benefícios na prática</p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1] mb-6">
                O que muda na vida do seu filho, <span className="marker-coral">e na sua.</span>
              </h2>
              <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed">
                Metodologia boa é aquela que aparece na vida da criança, não só no discurso da escola. Os resultados vão além das notas: aparecem na postura, na rotina e na forma como o filho se relaciona com os estudos.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {BENEFICIOS.map((b, i) => {
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

          <FadeIn delay={0.2}>
            <p className="mt-12 lg:mt-14 max-w-[820px] mx-auto text-center text-base sm:text-lg font-semibold text-em-dark leading-relaxed">
              Esses resultados não acontecem da noite pro dia. Mas com acompanhamento próximo, rotina bem construída e um ambiente seguro pra aprender, eles aparecem , e fazem diferença real.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA Final */}
      <section className="px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn>
            <div className="relative rounded-[2rem] lg:rounded-[2.75rem] bg-em-dark px-6 py-12 sm:p-12 lg:p-16 overflow-clip shadow-[0_24px_56px_-28px_rgba(26,39,68,0.48)]">
              <div aria-hidden className="absolute inset-0 opacity-12 bg-repeat pointer-events-none" style={{ backgroundImage: "url(/images/3d/pattern-confetti.webp)", backgroundSize: "520px" }} />
              <div className="relative max-w-[760px] mx-auto text-center">
                <p className="eyebrow text-em-yellow mb-3">Veja na prática</p>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight text-white leading-[1.1] mb-5">
                  Quer ver como isso <span className="marker-yellow">funciona com o seu filho?</span>
                </h2>
                <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-8">
                  A melhor forma de entender a metodologia da Ensina Mais é vivenciando. Agende uma aula experimental gratuita e veja de perto como o acompanhamento acontece, sem compromisso e sem pressão.
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
      <FaqAccordion eyebrow="FAQ" title="Perguntas frequentes sobre a metodologia" items={FAQ} marker="blue" />
    </main>
  );
}
