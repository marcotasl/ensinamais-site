import { ArrowRight } from "lucide-react";

/*
 * Reasons (Diferenciais) — Bento lúdico
 * Quebra do grid retangular via rounded-3xl + tilts sutis + sticker badges.
 * Mantém hierarquia: card grande (destaque), 2 cards médios coloridos,
 * card full-width CTA com seta e marker.
 */

const CARDS = [
  {
    span: "sm:col-span-2 lg:col-span-7",
    bg: "bg-em-dark",
    shape: "rounded-3xl",
    tilt: "lg:tilt-l1",
    sticker: { bg: "bg-em-yellow", text: "✦", color: "text-em-dark" },
    content: (
      <div className="flex items-center h-full">
        <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight">
          Aqui, o ritmo é de{" "}
          <span className="marker-pink">cada criança</span>,
          <br />não de uma turma
        </h3>
      </div>
    ),
  },
  {
    span: "sm:col-span-1 lg:col-span-5",
    bg: "bg-em-blue-pale",
    shape: "rounded-3xl",
    tilt: "lg:tilt-r1",
    sticker: null,
    content: (
      <div className="flex flex-col justify-between h-full gap-4">
        <p className="eyebrow text-em-blue-dark">Aulas Digitais</p>
        <p className="text-base lg:text-lg leading-relaxed text-em-dark-soft">
          Jogos, dinâmicas e recursos digitais que tornam o aprendizado mais prático, envolvente e conectado ao universo da criança.
        </p>
      </div>
    ),
  },
  {
    span: "sm:col-span-1 lg:col-span-4",
    bg: "bg-em-purple",
    shape: "rounded-3xl",
    tilt: "lg:tilt-l1",
    sticker: null,
    content: (
      <div className="flex flex-col justify-end h-full">
        <span className="text-5xl sm:text-6xl font-black text-white leading-none">10+</span>
        <span className="text-sm font-semibold text-white/85 mt-2">Anos desenvolvendo crianças e adolescentes</span>
      </div>
    ),
  },
  {
    span: "sm:col-span-2 lg:col-span-8",
    bg: "bg-em-coral",
    shape: "rounded-3xl",
    tilt: "lg:tilt-r1",
    isCta: true,
    href: "#cursos",
    sticker: { bg: "bg-em-yellow", text: "→", color: "text-em-dark" },
    content: (
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-8 h-full">
        <h3 className="text-lg lg:text-xl font-black text-white max-w-[560px] leading-snug">
          Inglês, robótica e programação para desenvolver raciocínio, criatividade, comunicação e autonomia, habilidades que o futuro vai exigir.
        </h3>
        <span className="text-sm font-bold text-em-dark bg-em-yellow rounded-full px-4 py-2 shrink-0 inline-flex items-center gap-2 group-hover:bg-white transition-colors">
          Habilidades para o futuro <ArrowRight size={16} />
        </span>
      </div>
    ),
  },
];

export default function Reasons() {
  return (
    <section id="metodologia" className="relative px-4 sm:px-6 overflow-hidden">
      {/* Doodles decorativos */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 -right-10 w-64 h-64 bg-em-green/10 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-[1200px] mx-auto">
        <div className="mb-10 sm:mb-14 max-w-[720px]">
          <p className="eyebrow text-em-coral-dark mb-3">Diferenciais</p>
          <h2 className="text-2xl sm:text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-em-dark mb-4 leading-[1.1]">
            Por que escolher a <span className="marker-coral">Ensina Mais</span>?
          </h2>
          <p className="text-base sm:text-lg text-em-dark-soft/80 leading-relaxed">
            Porque aprender melhor depende de vínculo e de uma rotina que faça sentido para cada criança.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-7">
          {CARDS.map((card, i) => {
            const className = `relative ${card.shape} p-6 sm:p-7 lg:p-8 min-h-[180px] sm:min-h-[200px] ${card.span} ${card.bg} ${card.tilt} tilt-hover-straighten shadow-[0_18px_42px_-22px_rgba(26,39,68,0.3)]`;
            const Sticker = card.sticker ? (
              <span
                className={`sticker-icon ${card.sticker.bg} ${card.sticker.color} absolute -top-4 -right-3 font-black text-xl`}
                style={{ width: 46, height: 46 }}
              >
                {card.sticker.text}
              </span>
            ) : null;
            if (card.isCta && card.href) {
              return (
                <a key={i} href={card.href} className={`${className} group block`}>
                  {Sticker}
                  {card.content}
                </a>
              );
            }
            return (
              <div key={i} className={className}>
                {Sticker}
                {card.content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
