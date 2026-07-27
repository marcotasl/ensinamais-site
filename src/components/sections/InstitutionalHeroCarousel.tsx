"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    src: "/images/conheca/hero-educadora-aluna.webp",
    alt: "Educadora e aluna da Ensina Mais em uma atividade de robótica",
    position: "66% center",
  },
  {
    src: "/images/conheca/hero-alunas-personagens.webp",
    alt: "Alunas da Ensina Mais com personagens da Turma da Mônica",
    position: "52% center",
  },
  {
    src: "/images/conheca/hero-unidade.webp",
    alt: "Educadora trabalhando em uma unidade da Ensina Mais",
    position: "62% center",
  },
];

export default function InstitutionalHeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % SLIDES.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [paused]);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + SLIDES.length) % SLIDES.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % SLIDES.length);
  };

  return (
    <div
      role="region"
      aria-roledescription="carrossel"
      aria-label="Momentos da Ensina Mais"
      className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_24px_56px_-28px_rgba(26,39,68,0.45)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {SLIDES.map((slide, index) => {
        const isActive = index === activeIndex;

        return (
          <Image
            key={slide.src}
            src={slide.src}
            alt={isActive ? slide.alt : ""}
            aria-hidden={!isActive}
            fill
            priority={index === 0}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className={`object-cover transition-opacity duration-700 ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
            style={{ objectPosition: slide.position }}
          />
        );
      })}

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4 bg-gradient-to-t from-em-dark/60 to-transparent">
        <button
          type="button"
          onClick={showPrevious}
          aria-label="Imagem anterior"
          className="w-9 h-9 rounded-full bg-white/90 text-em-dark flex items-center justify-center shadow-md hover:bg-white transition-colors cursor-pointer"
        >
          <ChevronLeft size={18} strokeWidth={2.4} />
        </button>

        <div className="flex items-center gap-2" aria-label={`Imagem ${activeIndex + 1} de ${SLIDES.length}`}>
          {SLIDES.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Mostrar imagem ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                index === activeIndex ? "w-7 bg-em-yellow" : "w-2.5 bg-white/75 hover:bg-white"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={showNext}
          aria-label="Próxima imagem"
          className="w-9 h-9 rounded-full bg-white/90 text-em-dark flex items-center justify-center shadow-md hover:bg-white transition-colors cursor-pointer"
        >
          <ChevronRight size={18} strokeWidth={2.4} />
        </button>
      </div>
    </div>
  );
}
