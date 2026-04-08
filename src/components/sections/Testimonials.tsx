"use client";

import Image from "next/image";
import { Star, Heart } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import Blob from "@/components/ui/Blob";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="bg-white py-10 px-6 relative overflow-hidden"
      style={{ paddingBottom: 80 }}
    >
      <Blob color="#FDD835" size={250} top="20px" left="-60px" opacity={0.08} />

      <div className="max-w-[1200px] mx-auto relative z-2">
        <FadeIn>
          <div className="text-center mb-11">
            <Badge className="mb-3 bg-em-yellow/[0.12] text-em-dark">
              <Heart size={12} className="text-em-coral" fill="#EF5350" /> Historias Reais
            </Badge>
            <h2 className="text-[clamp(1.7rem,3.5vw,2.4rem)] font-black text-em-dark">
              O que os pais dizem
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white rounded-3xl p-7 border border-gray-200 transition-all duration-300 h-full flex flex-col hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
                <div className="flex gap-1 mb-4">
                  {Array(t.stars)
                    .fill(0)
                    .map((_, j) => (
                      <Star key={j} size={16} fill="#FDD835" color="#FDD835" />
                    ))}
                </div>
                <p className="text-sm leading-relaxed text-em-dark-soft flex-1 mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t border-gray-200 pt-4">
                  <Image
                    src={t.img}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="w-11 h-11 rounded-[14px] object-contain bg-em-green-pale p-1"
                  />
                  <div>
                    <div className="text-sm font-extrabold text-em-dark">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.city}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
