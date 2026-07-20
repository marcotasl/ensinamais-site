import { ArrowRight, Bell, Calendar, Trophy, TrendingUp, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const ITENS: { Icon: LucideIcon; label: string }[] = [
  { Icon: Calendar, label: "Agenda de aulas" },
  { Icon: Wallet, label: "Financeiro" },
  { Icon: TrendingUp, label: "Desempenho" },
  { Icon: Trophy, label: "Super Aluno" },
  { Icon: Bell, label: "Recados da escola" },
];

export default function AppPaisTeaser() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="relative rounded-[2rem] lg:rounded-[2.75rem] bg-em-blue-pale px-6 py-12 sm:p-12 lg:p-14 overflow-clip">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
              <div>
                <p className="eyebrow text-em-blue-dark mb-3">App dos Pais</p>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1] mb-5">
                  Acompanhe a vida escolar do seu filho{" "}
                  <span className="marker-blue">em tempo real</span>
                </h2>
                <p className="text-base sm:text-lg text-em-dark-soft/85 leading-relaxed mb-6 max-w-[520px]">
                  Agenda, financeiro, desempenho e as conquistas do Super Aluno reunidos no seu
                  celular, direto do aplicativo oficial da Ensina Mais.
                </p>

                <ul className="flex flex-wrap gap-2.5 mb-8">
                  {ITENS.map((item) => {
                    const Icon = item.Icon;
                    return (
                      <li
                        key={item.label}
                        className="inline-flex items-center gap-2 bg-white rounded-full pl-3 pr-4 py-2 text-sm font-bold text-em-dark shadow-[0_10px_24px_-16px_rgba(26,39,68,0.4)]"
                      >
                        <Icon size={18} strokeWidth={1.8} className="text-em-blue-dark" />
                        {item.label}
                      </li>
                    );
                  })}
                </ul>

                <div className="flex flex-col items-start gap-4">
                  <a
                    href="/app-dos-pais/"
                    className="inline-flex items-center justify-center gap-2 text-sm sm:text-base font-black text-white bg-em-blue rounded-full px-7 py-3.5 hover:bg-em-blue-dark transition-colors shadow-button w-full sm:w-auto whitespace-nowrap"
                  >
                    Conhecer o App dos Pais
                    <ArrowRight size={16} strokeWidth={2.4} />
                  </a>
                  <div className="flex items-center gap-3">
                    <a href="#" aria-label="Baixar na App Store">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/selos/badge-app-store.svg" alt="Baixar na App Store" className="h-11 w-auto" />
                    </a>
                    <a href="#" aria-label="Disponível no Google Play">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/selos/badge-google-play.png" alt="Disponível no Google Play" className="h-[3.35rem] w-auto" />
                    </a>
                  </div>
                </div>
              </div>

              <FadeIn delay={0.12}>
                <div className="relative mx-auto w-full max-w-[380px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/app-dos-pais/mockups/home.webp"
                    alt="App dos Pais, tela inicial"
                    className="w-full max-w-[380px] h-auto rounded-[1.8rem] shadow-[0_30px_60px_-28px_rgba(26,39,68,0.5)]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
