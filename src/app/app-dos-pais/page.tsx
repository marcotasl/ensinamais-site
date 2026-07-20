import type { Metadata } from "next";
import {
  ArrowRight,
  Award,
  Bell,
  Calendar,
  CalendarCheck,
  CheckCircle2,
  Gift,
  Trophy,
  TrendingUp,
  Wallet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import AppScreensSlider from "@/components/sections/AppScreensSlider";

export const metadata: Metadata = {
  title: "App dos Pais Ensina Mais: acompanhe seu filho em tempo real",
  description:
    "Baixe o App dos Pais da Ensina Mais Turma da Mônica e acompanhe agenda, financeiro, desempenho escolar e as conquistas do Super Aluno, tudo em um só lugar.",
  alternates: { canonical: "/app-dos-pais/" },
};

/* Selos de loja (artes oficiais) reaproveitados no hero e no CTA final. */
function StoreBadges() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a href="#" aria-label="Baixar na App Store">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/selos/badge-app-store.svg" alt="Baixar na App Store" className="h-14 w-auto" />
      </a>
      <a href="#" aria-label="Disponível no Google Play">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/selos/badge-google-play.png" alt="Disponível no Google Play" className="h-[4.25rem] w-auto" />
      </a>
    </div>
  );
}

const ACOMPANHA: { Icon: LucideIcon; title: string; desc: string; bg: string; iconBg: string; textTone: string }[] = [
  {
    Icon: Calendar,
    title: "Agenda de aulas",
    desc: "Datas, temas e conteúdos programados, com visão de calendário mês a mês.",
    bg: "bg-em-blue-pale",
    iconBg: "bg-em-blue",
    textTone: "text-em-blue-dark",
  },
  {
    Icon: Wallet,
    title: "Financeiro",
    desc: "Parcelas, vencimentos e status de pagamento (pago, previsto ou atrasado) por contrato.",
    bg: "bg-em-green-pale",
    iconBg: "bg-em-green",
    textTone: "text-em-green-dark",
  },
  {
    Icon: TrendingUp,
    title: "Desempenho",
    desc: "Notas, aulas concluídas, médias por matéria e progresso em cada fase do curso.",
    bg: "bg-em-orange-pale",
    iconBg: "bg-em-orange",
    textTone: "text-em-orange-dark",
  },
  {
    Icon: Trophy,
    title: "Super Aluno",
    desc: "Pontuação, posição no ranking, cupons e prêmios do programa de gamificação.",
    bg: "bg-em-coral-pale",
    iconBg: "bg-em-coral",
    textTone: "text-em-coral-dark",
  },
  {
    Icon: Bell,
    title: "Recados da escola",
    desc: "Comunicados enviados diretamente pela unidade, individuais ou para todos os responsáveis.",
    bg: "bg-em-blue-pale",
    iconBg: "bg-em-purple",
    textTone: "text-em-purple-dark",
  },
];

const TELAS: { label: string; src: string; alt: string }[] = [
  {
    label: "Home",
    src: "/images/app-dos-pais/mockups/home.webp",
    alt: "App dos Pais, tela inicial",
  },
  {
    label: "Agenda",
    src: "/images/app-dos-pais/mockups/agenda.webp",
    alt: "App dos Pais, tela de agenda",
  },
  {
    label: "Financeiro",
    src: "/images/app-dos-pais/mockups/financeiro.webp",
    alt: "App dos Pais, tela financeira",
  },
  {
    label: "Desempenho",
    src: "/images/app-dos-pais/mockups/desempenho.webp",
    alt: "App dos Pais, tela de desempenho por matéria",
  },
];

const SUPER_ALUNO: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: Award,
    title: "Conquistas e posição no ranking",
    desc: "Quantas conquistas o aluno já obteve e sua colocação atual.",
  },
  {
    Icon: Gift,
    title: "Cupons acumulados",
    desc: "Ao longo do ano, o aluno recebe cupons por marcos atingidos, que somam pontos no sorteio principal.",
  },
  {
    Icon: Trophy,
    title: "Prêmios e sorteios",
    desc: "Datas, ganhadores e prêmios em disputa, do kit de robótica a eletrônicos e experiências.",
  },
];

