import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Admin | Ensina Mais",
    template: "%s | Admin Ensina Mais",
  },
  robots: { index: false, follow: false },
};

// Forçar dynamic rendering em toda a árvore /admin: necessário para o
// CSP com nonce (src/proxy.ts) conseguir injetar o nonce nos scripts de
// hidratação. Sem isso o Next faz SSG do shell e o strict-dynamic bloqueia
// todos os scripts, deixando a tela em branco.
export const dynamic = "force-dynamic";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-wire-50 text-em-dark">{children}</div>;
}
