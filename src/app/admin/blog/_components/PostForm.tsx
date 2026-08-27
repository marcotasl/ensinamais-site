"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertTriangle,
  ArrowLeft,
  Check,
  ExternalLink,
  EyeOff,
  Eye,
  Loader2,
  RotateCcw,
  Save,
} from "lucide-react";
import { postFormSchema, postMetaSchema, type PostFormData } from "../_schema";
import { Field, Section, inputCls, useArmed } from "./inputs";
import { CategoryChecklist, type CategoryOption } from "./CategoryChecklist";
import { ImageUpload } from "./ImageUpload";
import { useTogglePostStatus } from "./useTogglePostStatus";
import { createPostAction, updatePostBodyAction, updatePostMetaAction } from "../_actions";
import { blogPostPath } from "@/lib/seo";

export function PostForm({
  mode,
  postId,
  postSlug,
  initialData,
  categoryOptions,
  isGutenberg,
  wpAdminEditUrl,
}: {
  mode: "create" | "edit";
  postId?: number;
  postSlug?: string;
  initialData: PostFormData;
  categoryOptions: CategoryOption[];
  isGutenberg?: boolean;
  wpAdminEditUrl?: string;
}) {
  const router = useRouter();
  const [status, setStatus] = useState(initialData.status);
  const [savingMeta, startMeta] = useTransition();
  const [savingBody, startBody] = useTransition();
  const bodySaveConfirm = useArmed();
  const [serverError, setServerError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    reset,
    getValues,
    formState: { errors, isDirty },
  } = useForm<PostFormData>({
    resolver: zodResolver(postFormSchema),
    defaultValues: initialData,
    mode: "onChange",
  });

  const toggle = useTogglePostStatus((_id, next) => {
    setStatus(next);
    setValue("status", next, { shouldDirty: false });
    setSuccessMsg(next === "draft" ? "Post despublicado." : "Post publicado.");
    router.refresh();
  });

  const featuredMedia = watch("featuredMedia");
  const featuredMediaUrl = watch("featuredMediaUrl");
  const selectedCategories = watch("categories");
  const previewCategorySlug =
    categoryOptions.find((option) => selectedCategories.includes(option.id))?.slug ??
    "sem-categoria";

  function clearFlash() {
    setServerError(null);
    setSuccessMsg(null);
  }

  function onCreate(data: PostFormData) {
    clearFlash();
    startBody(async () => {
      try {
        await createPostAction(data);
      } catch (e) {
        setServerError(e instanceof Error ? e.message : "Erro ao criar o post.");
      }
    });
  }

  function onSaveMeta() {
    if (!postId) return;
    clearFlash();
    startMeta(async () => {
      try {
        const data = getValues();
        const parsed = postMetaSchema.parse(data);
        await updatePostMetaAction(postId, parsed);
        setSuccessMsg(`Metadados salvos — ${new Date().toLocaleTimeString("pt-BR")}`);
        reset(data, { keepDirty: false, keepValues: true });
        router.refresh();
      } catch (e) {
        setServerError(e instanceof Error ? e.message : "Erro ao salvar metadados.");
      }
    });
  }

  function onSaveBody() {
    if (!postId) return;
    if (isGutenberg && !bodySaveConfirm.armed) {
      bodySaveConfirm.arm();
      return;
    }
    bodySaveConfirm.disarm();
    clearFlash();
    startBody(async () => {
      try {
        const data = getValues();
        await updatePostBodyAction(postId, data);
        setSuccessMsg(`Post salvo (com corpo) — ${new Date().toLocaleTimeString("pt-BR")}`);
        reset(data, { keepDirty: false, keepValues: true });
        router.refresh();
      } catch (e) {
        setServerError(e instanceof Error ? e.message : "Erro ao salvar o corpo do post.");
      }
    });
  }

  function onRestore() {
    reset(initialData);
    clearFlash();
    bodySaveConfirm.disarm();
  }

  const togglingStatus = postId !== undefined && toggle.pendingId === postId;
  const confirmToggle = postId !== undefined && toggle.confirmId === postId;
  const anyPending = savingMeta || savingBody || togglingStatus;

  return (
    <div className="mx-auto w-full max-w-[1000px] px-6 py-8 lg:px-10">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/blog"
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-em-dark/70 shadow-[0_1px_3px_rgba(26,39,68,0.08)] hover:text-em-green-dark"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.8} />
            Voltar
          </Link>
          <h1 className="text-[22px] font-bold text-em-dark">
            {mode === "create" ? "Novo post" : "Editar post"}
          </h1>
        </div>
        {mode === "edit" && postSlug && (
          <a
            href={blogPostPath({ categorySlug: previewCategorySlug, slug: postSlug })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-em-dark/70 shadow-[0_1px_3px_rgba(26,39,68,0.08)] hover:text-em-green-dark"
          >
            <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.8} />
            Ver no site
          </a>
        )}
      </div>

      {serverError && (
        <div className="mb-5 rounded-[12px] border-l-4 border-l-em-coral bg-em-coral-pale px-4 py-3 text-[13px] text-em-dark">
          {serverError}
        </div>
      )}
      {successMsg && !anyPending && (
        <div className="mb-5 inline-flex items-center gap-2 rounded-[12px] border-l-4 border-l-em-green bg-em-green-pale px-4 py-3 text-[13px] font-semibold text-em-green-dark">
          <Check className="h-4 w-4" strokeWidth={1.8} />
          {successMsg}
        </div>
      )}

      {isGutenberg && wpAdminEditUrl && (
        <div className="mb-5 rounded-[12px] border-l-4 border-l-em-blue bg-em-blue-pale px-4 py-3 text-[13px] text-em-dark">
          <p className="flex items-start gap-2 font-semibold text-em-blue-dark">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.8} />
            Este post foi escrito em blocos do WordPress (Gutenberg)
          </p>
          <p className="mt-1 text-em-dark/75">
            O editor aqui grava HTML puro. Salvar o corpo por aqui achata a estrutura de blocos de
            forma irreversível. Se quiser preservar os blocos, edite pelo wp-admin.
          </p>
          <a
            href={wpAdminEditUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 text-[12px] font-bold text-em-blue-dark underline underline-offset-2"
          >
            <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.8} />
            Editar no wp-admin
          </a>
        </div>
      )}

      {/* Enter num input dispara submit nativo do <form>; no modo edição não
          há submit nativo (tudo passa por botão type="button"), então o
          handler vira no-op fora do create. */}
      <form
        onSubmit={mode === "create" ? handleSubmit(onCreate) : (e) => e.preventDefault()}
        className="space-y-6"
      >
        <Section title="Conteúdo">
          <Field label="Título" required error={errors.title?.message}>
            <input {...register("title")} className={inputCls} placeholder="Título do post" />
          </Field>
          <Field label="Resumo" hint="Aparece na listagem e no card do blog" error={errors.excerpt?.message}>
            <textarea {...register("excerpt")} rows={3} className={inputCls} />
          </Field>
          <Field label="Corpo" hint="Texto monoespaçado, HTML puro">
            <Controller
              control={control}
              name="content"
              render={({ field }) => (
                <textarea
                  {...field}
                  rows={mode === "create" ? 16 : 20}
                  spellCheck={false}
                  className={`${inputCls} font-mono text-[13px] leading-relaxed`}
                  placeholder="<p>Conteúdo do post...</p>"
                />
              )}
            />
          </Field>
        </Section>

        <Section title="Categoria e imagem">
          <Field label="Categorias" required error={errors.categories?.message}>
            <Controller
              control={control}
              name="categories"
              render={({ field }) => (
                <CategoryChecklist options={categoryOptions} value={field.value || []} onChange={field.onChange} />
              )}
            />
          </Field>
          <Field label="Imagem destaque">
            <ImageUpload
              value={featuredMedia}
              url={featuredMediaUrl}
              onChange={(id, url) => {
                setValue("featuredMedia", id, { shouldDirty: true });
                setValue("featuredMediaUrl", url, { shouldDirty: true });
              }}
            />
          </Field>
        </Section>

        {mode === "create" && (
          <div className="flex items-center justify-end gap-3">
            <button
              type="submit"
              disabled={savingBody}
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#8BC34A_0%,#6EA832_100%)] px-6 py-2.5 text-[13px] font-bold text-white shadow-[0_10px_24px_-10px_rgba(110,168,50,0.55)] hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {savingBody ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" strokeWidth={1.8} />}
              {savingBody ? "Criando…" : "Criar post"}
            </button>
          </div>
        )}
      </form>

      {mode === "edit" && postId && (
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => toggle.request(postId, status)}
              disabled={togglingStatus}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[12px] font-semibold transition disabled:opacity-50 ${
                confirmToggle
                  ? "bg-em-coral text-white"
                  : "bg-white text-em-dark/70 shadow-[0_1px_3px_rgba(26,39,68,0.08)] hover:text-em-coral-dark"
              }`}
            >
              {togglingStatus ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : status === "publish" ? (
                <EyeOff className="h-3.5 w-3.5" strokeWidth={1.8} />
              ) : (
                <Eye className="h-3.5 w-3.5" strokeWidth={1.8} />
              )}
              {confirmToggle ? "Confirmar" : status === "publish" ? "Despublicar" : "Publicar"}
            </button>
            {confirmToggle && (
              <button
                type="button"
                onClick={toggle.cancel}
                className="text-[12px] font-semibold text-em-dark/50 hover:text-em-dark"
              >
                Cancelar
              </button>
            )}
            {isDirty && (
              <button
                type="button"
                onClick={onRestore}
                className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-em-dark/50 hover:text-em-dark"
              >
                <RotateCcw className="h-3.5 w-3.5" strokeWidth={1.8} />
                Desfazer alterações
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onSaveMeta}
              disabled={anyPending || !isDirty}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-bold text-em-green-dark shadow-[0_1px_3px_rgba(26,39,68,0.08)] hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {savingMeta ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" strokeWidth={1.8} />}
              {savingMeta ? "Salvando…" : "Salvar metadados"}
            </button>
            <button
              type="button"
              onClick={onSaveBody}
              disabled={anyPending || !isDirty}
              className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-[13px] font-bold text-white shadow-[0_10px_24px_-10px_rgba(110,168,50,0.55)] hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60 ${
                bodySaveConfirm.armed
                  ? "bg-[linear-gradient(135deg,#EF5350_0%,#D32F2F_100%)]"
                  : "bg-[linear-gradient(135deg,#8BC34A_0%,#6EA832_100%)]"
              }`}
            >
              {savingBody ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" strokeWidth={1.8} />}
              {savingBody ? "Salvando…" : bodySaveConfirm.armed ? "Confirmar e achatar blocos" : "Salvar com corpo"}
            </button>
            {bodySaveConfirm.armed && (
              <button
                type="button"
                onClick={bodySaveConfirm.disarm}
                className="text-[12px] font-semibold text-em-dark/50 hover:text-em-dark"
              >
                Cancelar
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
