import type { MetadataRoute } from "next";
import {
  abs,
  canonicalPagePath,
  courseCategoryPath,
  coursePath,
  COURSES_HUB_PATH,
} from "@/lib/seo";
import { CATEGORIES, COURSES } from "@/lib/courses-data";
import { getBlogPosts } from "@/lib/wordpress";

type StaticRoute = {
  path: string;
  priority: number;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
};

const STATIC_ROUTES: StaticRoute[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: COURSES_HUB_PATH, priority: 0.8, changeFrequency: "monthly" },
  { path: "/beneficios", priority: 0.6, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
  { path: "/app-dos-pais", priority: 0.6, changeFrequency: "monthly" },
  { path: "/conheca-a-ensinamais", priority: 0.6, changeFrequency: "monthly" },
  { path: "/fale-conosco", priority: 0.6, changeFrequency: "monthly" },
  { path: "/metodologia", priority: 0.6, changeFrequency: "monthly" },
  { path: "/nossa-historia", priority: 0.6, changeFrequency: "monthly" },
  { path: "/politica-de-privacidade", priority: 0.3, changeFrequency: "yearly" },
  { path: "/seja-um-franqueado.html", priority: 0.6, changeFrequency: "monthly" },
  { path: "/sobre-nos", priority: 0.6, changeFrequency: "monthly" },
  { path: "/super-aluno", priority: 0.6, changeFrequency: "monthly" },
  { path: "/termos-de-uso", priority: 0.3, changeFrequency: "yearly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const blogPosts = await getBlogPosts();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: abs(canonicalPagePath(route.path)),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const categoryEntries: MetadataRoute.Sitemap = CATEGORIES.map((category) => ({
    url: abs(courseCategoryPath(category.slug)),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const courseEntries: MetadataRoute.Sitemap = COURSES.map((course) => ({
    url: abs(coursePath(course.categorySlug, course.slug)),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: abs(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticEntries, ...categoryEntries, ...courseEntries, ...blogEntries];
}
