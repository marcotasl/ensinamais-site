import { notFound, permanentRedirect } from "next/navigation";
import { blogPostPath } from "@/lib/seo";
import { getBlogPost } from "@/lib/wordpress";

interface Props {
  params: Promise<{ categoria: string }>;
}

export const revalidate = 300;

/** Preserva os backlinks e URLs já indexadas antes da inclusão da categoria. */
export default async function LegacyBlogPostPage({ params }: Props) {
  const { categoria: legacySlug } = await params;
  const post = await getBlogPost(legacySlug);
  if (!post) notFound();
  permanentRedirect(blogPostPath(post));
}
