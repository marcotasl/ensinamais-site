"use client";

import Placeholder from "@/components/ui/Placeholder";
import { REASONS } from "@/lib/constants";

export default function Reasons() {
  return (
    <section id="metodologia" className="px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-bold text-wire-400 uppercase tracking-widest mb-2">Diferenciais</p>
          <h2 className="text-3xl lg:text-4xl font-black text-wire-black mb-3">Por que escolher a Ensina Mais?</h2>
          <p className="text-lg text-wire-500 max-w-[520px] mx-auto">
            Uma metodologia que une tecnologia, personalização e o universo que as crianças amam.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map((reason, i) => (
            <div key={i} className="bg-white rounded-2xl p-7 border border-wire-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <Placeholder className="w-14 h-14 rounded-xl mb-4" />
              <h3 className="text-lg font-extrabold text-wire-black mb-2">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-wire-500">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
