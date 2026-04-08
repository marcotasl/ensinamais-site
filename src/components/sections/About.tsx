"use client";

import Image from "next/image";
import { BookOpen, Users, Check, ChevronRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import Blob from "@/components/ui/Blob";
import DotGrid from "@/components/ui/DotGrid";
import Wave from "@/components/layout/Wave";

const CHECKLIST = [
  "Ensino sem formacao de turmas — cada aluno no seu ritmo",
  "Aulas digitais com gamificacao e interatividade",
  "Avaliacao pre-matricula para plano personalizado",
];

export default function About() {
  return (
    <>
      <Wave color="#039BE5" flip height={70} />
      <section
        id="sobre"
        className="bg-em-blue py-10 px-6 relative overflow-hidden"
        style={{ paddingBottom: 60 }}
      >
        <Blob color="#fff" size={400} top="-100px" left="-100px" opacity={0.06} />
        <DotGrid color="rgba(255,255,255,0.06)" top="20px" right="40px" />

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-center relative z-2">
          {/* Image */}
          <FadeIn>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.2)]">
                <Image
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=560&h=420&fit=crop&crop=faces"
                  alt="Aluno estudando"
                  width={560}
                  height={420}
                  className="w-full block object-cover"
                />
              </div>
              {/* Floating stat */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-5 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.1)] flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-em-blue-pale flex items-center justify-center">
                  <Users size={20} className="text-em-blue" />
                </div>
                <div>
                  <div className="text-lg font-black text-em-dark">2.800+</div>
                  <div className="text-[11px] text-gray-500">Alunos matriculados</div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn delay={0.15}>
            <div>
              <Badge className="mb-4 bg-white/15 text-white border border-white/20">
                <BookOpen size={12} /> Sobre a Ensina Mais
              </Badge>

              <h2 className="text-[clamp(1.7rem,3.5vw,2.4rem)] font-black text-white leading-tight mb-4">
                Como transformamos a educacao de base no Brasil
              </h2>

              <p className="text-[15px] leading-relaxed text-white/[0.88] mb-6">
                Desde 2012, a Ensina Mais concilia o melhor da{" "}
                <strong className="text-white">Educacao e da Tecnologia</strong> com
                ensino individualizado, aulas digitais interativas e o universo da Turma
                da Monica. Desenvolvemos criancas e adolescentes em multiplos saberes — do
                apoio escolar as profissoes do futuro.
              </p>

              <div className="flex flex-col gap-3 mb-7">
                {CHECKLIST.map((text, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                      <Check size={13} className="text-em-yellow" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-semibold text-white/[0.92]">{text}</span>
                  </div>
                ))}
              </div>

              <a
                href="#cursos"
                className="text-sm font-extrabold text-em-blue bg-white rounded-[14px] px-7 py-3.5 inline-flex items-center gap-2 shadow-[0_6px_20px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all duration-250"
              >
                Conheca a metodologia <ChevronRight size={16} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
      <Wave color="#039BE5" height={70} />
    </>
  );
}
