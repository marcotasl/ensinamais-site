import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Newsletter from "@/components/sections/Newsletter";
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
        <Script
          src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/d305bb1d-f854-4c8d-9370-4bfb79e4073e-loader.js"
          strategy="afterInteractive"
        />
        <Navbar />
        {children}
        <Newsletter />
        <Footer />
      </body>
    </html>
  );
}
