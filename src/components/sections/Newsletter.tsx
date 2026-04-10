"use client";

import { useState } from "react";
import { Mail, ArrowRight, Check } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO: integrar com API do cliente ou webhook
    console.log("Newsletter signup:", email);
    setSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16">
      <FadeIn>
        <div className="max-w-[1200px] mx-auto bg-wire-100 rounded-2xl px-6 sm:px-10 lg:px-14 py-10 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6 lg:gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Mail size={18} className="text-wire-500" />
                <p className="text-xs font-bold text-wire-500 uppercase tracking-widest">Newsletter</p>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-wire-black mb-2">
                Receba conteúdo sobre educação infantil
              </h2>
              <p className="text-base text-wire-500 leading-relaxed max-w-[460px]">
                Dicas para pais, novidades dos cursos e histórias de sucesso direto no seu e-mail. Sem spam.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={submitted}
                  className="flex-1 text-base font-medium px-5 py-4 rounded-xl border border-wire-300 bg-white outline-none transition-all focus:border-wire-600 focus:ring-2 focus:ring-wire-200 disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={submitted}
                  className="text-sm sm:text-base font-bold text-white bg-wire-black rounded-xl px-6 py-4 inline-flex items-center justify-center gap-2 hover:bg-wire-900 transition-all whitespace-nowrap cursor-pointer disabled:opacity-60"
                >
                  {submitted ? (
                    <>
                      Inscrito! <Check size={16} />
                    </>
                  ) : (
                    <>
                      Inscrever <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs text-wire-400 mt-3">Ao se inscrever, você concorda com nossa política de privacidade.</p>
            </form>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
