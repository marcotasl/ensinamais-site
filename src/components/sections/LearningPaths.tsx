"use client";

import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { COURSE_COMBOS, LEARNING_PATHS } from "@/lib/learning-paths";

const PATH_CARD_STYLES = [
  {
    pattern: "/images/patterns/blue.webp",
    tilt: "lg:tilt-l1",
    iconBg: "bg-em-blue",
  },
  {
    pattern: "/images/patterns/yellow.webp",
    tilt: "lg:tilt-r1",
    iconBg: "bg-em-orange",
  },
  {
    pattern: "/images/patterns/green.webp",
    tilt: "lg:tilt-l1",
    iconBg: "bg-em-green",
  },
  {
    pattern: "/images/patterns/coral.webp",
    tilt: "lg:tilt-r1",
    iconBg: "bg-em-coral",
  },
] as const;

interface LearningPathsProps {
  leadHref?: string;
  className?: string;
}

export default function LearningPaths({ leadHref = "#lead", className = "" }: LearningPathsProps) {
  return (
    <section id="trilhas" className={`relative px-4 sm:px-6 overflow-hidden ${className}`}>
      <div
        aria-hidden
        className="absolute inset-x-0 top-8 h-[520px] pointer-events-none opacity-20 bg-repeat"
        style={{ backgroundImage: "url(/images/3d/pattern-confetti.webp)", backgroundSize: "560px" }}
      />

      <div className="relative max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-end mb-10 sm:mb-14">
          <FadeIn>
            <p className="eyebrow text-em-orange mb-3">Trilhas e combos</p>
            <h2 className="text-2xl sm:text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1]">
              Escolha a <span className="marker-yellow">melhor trilha</span> para o momento do seu filho
            </h2>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="text-base sm:text-lg text-em-dark-soft/80 leading-relaxed lg:max-w-[560px] lg:ml-auto">
              Além do cardápio de cursos, a Ensina Mais organiza caminhos por objetivo: reforço escolar, futuro digital, contraturno completo ou orientação para decidir com segurança.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {LEARNING_PATHS.map((path, index) => {
            const Icon = path.Icon;
            const ctaHref = path.id === "orientacao" ? leadHref : path.ctaHref;
            const style = PATH_CARD_STYLES[index % PATH_CARD_STYLES.length];

            return (
              <FadeIn key={path.id} delay={Math.min(index * 0.08, 0.24)}>
                <article
                  className={`group relative h-full min-h-[390px] rounded-3xl ${path.light} ${style.tilt} tilt-hover-straighten p-6 sm:p-7 shadow-[0_18px_42px_-22px_rgba(26,39,68,0.24)] flex flex-col overflow-hidden`}
                >
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-32 bg-cover bg-center opacity-80"
                    style={{ backgroundImage: `url(${style.pattern})` }}
                  />
                  <span
                    aria-hidden
                    className="absolute -right-3 top-4 text-[5.5rem] font-black leading-none text-white/55"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative flex items-start justify-between gap-4 mb-8">
                    <span className={`text-[11px] font-black uppercase tracking-widest text-white ${path.color} rounded-full px-3 py-1.5 shadow-[0_8px_18px_-12px_rgba(26,39,68,0.35)]`}>
                      {path.eyebrow}
                    </span>
                    <span className={`sticker-icon ${style.iconBg} text-white shrink-0`}>
                      <Icon size={28} strokeWidth={1.8} />
                    </span>
                  </div>

                  <h3 className="relative text-xl sm:text-2xl font-black text-em-dark leading-tight mb-3">
                    {path.title}
                  </h3>
                  <p className="relative text-sm sm:text-base text-em-dark-soft/82 leading-relaxed mb-6">
                    {path.desc}
                  </p>

                  <div className="relative -mx-1 mb-6 overflow-x-auto pb-1 md:mx-0 md:overflow-visible md:pb-0">
                    <div className="flex w-max gap-2 px-1 md:w-auto md:flex-wrap md:px-0">
                      {path.items.map((item) =>
                        item.href ? (
                          <a
                            key={item.label}
                            href={item.href}
                            className="shrink-0 text-xs font-bold text-em-dark bg-white/85 rounded-full px-3 py-1.5 shadow-[0_8px_16px_-14px_rgba(26,39,68,0.28)] hover:bg-white transition-colors"
                          >
                            {item.label}
                          </a>
                        ) : (
                          <span key={item.label} className="shrink-0 text-xs font-bold text-em-dark bg-white/70 rounded-full px-3 py-1.5">
                            {item.label}
                          </span>
                        ),
                      )}
                    </div>
                  </div>

                  <a
                    href={ctaHref}
                    className="relative mt-auto text-sm font-black text-em-dark inline-flex items-center justify-between gap-3 bg-white/85 rounded-full pl-4 pr-2 py-2 hover:bg-white transition-colors"
                  >
                    {path.ctaLabel}
                    <span className={`${path.color} text-white rounded-full w-8 h-8 inline-flex items-center justify-center group-hover:translate-x-0.5 transition-transform`}>
                      <ArrowRight size={15} strokeWidth={2.4} />
                    </span>
                  </a>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.18}>
          <div id="combos" className="relative mt-10 sm:mt-12 rounded-[2rem] lg:rounded-[2.75rem] bg-em-dark px-5 py-8 sm:p-8 lg:p-10 shadow-[0_24px_56px_-28px_rgba(26,39,68,0.48)] overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 opacity-12 bg-repeat"
              style={{ backgroundImage: "url(/images/3d/pattern-dense.webp)", backgroundSize: "520px" }}
            />
            <div className="relative grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 lg:gap-10">
              <div className="flex flex-col justify-between gap-8">
                <div>
                  <p className="eyebrow text-em-yellow mb-3">Contraturno completo</p>
                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-4">
                    Combos para uma rotina <span className="marker-yellow">mais produtiva</span>
                  </h3>
                  <p className="text-sm sm:text-base text-white/78 leading-relaxed">
                    Combine apoio, inglês, programação e robótica em cargas de 4h, 6h ou 8h, conforme a necessidade da família.
                  </p>
                </div>

                <div className="hidden lg:flex">
                  <span className="shape-blob-2 bg-em-green text-em-dark text-sm font-black px-6 py-5 rotate-[-3deg] shadow-[0_18px_32px_-22px_rgba(0,0,0,0.45)]">
                    14 combinações possíveis
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-3 gap-2">
                  {["4h", "6h", "8h"].map((hours) => (
                    <span key={hours} className="rounded-full bg-white/10 px-3 py-2 text-center text-xs font-black text-white/75">
                      {hours} semanais
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                  {COURSE_COMBOS.map((combo) => (
                    <article key={combo.id} className="group rounded-2xl bg-white/10 px-4 py-4 sm:px-5 sm:py-5 hover:bg-white/15 transition-colors">
                      <div className="flex flex-wrap items-center gap-2 mb-2 text-[11px] font-black uppercase tracking-widest text-white/55">
                        <span>{combo.courses}</span>
                        <span aria-hidden>·</span>
                        <span className="text-em-yellow">{combo.hours}</span>
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

                <a
                  href={leadHref}
                  className="self-start text-sm sm:text-base font-black text-em-dark bg-em-yellow rounded-full px-5 sm:px-6 py-3 inline-flex items-center gap-2 hover:bg-white transition-colors shadow-button"
                >
                  Montar combinação ideal <ArrowRight size={15} strokeWidth={2.4} />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
