import { Heart, Sparkles, UserCheck, Compass } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const CARDS = [
  {
    Icon: Heart,
    iconColor: "text-em-coral",
    title: "Dificuldade na escola",
    desc: "Apoio para superar lacunas em português, matemática e rotina de estudos, respeitando o ritmo de cada criança.",
    bg: "bg-em-coral-pale",
    pattern: "/images/patterns/coral.webp",
    tilt: "lg:tilt-l1",
    pose: "/images/turma-da-monica/pose-2.webp",
  },
  {
    Icon: Sparkles,
    iconColor: "text-em-blue",
    title: "Insegurança para aprender",
    desc: "Um ambiente acolhedor para a criança se sentir segura e ganhar mais confiança a cada conquista.",
    bg: "bg-em-blue-pale",
    pattern: "/images/patterns/blue.webp",
    tilt: "lg:tilt-r1",
    pose: "/images/turma-da-monica/pose-1.webp",
  },
  {
    Icon: UserCheck,
    iconColor: "text-em-green-dark",
    title: "Cada criança aprende de um jeito",
    desc: "A Ensina Mais cria um plano individualizado, com acompanhamento próximo e atividades orientadas para que cada aluno avance com mais segurança.",
    bg: "bg-em-green-pale",
    pattern: "/images/patterns/green.webp",
    tilt: "lg:tilt-r1",
    pose: "/images/turma-da-monica/pose-15.webp",
  },
  {
    Icon: Compass,
    iconColor: "text-em-yellow-dark",
    title: "Preocupação com o futuro",
    desc: "Inglês, robótica e programação para ampliar habilidades, estimular a criatividade e preparar a criança para um mundo em transformação.",
    bg: "bg-[#FFF8E1]",
    pattern: "/images/patterns/yellow.webp",
    tilt: "lg:tilt-l1",
    pose: "/images/turma-da-monica/pose-16.webp",
  },
];

export default function EmotionalIntro() {
  return (
    <section className="relative px-4 sm:px-6">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-25 bg-repeat"
        style={{ backgroundImage: "url(/images/3d/pattern-confetti.webp)", backgroundSize: "560px" }}
      />

      <div className="relative max-w-[1100px] mx-auto">
        <FadeIn>
          <div className="text-center max-w-[760px] mx-auto mb-12 sm:mb-16">
            <p className="eyebrow text-em-green-dark mb-3">
              Antes de ensinar, a gente entende
            </p>
            <h2 className="text-2xl sm:text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-em-dark mb-4">
              Aprender não precisa ser motivo de{" "}
              <span className="marker-yellow">pressão</span>
            </h2>
            <p className="text-base sm:text-lg text-em-dark-soft/80 leading-relaxed">
              Cada criança tem seu tempo, seus desafios e seu jeito de aprender. Com o acompanhamento certo, ela pode ganhar confiança, criar rotina e avançar com mais segurança.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {CARDS.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.08}>
              <div
                className={`relative rounded-3xl ${card.bg} ${card.tilt} tilt-hover-straighten overflow-hidden h-full shadow-[0_18px_40px_-22px_rgba(26,39,68,0.22)]`}
              >
                {/* Header com personagem em destaque (pattern decorativo no bg, pose ocupa altura grande) */}
                <div
                  className="relative h-72 sm:h-80 flex items-end justify-center pt-6 bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.pattern})` }}
                >
                  <img
                    src={card.pose}
                    alt=""
                    aria-hidden
                    className="h-full w-auto object-contain object-bottom drop-shadow-[0_14px_18px_rgba(26,39,68,0.18)]"
                  />
                </div>

                {/* Body com ícone + título + descrição */}
                <div className="p-6 sm:p-7">
                  <card.Icon size={26} strokeWidth={2} className={`${card.iconColor} mb-3`} />
                  <h3 className="text-base sm:text-lg font-extrabold text-em-dark mb-2 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm text-em-dark-soft/85 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center mt-14 sm:mt-20">
            <p className="rounded-3xl inline-block text-base sm:text-lg font-semibold text-em-green-dark bg-em-green-pale border-2 border-em-green-light/50 py-5 px-9 max-w-[720px] leading-relaxed shadow-[0_12px_32px_-18px_rgba(110,168,50,0.45)]">
              A Ensina Mais oferece um caminho de aprendizagem com{" "}
              <span className="marker-green">acolhimento</span>,{" "}
              <span className="marker-yellow">método</span> e acompanhamento próximo.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
