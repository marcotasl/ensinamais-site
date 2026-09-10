// Gradiente do overlay do Hero, derivado de cor_overlay (editável no admin).
// Fallback e mistura de contraste vivem aqui, não em Hero.tsx, para o
// preview do admin (mesmo componente Hero) e o site público reagirem igual.

// Mesma cor do gradiente fixo original (rgba(26,39,68,...)).
const FALLBACK_HEX = "#1A2744";
const HEX_RE = /^#?([0-9a-fA-F]{6})$/;

type Rgb = [number, number, number];

function hexToRgb(hex: string): Rgb | null {
  const m = HEX_RE.exec(hex.trim());
  if (!m) return null;
  const int = parseInt(m[1], 16);
  return [(int >> 16) & 255, (int >> 8) & 255, int & 255];
}

function relativeLuminance([r, g, b]: Rgb): number {
  const [sr, sg, sb] = [r, g, b].map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * sr + 0.7152 * sg + 0.0722 * sb;
}

// Cor clara demais deixaria o texto branco do Hero ilegível sobre o
// gradiente. Mistura com a base escura padrão (60% da cor escolhida, 40% do
// fallback) antes de gerar o gradiente, preservando o matiz mas garantindo
// contraste; threshold 0.5 é o ponto onde WCAG considera a superfície clara.
function ensureContrast(rgb: Rgb): Rgb {
  if (relativeLuminance(rgb) <= 0.5) return rgb;
  const base = hexToRgb(FALLBACK_HEX) as Rgb;
  const mix = 0.6;
  return [
    Math.round(rgb[0] * mix + base[0] * (1 - mix)),
    Math.round(rgb[1] * mix + base[1] * (1 - mix)),
    Math.round(rgb[2] * mix + base[2] * (1 - mix)),
  ];
}

/** Mesmas paradas de opacidade e direção do gradiente original do Hero. */
export function heroOverlayGradient(hex?: string | null): string {
  const parsed = hex ? hexToRgb(hex) : null;
  const [r, g, b] = ensureContrast(parsed ?? (hexToRgb(FALLBACK_HEX) as Rgb));
  return (
    `linear-gradient(95deg, rgba(${r},${g},${b},0.92) 0%, ` +
    `rgba(${r},${g},${b},0.78) 38%, rgba(${r},${g},${b},0.32) 68%, ` +
    `rgba(${r},${g},${b},0) 88%)`
  );
}
