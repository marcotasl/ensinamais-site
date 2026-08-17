"use client";

import { Suspense, useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Loader2 } from "lucide-react";

export default function AdminLoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const nextPath = params.get("next") || "/admin";
  const [user, setUser] = useState("");
  const [appPassword, setAppPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, appPassword }),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => null);
      const msg =
        data?.error === "invalid_credentials"
          ? "Usuário ou senha de aplicativo inválidos"
          : data?.error === "insufficient_permissions"
            ? "Este usuário não tem permissão de edição no Hero ou no Blog"
            : data?.error === "missing_credentials"
              ? "Preencha usuário e senha"
              : data?.error === "rate_limited"
                ? "Muitas tentativas. Aguarde alguns minutos e tente de novo"
                : "Não foi possível entrar. Tente novamente";
      setError(msg);
      return;
    }
    startTransition(() => {
      router.replace(nextPath);
      router.refresh();
    });
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[linear-gradient(135deg,#6EA832_0%,#1A2744_100%)] px-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-[420px] rounded-[20px] bg-white p-8 shadow-[0_30px_80px_-20px_rgba(15,20,10,0.45)]"
      >
        <div className="mb-6 flex items-center justify-center">
          <Image
            src="/images/logo/logo-preta.png"
            alt="Ensina Mais"
            width={200}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </div>

        <h1 className="mb-1 text-center text-[22px] font-bold text-em-dark">
          Entrar na administração
        </h1>
        <p className="mb-6 text-center text-[13px] text-em-dark/60">
          Acesso restrito à equipe autorizada
        </p>

        <label className="mb-4 block text-[13px] font-semibold text-em-dark">
          Usuário WordPress
          <input
            type="text"
            autoComplete="username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            disabled={pending}
            required
            className="mt-1 w-full rounded-[10px] border-[1.5px] border-wire-200 bg-wire-50 px-[14px] py-[10px] text-[15px] font-normal text-em-dark outline-none transition focus:border-em-green focus:bg-white focus:ring-4 focus:ring-em-green/15"
          />
        </label>

        <label className="mb-1 block text-[13px] font-semibold text-em-dark">
          Senha de aplicativo
          <input
            type="password"
            autoComplete="current-password"
            value={appPassword}
            onChange={(e) => setAppPassword(e.target.value)}
            disabled={pending}
            required
            className="mt-1 w-full rounded-[10px] border-[1.5px] border-wire-200 bg-wire-50 px-[14px] py-[10px] text-[15px] font-normal tracking-wider text-em-dark outline-none transition focus:border-em-green focus:bg-white focus:ring-4 focus:ring-em-green/15"
          />
        </label>
        <p className="mb-5 text-[12px] text-em-dark/50">
          Gere uma em Perfil do WordPress → Senhas de aplicativo
        </p>

        {error && (
          <div className="mb-5 rounded-[12px] border border-em-coral/35 border-l-4 border-l-em-coral bg-em-coral-pale px-4 py-3 text-[13px] text-em-dark">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={pending || !user || !appPassword}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#8BC34A_0%,#6EA832_100%)] px-6 py-[13px] text-[15px] font-bold text-white shadow-[0_10px_24px_-10px_rgba(110,168,50,0.55)] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending && <Loader2 className="h-4 w-4 animate-spin" />}
          {pending ? "Entrando…" : "Entrar"}
        </button>
      </form>
    </main>
  );
}
