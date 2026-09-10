import "server-only";

export type AdminSession = {
  user: string;
  appPassword: string;
  displayName: string;
  userId: number;
  canHero: boolean;
  canBlog: boolean;
  exp: number;
};

const ALGORITHM = "AES-GCM";
const IV_LENGTH = 12;

function getSecretKeyMaterial(): Uint8Array {
  const hex = process.env.ADMIN_SESSION_SECRET;
  if (!hex || hex.length !== 64) {
    throw new Error("ADMIN_SESSION_SECRET must be 32 bytes hex (64 chars)");
  }
  const out = new Uint8Array(32);
  for (let i = 0; i < 32; i++) {
    out[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
  }
  return out;
}

async function getKey(): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    getSecretKeyMaterial() as BufferSource,
    ALGORITHM,
    false,
    ["encrypt", "decrypt"],
  );
}

function toBase64Url(bytes: Uint8Array): string {
  const bin = String.fromCharCode(...bytes);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(str: string): Uint8Array {
  const pad = str.length % 4 === 0 ? "" : "=".repeat(4 - (str.length % 4));
  const bin = atob(str.replace(/-/g, "+").replace(/_/g, "/") + pad);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

export async function encryptSession(session: AdminSession): Promise<string> {
  const key = await getKey();
  const iv = crypto.getRandomValues(new Uint8Array(IV_LENGTH));
  const plaintext = new TextEncoder().encode(JSON.stringify(session));
  const cipher = new Uint8Array(
    await crypto.subtle.encrypt({ name: ALGORITHM, iv }, key, plaintext),
  );
  const combined = new Uint8Array(iv.length + cipher.length);
  combined.set(iv, 0);
  combined.set(cipher, iv.length);
  return toBase64Url(combined);
}

export async function decryptSession(token: string): Promise<AdminSession | null> {
  try {
    const combined = fromBase64Url(token);
    if (combined.length < IV_LENGTH + 16) return null;
    const iv = combined.slice(0, IV_LENGTH);
    const cipher = combined.slice(IV_LENGTH);
    const key = await getKey();
    const plaintext = await crypto.subtle.decrypt(
      { name: ALGORITHM, iv },
      key,
      cipher,
    );
    const session: AdminSession = JSON.parse(new TextDecoder().decode(plaintext));
    if (typeof session.exp !== "number" || Date.now() > session.exp) return null;
    return session;
  } catch {
    return null;
  }
}

export const SESSION_COOKIE_NAME = "em_admin";
// 24h — cookie stateless sem revogação server-side, então janelas longas
// ampliam o blast radius de uma sessão comprometida (cookie copiado, device
// perdido). 24h cobre um ciclo de trabalho típico sem friccionar o usuário.
export const SESSION_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24;
