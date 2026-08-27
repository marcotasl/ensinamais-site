import { notFound } from "next/navigation";
import { AdminShell } from "../../../_components/AdminShell";
import { adminFetchWP, requireModule } from "@/lib/admin-client";
import { WP_BASE } from "@/lib/wp-url";
import { PostForm } from "../../_components/PostForm";
import { decodeHtmlEntities, isGutenbergContent, type PostFormData } from "../../_schema";
import type { CategoryOption } from "../../_components/CategoryChecklist";

interface WPPostFull {
  id: number;
  slug: string;
  status: string;
  title: { rendered: string; raw?: string };
  excerpt: { rendered: string; raw?: string };
  content: { rendered: string; raw?: string };
  categories: number[];
  featured_media: number;
}
interface WPCategorySlim {
  id: number;
  name: string;
  slug: string;
}
interface WPMediaSlim {
  id: number;
  source_url: string;
}

export default async function EditarPostPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await requireModule("blog");
  const { id } = await params;

  // A busca de mídia só existe depois de conhecer featured_media, então o
  // post precisa vir primeiro; categorias e mídia não dependem uma da
  // outra e disparam juntas em seguida.
  const post = await adminFetchWP<WPPostFull>(`/wp/v2/posts/${id}`, { query: { context: "edit" } }).catch(
    () => null,
  );
  if (!post) notFound();

  const [categories, media] = await Promise.all([
    adminFetchWP<WPCategorySlim[]>("/wp/v2/categories", { query: { per_page: "100", _fields: "id,name,slug" } }),
    post.featured_media > 0
      ? adminFetchWP<WPMediaSlim>(`/wp/v2/media/${post.featured_media}`, { query: { context: "edit" } }).catch(
          () => null,
        )
      : Promise.resolve(null),
  ]);
  const featuredMediaUrl = media?.source_url ?? "";

  const rawContent = post.content.raw ?? post.content.rendered;
  const gutenberg = isGutenbergContent(rawContent);

  const initialData: PostFormData = {
    title: decodeHtmlEntities(post.title.raw ?? post.title.rendered),
    excerpt: decodeHtmlEntities(post.excerpt.raw ?? post.excerpt.rendered),
    status: post.status === "publish" ? "publish" : "draft",
    categories: post.categories || [],
    featuredMedia: post.featured_media || 0,
    featuredMediaUrl,
    content: rawContent,
  };

  const categoryOptions: CategoryOption[] = categories.map((c) => ({
    id: c.id,
    name: c.name,
    slug: c.slug,
  }));

  return (
    <AdminShell displayName={session.displayName} canHero={session.canHero} canBlog={session.canBlog}>
      <PostForm
        mode="edit"
        postId={post.id}
        postSlug={post.slug}
        initialData={initialData}
        categoryOptions={categoryOptions}
        isGutenberg={gutenberg}
        wpAdminEditUrl={`${WP_BASE}/wp-admin/post.php?post=${post.id}&action=edit`}
      />
    </AdminShell>
  );
}
