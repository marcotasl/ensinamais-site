import {
  BookOpen,
  Compass,
  Heart,
  Lightbulb,
  Rocket,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Placeholder from "@/components/ui/Placeholder";
import ValidationNotice from "@/components/ui/ValidationNotice";

type MarkerVariant = "yellow" | "green" | "coral" | "blue";

interface InstitutionalStubProps {
  eyebrow: string;
  title: string;
  lead: string;
  validation?: { message: string; title?: string };
  blocks: { title: string; desc: string }[];
  /** palavra-chave do título destacada com marcador; default = últimas 2 palavras */
  highlight?: string;
  /** cor do marcador sobre o título */
  marker?: MarkerVariant;
}

/* Paleta dos blocos rotaciona pela identidade (mesma lógica dos cards da home).
   Cada bloco recebe sticker colorido + um leve tilt alternado. */
const BLOCK_STYLES: { iconBg: string; Icon: LucideIcon; tilt: string }[] = [
  { iconBg: "bg-em-blue", Icon: Lightbulb, tilt: "lg:tilt-l1" },
  { iconBg: "bg-em-green", Icon: BookOpen, tilt: "lg:tilt-r1" },
  { iconBg: "bg-em-coral", Icon: Heart, tilt: "lg:tilt-l1" },
  { iconBg: "bg-em-orange", Icon: Rocket, tilt: "lg:tilt-r1" },
  { iconBg: "bg-em-purple", Icon: Compass, tilt: "lg:tilt-l1" },
  { iconBg: "bg-em-green-dark", Icon: Sparkles, tilt: "lg:tilt-r1" },
];

/** Divide o título em "miolo" + trecho final destacado pelo marcador.
   Quando highlight é passado, destaca esse trecho; senão, as 2 últimas palavras. */
function splitTitle(title: string, highlight?: string): [string, string] {
  if (highlight && title.includes(highlight)) {
    const at = title.lastIndexOf(highlight);
    return [title.slice(0, at), title.slice(at)];
  }
  const words = title.trim().split(/\s+/);
  if (words.length <= 2) return ["", title];
  const tail = words.slice(-2).join(" ");
  const head = words.slice(0, -2).join(" ");
  return [`${head} `, tail];
}

export default function InstitutionalStub({
  eyebrow,
  title,
  lead,
  validation,
  blocks,
  highlight,
  marker = "yellow",
}: InstitutionalStubProps) {
  const [head, tail] = splitTitle(title, highlight);

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {validation && (
        <ValidationNotice
          title={validation.title ?? "Validar com cliente"}
          message={validation.message}
        />
      )}

      <section className="relative bg-em-dark pt-24 pb-10 sm:pb-14 px-4 sm:px-6 rounded-b-[46px] mt-6 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-12 bg-repeat pointer-events-none"
          style={{ backgroundImage: "url(/images/3d/pattern-dense.webp)", backgroundSize: "520px" }}
        />
        <div className="relative max-w-[1200px] mx-auto text-center">
          <FadeIn>
            <p className="eyebrow text-em-yellow mb-4">{eyebrow}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-5 max-w-[820px] mx-auto leading-[1.05]">
              {head}
              <span className={`marker-${marker}`}>{tail}</span>
            </h1>
            <p className="text-base sm:text-lg text-white/85 max-w-[640px] mx-auto leading-relaxed">
              {lead}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 sm:px-6 pt-6 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {blocks.map((block, i) => {
              const style = BLOCK_STYLES[i % BLOCK_STYLES.length];
              const Icon = style.Icon;
              return (
                <FadeIn key={block.title} delay={Math.min(i * 0.08, 0.32)}>
                  <article
                    className={`group relative h-full bg-white rounded-3xl p-6 sm:p-7 shadow-[0_18px_42px_-22px_rgba(26,39,68,0.24)] ${style.tilt} tilt-hover-straighten`}
                  >
                    <Placeholder className="w-full aspect-[16/10] rounded-2xl mb-6" />
                    <span className={`sticker-icon ${style.iconBg} text-white -mt-12 mb-5 relative`}>
                      <Icon size={26} strokeWidth={1.8} />
                    </span>
                    <h2 className="text-lg sm:text-xl font-extrabold text-em-dark mb-2 leading-tight">
                      {block.title}
                    </h2>
                    <p className="text-sm sm:text-base text-em-dark-soft/82 leading-relaxed">
                      {block.desc}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
