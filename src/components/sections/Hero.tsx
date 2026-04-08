"use client";

import Image from "next/image";
import { Star, ArrowRight, Play, Check, Sparkles } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import Blob from "@/components/ui/Blob";
import DotGrid from "@/components/ui/DotGrid";
import Wave from "@/components/layout/Wave";

const MINI_STATS = [
  { value: "100+", label: "Escolas" },
  { value: "12+", label: "Anos" },
  { value: "4", label: "Cursos" },
];

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-em-green-dark via-em-green to-[#8BC34A] pt-[72px] overflow-hidden min-h-[85vh] flex flex-col">
      <Blob color="#fff" size={500} top="-100px" right="-150px" opacity={0.06} />
      <Blob color="#FDD835" size={300} bottom="60px" left="-80px" opacity={0.1} />
      <DotGrid top="100px" right="60px" />

      {/* Subtle bg shape */}
      <div className="absolute bottom-0 right-[5%] w-[40%] h-[70%] bg-white/[0.04] rounded-t-[40%] pointer-events-none" />

      <div className="flex-1 max-w-[1200px] mx-auto px-6 pt-15 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-2">
        {/* Text */}
        <FadeIn>
          <div>
            <Badge className="mb-5 bg-white/[0.18] text-white backdrop-blur-lg border border-white/15">
              <Star size={13} fill="#FDD835" color="#FDD835" /> Licenciado Turma da Monica
            </Badge>

            <h1 className="text-[clamp(2.2rem,5vw,3.6rem)] font-black leading-[1.1] text-white mb-5">
              Aqui, aprender e<br />mais{" "}
              <span className="text-em-yellow relative inline-block">
                experiencia
                <svg
                  viewBox="0 0 200 12"
                  className="absolute -bottom-1 left-0 w-full"
                >
                  <path
                    d="M0,8 Q50,0 100,6 T200,4"
                    stroke="#FDD835"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-[17px] leading-relaxed text-white/[0.88] max-w-[460px] mb-8">
              Apoio escolar, Ingles, Robotica e Programacao com{" "}
              <strong className="text-white">metodologia individualizada</strong> que
              desenvolve seu filho para o presente e o futuro.
            </p>

            <div className="flex gap-3.5 flex-wrap mb-9">
              <a
                href="#lead"
                className="text-[15px] font-extrabold text-em-green-dark bg-white rounded-[14px] px-8 py-4 inline-flex items-center gap-2 shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.18)] transition-all duration-250"
              >
                Agendar aula gratis <ArrowRight size={16} />
              </a>
              <a
                href="#cursos"
                className="text-[15px] font-bold text-white rounded-[14px] px-7 py-4 border-2 border-white/35 inline-flex items-center gap-2 hover:border-white hover:bg-white/[0.08] transition-all duration-250"
              >
                <Play size={15} fill="#fff" /> Ver como funciona
              </a>
            </div>

            <div className="flex gap-6 items-center">
              {MINI_STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-[22px] font-black text-em-yellow">{s.value}</div>
                  <div className="text-[11px] font-semibold text-white/60 uppercase tracking-wide">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Images */}
        <FadeIn delay={0.2}>
          <div className="relative hidden lg:block">
            {/* Main image */}
            <div className="relative rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.2)] border-4 border-white/15">
              <Image
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=440&fit=crop&crop=faces"
                alt="Criancas estudando na Ensina Mais"
                width={600}
                height={440}
                priority
                className="w-full block object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex gap-2">
                <Badge className="bg-white/95 text-em-dark">
                  <Check size={12} className="text-em-green" strokeWidth={3} /> Metodologia
                  Exclusiva
                </Badge>
                <Badge className="bg-white/95 text-em-dark">
                  <Check size={12} className="text-em-green" strokeWidth={3} /> Ensino Hibrido
                </Badge>
              </div>
            </div>

            {/* TM badge */}
            <div className="absolute -top-4 -right-4 w-[100px] h-[100px] rounded-3xl bg-em-yellow shadow-[0_8px_24px_rgba(253,216,53,0.3)] flex flex-col items-center justify-center rotate-6 z-3">
              <Sparkles size={24} className="text-em-dark" strokeWidth={2.5} />
              <span className="text-[10px] font-extrabold text-em-dark uppercase tracking-tight mt-0.5">
                Turma da
              </span>
              <span className="text-[10px] font-extrabold text-em-dark uppercase">
                Monica
              </span>
            </div>

            {/* Secondary image */}
            <div className="absolute -bottom-5 -left-5 rounded-[20px] overflow-hidden w-[140px] h-[100px] shadow-[0_8px_24px_rgba(0,0,0,0.15)] border-[3px] border-white z-3">
              <Image
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=280&h=200&fit=crop&crop=faces"
                alt="Alunos da Ensina Mais"
                width={280}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </FadeIn>
      </div>

      <Wave color="#fff" height={80} />
    </section>
  );
}
