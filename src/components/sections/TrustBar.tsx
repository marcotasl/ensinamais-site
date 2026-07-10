import FadeIn from "@/components/ui/FadeIn";

const SELOS = [
  { src: "/images/selos/selo-abf-excelencia.webp", alt: "Selo ABF de Excelência em Franchising" },
  { src: "/images/selos/selo-melhores-franquias.webp", alt: "Selo Melhores Franquias do Brasil" },
  { src: "/images/selos/selo-melhor-microfranquia.webp", alt: "Selo Melhor Microfranquia do Brasil" },
];

export default function TrustBar() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-[1100px] mx-auto text-center">
        <FadeIn>
          <p className="eyebrow text-em-blue-dark mb-3">Reconhecimentos</p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1]">
            Uma rede premiada e reconhecida
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-10 sm:gap-x-16">
            {SELOS.map((selo) => (
              <img key={selo.src} src={selo.src} alt={selo.alt} className="h-32 sm:h-36 w-auto object-contain" />
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.18}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-em-dark-soft/70">
            <span className="text-sm">Uma marca do grupo</span>
            <span className="inline-flex items-center bg-em-dark rounded-lg px-3 py-2">
              <img src="/images/moveedu/logo-moveedu-white.svg" alt="Grupo MoveEdu" className="h-5 w-auto" />
            </span>
            <span className="text-em-dark-soft/30">·</span>
            <span className="text-sm">Licenciamento Estúdio Maurício de Sousa</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
