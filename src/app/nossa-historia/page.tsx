import type { Metadata } from "next";
import InstitutionalStub from "@/components/ui/InstitutionalStub";

export const metadata: Metadata = {
  title: "Nossa História",
  description: "A trajetória da Ensina Mais · Turma da Mônica desde a fundação até se tornar uma das maiores redes de apoio escolar do Brasil.",
};

export default function NossaHistoriaPage() {
  return (
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
  );
}
