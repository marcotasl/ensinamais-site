"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Placeholder from "@/components/ui/Placeholder";
import type { FallbackBanner } from "@/lib/fallback-banners";

interface HeroProps {
  banners: FallbackBanner[];
}

const AUTOPLAY_MS = 6000;

export default function Hero({ banners }: HeroProps) {
  const [current, setCurrent] = useState(0);
  const total = banners.length;

  const next = useCallback(() => setCurrent((p) => (p + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + total) % total), [total]);

  useEffect(() => {
    if (total <= 1) return;
    const t = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [next, total]);

  const slide = banners[current];

  return (
    <section className="bg-wire-900 pt-16 min-h-[80vh] flex flex-col relative rounded-b-[46px]">
      <div className="flex-1 max-w-[1200px] mx-auto px-4 sm:px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center w-full">
        {/* Text */}
        <div>
          <span className="inline-block text-xs font-bold text-wire-400 uppercase tracking-widest mb-4 bg-white/10 px-3 py-1.5 rounded-full">{slide.subtitle}</span>
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tight text-white mb-6">{slide.title}</h1>
          <p className="text-base sm:text-lg leading-relaxed text-wire-400 max-w-[460px] mb-8">{slide.desc}</p>
          <div className="flex gap-3">
            <a href={slide.ctaHref} className="text-sm sm:text-base font-bold text-wire-black bg-white rounded-xl px-6 sm:px-8 py-3.5 sm:py-4 inline-flex items-center gap-2 hover:bg-wire-100 transition-colors">
              {slide.ctaText} <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Image placeholder */}
        <div className="hidden lg:block">
          <Placeholder className="w-full h-[360px] rounded-2xl" label="Hero Image / Personagem TM" />
        </div>
      </div>

      {/* Nav */}
      {total > 1 && (
        <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6 pb-6 sm:pb-8 flex items-center justify-between">
          <div className="flex gap-2">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/10 cursor-pointer"><ChevronLeft size={18} /></button>
            <button onClick={next} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/10 cursor-pointer"><ChevronRight size={18} /></button>
          </div>
          <div className="flex gap-2">
            {banners.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 rounded-full transition-all cursor-pointer ${i === current ? "w-8 bg-white" : "w-1.5 bg-white/30"}`} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
