"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import type { FallbackBanner } from "@/lib/fallback-banners";

interface HeroProps {
  banners: FallbackBanner[];
}

const AUTOPLAY_MS = 6000;

export default function Hero({ banners }: HeroProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const total = banners.length;

  const goTo = useCallback(
    (idx: number) => {
      setDirection(idx > current ? 1 : -1);
      setCurrent(idx);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (total <= 1) return;
    const timer = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [next, total]);

  const slide = banners[current];

  return (
    <section className="relative pt-[72px] overflow-hidden min-h-[85vh] flex flex-col">
      {/* Background images — crossfade */}
      {banners.map((b, i) => (
        <div
          key={b.id}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={b.bgImage}
            alt=""
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
          {/* Color overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, ${b.overlayColor}e6 0%, ${b.overlayColor}99 50%, ${b.overlayColor}40 100%)`,
            }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="flex-1 max-w-[1200px] mx-auto px-6 pt-12 lg:pt-20 pb-8 flex items-center relative z-2 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-center w-full">
          {/* Text */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={slide.id}
              custom={direction}
              variants={{
                enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
                center: { x: 0, opacity: 1 },
                exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[560px]"
            >
              <Badge className="mb-5 bg-white/[0.18] text-white backdrop-blur-lg border border-white/15">
                <Star size={13} fill="#FDD835" color="#FDD835" /> {slide.subtitle}
              </Badge>

              <h1 className="text-[clamp(2.4rem,5vw,3.4rem)] font-black leading-[1.1] text-white mb-5 drop-shadow-sm">
                {slide.title}
              </h1>

              <p className="text-lg lg:text-xl leading-relaxed text-white/90 max-w-[480px] mb-8 drop-shadow-sm">
                {slide.desc}
              </p>

              <a
                href={slide.ctaHref}
                className="text-[15px] font-extrabold text-em-dark bg-em-yellow rounded-[14px] px-8 py-4 inline-flex items-center gap-2 shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)] transition-all duration-250"
              >
                {slide.ctaText} <ArrowRight size={16} />
              </a>
            </motion.div>
          </AnimatePresence>

          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`img-${slide.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex items-center justify-center"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                width={400}
                height={400}
                className="object-contain drop-shadow-[0_8px_30px_rgba(0,0,0,0.25)] max-h-[400px] w-auto"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      {total > 1 && (
        <div className="relative z-10 max-w-[1200px] mx-auto w-full px-6 pb-6">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                {banners.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      i === current
                        ? "w-8 bg-white"
                        : "w-2 bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs font-bold text-white/50 tabular-nums">
                {String(current + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
