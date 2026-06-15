import { ArrowRight } from "lucide-react";
import type { FallbackBanner } from "@/lib/fallback-banners";

interface HeroProps {
  banners: FallbackBanner[];
}

export default function Hero({ banners }: HeroProps) {
  const slide = banners[0];

  return (
    <section className="relative pt-20 min-h-[80vh] flex items-stretch overflow-hidden rounded-b-[46px]">
      {/* BG image full bleed */}
      <img
        src={slide.bgImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay gradient: dark green on the left fading to transparent on the right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(95deg, rgba(26,39,68,0.92) 0%, rgba(26,39,68,0.78) 38%, rgba(26,39,68,0.32) 68%, rgba(26,39,68,0) 88%)",
        }}
      />
      {/* Subtle accent radial in top-right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 35% at 95% 18%, rgba(140,195,74,0.32), rgba(140,195,74,0) 65%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-14 lg:py-24 grid grid-cols-1 lg:grid-cols-12 items-center">
        <div className="lg:col-span-7 xl:col-span-6">
          <span className="eyebrow inline-block text-em-yellow mb-5 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full">
            {slide.subtitle}
          </span>
          <h1 className="text-[clamp(2rem,4.4vw,3.25rem)] font-black tracking-tight text-white mb-6 max-w-[640px]">
            {slide.title}
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-white/85 max-w-[520px] mb-8">
            {slide.desc}
          </p>
          <a
            href={slide.ctaHref}
            className="text-sm sm:text-base font-bold text-em-dark bg-em-yellow rounded-full px-6 sm:px-8 py-3.5 sm:py-4 inline-flex items-center gap-2 hover:bg-em-yellow-dark hover:text-white transition-colors shadow-button"
          >
            {slide.ctaText} <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
