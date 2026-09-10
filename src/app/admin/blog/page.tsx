import Link from "next/link";
import { Plus } from "lucide-react";
import { AdminShell } from "../_components/AdminShell";
import { adminFetchWP, adminFetchWPWithHeaders, requireModule } from "@/lib/admin-client";
import { decodeHtmlEntities, type PostStatus } from "./_schema";
import { PostsToolbar } from "./_components/PostsToolbar";
import { PostsTable, type PostRow } from "./_components/PostsTable";

const PER_PAGE = 20;
const DEFAULT_STATUS = "publish,draft";

interface WPPostSlim {
  id: number;
  status: string;
  date: string;
  title: { rendered: string };
  categories: number[];
  author: number;
}
interface WPCategorySlim {
  id: number;
  name: string;
}
interface WPUserSlim {
  id: number;
  name: string;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
}

export default async function BlogListPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; status?: string; page?: string }>;
}) {
  const session = await requireModule("blog");
  const sp = await searchParams;
  const q = sp.q || "";
  const status = sp.status || DEFAULT_STATUS;
  const requestedPage = Math.max(1, Number(sp.page) || 1);

  const baseQuery: Record<string, string> = {
    context: "edit",
    status,
    per_page: String(PER_PAGE),
    orderby: "date",
    order: "desc",
    _fields: "id,status,date,title,categories,author",
    ...(q ? { search: q } : {}),
  };

  // Categorias e autores não dependem do resultado dos posts — dispara em
  // paralelo com a busca (e eventual retry) da página.
  const categoriesPromise = adminFetchWP<WPCategorySlim[]>("/wp/v2/categories", {
    query: { per_page: "100", _fields: "id,name" },
  });
  const usersPromise = adminFetchWP<WPUserSlim[]>("/wp/v2/users", {
    query: { per_page: "100", _fields: "id,name" },
  }).catch(() => [] as WPUserSlim[]);

  async function fetchPosts(targetPage: number): Promise<{ posts: WPPostSlim[]; totalPages: number }> {
    const res = await adminFetchWPWithHeaders<WPPostSlim[]>("/wp/v2/posts", {
      ...baseQuery,
      page: String(targetPage),
    });
    return { posts: res.data, totalPages: Math.max(1, Number(res.headers.get("X-WP-TotalPages") || 1)) };
  }

  let page = requestedPage;
  let posts: WPPostSlim[];
  let totalPages: number;
  try {
    ({ posts, totalPages } = await fetchPosts(page));
  } catch {
    // Página fora do range válido (ex: filtro reduziu o total) — volta pra página 1.
    page = 1;
    ({ posts, totalPages } = await fetchPosts(1));
  }

  const [categories, users] = await Promise.all([categoriesPromise, usersPromise]);
  const categoryName = new Map(categories.map((c) => [c.id, c.name]));
  const userName = new Map(users.map((u) => [u.id, u.name]));

  const rows: PostRow[] = posts.map((p) => ({
    id: p.id,
    title: decodeHtmlEntities(p.title.rendered),
    status: (p.status === "publish" ? "publish" : "draft") as PostStatus,
    category: (p.categories || []).map((id) => categoryName.get(id)).filter(Boolean).join(", "),
    date: formatDate(p.date),
    author: userName.get(p.author) || `Autor #${p.author}`,
  }));

  function pageHref(target: number) {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (status !== DEFAULT_STATUS) params.set("status", status);
    if (target > 1) params.set("page", String(target));
    const qs = params.toString();
    return qs ? `/admin/blog?${qs}` : "/admin/blog";
  }

  return (
    <AdminShell displayName={session.displayName} canHero={session.canHero} canBlog={session.canBlog}>
      <div className="mx-auto w-full max-w-[1200px] px-6 py-8 lg:px-10">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-em-dark/45">Blog</p>
            <h1 className="mt-1 text-[24px] font-bold text-em-dark">Posts</h1>
          </div>
          <Link
            href="/admin/blog/novo"
            className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#8BC34A_0%,#6EA832_100%)] px-5 py-2.5 text-[13px] font-bold text-white shadow-[0_10px_24px_-10px_rgba(110,168,50,0.55)] hover:brightness-105"
          >
            <Plus className="h-4 w-4" strokeWidth={1.8} />
            Novo post
          </Link>
        </div>

        <PostsToolbar initialQuery={q} initialStatus={status} />

        <PostsTable rows={rows} />

        {totalPages > 1 && (
          <div className="mt-5 flex items-center justify-center gap-1.5">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <Link
                key={n}
                href={pageHref(n)}
                className={`inline-flex h-8 min-w-[32px] items-center justify-center rounded-full px-2 text-[12px] font-semibold ${
                  n === page
                    ? "bg-em-green-dark text-white"
                    : "bg-white text-em-dark/60 shadow-[0_1px_3px_rgba(26,39,68,0.08)] hover:text-em-green-dark"
                }`}
              >
                {n}
              </Link>
            ))}
          </div>
        )}
      </div>
    </AdminShell>
  );
}
