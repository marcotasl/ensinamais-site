"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Check } from "lucide-react";
import { useState } from "react";

const schema = z.object({
  nome: z.string().min(2, "Informe seu nome"),
  email: z.string().email("E-mail inválido"),
  celular: z
    .string()
    .min(10, "Celular inválido")
    .regex(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, "Formato inválido"),
  assunto: z.string().min(1, "Selecione um assunto"),
  mensagem: z.string().min(10, "Mensagem muito curta"),
});

type FormData = z.infer<typeof schema>;

const SUBJECTS = [
  "Dúvidas sobre cursos",
  "Agendar aula experimental",
  "Informações sobre franquia",
  "SAC / Ouvidoria",
  "Trabalhe conosco",
  "Parcerias",
  "Outro assunto",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    // TODO: integrar com API do cliente ou webhook
    console.log("Contact:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  }

  const inputClass = "w-full text-base font-medium text-em-dark placeholder:text-em-dark-soft/70 caret-em-dark px-4 py-3.5 rounded-xl border border-em-dark-soft/55 bg-white outline-none transition-all duration-200 focus:border-em-blue-dark focus:ring-2 focus:ring-em-blue-light/60";
  const labelClass = "block text-xs font-bold text-em-dark-soft/80 uppercase tracking-widest mb-1.5";
  const errorClass = "text-xs font-semibold text-em-coral-dark mt-1";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-nome" className={labelClass}>Nome completo</label>
          <input id="contact-nome" type="text" placeholder="Seu nome" aria-invalid={Boolean(errors.nome)} aria-describedby={errors.nome ? "contact-nome-error" : undefined} {...register("nome")} className={inputClass} />
          {errors.nome && <p id="contact-nome-error" role="alert" className={errorClass}>{errors.nome.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClass}>E-mail</label>
          <input id="contact-email" type="email" placeholder="seu@email.com" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "contact-email-error" : undefined} {...register("email")} className={inputClass} />
          {errors.email && <p id="contact-email-error" role="alert" className={errorClass}>{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-celular" className={labelClass}>Celular</label>
          <input id="contact-celular" type="tel" placeholder="(00) 00000-0000" aria-invalid={Boolean(errors.celular)} aria-describedby={errors.celular ? "contact-celular-error" : undefined} {...register("celular")} className={inputClass} />
          {errors.celular && <p id="contact-celular-error" role="alert" className={errorClass}>{errors.celular.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-assunto" className={labelClass}>Assunto</label>
          <select id="contact-assunto" aria-invalid={Boolean(errors.assunto)} aria-describedby={errors.assunto ? "contact-assunto-error" : undefined} {...register("assunto")} className={`${inputClass} cursor-pointer [&>option]:bg-white [&>option]:text-em-dark`} defaultValue="">
            <option value="" disabled>Selecione...</option>
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.assunto && <p id="contact-assunto-error" role="alert" className={errorClass}>{errors.assunto.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="contact-mensagem" className={labelClass}>Mensagem</label>
        <textarea
          id="contact-mensagem"
          rows={5}
          placeholder="Conte para nós como podemos ajudar..."
          aria-invalid={Boolean(errors.mensagem)}
          aria-describedby={errors.mensagem ? "contact-mensagem-error" : undefined}
          {...register("mensagem")}
          className={`${inputClass} resize-none`}
        />
        {errors.mensagem && <p id="contact-mensagem-error" role="alert" className={errorClass}>{errors.mensagem.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting || submitted}
        className="w-full sm:w-auto sm:self-start text-base font-bold text-white bg-wire-black rounded-xl px-8 py-4 inline-flex items-center justify-center gap-2 hover:bg-wire-900 transition-all disabled:opacity-60 cursor-pointer"
      >
        {submitted ? (
          <>
            Mensagem enviada <Check size={16} />
          </>
        ) : (
          <>
            Enviar mensagem <Send size={16} />
          </>
        )}
      </button>

      <p className="text-xs text-em-dark-soft/70">
        Ao enviar, você concorda com nossa <a href="/politica-de-privacidade" className="underline hover:text-em-dark">política de privacidade</a>.
      </p>
    </form>
  );
}
