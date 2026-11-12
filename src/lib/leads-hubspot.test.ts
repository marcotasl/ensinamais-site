import assert from "node:assert/strict";
import test from "node:test";
import {
  buildHubSpotLeadPayload,
  formatHubSpotPhone,
  sendLeadToHubSpot,
  type HubSpotLead,
} from "./leads-hubspot.ts";

const ENV_KEYS = [
  "MOVEEDU_API_USERNAME",
  "MOVEEDU_API_PASSWORD",
  "MOVEEDU_API_BASE_URL",
] as const;

type EnvSnapshot = Record<(typeof ENV_KEYS)[number], string | undefined>;

const originalEnv: EnvSnapshot = {
  MOVEEDU_API_USERNAME: process.env.MOVEEDU_API_USERNAME,
  MOVEEDU_API_PASSWORD: process.env.MOVEEDU_API_PASSWORD,
  MOVEEDU_API_BASE_URL: process.env.MOVEEDU_API_BASE_URL,
};
const originalFetch = globalThis.fetch;

function restoreEnvironment() {
  for (const key of ENV_KEYS) {
    const value = originalEnv[key];
    if (value === undefined) {
      delete process.env[key];
    } else {
      process.env[key] = value;
    }
  }
}

function setCredentials() {
  process.env.MOVEEDU_API_USERNAME = "usuario-teste";
  process.env.MOVEEDU_API_PASSWORD = "senha-teste";
  process.env.MOVEEDU_API_BASE_URL = "https://api.exemplo.test/api/";
}

type FetchCall = { url: string; init?: RequestInit };

function mockFetch(
  handler: (call: FetchCall) => Promise<Response>,
): FetchCall[] {
  const calls: FetchCall[] = [];

  globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
    const call = { url: String(input), init };
    calls.push(call);
    return handler(call);
  }) as typeof fetch;

  return calls;
}

const baseLead: HubSpotLead = {
  nome: "Ana Silva",
  email: "ana@example.com",
  celular: "(11) 91234-5678",
  unidadeId: "1234",
  campanha: "428",
};

test("monta o payload exato do plugin, com curso e UTMs", () => {
  const payload = buildHubSpotLeadPayload({
    ...baseLead,
    nome: "  Ana Silva  ",
    email: " ana@example.com ",
    unidadeId: " 1234 ",
    curso: "ingles",
    pagina:
      "https://ensinamais.com.br/cursos/ingles?utm_id=abc123&utm_source=google",
    utm_source: "google",
    utm_medium: "cpc",
    utm_campaign: "volta-as-aulas",
    utm_content: "banner",
    utm_term: "ingles",
  });

  assert.deepEqual(payload, {
    nome: "Ana Silva",
    email: "ana@example.com",
    telefone_celular: "(11) 91234-5678",
    codigo_unidade: "1234",
    codigo_campanha: "428",
    marca: "EM",
    modalidade: "P",
    curso: "ingles",
    utm_source: "google",
    utm_medium: "cpc",
    utm_campaign: "volta-as-aulas",
    utm_content: "banner",
    utm_term: "ingles",
    utm_id: "abc123",
  });
});

test("payload mínimo não inclui campos opcionais vazios", () => {
  const payload = buildHubSpotLeadPayload({
    ...baseLead,
    curso: "  ",
    pagina: "https://ensinamais.com.br/",
    utm_source: "",
  });

  assert.deepEqual(payload, {
    nome: "Ana Silva",
    email: "ana@example.com",
    telefone_celular: "(11) 91234-5678",
    codigo_unidade: "1234",
    codigo_campanha: "428",
    marca: "EM",
    modalidade: "P",
  });
});

test("formata telefone com 11 e 10 dígitos como o plugin", () => {
  assert.equal(formatHubSpotPhone("11912345678"), "(11) 91234-5678");
  assert.equal(formatHubSpotPhone("(11) 3456-7890"), "(11) 3456-7890");
  assert.equal(formatHubSpotPhone("11 3456 7890"), "(11) 3456-7890");
});

test("envia JSON com Basic Auth para /api/hubspot/novo", async () => {
  setCredentials();
  const calls = mockFetch(async () => new Response("{}", { status: 200 }));

  try {
    const result = await sendLeadToHubSpot({
      ...baseLead,
      curso: "ingles",
      utm_source: "google",
    });

    assert.deepEqual(result, { ok: true, status: 200 });
    assert.equal(calls.length, 1);
    assert.equal(calls[0].url, "https://api.exemplo.test/api/hubspot/novo");
    assert.equal(calls[0].init?.method, "POST");

    const headers = new Headers(calls[0].init?.headers);
    assert.equal(headers.get("accept"), "application/json");
    assert.equal(headers.get("content-type"), "application/json");
    assert.equal(
      headers.get("authorization"),
      `Basic ${Buffer.from("usuario-teste:senha-teste").toString("base64")}`,
    );

    assert.deepEqual(JSON.parse(String(calls[0].init?.body)), {
      nome: "Ana Silva",
      email: "ana@example.com",
      telefone_celular: "(11) 91234-5678",
      codigo_unidade: "1234",
      codigo_campanha: "428",
      marca: "EM",
      modalidade: "P",
      curso: "ingles",
      utm_source: "google",
    });
  } finally {
    globalThis.fetch = originalFetch;
    restoreEnvironment();
  }
});

test("resposta HTTP de erro não lança e devolve o detalhe", async () => {
  setCredentials();
  const calls = mockFetch(
    async () => new Response("campo invalido", { status: 422 }),
  );

  try {
    const result = await sendLeadToHubSpot(baseLead);

    assert.deepEqual(result, {
      ok: false,
      status: 422,
      error: "campo invalido",
    });
    assert.equal(calls.length, 1);
  } finally {
    globalThis.fetch = originalFetch;
    restoreEnvironment();
  }
});

test("falha de rede não lança", async () => {
  setCredentials();
  mockFetch(async () => {
    throw new TypeError("fetch failed");
  });

  try {
    const result = await sendLeadToHubSpot(baseLead);
    assert.deepEqual(result, {
      ok: false,
      status: 0,
      error: "network_error",
    });
  } finally {
    globalThis.fetch = originalFetch;
    restoreEnvironment();
  }
});

test("timeout aborta e não lança", async () => {
  setCredentials();
  mockFetch(async () => {
    const error = new Error("aborted");
    error.name = "AbortError";
    throw error;
  });

  try {
    const result = await sendLeadToHubSpot(baseLead);
    assert.deepEqual(result, { ok: false, status: 0, error: "timeout" });
  } finally {
    globalThis.fetch = originalFetch;
    restoreEnvironment();
  }
});

test("sem credenciais não chama a API", async () => {
  delete process.env.MOVEEDU_API_USERNAME;
  delete process.env.MOVEEDU_API_PASSWORD;
  const calls = mockFetch(async () => new Response("{}", { status: 200 }));

  try {
    const result = await sendLeadToHubSpot(baseLead);

    assert.deepEqual(result, {
      ok: false,
      status: 0,
      error: "credentials_missing",
    });
    assert.equal(calls.length, 0);
  } finally {
    globalThis.fetch = originalFetch;
    restoreEnvironment();
  }
});
