import type { Metadata } from "next";
import InstitutionalStub from "@/components/ui/InstitutionalStub";

export const metadata: Metadata = {
  title: "Benefícios",
  description: "Os diferenciais da Ensina Mais · Turma da Mônica para alunos e famílias: ensino individualizado, tecnologia educacional e ambiente acolhedor.",
};

export default function BeneficiosPage() {
  return (
    <InstitutionalStub
      eyebrow="Benefícios"
      title="Por que escolher a Ensina Mais"
      lead="Mais que reforço escolar, somos uma rede de aprendizado que combina personalização, tecnologia e cuidado humano. Conheça os benefícios reais para o seu filho."
      validation={{
        message: "A página /beneficios existe no site atual mas precisa ser confirmada com o cliente se permanece como página standalone ou vira section dentro de Metodologia ou Conheça a Ensina Mais.",
      }}
      blocks={[
        { title: "Ensino individualizado", desc: "Cada aluno avança no seu ritmo, com plano de estudos personalizado a partir de avaliação diagnóstica." },
        { title: "Material exclusivo", desc: "Conteúdo didático próprio Ensina Mais com licenciamento Turma da Mônica, adaptado por faixa etária." },
        { title: "Acompanhamento contínuo", desc: "Portal dos pais com relatórios de evolução, frequência e desempenho atualizados a cada módulo." },
        { title: "Ambiente acolhedor", desc: "Espaços projetados pra estimular a curiosidade, com personagens da Turma da Mônica integrados ao ambiente." },
        { title: "Tecnologia integrada", desc: "Plataforma digital interativa, games educativos e exercícios adaptativos disponíveis 24h." },
        { title: "Instrutores capacitados", desc: "Equipe pedagógica treinada na metodologia Ensina Mais, com formação contínua e suporte da franqueadora." },
      ]}
    />
  );
}
