"use client";

import { ArrowRight } from "lucide-react";
import Placeholder from "@/components/ui/Placeholder";
import { COURSES } from "@/lib/constants";

/*
 * Bento layout:
 * ┌──────────────┬──────────┐
 * │              │          │
 * │  Apoio       │ Robótica │
 * │  Escolar     │          │
 * │  (featured)  ├──────────┤
 * │              │          │
 * │              │ Program. │
 * ├──────────────┤          │
 * │   Inglês     │          │
 * └──────────────┴──────────┘
 */

export default function Courses() {
  return (
    <section id="cursos" className="px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-bold text-wire-400 uppercase tracking-widest mb-2">Nossos Cursos</p>
          <h2 className="text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-wire-black mb-3">
            Desenvolvemos múltiplos<br className="hidden lg:block" /> saberes desde a infância
          </h2>
          <p className="text-lg text-wire-500 max-w-[480px] mx-auto">
            Do apoio escolar às profissões do futuro, com metodologia própria e acompanhamento individualizado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-2 gap-4 lg:auto-rows-[240px]">
          {COURSES.map((course, i) => {
            // Bento sizing: first = tall left, second = top right, third = bottom right tall, fourth = bottom left
            const span = [
              "lg:col-span-7 lg:row-span-2",   // Apoio Escolar — large left
              "lg:col-span-5 lg:row-span-1",   // Robótica — top right
              "lg:col-span-5 lg:row-span-1",   // Programação — bottom right
              "lg:col-span-7 lg:row-span-1",   // Inglês — wide bottom... wait, that's 3 rows
            ][i];

            // Actually let me reconsider for 2 rows:
            // Row 1: Apoio (7col) + Robótica (5col)
            // Row 2: Inglês (5col) + Programação (7col)
            const spanFixed = [
              "lg:col-span-7",  // Apoio — large
              "lg:col-span-5",  // Robótica — compact
              "lg:col-span-5",  // Programação — compact
              "lg:col-span-7",  // Inglês — large
            ][i];

            const isFeatured = i === 0 || i === 3;

            return (
              <a
                key={i}
                href={`/cursos/${course.title.toLowerCase().replace(/\s+/g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                data-tilt={i % 2 === 0 ? "left" : "right"}
                className={`card-tilt group block bg-white rounded-2xl overflow-hidden border border-wire-200 hover:shadow-lg ${spanFixed}`}
              >
                {isFeatured ? (
                  /* Featured: horizontal layout */
                  <div className="flex flex-col sm:flex-row h-full">
                    <Placeholder className="sm:w-[45%] h-48 sm:h-full rounded-none shrink-0" label={course.title} />
                    <div className="p-6 flex flex-col justify-center flex-1">
                      <h3 className="text-xl font-extrabold text-wire-black mb-2">{course.title}</h3>
                      <p className="text-[15px] leading-relaxed text-wire-500 mb-4">{course.desc}</p>
                      <span className="inline-flex items-center gap-1 text-sm font-bold text-wire-700 group-hover:text-wire-black">
                        Saiba mais <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                ) : (
                  /* Compact: vertical layout */
                  <div className="flex flex-col h-full">
                    <Placeholder className="w-full h-36 rounded-none shrink-0" label={course.title} />
                    <div className="p-5 flex flex-col justify-center flex-1">
                      <h3 className="text-xl font-extrabold text-wire-black mb-2">{course.title}</h3>
                      <p className="text-[15px] leading-relaxed text-wire-500 mb-3 line-clamp-2">{course.desc}</p>
                      <span className="inline-flex items-center gap-1 text-sm font-bold text-wire-700 group-hover:text-wire-black">
                        Saiba mais <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
