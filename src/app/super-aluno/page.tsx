import type { Metadata } from "next";
import {
  ArrowRight,
  Award,
  Bike,
  Bot,
  FileText,
  Headphones,
  Laptop,
  ListChecks,
  Sparkles,
  Ticket,
  Trophy,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Placeholder from "@/components/ui/Placeholder";

export const metadata: Metadata = {
  title: "Super Aluno Ensina Mais: gamificação que motiva a aprender",
  description:
    "Conheça o Super Aluno da Ensina Mais: o programa de gamificação que transforma conquistas escolares em pontos, cupons e prêmios reais.",
  alternates: { canonical: "/super-aluno/" },
};

/* Ordenadas por peso de conquistas: o número em destaque é o valor de venda da tabela. */
const CONQUISTAS: { acao: string; conquistas: number }[] = [
  { acao: "Presença na aula", conquistas: 3 },
  { acao: "Comportamento na aula", conquistas: 3 },
  { acao: "Conclusão da aula", conquistas: 3 },
  { acao: "Trouxe o material didático", conquistas: 3 },
  { acao: "Acima de 80% na avaliação de nível", conquistas: 3 },
  { acao: "Conclusão do módulo", conquistas: 3 },
  { acao: "75% do andamento do curso", conquistas: 3 },
  { acao: "100% nos desafios", conquistas: 5 },
  { acao: "Renovação", conquistas: 5 },
  { acao: "Pagamento em dia", conquistas: 5 },
  { acao: "Indicou um amigo que se matriculou", conquistas: 5 },
  { acao: "Nota integral na escola regular", conquistas: 7 },
  { acao: "Evolução no boletim", conquistas: 7 },
];

const PREMIOS: { Icon: LucideIcon; label: string }[] = [
  { Icon: Laptop, label: "Notebooks" },
  { Icon: Bot, label: "Kits de robótica" },
  { Icon: Bike, label: "Bicicletas" },
  { Icon: Headphones, label: "Fones de ouvido" },
  { Icon: Sparkles, label: "Experiências exclusivas" },
];

const ACOMPANHAMENTO: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: ListChecks,
    title: "Lista de pontos",
    desc: "Cada atividade que gerou conquista, com data e valor.",
  },
  {
    Icon: Award,
    title: "Conquistas e posição no ranking",
    desc: "Quantas conquistas o aluno já tem e sua colocação atual.",
  },
  {
    Icon: Ticket,
    title: "Cupons acumulados",
    desc: "Histórico completo dos cupons recebidos ao longo da campanha.",
  },
  {
    Icon: Trophy,
    title: "Resultado dos sorteios",
    desc: "Prêmios, datas e ganhadores.",
  },
  {
    Icon: FileText,
    title: "Regulamento completo",
    desc: "Sempre disponível, com todas as regras da campanha.",
  },
];

