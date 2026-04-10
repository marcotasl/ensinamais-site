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
            <input
              type={field.type}
              placeholder={field.placeholder}
              {...register(field.name)}
              className={`w-full text-base font-medium px-4 py-3.5 rounded-xl border outline-none transition-all duration-200 ${
                dark
                  ? "border-white/20 bg-white/10 text-white placeholder:text-wire-500 focus:border-white/40 focus:ring-2 focus:ring-white/10"
                  : "border-wire-300 bg-white focus:border-wire-600 focus:ring-2 focus:ring-wire-200"
              }`}
            />
            {errors[field.name] && (
              <p className="text-xs text-em-coral mt-1 ml-1">
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
            ? "text-wire-black bg-white hover:bg-wire-100"
            : "text-white bg-wire-black hover:bg-wire-900"
        }`}
      >
        {buttonText || "Quero agendar minha aula grátis"} <ArrowRight size={16} />
      </button>
    </form>
  );
}
