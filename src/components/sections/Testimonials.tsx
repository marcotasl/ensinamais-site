"use client";

import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import type { Testimonial } from "@/types";

function VideoLightbox({ videoId, onClose }: { videoId: string; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Fechar vídeo"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
      >
        <X size={22} strokeWidth={2} />
      </button>
      <div
        className="max-w-4xl w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          className="w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title="Depoimento em vídeo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

function VideoCard({ t, onPlay }: { t: Testimonial; onPlay: () => void }) {
  return (
    <div className="text-center">
      <div
        className="aspect-video rounded-2xl overflow-hidden relative cursor-pointer group shadow-[0_18px_42px_-22px_rgba(26,39,68,0.28)]"
        onClick={onPlay}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://img.youtube.com/vi/${t.videoId}/maxresdefault.jpg`}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = `https://img.youtube.com/vi/${t.videoId}/hqdefault.jpg`;
          }}
          alt={t.title ?? `Depoimento de ${t.name}`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <button
            aria-label="Assistir depoimento"
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer"
          >
            <Play size={24} className="text-em-coral ml-1" strokeWidth={2} />
          </button>
        </div>
      </div>

      {t.title && (
        <p className="text-sm font-semibold text-em-coral-dark mt-5">{t.title}</p>
      )}
      <div className="text-base font-extrabold text-em-dark mt-1">{t.name}</div>
      <div className="text-sm text-em-dark-soft/70">{t.city}</div>
    </div>
  );
}

function useItemsPerView() {
  const [items, setItems] = useState(1);
  useEffect(() => {
    const mqDesktop = window.matchMedia("(min-width: 1024px)");
    const mqTablet = window.matchMedia("(min-width: 640px)");
    const update = () => setItems(mqDesktop.matches ? 3 : mqTablet.matches ? 2 : 1);
    update();
    mqDesktop.addEventListener("change", update);
    mqTablet.addEventListener("change", update);
    return () => {
      mqDesktop.removeEventListener("change", update);
      mqTablet.removeEventListener("change", update);
    };
  }, []);
  return items;
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [openVideoId, setOpenVideoId] = useState<string | null>(null);
  const itemsPerView = useItemsPerView();
  const total = TESTIMONIALS.length;
  const maxIndex = Math.max(0, total - itemsPerView);

  useEffect(() => {
    if (current > maxIndex) setCurrent(maxIndex);
  }, [current, maxIndex]);

  const next = useCallback(() => {
    setCurrent((p) => Math.min(p + 1, maxIndex));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrent((p) => Math.max(p - 1, 0));
  }, []);

  const closeVideo = useCallback(() => setOpenVideoId(null), []);

  return (
    <section id="depoimentos" className="relative px-4 sm:px-6">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-20 bg-repeat"
        style={{ backgroundImage: "url(/images/3d/pattern-confetti.webp)", backgroundSize: "560px" }}
      />

      <div className="relative max-w-[1200px] mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p className="eyebrow text-em-coral-dark mb-3">Depoimentos</p>
          <h2 className="text-2xl sm:text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1]">
            O que os <span className="marker-coral">pais</span> dizem
          </h2>
        </div>

        <div className="overflow-hidden -mx-3">
          <motion.div
            className="flex"
            animate={{ x: `-${current * (100 / total)}%` }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ width: `${(total / itemsPerView) * 100}%` }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="px-3" style={{ width: `${100 / total}%` }}>
                <VideoCard t={t} onPlay={() => setOpenVideoId(t.videoId)} />
              </div>
            ))}
          </motion.div>
        </div>

        {total > itemsPerView && (
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              disabled={current === 0}
              className="w-11 h-11 rounded-full bg-white border-2 border-em-coral/30 flex items-center justify-center text-em-coral hover:bg-em-coral hover:text-white transition-colors cursor-pointer shadow-sm disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-em-coral"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${i === current ? "w-8 bg-em-coral" : "w-2 bg-em-coral/30"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              disabled={current === maxIndex}
              className="w-11 h-11 rounded-full bg-white border-2 border-em-coral/30 flex items-center justify-center text-em-coral hover:bg-em-coral hover:text-white transition-colors cursor-pointer shadow-sm disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-em-coral"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>

      {openVideoId && <VideoLightbox videoId={openVideoId} onClose={closeVideo} />}
    </section>
  );
}
