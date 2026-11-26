/**
 * Janela da Black Friday 2026 na home. Fora dela volta o hero padrão sem novo
 * deploy: a home é regenerada por ISR (revalidate da página) e a decisão é
 * refeita a cada regeneração.
 * Horários em America/Sao_Paulo (UTC-3, sem horário de verão desde 2019).
 */
const START = Date.parse("2026-11-26T00:00:00-03:00");
const END_EXCLUSIVE = Date.parse("2026-12-01T00:00:00-03:00");

export function isBlackFriday2026(now: number = Date.now()): boolean {
  return now >= START && now < END_EXCLUSIVE;
}
