import { notFound } from "next/navigation";
import { ArrowRight, Check, Calendar } from "lucide-react";
import Placeholder from "@/components/ui/Placeholder";
import FadeIn from "@/components/ui/FadeIn";
import LeadCaptureForm from "@/components/forms/LeadCaptureForm";
import { CATEGORIES, getCategoryBySlug, getCoursesByCategory } from "@/lib/courses-data";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ categoria: string }>;
}

// Mapeia cada categoria pra um conjunto de classes da paleta de marca (em-*).
// courses-data guarda só hex; aqui traduzimos pra tokens Tailwind do design system.
type BrandTheme = {
  marker: string;
  sticker: string;
  pale: string;
  accent: string;
  radial: string;
  /* Gradient + pattern do hero: pinta o bloco inteiro na cor da frente
     (em vez do navy genérico), mantendo a copy branca legível. */
  heroGradient: string;
  heroPattern: string;
  /* Eyebrow no hero precisa contraste em fundo colorido, não no navy
     escuro , yellow fica visível em todos os 4 gradients. */
  heroEyebrow: string;
};

const CATEGORY_THEME: Record<string, BrandTheme> = {
  "apoio-escolar": {
    marker: "marker-blue",
    sticker: "bg-em-blue",
    pale: "bg-em-blue-pale",
    accent: "text-em-blue-dark",
    radial: "rgba(0,174,239,0.34)",
    heroGradient: "bg-gradient-to-br from-em-blue-dark via-em-blue to-em-blue-light",
    heroPattern: "/images/3d/pattern-dense.webp",
    heroEyebrow: "text-em-yellow",
  },
  "robotica-ensina": {
    marker: "marker-green",
    sticker: "bg-em-green",
    pale: "bg-em-green-pale",
    accent: "text-em-green-dark",
    radial: "rgba(140,195,74,0.34)",
    heroGradient: "bg-gradient-to-br from-em-green-dark via-em-green to-em-green-light",
    heroPattern: "/images/3d/pattern-dense.webp",
    heroEyebrow: "text-em-yellow",
  },
  "programacao-ensina": {
    marker: "marker-yellow",
    sticker: "bg-em-orange",
    pale: "bg-em-yellow/10",
    accent: "text-em-orange",
    radial: "rgba(255,152,0,0.32)",
    heroGradient: "bg-gradient-to-br from-em-orange-dark via-em-orange to-em-yellow",
    heroPattern: "/images/3d/pattern-dense.webp",
    heroEyebrow: "text-em-dark",
  },
  "ingles-ensina": {
    marker: "marker-coral",
    sticker: "bg-em-coral",
    pale: "bg-em-coral-pale",
    accent: "text-em-coral-dark",
    radial: "rgba(239,83,80,0.32)",
    heroGradient: "bg-gradient-to-br from-em-coral-dark via-em-coral to-em-coral-light",
    heroPattern: "/images/3d/pattern-dense.webp",
    heroEyebrow: "text-em-yellow",
  },
};

const FALLBACK_THEME: BrandTheme = {
  marker: "marker-green",
  sticker: "bg-em-green",
  pale: "bg-em-green-pale",
  accent: "text-em-green-dark",
  radial: "rgba(140,195,74,0.34)",
  heroGradient: "bg-gradient-to-br from-em-green-dark via-em-green to-em-green-light",
  heroPattern: "/images/3d/pattern-dense.webp",
  heroEyebrow: "text-em-yellow",
};

