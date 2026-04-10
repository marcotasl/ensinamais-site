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

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Hero */}
      <section className="bg-wire-900 pt-24 pb-28 sm:pb-32 px-4 sm:px-6 rounded-b-[46px]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <FadeIn>
            <p className="text-xs font-bold text-wire-500 uppercase tracking-widest mb-3">{category.subtitle}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-5">
              {category.title}
            </h1>
            <p className="text-base sm:text-lg text-wire-400 max-w-[480px] leading-relaxed mb-8">
              {category.longDesc}
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-wire-400">
                <Calendar size={16} /> {category.ageRange}
              </div>
              <div className="flex items-center gap-2 text-sm text-wire-400">
                <category.icon size={16} /> {courses.length} {courses.length === 1 ? "curso" : "cursos"}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div id="lead" className="bg-white/10 backdrop-blur rounded-2xl p-6 sm:p-8 border border-white/15">
              <h3 className="text-lg font-extrabold text-white mb-1">Agende uma aula grátis</h3>
              <p className="text-sm text-wire-500 mb-5">Preencha e entraremos em contato em até 24h.</p>
              <LeadCaptureForm layout="vertical" dark buttonText={`Quero aula de ${category.title}`} />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Cursos da categoria */}
      <section className="px-4 sm:px-6 -mt-12 relative z-10">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="mb-8 text-center">
              <p className="text-xs font-bold text-wire-400 uppercase tracking-widest mb-2">Cursos Disponíveis</p>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-wire-black">
                Escolha o curso ideal para seu filho
              </h2>
            </div>
          </FadeIn>

          <div className={`grid gap-4 ${courses.length === 1 ? "max-w-[600px] mx-auto" : "grid-cols-1 sm:grid-cols-2"} ${courses.length >= 3 ? "lg:grid-cols-3" : ""}`}>
            {courses.map((course, i) => (
              <FadeIn key={course.slug} delay={i * 0.08}>
                <a
                  href={`/cursos/${category.slug}/${course.slug}`}
                  className="card-lift group bg-white rounded-2xl border border-wire-200 overflow-hidden hover:shadow-lg transition-all block h-full"
                >
                  <Placeholder className="w-full h-40 rounded-none" label={course.title} />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-wire-100 flex items-center justify-center">
                        <course.icon size={20} className="text-wire-600" />
                      </div>
                      <div>
                        <h3 className="text-base font-black text-wire-black">{course.title}</h3>
                        <span className="text-xs font-semibold text-wire-400">{course.ageRange}</span>
                      </div>
                    </div>
                    <p className="text-sm text-wire-600 leading-relaxed mb-4">{course.desc}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-wire-100">
                      <span className="text-xs font-semibold text-wire-500">{course.frequency}</span>
                      <span className="text-sm font-bold text-wire-black group-hover:text-wire-600 flex items-center gap-1 transition-colors">
                        Ver curso <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* O que seu filho aprende */}
      <section className="px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="mb-10 max-w-[480px]">
              <p className="text-xs font-bold text-wire-400 uppercase tracking-widest mb-2">Competências</p>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-wire-black">
                O que seu filho desenvolve
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {category.skills.map((skill, i) => (
              <FadeIn key={skill.title} delay={i * 0.1}>
                <div className="card-lift bg-white rounded-2xl border border-wire-200 p-6 h-full">
                  <div className="w-11 h-11 rounded-xl bg-wire-100 flex items-center justify-center mb-4">
                    <skill.icon size={22} className="text-wire-600" />
                  </div>
                  <h3 className="text-base font-extrabold text-wire-black mb-1.5">{skill.title}</h3>
                  <p className="text-sm text-wire-500 leading-relaxed">{skill.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-20">
        <FadeIn>
          <div className="max-w-[1200px] mx-auto bg-wire-900 rounded-2xl py-12 sm:py-16 px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div>
                <p className="text-xs font-bold text-wire-500 uppercase tracking-widest mb-3">Benefícios</p>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-6">
                  Por que estudar {category.title}<br className="hidden sm:block" /> na Ensina Mais?
                </h2>
                <div className="flex flex-col gap-3">
                  {category.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={14} className="text-wire-400" />
                      </div>
                      <span className="text-base text-wire-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Placeholder className="w-full h-[300px] sm:h-[360px] rounded-2xl" label={`Foto ${category.title}`} />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Outras categorias */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-wire-black mb-8">
              Conheça também
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherCategories.map((c, i) => (
              <FadeIn key={c.slug} delay={i * 0.1}>
                <a
                  href={`/cursos/${c.slug}`}
                  className="card-tilt group bg-white rounded-2xl border border-wire-200 overflow-hidden hover:shadow-md transition-all block"
                  data-tilt={i % 2 === 0 ? "left" : "right"}
                >
                  <Placeholder className="w-full h-36 rounded-none" label={c.title} />
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-wire-100 flex items-center justify-center">
                        <c.icon size={16} className="text-wire-600" />
                      </div>
                      <h3 className="text-base font-extrabold text-wire-black">{c.title}</h3>
                    </div>
                    <p className="text-sm text-wire-500 leading-relaxed mb-3">{c.desc}</p>
                    <span className="text-sm font-bold text-wire-black group-hover:text-wire-600 flex items-center gap-1 transition-colors">
                      Conhecer <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
