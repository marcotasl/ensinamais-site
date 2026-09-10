import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { validateWpCredentials } from "@/lib/admin-client";
import {
  SESSION_COOKIE_MAX_AGE_SECONDS,
  SESSION_COOKIE_NAME,
  encryptSession,
} from "@/lib/admin-session";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

const LOGIN_MAX_ATTEMPTS = 10;
const LOGIN_WINDOW_SECONDS = 15 * 60;

export async function POST(req: Request) {
  const ip = getClientIp(req);
  const limit = rateLimit(`login:${ip}`, LOGIN_MAX_ATTEMPTS, LOGIN_WINDOW_SECONDS);
  if (!limit.ok) {
    return NextResponse.json(
      { ok: false, error: "rate_limited" },
      {
        status: 429,
        headers: { "Retry-After": String(limit.retryAfterSeconds) },
      },
    );
  }

  const body = await req.json().catch(() => null);
  const user = typeof body?.user === "string" ? body.user.trim() : "";
  const appPassword = typeof body?.appPassword === "string" ? body.appPassword.trim() : "";

  if (!user || !appPassword) {
    return NextResponse.json({ ok: false, error: "missing_credentials" }, { status: 400 });
  }

  const validated = await validateWpCredentials(user, appPassword);
  if (!validated) {
    return NextResponse.json({ ok: false, error: "invalid_credentials" }, { status: 401 });
  }
  if (!validated.canHero && !validated.canBlog) {
    return NextResponse.json({ ok: false, error: "insufficient_permissions" }, { status: 403 });
  }

  const token = await encryptSession({
    user,
    appPassword,
    displayName: validated.displayName,
    userId: validated.userId,
    canHero: validated.canHero,
    canBlog: validated.canBlog,
    exp: Date.now() + SESSION_COOKIE_MAX_AGE_SECONDS * 1000,
  });

  const jar = await cookies();
  jar.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: SESSION_COOKIE_MAX_AGE_SECONDS,
    path: "/",
  });

  return NextResponse.json({ ok: true, displayName: validated.displayName });
}
