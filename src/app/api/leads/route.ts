import { after, type NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendLeadToHubSpot } from "@/lib/leads-hubspot";

const RD_ENDPOINT = "https://api.rd.services/platform/conversions";
const OFFICIAL_ENSINA_RD_TOKEN = "4a8c862bc4866c09231511203a4e1549";
const DEFAULT_CONVERSION_IDENTIFIER = "interesse-curso";
const DEFAULT_CAMPAIGN_SYSTEM_CODE = "428";
const RD_TIMEOUT_MS = 5_000;

const leadSchema = z.object({
  nome: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  celular: z.string().trim().min(10).max(24),
  estado: z.string().trim().min(2).max(80),
  cidade: z.string().trim().min(2).max(120),
  cidadeId: z.string().trim().min(1).max(100),
  unidade: z.string().trim().min(1).max(180),
  unidadeId: z.string().trim().max(100).optional(),
  cf_curso: z.string().trim().min(1).max(180).optional(),
  curso: z.string().trim().min(1).max(180).optional(),
  cursoNome: z.string().trim().min(1).max(180),
  categoria: z.string().trim().max(120).optional(),
  campanha: z.string().trim().max(120).optional(),
  pagina: z.string().trim().max(500).optional(),
  utm_source: z.string().trim().max(200).optional(),
  utm_medium: z.string().trim().max(200).optional(),
  utm_campaign: z.string().trim().max(200).optional(),
  utm_content: z.string().trim().max(200).optional(),
  utm_term: z.string().trim().max(200).optional(),
  website: z.string().max(200).optional(),
}).refine((lead) => lead.cf_curso || lead.curso, {
  message: "course_required",
  path: ["cf_curso"],
});

function compact<T extends Record<string, unknown>>(record: T) {
  return Object.fromEntries(
    Object.entries(record).filter(([, value]) => value !== undefined && value !== ""),
  );
}

function trafficSourceFromCookie(request: NextRequest) {
  const raw = request.cookies.get("__trf.src")?.value;
  if (!raw) return undefined;
  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
}

/**
 * RD Station, só até 15/11. Roda depois da resposta (fire-and-forget) e não
 * decide o que o visitante recebe; falhas apenas entram no log. O timeout
 * evita que o job fique pendurado.
 */
async function sendToRdStation(rdRequestBody: unknown, traceId: string) {
  try {
    const token =
      process.env.RD_STATION_PUBLIC_TOKEN || OFFICIAL_ENSINA_RD_TOKEN;
    const response = await fetch(`${RD_ENDPOINT}?api_key=${token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rdRequestBody),
      cache: "no-store",
      signal: AbortSignal.timeout(RD_TIMEOUT_MS),
    });

    console.info(
      `[leads][rd-response] ${JSON.stringify({
        traceId,
        status: response.status,
        ok: response.ok,
      })}`,
    );

    if (!response.ok) {
      console.error(`[leads][rd] RD Station respondeu ${response.status} (${traceId})`);
    }
  } catch {
    console.error(`[leads][rd] falha de rede ao enviar conversão (${traceId})`);
  }
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_body" },
      { status: 400 },
    );
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "invalid_lead" },
      { status: 400 },
    );
  }

  const lead = parsed.data;
  if (lead.website) {
    return NextResponse.json({ ok: true });
  }
  const course = lead.cf_curso || lead.curso;

  const conversionIdentifier =
    process.env.RD_STATION_CONVERSION_IDENTIFIER ||
    DEFAULT_CONVERSION_IDENTIFIER;
  const campaignSystemCode =
    process.env.RD_STATION_CAMPAIGN_CODE?.trim() ||
    DEFAULT_CAMPAIGN_SYSTEM_CODE;

  const payload = compact({
    conversion_identifier: conversionIdentifier,
    name: lead.nome,
    email: lead.email,
    mobile_phone: lead.celular,
    state: lead.estado,
    city: lead.cidade,
    traffic_source: trafficSourceFromCookie(request) || lead.utm_source,
    traffic_medium: lead.utm_medium,
    traffic_campaign: lead.utm_campaign || lead.campanha,
    traffic_value: lead.utm_content,
    cf_marca: "ensina-mais",
    cf_codigo_marca_sistema: "em",
    cf_modalidade: "presencial",
    cf_modalidade_sistema: "P",
    cf_curso: course,
    cf_nome_curso: lead.cursoNome,
    cf_categoria: lead.categoria,
    cf_unidade: lead.unidade,
    cf_unidade_id: lead.unidadeId,
    cf_codigo_estado_sistema: lead.estado,
    cf_codigo_cidade_sistema: lead.cidadeId,
    cf_codigo_unidade_sistema: lead.unidadeId,
    cf_campanha: lead.campanha,
    cf_codigo_campanha_sistema: campaignSystemCode,
    cf_pagina_origem: lead.pagina,
    cf_utm_term: lead.utm_term,
    cf_utm_content: lead.utm_content,
  });
  const traceId = crypto.randomUUID();
  const rdRequestBody = {
    event_type: "CONVERSION",
    event_family: "CDP",
    payload,
  };

  console.info(
    `[leads][rd-outgoing] ${JSON.stringify({
      traceId,
      conversionIdentifier,
      payloadFields: Object.keys(rdRequestBody.payload).sort(),
      courseFieldPresent: Object.hasOwn(rdRequestBody.payload, "cf_curso"),
      courseNameFieldPresent: Object.hasOwn(
        rdRequestBody.payload,
        "cf_nome_curso",
      ),
    })}`,
  );

  // O RD roda depois da resposta (fire-and-forget) e não influencia o que o
  // visitante recebe. O HubSpot é a fonte oficial do lead (a RD é desligada
  // em 15/11).
  after(() => sendToRdStation(rdRequestBody, traceId));

  const hubspotResult = await sendLeadToHubSpot({
    nome: lead.nome,
    email: lead.email,
    celular: lead.celular,
    unidadeId: lead.unidadeId ?? "",
    campanha: campaignSystemCode,
    curso: course,
    pagina: lead.pagina,
    utm_source: lead.utm_source,
    utm_medium: lead.utm_medium,
    utm_campaign: lead.utm_campaign,
    utm_content: lead.utm_content,
    utm_term: lead.utm_term,
  });

  if (hubspotResult.ok) {
    console.info(
      `[leads][hubspot-response] ${JSON.stringify({
        traceId,
        status: hubspotResult.status,
        ok: true,
      })}`,
    );
  } else {
    console.error(
      `[leads][hubspot] falha ao enviar lead (${traceId}): status ${hubspotResult.status} ${hubspotResult.error ?? ""}`.trim(),
    );
  }

  // O lead já foi registrado (ou o erro ficou no log); o visitante recebe
  // sucesso para não repetir o envio e perder a conversão visível.
  return NextResponse.json({ ok: true });
}
