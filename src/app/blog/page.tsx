import type { Metadata } from "next";
import BlogHubClient from "./BlogHubClient";

export const metadata: Metadata = {
  title: "Blog | Ensina Mais – Turma da Mônica",
  description: "Conteúdo para pais e educadores: dicas de educação, novidades dos cursos, histórias de aprendizado e muito mais.",
};

export default function BlogPage() {
  return <BlogHubClient />;
}
