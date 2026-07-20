"use client";

import { useEffect, useState } from "react";

interface Tela {
  label: string;
  src: string;
  alt: string;
}

interface AppScreensSliderProps {
  telas: Tela[];
}

const SLIDE_MS = 3500;

export default function AppScreensSlider({ telas }: AppScreensSliderProps) {
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  // bump reinicia o interval quando o usuário clica num dot
  const [timerKey, setTimerKey] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reducedMotion || telas.length <= 1) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % telas.length);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [reducedMotion, telas.length, timerKey]);

  function goTo(index: number) {
    setActive(index);
    setTimerKey((k) => k + 1);
  }

  if (telas.length === 0) return null;

  return (
    <div
      role="group"
      aria-roledescription="slideshow"
      aria-label="Telas do app"
      className="relative aspect-[1122/1402] w-full max-w-[300px] mx-auto rounded-2xl overflow-hidden"
    >
      {telas.map((tela, i) => (
        <div
          key={tela.label}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== active}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={i === active ? `kb-${active}` : `idle-${i}`}
            src={tela.src}
            alt={tela.alt}
            className={`h-full w-full object-cover ${
              i === active && !reducedMotion ? "animate-kenburns" : ""
            }`}
          />
        </div>
      ))}

      {/* Progresso sobreposto estilo stories: a barra ativa preenche na duração do slide */}
      <div className="absolute bottom-3 inset-x-4 z-10 flex items-center gap-1.5">
        {telas.map((tela, i) => (
          <button
            key={tela.label}
            type="button"
            aria-label={`Ver tela ${tela.label}`}
            onClick={() => goTo(i)}
            className="flex-1 py-1.5 cursor-pointer"
          >
            <span className="block h-1.5 rounded-full bg-white/45 overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
              {i < active && <span className="block h-full w-full bg-white" />}
              {i === active && (
                <span
                  key={`fill-${active}-${timerKey}`}
                  className={`block h-full bg-white ${
                    reducedMotion ? "w-full" : "w-0 animate-progressfill"
                  }`}
                />
              )}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
