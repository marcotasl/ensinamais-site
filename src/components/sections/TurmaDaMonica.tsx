import { Smile, Sparkles, ShieldCheck, BadgeCheck } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Placeholder from "@/components/ui/Placeholder";

const BLOCKS = [
  {
    icon: Smile,
    title: "Identificação imediata",
    desc: "Personagens que fazem parte da infância brasileira criam um ambiente familiar desde o primeiro dia.",
  },
  {
    icon: Sparkles,
    title: "Mais leveza para aprender",
    desc: "Com elementos lúdicos e reconhecíveis, o estudo passa a fazer sentido para a criança.",
  },
  {
    icon: ShieldCheck,
    title: "Confiança para as famílias",
    desc: "Um universo que os pais também conhecem, e que reforça o cuidado da Ensina Mais com a experiência de cada criança.",
  },
];

export default function TurmaDaMonica() {
  return (
    <section className="px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto bg-white rounded-2xl border border-wire-200 px-6 sm:px-10 lg:px-14 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-14 items-center">
          <FadeIn>
            <div>
              <p className="text-xs font-bold text-wire-400 uppercase tracking-widest mb-3">
                Turma da Mônica na aprendizagem
              </p>
              <h2 className="text-2xl sm:text-[1.875rem] lg:text-[2.25rem] font-black tracking-tight text-wire-black mb-4 leading-tight">
                Aprender fica mais leve quando a criança se identifica com a jornada.
              </h2>
              <p className="text-base sm:text-lg text-wire-600 leading-relaxed">
                Na Ensina Mais, a Mônica, o Cebolinha, a Magali e outros personagens fazem parte da jornada. Aprender fica muito mais fácil!
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Placeholder className="w-full aspect-[4/3] rounded-2xl" label="Personagens Turma da Mônica" />
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mt-10 sm:mt-14">
          {BLOCKS.map((block, i) => (
            <FadeIn key={block.title} delay={i * 0.08}>
              <div className="bg-wire-50 rounded-2xl p-6 sm:p-7 h-full">
                <block.icon size={26} strokeWidth={1.8} className="text-wire-700 mb-4" />
                <h3 className="text-lg font-extrabold text-wire-black mb-2 leading-tight">
                  {block.title}
                </h3>
                <p className="text-sm sm:text-base text-wire-600 leading-relaxed">
                  {block.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="flex items-center justify-center gap-3 mt-10 sm:mt-12 pt-8 border-t border-wire-100">
            <BadgeCheck size={20} strokeWidth={1.8} className="text-wire-700 shrink-0" />
            <p className="text-sm sm:text-base font-semibold text-wire-700 text-center">
              A Ensina Mais conta com licenciamento exclusivo da Mauricio de Sousa Produções.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
