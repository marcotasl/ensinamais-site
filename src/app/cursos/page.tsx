import { ArrowRight } from "lucide-react";
import Placeholder from "@/components/ui/Placeholder";
import LeadCaptureForm from "@/components/forms/LeadCaptureForm";
import { COURSES_DATA } from "@/lib/courses-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cursos | Ensina Mais – Turma da Mônica",
  description: "Apoio Escolar, Robótica Educacional, Programação e Inglês para crianças e adolescentes de 4 a 15 anos. Metodologia individualizada com o universo da Turma da Mônica.",
};

export default function CursosPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Hero */}
      <section className="bg-wire-900 pt-24 pb-20 px-4 sm:px-6 rounded-b-[46px]">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs font-bold text-wire-500 uppercase tracking-widest mb-3">Nossos Cursos</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-5 max-w-[600px]">
            Desenvolvemos múltiplos saberes desde a infância
          </h1>
          <p className="text-base sm:text-lg text-wire-400 max-w-[520px] leading-relaxed">
            4 frentes de ensino para crianças e adolescentes de 4 a 15 anos, com metodologia individualizada e o universo da Turma da Mônica.
          </p>
        </div>
      </section>

      {/* Course cards */}
      <section className="px-4 sm:px-6 -mt-10 relative z-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {COURSES_DATA.map((course) => (
            <a
              key={course.slug}
              href={`/cursos/${course.slug}`}
              className="group bg-white rounded-2xl border border-wire-200 overflow-hidden hover:shadow-lg transition-all"
            >
              <Placeholder className="w-full h-48 sm:h-56 rounded-none" label={course.title} />
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-wire-100 flex items-center justify-center">
                    <course.icon size={20} className="text-wire-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-wire-black">{course.title}</h2>
                    <span className="text-xs font-semibold text-wire-400">{course.ageRange} · {course.modality}</span>
                  </div>
                </div>
                <p className="text-sm text-wire-600 leading-relaxed mb-5">{course.desc}</p>

                {/* Modules preview */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {course.modules.map((m) => (
                    <span key={m.title} className="text-xs font-semibold text-wire-500 bg-wire-100 rounded-lg px-3 py-1.5">
                      {m.title}
                    </span>
                  ))}
                </div>

                <span className="text-sm font-bold text-wire-black group-hover:text-wire-600 flex items-center gap-1.5 transition-colors">
                  Conhecer o curso <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Lead Form */}
      <section id="lead" className="px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-[900px] mx-auto bg-white rounded-2xl px-4 py-8 sm:px-10 sm:py-10 border border-wire-200 shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-wire-black mb-2">
              Não sabe qual curso escolher?
            </h2>
            <p className="text-base text-wire-500">
              Agende uma avaliação gratuita. Nossos instrutores vão recomendar o melhor caminho para seu filho.
            </p>
          </div>
          <LeadCaptureForm />
        </div>
      </section>
    </main>
  );
}
