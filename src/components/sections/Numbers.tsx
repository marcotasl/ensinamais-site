"use client";

import { School, Calendar, BookOpen, Users } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Counter from "@/components/ui/Counter";

const BRAND_STATS = [
  { icon: School, number: 100, prefix: "", suffix: "+", label: "Escolas pelo Brasil", color: "#7CB342" },
  { icon: Calendar, number: 12, prefix: "", suffix: "+", label: "Anos de história", color: "#039BE5" },
  { icon: BookOpen, number: 4, prefix: "", suffix: "", label: "Frentes de ensino", color: "#FF9800" },
  { icon: Users, number: 2800, prefix: "", suffix: "+", label: "Alunos matriculados", color: "#EF5350" },
];

export default function Numbers() {
  return (
    <section className="bg-em-green py-20 px-6 relative overflow-hidden rounded-2xl mx-4 lg:mx-8">
      {/* Decorative */}
      <div className="absolute inset-0 bg-[url('/images/textures/pattern-light.png')] bg-cover opacity-[0.06] mix-blend-overlay pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-2">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-white mb-3">
              A maior rede de apoio escolar<br />licenciada do Brasil
            </h2>
            <p className="text-lg text-white/80 max-w-[520px] mx-auto">
              Mais de uma década transformando a educação de base com o apoio da
              Turma da Mônica e do Grupo MoveEdu.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND_STATS.map((stat, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="bg-white rounded-3xl p-8 text-center shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-transform duration-300">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: `${stat.color}15` }}
                >
                  <stat.icon size={26} style={{ color: stat.color }} strokeWidth={2} />
                </div>
                <div className="text-4xl font-black text-em-dark leading-none mb-2">
                  <Counter
                    end={stat.number}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-sm font-semibold text-gray-500">
                  {stat.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
