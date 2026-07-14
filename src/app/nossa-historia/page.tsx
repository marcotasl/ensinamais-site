import type { Metadata } from "next";
import InstitutionalStub from "@/components/ui/InstitutionalStub";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Nossa História",
  description: "A trajetória da Ensina Mais · Turma da Mônica desde a fundação até se tornar uma das maiores redes de apoio escolar do Brasil.",
  alternates: { canonical: "/nossa-historia" },
};

export default function NossaHistoriaPage() {
  return (
    <>
      <InstitutionalStub
        eyebrow="Nossa História"
        title="Mais de uma década formando crianças para o futuro"
        lead="Da primeira unidade até a rede com mais de 100 escolas pelo país, conheça os marcos que transformaram a Ensina Mais numa referência em educação complementar com licenciamento Turma da Mônica."
        blocks={[
          { title: "Fundação", desc: "Nascemos com a missão de oferecer reforço escolar de qualidade, com metodologia própria e parceria estratégica com a Mauricio de Sousa Produções." },
          { title: "Expansão", desc: "Crescimento orgânico com franqueados parceiros em capitais e cidades médias, sempre mantendo padrão pedagógico e operacional." },
          { title: "Hoje", desc: "Mais de 100 unidades em operação, integrando reforço, robótica, programação e inglês, preparando para escola e para a vida." },
        ]}
      />

      {/* Vínculo com o grupo MoveEdu */}
      <section className="bg-[#fafafa] px-4 sm:px-6 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn>
            <div className="bg-white rounded-[2rem] lg:rounded-[2.5rem] px-6 sm:px-12 lg:px-16 py-12 sm:py-16 shadow-[0_18px_42px_-22px_rgba(26,39,68,0.24)]">
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
                <div>
                  <p className="eyebrow text-em-blue-dark mb-3">Grupo MoveEdu</p>
                  <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1] mb-6">
                    Parte de um ecossistema de educação
                  </h2>
                  <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed">
                    A Ensina Mais é uma das marcas do grupo MoveEdu, ao lado de Microlins, Prepara e Yázigi. Fazer parte desse ecossistema significa contar com a solidez de um dos maiores grupos de educação e capacitação do país, com alcance nacional e experiência acumulada em formar pessoas para o presente e para o futuro.
                  </p>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <img src="/images/moveedu/logo-moveedu.svg" alt="Grupo MoveEdu" className="h-8 sm:h-10 w-auto" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
