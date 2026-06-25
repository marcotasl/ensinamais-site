import FadeIn from "@/components/ui/FadeIn";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  eyebrow?: string;
  title?: string;
  items: FaqItem[];
  /* cor do marcador no fim do título (padrão yellow). */
  marker?: "yellow" | "green" | "coral" | "blue" | "pink";
}

/*
 * Accordion de FAQ baseado em <details>/<summary> nativo, sem JS:
 * - acessível por padrão (teclado, screen reader)
 * - cada item entra/sai do estado open sem precisar de useState
 * - ícone "+" gira pra "×" via [open] selector (CSS only)
 * - quebra de linha preservada nas respostas (o copy do cliente vem
 *   com parágrafos colados, mas sem markdown estruturado)
 */
export default function FaqAccordion({
  eyebrow = "Perguntas frequentes",
  title,
  items,
  marker = "yellow",
}: FaqAccordionProps) {
  return (
    <section className="bg-[#fafafa] px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
      <div className="max-w-[960px] mx-auto">
        {(eyebrow || title) && (
          <FadeIn>
            <div className="mb-10 sm:mb-12 text-center">
              {eyebrow && <p className="eyebrow text-em-blue-dark mb-3">{eyebrow}</p>}
              {title && (
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-em-dark leading-[1.05] max-w-[720px] mx-auto">
                  {title.split(" ").length > 2 ? (
                    <>
                      {title.split(" ").slice(0, -2).join(" ")}{" "}
                      <span className={`marker-${marker}`}>
                        {title.split(" ").slice(-2).join(" ")}
                      </span>
                    </>
                  ) : (
                    <span className={`marker-${marker}`}>{title}</span>
                  )}
                </h2>
              )}
            </div>
          </FadeIn>
        )}

        <div className="flex flex-col gap-3 sm:gap-4">
          {items.map((item, i) => (
            <FadeIn key={item.q} delay={Math.min(i * 0.04, 0.32)}>
              <details className="group bg-white rounded-2xl shadow-[0_8px_24px_-16px_rgba(26,39,68,0.18)] open:shadow-[0_18px_42px_-22px_rgba(26,39,68,0.28)] transition-shadow">
                <summary className="cursor-pointer list-none flex items-start gap-4 p-5 sm:p-6">
                  <span className="flex-1 text-base sm:text-lg font-extrabold text-em-dark leading-snug">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className="shrink-0 mt-1 w-7 h-7 rounded-full bg-em-yellow flex items-center justify-center text-em-dark font-black text-lg leading-none transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-em-dark-soft/85 leading-relaxed whitespace-pre-line">
                  {item.a}
                </div>
              </details>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
