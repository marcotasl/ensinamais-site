import { ArrowRight } from "lucide-react";

/*
 * Bento dense — 4 cards, cada um com UM elemento dominante:
 * 1. Card grande de destaque (heading)
 * 2. Card aulas digitais (parágrafo + label)
 * 3. Card métrica (número grande)
 * 4. Card full-width de fechamento (statement + CTA)
 */

const CARDS = [
  {
    span: "sm:col-span-2 lg:col-span-7",
    bg: "bg-wire-900",
    content: (
      <div className="flex items-center h-full">
        <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight">
          Aqui, o ritmo é de cada criança,<br />não de uma turma
        </h3>
      </div>
    ),
  },
  {
    span: "sm:col-span-1 lg:col-span-5",
    bg: "bg-wire-100",
    content: (
      <div className="flex flex-col justify-between h-full gap-4">
        <p className="text-xs font-bold text-wire-400 uppercase tracking-widest">Aulas Digitais</p>
        <p className="text-base lg:text-lg leading-relaxed text-wire-700">
          Jogos, dinâmicas e recursos digitais que tornam o aprendizado mais prático, envolvente e conectado ao universo da criança.
        </p>
      </div>
    ),
  },
  {
    span: "sm:col-span-1 lg:col-span-4",
    bg: "bg-wire-800",
    content: (
      <div className="flex flex-col justify-end h-full">
        <span className="text-5xl sm:text-6xl font-black text-white leading-none">10+</span>
        <span className="text-sm font-semibold text-wire-400 mt-2">Anos desenvolvendo crianças e adolescentes</span>
      </div>
    ),
  },
  {
    span: "sm:col-span-2 lg:col-span-8",
    bg: "bg-wire-900",
    isCta: true,
    href: "#cursos",
    content: (
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-8 h-full">
        <h3 className="text-lg lg:text-xl font-black text-white max-w-[560px] leading-snug">
          Inglês, robótica e programação para desenvolver raciocínio, criatividade, comunicação e autonomia, habilidades que o futuro vai exigir.
        </h3>
        <span className="text-sm font-bold text-wire-300 shrink-0 inline-flex items-center gap-2 group-hover:text-white transition-colors">
          Habilidades para o futuro <ArrowRight size={16} />
        </span>
      </div>
    ),
  },
];

export default function Reasons() {
  return (
    <section id="metodologia" className="px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-10 sm:mb-12 max-w-[680px]">
          <p className="text-xs font-bold text-wire-400 uppercase tracking-widest mb-2">Diferenciais</p>
          <h2 className="text-2xl sm:text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-wire-black mb-4">
            Por que escolher a Ensina Mais?
          </h2>
          <p className="text-base sm:text-lg text-wire-600 leading-relaxed">
            Porque aprender melhor depende de vínculo e de uma rotina que faça sentido para cada criança.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3">
          {CARDS.map((card, i) => {
            const className = `card-lift rounded-2xl p-5 sm:p-6 lg:p-7 min-h-[160px] sm:min-h-[180px] ${card.span} ${card.bg}`;
            if (card.isCta && card.href) {
              return (
                <a key={i} href={card.href} className={`${className} group block`}>
                  {card.content}
                </a>
              );
            }
            return (
              <div key={i} className={className}>
                {card.content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
