"use client";

import { ArrowRight, Calendar } from "lucide-react";
import Placeholder from "@/components/ui/Placeholder";

const POSTS = [
  { title: "5 sinais de que seu filho precisa de apoio escolar", category: "Apoio Escolar", date: "28 Mar 2026", href: "/blog/sinais-apoio-escolar" },
  { title: "Robótica educacional: por que crianças de 4 anos já podem começar", category: "Robótica", date: "22 Mar 2026", href: "/blog/robotica-para-criancas" },
  { title: "Como escolher a melhor franquia de educação em 2026", category: "Franquia", date: "15 Mar 2026", href: "/blog/melhor-franquia-educacao" },
];

export default function BlogPreview() {
  return (
    <section className="px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
          <div>
            <p className="text-xs font-bold text-wire-400 uppercase tracking-widest mb-2">Blog</p>
            <h2 className="text-3xl lg:text-4xl font-black text-wire-black">Conteúdo para pais e educadores</h2>
          </div>
          <a href="/blog" className="text-sm font-bold text-wire-700 flex items-center gap-1.5 hover:text-wire-black shrink-0">
            Ver todos <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured */}
          <a href={POSTS[0].href} className="group block bg-white rounded-2xl overflow-hidden border border-wire-200 hover:shadow-md transition-all">
            <Placeholder className="w-full h-56 rounded-none" label="Thumbnail do post" />
            <div className="p-6">
              <span className="text-xs font-bold text-wire-400 uppercase">{POSTS[0].category}</span>
              <h3 className="text-xl font-extrabold text-wire-black mt-2 mb-3 group-hover:text-wire-700">{POSTS[0].title}</h3>
              <span className="text-xs text-wire-400 flex items-center gap-1"><Calendar size={11} /> {POSTS[0].date}</span>
            </div>
          </a>

          {/* List */}
          <div className="flex flex-col gap-4">
            {POSTS.slice(1).map((post, i) => (
              <a key={i} href={post.href} className="group flex gap-4 bg-white rounded-2xl overflow-hidden border border-wire-200 hover:shadow-md transition-all p-4">
                <Placeholder className="w-28 h-24 shrink-0 rounded-xl" />
                <div className="flex flex-col justify-center">
                  <span className="text-xs font-bold text-wire-400 uppercase">{post.category}</span>
                  <h3 className="text-base font-extrabold text-wire-black mt-1 mb-1.5 group-hover:text-wire-700 leading-snug">{post.title}</h3>
                  <span className="text-xs text-wire-400 flex items-center gap-1"><Calendar size={11} /> {post.date}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
