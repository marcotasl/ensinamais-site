import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Compatibilidade com URLs legadas do Magento (.html), preservando SEO sem redirects.
      // A URL no navegador continua com .html; internamente servimos a rota canônica.
      { source: "/cursos.html", destination: "/cursos" },
      { source: "/cursos/:categoria.html", destination: "/cursos/:categoria" },
      { source: "/fale-conosco.html", destination: "/fale-conosco" },
      { source: "/seja-um-franqueado.html", destination: "/seja-um-franqueado" },
      { source: "/carreiras.html", destination: "/carreiras" },
      { source: "/sobre-nos/conheca-a-ensina-mais/metodologia.html", destination: "/metodologia" },
      { source: "/sobre-nos/conheca-a-ensina-mais/beneficios.html", destination: "/beneficios" },
    ];
  },
};

export default nextConfig;
