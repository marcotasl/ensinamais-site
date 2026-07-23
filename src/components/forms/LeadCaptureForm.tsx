"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight } from "lucide-react";

const schema = z.object({
  nome: z.string().min(2, "Informe seu nome"),
  email: z.string().email("E-mail invalido"),
  celular: z
    .string()
    .min(10, "Celular invalido")
    .regex(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, "Formato invalido"),
  cidade: z.string().min(2, "Informe sua cidade"),
});

type FormData = z.infer<typeof schema>;

interface LeadCaptureFormProps {
  layout?: "horizontal" | "vertical";
  buttonText?: string;
  dark?: boolean;
}

export default function LeadCaptureForm({ layout = "horizontal", buttonText, dark = false }: LeadCaptureFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    // TODO: integrar com API do cliente ou webhook
    console.log("Lead:", data);
  }

  const fields = [
    { name: "nome" as const, placeholder: "Nome completo", type: "text" },
    { name: "email" as const, placeholder: "E-mail", type: "email" },
    { name: "celular" as const, placeholder: "Celular", type: "tel" },
    { name: "cidade" as const, placeholder: "Cidade", type: "text" },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={`grid gap-3 mb-4 ${layout === "vertical" ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"}`}>
        {fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={`lead-${field.name}`} className="sr-only">
              {field.placeholder}
            </label>
            <input
              id={`lead-${field.name}`}
              type={field.type}
              placeholder={field.placeholder}
              aria-invalid={Boolean(errors[field.name])}
              aria-describedby={errors[field.name] ? `lead-${field.name}-error` : undefined}
              {...register(field.name)}
              className={`w-full text-base font-medium px-4 py-3.5 rounded-xl border outline-none transition-all duration-200 ${
                dark
                  ? "border-white/40 bg-em-dark/85 text-white placeholder:text-white/70 caret-white focus:border-em-yellow focus:ring-2 focus:ring-em-yellow/30"
                  : "border-em-dark-soft/55 bg-white text-em-dark placeholder:text-em-dark-soft/70 caret-em-dark focus:border-em-green-dark focus:ring-2 focus:ring-em-green-light/50"
              }`}
            />
            {errors[field.name] && (
              <p
                id={`lead-${field.name}-error`}
                role="alert"
                className={`text-xs font-semibold mt-1 ml-1 ${dark ? "text-em-coral-light" : "text-em-coral-dark"}`}
              >
                {errors[field.name]?.message}
              </p>
            )}
          </div>
        ))}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full text-base font-bold rounded-xl py-4 flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-60 cursor-pointer ${
          dark
            ? "text-em-dark bg-white hover:bg-em-green-pale shadow-button"
            : "text-white bg-em-green hover:bg-em-green-dark shadow-button"
        }`}
      >
        {buttonText || "Quero agendar minha aula grátis"} <ArrowRight size={16} />
      </button>
    </form>
  );
}
