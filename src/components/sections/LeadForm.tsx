"use client";

import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import LeadCaptureForm from "@/components/forms/LeadCaptureForm";

export default function LeadForm() {
  return (
    <section id="lead" className="bg-white px-6 pb-15 -mt-5">
      <FadeIn y={20}>
        <div className="max-w-[960px] mx-auto bg-white rounded-3xl px-6 py-9 sm:px-10 shadow-[0_12px_48px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] border-2 border-em-green-pale relative overflow-hidden">
          {/* Top gradient bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-em-green via-em-blue to-em-coral" />

          <div className="text-center mb-6">
            <h3 className="text-xl font-extrabold text-em-dark mb-1.5">
              Agende uma <span className="text-em-green">aula experimental gratuita</span>
            </h3>
            <p className="text-sm text-gray-500">
              Conheca a unidade mais perto de voce. Sem compromisso.
            </p>
          </div>

          <LeadCaptureForm />
        </div>
      </FadeIn>
    </section>
  );
}
