import type { Metadata } from "next";
import BlogHubClient from "./BlogHubClient";
import { getBlogPosts } from "@/lib/wordpress";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Blog | Ensina Mais – Turma da Mônica",
  description: "Conteúdo para pais e educadores: dicas de educação, novidades dos cursos, histórias de aprendizado e muito mais.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  return <BlogHubClient posts={posts} />;
}
