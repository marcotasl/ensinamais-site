import FadeIn from "@/components/ui/FadeIn";

const SELOS = [
  { src: "/images/selos/selo-abf-excelencia.webp", alt: "Selo ABF de Excelência em Franchising" },
  { src: "/images/selos/selo-melhores-franquias.webp", alt: "Selo Melhores Franquias do Brasil" },
  { src: "/images/selos/selo-melhor-microfranquia.webp", alt: "Selo Melhor Microfranquia do Brasil" },
];

export default function TrustBar() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20">
      {/* Card escuro: os selos trazem texto descritivo branco embutido, que some em fundo claro */}
      <div className="relative overflow-hidden max-w-[1120px] mx-auto rounded-[2.5rem] bg-em-teal-dark px-6 py-14 sm:py-16 text-center shadow-[0_30px_60px_-30px_rgba(0,105,92,0.55)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/3d/pattern-confetti.webp"
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-[0.06] mix-blend-soft-light"
        />

        <div className="relative">
          <FadeIn>
            <p className="eyebrow text-em-yellow mb-3">Reconhecimentos</p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-white leading-[1.1]">
              Uma rede premiada e reconhecida
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-10 sm:gap-x-16">
              {SELOS.map((selo) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={selo.src} src={selo.src} alt={selo.alt} className="h-32 sm:h-36 w-auto object-contain" />
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.18}>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-white/60">
              <span className="text-sm">Uma marca do grupo</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/moveedu/logo-moveedu-white.svg" alt="Grupo MoveEdu" className="h-5 w-auto opacity-90" />
              <span className="text-white/25">·</span>
              <span className="text-sm">Licenciamento Estúdio Maurício de Sousa</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
