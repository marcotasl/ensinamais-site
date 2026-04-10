"use client";

import { useState, useMemo } from "react";
import { Search, ArrowRight, Clock, Calendar } from "lucide-react";
import Placeholder from "@/components/ui/Placeholder";
import FadeIn from "@/components/ui/FadeIn";
import { BLOG_POSTS, BLOG_CATEGORIES, formatDate, type BlogPost } from "@/lib/blog-data";

export default function BlogHubClient() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered = useMemo(() => {
    return BLOG_POSTS.filter((p) => {
      if (activeCategory !== "Todos" && p.category !== activeCategory) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        if (!p.title.toLowerCase().includes(q) && !p.excerpt.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [search, activeCategory]);

  const featured = BLOG_POSTS[0];

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Hero */}
      <section className="bg-wire-900 pt-24 pb-20 px-4 sm:px-6 rounded-b-[46px]">
        <div className="max-w-[1200px] mx-auto text-center">
          <FadeIn>
            <p className="text-xs font-bold text-wire-500 uppercase tracking-widest mb-3">Blog</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-5 max-w-[700px] mx-auto">
              Conteúdo para pais e educadores
            </h1>
            <p className="text-base sm:text-lg text-wire-400 max-w-[560px] mx-auto leading-relaxed mb-10">
              Dicas de educação, novidades dos cursos e histórias que inspiram quem se preocupa com o futuro das crianças.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="max-w-[640px] mx-auto">
              <div className="relative">
                <Search size={20} strokeWidth={2.5} className="absolute left-5 top-1/2 -translate-y-1/2 text-white/70 pointer-events-none z-10" />
                <input
                  type="text"
                  placeholder="Buscar artigo..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full text-base pl-14 pr-5 py-5 rounded-2xl border border-white/15 bg-white/10 backdrop-blur text-white placeholder:text-wire-500 outline-none focus:border-white/40 focus:ring-2 focus:ring-white/10 transition-all"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured post */}
      {!search && activeCategory === "Todos" && (
        <section className="px-4 sm:px-6 -mt-16 relative z-10 mb-16">
          <FadeIn>
            <a
              href={`/blog/${featured.slug}`}
              className="card-lift block max-w-[1200px] mx-auto bg-white rounded-2xl border border-wire-200 overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-0">
                <Placeholder className="w-full h-64 lg:h-full min-h-[320px] rounded-none" label={featured.title} />
                <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold text-white bg-wire-black rounded-full px-3 py-1.5">Destaque</span>
                    <span className="text-xs font-bold text-wire-500 uppercase tracking-widest">{featured.category}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-wire-black mb-4 leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-base text-wire-500 leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-wire-500 mb-6">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} /> {formatDate(featured.date)}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} /> {featured.readTime}
                    </div>
                  </div>
                  <span className="text-sm font-bold text-wire-black flex items-center gap-1.5">
                    Ler artigo <ArrowRight size={14} className="transition-transform" />
                  </span>
                </div>
              </div>
            </a>
          </FadeIn>
        </section>
      )}

      {/* Category tabs */}
      <section className="px-4 sm:px-6 mb-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm font-semibold px-5 py-2.5 rounded-full border transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-wire-black text-white border-wire-black"
                    : "bg-white text-wire-600 border-wire-200 hover:border-wire-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm text-wire-500">
              <strong className="text-wire-black">{filtered.length}</strong> {filtered.length === 1 ? "artigo" : "artigos"}
            </span>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-wire-200">
              <p className="text-base text-wire-500 mb-4">Nenhum artigo encontrado.</p>
              <button
                onClick={() => { setSearch(""); setActiveCategory("Todos"); }}
                className="text-sm font-bold text-white bg-wire-black rounded-xl px-6 py-3 cursor-pointer hover:bg-wire-900 transition-colors"
              >
                Ver todos os artigos
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {filtered.map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function PostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <FadeIn delay={Math.min(index * 0.05, 0.3)}>
      <a
        href={`/blog/${post.slug}`}
        className="card-lift group bg-white rounded-2xl border border-wire-200 overflow-hidden hover:shadow-md transition-all h-full flex flex-col"
      >
        <Placeholder className="w-full aspect-[16/10] rounded-none" label={post.title} />
        <div className="p-5 sm:p-6 flex flex-col flex-1">
          <p className="text-xs font-bold text-wire-400 uppercase tracking-widest mb-2">
            {post.category} · {formatDate(post.date)}
          </p>
          <h3 className="text-lg font-extrabold text-wire-black group-hover:text-wire-600 transition-colors leading-snug mb-3">
            {post.title}
          </h3>
          <p className="text-sm text-wire-500 leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
          <div className="flex items-center justify-between pt-4 border-t border-wire-100 mt-auto">
            <span className="text-xs text-wire-400 flex items-center gap-1">
              <Clock size={12} /> {post.readTime}
            </span>
            <span className="text-sm font-bold text-wire-black flex items-center gap-1 group-hover:text-wire-600 transition-colors">
              Ler <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </a>
    </FadeIn>
  );
}
