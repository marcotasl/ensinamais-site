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
    <section id="depoimentos" className="px-6">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-bold text-wire-400 uppercase tracking-widest mb-2">Depoimentos</p>
          <h2 className="text-2xl sm:text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-wire-black">
            O que os pais dizem
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
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
              <Quote size={32} className="text-wire-300 mx-auto mb-6" />

              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-wire-700 mb-6 sm:mb-8 max-w-[640px] mx-auto">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-wire-200" />
                <div className="text-left">
                  <div className="text-base font-bold text-wire-black">{t.name}</div>
                  <div className="text-sm text-wire-400">{t.city}</div>
                </div>
              </div>

              <div className="flex gap-0.5 justify-center mt-4">
                {Array(t.stars).fill(0).map((_, j) => (
                  <Star key={j} size={14} fill="#d9d9d9" color="#d9d9d9" />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button onClick={prev} className="w-10 h-10 rounded-full border border-wire-300 flex items-center justify-center text-wire-500 hover:border-wire-500 hover:text-wire-black transition-colors cursor-pointer">
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${i === current ? "w-6 bg-wire-black" : "w-1.5 bg-wire-300"}`}
              />
            ))}
          </div>
          <button onClick={next} className="w-10 h-10 rounded-full border border-wire-300 flex items-center justify-center text-wire-500 hover:border-wire-500 hover:text-wire-black transition-colors cursor-pointer">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
