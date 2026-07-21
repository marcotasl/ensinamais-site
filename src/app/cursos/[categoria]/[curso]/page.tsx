import { notFound } from "next/navigation";
import { ArrowRight, Star, Clock, MapPin, Calendar, Check, Timer } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import LeadCaptureForm from "@/components/forms/LeadCaptureForm";
import { COURSES, getCourseBySlug, getCategoryBySlug, getCoursesByCategory, getCourseImage } from "@/lib/courses-data";
import type { Metadata } from "next";
import CourseFAQ from "./CourseFAQ";
import JsonLd from "@/components/seo/JsonLd";
import { courseSchema, breadcrumbSchema } from "@/lib/seo";

interface Props {
  params: Promise<{ categoria: string; curso: string }>;
}

// Mapeia cada categoria pra um conjunto de classes da paleta de marca (em-*).
// courses-data guarda só hex; aqui traduzimos pra tokens Tailwind do design system.
type BrandTheme = {
  marker: string;
  sticker: string;
  pale: string;
  accent: string;
  radial: string;
};

const CATEGORY_THEME: Record<string, BrandTheme> = {
  "apoio-escolar": {
    marker: "marker-blue",
    sticker: "bg-em-blue",
    pale: "bg-em-blue-pale",
    accent: "text-em-blue-dark",
    radial: "rgba(0,174,239,0.34)",
  },
  "robotica-ensina": {
    marker: "marker-green",
    sticker: "bg-em-green",
    pale: "bg-em-green-pale",
    accent: "text-em-green-dark",
    radial: "rgba(140,195,74,0.34)",
  },
  "programacao-ensina": {
    marker: "marker-yellow",
    sticker: "bg-em-orange",
    pale: "bg-em-yellow/10",
    accent: "text-em-orange",
    radial: "rgba(255,152,0,0.32)",
  },
  "ingles-ensina": {
    marker: "marker-coral",
    sticker: "bg-em-coral",
    pale: "bg-em-coral-pale",
    accent: "text-em-coral-dark",
    radial: "rgba(239,83,80,0.32)",
  },
};

const FALLBACK_THEME: BrandTheme = {
  marker: "marker-green",
  sticker: "bg-em-green",
  pale: "bg-em-green-pale",
  accent: "text-em-green-dark",
  radial: "rgba(140,195,74,0.34)",
};

const CARD_TILTS = ["lg:tilt-l1", "lg:tilt-r1", "lg:tilt-l1"] as const;

