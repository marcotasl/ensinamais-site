"use client";

import { ArrowRight } from "lucide-react";
import Placeholder from "@/components/ui/Placeholder";
import Counter from "@/components/ui/Counter";

const STATS = [
  { number: 120, prefix: "R$", suffix: "k", label: "Investimento inicial" },
  { number: 30, prefix: "R$", suffix: "k/mês", label: "Faturamento médio" },
  { number: 40, suffix: "%", label: "Lucratividade média" },
  { number: 12, suffix: " meses", label: "Payback estimado" },
];

export default function FranchiseCTA() {
  return (
    <section id="franquia" className="bg-wire-black py-20 px-6 mx-4 lg:mx-8 rounded-2xl">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-bold text-wire-500 uppercase tracking-widest mb-3">Seja um Franqueado</p>
            <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-5">Quer ter sua própria escola Ensina Mais?</h2>
            <p className="text-lg leading-relaxed text-wire-500 mb-10 max-w-[460px]">
              A microfranquia de educação mais premiada do Brasil. Invista em um negócio com propósito e rentabilidade comprovada.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {STATS.map((stat, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-5 border border-white/10">
                  <div className="text-sm text-wire-500 mb-1">{stat.label}</div>
                  <div className="text-2xl font-black text-white">
                    <Counter end={stat.number} prefix={stat.prefix || ""} suffix={stat.suffix} />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="/franquia" className="text-base font-bold text-wire-black bg-white rounded-xl px-8 py-4 inline-flex items-center gap-2 hover:bg-wire-100 transition-colors">
                Quero ser franqueado <ArrowRight size={16} />
              </a>
              <a href="#" className="text-base font-semibold text-white border border-white/20 rounded-xl px-8 py-4 inline-flex items-center gap-2 hover:bg-white/5 transition-colors">
                Receber apresentação
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <Placeholder className="w-full h-[400px] rounded-2xl" label="Render fachada / foto unidade" />
          </div>
        </div>
      </div>
    </section>
  );
}
