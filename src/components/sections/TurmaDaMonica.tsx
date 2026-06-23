import { Smile, Sparkles, ShieldCheck } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

/*
 * TurmaDaMonica — Seção exclusiva
 * Visual lúdico: bg suave com blobs, character pose flutuante,
 * 3 blocos em shapes squircle alternadas, marker no h2, chancela em pill.
 */

const BLOCKS = [
  {
    icon: Smile,
    title: "Identificação imediata",
    desc: "Personagens que fazem parte da infância brasileira criam um ambiente familiar desde o primeiro dia.",
    accent: { bg: "bg-em-coral-pale", iconBg: "bg-em-coral", shape: "rounded-3xl", tilt: "lg:tilt-l1" },
  },
  {
    icon: Sparkles,
    title: "Mais leveza para aprender",
    desc: "Com elementos lúdicos e reconhecíveis, o estudo passa a fazer sentido para a criança.",
    accent: { bg: "bg-em-blue-pale", iconBg: "bg-em-blue", shape: "rounded-3xl", tilt: "" },
  },
  {
    icon: ShieldCheck,
    title: "Confiança para as famílias",
    desc: "Um universo que os pais também conhecem, e que reforça o cuidado da Ensina Mais com a experiência de cada criança.",
    accent: { bg: "bg-em-green-pale", iconBg: "bg-em-green", shape: "rounded-3xl", tilt: "lg:tilt-r1" },
  },
];

export default function TurmaDaMonica() {
  return (
    <section className="relative px-4 sm:px-6">
      {/* Blobs decorativos de bg */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-12 w-72 h-72 bg-em-yellow/15 rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-em-coral/12 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-[1180px] mx-auto bg-gradient-to-br from-white via-em-green-pale/40 to-em-blue-pale/35 rounded-3xl px-6 sm:px-12 lg:px-16 py-14 sm:py-20 shadow-[0_24px_60px_-32px_rgba(26,39,68,0.25)] border border-white">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center relative">
          <FadeIn>
            <div>
              <p className="eyebrow text-em-green-dark mb-3">
                Turma da Mônica na aprendizagem
              </p>
              <h2 className="text-2xl sm:text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-em-dark mb-5 leading-[1.1]">
                Aprender fica mais leve quando a criança se{" "}
                <span className="marker-yellow">identifica</span> com a jornada
              </h2>
              <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed max-w-[520px]">
                Na Ensina Mais, a Mônica, o Cebolinha, a Magali e outros personagens fazem parte da jornada. Aprender fica muito mais fácil!
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative">
              {/* Sticker amarelo MENOR atrás — foto extrapola pra dar sensação de "saindo" do sticker */}
              <div className="absolute inset-x-10 inset-y-14 bg-em-yellow rounded-3xl -rotate-3" />
              <img
                src="/images/turma-da-monica/pose-13.webp"
                alt="Personagens Turma da Mônica"
                className="relative w-[calc(100%+2rem)] -mx-4 -my-4 aspect-[4/3] object-contain"
              />
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-14 sm:mt-20">
          {BLOCKS.map((block, i) => (
            <FadeIn key={block.title} delay={i * 0.08}>
              <div
                className={`relative ${block.accent.shape} ${block.accent.bg} ${block.accent.tilt} tilt-hover-straighten p-7 sm:p-8 h-full shadow-[0_14px_36px_-22px_rgba(26,39,68,0.25)]`}
              >
                <span
                  className={`sticker-icon ${block.accent.iconBg} text-white absolute -top-5 -left-3`}
                >
                  <block.icon size={26} strokeWidth={2} />
                </span>
                <h3 className="mt-6 text-lg font-extrabold text-em-dark mb-2 leading-tight">
                  {block.title}
                </h3>
                <p className="text-sm sm:text-base text-em-dark-soft/85 leading-relaxed">
                  {block.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="flex flex-col items-center justify-center gap-5 mt-12 sm:mt-16 pt-10 border-t border-em-green-light/35 text-center">
            <img src="/images/logo-ensina-mais.svg" alt="Ensina Mais" className="h-14 sm:h-16 w-auto" />
            <p className="text-lg sm:text-xl font-semibold text-em-green-dark max-w-[720px] leading-relaxed text-balance">
              A Ensina Mais conta com licenciamento exclusivo da{" "}
              <span className="marker-yellow">Mauricio de Sousa Produções</span>.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