export function generateStaticParams() {
  return COURSES.map((c) => ({ categoria: c.categorySlug, curso: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria, curso } = await params;
  const course = getCourseBySlug(categoria, curso);
  if (!course) return {};
  return {
    title: `${course.title} | Ensina Mais – Turma da Mônica`,
    description: course.desc,
    alternates: { canonical: `/cursos/${categoria}/${curso}/` },
  };
}

export default async function CoursePage({ params }: Props) {
  const { categoria, curso } = await params;
  const course = getCourseBySlug(categoria, curso);
  if (!course) notFound();

  const category = getCategoryBySlug(categoria);
  if (!category) notFound();

  const otherCoursesInCategory = getCoursesByCategory(categoria).filter((c) => c.slug !== curso);
  const theme = CATEGORY_THEME[category.slug] ?? FALLBACK_THEME;

  const specs = [
    { Icon: Calendar, value: course.ageRange, label: "Faixa etária" },
    { Icon: MapPin, value: course.modality, label: "Modalidade" },
    { Icon: Clock, value: course.frequency, label: "Frequência" },
    { Icon: Timer, value: course.duration, label: "Duração" },
  ];

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <JsonLd
        data={[
          courseSchema(course, category),
          breadcrumbSchema([
            { name: "Início", url: "/" },
            { name: "Cursos", url: "/cursos" },
            { name: category.title, url: `/cursos/${category.slug}` },
            { name: course.title, url: `/cursos/${category.slug}/${course.slug}` },
          ]),
        ]}
      />
      {/* Hero */}
      <section className="relative bg-em-dark pt-24 pb-28 sm:pb-32 px-4 sm:px-6 rounded-b-[46px] overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 50% 40% at 92% 12%, ${theme.radial}, transparent 65%)` }}
        />
        <div className="relative max-w-[1200px] mx-auto">
          {/* Breadcrumb */}
          <FadeIn>
            <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-white/55 mb-6">
              <a href="/cursos" className="hover:text-white transition-colors">Cursos</a>
              <span aria-hidden>·</span>
              <a href={`/cursos/${category.slug}`} className="hover:text-white transition-colors">{category.title}</a>
              <span aria-hidden>·</span>
              <span className="text-white/85">{course.title}</span>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <FadeIn>
              <p className={`eyebrow mb-4 ${theme.accent}`}>{course.subtitle}</p>
              <h1 className="text-[clamp(2rem,4.4vw,3.25rem)] font-black tracking-tight text-white mb-6 max-w-[640px]">
                {course.title}
              </h1>
              <p className="text-base sm:text-lg text-white/85 max-w-[520px] leading-relaxed mb-8">
                {course.longDesc}
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  { Icon: Calendar, value: course.ageRange },
                  { Icon: MapPin, value: course.modality },
                  { Icon: Clock, value: course.frequency },
                  { Icon: Timer, value: course.workload },
                ].map(({ Icon, value }) => (
                  <span key={value} className="inline-flex items-center gap-2 text-sm font-bold text-white bg-white/10 backdrop-blur rounded-full px-4 py-2">
                    <Icon size={16} strokeWidth={1.8} /> {value}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div id="lead" className="bg-white/10 backdrop-blur rounded-3xl p-6 sm:p-8 border border-white/15 shadow-[0_24px_56px_-28px_rgba(0,0,0,0.5)]">
                <h3 className="text-lg font-extrabold text-white mb-1">Agende uma aula grátis</h3>
                <p className="text-sm text-white/70 mb-5">Preencha e entraremos em contato em até 24h.</p>
                <LeadCaptureForm layout="vertical" dark buttonText={`Quero aula de ${course.title}`} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Visão Geral — Objetivo */}
      <section className="px-4 sm:px-6 -mt-12 relative z-10">
        <FadeIn>
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_24px_56px_-30px_rgba(26,39,68,0.3)]">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12 items-stretch">
                <div>
                  <p className={`eyebrow mb-3 ${theme.accent}`}>Visão geral</p>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-em-dark mb-4 leading-tight">
                    Objetivo do <span className={theme.marker}>curso</span>
                  </h2>
                  <p className="text-base text-em-dark-soft/80 leading-relaxed">
                    {course.objective}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 h-full">
                  {specs.map((spec) => (
                    <div key={spec.label} className={`rounded-2xl p-5 text-center flex flex-col items-center justify-center ${theme.pale}`}>
                      <span className={`sticker-icon ${theme.sticker} text-white mb-3`} style={{ width: 44, height: 44 }}>
                        <spec.Icon size={22} strokeWidth={1.8} />
                      </span>
                      <span className="block text-base font-black text-em-dark">{spec.value}</span>
                      <span className="block text-sm text-em-dark-soft/60 mt-1">{spec.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Para quem é recomendado */}
      <section className="px-4 sm:px-6 py-16 sm:py-20">
        <FadeIn>
          <div className="max-w-[900px] mx-auto text-center">
            <p className={`eyebrow mb-3 ${theme.accent}`}>Público</p>
            <h2 className="text-2xl sm:text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-em-dark mb-8 leading-[1.1]">
              Para quem {course.title} é <span className={theme.marker}>recomendado</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {course.audience.map((item) => (
                <div key={item} className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-3 shadow-[0_10px_28px_-20px_rgba(26,39,68,0.3)]">
                  <span className={`sticker-icon ${theme.sticker} text-white shrink-0`} style={{ width: 24, height: 24 }}>
                    <Check size={13} strokeWidth={2.6} />
                  </span>
                  <span className="text-sm font-semibold text-em-dark-soft">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Modules */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-16 items-start">
            <FadeIn className="lg:sticky lg:top-24">
              <p className={`eyebrow mb-3 ${theme.accent}`}>Módulos</p>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-em-dark mb-4 leading-tight">
                Como <span className={theme.marker}>funciona</span> o curso
              </h2>
              <p className="text-base text-em-dark-soft/80 leading-relaxed">
                {course.methodology}
              </p>
            </FadeIn>

            <div className="flex flex-col gap-4">
              {course.modules.map((mod, i) => (
                <FadeIn key={mod.title} delay={Math.min(i * 0.08, 0.24)}>
                  <div className="bg-white rounded-3xl p-6 sm:p-7 flex gap-4 items-start shadow-[0_18px_42px_-24px_rgba(26,39,68,0.24)] card-lift">
                    <span className={`sticker-icon ${theme.sticker} text-white shrink-0 text-sm font-black`} style={{ width: 48, height: 48 }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold text-em-dark mb-1 leading-tight">{mod.title}</h3>
                      <p className="text-sm text-em-dark-soft/75 leading-relaxed">{mod.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-20">
        <FadeIn>
          <div className={`max-w-[820px] mx-auto rounded-[2rem] lg:rounded-[2.5rem] px-6 py-12 sm:p-12 text-center ${theme.pale}`}>
            <p className={`eyebrow mb-6 ${theme.accent}`}>Depoimento</p>
            <p className="text-lg sm:text-xl lg:text-2xl font-bold leading-relaxed text-em-dark mb-8">
              &ldquo;{course.testimonial.quote}&rdquo;
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className={`w-12 h-12 rounded-full ${theme.sticker}`} />
              <div className="text-left">
                <div className="text-base font-black text-em-dark">{course.testimonial.name}</div>
                <div className="text-sm text-em-dark-soft/60">{course.testimonial.city}</div>
              </div>
            </div>
            <div className="flex gap-0.5 justify-center mt-4">
              {Array(5).fill(0).map((_, j) => (
                <Star key={j} size={16} className="fill-em-yellow text-em-yellow" />
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* FAQ */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-[800px] mx-auto">
          <FadeIn>
            <div className="text-center mb-10">
              <p className={`eyebrow mb-3 ${theme.accent}`}>Dúvidas frequentes</p>
              <h2 className="text-2xl sm:text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1]">
                Perguntas sobre <span className={theme.marker}>{course.title}</span>
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <CourseFAQ items={course.faq} />
          </FadeIn>
        </div>
      </section>

      {/* CTA Final */}
      <FadeIn>
        <section className="px-4 sm:px-6 pb-16 sm:pb-20">
          <div className="relative max-w-[1200px] mx-auto bg-em-dark rounded-[2rem] lg:rounded-[2.75rem] py-12 sm:py-16 px-6 sm:px-12 text-center overflow-hidden shadow-[0_24px_56px_-28px_rgba(26,39,68,0.48)]">
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{ background: `radial-gradient(ellipse 50% 60% at 50% 0%, ${theme.radial}, transparent 65%)` }}
            />
            <div className="relative">
              <h2 className="text-2xl sm:text-[1.875rem] lg:text-[2.5rem] font-black text-white mb-4 leading-[1.1]">
                Pronto para <span className="marker-yellow">começar</span>
              </h2>
              <p className="text-base sm:text-lg text-white/80 mb-8 max-w-[460px] mx-auto leading-relaxed">
                Agende uma aula experimental gratuita e conheça na prática o curso de {course.title}.
              </p>
              <a href="#lead" className="text-sm sm:text-base font-bold text-em-dark bg-em-yellow rounded-full px-8 py-4 inline-flex items-center gap-2 hover:bg-white transition-colors shadow-button">
                Agendar aula grátis <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Outros cursos da categoria */}
      {otherCoursesInCategory.length > 0 && (
        <section className="px-4 sm:px-6 pb-16 sm:pb-20">
          <div className="max-w-[1200px] mx-auto">
            <FadeIn>
              <h2 className="text-2xl sm:text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-em-dark mb-8 leading-[1.1]">
                Outros cursos de <span className={theme.marker}>{category.title}</span>
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6">
              {otherCoursesInCategory.slice(0, 3).map((c, i) => {
                const OtherIcon = c.icon;
                return (
                  <FadeIn key={c.slug} delay={Math.min(i * 0.08, 0.24)}>
                    <a
                      href={`/cursos/${category.slug}/${c.slug}`}
                      className={`group block rounded-3xl bg-white overflow-hidden shadow-[0_18px_42px_-22px_rgba(26,39,68,0.24)] card-tilt`}
                      data-tilt={i % 2 === 0 ? "left" : "right"}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={getCourseImage(c)} alt={c.title} className="w-full h-36 object-cover" loading="lazy" />
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`sticker-icon ${theme.sticker} text-white shrink-0`} style={{ width: 40, height: 40 }}>
                            <OtherIcon size={18} strokeWidth={1.8} />
                          </span>
                          <h3 className="text-base font-extrabold text-em-dark leading-tight">{c.title}</h3>
                        </div>
                        <p className="text-sm text-em-dark-soft/75 leading-relaxed mb-3">{c.desc}</p>
                        <span className={`text-sm font-black inline-flex items-center gap-1 ${theme.accent}`}>
                          Ver curso <ArrowRight size={14} strokeWidth={2.4} className="transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </a>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
