"use client";

import Image from "next/image";
import { Building2, ArrowRight, TrendingUp, Clock, DollarSign, Banknote } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import Counter from "@/components/ui/Counter";
const FRANCHISE_STATS = [
  { icon: DollarSign, number: 120, prefix: "R$", suffix: "k", label: "Investimento inicial" },
  { icon: Banknote, number: 30, prefix: "R$", suffix: "k/mês", label: "Faturamento médio" },
  { icon: TrendingUp, number: 40, prefix: "", suffix: "%", label: "Lucratividade média" },
  { icon: Clock, number: 12, prefix: "", suffix: " meses", label: "Payback estimado" },
];

export default function FranchiseCTA() {
  return (
    <section id="franquia" className="bg-gradient-to-br from-em-purple-dark to-em-purple py-20 px-6 relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute inset-0 bg-[url('/images/textures/pattern-light.png')] bg-cover opacity-[0.03] mix-blend-overlay pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 opacity-10 pointer-events-none hidden lg:block">
          <Image
            src="/images/turma-da-monica/pose-5.png"
            alt=""
            width={300}
            height={240}
          />
        </div>

        <div className="max-w-[1200px] mx-auto relative z-2">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
            {/* Text */}
            <FadeIn>
              <div>
                <Badge className="mb-5 bg-white/[0.12] text-white border border-white/15">
                  <Building2 size={13} /> Seja um Franqueado
                </Badge>

                <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-white leading-tight mb-5">
                  Quer ter sua própria<br />escola Ensina Mais?
                </h2>

                <p className="text-lg leading-relaxed text-white/80 mb-8 max-w-[480px]">
                  A microfranquia de educação mais premiada do Brasil. Invista em um
                  negócio com propósito, rentabilidade comprovada e o suporte do maior
                  grupo de franquias de educação do país.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-10">
                  {FRANCHISE_STATS.map((stat, i) => (
                    <div
                      key={i}
                      className="bg-white/[0.08] rounded-2xl p-5 backdrop-blur-sm border border-white/10"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <stat.icon size={16} className="text-em-yellow" />
                        <span className="text-sm font-semibold text-white/60">{stat.label}</span>
                      </div>
                      <div className="text-2xl font-black text-em-yellow">
                        <Counter
                          end={stat.number}
                          prefix={stat.prefix}
                          suffix={stat.suffix}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="/franquia"
                    className="text-base font-extrabold text-em-purple-dark bg-em-yellow rounded-2xl px-8 py-4 inline-flex items-center gap-2 shadow-[0_8px_28px_rgba(253,216,53,0.3)] hover:-translate-y-[3px] hover:shadow-[0_12px_36px_rgba(253,216,53,0.4)] transition-all duration-250"
                  >
                    Quero ser franqueado <ArrowRight size={16} />
                  </a>
                  <a
                    href="https://franquias.moveedu.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-white border-2 border-white/30 rounded-2xl px-8 py-4 inline-flex items-center gap-2 hover:bg-white/10 hover:border-white/50 transition-all duration-250"
                  >
                    Receber apresentação
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Franchise render image */}
            <FadeIn delay={0.2}>
              <div className="relative hidden lg:block">
                <div className="rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)] border-4 border-white/10">
                  <Image
                    src="/images/franchise/render-fachada.jpg"
                    alt="Modelo de fachada Ensina Mais"
                    width={560}
                    height={400}
                    className="w-full block object-cover"
                  />
                </div>
                {/* Secondary image */}
                <div className="absolute -bottom-6 -left-6 rounded-2xl overflow-hidden w-[180px] shadow-[0_8px_32px_rgba(0,0,0,0.2)] border-[3px] border-white/20 z-3">
                  <Image
                    src="/images/franchise/render-recepcao.jpg"
                    alt="Modelo de recepção Ensina Mais"
                    width={360}
                    height={240}
                    className="w-full block object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
    </section>
  );
}
