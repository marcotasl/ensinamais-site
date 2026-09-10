// Rate-limit in-memory, best-effort.
//
// LIMITAÇÃO CONHECIDA: em produção o Ensina Mais roda várias tasks ECS atrás
// do load balancer, então cada task mantém o próprio `buckets` e um
// atacante que distribua tentativas entre tasks (ou entre restarts)
// contorna o limite. Funciona como barreira contra bots triviais, não
// contra atacante dedicado.
//
// Para proteção real, migrar para um store compartilhado (Redis/ElastiCache
// acessível pelas tasks). Deixado propositalmente simples enquanto o admin
// tem poucos usuários internos e App Passwords com entropia suficiente.
type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

export type RateLimitResult = {
  ok: boolean;
  remaining: number;
  retryAfterSeconds: number;
};

export function rateLimit(
  key: string,
  limit: number,
  windowSeconds: number,
): RateLimitResult {
  const now = Date.now();
  const windowMs = windowSeconds * 1000;
  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: limit - 1, retryAfterSeconds: 0 };
  }

  if (bucket.count >= limit) {
    return {
      ok: false,
      remaining: 0,
      retryAfterSeconds: Math.ceil((bucket.resetAt - now) / 1000),
    };
  }

  bucket.count += 1;
  return { ok: true, remaining: limit - bucket.count, retryAfterSeconds: 0 };
}

export function getClientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  const real = req.headers.get("x-real-ip");
  if (real) return real.trim();
  return "unknown";
}
