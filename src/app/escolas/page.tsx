import type { Metadata } from "next";
import { ExternalLink, MapPin } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

const SCHOOL_LOCATOR_URL = "https://escolas.ensinamais.com.br/";

export const metadata: Metadata = {
  title: "Encontre uma Escola | Ensina Mais – Turma da Mônica",
  description:
    "Encontre a escola Ensina Mais mais próxima de você por estado, cidade, bairro ou localização.",
  alternates: { canonical: "/escolas/" },
};

export default function EscolasPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Escolas", url: "/escolas" },
        ])}
      />

      <section className="relative bg-em-dark pt-28 pb-24 px-4 sm:px-6 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-15 bg-repeat pointer-events-none"
          style={{
            backgroundImage: "url(/images/3d/pattern-dense.webp)",
            backgroundSize: "520px",
          }}
        />
        <div className="relative max-w-[900px] mx-auto text-center">
          <FadeIn>
            <span className="sticker-icon bg-em-blue text-em-dark mx-auto mb-5">
              <MapPin size={26} strokeWidth={2} />
            </span>
            <p className="eyebrow text-em-yellow mb-4">Nossas escolas</p>
            <h1 className="text-[clamp(2rem,4.4vw,3.25rem)] font-black tracking-tight text-white mb-5 leading-[1.05]">
              Encontre a Ensina Mais mais <span className="marker-yellow">perto de você</span>
            </h1>
            <p className="text-base sm:text-lg text-white/85 max-w-[620px] mx-auto leading-relaxed">
              Busque por estado, cidade ou bairro — ou use sua localização para ver as unidades mais próximas.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="relative z-10 px-3 sm:px-6 -mt-12 pb-12 sm:pb-16">
        <FadeIn>
          <div className="max-w-[1400px] mx-auto overflow-hidden rounded-3xl border border-em-dark-soft/20 bg-white shadow-[0_24px_56px_-28px_rgba(26,39,68,0.4)]">
            <iframe
              src={SCHOOL_LOCATOR_URL}
              title="Localizador de escolas Ensina Mais"
              allow="geolocation"
              loading="eager"
              referrerPolicy="strict-origin-when-cross-origin"
              className="block w-full h-[1080px] sm:h-[1120px] lg:h-[1180px] border-0 bg-white"
            />
          </div>
        </FadeIn>

        <p className="max-w-[1400px] mx-auto mt-4 text-center text-sm text-em-dark-soft/75">
          Se o localizador não aparecer,{" "}
          <a
            href={SCHOOL_LOCATOR_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-bold text-em-blue-dark underline hover:text-em-dark"
          >
            abra a busca em uma nova aba <ExternalLink size={14} aria-hidden />
          </a>
          .
        </p>
      </section>
    </main>
  );
}
