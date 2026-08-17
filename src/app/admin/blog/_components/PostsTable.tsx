"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, Loader2, Pencil } from "lucide-react";
import { useTogglePostStatus } from "./useTogglePostStatus";
import type { PostStatus } from "../_schema";

export type PostRow = {
  id: number;
  title: string;
  status: PostStatus;
  category: string;
  date: string;
  author: string;
};

export function PostsTable({ rows }: { rows: PostRow[] }) {
  const router = useRouter();
  const { pendingId, confirmId, errorId, request, cancel } = useTogglePostStatus(() => router.refresh());

  if (rows.length === 0) {
    return (
      <div className="rounded-[16px] bg-white p-10 text-center shadow-[0_1px_3px_rgba(26,39,68,0.08)]">
        <p className="text-[14px] text-em-dark/55">Nenhum post encontrado com esse filtro.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-[16px] bg-white shadow-[0_1px_3px_rgba(26,39,68,0.08)]">
      <table className="w-full min-w-[720px] text-left text-[13px]">
        <thead>
          <tr className="border-b border-wire-100 text-[11px] font-bold uppercase tracking-[0.08em] text-em-dark/45">
            <th className="px-5 py-3.5">Título</th>
            <th className="px-5 py-3.5">Status</th>
            <th className="px-5 py-3.5">Categoria</th>
            <th className="px-5 py-3.5">Data</th>
            <th className="px-5 py-3.5">Autor</th>
            <th className="px-5 py-3.5" />
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-b border-wire-50 last:border-0 hover:bg-wire-50/60">
              <td className="max-w-[320px] px-5 py-3.5 font-semibold text-em-dark">
                <Link href={`/admin/blog/${row.id}/editar`} className="hover:text-em-green-dark hover:underline">
                  {row.title || "(sem título)"}
                </Link>
              </td>
              <td className="px-5 py-3.5">
                <span
                  className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-bold ${
                    row.status === "publish"
                      ? "bg-em-green-pale text-em-green-dark"
                      : "bg-wire-100 text-em-dark/55"
                  }`}
                >
                  {row.status === "publish" ? "Publicado" : "Rascunho"}
                </span>
              </td>
              <td className="px-5 py-3.5 text-em-dark/70">{row.category || "-"}</td>
              <td className="px-5 py-3.5 text-em-dark/70">{row.date}</td>
              <td className="px-5 py-3.5 text-em-dark/70">{row.author}</td>
              <td className="px-5 py-3.5">
                <div className="flex items-center justify-end gap-2">
                  {errorId === row.id && (
                    <span className="text-[11px] font-semibold text-em-coral-dark">Falhou</span>
                  )}
                  <Link
                    href={`/admin/blog/${row.id}/editar`}
                    className="inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 text-[12px] font-semibold text-em-dark/60 hover:bg-wire-50 hover:text-em-green-dark"
                  >
                    <Pencil className="h-3.5 w-3.5" strokeWidth={1.8} />
                    Editar
                  </Link>
                  <button
                    type="button"
                    onClick={() => request(row.id, row.status)}
                    disabled={pendingId === row.id}
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 text-[12px] font-semibold transition disabled:opacity-50 ${
                      confirmId === row.id
                        ? "bg-em-coral text-white"
                        : "text-em-dark/60 hover:bg-wire-50 hover:text-em-coral-dark"
                    }`}
                  >
                    {pendingId === row.id ? (
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    ) : row.status === "publish" ? (
                      <EyeOff className="h-3.5 w-3.5" strokeWidth={1.8} />
                    ) : (
                      <Eye className="h-3.5 w-3.5" strokeWidth={1.8} />
                    )}
                    {confirmId === row.id
                      ? "Confirmar"
                      : row.status === "publish"
                        ? "Despublicar"
                        : "Publicar"}
                  </button>
                  {confirmId === row.id && (
                    <button
                      type="button"
                      onClick={cancel}
                      className="text-[12px] font-semibold text-em-dark/40 hover:text-em-dark"
                    >
                      Cancelar
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
