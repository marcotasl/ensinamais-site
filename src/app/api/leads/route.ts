import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const RD_ENDPOINT = "https://api.rd.services/platform/conversions";
const OFFICIAL_ENSINA_RD_TOKEN = "4a8c862bc4866c09231511203a4e1549";
const DEFAULT_CONVERSION_IDENTIFIER = "interesse-curso";
const DEFAULT_CAMPAIGN_SYSTEM_CODE = "428";

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

  const token =
    process.env.RD_STATION_PUBLIC_TOKEN || OFFICIAL_ENSINA_RD_TOKEN;
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

  try {
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

    const response = await fetch(`${RD_ENDPOINT}?api_key=${token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rdRequestBody),
      cache: "no-store",
    });

    console.info(
      `[leads][rd-response] ${JSON.stringify({
        traceId,
        status: response.status,
        ok: response.ok,
      })}`,
    );

    if (!response.ok) {
      console.error(
        `[leads] RD Station respondeu ${response.status} (${traceId})`,
      );
      return NextResponse.json(
        { ok: false, error: "rd_error" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    console.error(
      `[leads] falha de rede ao enviar conversão (${traceId})`,
    );
    return NextResponse.json(
      { ok: false, error: "rd_unavailable" },
      { status: 502 },
    );
  }
}
