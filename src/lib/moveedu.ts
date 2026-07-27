import "server-only";

const MOVEEDU_API_BASE =
  process.env.MOVEEDU_API_BASE_URL?.replace(/\/+$/, "") ||
  "https://services.moveedu.com.br/api";

// Códigos internos aceitos pela API MoveEdu. No RD, os valores de negócio
// continuam sendo enviados como "ensina-mais" e "presencial".
const BRAND_CODE = "em";
const MODALITY_CODE = "P";

export type LocationResource = "states" | "cities" | "units";

export interface LocationOption {
  value: string;
  label: string;
}

export class MoveEduError extends Error {
  constructor(
    public readonly code: "credentials_missing" | "upstream_error" | "invalid_response",
    public readonly status: number,
  ) {
    super(code);
  }
}

function getAuthorizationHeader() {
  const username = process.env.MOVEEDU_API_USERNAME;
  const password = process.env.MOVEEDU_API_PASSWORD;

  if (!username || !password) {
    throw new MoveEduError("credentials_missing", 503);
  }

  return `Basic ${Buffer.from(`${username}:${password}`).toString("base64")}`;
}

function collectionFromPayload(payload: unknown): unknown[] {
  if (Array.isArray(payload)) return payload;
  if (!payload || typeof payload !== "object") return [];

  const record = payload as Record<string, unknown>;
  const likelyKeys = [
    "data",
    "dados",
    "resultado",
    "result",
    "estados",
    "cidades",
    "unidades",
    "items",
  ];

  for (const key of likelyKeys) {
    if (Array.isArray(record[key])) return record[key] as unknown[];
  }

  return [];
}

function firstText(record: Record<string, unknown>, keys: string[]) {
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "string" && value.trim()) return value.trim();
    if (typeof value === "number") return String(value);
  }
  return "";
}

function normalizeOption(item: unknown, resource: LocationResource): LocationOption | null {
  if (typeof item === "string" || typeof item === "number") {
    const value = String(item).trim();
    return value ? { value, label: value } : null;
  }

  if (!item || typeof item !== "object") return null;
  const record = item as Record<string, unknown>;

  const stateKeys = ["sigla", "uf", "estado", "nome", "descricao", "value", "id"];
  const cityValueKeys = [
    "codigo",
    "Codigo",
    "codigoCidade",
    "CodigoCidade",
    "id",
    "Id",
    "ID",
    "cod",
  ];
  const cityLabelKeys = [
    "cidade",
    "Cidade",
    "nome",
    "Nome",
    "descricao",
    "Descricao",
    "label",
  ];
  const unitValueKeys = [
    "id",
    "Id",
    "ID",
    "codigo",
    "Codigo",
    "codigo_unidade",
    "cod_unidade",
    "id_unidade",
    "unidade_id",
    "codigoUnidade",
    "CodigoUnidade",
    "uuid",
  ];
  const unitLabelKeys = [
    "NomePessoaNomeFantasia",
    "nome_fantasia",
    "nomeFantasia",
    "fantasia",
    "unidade",
    "Unidade",
    "nome",
    "Nome",
    "descricao",
    "Descricao",
    "razao_social",
    "razaoSocial",
    "RazaoSocial",
  ];

  if (resource === "states") {
    const value = firstText(record, stateKeys);
    return value ? { value, label: value } : null;
  }

  if (resource === "cities") {
    const label = firstText(record, cityLabelKeys);
    const value = firstText(record, cityValueKeys) || label;
    return value && label ? { value, label } : null;
  }

  const label = firstText(record, unitLabelKeys);
  const value = firstText(record, unitValueKeys) || label;
  return value && label ? { value, label } : null;
}

function endpointFor(resource: LocationResource, state?: string, city?: string) {
  if (resource === "states") {
    return `${MOVEEDU_API_BASE}/unidade/estados/${BRAND_CODE}/${MODALITY_CODE}`;
  }

  if (resource === "cities" && state) {
    return `${MOVEEDU_API_BASE}/unidade/cidades/${BRAND_CODE}/${encodeURIComponent(state)}/${MODALITY_CODE}`;
  }

  if (resource === "units" && city) {
    return `${MOVEEDU_API_BASE}/unidade/listar/${BRAND_CODE}/${encodeURIComponent(city)}/${MODALITY_CODE}`;
  }

  throw new MoveEduError("invalid_response", 400);
}

export async function getMoveEduLocations(
  resource: LocationResource,
  params: { state?: string; city?: string } = {},
): Promise<LocationOption[]> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);

  try {
    const response = await fetch(endpointFor(resource, params.state, params.city), {
      headers: {
        Accept: "application/json",
        Authorization: getAuthorizationHeader(),
      },
      cache: "no-store",
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new MoveEduError("upstream_error", 502);
    }

    const payload: unknown = await response.json();
    const options = collectionFromPayload(payload)
      .map((item) => normalizeOption(item, resource))
      .filter((item): item is LocationOption => Boolean(item));

    return Array.from(
      new Map(options.map((option) => [option.value, option])).values(),
    ).sort((a, b) => a.label.localeCompare(b.label, "pt-BR"));
  } catch (error) {
    if (error instanceof MoveEduError) throw error;
    throw new MoveEduError("upstream_error", 502);
  } finally {
    clearTimeout(timeout);
  }
}
