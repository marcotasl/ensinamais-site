"use client";

import { ArrowRight } from "lucide-react";
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
        <div className="flex items-end justify-between mb-10">
          <div className="max-w-[400px]">
            <p className="text-xs font-bold text-wire-400 uppercase tracking-widest mb-2">Blog</p>
            <h2 className="text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-wire-black">
              Conteúdo para pais e educadores
            </h2>
          </div>
          <a href="/blog" className="hidden sm:flex text-sm font-bold text-wire-black border border-wire-300 rounded-lg px-5 py-2.5 items-center gap-1.5 hover:bg-wire-50 transition-colors">
            Ver todos <ArrowRight size={13} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {POSTS.map((post, i) => (
            <a key={i} href={post.href} className="group block">
              <Placeholder className="w-full aspect-[16/10] rounded-2xl mb-4" />
              <p className="text-xs font-bold text-wire-400 uppercase tracking-wide mb-1.5">{post.category} · {post.date}</p>
              <h3 className="text-lg font-extrabold text-wire-black group-hover:text-wire-600 transition-colors leading-snug">{post.title}</h3>
            </a>
          ))}
        </div>

        <a href="/blog" className="sm:hidden mt-8 text-sm font-bold text-wire-black border border-wire-300 rounded-lg px-5 py-3 flex items-center justify-center gap-1.5 hover:bg-wire-50 transition-colors">
          Ver todos os posts <ArrowRight size={13} />
        </a>
      </div>
    </section>
  );
}
