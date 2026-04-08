"use client";

import Image from "next/image";
import { ArrowRight, BookOpen, Calendar } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";

// Posts estáticos — serão substituídos por WP Headless
const POSTS = [
  {
    title: "5 sinais de que seu filho precisa de apoio escolar",
    excerpt: "Notas caindo, desmotivação e dificuldade com tarefas podem indicar que é hora de buscar reforço. Saiba como identificar e agir cedo.",
    category: "Apoio Escolar",
    date: "28 Mar 2026",
    img: "/images/courses/apoio-escolar.jpg",
    href: "/blog/sinais-apoio-escolar",
    color: "#039BE5",
  },
  {
    title: "Robótica educacional: por que crianças de 4 anos já podem começar",
    excerpt: "A robótica desenvolve raciocínio lógico, coordenação e trabalho em equipe desde a primeira infância. Entenda como funciona na prática.",
    category: "Robótica",
    date: "22 Mar 2026",
    img: "/images/courses/robotica.jpg",
    href: "/blog/robotica-para-criancas",
    color: "#7CB342",
  },
  {
    title: "Como escolher a melhor franquia de educação em 2026",
    excerpt: "Investimento, suporte, território exclusivo e rentabilidade — os critérios essenciais para tomar uma decisão segura no mercado educacional.",
    category: "Franquia",
    date: "15 Mar 2026",
    img: "/images/franchise/render-fachada.jpg",
    href: "/blog/melhor-franquia-educacao",
    color: "#5C6BC0",
  },
];

export default function BlogPreview() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
            <div>
              <Badge className="mb-3 bg-em-coral-pale text-em-coral">
                <BookOpen size={13} /> Blog
              </Badge>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-em-dark">
                Conteúdo para pais e educadores
              </h2>
            </div>
            <a
              href="/blog"
              className="text-base font-bold text-em-coral hover:text-em-coral-dark flex items-center gap-1.5 transition-colors shrink-0"
            >
              Ver todos os posts <ArrowRight size={15} />
            </a>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map((post, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <a
                href={post.href}
                className="group block bg-white rounded-3xl overflow-hidden border border-gray-200 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] h-full flex flex-col"
              >
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className="text-[11px] font-bold text-white rounded-full px-3 py-1.5"
                      style={{ background: post.color }}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium mb-3">
                    <Calendar size={12} /> {post.date}
                  </div>
                  <h3 className="text-lg font-extrabold text-em-dark mb-3 leading-snug group-hover:text-em-coral transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500 flex-1">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-em-coral mt-4">
                    Ler artigo <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
