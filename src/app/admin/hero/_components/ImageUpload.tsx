"use client";

import { useRef, useState } from "react";
import { Loader2, Upload, X } from "lucide-react";

// Espelha o Set ALLOWED de src/app/api/admin/media/route.ts (png/jpeg/webp
// só; SVG fora porque é XML executável, GIF fora porque nenhum módulo usa).
const ERROR_MESSAGES: Record<string, string> = {
  file_too_large: "Arquivo grande demais (limite de 8 MB).",
  unsupported_type: "Tipo não suportado. Use PNG, JPG ou WebP.",
  wp_upload_failed: "Falha ao salvar a imagem no WordPress.",
  unauthorized: "Sessão expirada. Faça login novamente.",
};

export function ImageUpload({
  url,
  onChange,
}: {
  url: string;
  onChange: (id: number, url: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function upload(file: File) {
    setError(null);
    setPending(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/admin/media", { method: "POST", body: fd });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.ok) {
        const code = data?.error || `http_${res.status}`;
        throw new Error(ERROR_MESSAGES[code] || "Falha ao enviar a imagem.");
      }
      onChange(data.id, data.url);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erro ao enviar.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) upload(f);
          e.currentTarget.value = "";
        }}
      />
      {url ? (
        <div className="flex items-start gap-4 rounded-[14px] bg-wire-50 p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={url}
            alt="Preview da imagem de fundo"
            className="h-20 w-32 shrink-0 rounded-[10px] object-cover"
          />
          <div className="flex-1">
            <p className="mb-2 break-all text-[11px] text-em-dark/55">{url.split("/").pop()}</p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                disabled={pending}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-em-green-dark shadow-[0_1px_2px_rgba(26,39,68,0.1)] hover:bg-em-green-pale disabled:opacity-50"
              >
                {pending ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" strokeWidth={1.8} />
                ) : (
                  <Upload className="h-3.5 w-3.5" strokeWidth={1.8} />
                )}
                {pending ? "Enviando…" : "Substituir"}
              </button>
              <button
                type="button"
                onClick={() => onChange(0, "")}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-[#C62828] shadow-[0_1px_2px_rgba(26,39,68,0.1)] hover:bg-[#FFEBEE]"
              >
                <X className="h-3.5 w-3.5" strokeWidth={1.8} />
                Remover
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={pending}
          className="flex w-full flex-col items-center justify-center gap-2 rounded-[14px] border-2 border-dashed border-wire-200 bg-wire-50 px-6 py-8 text-center transition hover:border-em-green disabled:opacity-50"
        >
          {pending ? (
            <Loader2 className="h-6 w-6 animate-spin text-em-green-dark" strokeWidth={1.8} />
          ) : (
            <Upload className="h-6 w-6 text-em-green-dark" strokeWidth={1.8} />
          )}
          <span className="text-[13px] font-semibold text-em-dark">
            {pending ? "Enviando…" : "Clique para enviar imagem"}
          </span>
          <span className="text-[11px] text-em-dark/55">PNG, JPG ou WebP até 8 MB</span>
        </button>
      )}
      {error && <p className="mt-2 text-[12px] font-semibold text-[#C62828]">{error}</p>}
    </div>
  );
}
