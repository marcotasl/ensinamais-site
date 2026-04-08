import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ensina Mais – Turma da Monica | Apoio Escolar, Robotica, Programacao e Ingles",
  description:
    "Rede de apoio escolar licenciada Turma da Monica com metodologia individualizada. Apoio Escolar, Robotica, Programacao e Ingles para criancas e adolescentes.",
  openGraph: {
    title: "Ensina Mais – Turma da Monica",
    description:
      "Apoio escolar com metodologia individualizada e o universo da Turma da Monica. Mais de 100 escolas no Brasil.",
    type: "website",
    locale: "pt_BR",
    siteName: "Ensina Mais",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ensina Mais – Turma da Monica",
    description:
      "Apoio escolar com metodologia individualizada. Robotica, Programacao e Ingles.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${nunito.variable} antialiased`}>
      <body className="min-h-screen bg-white overflow-x-hidden">{children}</body>
    </html>
  );
}
