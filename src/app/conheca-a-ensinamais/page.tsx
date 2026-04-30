import type { Metadata } from "next";
import InstitutionalStub from "@/components/ui/InstitutionalStub";

export const metadata: Metadata = {
  title: "Conheça a Ensina Mais",
  description: "Apoio escolar com licenciamento Turma da Mônica, ensino híbrido e quatro frentes de aprendizado: reforço, robótica, programação e inglês.",
};

export default function ConhecaPage() {
  return (
    <InstitutionalStub
      eyebrow="Conheça a Ensina Mais"
      title="Aprender é mais divertido com a Turma da Mônica"
      lead="Combinamos reforço escolar, tecnologia e habilidades do futuro num só lugar. Material exclusivo, instrutores capacitados, ambiente acolhedor e licenciamento oficial Turma da Mônica."
      blocks={[
        { title: "Apoio Escolar", desc: "Português e Matemática individualizados, com avaliação diagnóstica e plano de estudos personalizado." },
        { title: "Robótica", desc: "Metodologia STEAM com kits completos, projetos práticos e participação em competições." },
        { title: "Programação", desc: "Games, apps, Minecraft e lógica computacional preparando para as profissões do futuro." },
        { title: "Inglês", desc: "Abordagem comunicativa imersiva, com material exclusivo por faixa etária e máxima exposição ao idioma." },
        { title: "Tecnologia educacional", desc: "Plataforma digital com conteúdo interativo, gamificação e relatórios para acompanhar a evolução em tempo real." },
        { title: "Turma da Mônica", desc: "Licenciamento oficial Mauricio de Sousa Produções traz personagens queridos para o material didático e o ambiente das escolas." },
      ]}
    />
  );
}
