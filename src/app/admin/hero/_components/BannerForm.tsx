"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Loader2, RotateCcw, Save } from "lucide-react";
import { bannerContentSchema, HEX_COLOR_RE, type BannerContentData, type BannerPayload } from "../_schema";
import { createBannerAction, updateBannerAction } from "../_actions";
import { ImageUpload } from "./ImageUpload";
import { HeroPreview } from "./HeroPreview";

type FieldErrors = Partial<Record<keyof BannerContentData | "imagem_fundo", string>>;

type Props =
  | { mode: "create"; id?: undefined; initialContent: BannerContentData; initialImageUrl?: undefined }
  | { mode: "edit"; id: number; initialContent: BannerContentData; initialImageUrl: string };

export function BannerForm({ mode, id, initialContent, initialImageUrl }: Props) {
  const router = useRouter();
  const initialUrl = initialImageUrl ?? "";

  const [content, setContent] = useState<BannerContentData>(initialContent);
  const [imageUrl, setImageUrl] = useState(initialUrl);
  // 0 = nenhuma imagem nova escolhida ainda (modo edição: mantém a atual).
  const [pendingImageId, setPendingImageId] = useState(0);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [pending, startTransition] = useTransition();

  const dirty = JSON.stringify(content) !== JSON.stringify(initialContent) || imageUrl !== initialUrl;

  function setField<K extends keyof BannerContentData>(key: K, value: BannerContentData[K]) {
    setContent((prev) => ({ ...prev, [key]: value }));
    setSuccess(false);
  }

  function validate(): BannerPayload | null {
    const result = bannerContentSchema.safeParse(content);
    const next: FieldErrors = {};
    if (!result.success) {
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof BannerContentData;
        if (!next[key]) next[key] = issue.message;
      }
    }
    if (!imageUrl) {
      next.imagem_fundo = "Selecione uma imagem de fundo";
    }
    setErrors(next);
    if (!result.success || Object.keys(next).length > 0) return null;
    return { ...result.data, imagem_fundo: pendingImageId };
  }

  function handleSubmit() {
    setFormError(null);
    setSuccess(false);
    const payload = validate();
    if (!payload) return;

    startTransition(async () => {
      try {
        if (mode === "create") {
          await createBannerAction(payload); // redirect ocorre dentro da action
        } else {
          await updateBannerAction(id, payload);
          setPendingImageId(0);
          setSuccess(true);
          router.refresh();
        }
      } catch (e) {
        setFormError(e instanceof Error ? e.message : "Falha ao salvar o banner.");
      }
    });
  }

  function handleReset() {
    setContent(initialContent);
    setImageUrl(initialUrl);
    setPendingImageId(0);
    setErrors({});
    setFormError(null);
    setSuccess(false);
  }

  const previewSlide = useMemo(
    () => ({
      id: id ?? 0,
      title: content.title,
      subtitle: content.subtitulo,
      desc: content.descricao,
      ctaText: content.cta_texto,
      ctaHref: content.cta_link || "#",
      overlayColor: content.cor_overlay,
      image: "",
      bgImage: imageUrl || "/images/hero/heading.webp",
    }),
    [id, content, imageUrl],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,440px)_1fr]">
      <div className="flex flex-col gap-5 rounded-[16px] bg-white p-6 shadow-[0_1px_3px_rgba(26,39,68,0.08)]">
        <Field label="Título" error={errors.title} maxLength={120} value={content.title}>
          <input
            className={inputClass(!!errors.title)}
            value={content.title}
            maxLength={120}
            onChange={(e) => setField("title", e.target.value)}
          />
        </Field>

        <Field label="Subtítulo" error={errors.subtitulo} maxLength={80} value={content.subtitulo}>
          <input
            className={inputClass(!!errors.subtitulo)}
            value={content.subtitulo}
            maxLength={80}
            onChange={(e) => setField("subtitulo", e.target.value)}
          />
        </Field>

        <Field label="Descrição" error={errors.descricao} maxLength={320} value={content.descricao}>
          <textarea
            className={inputClass(!!errors.descricao)}
            rows={4}
            value={content.descricao}
            maxLength={320}
            onChange={(e) => setField("descricao", e.target.value)}
          />
        </Field>

        <Field label="Texto do CTA" error={errors.cta_texto} maxLength={60} value={content.cta_texto}>
          <input
            className={inputClass(!!errors.cta_texto)}
            value={content.cta_texto}
            maxLength={60}
            onChange={(e) => setField("cta_texto", e.target.value)}
          />
        </Field>

        <Field label="Link do CTA" error={errors.cta_link}>
          <input
            className={inputClass(!!errors.cta_link)}
            value={content.cta_link}
            placeholder="#lead, /cursos ou https://..."
            onChange={(e) => setField("cta_link", e.target.value)}
          />
        </Field>

        <Field label="Cor do overlay" error={errors.cor_overlay}>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={HEX_COLOR_RE.test(content.cor_overlay) ? content.cor_overlay : "#1A2744"}
              onChange={(e) => setField("cor_overlay", e.target.value)}
              className="h-10 w-14 shrink-0 cursor-pointer rounded-[8px] bg-wire-50"
            />
            <input
              className={inputClass(!!errors.cor_overlay)}
              value={content.cor_overlay}
              placeholder="#1A2744"
              onChange={(e) => setField("cor_overlay", e.target.value)}
            />
          </div>
        </Field>

        <div>
          <p className="mb-2 text-[13px] font-semibold text-em-dark">Imagem de fundo</p>
          <ImageUpload
            url={imageUrl}
            onChange={(newId, newUrl) => {
              setPendingImageId(newId);
              setImageUrl(newUrl);
              setSuccess(false);
            }}
          />
          {errors.imagem_fundo && (
            <p className="mt-1.5 text-[12px] font-semibold text-[#C62828]">{errors.imagem_fundo}</p>
          )}
        </div>

        {formError && <p className="text-[13px] font-semibold text-[#C62828]">{formError}</p>}
        {success && <p className="text-[13px] font-semibold text-em-green-dark">Alterações salvas.</p>}

        <div className="flex items-center gap-3 pt-2">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={pending}
            className="inline-flex items-center gap-2 rounded-full bg-em-green px-5 py-2.5 text-[13px] font-bold text-white transition hover:bg-em-green-dark disabled:opacity-60"
          >
            {pending ? (
              <Loader2 className="h-4 w-4 animate-spin" strokeWidth={1.8} />
            ) : (
              <Save className="h-4 w-4" strokeWidth={1.8} />
            )}
            {pending ? "Salvando…" : "Salvar"}
          </button>
          {dirty && (
            <button
              type="button"
              onClick={handleReset}
              disabled={pending}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-semibold text-em-dark/60 hover:bg-wire-50"
            >
              <RotateCcw className="h-3.5 w-3.5" strokeWidth={1.8} />
              Descartar alterações
            </button>
          )}
        </div>
      </div>

      <HeroPreview slide={previewSlide} />
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-[10px] bg-wire-50 px-3.5 py-2.5 text-[14px] text-em-dark outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-em-green ${
    hasError ? "ring-[#C62828]" : "ring-wire-200"
  }`;
}

function Field({
  label,
  error,
  maxLength,
  value,
  children,
}: {
  label: string;
  error?: string;
  maxLength?: number;
  value?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center justify-between text-[13px] font-semibold text-em-dark">
        {label}
        {maxLength !== undefined && (
          <span className="text-[11px] font-normal text-em-dark/45">
            {(value ?? "").length}/{maxLength}
          </span>
        )}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-[12px] font-semibold text-[#C62828]">{error}</span>}
    </label>
  );
}
