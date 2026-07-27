"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Check, LoaderCircle } from "lucide-react";
import { formatBrazilianPhone } from "@/lib/input-masks";

const schema = z.object({
  nome: z.string().min(2, "Informe seu nome"),
  email: z.string().email("E-mail inválido"),
  celular: z
    .string()
    .min(10, "Celular inválido")
    .regex(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, "Formato inválido"),
  curso: z.string().min(1, "Selecione um curso"),
  estado: z.string().min(2, "Selecione seu estado"),
  cidadeId: z.string().min(1, "Selecione sua cidade"),
  unidadeId: z.string().min(1, "Selecione uma unidade"),
  website: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface LocationOption {
  value: string;
  label: string;
}

interface CourseOption {
  value: string;
  label: string;
}

interface LeadCaptureFormProps {
  layout?: "horizontal" | "vertical";
  buttonText?: string;
  dark?: boolean;
  course?: string;
  courseLabel?: string;
  category?: string;
  courseOptions?: CourseOption[];
  campaign?: string;
}

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

type UtmData = Partial<Record<(typeof UTM_KEYS)[number], string>>;

function getUtmData(): UtmData {
  if (typeof window === "undefined") return {};

  const search = new URLSearchParams(window.location.search);
  return Object.fromEntries(
    UTM_KEYS.map((key) => [key, search.get(key) || ""]).filter(
      ([, value]) => value,
    ),
  ) as UtmData;
}

async function fetchLocations(
  resource: "states" | "cities" | "units",
  params: Record<string, string> = {},
  signal?: AbortSignal,
) {
  const search = new URLSearchParams({ resource, ...params });
  const response = await fetch(`/api/moveedu/locations/?${search}`, {
    signal,
    cache: "no-store",
  });

  if (!response.ok) throw new Error("locations_unavailable");
  const data = (await response.json()) as {
    ok: boolean;
    options?: LocationOption[];
  };

  if (!data.ok || !Array.isArray(data.options)) {
    throw new Error("locations_invalid");
  }

  return data.options;
}

export default function LeadCaptureForm({
  layout = "horizontal",
  buttonText,
  dark = false,
  course,
  courseLabel,
  category,
  courseOptions = [],
  campaign = "site-ensina-mais",
}: LeadCaptureFormProps) {
  const [states, setStates] = useState<LocationOption[]>([]);
  const [cities, setCities] = useState<LocationOption[]>([]);
  const [units, setUnits] = useState<LocationOption[]>([]);
  const [loading, setLoading] = useState<"states" | "cities" | "units" | null>(
    "states",
  );
  const [locationError, setLocationError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [utm] = useState<UtmData>(getUtmData);
  const cityRequest = useRef<AbortController | null>(null);
  const unitRequest = useRef<AbortController | null>(null);

  const fixedCourse = course?.trim() || "";
  const initialCourse =
    fixedCourse ||
    (courseOptions.length === 1 ? courseOptions[0].value : "");

  const {
    register,
    handleSubmit,
    reset,
    resetField,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      curso: initialCourse,
      estado: "",
      cidadeId: "",
      unidadeId: "",
      website: "",
    },
  });

  const selectedState = useWatch({ control, name: "estado" });
  const selectedCityId = useWatch({ control, name: "cidadeId" });
  const selectedUnitId = useWatch({ control, name: "unidadeId" });
  const selectedCity = useMemo(
    () => cities.find((city) => city.value === selectedCityId),
    [cities, selectedCityId],
  );
  const selectedUnit = useMemo(
    () => units.find((unit) => unit.value === selectedUnitId),
    [selectedUnitId, units],
  );

  useEffect(() => {
    const controller = new AbortController();

    fetchLocations("states", {}, controller.signal)
      .then(setStates)
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setLocationError(
          "Não foi possível carregar os estados. Tente novamente em instantes.",
        );
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(null);
      });

    return () => controller.abort();
  }, []);

  useEffect(() => {
    return () => {
      cityRequest.current?.abort();
      unitRequest.current?.abort();
    };
  }, []);

  function loadCities(state: string) {
    cityRequest.current?.abort();
    unitRequest.current?.abort();
    resetField("cidadeId");
    resetField("unidadeId");
    setCities([]);
    setUnits([]);
    setLocationError("");

    if (!state) {
      setLoading(null);
      return;
    }

    const controller = new AbortController();
    cityRequest.current = controller;
    setLoading("cities");

    fetchLocations("cities", { state }, controller.signal)
      .then(setCities)
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setLocationError(
          "Não foi possível carregar as cidades. Tente novamente em instantes.",
        );
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(null);
      });
  }

  function loadUnits(city: string) {
    unitRequest.current?.abort();
    resetField("unidadeId");
    setUnits([]);
    setLocationError("");

    if (!city) {
      setLoading(null);
      return;
    }

    const controller = new AbortController();
    unitRequest.current = controller;
    setLoading("units");

    fetchLocations("units", { city }, controller.signal)
      .then(setUnits)
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setLocationError(
          "Não foi possível carregar as unidades. Tente novamente em instantes.",
        );
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(null);
      });
  }

  async function onSubmit(data: FormData) {
    setSubmitError("");
    setSubmitted(false);

    if (!selectedCity || !selectedUnit) {
      setSubmitError("Selecione uma cidade e uma unidade para continuar.");
      return;
    }

    const response = await fetch("/api/leads/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        cidade: selectedCity.label,
        unidade: selectedUnit.label,
        cursoNome:
          courseLabel ||
          courseOptions.find((option) => option.value === data.curso)?.label ||
          data.curso,
        categoria: category,
        campanha: campaign,
        pagina: window.location.href,
        ...utm,
      }),
    });

    if (!response.ok) {
      setSubmitError(
        "Não foi possível enviar agora. Tente novamente ou fale conosco pelo WhatsApp.",
      );
      return;
    }

    setSubmitted(true);
    reset({
      nome: "",
      email: "",
      celular: "",
      curso: initialCourse,
      estado: "",
      cidadeId: "",
      unidadeId: "",
      website: "",
    });
    setCities([]);
    setUnits([]);
    setLoading(null);
  }

  const inputClass = `w-full text-base font-medium px-4 py-3.5 rounded-xl border outline-none transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-65 ${
    dark
      ? "border-white/40 bg-em-dark/85 text-white placeholder:text-white/70 caret-white focus:border-em-yellow focus:ring-2 focus:ring-em-yellow/30 [&>option]:bg-em-dark [&>option]:text-white"
      : "border-em-dark-soft/55 bg-white text-em-dark placeholder:text-em-dark-soft/70 caret-em-dark focus:border-em-green-dark focus:ring-2 focus:ring-em-green-light/50 [&>option]:bg-white [&>option]:text-em-dark"
  }`;
  const errorClass = `text-xs font-semibold mt-1 ml-1 ${
    dark ? "text-em-coral-light" : "text-em-coral-dark"
  }`;
  const fieldGrid =
    layout === "vertical"
      ? "grid-cols-1"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  const stateRegistration = register("estado");
  const cityRegistration = register("cidadeId");
  const phoneRegistration = register("celular");

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={`grid gap-3 mb-4 ${fieldGrid}`}>
        <div>
          <label htmlFor="lead-nome" className="sr-only">
            Nome completo
          </label>
          <input
            id="lead-nome"
            type="text"
            placeholder="Nome completo"
            autoComplete="name"
            aria-invalid={Boolean(errors.nome)}
            aria-describedby={errors.nome ? "lead-nome-error" : undefined}
            {...register("nome")}
            className={inputClass}
          />
          {errors.nome && (
            <p id="lead-nome-error" role="alert" className={errorClass}>
              {errors.nome.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="lead-email" className="sr-only">
            E-mail
          </label>
          <input
            id="lead-email"
            type="email"
            placeholder="E-mail"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "lead-email-error" : undefined}
            {...register("email")}
            className={inputClass}
          />
          {errors.email && (
            <p id="lead-email-error" role="alert" className={errorClass}>
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="lead-celular" className="sr-only">
            Celular
          </label>
          <input
            id="lead-celular"
            type="tel"
            placeholder="(00) 00000-0000"
            autoComplete="tel"
            inputMode="tel"
            maxLength={15}
            aria-invalid={Boolean(errors.celular)}
            aria-describedby={
              errors.celular ? "lead-celular-error" : undefined
            }
            {...phoneRegistration}
            onChange={(event) => {
              event.target.value = formatBrazilianPhone(event.target.value);
              void phoneRegistration.onChange(event);
            }}
            className={inputClass}
          />
          {errors.celular && (
            <p id="lead-celular-error" role="alert" className={errorClass}>
              {errors.celular.message}
            </p>
          )}
        </div>

        {fixedCourse ? (
          <input type="hidden" {...register("curso")} value={fixedCourse} />
        ) : (
          <div>
            <label htmlFor="lead-curso" className="sr-only">
              Curso de interesse
            </label>
            <select
              id="lead-curso"
              aria-invalid={Boolean(errors.curso)}
              aria-describedby={errors.curso ? "lead-curso-error" : undefined}
              {...register("curso")}
              className={`${inputClass} cursor-pointer`}
            >
              <option value="">Curso de interesse</option>
              {courseOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.curso && (
              <p id="lead-curso-error" role="alert" className={errorClass}>
                {errors.curso.message}
              </p>
            )}
          </div>
        )}

        <div>
          <label htmlFor="lead-estado" className="sr-only">
            Estado
          </label>
          <select
            id="lead-estado"
            disabled={loading === "states" || states.length === 0}
            aria-invalid={Boolean(errors.estado)}
            aria-describedby={errors.estado ? "lead-estado-error" : undefined}
            {...stateRegistration}
            onChange={(event) => {
              void stateRegistration.onChange(event);
              loadCities(event.target.value);
            }}
            className={`${inputClass} cursor-pointer`}
          >
            <option value="">
              {loading === "states" ? "Carregando estados..." : "Estado"}
            </option>
            {states.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.estado && (
            <p id="lead-estado-error" role="alert" className={errorClass}>
              {errors.estado.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="lead-cidade" className="sr-only">
            Cidade
          </label>
          <select
            id="lead-cidade"
            disabled={
              !selectedState || loading === "cities" || cities.length === 0
            }
            aria-invalid={Boolean(errors.cidadeId)}
            aria-describedby={errors.cidadeId ? "lead-cidade-error" : undefined}
            {...cityRegistration}
            onChange={(event) => {
              void cityRegistration.onChange(event);
              loadUnits(event.target.value);
            }}
            className={`${inputClass} cursor-pointer`}
          >
            <option value="">
              {loading === "cities" ? "Carregando cidades..." : "Cidade"}
            </option>
            {cities.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.cidadeId && (
            <p id="lead-cidade-error" role="alert" className={errorClass}>
              {errors.cidadeId.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="lead-unidade" className="sr-only">
            Unidade
          </label>
          <select
            id="lead-unidade"
            disabled={
              !selectedCityId || loading === "units" || units.length === 0
            }
            aria-invalid={Boolean(errors.unidadeId)}
            aria-describedby={
              errors.unidadeId ? "lead-unidade-error" : undefined
            }
            {...register("unidadeId")}
            className={`${inputClass} cursor-pointer`}
          >
            <option value="">
              {loading === "units" ? "Carregando unidades..." : "Unidade"}
            </option>
            {units.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.unidadeId && (
            <p id="lead-unidade-error" role="alert" className={errorClass}>
              {errors.unidadeId.message}
            </p>
          )}
        </div>
      </div>

      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="lead-website">Website</label>
        <input
          id="lead-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      {locationError && (
        <p
          role="alert"
          className={`text-sm font-semibold mb-3 ${
            dark ? "text-em-coral-light" : "text-em-coral-dark"
          }`}
        >
          {locationError}
        </p>
      )}

      {submitError && (
        <p
          role="alert"
          className={`text-sm font-semibold mb-3 ${
            dark ? "text-em-coral-light" : "text-em-coral-dark"
          }`}
        >
          {submitError}
        </p>
      )}

      {submitted && (
        <p
          role="status"
          className={`text-sm font-bold mb-3 ${
            dark ? "text-em-green-light" : "text-em-green-dark"
          }`}
        >
          Recebemos seus dados. A unidade entrará em contato com você!
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting || Boolean(loading) || states.length === 0}
        className={`w-full text-base font-bold rounded-xl py-4 flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-60 cursor-pointer ${
          dark
            ? "text-em-dark bg-white hover:bg-em-green-pale shadow-button"
            : "text-white bg-em-green hover:bg-em-green-dark shadow-button"
        }`}
      >
        {isSubmitting ? (
          <>
            Enviando <LoaderCircle size={17} className="animate-spin" />
          </>
        ) : submitted ? (
          <>
            Solicitação enviada <Check size={17} />
          </>
        ) : (
          <>
            {buttonText || "Quero agendar minha aula grátis"}{" "}
            <ArrowRight size={16} />
          </>
        )}
      </button>

      <p
        className={`text-xs mt-3 ${
          dark ? "text-white/70" : "text-em-dark-soft/70"
        }`}
      >
        Ao enviar, você concorda com nossa{" "}
        <a
          href="/politica-de-privacidade"
          className={`underline ${
            dark ? "hover:text-white" : "hover:text-em-dark"
          }`}
        >
          política de privacidade
        </a>
        .
      </p>
    </form>
  );
}
