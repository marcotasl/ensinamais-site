import { ArrowRight, Plus } from "lucide-react";
import styles from "./BlackFridayHero.module.css";

const ART = "/images/campanha/black-friday-2026";

function Sparkle({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden className={`absolute z-[2] text-white ${className}`}>
      <path
        d="M20 0C21.6 11.4 28.6 18.4 40 20 28.6 21.6 21.6 28.6 20 40 18.4 28.6 11.4 21.6 0 20 11.4 18.4 18.4 11.4 20 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

const SEALS = [
  { value: "25%", line1: "de desconto", line2: "no material", tone: "bg-gradient-to-b from-[#fff07a] to-[#ffd60a]" },
  { value: "20%", line1: "de desconto", line2: "nas parcelas", tone: "bg-white" },
];

export default function BlackFridayHero() {
  return (
    <section
      className={`relative isolate overflow-hidden rounded-b-[46px] pt-20 ${styles.hero}`}
      aria-labelledby="black-friday-titulo"
    >
      {/* Faixa atrás do menu fixo, como no mock do cliente: mantém o menu com texto claro. */}
      <div aria-hidden className="absolute inset-x-0 top-0 z-[2] h-20 bg-[#004c6a]" />
      <div aria-hidden className={styles.texture} />
      <Sparkle className="left-[3%] top-[30%] hidden w-9 lg:block" />
      <Sparkle className="left-[52%] top-[34%] hidden w-11 lg:block" />

      <div className={`mx-auto max-w-[1200px] px-4 pb-24 pt-8 sm:px-6 lg:pb-28 lg:pt-10 ${styles.grid}`}>
        <div className={`relative z-[2] pb-8 text-[#1a1a1a] lg:pb-10 ${styles.copy}`}>
          <h1 id="black-friday-titulo">
            <img
              src={`${ART}/titulo.webp`}
              alt="Black Friday"
              width={597}
              height={312}
              fetchPriority="high"
              className="mx-auto block h-auto w-[min(88vw,440px)] lg:mx-0 lg:w-[clamp(420px,38vw,560px)]"
            />
          </h1>

          <ul className="relative mx-auto mt-5 grid max-w-[560px] grid-cols-2 gap-3 lg:mx-0 lg:mt-7 lg:gap-5">
            {SEALS.map((seal) => (
              <li
                key={seal.value}
                className={`flex flex-col items-center justify-center gap-1 rounded-[18px] px-3 py-3 text-center shadow-[0_6px_18px_rgba(120,80,0,0.18)] sm:flex-row sm:gap-3 sm:rounded-[22px] sm:px-5 sm:py-4 sm:text-left ${seal.tone}`}
              >
                <span className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-black leading-none tracking-tight">
                  {seal.value}
                </span>
                <span className="text-[clamp(0.85rem,1.35vw,1.25rem)] font-black leading-[1.1]">
                  {seal.line1}
                  <br />
                  {seal.line2}
                </span>
              </li>
            ))}
            <span
              aria-hidden
              className="absolute left-1/2 top-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white bg-[#1a1a1a] text-white sm:size-11"
            >
              <Plus size={22} strokeWidth={3} />
            </span>
          </ul>

          <p className="mx-auto mt-5 max-w-[560px] text-center text-[clamp(1.05rem,1.7vw,1.5rem)] font-bold leading-snug lg:mx-0 lg:mt-7 lg:text-left">
            O momento ideal para investir no aprendizado que transforma a vida do seu filho é agora!
          </p>
        </div>

        <div className={styles.cta}>
          <a
            href="#lead"
            className="relative z-[2] flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-[#1d1d1d] px-4 text-[0.9rem] font-black sm:gap-3 sm:px-6 text-em-yellow shadow-button transition-colors hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1d1d1d] sm:text-lg lg:mt-20 lg:inline-flex lg:min-h-16 lg:w-auto lg:bg-em-yellow lg:px-10 lg:text-xl lg:text-[#1a1a1a] lg:hover:bg-[#ffe14d] lg:focus-visible:outline-em-yellow"
          >
            Consultar oferta na minha unidade
            <ArrowRight size={22} strokeWidth={2.4} aria-hidden className="shrink-0" />
          </a>
        </div>

        <div className={`mt-8 lg:mt-0 ${styles.art}`}>
          <div className="relative z-[2] mx-auto w-[min(62vw,300px)] lg:w-[clamp(340px,32vw,500px)]">
            <img
              src={`${ART}/magali.webp`}
              alt="Magali, da Turma da Mônica, sentada e sorrindo"
              width={569}
              height={686}
              fetchPriority="high"
              className="block h-auto w-full"
            />
            {/* Créditos de licenciamento da Turma da Mônica, obrigatórios junto da personagem. */}
            <div className="absolute left-full top-[28%] ml-1 flex flex-col items-center gap-3 lg:ml-3">
              <span className="text-[9px] font-medium tracking-wide text-[#1a1a1a] [writing-mode:vertical-rl] rotate-180 sm:text-[10px]">
                © MSP - BRASIL
              </span>
              <img
                src={`${ART}/assinatura-mauricio.webp`}
                alt="Assinatura de Mauricio de Sousa"
                width={28}
                height={218}
                loading="lazy"
                className="block h-auto w-[11px] sm:w-[14px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
