"use client";

import { useState } from "react";

/**
 * Padrão "arme e confirme" pra ações que não usam confirm() nativo (trava
 * a automação): primeiro clique arma, segundo confirma. Reaproveitado nos
 * três botões destrutivos/irreversíveis do módulo (despublicar, salvar
 * corpo Gutenberg, despublicar na tabela).
 */
export function useArmed() {
  const [armed, setArmed] = useState(false);
  return { armed, arm: () => setArmed(true), disarm: () => setArmed(false) };
}

export function Field({
  label,
  hint,
  error,
  children,
  required,
}: {
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1 flex items-baseline gap-1 text-[13px] font-semibold text-em-dark">
        {label}
        {required && <span className="text-em-coral">*</span>}
      </span>
      {children}
      {hint && !error && <span className="mt-1 block text-[11px] text-em-dark/50">{hint}</span>}
      {error && <span className="mt-1 block text-[11px] font-semibold text-em-coral-dark">{error}</span>}
    </label>
  );
}

export const inputCls =
  "w-full rounded-[10px] border-[1.5px] border-wire-200 bg-wire-50 px-[14px] py-[10px] text-[14px] text-em-dark outline-none transition focus:border-em-green focus:bg-white focus:ring-4 focus:ring-em-green/15";

export function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[16px] bg-white p-6 shadow-[0_1px_3px_rgba(26,39,68,0.08)]">
      <div className="mb-4">
        <h2 className="text-[15px] font-bold text-em-dark">{title}</h2>
        {description && <p className="mt-0.5 text-[12px] text-em-dark/55">{description}</p>}
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
