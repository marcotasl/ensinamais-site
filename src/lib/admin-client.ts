import "server-only";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  SESSION_COOKIE_NAME,
  decryptSession,
  type AdminSession,
} from "./admin-session";
import { buildWpUrl } from "./wp-url";

// Capability do plugin wordpress-plugins/ensina-mais-hero-api (constante
// EMHA_CAP no PHP). Mantida em string literal aqui porque o plugin não
// expõe a constante via API — só via nome de capability mesmo.
const HERO_CAP = "edit_hero_banner";
const BLOG_CAP = "edit_posts";

export type AdminModule = "hero" | "blog";

export async function getAdminSession(): Promise<AdminSession | null> {
  const jar = await cookies();
  const token = jar.get(SESSION_COOKIE_NAME)?.value;
  if (!token) return null;
  return decryptSession(token);
}

export async function requireAdminSession(): Promise<AdminSession> {
  const s = await getAdminSession();
  if (!s) redirect("/admin/login");
  return s;
}

// Usado nas telas de cada módulo (hero/blog) para recusar acesso a quem
// está logado mas não tem a capability daquele módulo específico.
export async function requireModule(mod: AdminModule): Promise<AdminSession> {
  const session = await requireAdminSession();
  const allowed = mod === "hero" ? session.canHero : session.canBlog;
  if (!allowed) redirect("/admin");
  return session;
}

function basicAuthHeader(user: string, pass: string): string {
  const token = Buffer.from(`${user}:${pass}`).toString("base64");
  return `Basic ${token}`;
}

export async function validateWpCredentials(
  user: string,
  appPassword: string,
): Promise<{
  userId: number;
  displayName: string;
  canHero: boolean;
  canBlog: boolean;
} | null> {
  const url = buildWpUrl(
    "/wp/v2/users/me?context=edit&_fields=id,name,capabilities",
  );
  const res = await fetch(url, {
    headers: { Authorization: basicAuthHeader(user, appPassword) },
    cache: "no-store",
  });
  if (!res.ok) return null;
  const data = await res.json();
  const caps = (data.capabilities || {}) as Record<string, boolean>;
  return {
    userId: Number(data.id),
    displayName: String(data.name || data.slug || user),
    canHero: Boolean(caps[HERO_CAP]),
    canBlog: Boolean(caps[BLOG_CAP]),
  };
}

type WPFetchInit = Omit<RequestInit, "headers"> & {
  headers?: Record<string, string>;
  query?: Record<string, string>;
};

// Núcleo compartilhado por adminFetchWP e adminFetchWPWithHeaders: mesma
// montagem de URL, mesmo header de auth, mesmo tratamento de erro. A
// resolução da sessão fica de fora porque as duas variantes divergem nisso
// de propósito (ver comentário em adminFetchWPWithHeaders).
async function wpRequest(
  session: AdminSession,
  path: string,
  init: WPFetchInit,
  callerLabel: string,
): Promise<Response> {
  const params = new URLSearchParams(init.query);
  // cache: "no-store" só controla o Data Cache do Next — o host WP fica
  // atrás do WAF/CDN GoCache (ver memória project_ensinamais_cms_blog),
  // que pode cachear a resposta por URL independente do Cache-Control.
  // _nocache varia a query pra furar esse cache intermediário; sem ele o
  // admin arriscaria ler post/categoria desatualizado logo após salvar.
  params.set("_nocache", Date.now().toString());
  const url = buildWpUrl(`${path}?${params.toString()}`);
  const { query: _q, headers, ...rest } = init;
  void _q;
  const res = await fetch(url, {
    ...rest,
    headers: {
      ...(headers || {}),
      Authorization: basicAuthHeader(session.user, session.appPassword),
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  if (!res.ok) {
    // Não repassar body do WP no erro — Next.js serializa mensagens de
    // erro de server actions para o cliente e o WP pode vazar detalhes
    // internos (stacks PHP, nomes de plugins, user_login). Loga no server
    // pra diagnóstico e devolve mensagem curta.
    const body = await res.text().catch(() => "");
    if (body) console.error(`[${callerLabel}] ${res.status} ${path}:`, body.slice(0, 500));
    throw new Error(`WP admin fetch ${res.status} at ${path}`);
  }
  return res;
}

export async function adminFetchWP<T>(path: string, init: WPFetchInit = {}): Promise<T> {
  const session = await requireAdminSession();
  const res = await wpRequest(session, path, init, "adminFetchWP");
  return res.json() as Promise<T>;
}

/**
 * Variante que expõe os headers da resposta (ex: X-WP-TotalPages), usada
 * pela listagem paginada do blog. Mantém a resolução de sessão original
 * (getAdminSession + throw) em vez de requireAdminSession (que redireciona)
 * porque o único caller já chama requireModule("blog") antes de listar —
 * aqui a sessão nunca deveria faltar, e se faltar é um erro de estado, não
 * um login ausente a redirecionar.
 */
export async function adminFetchWPWithHeaders<T>(
  path: string,
  query: Record<string, string> = {},
): Promise<{ data: T; headers: Headers }> {
  const session = await getAdminSession();
  if (!session) throw new Error("unauthorized");
  const res = await wpRequest(session, path, { query }, "adminFetchWPWithHeaders");
  return { data: (await res.json()) as T, headers: res.headers };
}
