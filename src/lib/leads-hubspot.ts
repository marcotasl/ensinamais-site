/**
 * Envio de leads para o HubSpot pela API da MoveEdu.
 *
 * O contrato segue o plugin de formulários da MoveEdu que já roda em produção
 * em Prepara e Microlins (moveedu-forms-plugin/includes/class-form.php,
 * `send_to_hubspot`): POST JSON em /api/hubspot/novo com Basic Auth.
 */

const DEFAULT_MOVEEDU_API_BASE_URL = "https://services.moveedu.com.br/api";
const HUBSPOT_ENDPOINT_PATH = "/hubspot/novo";
const DEFAULT_MARCA = "em";
const DEFAULT_MODALIDADE = "P";
const REQUEST_TIMEOUT_MS = 10_000;
const ERROR_DETAIL_MAX_LENGTH = 200;

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

type UtmKey = (typeof UTM_KEYS)[number];

export interface HubSpotLead {
  nome: string;
  email: string;
  celular: string;
  /** Código da unidade no sistema da MoveEdu (o mesmo da API de unidades). */
  unidadeId: string;
  /** Código numérico da campanha no sistema da MoveEdu (ex.: "428"). */
  campanha: string;
  curso?: string;
  marca?: string;
  modalidade?: string;
  pagina?: string;
}

export type HubSpotLeadPayload = Record<string, string>;

export interface HubSpotSendResult {
  ok: boolean;
  /** 0 quando a requisição não chegou a ter resposta HTTP. */
  status: number;
  error?: string;
}

export type HubSpotLeadInput = HubSpotLead & Partial<Record<UtmKey, string>>;

function onlyDigits(value: string) {
  return value.replace(/\D/g, "");
}

/**
 * Formata no mesmo padrão do plugin: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX.
 * Quando o telefone não tem 10 ou 11 dígitos, devolve o valor original para
 * não descartar o lead por um formato inesperado.
 */
export function formatHubSpotPhone(value: string) {
  const digits = onlyDigits(value);

  if (digits.length === 11) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }

  if (digits.length === 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }

  return value.trim();
}

function utmIdFromPage(pagina?: string) {
  if (!pagina) return undefined;

  try {
    const value = new URL(pagina).searchParams.get("utm_id")?.trim();
    return value || undefined;
  } catch {
    return undefined;
  }
}

export function buildHubSpotLeadPayload(
  lead: HubSpotLeadInput,
): HubSpotLeadPayload {
  const payload: HubSpotLeadPayload = {
    nome: lead.nome.trim(),
    email: lead.email.trim(),
    telefone_celular: formatHubSpotPhone(lead.celular),
    codigo_unidade: lead.unidadeId.trim(),
    codigo_campanha: lead.campanha.trim(),
    marca: (lead.marca || DEFAULT_MARCA).toUpperCase(),
    modalidade: lead.modalidade || DEFAULT_MODALIDADE,
  };

  const curso = lead.curso?.trim();
  if (curso) payload.curso = curso;

  for (const key of UTM_KEYS) {
    const value = lead[key]?.trim();
    if (value) payload[key] = value;
  }

  const utmId = utmIdFromPage(lead.pagina);
  if (utmId) payload.utm_id = utmId;

  return payload;
}

function moveEduApiBaseUrl() {
  return (
    process.env.MOVEEDU_API_BASE_URL?.replace(/\/+$/, "") ||
    DEFAULT_MOVEEDU_API_BASE_URL
  );
}

/**
 * Envia o lead para o HubSpot pela API da MoveEdu.
 * Nunca lança: qualquer falha vira `{ ok: false }` para o chamador registrar e
 * responder ao visitante sem derrubar o formulário.
 */
export async function sendLeadToHubSpot(
  lead: HubSpotLeadInput,
): Promise<HubSpotSendResult> {
  const username = process.env.MOVEEDU_API_USERNAME;
  const password = process.env.MOVEEDU_API_PASSWORD;

  if (!username || !password) {
    return { ok: false, status: 0, error: "credentials_missing" };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(
      `${moveEduApiBaseUrl()}${HUBSPOT_ENDPOINT_PATH}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Basic ${Buffer.from(
            `${username}:${password}`,
          ).toString("base64")}`,
        },
        body: JSON.stringify(buildHubSpotLeadPayload(lead)),
        cache: "no-store",
        signal: controller.signal,
      },
    );

    if (!response.ok) {
      const detail = (await response.text().catch(() => ""))
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, ERROR_DETAIL_MAX_LENGTH);

      return {
        ok: false,
        status: response.status,
        error: detail || `http_${response.status}`,
      };
    }

    return { ok: true, status: response.status };
  } catch (error) {
    const timedOut = error instanceof Error && error.name === "AbortError";
    return {
      ok: false,
      status: 0,
      error: timedOut ? "timeout" : "network_error",
    };
  } finally {
    clearTimeout(timeout);
  }
}
