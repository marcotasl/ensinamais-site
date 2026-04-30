import type { Metadata } from "next";
import InstitutionalStub from "@/components/ui/InstitutionalStub";

export const metadata: Metadata = {
  title: "Metodologia",
  description: "A metodologia Ensina Mais combina ensino híbrido, acompanhamento individualizado e tecnologia educacional para transformar o aprendizado.",
};

export default function MetodologiaPage() {
  return (
    <InstitutionalStub
      eyebrow="Metodologia"
      title="Ensino híbrido, individualizado e divertido"
      lead="Cada aluno tem seu próprio ritmo. Nossa metodologia combina conteúdo digital interativo com mediação humana especializada, garantindo evolução real e sustentável."
      blocks={[
        { title: "Avaliação diagnóstica", desc: "Toda jornada começa com um diagnóstico personalizado que mapeia pontos fortes, dificuldades e objetivos de cada aluno." },
        { title: "Plano de estudos individual", desc: "A partir do diagnóstico, montamos um percurso adaptado ao ritmo e ao nível do aluno, revisado a cada módulo." },
        { title: "Aulas digitais interativas", desc: "Conteúdo gamificado, exercícios adaptativos e material exclusivo Turma da Mônica para manter o engajamento alto." },
        { title: "Mediação humana", desc: "Instrutores especializados acompanham o aluno presencialmente, tirando dúvidas e apoiando o desenvolvimento socioemocional." },
        { title: "Relatórios para os pais", desc: "Portal exclusivo com indicadores de evolução, frequência e desempenho, com transparência total para a família." },
        { title: "Ambiente Turma da Mônica", desc: "Layout, material e personagens licenciados criam um espaço acolhedor que conecta o aprendizado ao universo da criança." },
      ]}
    />
  );
}
