"use client";

import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

/*
 * Bento layout (3 items):
 * ┌──────────────────┬──────────┐
 * │                  │          │
 * │   1 (featured)   │    2     │
 * │                  │          │
 * │                  ├──────────┤
 * │                  │          │
 * │                  │    3     │
 * └──────────────────┴──────────┘
 */

export default function Testimonials() {
  return (
    <section id="depoimentos" className="px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-bold text-wire-400 uppercase tracking-widest mb-2">Depoimentos</p>
          <h2 className="text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-wire-black">O que os pais dizem</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {TESTIMONIALS.map((t, i) => {
            const isFeatured = i === 0;
            return (
              <div
                key={i}
                className={`card-glow bg-white rounded-2xl border border-wire-200 flex flex-col ${
                  isFeatured ? "lg:col-span-7 lg:row-span-2 p-8 lg:p-10" : "lg:col-span-5 p-7"
                }`}
              >
                <div className="flex gap-0.5 mb-4">
                  {Array(t.stars).fill(0).map((_, j) => (
                    <Star key={j} size={isFeatured ? 18 : 14} fill="#d9d9d9" color="#d9d9d9" />
                  ))}
                </div>
                <p className={`${isFeatured ? "text-xl lg:text-2xl" : "text-base"} leading-relaxed text-wire-700 flex-1 mb-6`}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-wire-100">
                  <div className={`${isFeatured ? "w-12 h-12" : "w-10 h-10"} rounded-full bg-wire-200`} />
                  <div>
                    <div className={`${isFeatured ? "text-base" : "text-sm"} font-bold text-wire-black`}>{t.name}</div>
                    <div className="text-xs text-wire-400">{t.city}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
