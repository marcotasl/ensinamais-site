"use client";

import Placeholder from "@/components/ui/Placeholder";
import { REASONS } from "@/lib/constants";

/*
 * Bento layout (6 items):
 * ┌─────────┬──────────────────┬─────────┐
 * │    1    │        2         │    3    │
 * │         │    (wide)        │         │
 * ├─────────┴────────┬─────────┴─────────┤
 * │                  │         5         │
 * │    4 (wide)      ├───────────────────┤
 * │                  │         6         │
 * └──────────────────┴───────────────────┘
 */

const BENTO_SPANS = [
  "lg:col-span-3",                      // 1 — small
  "lg:col-span-6",                      // 2 — wide center
  "lg:col-span-3",                      // 3 — small
  "lg:col-span-7",                      // 4 — wide left
  "lg:col-span-5",                      // 5 — right top
  "lg:col-span-5 lg:col-start-8",      // 6 — right bottom
];

export default function Reasons() {
  return (
    <section id="metodologia" className="px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-bold text-wire-400 uppercase tracking-widest mb-2">Diferenciais</p>
          <h2 className="text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-wire-black mb-3">
            Por que escolher<br className="hidden lg:block" /> a Ensina Mais?
          </h2>
          <p className="text-lg text-wire-500 max-w-[460px] mx-auto">
            Tecnologia, personalização e o universo que as crianças amam — tudo em um só lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
          {REASONS.map((reason, i) => {
            const isWide = i === 1 || i === 3;

            return (
              <div
                key={i}
                className={`card-lift bg-white rounded-2xl border border-wire-200 hover:shadow-lg ${BENTO_SPANS[i]} ${isWide ? "p-8" : "p-6"}`}
              >
                <div className="flex items-start gap-4">
                  <Placeholder className={`${isWide ? "w-14 h-14" : "w-12 h-12"} rounded-xl shrink-0`} />
                  <div>
                    <h3 className={`${isWide ? "text-xl" : "text-lg"} font-extrabold text-wire-black mb-2`}>
                      {reason.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-wire-500">
                      {reason.desc}
                    </p>
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
