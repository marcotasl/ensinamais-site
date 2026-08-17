"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowDown, ArrowUp, Check, Loader2, Pencil, Trash2, X } from "lucide-react";
import { deleteBannerAction, moveBannerAction } from "../_actions";

export type BannerRow = {
  id: number;
  title: string;
  subtitulo: string;
  bgImage: string;
};

export function BannersList({ rows }: { rows: BannerRow[] }) {
  const router = useRouter();
  const [confirmId, setConfirmId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function move(id: number, direction: "up" | "down") {
    setError(null);
    startTransition(async () => {
      try {
        await moveBannerAction(id, direction);
        router.refresh();
      } catch (e) {
        setError(e instanceof Error ? e.message : "Falha ao reordenar.");
      }
    });
  }

  function remove(id: number) {
    setError(null);
    startTransition(async () => {
      try {
        await deleteBannerAction(id);
        setConfirmId(null);
        router.refresh();
      } catch (e) {
        setError(e instanceof Error ? e.message : "Falha ao excluir.");
      }
    });
  }

  if (rows.length === 0) {
    return (
      <div className="rounded-[16px] bg-white p-8 text-center text-[13px] text-em-dark/60 shadow-[0_1px_3px_rgba(26,39,68,0.08)]">
        Nenhum banner cadastrado ainda.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {error && (
        <p className="rounded-[10px] bg-[#FFEBEE] px-4 py-2.5 text-[13px] font-semibold text-[#C62828]">{error}</p>
      )}
      {rows.map((row, i) => (
        <div
          key={row.id}
          className="flex items-center gap-4 rounded-[16px] bg-white p-4 shadow-[0_1px_3px_rgba(26,39,68,0.08)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={row.bgImage} alt="" className="h-16 w-24 shrink-0 rounded-[10px] object-cover" />

          <div className="min-w-0 flex-1">
            {i === 0 && (
              <span className="mb-1 inline-block rounded-full bg-em-green-pale px-2.5 py-0.5 text-[11px] font-bold text-em-green-dark">
                No ar
              </span>
            )}
            <p className="truncate text-[14px] font-bold text-em-dark">{row.title}</p>
            <p className="truncate text-[12px] text-em-dark/55">{row.subtitulo}</p>
          </div>

          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              onClick={() => move(row.id, "up")}
              disabled={pending || i === 0}
              aria-label="Mover para cima"
              className="rounded-full p-2 text-em-dark/60 hover:bg-wire-50 disabled:opacity-30"
            >
              <ArrowUp className="h-4 w-4" strokeWidth={1.8} />
            </button>
            <button
              type="button"
              onClick={() => move(row.id, "down")}
              disabled={pending || i === rows.length - 1}
              aria-label="Mover para baixo"
              className="rounded-full p-2 text-em-dark/60 hover:bg-wire-50 disabled:opacity-30"
            >
              <ArrowDown className="h-4 w-4" strokeWidth={1.8} />
            </button>
            <Link
              href={`/admin/hero/${row.id}`}
              aria-label="Editar"
              className="rounded-full p-2 text-em-dark/60 hover:bg-wire-50"
            >
              <Pencil className="h-4 w-4" strokeWidth={1.8} />
            </Link>

            {confirmId === row.id ? (
              <div className="flex items-center gap-1 rounded-full bg-[#FFEBEE] py-1 pl-3 pr-1">
                <span className="text-[12px] font-semibold text-[#C62828]">Excluir?</span>
                <button
                  type="button"
                  onClick={() => remove(row.id)}
                  disabled={pending}
                  aria-label="Confirmar exclusão"
                  className="rounded-full p-1.5 text-[#C62828] hover:bg-white disabled:opacity-50"
                >
                  {pending ? (
                    <Loader2 className="h-4 w-4 animate-spin" strokeWidth={1.8} />
                  ) : (
                    <Check className="h-4 w-4" strokeWidth={1.8} />
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setConfirmId(null)}
                  disabled={pending}
                  aria-label="Cancelar exclusão"
                  className="rounded-full p-1.5 text-em-dark/60 hover:bg-white disabled:opacity-50"
                >
                  <X className="h-4 w-4" strokeWidth={1.8} />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setConfirmId(row.id)}
                aria-label="Excluir"
                className="rounded-full p-2 text-em-dark/60 hover:bg-[#FFEBEE] hover:text-[#C62828]"
              >
                <Trash2 className="h-4 w-4" strokeWidth={1.8} />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
