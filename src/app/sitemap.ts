import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { CATEGORIES, COURSES } from "@/lib/courses-data";
import { BLOG_POSTS } from "@/lib/blog-data";

type StaticRoute = {
  path: string;
  priority: number;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
};

// /beneficios fica de fora: é um permanentRedirect pra /metodologia#beneficios,
// e sitemap deve listar URLs finais, não URLs que redirecionam.
const STATIC_ROUTES: StaticRoute[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/cursos", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
  { path: "/app-dos-pais", priority: 0.6, changeFrequency: "monthly" },
  { path: "/carreiras", priority: 0.6, changeFrequency: "monthly" },
  { path: "/conheca-a-ensinamais", priority: 0.6, changeFrequency: "monthly" },
  { path: "/fale-conosco", priority: 0.6, changeFrequency: "monthly" },
  { path: "/metodologia", priority: 0.6, changeFrequency: "monthly" },
  { path: "/nossa-historia", priority: 0.6, changeFrequency: "monthly" },
  { path: "/seja-um-franqueado", priority: 0.6, changeFrequency: "monthly" },
  { path: "/sobre-nos", priority: 0.6, changeFrequency: "monthly" },
  { path: "/super-aluno", priority: 0.6, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const categoryEntries: MetadataRoute.Sitemap = CATEGORIES.map((category) => ({
    url: `${SITE_URL}/cursos/${category.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const courseEntries: MetadataRoute.Sitemap = COURSES.map((course) => ({
    url: `${SITE_URL}/cursos/${course.categorySlug}/${course.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticEntries, ...categoryEntries, ...courseEntries, ...blogEntries];
}