export default function SuperAlunoPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* HERO , band coral com vibe super-herói */}
      <section className="relative bg-gradient-to-br from-em-coral-dark via-em-coral to-[#FF7A6B] px-4 sm:px-6 pt-24 pb-16 sm:pb-20 lg:pb-24 rounded-b-[46px] overflow-clip">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 right-24 w-72 h-72 bg-em-yellow/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-12 left-16 w-80 h-80 bg-em-coral-dark/40 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <FadeIn>
            <p className="eyebrow text-white/80 mb-4">Super Aluno</p>
            <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-black tracking-tight text-white leading-[1.05] mb-6">
              Todo aluno tem um superpoder, e aqui ele{" "}
              <span className="marker-yellow text-em-dark">aprende a usar</span>
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-4 font-semibold max-w-[560px]">
              Na Ensina Mais, acreditamos que todo aluno tem um superpoder, e ele começa com a
              vontade de aprender.
            </p>
            <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-[560px]">
              O Super Aluno é o programa que transforma cada conquista da rotina escolar em pontos,
              cupons e prêmios reais, com acompanhamento em tempo real pelo App dos Pais.
            </p>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="relative mx-auto w-full max-w-[300px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/super-aluno/mockups/super-aluno-cutout.webp"
                alt="App dos Pais, tela do programa Super Aluno"
                className="w-full h-auto drop-shadow-[0_18px_28px_rgba(0,0,0,0.28)]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* O QUE É , split editorial centrado */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1000px] mx-auto text-center">
          <FadeIn>
            <p className="eyebrow text-em-coral-dark mb-3">O programa</p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1] mb-6">
              O que é o <span className="marker-coral">Super Aluno</span>
            </h2>
            <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed mb-5">
              O Super Aluno é o programa de gamificação da Ensina Mais Turma da Mônica. Ele
              reconhece, na prática, o esforço que o aluno já faz todos os dias: presença nas aulas,
              dedicação, evolução no curso e nos estudos, e transforma isso em conquistas
              acumuláveis, ranking e recompensas.
            </p>
            <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed">
              A ideia é simples: aprender é o verdadeiro superpoder, e todo aluno já tem esse poder
              dentro de si. Nossa metodologia, combinada à tecnologia e ao apoio pedagógico, ajuda a
              colocá-lo em prática.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* COMO FUNCIONA , band pale azul */}
      <section className="bg-em-blue-pale px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[900px] mx-auto text-center">
          <FadeIn>
            <p className="eyebrow text-em-blue-dark mb-3">Automático, do começo ao fim</p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1] mb-6">
              Como funciona o <span className="marker-blue">Super Aluno</span>
            </h2>
            <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed mb-5">
              O aluno participa automaticamente do programa ao estudar nas unidades Ensina Mais. A
              cada atividade cumprida, ele soma conquistas, que se transformam em pontos, posição no
              ranking e cupons de participação nos sorteios da campanha.
            </p>
            <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed">
              Todo o histórico (pontos creditados, cupons recebidos, resgates e posição atual) fica
              disponível para o responsável acompanhar em tempo real, direto no App dos Pais.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CONQUISTAS , tabela de pontuação em cards */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="max-w-[820px] mb-10 lg:mb-12 text-center mx-auto">
              <p className="eyebrow text-em-coral-dark mb-3">Tabela de pontuação</p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1] mb-6">
                Conquistas: como o aluno <span className="marker-yellow">pontua</span>
              </h2>
              <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed">
                Cada ação da rotina de estudos vale um número de conquistas. Quanto mais desafiadora
                a meta, mais ela vale.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {CONQUISTAS.map((item, i) => (
              <FadeIn key={item.acao} delay={Math.min(i * 0.04, 0.24)}>
                <article className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 h-full shadow-[0_14px_34px_-22px_rgba(26,39,68,0.28)]">
                  <span className="flex items-center justify-center shrink-0 w-14 h-14 rounded-2xl bg-em-coral-pale text-em-coral-dark">
                    <span className="text-2xl font-black leading-none">{item.conquistas}</span>
                  </span>
                  <span className="text-sm sm:text-base font-bold text-em-dark leading-snug">
                    {item.acao}
                  </span>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <p className="text-center text-base sm:text-lg font-semibold text-em-dark-soft/85 leading-relaxed max-w-[720px] mx-auto mt-10">
              Quanto mais o aluno se dedica, mais conquistas acumula, e mais perto fica dos prêmios
              da campanha.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* GAMIFICAÇÃO , band coral de destaque com Hall da Fama e prêmios */}
      <section className="px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="relative rounded-[2rem] lg:rounded-[2.75rem] bg-em-coral px-6 py-12 sm:p-12 lg:p-14 overflow-clip shadow-[0_24px_56px_-28px_rgba(26,39,68,0.48)]">
              <div aria-hidden className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-16 -right-10 w-72 h-72 bg-em-yellow/40 rounded-full blur-3xl" />
              </div>
              <div className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center mb-10 lg:mb-12">
                  <div>
                    <p className="eyebrow text-white/80 mb-3">Gamificação</p>
                    <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-white leading-[1.1] mb-5">
                      Como as conquistas viram{" "}
                      <span className="marker-yellow text-em-dark">recompensas</span>
                    </h2>
                    <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-4">
                      O que diferencia o Super Aluno é a forma como o esforço vira experiência. As
                      conquistas registradas ao longo do ano se convertem em pontos, cupons e posição
                      no ranking geral, visível no Hall da Fama, com foto, cidade e pontuação de cada
                      aluno.
                    </p>
                    <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                      Tudo isso é acompanhado com transparência: créditos, cupons recebidos e
                      resultado dos sorteios ficam disponíveis no site e no App dos Pais.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <Placeholder
                      label="Hall da Fama: ranking de alunos com foto, cidade e pontuação"
                      className="w-full max-w-[320px] aspect-[4/5] rounded-[2rem] bg-white/15"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-6 lg:gap-8 items-stretch">
                  {/* Destaque 9 cupons */}
                  <div className="bg-white/12 rounded-3xl px-6 py-8 flex flex-col justify-center">
                    <span className="flex items-baseline gap-2">
                      <span className="text-5xl sm:text-6xl font-black text-em-yellow leading-none">
                        9
                      </span>
                      <span className="text-lg font-black text-white leading-tight">cupons</span>
                    </span>
                    <p className="text-sm sm:text-base text-white/85 leading-relaxed mt-3">
                      São 9 cupons distribuídos ao longo do ano letivo, e no sorteio principal contam
                      todos os números conquistados durante a campanha.
                    </p>
                  </div>

                  {/* Prêmios que já entraram na campanha */}
                  <div className="bg-white/12 rounded-3xl px-6 py-8">
                    <h3 className="text-lg sm:text-xl font-black text-white mb-5 leading-tight">
                      Prêmios que já entraram na campanha
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                      {PREMIOS.map((premio) => {
                        const Icon = premio.Icon;
                        return (
                          <li
                            key={premio.label}
                            className="flex items-center gap-3 text-sm sm:text-base font-bold text-white"
                          >
                            <Icon size={24} strokeWidth={1.8} className="text-em-yellow shrink-0" />
                            {premio.label}
                          </li>
                        );
                      })}
                    </ul>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed mt-5">
                      Os prêmios variam por período letivo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ACOMPANHAMENTO , tie-in com App dos Pais */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="max-w-[820px] mb-10 lg:mb-12 text-center mx-auto">
              <p className="eyebrow text-em-blue-dark mb-3">Transparência para a família</p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1] mb-6">
                Acompanhamento para os{" "}
                <span className="marker-blue">responsáveis</span>
              </h2>
              <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed">
                Todo o Super Aluno fica visível para o responsável, em tempo real, dentro do App dos
                Pais.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {ACOMPANHAMENTO.map((item, i) => {
              const Icon = item.Icon;
              return (
                <FadeIn key={item.title} delay={Math.min(i * 0.06, 0.24)}>
                  <article className="bg-white rounded-3xl p-6 sm:p-7 h-full shadow-[0_18px_42px_-22px_rgba(26,39,68,0.18)]">
                    <Icon size={28} strokeWidth={1.8} className="text-em-blue-dark mb-4" />
                    <h3 className="text-lg sm:text-xl font-black text-em-dark mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-em-dark-soft/82 leading-relaxed">
                      {item.desc}
                    </p>
                  </article>
                </FadeIn>
              );
            })}

            {/* CTA secundário para o App dos Pais, ocupando a última célula do grid */}
            <FadeIn delay={0.24}>
              <a
                href="/app-dos-pais/"
                className="group flex flex-col justify-center gap-3 bg-em-blue rounded-3xl p-6 sm:p-7 h-full text-white shadow-[0_18px_42px_-22px_rgba(2,136,209,0.6)] hover:bg-em-blue-dark transition-colors"
              >
                <span className="text-lg sm:text-xl font-black leading-tight">
                  Tudo isso no App dos Pais
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-white/90">
                  Conheça o App dos Pais
                  <ArrowRight
                    size={16}
                    strokeWidth={2.4}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA final , band amarela com fecho emocional */}
      <section className="px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn>
            <div className="relative rounded-[2rem] lg:rounded-[2.75rem] bg-em-yellow px-6 py-12 sm:p-12 lg:p-16 overflow-clip shadow-[0_24px_56px_-28px_rgba(26,39,68,0.48)]">
              <div aria-hidden className="absolute inset-0 pointer-events-none">
                <div className="absolute -bottom-16 -left-10 w-80 h-80 bg-white/30 rounded-full blur-3xl" />
                <div className="absolute -top-16 -right-10 w-72 h-72 bg-em-coral/20 rounded-full blur-3xl" />
              </div>
              <div className="relative max-w-[800px] mx-auto text-center">
                <p className="eyebrow text-em-dark/70 mb-3">Aula experimental gratuita</p>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight text-em-dark leading-[1.1] mb-8">
                  Agende uma aula experimental gratuita e veja seu filho descobrir o poder de
                  aprender
                </h2>
                <a
                  href="/fale-conosco/"
                  className="inline-flex items-center justify-center gap-2 text-base font-black text-white bg-em-coral rounded-full px-8 py-4 hover:bg-em-coral-dark transition-colors shadow-button"
                >
                  Quero agendar a aula gratuita
                  <ArrowRight size={18} strokeWidth={2.4} />
                </a>
                <p className="text-lg sm:text-xl lg:text-2xl font-black text-em-dark leading-snug max-w-[640px] mx-auto mt-12">
                  Cada erro vira descoberta, cada conquista vira avanço, cada etapa vira confiança.
                  Porque Super Aluno não nasce pronto, ele aprende a ser.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
