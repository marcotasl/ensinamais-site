"use client";

import { useRef, useState } from "react";
import { Loader2, Upload, X } from "lucide-react";

export function ImageUpload({
  value,
  url,
  onChange,
}: {
  value: number;
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
        const map: Record<string, string> = {
          file_too_large: "Arquivo grande demais (limite 8 MB).",
          unsupported_type: "Tipo não suportado. Use PNG, JPG ou WebP.",
          wp_upload_failed: "Falha ao salvar no WordPress.",
          unauthorized: "Sessão expirada. Faça login de novo.",
        };
        throw new Error(map[code] || `Falha: ${code}`);
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
      {value > 0 && url ? (
        <div className="flex items-start gap-4 rounded-[14px] bg-wire-50 p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={url}
            alt="Preview da imagem destaque"
            className="h-24 w-24 rounded-[10px] bg-white object-cover"
          />
          <div className="flex-1">
            <p className="text-[12px] font-semibold text-em-dark">Imagem atual</p>
            <p className="mb-2 break-all text-[11px] text-em-dark/55">{url.split("/").pop()}</p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                disabled={pending}
                className="inline-flex items-center gap-1.5 rounded-full border border-em-green/30 bg-white px-3 py-1.5 text-[12px] font-semibold text-em-green-dark hover:bg-em-green-pale disabled:opacity-50"
              >
                {pending ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Upload className="h-3.5 w-3.5" />}
                {pending ? "Enviando…" : "Substituir"}
              </button>
              <button
                type="button"
                onClick={() => onChange(0, "")}
                className="inline-flex items-center gap-1.5 rounded-full border border-em-coral/30 bg-white px-3 py-1.5 text-[12px] font-semibold text-em-coral-dark hover:bg-em-coral-pale"
              >
                <X className="h-3.5 w-3.5" />
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
          className="flex w-full flex-col items-center justify-center gap-2 rounded-[14px] border-2 border-dashed border-em-green/30 bg-wire-50 px-6 py-10 text-center transition hover:border-em-green hover:bg-em-green-pale disabled:opacity-50"
        >
          {pending ? (
            <Loader2 className="h-6 w-6 animate-spin text-em-green-dark" />
          ) : (
            <Upload className="h-6 w-6 text-em-green-dark" />
          )}
          <span className="text-[13px] font-semibold text-em-dark">
            {pending ? "Enviando…" : "Clique para enviar imagem"}
          </span>
          <span className="text-[11px] text-em-dark/55">PNG, JPG ou WebP até 8 MB</span>
        </button>
      )}
      {error && <p className="mt-2 text-[12px] font-semibold text-em-coral-dark">{error}</p>}
    </div>
  );
}
