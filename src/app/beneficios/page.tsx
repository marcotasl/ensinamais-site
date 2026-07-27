import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BookOpen,
  Brain,
  HeartHandshake,
  ListChecks,
  Sparkles,
  Target,
} from "lucide-react";
import LeadCaptureForm from "@/components/forms/LeadCaptureForm";
import FadeIn from "@/components/ui/FadeIn";
import { SCHOOL_LOCATOR_URL } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Benefícios da Ensina Mais · Turma da Mônica",
  description:
    "Conheça os benefícios do acompanhamento individualizado da Ensina Mais para a confiança, a autonomia e o desempenho escolar do seu filho.",
  alternates: { canonical: "/beneficios" },
};

const BENEFITS: {
  Icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}[] = [
  {
    Icon: Sparkles,
    title: "Mais confiança pra aprender",
    description:
      "A criança tenta antes de desistir, pergunta mais e participa com segurança.",
    color: "bg-em-blue",
  },
  {
    Icon: BookOpen,
    title: "Melhora na base escolar",
    description:
      "As dificuldades são tratadas com orientação e isso aparece no desempenho em sala.",
    color: "bg-em-green",
  },
  {
    Icon: ListChecks,
    title: "Rotina mais organizada",
    description:
      "Constância e responsabilidade com os estudos ajudam a criar hábitos para a vida toda.",
    color: "bg-em-coral",
  },
  {
    Icon: Target,
    title: "Mais autonomia",
    description:
      "O aluno organiza melhor o tempo e confia mais na própria capacidade.",
    color: "bg-em-orange",
  },
  {
    Icon: Brain,
    title: "Raciocínio lógico",
    description:
      "Matemática, Robótica, Games e Programação estimulam a criação de soluções.",
    color: "bg-em-purple",
  },
  {
    Icon: HeartHandshake,
    title: "Mais tranquilidade pros pais",
    description:
      "A família acompanha a evolução com uma escola parceira, presente e transparente.",
    color: "bg-em-green-dark",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Entendemos o momento do aluno",
    description:
      "O acompanhamento começa pelas necessidades, pelo ritmo e pela relação da criança com os estudos.",
  },
  {
    number: "02",
    title: "Construímos um caminho individual",
    description:
      "As atividades são organizadas para desenvolver base escolar, constância, foco e autonomia.",
  },
  {
    number: "03",
    title: "Acompanhamos cada avanço",
    description:
      "O instrutor orienta de perto e a família entende o que está sendo trabalhado.",
  },
];

export default function BeneficiosPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <section className="relative bg-em-dark pt-24 pb-16 sm:pb-20 px-4 sm:px-6 rounded-b-[46px] overflow-clip">
        <div
          aria-hidden
          className="absolute inset-0 opacity-12 bg-repeat pointer-events-none"
          style={{
            backgroundImage: "url(/images/3d/pattern-confetti.webp)",
            backgroundSize: "520px",
          }}
        />
        <div className="relative max-w-[940px] mx-auto text-center">
          <FadeIn>
            <p className="eyebrow text-em-yellow mb-4">Benefícios na prática</p>
            <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-black tracking-tight text-white leading-[1.05] mb-5">
              O que muda na vida do seu filho,{" "}
              <span className="marker-yellow">e na sua.</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/85 max-w-[780px] mx-auto leading-relaxed">
              Os resultados vão além das notas: aparecem na confiança, na rotina
              e na forma como a criança se relaciona com os estudos.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {BENEFITS.map(({ Icon, title, description, color }, index) => (
              <FadeIn key={title} delay={Math.min(index * 0.06, 0.24)}>
                <article
                  className={`${color} rounded-3xl p-6 sm:p-7 h-full shadow-[0_18px_42px_-22px_rgba(26,39,68,0.3)]`}
                >
                  <Icon
                    size={32}
                    strokeWidth={1.8}
                    className="text-white mb-5"
                  />
                  <h2 className="text-lg sm:text-xl font-black text-white mb-2 leading-tight">
                    {title}
                  </h2>
                  <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                    {description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-em-blue-pale px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn>
            <div className="max-w-[760px] mx-auto text-center mb-10">
              <p className="eyebrow text-em-blue-dark mb-3">
                Como os resultados aparecem
              </p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-em-dark leading-[1.1]">
                Um processo próximo,{" "}
                <span className="marker-blue">feito para cada criança.</span>
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {STEPS.map((step, index) => (
              <FadeIn key={step.number} delay={index * 0.08}>
                <article className="bg-white rounded-3xl p-6 sm:p-7 h-full shadow-[0_18px_42px_-24px_rgba(26,39,68,0.2)]">
                  <span className="block text-4xl font-black text-em-blue/20 mb-4">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-black text-em-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-em-dark-soft/80 leading-relaxed">
                    {step.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 items-center">
          <FadeIn>
            <p className="eyebrow text-em-coral-dark mb-3">Veja na prática</p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-em-dark leading-[1.1] mb-5">
              Quer descobrir o melhor caminho{" "}
              <span className="marker-coral">para o seu filho?</span>
            </h2>
            <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed mb-7">
              Agende uma aula experimental gratuita. Nossa equipe entende o
              momento do aluno e apresenta as opções mais adequadas.
            </p>
            <a
              href={SCHOOL_LOCATOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-black text-em-dark"
            >
              Encontrar uma escola <ArrowRight size={17} />
            </a>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div
              id="lead"
              className="bg-em-dark rounded-3xl p-6 sm:p-8 shadow-[0_24px_56px_-28px_rgba(26,39,68,0.48)]"
            >
              <h3 className="text-xl font-black text-white mb-1">
                Agende uma aula experimental gratuita
              </h3>
              <p className="text-sm text-white/72 mb-5">
                Preencha os dados e a unidade entrará em contato.
              </p>
              <LeadCaptureForm
                layout="vertical"
                dark
                campaign="site-ensina-mais-beneficios"
                buttonText="Quero uma aula experimental"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
