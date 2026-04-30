import type { Metadata } from "next";
import { Clock } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Placeholder from "@/components/ui/Placeholder";
import ContactForm from "@/components/forms/ContactForm";
import { CONTACT_CHANNELS, OPENING_HOURS } from "@/lib/contact-data";

export const metadata: Metadata = {
  title: "Fale Conosco | Ensina Mais – Turma da Mônica",
  description: "Entre em contato com a franqueadora Ensina Mais. Dúvidas sobre cursos, franquias, SAC e ouvidoria. Atendimento em São José do Rio Preto/SP.",
};

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Hero */}
      <section className="bg-wire-900 pt-24 pb-28 sm:pb-32 px-4 sm:px-6 rounded-b-[46px]">
        <div className="max-w-[1200px] mx-auto text-center">
          <FadeIn>
            <p className="text-xs font-bold text-wire-500 uppercase tracking-widest mb-3">Fale Conosco</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-5 max-w-[700px] mx-auto">
              Estamos prontos para atender você
            </h1>
            <p className="text-base sm:text-lg text-wire-400 max-w-[560px] mx-auto leading-relaxed">
              Tire suas dúvidas, agende uma aula experimental, conheça a franquia ou fale com nosso SAC. Respondemos em até 24h úteis.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form + Channels */}
      <section className="px-4 sm:px-6 -mt-16 relative z-10 pb-16 sm:pb-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 lg:gap-8">
          {/* Form card */}
          <FadeIn>
            <div className="bg-white rounded-2xl border border-wire-200 p-6 sm:p-8 lg:p-10 shadow-sm h-full">
              <div className="mb-6">
                <p className="text-xs font-bold text-wire-400 uppercase tracking-widest mb-2">Envie sua mensagem</p>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-wire-black">
                  Vamos conversar
                </h2>
              </div>
              <ContactForm />
            </div>
          </FadeIn>

          {/* Quick info */}
          <FadeIn delay={0.15}>
            <div className="bg-wire-black rounded-2xl p-6 sm:p-8 h-full flex flex-col gap-6">
              <div>
                <p className="text-xs font-bold text-wire-500 uppercase tracking-widest mb-2">Horário de Atendimento</p>
                <h3 className="text-xl font-black text-white mb-4">Quando falar com a gente</h3>
                <div className="flex flex-col gap-3">
                  {OPENING_HOURS.map((h) => (
                    <div key={h.days} className="flex items-start gap-3">
                      <Clock size={16} className="text-wire-500 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-bold text-white">{h.days}</div>
                        <div className="text-sm text-wire-400">{h.hours}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 mt-auto">
                <p className="text-xs font-bold text-wire-500 uppercase tracking-widest mb-2">Resposta</p>
                <p className="text-sm text-wire-400 leading-relaxed">
                  Todos os contatos são respondidos em até <strong className="text-white">24 horas úteis</strong>. Para urgências, ligue direto para nossa central.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact channels */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="mb-10 text-center">
              <p className="text-xs font-bold text-wire-400 uppercase tracking-widest mb-2">Canais de Atendimento</p>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-wire-black">
                Fale com quem pode ajudar
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CONTACT_CHANNELS.map((channel, i) => (
              <FadeIn key={channel.title} delay={i * 0.1}>
                <div className="card-lift bg-white rounded-2xl border border-wire-200 p-6 sm:p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-wire-100 flex items-center justify-center mb-4">
                    <channel.icon size={22} className="text-wire-600" />
                  </div>
                  <h3 className="text-lg font-extrabold text-wire-black mb-2">{channel.title}</h3>
                  <p className="text-sm text-wire-500 leading-relaxed mb-5">{channel.desc}</p>
                  <div className="flex flex-col gap-3 pt-5 border-t border-wire-100">
                    {channel.info.map((item) => (
                      <div key={item.label}>
                        <p className="text-xs font-bold text-wire-400 uppercase tracking-widest mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm font-semibold text-wire-black hover:text-wire-600 transition-colors break-words">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-wire-black break-words">{item.value}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-20">
        <FadeIn>
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-6">
              <p className="text-xs font-bold text-wire-400 uppercase tracking-widest mb-2">Localização</p>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-wire-black">
                Onde estamos
              </h2>
            </div>
            <Placeholder className="w-full h-[360px] sm:h-[420px] rounded-2xl" label="Mapa da sede — Av. Bady Bassitt, 4960" />
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