export default function AppDosPaisPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* HERO , bg colorido azul de marca com mockup de celular à direita */}
      <section className="relative bg-gradient-to-br from-em-blue-dark via-em-blue to-[#4FC3F7] px-4 sm:px-6 pt-24 pb-16 sm:pb-20 lg:pb-24 rounded-b-[46px] overflow-clip">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 right-24 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-12 left-16 w-80 h-80 bg-em-blue-dark/30 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <FadeIn>
            <p className="eyebrow text-white/80 mb-4">App dos Pais</p>
            <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-black tracking-tight text-white leading-[1.05] mb-6">
              A vida escolar do seu filho na{" "}
              <span className="marker-yellow text-em-dark">palma da sua mão</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed mb-4 font-semibold max-w-[560px]">
              Aulas, notas, presença, agenda, financeiro e as conquistas do Super Aluno.
            </p>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-[560px] mb-8">
              O App dos Pais reúne tudo o que você precisa saber sobre o dia a dia escolar do seu
              filho em um único lugar, direto no seu celular.
            </p>
            <StoreBadges />
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="relative mx-auto w-full max-w-[520px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/app-dos-pais/mockups/showcase.webp"
                alt="App dos Pais em três telas: desempenho, início e financeiro"
                className="w-full h-auto drop-shadow-[0_18px_28px_rgba(0,0,0,0.28)]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* O QUE É , split editorial */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1000px] mx-auto text-center">
          <FadeIn>
            <p className="eyebrow text-em-blue-dark mb-3">O aplicativo oficial</p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1] mb-6">
              O que é o <span className="marker-blue">App dos Pais</span>
            </h2>
            <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed">
              O App dos Pais é o aplicativo oficial da Ensina Mais Turma da Mônica para quem
              acompanha a rotina de estudos de um aluno. Nele, você tem acesso direto a agenda de
              aulas, boletim de desempenho, situação financeira do contrato e a área exclusiva do
              programa Super Aluno, sem precisar ligar para a escola ou esperar o próximo boletim
              impresso.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* O QUE O RESPONSÁVEL ACOMPANHA , 5 cards pastel + carrossel de prints */}
      <section className="bg-em-green-pale px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="max-w-[820px] mb-10 lg:mb-12 text-center mx-auto">
              <p className="eyebrow text-em-green-dark mb-3">Tudo em um só lugar</p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1] mb-6">
                O que o responsável <span className="marker-green">acompanha</span>
              </h2>
              <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed">
                Cinco frentes do dia a dia escolar reunidas em telas simples, atualizadas em tempo
                real, sem depender de reuniões ou do próximo boletim.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {ACOMPANHA.map((item, i) => {
              const Icon = item.Icon;
              const tilt = i % 2 === 0 ? "lg:tilt-l1" : "lg:tilt-r1";
              return (
                <FadeIn key={item.title} delay={Math.min(i * 0.06, 0.24)}>
                  <article className={`${item.bg} ${tilt} tilt-hover-straighten rounded-3xl p-6 sm:p-7 h-full`}>
                    <span className={`sticker-icon ${item.iconBg} text-white mb-5 shadow-[0_12px_24px_-12px_rgba(26,39,68,0.4)]`}>
                      <Icon size={24} strokeWidth={1.8} />
                    </span>
                    <h3 className={`text-lg sm:text-xl font-black ${item.textTone} mb-2 leading-tight`}>
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-em-dark-soft/82 leading-relaxed">
                      {item.desc}
                    </p>
                  </article>
                </FadeIn>
              );
            })}

            {/* Slideshow automático: uma tela grande por vez com ken-burns */}
            <FadeIn delay={0.24}>
              <div className="h-full flex flex-col justify-center">
                <AppScreensSlider telas={TELAS} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* EVOLUÇÃO DOS ESTUDOS , split com mockup de desempenho */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <FadeIn>
            <p className="eyebrow text-em-orange-dark mb-3">Desempenho em tempo real</p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1] mb-6">
              Evolução dos estudos do{" "}
              <span className="marker-yellow">seu filho</span>
            </h2>
            <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed mb-6">
              A tela de Desempenho mostra, em tempo real, cada etapa da jornada escolar: aulas
              concluídas, média por matéria, progresso percentual em cada fase do curso e o histórico
              completo de conteúdos já dominados. Assim, o responsável entende exatamente onde o
              filho está e o que vem a seguir, sem depender de reuniões ou boletins pontuais.
            </p>
            <div className="bg-em-orange-pale rounded-3xl p-6 sm:p-7">
              <h3 className="text-lg sm:text-xl font-black text-em-orange-dark mb-3 leading-tight">
                Acompanhamento de desempenho
              </h3>
              <p className="text-sm sm:text-base text-em-dark-soft/82 leading-relaxed mb-4">
                Cada matéria tem sua própria barra de progresso, média e número de aulas concluídas
                sobre o total. Ao entrar em uma matéria, o responsável vê o desdobramento por fase
                (concluída, cursando ou agendada), com status visual claro.
              </p>
              <div className="flex flex-wrap gap-4 text-sm font-semibold">
                <span className="inline-flex items-center gap-2 text-em-green-dark">
                  <CheckCircle2 size={22} strokeWidth={1.8} />
                  Concluído
                </span>
                <span className="inline-flex items-center gap-2 text-em-blue-dark">
                  <CalendarCheck size={22} strokeWidth={1.8} />
                  Agendado
                </span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="relative mx-auto w-full max-w-[420px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/app-dos-pais/mockups/desempenho.webp"
                alt="App dos Pais, tela de desempenho por matéria"
                className="w-full max-w-[420px] h-auto rounded-[1.8rem] shadow-[0_30px_60px_-28px_rgba(26,39,68,0.5)]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SUPER ALUNO , band de destaque coral com gamificação */}
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
                      A jornada de conquistas do{" "}
                      <span className="marker-yellow text-em-dark">Super Aluno</span>
                    </h2>
                    <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                      Dentro do app, o Super Aluno transforma o desempenho escolar em uma jornada de
                      conquistas. A cada aula concluída, módulo finalizado, presença confirmada ou
                      parcela paga em dia, o aluno acumula pontos automaticamente, sem precisar fazer
                      nada manualmente. Esses pontos valem participação em sorteios, troca por cupons
                      e evolução no ranking geral.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/turma-da-monica/pose-12.webp"
                      alt="Turma da Mônica"
                      className="w-full max-w-[440px] h-auto drop-shadow-[0_18px_24px_rgba(0,0,0,0.25)]"
                    />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white mb-6 leading-tight">
                  Conquistas, progresso e recompensas
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5">
                  {SUPER_ALUNO.map((item) => {
                    const Icon = item.Icon;
                    return (
                      <article key={item.title} className="bg-white/12 rounded-2xl px-5 py-6 h-full">
                        <Icon size={30} strokeWidth={1.8} className="text-em-yellow mb-4" />
                        <h4 className="text-base sm:text-lg font-black text-white leading-snug mb-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-white/80 leading-relaxed">{item.desc}</p>
                      </article>
                    );
                  })}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                  <a
                    href="/super-aluno/"
                    className="inline-flex items-center justify-center gap-2 text-sm font-black text-em-coral bg-white rounded-full px-6 py-3 hover:bg-em-yellow hover:text-em-dark transition-colors w-full sm:w-auto"
                  >
                    Conheça o programa Super Aluno
                    <ArrowRight size={16} strokeWidth={2.4} />
                  </a>
                  <p className="text-sm text-white/75">
                    Regulamento completo sempre disponível dentro do app.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA final , band amarela com selos de loja */}
      <section className="px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn>
            <div className="relative rounded-[2rem] lg:rounded-[2.75rem] bg-em-yellow px-6 py-12 sm:p-12 lg:p-16 overflow-clip shadow-[0_24px_56px_-28px_rgba(26,39,68,0.48)]">
              <div aria-hidden className="absolute inset-0 pointer-events-none">
                <div className="absolute -bottom-16 -left-10 w-80 h-80 bg-white/30 rounded-full blur-3xl" />
              </div>
              <div className="relative max-w-[760px] mx-auto text-center">
                <p className="eyebrow text-em-dark/70 mb-3">Baixe agora</p>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight text-em-dark leading-[1.1] mb-8">
                  Acompanhe cada conquista do seu filho, todos os dias, de onde você estiver
                </h2>
                <div className="flex justify-center">
                  <StoreBadges />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
