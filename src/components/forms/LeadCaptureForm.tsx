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

export default function LeadCaptureForm() {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        {fields.map((field) => (
          <div key={field.name}>
            <input
              type={field.type}
              placeholder={field.placeholder}
              {...register(field.name)}
              className="w-full text-sm font-medium px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-gray-50 outline-none transition-all duration-200 focus:border-em-green focus:bg-white focus:ring-4 focus:ring-em-green/10"
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
        className="w-full text-[15px] font-extrabold text-white bg-gradient-to-br from-em-green to-em-green-dark rounded-[14px] py-4 flex items-center justify-center gap-2 shadow-[0_6px_20px_rgba(124,179,66,0.25)] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(124,179,66,0.35)] transition-all duration-250 disabled:opacity-60 cursor-pointer"
      >
        Quero agendar minha aula gratis <ArrowRight size={16} />
      </button>
    </form>
  );
}
