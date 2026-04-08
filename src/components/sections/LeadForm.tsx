"use client";

import LeadCaptureForm from "@/components/forms/LeadCaptureForm";

export default function LeadForm() {
  return (
    <section id="lead" className="px-6">
      <div className="max-w-[900px] mx-auto bg-white rounded-2xl px-6 py-10 sm:px-10 border border-wire-200 shadow-sm">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-black text-wire-black mb-2">
            Agende uma aula<br className="hidden sm:block" /> experimental gratuita
          </h2>
          <p className="text-base text-wire-500">
            Conheça a unidade mais perto de você. Sem compromisso.
          </p>
        </div>
        <LeadCaptureForm />
      </div>
    </section>
  );
}
