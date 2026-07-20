import type { Metadata } from "next";
import {
  ArrowRight,
  GraduationCap,
  HandHeart,
  Headphones,
  HeartHandshake,
  Lightbulb,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Placeholder from "@/components/ui/Placeholder";

export const metadata: Metadata = {
  title: "Conheça a Ensina Mais Turma da Mônica",
  description:
    "Por trás de cada criança que evolui na Ensina Mais existe um time que se importa. Conheça quem somos, nossos valores e a cultura que sustenta a rede.",
  alternates: { canonical: "/conheca-a-ensinamais/" },
};

const VALORES: { Icon: LucideIcon; title: string; desc: string; bg: string; iconBg: string; textTone: string }[] = [
  {
    Icon: HandHeart,
    title: "Acolhimento",
    desc: "Cada criança chega com sua história. Nosso ponto de partida é receber esse aluno como ele é, sem julgamento.",
    bg: "bg-em-coral-pale",
    iconBg: "bg-em-coral",
    textTone: "text-em-coral-dark",
  },
  {
    Icon: Headphones,
    title: "Escuta ativa",
    desc: "Antes de ensinar, a gente ouve. Família, aluno, escola, cada voz no processo é parte da resposta.",
    bg: "bg-em-blue-pale",
    iconBg: "bg-em-blue",
    textTone: "text-em-blue-dark",
  },
  {
    Icon: GraduationCap,
    title: "Método com propósito",
    desc: "Toda escolha pedagógica tem uma razão de ser. Nada é entretenimento disfarçado de aula.",
    bg: "bg-em-green-pale",
    iconBg: "bg-em-green",
    textTone: "text-em-green-dark",
  },
  {
    Icon: HeartHandshake,
    title: "Parceria com a família",
    desc: "Pais e responsáveis não ficam de fora. A escola informa, escuta e caminha junto em cada etapa.",
    bg: "bg-em-orange-pale",
    iconBg: "bg-em-orange",
    textTone: "text-em-orange-dark",
  },
  {
    Icon: Lightbulb,
    title: "Curiosidade como motor",
    desc: "Aprender é mais leve quando a vontade vem da própria criança. Estimulamos perguntas, não decoreba.",
    bg: "bg-em-blue-pale",
    iconBg: "bg-em-purple",
    textTone: "text-em-purple-dark",
  },
  {
    Icon: Sparkles,
    title: "Reconhecimento contínuo",
    desc: "Cada avanço, por menor que pareça, é celebrado. É assim que a criança volta a acreditar que consegue.",
    bg: "bg-em-green-pale",
    iconBg: "bg-em-green-dark",
    textTone: "text-em-green-dark",
  },
];

const TIME = [
  { name: "Liderança Ensina Mais", role: "Direção da rede" },
  { name: "Equipe Pedagógica", role: "Currículo, formação e qualidade" },
  { name: "Time de Suporte", role: "Acompanhamento das unidades" },
  { name: "Marketing e Comunicação", role: "Marca, conteúdo e relacionamento" },
];

export default function ConhecaPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* HERO institucional , bg cream/yellow-pale (NÃO navy) com foto à direita */}
      <section className="relative bg-gradient-to-br from-em-yellow/15 via-em-coral-pale to-em-blue-pale/50 px-4 sm:px-6 pt-24 pb-16 sm:pb-20 lg:pb-24 rounded-b-[46px] overflow-clip">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 right-20 w-72 h-72 bg-em-yellow/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 left-20 w-80 h-80 bg-em-coral/15 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <FadeIn>
            <p className="eyebrow text-em-coral-dark mb-4">Quem está por trás</p>
            <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-black tracking-tight text-em-dark leading-[1.05] mb-6">
              Por trás de cada criança que evolui,{" "}
              <span className="marker-yellow">tem um time que se importa.</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-em-dark-soft/85 leading-relaxed mb-4 font-semibold">
              A Ensina Mais Turma da Mônica é feita de gente. Educadores, coordenadores, equipe de
              suporte, franqueados e famílias que acreditam que aprender pode ser leve, acolhedor e
              transformador.
            </p>
            <p className="text-sm sm:text-base text-em-dark-soft/75 leading-relaxed max-w-[560px]">
              Esta página é sobre nós, nossos valores, a cultura que sustenta a rede e o jeito como
              cuidamos do dia a dia das nossas escolas.
            </p>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="relative">
              <div className="absolute inset-x-8 inset-y-12 bg-em-yellow rounded-3xl rotate-3" />
              <Placeholder className="relative w-full aspect-[4/5] rounded-3xl" />
              <span className="absolute -bottom-5 -left-3 sm:-left-6 bg-white rounded-full pl-2 pr-5 py-2 shadow-[0_18px_42px_-22px_rgba(26,39,68,0.3)] flex items-center gap-3">
                <span className="sticker-icon bg-em-coral text-white">
                  <HeartHandshake size={18} strokeWidth={2} />
                </span>
                <span className="text-sm font-black text-em-dark">+ de 100 escolas</span>
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PROPÓSITO , split editorial */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <FadeIn>
            <p className="eyebrow text-em-blue-dark mb-3">Propósito</p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1] mb-6">
              Existimos pra ajudar cada criança a{" "}
              <span className="marker-blue">aprender com mais confiança.</span>
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-em-dark-soft/85 leading-relaxed">
              <p>
                A Ensina Mais nasceu da convicção de que o apoio escolar tem que respeitar o jeito
                de cada aluno aprender. Não é sobre repetir conteúdo, é sobre criar um espaço seguro
                pra criança tentar, errar e tentar de novo.
              </p>
              <p>
                Desde 2012, combinamos educação, tecnologia e o licenciamento da Turma da Mônica pra
                construir um modelo de acompanhamento que faz sentido pra família brasileira: próximo,
                acessível e com resultado que aparece na vida da criança.
              </p>
              <p className="font-semibold text-em-dark">
                Nosso compromisso é com a evolução real de cada aluno, não com a média da turma.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.12}>
            <div className="relative">
              <Placeholder label="Ambiente de estudo Ensina Mais" className="w-full aspect-[4/3] rounded-3xl" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* VALORES , 6 cards pastel em grid 2x3 (mix de stickers + cor) */}
      <section className="bg-em-green-pale px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="max-w-[820px] mb-10 lg:mb-12 text-center mx-auto">
              <p className="eyebrow text-em-green-dark mb-3">Valores</p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1] mb-6">
                O que sustenta nosso jeito de{" "}
                <span className="marker-green">trabalhar e ensinar</span>
              </h2>
              <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed">
                Valores não são frases bonitas na parede. São decisões que aparecem no dia a dia das
                nossas escolas, no jeito que recebemos uma família e no cuidado com cada criança.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {VALORES.map((v, i) => {
              const Icon = v.Icon;
              const tilt = i % 2 === 0 ? "lg:tilt-l1" : "lg:tilt-r1";
              return (
                <FadeIn key={v.title} delay={Math.min(i * 0.06, 0.24)}>
                  <article className={`${v.bg} ${tilt} tilt-hover-straighten rounded-3xl p-6 sm:p-7 h-full`}>
                    <span className={`sticker-icon ${v.iconBg} text-white mb-5 shadow-[0_12px_24px_-12px_rgba(26,39,68,0.4)]`}>
                      <Icon size={24} strokeWidth={1.8} />
                    </span>
                    <h3 className={`text-lg sm:text-xl font-black ${v.textTone} mb-2 leading-tight`}>
                      {v.title}
                    </h3>
                    <p className="text-sm sm:text-base text-em-dark-soft/82 leading-relaxed">
                      {v.desc}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* EQUIPE , grid 4 cards com foto retrato + nome + cargo */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 items-start mb-10 lg:mb-12">
              <div>
                <p className="eyebrow text-em-coral-dark mb-3">Nossa equipe</p>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1]">
                  Gente que faz a <span className="marker-coral">Ensina Mais acontecer</span>
                </h2>
              </div>
              <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed lg:max-w-[560px] lg:ml-auto lg:pt-3">
                Da liderança ao time pedagógico, do suporte às unidades à equipe de comunicação,
                cada área trabalha pra que o aluno tenha a melhor experiência possível, da matrícula
                até o último módulo.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {TIME.map((member, i) => (
              <FadeIn key={member.name} delay={Math.min(i * 0.07, 0.28)}>
                <article className="group">
                  <div className="relative mb-4">
                    <div className={`absolute inset-x-3 inset-y-4 ${["bg-em-coral", "bg-em-blue", "bg-em-green", "bg-em-orange"][i % 4]} rounded-3xl ${i % 2 === 0 ? "-rotate-2" : "rotate-2"}`} />
                    <Placeholder className="relative w-full aspect-[3/4] rounded-3xl" />
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-em-dark leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-sm text-em-dark-soft/70 mt-1 leading-snug">{member.role}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURA , mosaico de fotos (5 imagens em tamanhos variados) */}
      <section className="bg-em-blue-pale px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="max-w-[820px] mb-10 lg:mb-12 text-center mx-auto">
              <p className="eyebrow text-em-blue-dark mb-3">Cultura na prática</p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1] mb-6">
                Momentos que mostram quem{" "}
                <span className="marker-blue">a gente é</span>
              </h2>
              <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed">
                Eventos, formações, encontros e o dia a dia das nossas escolas. Uma amostra da
                cultura que sustenta a rede e une os mais de cem times da Ensina Mais Brasil afora.
              </p>
            </div>
          </FadeIn>

          {/* Mosaico assimétrico: 1 grande (col 6, row 2) + 4 pequenos */}
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-[200px_200px_200px] sm:grid-rows-[260px_260px_260px] gap-3 sm:gap-4">
              <Placeholder className="col-span-2 row-span-2 rounded-3xl h-full" />
              <Placeholder className="rounded-3xl h-full" />
              <Placeholder className="rounded-3xl h-full" />
              <Placeholder className="col-span-2 lg:col-span-1 rounded-3xl h-full" />
              <Placeholder className="col-span-2 lg:col-span-3 rounded-3xl h-full" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ONDE ESTAMOS , band colorida green com counter */}
      <section className="px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="relative rounded-[2rem] lg:rounded-[2.75rem] bg-em-green px-6 py-12 sm:p-12 lg:p-14 overflow-clip shadow-[0_24px_56px_-28px_rgba(26,39,68,0.48)]">
              <div aria-hidden className="absolute inset-0 opacity-15 bg-repeat pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url(/images/3d/pattern-confetti.webp)", backgroundSize: "420px" }} />
              <div className="relative grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 items-center">
                <div className="text-center lg:text-left">
                  <p className="eyebrow text-white/80 mb-3">Onde estamos</p>
                  <p className="text-6xl sm:text-7xl lg:text-[6rem] font-black text-white leading-none mb-3">
                    +100
                  </p>
                  <p className="text-lg sm:text-xl font-black text-white/95 leading-tight">
                    escolas Ensina Mais espalhadas pelo Brasil
                  </p>
                </div>
                <div>
                  <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-6 max-w-[520px]">
                    De capitais a cidades de médio porte, cada unidade carrega o mesmo padrão
                    pedagógico, o mesmo cuidado com a família e o mesmo licenciamento Turma da
                    Mônica. Quer conhecer uma de perto?
                  </p>
                  <a
                    href="/escolas"
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-black text-em-dark bg-em-yellow rounded-full px-6 sm:px-7 py-3 sm:py-3.5 hover:bg-white transition-colors shadow-button"
                  >
                    <MapPin size={18} strokeWidth={2} />
                    Encontrar a unidade mais próxima
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Final institucional , navy com pattern + 3 caminhos */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn>
            <div className="relative rounded-[2rem] lg:rounded-[2.75rem] bg-em-dark px-6 py-12 sm:p-12 lg:p-16 overflow-clip shadow-[0_24px_56px_-28px_rgba(26,39,68,0.48)]">
              <div aria-hidden className="absolute inset-0 opacity-12 bg-repeat pointer-events-none" style={{ backgroundImage: "url(/images/3d/pattern-dense.webp)", backgroundSize: "520px" }} />
              <div className="relative max-w-[820px] mx-auto text-center">
                <p className="eyebrow text-em-yellow mb-3">Faça parte</p>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight text-white leading-[1.1] mb-5">
                  Tem um jeito de você fazer parte{" "}
                  <span className="marker-yellow">da Ensina Mais.</span>
                </h2>
                <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-8">
                  Como família, como franqueado ou como parte do nosso time. Escolha o caminho que
                  faz sentido pra você.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <a
                    href="#lead"
                    className="inline-flex items-center justify-center gap-2 text-sm font-black text-em-dark bg-em-yellow rounded-2xl px-5 py-4 hover:bg-white transition-colors shadow-button"
                  >
                    <Users size={18} strokeWidth={2} />
                    Família
                  </a>
                  <a
                    href="/seja-um-franqueado"
                    className="inline-flex items-center justify-center gap-2 text-sm font-bold text-white bg-white/10 backdrop-blur rounded-2xl px-5 py-4 hover:bg-white/20 transition-colors"
                  >
                    Quero ser franqueado
                  </a>
                  <a
                    href="/carreiras"
                    className="inline-flex items-center justify-center gap-2 text-sm font-bold text-white bg-white/10 backdrop-blur rounded-2xl px-5 py-4 hover:bg-white/20 transition-colors"
                  >
                    Quero trabalhar aqui
                    <ArrowRight size={14} strokeWidth={2.4} />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
