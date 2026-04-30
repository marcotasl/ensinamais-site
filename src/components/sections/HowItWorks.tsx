"use client";

import { ArrowRight } from "lucide-react";
import Placeholder from "@/components/ui/Placeholder";

const STEPS = [
  { number: "01", title: "Avaliação Inicial", desc: "A jornada começa entendendo as forças, as dificuldades e o jeito de aprender de cada aluno. O resultado é um plano feito sob medida." },
  { number: "02", title: "Plano Individualizado", desc: "Cada criança segue um percurso próprio, sem depender do ritmo de uma turma. As aulas combinam recursos digitais, atividades orientadas e mediação do instrutor para apoiar a evolução passo a passo." },
  { number: "03", title: "Acompanhamento Contínuo", desc: "Os pais acompanham o desenvolvimento de perto, com feedbacks, avaliações periódicas e relatórios que mostram os avanços da criança ao longo da jornada." },
];

export default function HowItWorks() {
  return (
    <section className="bg-wire-900 py-12 sm:py-20 px-4 sm:px-6 mx-3 sm:mx-4 lg:mx-8 rounded-2xl">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-16 items-center">
          <Placeholder className="w-full h-[380px] rounded-2xl" label="Foto professora + aluno" />

          <div>
            <p className="text-xs font-bold text-wire-500 uppercase tracking-widest mb-3">Como Funciona</p>
            <h2 className="text-2xl sm:text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-white mb-4">
              Uma metodologia que entende antes de ensinar
            </h2>
            <p className="text-base sm:text-lg text-wire-400 leading-relaxed mb-8 sm:mb-10 max-w-[520px]">
              Antes de indicar qualquer caminho, a gente entende quem é o seu filho, o que já sabe, onde tem dificuldades e como aprende melhor.
            </p>

            <div className="flex flex-col gap-8">
              {STEPS.map((step, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-lg font-black text-white">
                      {step.number}
                    </div>
                    {i < STEPS.length - 1 && <div className="w-px h-8 bg-white/15 mt-2" />}
                  </div>
                  <div className="pt-0.5">
                    <h3 className="text-lg sm:text-xl font-extrabold text-white mb-1.5">{step.title}</h3>
                    <p className="text-base leading-relaxed text-wire-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="/metodologia" className="mt-8 sm:mt-10 text-sm sm:text-base font-bold text-wire-black bg-white rounded-xl px-6 sm:px-8 py-3.5 sm:py-4 inline-flex items-center gap-2 hover:bg-wire-100 transition-colors">
              Conheça a metodologia <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
