"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { LogOut, Loader2 } from "lucide-react";

export function LogoutButton() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function onLogout() {
    startTransition(async () => {
      await fetch("/api/admin/logout", { method: "POST" });
      router.replace("/admin/login");
      router.refresh();
    });
  }

  return (
    <button
      type="button"
      onClick={onLogout}
      disabled={pending}
      className="flex w-full items-center gap-2.5 rounded-[10px] px-3 py-2.5 text-[13px] font-semibold text-em-dark/60 transition hover:bg-em-coral-pale hover:text-em-coral-dark disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? (
        <Loader2 className="h-[18px] w-[18px] animate-spin" strokeWidth={1.8} />
      ) : (
        <LogOut className="h-[18px] w-[18px]" strokeWidth={1.8} />
      )}
      Sair
    </button>
  );
}
