import type { Metadata } from "next";
import { Clock, MapPin } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import CloudDivider from "@/components/ui/CloudDivider";
import Placeholder from "@/components/ui/Placeholder";
import ContactForm from "@/components/forms/ContactForm";
import { CONTACT_CHANNELS, OPENING_HOURS } from "@/lib/contact-data";

export const metadata: Metadata = {
  title: "Fale Conosco | Ensina Mais – Turma da Mônica",
  description: "Entre em contato com a franqueadora Ensina Mais. Dúvidas sobre cursos, franquias, SAC e ouvidoria. Atendimento em São José do Rio Preto/SP.",
  alternates: { canonical: "/fale-conosco/" },
};

// Cor de marca por canal, na ordem dos cards (franqueadora, SAC, franquia)
const CHANNEL_STYLES = [
  { pale: "bg-em-blue-pale", iconBg: "bg-em-blue", eyebrow: "text-em-blue-dark", tilt: "lg:tilt-l1" },
  { pale: "bg-em-green-pale", iconBg: "bg-em-green", eyebrow: "text-em-green-dark", tilt: "lg:tilt-r1" },
  { pale: "bg-em-coral-pale", iconBg: "bg-em-coral", eyebrow: "text-em-coral-dark", tilt: "lg:tilt-l1" },
] as const;

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Hero */}
      <section className="relative bg-em-dark pt-28 pb-32 sm:pb-36 px-4 sm:px-6 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-12 bg-repeat pointer-events-none"
          style={{ backgroundImage: "url(/images/3d/pattern-dense.webp)", backgroundSize: "520px" }}
        />
        <div className="relative max-w-[1200px] mx-auto text-center">
          <FadeIn>
            <p className="eyebrow text-em-yellow mb-4">Fale Conosco</p>
            <h1 className="text-[clamp(2rem,4.4vw,3.25rem)] font-black tracking-tight text-white mb-5 max-w-[760px] mx-auto leading-[1.05]">
              A gente está <span className="marker-yellow">pronto</span> para atender você
            </h1>
            <p className="text-base sm:text-lg text-white/85 max-w-[580px] mx-auto leading-relaxed">
              Tire suas dúvidas, agende uma aula experimental, conheça a franquia ou fale com nosso SAC. Respondemos em até 24h úteis.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form + Quick info */}
      <section className="px-4 sm:px-6 -mt-20 relative z-10 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 lg:gap-8">
          {/* Form card */}
          <FadeIn>
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_24px_56px_-28px_rgba(26,39,68,0.4)] h-full">
              <div className="mb-7">
                <p className="eyebrow text-em-green-dark mb-2">Envie sua mensagem</p>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-em-dark leading-tight">
                  Vamos <span className="marker-green">conversar</span>
                </h2>
              </div>
              <ContactForm />
            </div>
          </FadeIn>

          {/* Quick info */}
          <FadeIn delay={0.15}>
            <div className="relative bg-em-dark rounded-3xl p-6 sm:p-8 h-full flex flex-col gap-6 overflow-hidden shadow-[0_24px_56px_-28px_rgba(26,39,68,0.48)]">
              <div
                aria-hidden
                className="absolute inset-0 opacity-12 bg-repeat pointer-events-none"
                style={{ backgroundImage: "url(/images/3d/pattern-confetti.webp)", backgroundSize: "420px" }}
              />
              <div className="relative">
                <p className="eyebrow text-em-yellow mb-3">Horário de atendimento</p>
                <h3 className="text-xl font-black text-white mb-5 leading-tight">Quando falar com a gente</h3>
                <div className="flex flex-col gap-4">
                  {OPENING_HOURS.map((h) => (
                    <div key={h.days} className="flex items-start gap-3">
                      <span className="sticker-icon bg-em-blue text-white shrink-0" style={{ width: 40, height: 40 }}>
                        <Clock size={18} strokeWidth={1.8} />
                      </span>
                      <div>
                        <div className="text-sm font-black text-white">{h.days}</div>
                        <div className="text-sm text-white/72">{h.hours}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative border-t border-white/10 pt-6 mt-auto">
                <p className="eyebrow text-em-yellow mb-2">Resposta</p>
                <p className="text-sm text-white/78 leading-relaxed">
                  Todos os contatos são respondidos em até <strong className="text-white">24 horas úteis</strong>. Para urgências, ligue direto para nossa central.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact channels */}
      <section className="px-4 sm:px-6 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="mb-10 sm:mb-12 text-center max-w-[640px] mx-auto">
              <p className="eyebrow text-em-coral-dark mb-3">Canais de atendimento</p>
              <h2 className="text-2xl sm:text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1]">
                Fale com quem pode <span className="marker-coral">ajudar</span>
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {CONTACT_CHANNELS.map((channel, i) => {
              const style = CHANNEL_STYLES[i % CHANNEL_STYLES.length];
              return (
                <FadeIn key={channel.title} delay={Math.min(i * 0.1, 0.24)}>
                  <article
                    className={`relative h-full rounded-3xl ${style.pale} ${style.tilt} tilt-hover-straighten p-6 sm:p-8 shadow-[0_18px_42px_-22px_rgba(26,39,68,0.24)] flex flex-col`}
                  >
                    <span className={`sticker-icon ${style.iconBg} text-white mb-5`}>
                      <channel.icon size={26} strokeWidth={1.8} />
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-em-dark mb-2 leading-tight">{channel.title}</h3>
                    <p className="text-sm text-em-dark-soft/80 leading-relaxed mb-6">{channel.desc}</p>
                    <div className="flex flex-col gap-3 pt-5 mt-auto border-t border-em-dark/10">
                      {channel.info.map((item) => (
                        <div key={item.label}>
                          <p className={`text-[11px] font-black uppercase tracking-widest mb-0.5 ${style.eyebrow}`}>{item.label}</p>
                          {item.href ? (
                            <a href={item.href} className="text-sm font-bold text-em-dark hover:text-em-dark-soft transition-colors break-words">
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm font-bold text-em-dark break-words">{item.value}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mapa — transição em nuvem azul pra section da localização */}
      <CloudDivider variant={2} cloudColor="#E1F5FE" height={120} />
      <section className="bg-em-blue-pale px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <FadeIn>
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-8 max-w-[640px]">
              <p className="eyebrow text-em-blue-dark mb-3">Localização</p>
              <h2 className="text-2xl sm:text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1]">
                Onde a gente <span className="marker-blue">está</span>
              </h2>
              <p className="flex items-start gap-2 text-base text-em-dark-soft/80 leading-relaxed mt-4">
                <MapPin size={20} strokeWidth={1.8} className="text-em-blue-dark shrink-0 mt-0.5" />
                Av. Bady Bassitt, 4960, Jardim Alto Rio Preto, São José do Rio Preto/SP
              </p>
            </div>
            <Placeholder
              className="w-full h-[360px] sm:h-[420px] rounded-3xl shadow-[0_18px_42px_-22px_rgba(26,39,68,0.24)]"
              label="Mapa da sede, Av. Bady Bassitt, 4960"
            />
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
