const WP_BASE = (
  process.env.WP_API_URL || "https://cms.ensinamais.com.br/wp-json"
).replace(/\/wp-json\/?$/, "");

const WP_USER = process.env.WP_USER || "";
const WP_APP_PASSWORD = process.env.WP_APP_PASSWORD || "";

type WpFetchOptions = {
  /** Banners podem precisar de Basic Auth; rotas públicas do blog NÃO devem enviar. */
  auth?: boolean;
};

/**
 * WP neste host devolve a home HTML em `/wp-json/...`.
 * Sempre usar `?rest_route=<path>&params`.
 */
async function wpRequest(endpoint: string, opts: WpFetchOptions = {}): Promise<Response> {
  const [path, query = ""] = endpoint.split("?");
  const url = `${WP_BASE}/?rest_route=${path}${query ? `&${query}` : ""}`;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(opts.auth && WP_USER && WP_APP_PASSWORD
      ? {
          Authorization: `Basic ${Buffer.from(`${WP_USER}:${WP_APP_PASSWORD}`).toString("base64")}`,
        }
      : {}),
  };

  const res = await fetch(url, {
    headers,
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error(`WP API error: ${res.status} ${res.statusText}`);
  }

  return res;
}

async function wpFetch<T>(endpoint: string, opts: WpFetchOptions = {}): Promise<T> {
  const res = await wpRequest(endpoint, opts);
  return res.json();
}

async function wpFetchWithHeaders<T>(
  endpoint: string,
  opts: WpFetchOptions = {}
): Promise<{ data: T; headers: Headers }> {
  const res = await wpRequest(endpoint, opts);
  return { data: await res.json(), headers: res.headers };
}

// ---------- Banners (Hero Slides) ----------

export interface WPBanner {
  id: number;
  title: { rendered: string };
  acf: {
    subtitulo: string;
    descricao: string;
    cta_texto: string;
    cta_link: string;
    cor_overlay: string; // hex color
    imagem_destaque: string; // URL da imagem lateral
    imagem_fundo: string; // URL da imagem de fundo
  };
  menu_order: number;
}

export async function getBanners(): Promise<WPBanner[]> {
  try {
    const banners = await wpFetch<WPBanner[]>(
      "/wp/v2/banner?_fields=id,title,acf,menu_order&per_page=10&orderby=menu_order&order=asc",
      { auth: true }
    );
    return banners;
  } catch {
    // Fallback: retorna array vazio se WP nao estiver configurado
    return [];
  }
}

// ---------- Blog ----------

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string; // texto puro, sem tags
  category: string; // nome da categoria principal
  date: string; // ISO
  readTime: string; // "N min" (~200 palavras/min do content)
  cover: string; // source_url da featured image ("" se não houver)
  author: string; // display name do autor WP
}

export interface BlogPostFull extends BlogPostMeta {
  contentHtml: string;
}

interface WPTerm {
  name: string;
  taxonomy: string;
}

interface WPPost {
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url?: string }>;
    "wp:term"?: WPTerm[][];
    author?: Array<{ name?: string }>;
  };
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&#?\w+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function calcReadTime(html: string): string {
  const words = stripHtml(html).split(/\s+/).filter(Boolean).length;
  const mins = Math.max(1, Math.round(words / 200));
  return `${mins} min`;
}

function primaryCategory(embedded: WPPost["_embedded"]): string {
  const groups = embedded?.["wp:term"] ?? [];
  for (const group of groups) {
    const cat = group.find((t) => t.taxonomy === "category");
    if (cat?.name) return cat.name;
  }
  return "";
}

function coverUrl(embedded: WPPost["_embedded"]): string {
  return embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? "";
}

function authorName(embedded: WPPost["_embedded"]): string {
  return embedded?.author?.[0]?.name ?? "Equipe Ensina Mais";
}

function mapMeta(post: WPPost): BlogPostMeta {
  return {
    slug: post.slug,
    title: stripHtml(post.title.rendered),
    excerpt: stripHtml(post.excerpt.rendered),
    category: primaryCategory(post._embedded),
    date: post.date,
    readTime: calcReadTime(post.content.rendered),
    cover: coverUrl(post._embedded),
    author: authorName(post._embedded),
  };
}

const EMBED = "_embed=wp:featuredmedia,wp:term,author";

export async function getBlogPosts(): Promise<BlogPostMeta[]> {
  try {
    const all: BlogPostMeta[] = [];
    let page = 1;
    let totalPages = 1;

    while (page <= totalPages) {
      const { data: posts, headers } = await wpFetchWithHeaders<WPPost[]>(
        `/wp/v2/posts?per_page=100&page=${page}&${EMBED}`
      );
      if (page === 1) {
        totalPages = Number(headers.get("X-WP-TotalPages") || 1);
      }
      all.push(...posts.map(mapMeta));
      page += 1;
    }

    return all;
  } catch {
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPostFull | null> {
  try {
    const posts = await wpFetch<WPPost[]>(
      `/wp/v2/posts?slug=${encodeURIComponent(slug)}&${EMBED}`
    );
    const post = posts[0];
    if (!post) return null;
    return {
      ...mapMeta(post),
      contentHtml: post.content.rendered,
    };
  } catch {
    return null;
  }
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
