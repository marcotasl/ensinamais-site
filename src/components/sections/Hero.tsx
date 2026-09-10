import { ArrowRight } from "lucide-react";
import type { FallbackBanner } from "@/lib/fallback-banners";
import { heroOverlayGradient } from "@/lib/hero-overlay";
import styles from "./Hero.module.css";

interface HeroProps {
  banners: FallbackBanner[];
}

export default function Hero({ banners }: HeroProps) {
  const slide = banners[0];
  const hasMobileImage = Boolean(slide.bgImageMobile);

  return (
    <section
      className={`relative pt-20 min-h-[80vh] flex items-stretch overflow-hidden rounded-b-[46px] ${hasMobileImage ? styles.responsive : ""}`}
      style={{ backgroundColor: slide.overlayColor }}
    >
      <div
        className={`absolute inset-0 ${styles.media}`}
      >
        <picture>
          {slide.bgImageMobile && (
            <source media="(min-width: 640px)" srcSet={slide.bgImage} width={1920} height={1080} />
          )}
          <img
            src={slide.bgImageMobile || slide.bgImage}
            alt=""
            width={hasMobileImage ? 480 : 1920}
            height={hasMobileImage ? 555 : 1080}
            fetchPriority="high"
            className={`block w-full h-full object-cover ${styles.image}`}
          />
        </picture>
        {hasMobileImage && (
          <div
            aria-hidden
            className={`absolute inset-x-0 top-0 h-12 pointer-events-none ${styles.mobileTransition}`}
            style={{ background: `linear-gradient(to bottom, ${slide.overlayColor}, transparent)` }}
          />
        )}
      </div>
      {slide.backgroundIncludesOverlay && (
        <div aria-hidden className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-em-dark/50 to-transparent ${styles.topShade}`} />
      )}
      {/* A arte recebida já inclui o gradiente lateral. */}
      {!slide.backgroundIncludesOverlay && (
        <>
          {/* O preview do admin mantém o overlay configurável. */}
          <div
            className="absolute inset-0"
            style={{ background: heroOverlayGradient(slide.overlayColor) }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 50% 35% at 95% 18%, rgba(140,195,74,0.32), rgba(140,195,74,0) 65%)",
            }}
          />
        </>
      )}

      <div className={`relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-14 lg:py-24 grid grid-cols-1 lg:grid-cols-12 items-center ${styles.content}`}>
        <div className={`lg:col-span-7 xl:col-span-6 ${styles.copy}`}>
          <span className={`eyebrow inline-block text-em-yellow mb-5 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full ${styles.eyebrow}`}>
            {slide.subtitleMobile ? (
              <>
                <span className="whitespace-nowrap lg:hidden">{slide.subtitleMobile}</span>
                <span className="hidden lg:inline">{slide.subtitle}</span>
              </>
            ) : slide.subtitle}
          </span>
          <h1 className={`text-[clamp(2rem,4.4vw,3.25rem)] font-black tracking-tight text-white mb-6 max-w-[640px] ${styles.title}`}>
            {slide.title}
          </h1>
          <p className={`text-base sm:text-lg leading-relaxed text-white/85 max-w-[520px] mb-8 ${styles.description}`}>
            {slide.desc}
          </p>
          <a
            href={slide.ctaHref}
            className={`text-sm sm:text-base font-bold text-em-dark bg-em-yellow rounded-full px-6 sm:px-8 py-3.5 sm:py-4 inline-flex items-center gap-2 hover:bg-em-yellow-dark hover:text-white transition-colors shadow-button ${styles.cta}`}
          >
            {slide.ctaText} <ArrowRight size={16} className="shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}