const CARD_TILTS = ["lg:tilt-l1", "lg:tilt-r1", "lg:tilt-l1"] as const;

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ categoria: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria } = await params;
  const category = getCategoryBySlug(categoria);
  if (!category) return {};
  return {
    title: `${category.title} | Ensina Mais – Turma da Mônica`,
    description: category.desc,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { categoria } = await params;
  const category = getCategoryBySlug(categoria);
  if (!category) notFound();

  const courses = getCoursesByCategory(categoria);
  const otherCategories = CATEGORIES.filter((c) => c.slug !== categoria);
  const theme = CATEGORY_THEME[category.slug] ?? FALLBACK_THEME;
  const CategoryIcon = category.icon;

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Hero , gradient + pattern da cor da frente (em vez do navy genérico) */}
      <section
        className={`relative pt-24 pb-28 sm:pb-32 px-4 sm:px-6 rounded-b-[46px] overflow-hidden ${theme.heroGradient}`}
      >
        {/* pattern decorativo sutil sobre o gradient */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-15 bg-repeat pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: `url(${theme.heroPattern})`, backgroundSize: "520px" }}
        />
        {/* highlight radial mais escuro no topo direito pra dar profundidade */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 55% 45% at 92% 12%, rgba(26,39,68,0.35), transparent 65%)` }}
        />
        <div className="relative max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <FadeIn>
            <p className={`eyebrow mb-4 ${theme.heroEyebrow}`}>{category.subtitle}</p>
            <h1 className="text-[clamp(2rem,4.4vw,3.25rem)] font-black tracking-tight text-white mb-6 max-w-[640px]">
              {category.title}
            </h1>
            <p className="text-base sm:text-lg text-white/85 max-w-[520px] leading-relaxed mb-8">
              {category.longDesc}
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 text-sm font-bold text-white bg-white/10 backdrop-blur rounded-full px-4 py-2">
                <Calendar size={16} strokeWidth={1.8} /> {category.ageRange}
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-white bg-white/10 backdrop-blur rounded-full px-4 py-2">
                <CategoryIcon size={16} strokeWidth={1.8} /> {courses.length} {courses.length === 1 ? "curso" : "cursos"}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div id="lead" className="bg-white/10 backdrop-blur rounded-3xl p-6 sm:p-8 border border-white/15 shadow-[0_24px_56px_-28px_rgba(0,0,0,0.5)]">
              <h3 className="text-lg font-extrabold text-white mb-1">Agende uma aula grátis</h3>
              <p className="text-sm text-white/70 mb-5">Preencha e entraremos em contato em até 24h.</p>
              <LeadCaptureForm layout="vertical" dark buttonText={`Quero aula de ${category.title}`} />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Cursos da categoria */}
      <section className="px-4 sm:px-6 pt-16 sm:pt-20">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="mb-10 text-center max-w-[640px] mx-auto">
              <p className={`eyebrow mb-3 ${theme.accent}`}>Cursos disponíveis</p>
              <h2 className="text-2xl sm:text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1]">
                Escolha o curso <span className={theme.marker}>ideal</span> para seu filho
              </h2>
            </div>
          </FadeIn>

          <div className={`grid gap-5 lg:gap-6 ${courses.length === 1 ? "max-w-[600px] mx-auto" : "grid-cols-1 sm:grid-cols-2"} ${courses.length >= 3 ? "lg:grid-cols-3" : ""}`}>
            {courses.map((course, i) => {
              const CourseIcon = course.icon;
              return (
                <FadeIn key={course.slug} delay={Math.min(i * 0.08, 0.24)}>
                  <a
                    href={`/cursos/${category.slug}/${course.slug}`}
                    className={`group block h-full rounded-3xl bg-white overflow-hidden shadow-[0_18px_42px_-22px_rgba(26,39,68,0.24)] card-lift ${CARD_TILTS[i % CARD_TILTS.length]} tilt-hover-straighten`}
                  >
                    <Placeholder className="w-full h-40 rounded-none" label={course.title} />
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`sticker-icon ${theme.sticker} text-white shrink-0`} style={{ width: 44, height: 44 }}>
                          <CourseIcon size={20} strokeWidth={1.8} />
                        </span>
                        <div>
                          <h3 className="text-base font-black text-em-dark leading-tight">{course.title}</h3>
                          <span className="text-xs font-bold text-em-dark-soft/60">{course.ageRange}</span>
                        </div>
                      </div>
                      <p className="text-sm text-em-dark-soft/75 leading-relaxed mb-4">{course.desc}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-wire-100">
                        <span className="text-xs font-bold text-em-dark-soft/55">{course.frequency}</span>
                        <span className={`text-sm font-black inline-flex items-center gap-1 ${theme.accent}`}>
                          Ver curso <ArrowRight size={14} strokeWidth={2.4} className="transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </a>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* O que seu filho aprende */}
      <section className="px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="mb-10 max-w-[560px]">
              <p className={`eyebrow mb-3 ${theme.accent}`}>Competências</p>
              <h2 className="text-2xl sm:text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1]">
                O que seu filho <span className={theme.marker}>desenvolve</span>
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {category.skills.map((skill, i) => {
              const SkillIcon = skill.icon;
              return (
                <FadeIn key={skill.title} delay={Math.min(i * 0.08, 0.24)}>
                  <div className={`h-full rounded-3xl p-6 sm:p-7 shadow-[0_18px_42px_-22px_rgba(26,39,68,0.2)] card-lift ${theme.pale}`}>
                    <span className={`sticker-icon ${theme.sticker} text-white mb-5`} style={{ width: 48, height: 48 }}>
                      <SkillIcon size={24} strokeWidth={1.8} />
                    </span>
                    <h3 className="text-base font-extrabold text-em-dark mb-2 leading-tight">{skill.title}</h3>
                    <p className="text-sm text-em-dark-soft/75 leading-relaxed">{skill.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-20">
        <FadeIn>
          <div className="relative max-w-[1200px] mx-auto bg-em-dark rounded-[2rem] lg:rounded-[2.75rem] py-12 sm:py-16 px-6 sm:px-8 lg:px-12 overflow-hidden shadow-[0_24px_56px_-28px_rgba(26,39,68,0.48)]">
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{ background: `radial-gradient(ellipse 45% 50% at 8% 10%, ${theme.radial}, transparent 60%)` }}
            />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div>
                <p className="eyebrow text-em-yellow mb-3">Benefícios</p>
                <h2 className="text-2xl sm:text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-white mb-6 leading-[1.1]">
                  Por que estudar {category.title}<br className="hidden sm:block" /> na <span className="marker-yellow">Ensina Mais</span>
                </h2>
                <div className="flex flex-col gap-3">
                  {category.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <span className={`sticker-icon ${theme.sticker} text-white shrink-0 mt-0.5`} style={{ width: 26, height: 26 }}>
                        <Check size={14} strokeWidth={2.6} />
                      </span>
                      <span className="text-base text-white/85 leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Placeholder className="w-full h-[300px] sm:h-[360px] rounded-3xl" label={`Foto ${category.title}`} />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Outras categorias */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <h2 className="text-2xl sm:text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-em-dark mb-8 leading-[1.1]">
              Conheça <span className="marker-green">também</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6">
            {otherCategories.map((c, i) => {
              const OtherIcon = c.icon;
              const otherTheme = CATEGORY_THEME[c.slug] ?? FALLBACK_THEME;
              return (
                <FadeIn key={c.slug} delay={Math.min(i * 0.08, 0.24)}>
                  <a
                    href={`/cursos/${c.slug}`}
                    className={`group block rounded-3xl bg-white overflow-hidden shadow-[0_18px_42px_-22px_rgba(26,39,68,0.24)] card-tilt`}
                    data-tilt={i % 2 === 0 ? "left" : "right"}
                  >
                    <Placeholder className="w-full h-36 rounded-none" label={c.title} />
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`sticker-icon ${otherTheme.sticker} text-white shrink-0`} style={{ width: 40, height: 40 }}>
                          <OtherIcon size={18} strokeWidth={1.8} />
                        </span>
                        <h3 className="text-base font-extrabold text-em-dark leading-tight">{c.title}</h3>
                      </div>
                      <p className="text-sm text-em-dark-soft/75 leading-relaxed mb-3">{c.desc}</p>
                      <span className={`text-sm font-black inline-flex items-center gap-1 ${otherTheme.accent}`}>
                        Conhecer <ArrowRight size={14} strokeWidth={2.4} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </a>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
