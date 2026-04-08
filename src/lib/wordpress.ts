const WP_URL = process.env.WP_API_URL || "https://cms.ensinamais.com.br/wp-json";
const WP_USER = process.env.WP_USER || "";
const WP_APP_PASSWORD = process.env.WP_APP_PASSWORD || "";

const headers: HeadersInit = {
  "Content-Type": "application/json",
  ...(WP_USER && WP_APP_PASSWORD
    ? { Authorization: `Basic ${Buffer.from(`${WP_USER}:${WP_APP_PASSWORD}`).toString("base64")}` }
    : {}),
};

async function wpFetch<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${WP_URL}${endpoint}`, {
    headers,
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error(`WP API error: ${res.status} ${res.statusText}`);
  }

  return res.json();
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
      "/wp/v2/banner?_fields=id,title,acf,menu_order&per_page=10&orderby=menu_order&order=asc"
    );
    return banners;
  } catch {
    // Fallback: retorna array vazio se WP nao estiver configurado
    return [];
  }
}
