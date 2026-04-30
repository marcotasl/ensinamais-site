import type { Metadata } from "next";
import InstitutionalStub from "@/components/ui/InstitutionalStub";

export const metadata: Metadata = {
  title: "Carreiras",
  description: "Trabalhe na Ensina Mais: oportunidades para educadores, instrutores e profissionais administrativos na rede e na franqueadora.",
};

export default function CarreirasPage() {
  return (
    <InstitutionalStub
      eyebrow="Trabalhe Conosco"
      title="Faça parte do time Ensina Mais"
      lead="Buscamos pessoas que acreditam no poder transformador da educação. Confira as oportunidades abertas na franqueadora e nas escolas da rede."
      validation={{
        message: "A página /carreiras existe no site atual (carreiras.html). Precisa ser confirmada com o cliente: (a) se a página permanece, (b) se há vagas ativas, (c) se o conteúdo continua relevante ou se vira apenas formulário de banco de talentos.",
      }}
      blocks={[
        { title: "Oportunidades em escolas", desc: "Instrutores, coordenadores pedagógicos e equipe administrativa para unidades em todo o Brasil. Falar diretamente com a franqueadora local." },
        { title: "Oportunidades na franqueadora", desc: "Vagas em São José do Rio Preto/SP nas áreas pedagógica, marketing, comercial, tecnologia e operações." },
        { title: "Banco de talentos", desc: "Não encontrou uma vaga compatível? Cadastre seu currículo e entraremos em contato quando surgir uma oportunidade." },
      ]}
    />
  );
}
