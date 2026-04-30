import type { Metadata } from "next";
import InstitutionalStub from "@/components/ui/InstitutionalStub";

export const metadata: Metadata = {
  title: "Seja um Franqueado",
  description: "Abra uma franquia Ensina Mais · Turma da Mônica na sua cidade. Negócio com mais de 10 anos de mercado, suporte completo MoveEdu e marca consolidada.",
};

export default function FranquiaPage() {
  return (
    <InstitutionalStub
      eyebrow="Seja um Franqueado"
      title="Transforme educação em um negócio sustentável"
      lead="Mais de 100 unidades em operação, marca consolidada com licenciamento Turma da Mônica e o suporte completo do grupo MoveEdu. Conheça o modelo de franquia Ensina Mais."
      blocks={[
        { title: "Modelo de negócio", desc: "Franquia validada com retorno previsível, ticket médio recorrente (mensalidade) e baixa sazonalidade ao longo do ano letivo." },
        { title: "Investimento e ROI", desc: "Estrutura de investimento adaptada à cidade e ao porte da unidade, com projeções financeiras detalhadas no processo de avaliação." },
        { title: "Suporte MoveEdu", desc: "Treinamento operacional, marketing, consultoria pedagógica e suporte tecnológico contínuo da franqueadora." },
        { title: "Marca consolidada", desc: "Licenciamento Turma da Mônica e mais de uma década de história, com credibilidade e reconhecimento pré-formados na região." },
        { title: "Histórias de franqueados", desc: "Conheça quem já abriu uma Ensina Mais e está transformando a educação na própria cidade." },
        { title: "Próximos passos", desc: "Preencha o formulário de interesse e nosso time comercial entrará em contato com a apresentação completa da franquia." },
      ]}
    />
  );
}
