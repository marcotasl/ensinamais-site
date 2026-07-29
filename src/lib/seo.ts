import type { Category, Course } from "@/lib/courses-data";
import type { BlogPostMeta } from "@/lib/wordpress";

// O site atual canoniza em www; manter o host evita um redirect adicional na migração.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ensinamais.com.br";

export const SITE_NAME = "Ensina Mais";

export const SITE_DESCRIPTION =
  "Rede de apoio escolar licenciada Turma da Mônica com metodologia individualizada. Apoio Escolar, Robótica, Programação e Inglês para crianças e adolescentes, com mais de 100 escolas no Brasil.";

export const SOCIAL_PROFILES = [
  "https://www.youtube.com/c/EnsinaMaisBrasil",
  "https://www.instagram.com/ensinamais.brasil/",
  "https://www.facebook.com/ensinamais.oficial/",
];

export function abs(path: string): string {
  return new URL(path, SITE_URL).toString();
}

export const COURSES_HUB_PATH = "/cursos.html";

export function courseCategoryPath(slug: string): string {
  return `/cursos/${slug}.html`;
}

export function coursePath(categorySlug: string, courseSlug: string): string {
  return `/cursos/${categorySlug}/${courseSlug}`;
}

// O site atual usa páginas sem barra final; a raiz é a única exceção.
export function canonicalPagePath(path: string): string {
  if (path === "" || path === "/") return "/";
  return path.replace(/\/+$/, "");
}

// Sem @context: reaproveitado como sub-nó (provider/publisher) dentro de outros schemas.
function organizationNode(): Record<string, unknown> {
  return {
    "@type": "EducationalOrganization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: abs("/images/logo-ensina-mais.svg"),
    sameAs: SOCIAL_PROFILES,
    description: SITE_DESCRIPTION,
    areaServed: "BR",
  };
}

export function organizationSchema(): Record<string, unknown> {
  return { "@context": "https://schema.org", ...organizationNode() };
}

export function websiteSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "pt-BR",
  };
}

export function courseSchema(course: Course, category: Category): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.desc,
    about: category.title,
    provider: {
      "@type": "EducationalOrganization",
      name: SITE_NAME,
      sameAs: SITE_URL,
    },
  };
}

export function faqSchema(items: { q: string; a: string }[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(canonicalPagePath(item.url)),
    })),
  };
}

export function blogPostingSchema(post: Pick<BlogPostMeta, "title" | "excerpt" | "date" | "slug">): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: organizationNode(),
    mainEntityOfPage: abs(`/blog/${post.slug}`),
  };
}
