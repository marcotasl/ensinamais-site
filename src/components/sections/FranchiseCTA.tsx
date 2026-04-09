"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowRight, DollarSign, TrendingUp, PieChart, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import Placeholder from "@/components/ui/Placeholder";
import Counter from "@/components/ui/Counter";
import type { LucideIcon } from "lucide-react";

const CAROUSEL_SLIDES = [
  "Fachada da unidade",
  "Interior da sala de aula",
  "Alunos em atividade",
];
const AUTOPLAY_MS = 5000;

const STATS: { icon: LucideIcon; number: number; prefix?: string; suffix: string; label: string }[] = [
  { icon: DollarSign, number: 120, prefix: "R$", suffix: "k", label: "Investimento inicial" },
  { icon: TrendingUp, number: 30, prefix: "R$", suffix: "k/mês", label: "Faturamento médio" },
  { icon: PieChart, number: 40, suffix: "%", label: "Lucratividade média" },
  { icon: Clock, number: 12, suffix: " meses", label: "Payback estimado" },
];

function Carousel() {
  const [current, setCurrent] = useState(0);
  const total = CAROUSEL_SLIDES.length;

  const next = useCallback(() => setCurrent((p) => (p + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + total) % total), [total]);

  useEffect(() => {
    if (total <= 1) return;
    const t = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [next, total]);

  return (
    <div className="hidden lg:flex flex-col relative rounded-2xl overflow-hidden h-full min-h-[400px]">
      {CAROUSEL_SLIDES.map((label, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-500 ${i === current ? "opacity-100" : "opacity-0"}`}>
          <Placeholder className="w-full h-full rounded-none" label={label} />
        </div>
      ))}

      <div className="absolute bottom-4 left-4 flex gap-2 z-10">
        <button onClick={prev} className="w-9 h-9 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-white/80 hover:bg-black/60 cursor-pointer">
          <ChevronLeft size={16} />
        </button>
        <button onClick={next} className="w-9 h-9 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-white/80 hover:bg-black/60 cursor-pointer">
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="absolute bottom-4 right-4 flex gap-1.5 z-10">
        {CAROUSEL_SLIDES.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 rounded-full transition-all cursor-pointer ${i === current ? "w-6 bg-white" : "w-1.5 bg-white/40"}`} />
        ))}
      </div>
    </div>
  );
}

export default function FranchiseCTA() {
  return (
    <section id="franquia" className="bg-wire-black py-12 sm:py-20 px-4 sm:px-6 mx-3 sm:mx-4 lg:mx-8 rounded-2xl">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-stretch">
          <div>
            <p className="text-xs font-bold text-wire-500 uppercase tracking-widest mb-3">Seja um Franqueado</p>
            <h2 className="text-2xl sm:text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-white mb-4 sm:mb-5">Quer ter sua própria<br className="hidden lg:block" /> escola Ensina Mais?</h2>
            <p className="text-base sm:text-lg leading-relaxed text-wire-500 mb-8 sm:mb-10 max-w-[460px]">
              A microfranquia de educação mais premiada do Brasil. Invista em um negócio com propósito e rentabilidade comprovada.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
              {STATS.map((stat, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-4 sm:p-5 border border-white/10 flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <stat.icon size={20} className="text-wire-400" />
                  </div>
                  <div>
                    <div className="text-sm text-wire-500 mb-1">{stat.label}</div>
                    <div className="text-xl sm:text-2xl font-black text-white">
                      <Counter end={stat.number} prefix={stat.prefix || ""} suffix={stat.suffix} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="/franquia" className="text-sm sm:text-base font-bold text-wire-black bg-white rounded-xl px-6 sm:px-8 py-3.5 sm:py-4 inline-flex items-center gap-2 hover:bg-wire-100 transition-colors">
                Quero ser franqueado <ArrowRight size={16} />
              </a>
              <a href="#" className="text-sm sm:text-base font-semibold text-white border border-white/20 rounded-xl px-6 sm:px-8 py-3.5 sm:py-4 inline-flex items-center gap-2 hover:bg-white/5 transition-colors">
                Receber apresentação
              </a>
            </div>
          </div>

          <Carousel />
        </div>
      </div>
    </section>
  );
}
