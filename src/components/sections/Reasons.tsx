"use client";

import { ImageIcon } from "lucide-react";

/*
 * Dense bento — each card has ONE dominant element.
 * No card tries to do everything. Variety creates rhythm.
 *
 * ┌──────────┬───────────────────┐
 * │ HEADING  │  PARAGRAPH        │  row 1
 * │ only     │  + small heading  │
 * ├────┬─────┼─────────┬─────────┤
 * │ICON│ NUM │ HEADING │  IMAGE  │  row 2
 * │only│ big │  only   │  only   │
 * ├────┴─────┴─────────┴─────────┤
 * │  FULL WIDTH — statement      │  row 3
 * └──────────────────────────────┘
 */

const CARDS = [
  {
    // 1 — Big heading only
    span: "sm:col-span-1 lg:col-span-5",
    bg: "bg-wire-900",
    content: (
      <div className="flex items-center h-full">
        <h3 className="text-2xl lg:text-3xl font-black text-white">
          Ensino<br />individualizado<br />sem turmas
        </h3>
      </div>
    ),
  },
  {
    // 2 — Paragraph with small label
    span: "sm:col-span-1 lg:col-span-7",
    bg: "bg-wire-100",
    content: (
      <div className="flex flex-col justify-between h-full">
        <p className="text-xs font-bold text-wire-400 uppercase tracking-widest">Aulas Digitais</p>
        <p className="text-lg lg:text-xl leading-relaxed text-wire-700 mt-4">
          Gamificação, dinâmicas e jogos educativos que transformam o aprendizado
          em uma experiência envolvente e significativa para a criança.
        </p>
      </div>
    ),
  },
  {
    // 3 — Icon/visual only
    span: "sm:col-span-1 lg:col-span-3",
    bg: "bg-wire-200",
    content: (
      <div className="flex items-center justify-center h-full">
        <div className="w-20 h-20 rounded-2xl bg-wire-300 flex items-center justify-center">
          <ImageIcon size={32} className="text-wire-500" />
        </div>
      </div>
    ),
  },
  {
    // 4 — Big number
    span: "sm:col-span-1 lg:col-span-3",
    bg: "bg-wire-800",
    content: (
      <div className="flex flex-col justify-end h-full">
        <span className="text-5xl font-black text-white leading-none">10+</span>
        <span className="text-sm font-semibold text-wire-400 mt-2">Anos de<br />metodologia comprovada</span>
      </div>
    ),
  },
  {
    // 5 — Medium heading
    span: "sm:col-span-1 lg:col-span-6",
    bg: "bg-wire-50 border border-wire-200",
    content: (
      <div className="flex flex-col justify-between h-full">
        <p className="text-xs font-bold text-wire-400 uppercase tracking-widest">Turma da Mônica</p>
        <h3 className="text-xl font-extrabold text-wire-black mt-4">
          Licenciamento exclusivo que gera identificação
          imediata e confiança nas famílias brasileiras.
        </h3>
      </div>
    ),
  },
  {
    // 6 — Full width statement
    span: "sm:col-span-2 lg:col-span-12",
    bg: "bg-wire-900",
    content: (
      <div className="flex items-center justify-between gap-8 h-full">
        <h3 className="text-xl lg:text-2xl font-black text-white max-w-[600px]">
          Robótica, programação e inglês preparando crianças
          para as profissões do futuro.
        </h3>
        <span className="hidden sm:block text-sm font-bold text-wire-500 shrink-0">Profissões do Futuro →</span>
      </div>
    ),
  },
];

export default function Reasons() {
  return (
    <section id="metodologia" className="px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12 max-w-[480px]">
          <p className="text-xs font-bold text-wire-400 uppercase tracking-widest mb-2">Diferenciais</p>
          <h2 className="text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-wire-black">
            Por que escolher a Ensina Mais?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3">
          {CARDS.map((card, i) => (
            <div
              key={i}
              className={`card-lift rounded-2xl p-6 lg:p-7 min-h-[160px] ${card.span} ${card.bg}`}
            >
              {card.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
