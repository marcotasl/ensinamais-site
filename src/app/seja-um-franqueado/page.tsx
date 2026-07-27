import type { Metadata } from "next";
import InstitutionalStub from "@/components/ui/InstitutionalStub";

export const metadata: Metadata = {
  title: "Seja um Franqueado",
  description: "Abra uma franquia Ensina Mais · Turma da Mônica na sua cidade. Negócio com mais de 10 anos de mercado, suporte completo MoveEdu e marca consolidada.",
  alternates: { canonical: "/seja-um-franqueado.html" },
};

export default function FranquiaPage() {
  return (
    <InstitutionalStub
      eyebrow="Seja um Franqueado"
      title="Transforme educação em um negócio sustentável"
      lead="Mais de 100 unidades em operação, marca consolidada com licenciamento Turma da Mônica e o suporte completo do grupo MoveEdu. Conheça o modelo de franquia Ensina Mais."
      blocks={[
        {
          title: "Modelo de negócio",
          desc: "Franquia validada com retorno previsível, ticket médio recorrente (mensalidade) e baixa sazonalidade ao longo do ano letivo.",
          image: "/images/conheca/cultura-escola.webp",
          imageAlt: "Fachada de uma unidade Ensina Mais Turma da Mônica",
        },
        {
          title: "Investimento e ROI",
          desc: "Estrutura de investimento adaptada à cidade e ao porte da unidade, com projeções financeiras detalhadas no processo de avaliação.",
          image: "/images/conheca/cultura-encontro-rede.webp",
          imageAlt: "Encontro nacional da rede Ensina Mais",
          imagePosition: "center 58%",
        },
        {
          title: "Suporte MoveEdu",
          desc: "Treinamento operacional, marketing, consultoria pedagógica e suporte tecnológico contínuo da franqueadora.",
          image: "/images/conheca/cultura-formacao.webp",
          imageAlt: "Formação oferecida para a rede Ensina Mais",
        },
        {
          title: "Marca consolidada",
          desc: "Licenciamento Turma da Mônica e mais de uma década de história, com credibilidade e reconhecimento pré-formados na região.",
          image: "/images/conheca/hero-alunas-personagens.webp",
          imageAlt: "Alunas em uma unidade Ensina Mais com personagens da Turma da Mônica",
          imagePosition: "center 42%",
        },
        {
          title: "Histórias de franqueados",
          desc: "Conheça quem já abriu uma Ensina Mais e está transformando a educação na própria cidade.",
          image: "/images/conheca/cultura-mascotes.webp",
          imageAlt: "Representante da rede com os personagens Mônica e Cebolinha",
        },
        {
          title: "Próximos passos",
          desc: "Preencha o formulário de interesse e nosso time comercial entrará em contato com a apresentação completa da franquia.",
          image: "/images/conheca/hero-unidade.webp",
          imageAlt: "Equipe em atendimento dentro de uma unidade Ensina Mais",
          imagePosition: "62% center",
        },
      ]}
    />
  );
}
