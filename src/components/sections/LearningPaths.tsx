"use client";

import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { COURSE_COMBOS, LEARNING_PATHS } from "@/lib/learning-paths";

interface LearningPathsProps {
  leadHref?: string;
  className?: string;
}

export default function LearningPaths({ leadHref = "#lead", className = "" }: LearningPathsProps) {
  return (
    <section id="trilhas" className={`px-4 sm:px-6 ${className}`}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-end mb-10 sm:mb-14">
          <FadeIn>
            <p className="eyebrow text-em-orange mb-3">Trilhas e combos</p>
            <h2 className="text-2xl sm:text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1]">
              Escolha a melhor trilha para o momento do seu filho
            </h2>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="text-base sm:text-lg text-em-dark-soft/80 leading-relaxed lg:max-w-[560px] lg:ml-auto">
              Além do cardápio de cursos, a Ensina Mais organiza caminhos por objetivo: reforço escolar, futuro digital, contraturno completo ou orientação para decidir com segurança.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
          {LEARNING_PATHS.map((path, index) => {
            const Icon = path.Icon;
            const ctaHref = path.id === "orientacao" ? leadHref : path.ctaHref;

            return (
              <FadeIn key={path.id} delay={Math.min(index * 0.08, 0.24)}>
                <article className={`h-full rounded-3xl ${path.light} p-6 sm:p-7 shadow-[0_18px_42px_-24px_rgba(26,39,68,0.28)] flex flex-col`}>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <span className={`text-[11px] font-black uppercase tracking-widest text-white ${path.color} rounded-full px-3 py-1.5`}>
                      {path.eyebrow}
                    </span>
                    <Icon size={30} strokeWidth={1.8} className="text-em-dark shrink-0" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-em-dark leading-tight mb-3">
                    {path.title}
                  </h3>
                  <p className="text-sm sm:text-base text-em-dark-soft/78 leading-relaxed mb-6">
                    {path.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {path.items.map((item) =>
                      item.href ? (
                        <a
                          key={item.label}
                          href={item.href}
                          className="text-xs font-bold text-em-dark bg-white/80 rounded-full px-3 py-1.5 hover:bg-white transition-colors"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <span key={item.label} className="text-xs font-bold text-em-dark bg-white/65 rounded-full px-3 py-1.5">
                          {item.label}
                        </span>
                      ),
                    )}
                  </div>

                  <a
                    href={ctaHref}
                    className="mt-auto text-sm font-black text-em-dark inline-flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    {path.ctaLabel} <ArrowRight size={15} strokeWidth={2.4} />
                  </a>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.18}>
          <div id="combos" className="mt-8 sm:mt-10 rounded-3xl bg-em-dark px-5 py-7 sm:p-8 lg:p-10 shadow-[0_22px_54px_-28px_rgba(26,39,68,0.45)]">
            <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 lg:gap-10">
              <div>
                <p className="eyebrow text-em-yellow mb-3">Contraturno completo</p>
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-4">
                  Combos para uma rotina mais produtiva
                </h3>
                <p className="text-sm sm:text-base text-white/78 leading-relaxed mb-6">
                  Combine apoio, inglês, programação e robótica em cargas de 4h, 6h ou 8h, conforme a necessidade da família.
                </p>
                <a
                  href={leadHref}
                  className="text-sm font-black text-em-dark bg-em-yellow rounded-full px-5 py-3 inline-flex items-center gap-2 hover:bg-white transition-colors"
                >
                  Montar combinação ideal <ArrowRight size={15} strokeWidth={2.4} />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {COURSE_COMBOS.map((combo) => (
                  <article key={combo.id} className="bg-white/10 rounded-2xl px-4 py-4 sm:px-5 sm:py-5">
                    <div className="flex items-center gap-2 mb-2 text-[11px] font-black uppercase tracking-widest text-white/55">
                      <span>{combo.courses}</span>
                      <span aria-hidden>·</span>
                      <span>{combo.hours}</span>
                    </div>
                    <h4 className="text-base sm:text-lg font-black text-white leading-snug mb-1">
                      {combo.title}
                    </h4>
                    <p className="text-sm text-white/72 leading-relaxed">
                      {combo.desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
