import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* O Magento atual publica as URLs sem barra final. Manter essa convenção evita
     um 308 em todas as páginas já indexadas durante a migração. */
  trailingSlash: false,
  async headers() {
    return [
      {
        // HTML precisa revalidar; assets com hash continuam com cache longo.
        source:
          "/:path((?!_next/static|_next/image|figma|images|fonts|favicon.ico|robots.txt|sitemap.xml).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      // Compatibilidade com URLs legadas do Magento (.html), preservando SEO sem redirects.
      // A URL no navegador continua com .html; internamente servimos a rota canônica.
      { source: "/cursos.html", destination: "/cursos" },
      { source: "/cursos/:categoria.html", destination: "/cursos/:categoria" },
      { source: "/fale-conosco.html", destination: "/fale-conosco" },
      { source: "/seja-um-franqueado.html", destination: "/seja-um-franqueado" },
      { source: "/sobre-nos/conheca-a-ensina-mais/metodologia.html", destination: "/metodologia" },
      { source: "/sobre-nos/conheca-a-ensina-mais/beneficios.html", destination: "/beneficios" },
    ];
  },
};

export default nextConfig;
