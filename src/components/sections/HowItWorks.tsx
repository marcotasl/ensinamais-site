"use client";

import Image from "next/image";
import { ClipboardCheck, UserCog, BarChart3, ArrowRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
const STEPS = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Avaliação Inicial",
    desc: "A jornada começa com uma avaliação diagnóstica completa. Identificamos as forças e os pontos de atenção do aluno para criar um plano de estudos sob medida.",
    color: "#039BE5",
  },
  {
    number: "02",
    icon: UserCog,
    title: "Plano Individualizado",
    desc: "Cada aluno tem seu próprio caminho. Sem formação de turmas — o ritmo é individual, com aulas digitais interativas e mediação do instrutor a cada etapa.",
    color: "#7CB342",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Acompanhamento Contínuo",
    desc: "Relatórios de evolução para os pais, avaliações periódicas e feedback constante. Você acompanha cada conquista do seu filho em tempo real.",
    color: "#EF5350",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-em-blue py-20 px-6 relative overflow-hidden">
        {/* Background decorative */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.03] rounded-l-[100px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto relative z-2">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-center">
            {/* Image side */}
            <FadeIn>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                  <Image
                    src="/images/hero/professora-alunos.jpg"
                    alt="Professora ajudando aluno na Ensina Mais"
                    width={560}
                    height={420}
                    className="w-full block object-cover"
                  />
                </div>
                {/* Floating TM character */}
                <div className="absolute -bottom-6 -right-6 z-3 pointer-events-none hidden lg:block">
                  <Image
                    src="/images/turma-da-monica/pose-16.png"
                    alt="Franjinha"
                    width={100}
                    height={100}
                    className="drop-shadow-lg"
                  />
                </div>
              </div>
            </FadeIn>

            {/* Steps side */}
            <div>
              <FadeIn>
                <Badge className="mb-4 bg-white/15 text-white border border-white/20">
                  Como Funciona
                </Badge>
                <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-white leading-tight mb-10">
                  Metodologia que respeita<br />o ritmo do seu filho
                </h2>
              </FadeIn>

              <div className="flex flex-col gap-8">
                {STEPS.map((step, i) => (
                  <FadeIn key={i} delay={i * 0.12}>
                    <div className="flex gap-5 items-start">
                      {/* Number + line */}
                      <div className="flex flex-col items-center shrink-0">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                          style={{ background: step.color }}
                        >
                          <step.icon size={24} color="#fff" strokeWidth={2} />
                        </div>
                        {i < STEPS.length - 1 && (
                          <div className="w-0.5 h-8 bg-white/20 mt-2" />
                        )}
                      </div>

                      {/* Text */}
                      <div className="pt-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-bold text-white/40 uppercase tracking-widest">
                            Passo {step.number}
                          </span>
                        </div>
                        <h3 className="text-xl font-extrabold text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-base leading-relaxed text-white/80">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <FadeIn delay={0.4}>
                <a
                  href="/metodologia"
                  className="mt-10 text-base font-extrabold text-em-blue bg-white rounded-2xl px-8 py-4 inline-flex items-center gap-2 shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 transition-all duration-250"
                >
                  Conheça a metodologia completa <ArrowRight size={16} />
                </a>
              </FadeIn>
            </div>
          </div>
        </div>
    </section>
  );
}
