"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import Blob from "@/components/ui/Blob";
import { REASONS, REASON_COLORS } from "@/lib/constants";

// Personagem TM por diferencial
const REASON_CHARACTERS = [
  "/images/turma-da-monica/pose-4.png",  // Cebolinha apontando — Ensino Individualizado
  "/images/turma-da-monica/pose-12.png", // Cebolinha desenhando — Aulas Digitais
  "/images/turma-da-monica/pose-15.png", // Milena confiante — Acompanhamento
  "/images/turma-da-monica/pose-1.png",  // Magali + Mônica — Turma da Mônica
  "/images/turma-da-monica/pose-16.png", // Franjinha cientista — Metodologia Comprovada
  "/images/turma-da-monica/pose-9.png",  // Cebolinha braços abertos — Profissões do Futuro
];

export default function Reasons() {
  return (
    <section
      id="metodologia"
      className="bg-white py-20 px-6 relative overflow-hidden"
    >
      <Blob color="#EF5350" size={300} top="-60px" right="-80px" opacity={0.06} />

      <div className="max-w-[1200px] mx-auto relative z-2">
        <FadeIn>
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-em-coral-pale text-em-coral">
              <Sparkles size={12} /> Diferenciais
            </Badge>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-em-dark mb-3">
              Por que escolher a Ensina Mais?
            </h2>
            <p className="text-base text-gray-500 max-w-[520px] mx-auto">
              Uma metodologia que une tecnologia, personalização e o universo que as
              crianças amam.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map((reason, i) => {
            const color = REASON_COLORS[i % REASON_COLORS.length];
            return (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="group bg-white rounded-[20px] p-8 border border-gray-200 transition-all duration-300 cursor-default relative overflow-hidden hover:-translate-y-1.5 hover:shadow-lg hover:border-gray-300">
                  {/* Top bar on hover */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: color }}
                  />
                  {/* TM character */}
                  <div className="w-16 h-16 mb-4 relative">
                    <Image
                      src={REASON_CHARACTERS[i]}
                      alt=""
                      width={64}
                      height={64}
                      className="object-contain drop-shadow-sm"
                    />
                  </div>
                  <h3 className="text-lg font-extrabold text-em-dark mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {reason.desc}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
