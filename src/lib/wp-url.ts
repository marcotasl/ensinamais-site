// Este host WordPress não expõe /wp-json/<path> diretamente: qualquer rota
// fora de `/` devolve o HTML da home. Toda chamada REST tem que passar por
// `?rest_route=<path>&<query>`. Compartilhado entre wordpress.ts (ISR
// público) e admin-client.ts/media route (sessão autenticada) para não
// duplicar a regra de montagem de URL.
export const WP_BASE = (
  process.env.WP_API_URL || "https://cms.ensinamais.com.br/wp-json"
).replace(/\/wp-json\/?$/, "");

export function buildWpUrl(endpoint: string): string {
  const [path, query = ""] = endpoint.split("?");
  return `${WP_BASE}/?rest_route=${path}${query ? `&${query}` : ""}`;
}
