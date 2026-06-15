"use client";

import { ArrowRight, ClipboardCheck, Route, LineChart } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Step {
  title: string;
  desc: string;
  Icon: LucideIcon;
}

const STEPS: Step[] = [
  {
    title: "Avaliação Inicial",
    desc: "A jornada começa entendendo as forças, as dificuldades e o jeito de aprender de cada aluno. O resultado é um plano feito sob medida.",
    Icon: ClipboardCheck,
  },
  {
    title: "Plano Individualizado",
    desc: "Cada criança segue um percurso próprio, sem depender do ritmo de uma turma. As aulas combinam recursos digitais, atividades orientadas e mediação do instrutor para apoiar a evolução passo a passo.",
    Icon: Route,
  },
  {
    title: "Acompanhamento Contínuo",
    desc: "Os pais acompanham o desenvolvimento de perto, com feedbacks, avaliações periódicas e relatórios que mostram os avanços da criança ao longo da jornada.",
    Icon: LineChart,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-14 sm:py-24 px-4 sm:px-6 text-white overflow-hidden">
      <div className="relative max-w-[1200px] mx-auto">
        {/* Cenário escolar flutuante à direita do header */}
        <img
          src="/images/turma-da-monica/pose-12.webp"
          alt=""
          aria-hidden
          className="hidden lg:block absolute -top-4 right-0 xl:right-6 w-72 xl:w-96 z-10 animate-float pointer-events-none select-none drop-shadow-[0_18px_24px_rgba(0,0,0,0.3)]"
        />
        <div className="max-w-[680px] mb-12 sm:mb-16">
          <p className="eyebrow text-em-yellow mb-3">Como Funciona</p>
          <h2 className="text-2xl sm:text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-white mb-4 leading-[1.1]">
            Uma metodologia que <span className="marker-yellow">entende</span> antes de ensinar
          </h2>
          <p className="text-base sm:text-lg text-white/85 leading-relaxed">
            Antes de indicar qualquer caminho, a gente entende quem é o seu filho, o que já sabe, onde tem dificuldades e como aprende melhor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {STEPS.map((step, i) => (
            <div key={i} className="relative bg-white/10 backdrop-blur rounded-3xl p-7 sm:p-8 border border-white/15">
              <step.Icon size={56} strokeWidth={1.8} className="text-em-yellow mb-5" />
              <h3 className="text-lg sm:text-xl font-extrabold text-white mb-3 leading-tight">{step.title}</h3>
              <p className="text-sm sm:text-base leading-relaxed text-white/85">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-14 flex">
          <a
            href="/metodologia"
            className="text-sm sm:text-base font-bold text-em-blue-dark bg-white rounded-full px-7 sm:px-9 py-3.5 sm:py-4 inline-flex items-center gap-2 hover:bg-em-yellow hover:text-em-dark transition-colors shadow-button"
          >
            Conheça a metodologia <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
