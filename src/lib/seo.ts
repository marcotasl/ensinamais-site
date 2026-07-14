import type { Category, Course } from "@/lib/courses-data";
import type { BlogPost } from "@/lib/blog-data";

// Domínio de produção; sobreponível por env. Confirmar apex vs www com o cliente antes do go-live.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ensinamais.com.br";

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
      item: abs(item.url),
    })),
  };
}

export function blogPostingSchema(post: BlogPost): Record<string, unknown> {
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
