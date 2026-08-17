import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE_NAME, decryptSession } from "@/lib/admin-session";

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};

const PUBLIC_ADMIN_PATHS = new Set(["/admin/login", "/api/admin/login"]);

// /admin/hero/preview é o único documento /admin/* feito pra ser embutido:
// o form do banner (HeroPreview.tsx) o carrega num <iframe> same-origin pra
// reaproveitar os breakpoints reais de Hero.tsx. "frame-ancestors 'none'"
// bloquearia esse próprio iframe e o preview ficaria em branco só em
// produção (o build não pega isso). Não afrouxar pra outra rota nem pra
// outra origem.
const PREVIEW_EMBED_PATH = "/admin/hero/preview";

// CSP com nonce por request (template oficial Next 16 — docs/content-security-policy).
// - Nonce em base64 a cada request.
// - 'strict-dynamic' deixa scripts com nonce carregarem filhos sem listar hosts.
// - 'unsafe-eval' apenas em dev (React usa eval pra stacks amigáveis).
// - style-src mantém 'unsafe-inline' pra não quebrar estilos arbitrários do
//   Tailwind (pode evoluir pra nonce em styles depois, com verificação).
// - upgrade-insecure-requests cobre links http que eventualmente vazem.
function buildCsp(nonce: string, pathname: string): string {
  const isDev = process.env.NODE_ENV === "development";
  const scriptSrc = `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${isDev ? " 'unsafe-eval'" : ""}`;
  const frameAncestors = pathname === PREVIEW_EMBED_PATH ? "frame-ancestors 'self'" : "frame-ancestors 'none'";
  return [
    "default-src 'self'",
    scriptSrc,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https://cms.ensinamais.com.br https://secure.gravatar.com",
    "font-src 'self' data:",
    "connect-src 'self' https://cms.ensinamais.com.br",
    frameAncestors,
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
    "upgrade-insecure-requests",
  ].join("; ");
}

function withCsp(res: NextResponse, nonce: string, csp: string): NextResponse {
  res.headers.set("Content-Security-Policy", csp);
  res.headers.set("x-nonce", nonce);
  // /admin/* e /api/admin/* nunca podem ser cacheados: carregam sessão e
  // dados de credencial por request.
  res.headers.set("Cache-Control", "private, no-store");
  return res;
}

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const csp = buildCsp(nonce, pathname);

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", csp);

  const passThrough = () =>
    NextResponse.next({ request: { headers: requestHeaders } });

  if (PUBLIC_ADMIN_PATHS.has(pathname)) {
    return withCsp(passThrough(), nonce, csp);
  }

  const token = req.cookies.get(SESSION_COOKIE_NAME)?.value;
  const session = token ? await decryptSession(token) : null;

  if (!session) {
    if (pathname.startsWith("/api/")) {
      return withCsp(
        NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 }),
        nonce,
        csp,
      );
    }
    const loginUrl = new URL("/admin/login", req.url);
    if (pathname !== "/admin") loginUrl.searchParams.set("next", pathname);
    return withCsp(NextResponse.redirect(loginUrl), nonce, csp);
  }

  return withCsp(passThrough(), nonce, csp);
}
