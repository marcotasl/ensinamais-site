"use client";

import { useState, useMemo } from "react";
import { Search, ArrowRight, Clock, Calendar, Newspaper } from "lucide-react";
import Placeholder from "@/components/ui/Placeholder";
import FadeIn from "@/components/ui/FadeIn";
import CloudDivider from "@/components/ui/CloudDivider";
import { BLOG_POSTS, BLOG_CATEGORIES, formatDate, type BlogPost } from "@/lib/blog-data";

// Cada card de post recebe um accent de marca rotativo (pílula de categoria + hover do título)
const POST_ACCENTS = [
  { tag: "bg-em-coral", hover: "group-hover:text-em-coral-dark" },
  { tag: "bg-em-green", hover: "group-hover:text-em-green-dark" },
  { tag: "bg-em-purple", hover: "group-hover:text-em-purple-dark" },
  { tag: "bg-em-blue", hover: "group-hover:text-em-blue-dark" },
] as const;

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
      <section className="relative bg-em-purple pt-28 pb-24 px-4 sm:px-6 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-12 bg-repeat pointer-events-none"
          style={{ backgroundImage: "url(/images/3d/pattern-dense.webp)", backgroundSize: "520px" }}
        />
        <div className="relative max-w-[1200px] mx-auto text-center">
          <FadeIn>
            <span className="sticker-icon bg-em-yellow text-em-dark mx-auto mb-5">
              <Newspaper size={26} strokeWidth={1.8} />
            </span>
            <p className="eyebrow text-em-yellow mb-3">Blog</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-5 max-w-[760px] mx-auto leading-[1.08]">
              Conteúdo para <span className="marker-yellow">pais e educadores</span>
            </h1>
            <p className="text-base sm:text-lg text-white/85 max-w-[560px] mx-auto leading-relaxed mb-10">
              Dicas de educação, novidades dos cursos e histórias que inspiram quem se preocupa com o futuro das crianças.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="max-w-[640px] mx-auto">
              <div className="relative">
                <Search size={20} strokeWidth={2.4} className="absolute left-5 top-1/2 -translate-y-1/2 text-em-purple-dark pointer-events-none z-10" />
                <input
                  type="text"
                  aria-label="Buscar artigo"
                  placeholder="Buscar artigo..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full text-base pl-14 pr-5 py-5 rounded-full bg-white text-em-dark placeholder:text-em-dark-soft/70 caret-em-dark outline-none shadow-[0_18px_42px_-22px_rgba(26,39,68,0.5)] focus:ring-4 focus:ring-em-yellow/40 transition-all"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CloudDivider variant={3} cloudColor="#5C6BC0" flip height={120} className="mt-[-1px]" />

      {/* Featured post */}
      {!search && activeCategory === "Todos" && (
        <section className="px-4 sm:px-6 pt-4 sm:pt-6 pb-14 sm:pb-16">
          <FadeIn>
            <a
              href={`/blog/${featured.slug}`}
              className="card-lift block max-w-[1200px] mx-auto bg-white rounded-3xl overflow-hidden shadow-[0_18px_42px_-22px_rgba(26,39,68,0.28)] hover:shadow-[0_28px_60px_-26px_rgba(26,39,68,0.38)] transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-0">
                <Placeholder className="w-full h-64 lg:h-full min-h-[340px] rounded-none" label={featured.title} />
                <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[11px] font-black uppercase tracking-widest text-white bg-em-yellow-dark rounded-full px-3 py-1.5">Destaque</span>
                    <span className="text-[11px] font-bold text-em-purple-dark uppercase tracking-widest">{featured.category}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-em-dark mb-4 leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-base text-em-dark-soft/80 leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-em-dark-soft/65 mb-6">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} strokeWidth={1.8} /> {formatDate(featured.date)}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} strokeWidth={1.8} /> {featured.readTime}
                    </div>
                  </div>
                  <span className="text-sm font-black text-em-purple-dark inline-flex items-center gap-1.5">
                    Ler artigo <ArrowRight size={14} strokeWidth={2.4} />
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
                className={`text-sm font-bold px-5 py-2.5 rounded-full transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-em-purple text-white shadow-[0_10px_24px_-14px_rgba(26,39,68,0.5)]"
                    : "bg-white text-em-dark-soft shadow-[0_8px_20px_-16px_rgba(26,39,68,0.3)] hover:text-em-purple-dark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm text-em-dark-soft/70">
              <strong className="text-em-dark">{filtered.length}</strong> {filtered.length === 1 ? "artigo" : "artigos"}
            </span>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl shadow-[0_18px_42px_-26px_rgba(26,39,68,0.28)]">
              <p className="text-base text-em-dark-soft/75 mb-5">Nenhum artigo encontrado</p>
              <button
                onClick={() => { setSearch(""); setActiveCategory("Todos"); }}
                className="text-sm font-black text-em-dark bg-em-yellow rounded-full px-6 py-3 cursor-pointer hover:bg-white transition-colors shadow-button"
              >
                Ver todos os artigos
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
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
  const accent = POST_ACCENTS[index % POST_ACCENTS.length];

  return (
    <FadeIn delay={Math.min(index * 0.05, 0.3)}>
      <a
        href={`/blog/${post.slug}`}
        className="card-lift group bg-white rounded-3xl overflow-hidden shadow-[0_14px_36px_-22px_rgba(26,39,68,0.24)] hover:shadow-[0_24px_52px_-26px_rgba(26,39,68,0.36)] transition-all h-full flex flex-col"
      >
        <div className="relative">
          <Placeholder className="w-full aspect-[16/10] rounded-none" label={post.title} />
          <span className={`absolute top-3 left-3 ${accent.tag} text-white text-[11px] font-bold uppercase tracking-widest rounded-full px-3 py-1`}>
            {post.category}
          </span>
        </div>
        <div className="p-5 sm:p-6 flex flex-col flex-1">
          <p className="text-xs font-semibold text-em-dark-soft/55 uppercase tracking-wide mb-2">
            {formatDate(post.date)}
          </p>
          <h3 className={`text-lg font-extrabold text-em-dark transition-colors leading-snug mb-3 ${accent.hover}`}>
            {post.title}
          </h3>
          <p className="text-sm text-em-dark-soft/75 leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
          <div className="flex items-center justify-between pt-4 border-t border-em-dark/8 mt-auto">
            <span className="text-xs text-em-dark-soft/55 flex items-center gap-1">
              <Clock size={12} strokeWidth={1.8} /> {post.readTime}
            </span>
            <span className="text-sm font-black text-em-dark inline-flex items-center gap-1 group-hover:text-em-purple-dark transition-colors">
              Ler <ArrowRight size={12} strokeWidth={2.4} className="transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </a>
    </FadeIn>
  );
}
