"use client";

import Counter from "@/components/ui/Counter";

const STATS = [
  { number: 100, suffix: "+", label: "Escolas pelo Brasil" },
  { number: 12, suffix: "+", label: "Anos de história" },
  { number: 4, suffix: "", label: "Frentes de ensino" },
  { number: 2800, suffix: "+", label: "Alunos matriculados" },
];

export default function Numbers() {
  return (
    <section className="px-6">
      <div className="max-w-[1200px] mx-auto bg-wire-100 rounded-2xl py-10 sm:py-14 px-4 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 text-center">
          {STATS.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-wire-black mb-1">
                <Counter end={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-semibold text-wire-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
