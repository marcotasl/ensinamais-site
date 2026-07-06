import { ArrowRight, Award, Gift, Ticket, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Placeholder from "@/components/ui/Placeholder";

const DESTAQUES: { Icon: LucideIcon; label: string }[] = [
  { Icon: Trophy, label: "Conquistas viram pontos, cupons e prêmios" },
  { Icon: Gift, label: "Notebooks, robótica, bikes e experiências em disputa" },
  { Icon: Ticket, label: "9 cupons ao longo do ano letivo" },
  { Icon: Award, label: "Hall da Fama com foto, cidade e pontuação" },
];

export default function SuperAlunoTeaser() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="relative rounded-[2rem] lg:rounded-[2.75rem] bg-em-coral-pale px-6 py-12 sm:p-12 lg:p-14 overflow-clip">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
              <div>
                <p className="eyebrow text-em-coral-dark mb-3">Super Aluno</p>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1] mb-5">
                  Todo aluno tem um{" "}
                  <span className="marker-coral">superpoder</span>, e aqui ele aprende a usar
                </h2>
                <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed mb-6 max-w-[520px]">
                  O programa de gamificação da Ensina Mais transforma cada conquista da rotina
                  escolar em pontos, cupons e prêmios reais, com ranking e acompanhamento em tempo
                  real.
                </p>

                <ul className="flex flex-col gap-2.5 mb-8">
                  {DESTAQUES.map((item) => {
                    const Icon = item.Icon;
                    return (
                      <li
                        key={item.label}
                        className="inline-flex items-center gap-3 bg-white rounded-full pl-3 pr-5 py-2.5 text-sm font-bold text-em-dark shadow-[0_10px_24px_-16px_rgba(26,39,68,0.4)]"
                      >
                        <Icon size={18} strokeWidth={1.8} className="text-em-coral-dark shrink-0" />
                        {item.label}
                      </li>
                    );
                  })}
                </ul>

                <a
                  href="/super-aluno/"
                  className="inline-flex items-center justify-center gap-2 text-sm sm:text-base font-black text-white bg-em-coral rounded-full px-7 py-3.5 hover:bg-em-coral-dark transition-colors shadow-button"
                >
                  Conhecer o Super Aluno
                  <ArrowRight size={16} strokeWidth={2.4} />
                </a>
              </div>

              <FadeIn delay={0.12}>
                <div className="relative mx-auto w-full max-w-[300px]">
                  <div className="absolute inset-x-6 inset-y-8 bg-em-yellow rounded-[2.5rem] -rotate-3" />
                  <Placeholder
                    label="Ilustração Turma da Mônica em traje de super-herói"
                    className="relative w-full aspect-square rounded-[2.5rem]"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
