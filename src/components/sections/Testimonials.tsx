"use client";

import { useState, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = TESTIMONIALS.length;

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + total) % total);
  }, [total]);

  const t = TESTIMONIALS[current];

  return (
    <section id="depoimentos" className="relative px-4 sm:px-6">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-20 bg-repeat"
        style={{ backgroundImage: "url(/images/3d/pattern-confetti.webp)", backgroundSize: "560px" }}
      />

      <div className="relative max-w-[880px] mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p className="eyebrow text-em-coral-dark mb-3">Depoimentos</p>
          <h2 className="text-2xl sm:text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1]">
            O que os <span className="marker-coral">pais</span> dizem
          </h2>
        </div>

        {/* Card carrossel com bg pale + tilt */}
        <div className="relative rounded-3xl bg-em-yellow/20 border-2 border-em-yellow/40 px-6 sm:px-12 py-10 sm:py-14 shadow-[0_18px_42px_-22px_rgba(26,39,68,0.22)]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={{
                enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
                center: { x: 0, opacity: 1 },
                exit: (dir: number) => ({ x: dir > 0 ? -40 : 40, opacity: 0 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <Quote size={36} className="text-em-coral mx-auto mb-5" />

              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-em-dark mb-7 max-w-[640px] mx-auto">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-em-green flex items-center justify-center text-white font-black text-sm">
                  {t.name.split(" ").map((s) => s[0]).slice(0, 2).join("")}
                </div>
                <div className="text-left">
                  <div className="text-base font-extrabold text-em-dark">{t.name}</div>
                  <div className="text-sm text-em-dark-soft/70">{t.city}</div>
                </div>
              </div>

              <div className="flex gap-0.5 justify-center mt-4">
                {Array(t.stars).fill(0).map((_, j) => (
                  <Star key={j} size={16} fill="#FFCC00" color="#FFCC00" />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-6 mt-10">
          <button onClick={prev} className="w-11 h-11 rounded-full bg-white border-2 border-em-coral/30 flex items-center justify-center text-em-coral hover:bg-em-coral hover:text-white transition-colors cursor-pointer shadow-sm">
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`h-2 rounded-full transition-all cursor-pointer ${i === current ? "w-8 bg-em-coral" : "w-2 bg-em-coral/30"}`}
              />
            ))}
          </div>
          <button onClick={next} className="w-11 h-11 rounded-full bg-white border-2 border-em-coral/30 flex items-center justify-center text-em-coral hover:bg-em-coral hover:text-white transition-colors cursor-pointer shadow-sm">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
