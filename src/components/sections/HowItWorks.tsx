"use client";

import { ArrowRight } from "lucide-react";
import Placeholder from "@/components/ui/Placeholder";

const STEPS = [
  { number: "01", title: "Avaliação Inicial", desc: "A jornada começa com uma avaliação diagnóstica completa. Identificamos as forças e os pontos de atenção do aluno para criar um plano de estudos sob medida." },
  { number: "02", title: "Plano Individualizado", desc: "Cada aluno tem seu próprio caminho. Sem formação de turmas — o ritmo é individual, com aulas digitais interativas e mediação do instrutor a cada etapa." },
  { number: "03", title: "Acompanhamento Contínuo", desc: "Relatórios de evolução para os pais, avaliações periódicas e feedback constante. Você acompanha cada conquista do seu filho em tempo real." },
];

export default function HowItWorks() {
  return (
    <section className="bg-wire-900 py-20 px-6 mx-4 lg:mx-8 rounded-2xl">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-center">
          <Placeholder className="w-full h-[380px] rounded-2xl" label="Foto professora + aluno" />

          <div>
            <p className="text-xs font-bold text-wire-500 uppercase tracking-widest mb-3">Como Funciona</p>
            <h2 className="text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-white mb-10">
              Metodologia que respeita<br className="hidden lg:block" /> o ritmo do seu filho
            </h2>

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
                    <h3 className="text-xl font-extrabold text-white mb-1.5">{step.title}</h3>
                    <p className="text-base leading-relaxed text-wire-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="/metodologia" className="mt-10 text-base font-bold text-wire-black bg-white rounded-xl px-8 py-4 inline-flex items-center gap-2 hover:bg-wire-100 transition-colors">
              Conheça a metodologia <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
