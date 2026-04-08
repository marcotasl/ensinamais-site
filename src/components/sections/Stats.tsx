"use client";

import Image from "next/image";
import { Building2, ArrowRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import Blob from "@/components/ui/Blob";
import DotGrid from "@/components/ui/DotGrid";
import Counter from "@/components/ui/Counter";
import Wave from "@/components/layout/Wave";
import { STATS } from "@/lib/constants";

export default function Stats() {
  return (
    <>
      <Wave color="#5C6BC0" flip height={70} />
      <section
        id="franquia"
        className="bg-gradient-to-br from-em-purple-dark to-em-purple py-10 px-6 relative overflow-hidden"
        style={{ paddingBottom: 60 }}
      >
        <Blob color="#fff" size={350} bottom="-80px" right="-80px" opacity={0.04} />
        <DotGrid color="rgba(255,255,255,0.05)" top="30px" right="50px" />

        {/* Personagens TM decorativos */}
        <div className="absolute bottom-4 left-4 pointer-events-none opacity-10 hidden lg:block">
          <Image
            src="/images/turma-da-monica/pose-5.png"
            alt=""
            width={200}
            height={160}
          />
        </div>

        <div className="max-w-[1200px] mx-auto relative z-2">
          <FadeIn>
            <div className="text-center mb-10">
              <Badge className="mb-3 bg-white/[0.12] text-white border border-white/15">
                <Building2 size={12} /> Seja um Franqueado
              </Badge>
              <h2 className="text-[clamp(1.7rem,3.5vw,2.4rem)] font-black text-white mb-2.5">
                Invista no futuro da educacao
              </h2>
              <p className="text-[15px] text-white/75 max-w-[480px] mx-auto">
                Micro franquia com o melhor custo-beneficio do mercado de educacao no
                Brasil.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((stat, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-white/[0.08] rounded-3xl py-8 px-6 text-center backdrop-blur-xl border border-white/10 transition-all duration-300 hover:bg-white/[0.14] hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-[14px] bg-white/10 flex items-center justify-center mx-auto mb-3.5">
                    <stat.icon size={22} className="text-em-yellow" />
                  </div>
                  <div className="text-[32px] font-black text-em-yellow leading-none">
                    <Counter
                      end={parseInt(stat.number)}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-[13px] font-semibold text-white/70 mt-1.5">
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="text-center mt-9">
              <a
                href="#"
                className="text-[15px] font-extrabold text-em-purple-dark bg-em-yellow rounded-2xl px-10 py-4 inline-flex items-center gap-2.5 shadow-[0_8px_28px_rgba(253,216,53,0.3)] hover:-translate-y-[3px] hover:shadow-[0_12px_36px_rgba(253,216,53,0.4)] transition-all duration-250"
              >
                Quero ser um franqueado <ArrowRight size={16} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
      <Wave color="#5C6BC0" height={70} />
    </>
  );
}
