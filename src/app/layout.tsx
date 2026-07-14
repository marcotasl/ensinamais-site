import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Newsletter from "@/components/sections/Newsletter";
import CommentOverlay from "@/components/ui/CommentOverlay";
import WireframeNotice from "@/components/ui/WireframeNotice";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, organizationSchema, websiteSchema } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Ensina Mais | Turma da Mônica | Apoio Escolar, Robótica, Programação e Inglês",
  description:
    "Rede de apoio escolar licenciada Turma da Mônica com metodologia individualizada. Apoio Escolar, Robótica, Programação e Inglês para crianças e adolescentes. Mais de 100 escolas no Brasil.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ensina Mais | Turma da Mônica",
    description:
      "Apoio escolar com metodologia individualizada e o universo da Turma da Mônica. Robótica, Programação e Inglês em mais de 100 escolas no Brasil.",
    type: "website",
    locale: "pt_BR",
    siteName: "Ensina Mais",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ensina Mais | Turma da Mônica",
    description:
      "Apoio escolar com metodologia individualizada. Robótica, Programação e Inglês para crianças e adolescentes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="antialiased">
      <body className="min-h-screen bg-white overflow-x-hidden relative">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Navbar />
        {children}
        <Newsletter />
        <Footer />
        <CommentOverlay />
        <WireframeNotice />
      </body>
    </html>
  );
}
