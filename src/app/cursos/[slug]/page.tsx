import { notFound } from "next/navigation";
import { ArrowRight, Star, Clock, MapPin, Calendar, Check, Timer } from "lucide-react";
import Placeholder from "@/components/ui/Placeholder";
import FadeIn from "@/components/ui/FadeIn";
import LeadCaptureForm from "@/components/forms/LeadCaptureForm";
import { COURSES_DATA, getCourseBySlug } from "@/lib/courses-data";
import type { Metadata } from "next";
import CourseFAQ from "./CourseFAQ";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return COURSES_DATA.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};
  return {
    title: `${course.title} para Crianças | Ensina Mais – Turma da Mônica`,
    description: course.desc,
  };
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const otherCourses = COURSES_DATA.filter((c) => c.slug !== slug);

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Hero */}
      <section className="bg-wire-900 pt-24 pb-28 sm:pb-32 px-4 sm:px-6 rounded-b-[46px]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <FadeIn>
            <p className="text-xs font-bold text-wire-500 uppercase tracking-widest mb-3">{course.subtitle}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-5">
              {course.title}
            </h1>
            <p className="text-base sm:text-lg text-wire-400 max-w-[480px] leading-relaxed mb-8">
              {course.longDesc}
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-wire-400">
                <Calendar size={16} /> {course.ageRange}
              </div>
              <div className="flex items-center gap-2 text-sm text-wire-400">
                <MapPin size={16} /> {course.modality}
              </div>
              <div className="flex items-center gap-2 text-sm text-wire-400">
                <Clock size={16} /> {course.frequency}
              </div>
              <div className="flex items-center gap-2 text-sm text-wire-400">
                <Timer size={16} /> {course.workload}
              </div>
            </div>
          </FadeIn>

          {/* Lead form */}
          <FadeIn delay={0.2}>
            <div id="lead" className="bg-white/10 backdrop-blur rounded-2xl p-6 sm:p-8 border border-white/15">
              <h3 className="text-lg font-extrabold text-white mb-1">Agende uma aula grátis</h3>
              <p className="text-sm text-wire-500 mb-5">Preencha e entraremos em contato em até 24h.</p>
              <LeadCaptureForm layout="vertical" dark buttonText={`Quero aula de ${course.title}`} />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Visão Geral — Objetivo */}
      <section className="px-4 sm:px-6 -mt-12 relative z-10">
        <FadeIn>
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-white rounded-2xl border border-wire-200 p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12 items-stretch">
                <div>
                  <p className="text-xs font-bold text-wire-400 uppercase tracking-widest mb-2">Visão Geral</p>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-wire-black mb-4">
                    Objetivo do curso
                  </h2>
                  <p className="text-base text-wire-500 leading-relaxed">
                    {course.objective}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 h-full">
                  {[
                    { icon: Calendar, value: course.ageRange, label: "Faixa etária" },
                    { icon: MapPin, value: course.modality, label: "Modalidade" },
                    { icon: Clock, value: course.frequency, label: "Frequência" },
                    { icon: Timer, value: course.duration, label: "Duração" },
                  ].map((spec) => (
                    <div key={spec.label} className="bg-wire-50 rounded-xl p-4 text-center flex flex-col items-center justify-center">
                      <spec.icon size={20} className="text-wire-500 mx-auto mb-2" />
                      <span className="block text-sm font-black text-wire-black">{spec.value}</span>
                      <span className="block text-xs text-wire-400 mt-0.5">{spec.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* O que seu filho aprende */}
      <section className="px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="mb-10 max-w-[480px]">
              <p className="text-xs font-bold text-wire-400 uppercase tracking-widest mb-2">Competências</p>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-wire-black">
                O que seu filho aprende
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {course.skills.map((skill, i) => (
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

      {/* Para quem é recomendado */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-20">
        <FadeIn>
          <div className="max-w-[900px] mx-auto text-center">
            <p className="text-xs font-bold text-wire-400 uppercase tracking-widest mb-2">Público</p>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-wire-black mb-8">
              Para quem {course.title} é recomendado?
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {course.audience.map((item) => (
                <div key={item} className="flex items-center gap-2 bg-white rounded-full border border-wire-200 px-5 py-3">
                  <Check size={14} className="text-wire-500 shrink-0" />
                  <span className="text-sm font-medium text-wire-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Modules — como funciona */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-16 items-start">
            <FadeIn className="lg:sticky lg:top-24">
              <p className="text-xs font-bold text-wire-400 uppercase tracking-widest mb-2">Módulos</p>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-wire-black mb-4">
                Como funciona o curso
              </h2>
              <p className="text-base text-wire-500 leading-relaxed">
                {course.methodology}
              </p>
            </FadeIn>

            <div className="flex flex-col gap-3">
              {course.modules.map((mod, i) => (
                <FadeIn key={mod.title} delay={i * 0.08}>
                  <div className="card-glow bg-white rounded-2xl border border-wire-200 p-5 sm:p-6 flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-wire-100 flex items-center justify-center shrink-0 text-sm font-black text-wire-500">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-wire-black mb-1">{mod.title}</h3>
                      <p className="text-sm text-wire-500 leading-relaxed">{mod.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
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
                  Por que estudar na<br className="hidden sm:block" /> Ensina Mais?
                </h2>
                <div className="flex flex-col gap-3">
                  {course.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={14} className="text-wire-400" />
                      </div>
                      <span className="text-base text-wire-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Placeholder className="w-full h-[300px] sm:h-[360px] rounded-2xl" label="Foto aluno + instrutor" />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Testimonial */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-20">
        <FadeIn>
          <div className="max-w-[700px] mx-auto text-center">
            <p className="text-xs font-bold text-wire-400 uppercase tracking-widest mb-6">Depoimento</p>
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-wire-700 mb-8">
              &ldquo;{course.testimonial.quote}&rdquo;
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-wire-200" />
              <div className="text-left">
                <div className="text-base font-bold text-wire-black">{course.testimonial.name}</div>
                <div className="text-sm text-wire-400">{course.testimonial.city}</div>
              </div>
            </div>
            <div className="flex gap-0.5 justify-center mt-4">
              {Array(5).fill(0).map((_, j) => (
                <Star key={j} size={14} fill="#d9d9d9" color="#d9d9d9" />
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
              <p className="text-xs font-bold text-wire-400 uppercase tracking-widest mb-2">Dúvidas Frequentes</p>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-wire-black">
                Perguntas sobre {course.title}
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
          <div className="max-w-[1200px] mx-auto bg-wire-100 rounded-2xl py-12 sm:py-16 px-6 sm:px-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-wire-black mb-4">
              Pronto para começar?
            </h2>
            <p className="text-base sm:text-lg text-wire-500 mb-8 max-w-[460px] mx-auto">
              Agende uma aula experimental gratuita e conheça na prática o curso de {course.title}.
            </p>
            <a href="#lead" className="text-sm sm:text-base font-bold text-white bg-wire-black rounded-xl px-8 py-4 inline-flex items-center gap-2 hover:bg-wire-900 transition-colors">
              Agendar aula grátis <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </FadeIn>

      {/* Related courses */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-wire-black mb-8">
              Seu filho também pode gostar
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherCourses.map((c, i) => (
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
