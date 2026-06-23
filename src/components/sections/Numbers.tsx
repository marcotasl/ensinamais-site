"use client";

import Counter from "@/components/ui/Counter";

const STATS = [
  { number: 100, suffix: "+", label: "Escolas pelo Brasil", bg: "bg-em-green", tilt: "tilt-l1" },
  { number: 12, suffix: "+", label: "Anos de história", bg: "bg-em-blue", tilt: "tilt-r2" },
  { number: 4, suffix: "", label: "Frentes de ensino", bg: "bg-em-coral", tilt: "tilt-l2" },
  { number: 2800, suffix: "+", label: "Alunos matriculados", bg: "bg-em-purple", tilt: "tilt-r1" },
];

export default function Numbers() {
  return (
    <section className="px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-[640px] mx-auto mb-10 sm:mb-14">
          <p className="eyebrow text-em-green-dark mb-3">A Ensina Mais em números</p>
          <h2 className="text-2xl sm:text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1]">
            Uma rede que <span className="marker-yellow">cresce</span> com cada criança
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className={`relative rounded-3xl ${stat.bg} ${stat.tilt} tilt-hover-straighten p-6 sm:p-7 text-center shadow-[0_18px_42px_-22px_rgba(26,39,68,0.3)]`}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-none mb-2">
                <Counter end={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-xs sm:text-sm font-bold text-white/90 leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
