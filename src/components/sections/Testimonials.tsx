"use client";

import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-bold text-wire-400 uppercase tracking-widest mb-2">Depoimentos</p>
          <h2 className="text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-wire-black">O que os pais dizem</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="card-glow bg-white rounded-2xl p-7 border border-wire-200 flex flex-col h-full">
              <div className="flex gap-0.5 mb-4">
                {Array(t.stars).fill(0).map((_, j) => <Star key={j} size={14} fill="#d9d9d9" color="#d9d9d9" />)}
              </div>
              <p className="text-base leading-relaxed text-wire-700 flex-1 mb-5">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-wire-100">
                <div className="w-10 h-10 rounded-full bg-wire-200" />
                <div>
                  <div className="text-sm font-bold text-wire-black">{t.name}</div>
                  <div className="text-xs text-wire-400">{t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
