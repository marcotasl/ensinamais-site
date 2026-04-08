"use client";

import Image from "next/image";
import { ArrowRight, GraduationCap } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import { COURSES } from "@/lib/constants";

export default function Courses() {
  return (
    <section id="cursos" className="bg-white py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <Badge className="mb-3 bg-em-green/[0.09] text-em-green-dark">
              <GraduationCap size={13} /> Nossos Cursos
            </Badge>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-em-dark mb-4">
              Desenvolvemos múltiplos saberes
            </h2>
            <p className="text-lg text-gray-500 max-w-[560px] mx-auto">
              Do apoio escolar às profissões do futuro — cada curso com metodologia
              própria e acompanhamento individualizado.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSES.map((course, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <a
                href={`/cursos/${course.title.toLowerCase().replace(/\s+/g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                className="group block bg-white rounded-3xl overflow-hidden border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] hover:border-transparent h-full"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={course.img}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 opacity-60"
                    style={{
                      background: `linear-gradient(to top, ${course.color} 0%, transparent 70%)`,
                    }}
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/20">
                      <course.icon size={12} /> {course.title}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                    style={{ background: course.light }}
                  >
                    <course.icon size={22} style={{ color: course.color }} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-extrabold text-em-dark mb-2">
                    {course.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500 mb-5">
                    {course.desc}
                  </p>
                  <span
                    className="inline-flex items-center gap-1.5 text-sm font-bold transition-colors"
                    style={{ color: course.color }}
                  >
                    Saiba mais <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
