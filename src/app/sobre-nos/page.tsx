import type { Metadata } from "next";
import InstitutionalStub from "@/components/ui/InstitutionalStub";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description: "Conheça a Ensina Mais, rede de franquias de apoio escolar licenciada pela Turma da Mônica, parte do grupo MoveEdu.",
};

export default function SobreNosPage() {
  return (
    <InstitutionalStub
      eyebrow="Sobre Nós"
      title="Quem somos e por que existimos"
      lead="Rede de apoio escolar licenciada pela Turma da Mônica, com mais de 100 unidades pelo Brasil. Nascemos pra desenvolver crianças e adolescentes de forma personalizada e divertida."
      blocks={[
        { title: "Nossa missão", desc: "Transformar a relação da criança com o aprendizado, integrando reforço escolar, tecnologia e habilidades para o futuro." },
        { title: "Nosso método", desc: "Ensino híbrido que combina conteúdo digital interativo com mediação humana especializada. Cada aluno avança no seu ritmo." },
        { title: "Grupo MoveEdu", desc: "Fazemos parte do grupo MoveEdu, ao lado de Microlins, Prepara IA e Yázigi: um ecossistema de educação que cobre todas as fases da vida." },
      ]}
    />
  );
}
