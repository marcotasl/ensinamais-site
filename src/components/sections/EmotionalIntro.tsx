import { Heart, Sparkles, UserCheck, Compass } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const CARDS = [
  {
    icon: Heart,
    title: "Dificuldade na escola",
    desc: "Apoio para superar lacunas em português, matemática e rotina de estudos, respeitando o ritmo de cada criança.",
  },
  {
    icon: Sparkles,
    title: "Insegurança para aprender",
    desc: "Um ambiente acolhedor para a criança se sentir segura e ganhar mais confiança a cada conquista.",
  },
  {
    icon: UserCheck,
    title: "Cada criança aprende de um jeito",
    desc: "A Ensina Mais cria um plano individualizado, com acompanhamento próximo e atividades orientadas para que cada aluno avance com mais segurança.",
  },
  {
    icon: Compass,
    title: "Preocupação com o futuro",
    desc: "Inglês, robótica e programação para ampliar habilidades, estimular a criatividade e preparar a criança para um mundo em transformação.",
  },
];

export default function EmotionalIntro() {
  return (
    <section className="px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="text-center max-w-[760px] mx-auto mb-10 sm:mb-14">
            <p className="text-xs font-bold text-wire-400 uppercase tracking-widest mb-3">
              Antes de ensinar, a gente entende.
            </p>
            <h2 className="text-2xl sm:text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-wire-black mb-4">
              Aprender não precisa ser motivo de pressão.
            </h2>
            <p className="text-base sm:text-lg text-wire-600 leading-relaxed">
              Cada criança tem seu tempo, seus desafios e seu jeito de aprender. Com o acompanhamento certo, ela pode ganhar confiança, criar rotina e avançar com mais segurança.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {CARDS.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.08}>
              <div className="card-lift bg-white rounded-2xl border border-wire-200 p-6 sm:p-7 h-full">
                <card.icon size={26} strokeWidth={1.8} className="text-wire-700 mb-4" />
                <h3 className="text-lg sm:text-xl font-extrabold text-wire-black mb-2 leading-tight">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-wire-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p className="text-center text-base sm:text-lg font-semibold text-wire-700 max-w-[680px] mx-auto mt-10 sm:mt-14 leading-relaxed">
            A Ensina Mais oferece um caminho de aprendizagem com acolhimento, método e acompanhamento próximo.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
