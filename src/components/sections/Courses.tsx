"use client";

import { ArrowRight } from "lucide-react";
import Placeholder from "@/components/ui/Placeholder";
import { COURSES } from "@/lib/constants";

export default function Courses() {
  return (
    <section id="cursos" className="px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-bold text-wire-400 uppercase tracking-widest mb-2">Nossos Cursos</p>
          <h2 className="text-3xl lg:text-4xl font-black text-wire-black mb-3">Desenvolvemos múltiplos saberes</h2>
          <p className="text-lg text-wire-500 max-w-[520px] mx-auto">
            Do apoio escolar às profissões do futuro — cada curso com metodologia própria e acompanhamento individualizado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {COURSES.map((course, i) => (
            <a
              key={i}
              href={`/cursos/${course.title.toLowerCase().replace(/\s+/g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
              className="group block bg-white rounded-2xl overflow-hidden border border-wire-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md h-full"
            >
              <Placeholder className="w-full h-40 rounded-none" label={course.title} />
              <div className="p-5">
                <h3 className="text-lg font-extrabold text-wire-black mb-2">{course.title}</h3>
                <p className="text-sm leading-relaxed text-wire-500 mb-4">{course.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-wire-700 group-hover:text-wire-black">
                  Saiba mais <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
