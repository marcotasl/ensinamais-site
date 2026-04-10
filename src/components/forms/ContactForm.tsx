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

  const inputClass = "w-full text-base font-medium px-4 py-3.5 rounded-xl border border-wire-300 bg-white outline-none transition-all duration-200 focus:border-wire-600 focus:ring-2 focus:ring-wire-200";
  const labelClass = "block text-xs font-bold text-wire-500 uppercase tracking-widest mb-1.5";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Nome completo</label>
          <input type="text" placeholder="Seu nome" {...register("nome")} className={inputClass} />
          {errors.nome && <p className="text-xs text-red-500 mt-1">{errors.nome.message}</p>}
        </div>
        <div>
          <label className={labelClass}>E-mail</label>
          <input type="email" placeholder="seu@email.com" {...register("email")} className={inputClass} />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Celular</label>
          <input type="tel" placeholder="(00) 00000-0000" {...register("celular")} className={inputClass} />
          {errors.celular && <p className="text-xs text-red-500 mt-1">{errors.celular.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Assunto</label>
          <select {...register("assunto")} className={`${inputClass} cursor-pointer`} defaultValue="">
            <option value="" disabled>Selecione...</option>
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.assunto && <p className="text-xs text-red-500 mt-1">{errors.assunto.message}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass}>Mensagem</label>
        <textarea
          rows={5}
          placeholder="Conte para nós como podemos ajudar..."
          {...register("mensagem")}
          className={`${inputClass} resize-none`}
        />
        {errors.mensagem && <p className="text-xs text-red-500 mt-1">{errors.mensagem.message}</p>}
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

      <p className="text-xs text-wire-400">
        Ao enviar, você concorda com nossa <a href="/politica-de-privacidade" className="underline hover:text-wire-600">política de privacidade</a>.
      </p>
    </form>
  );
}
