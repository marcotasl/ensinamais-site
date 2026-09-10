import { AdminShell } from "../../_components/AdminShell";
import { adminFetchWP, requireModule } from "@/lib/admin-client";
import { PostForm } from "../_components/PostForm";
import type { PostFormData } from "../_schema";
import type { CategoryOption } from "../_components/CategoryChecklist";

interface WPCategorySlim {
  id: number;
  name: string;
  slug: string;
}

const EMPTY: PostFormData = {
  title: "",
  excerpt: "",
  status: "draft",
  categories: [],
  featuredMedia: 0,
  featuredMediaUrl: "",
  content: "",
};

export default async function NovoPostPage() {
  const session = await requireModule("blog");
  const categories = await adminFetchWP<WPCategorySlim[]>("/wp/v2/categories", {
    query: { per_page: "100", _fields: "id,name,slug" },
  });
  const categoryOptions: CategoryOption[] = categories.map((c) => ({
    id: c.id,
    name: c.name,
    slug: c.slug,
  }));

  return (
    <AdminShell displayName={session.displayName} canHero={session.canHero} canBlog={session.canBlog}>
      <PostForm mode="create" initialData={EMPTY} categoryOptions={categoryOptions} />
    </AdminShell>
  );
}
