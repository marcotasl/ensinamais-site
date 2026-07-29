import { ArrowRight } from "lucide-react";
import { formatDate, getBlogPosts } from "@/lib/wordpress";

const TAG_BG = ["bg-em-coral", "bg-em-green", "bg-em-purple"] as const;

export default async function BlogPreview() {
  const posts = (await getBlogPosts()).slice(0, 3);

  return (
    <section className="px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-end justify-between mb-10 sm:mb-12">
          <div className="max-w-[480px]">
            <p className="eyebrow text-em-purple-dark mb-3">Blog</p>
            <h2 className="text-2xl sm:text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1]">
              Conteúdo para <span className="marker-yellow">pais e educadores</span>
            </h2>
          </div>
          <a
            href="/blog"
            className="hidden sm:inline-flex text-sm font-bold text-em-purple-dark border-2 border-em-purple/30 rounded-full px-5 py-2.5 items-center gap-1.5 hover:bg-em-purple hover:text-white hover:border-em-purple transition-colors"
          >
            Ver todos <ArrowRight size={13} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <a key={`/blog/${post.slug}`} href={`/blog/${post.slug}`} className="group block">
              <div className="relative overflow-hidden rounded-3xl mb-4 shadow-[0_14px_36px_-22px_rgba(26,39,68,0.25)] bg-em-dark/5 aspect-[16/10]">
                {post.cover ? (
                  <img src={post.cover} alt={post.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                ) : null}
                {post.category ? (
                  <span className={`absolute top-3 left-3 ${TAG_BG[i % TAG_BG.length]} text-white text-[11px] font-bold uppercase tracking-widest rounded-full px-3 py-1`}>
                    {post.category}
                  </span>
                ) : null}
              </div>
              <p className="text-xs font-semibold text-em-dark-soft/60 uppercase tracking-wide mb-2">{formatDate(post.date)}</p>
              <h3 className="text-base sm:text-lg font-extrabold text-em-dark group-hover:text-em-purple-dark transition-colors leading-snug">
                {post.title}
              </h3>
            </a>
          ))}
        </div>

        <a
          href="/blog"
          className="sm:hidden mt-8 text-sm font-bold text-em-purple-dark border-2 border-em-purple/30 rounded-full px-5 py-3 flex items-center justify-center gap-1.5 hover:bg-em-purple hover:text-white hover:border-em-purple transition-colors"
        >
          Ver todos os posts <ArrowRight size={13} />
        </a>
      </div>
    </section>
  );
}
