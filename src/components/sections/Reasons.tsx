"use client";

import Placeholder from "@/components/ui/Placeholder";
import { REASONS } from "@/lib/constants";

export default function Reasons() {
  return (
    <section id="metodologia" className="px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-bold text-wire-400 uppercase tracking-widest mb-2">Diferenciais</p>
          <h2 className="text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-wire-black mb-3">Por que escolher<br className="hidden lg:block" /> a Ensina Mais?</h2>
          <p className="text-lg text-wire-500 max-w-[460px] mx-auto">
            Tecnologia, personalização e o universo que as crianças amam — tudo em um só lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map((reason, i) => (
            <div key={i} className="card-lift bg-white rounded-2xl p-7 border border-wire-200 hover:shadow-lg">
              <Placeholder className="w-14 h-14 rounded-xl mb-4" />
              <h3 className="text-xl font-extrabold text-wire-black mb-2">{reason.title}</h3>
              <p className="text-[15px] leading-relaxed text-wire-500">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
