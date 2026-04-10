import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2 } from "lucide-react";
import Placeholder from "@/components/ui/Placeholder";
import FadeIn from "@/components/ui/FadeIn";
import { BLOG_POSTS, getPostBySlug, formatDate } from "@/lib/blog-data";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Blog Ensina Mais`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);
  const fallbackRelated = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);
  const relatedPosts = related.length >= 2 ? related : fallbackRelated;

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Hero */}
      <section className="bg-wire-900 pt-24 pb-32 px-4 sm:px-6 rounded-b-[46px]">
        <div className="max-w-[800px] mx-auto">
          <FadeIn>
            <a href="/blog" className="inline-flex items-center gap-2 text-sm text-wire-500 hover:text-white mb-8 transition-colors">
              <ArrowLeft size={14} /> Voltar para o blog
            </a>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold text-wire-500 uppercase tracking-widest">{post.category}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-wire-400 leading-relaxed mb-8">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-5 text-sm text-wire-500 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/10" />
                <span className="font-bold text-white">{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar size={14} /> {formatDate(post.date)}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={14} /> {post.readTime} de leitura
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Cover image */}
      <section className="px-4 sm:px-6 -mt-20 relative z-10 mb-12">
        <FadeIn>
          <div className="max-w-[960px] mx-auto">
            <Placeholder className="w-full aspect-[16/9] rounded-2xl" label={post.title} />
          </div>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-20">
        <FadeIn>
          <article className="max-w-[720px] mx-auto">
            <div className="prose-article">
              <p className="text-lg text-wire-700 leading-relaxed mb-6">
                Este é um post do blog da Ensina Mais. O conteúdo real virá do WordPress headless via API, permitindo que a equipe editorial publique artigos sem precisar mexer no código.
              </p>
              <p className="text-base text-wire-600 leading-relaxed mb-6">
                {post.excerpt}
              </p>

              <h2 className="text-2xl font-black text-wire-black mt-10 mb-4">Introdução ao tema</h2>
              <p className="text-base text-wire-600 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis nisi quis est tempus faucibus. Vivamus sit amet turpis quis sapien malesuada commodo. Fusce eget sapien quis metus aliquet ultricies.
              </p>
              <p className="text-base text-wire-600 leading-relaxed mb-6">
                Duis eget augue a augue aliquam ultrices. Sed euismod mauris nec est commodo, sit amet facilisis eros sagittis. Integer efficitur mauris vel dolor posuere, ut vehicula enim commodo.
              </p>

              <h2 className="text-2xl font-black text-wire-black mt-10 mb-4">Pontos principais</h2>
              <ul className="flex flex-col gap-2 mb-6">
                {[
                  "Primeiro ponto importante que todo pai deve saber",
                  "Como identificar os sinais nas crianças",
                  "Estratégias práticas para aplicar no dia a dia",
                  "Quando procurar ajuda especializada",
                ].map((item) => (
                  <li key={item} className="text-base text-wire-600 leading-relaxed pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-wire-black before:font-black">
                    {item}
                  </li>
                ))}
              </ul>

              <blockquote className="border-l-4 border-wire-black pl-6 my-8 italic text-xl text-wire-700 leading-relaxed">
                &ldquo;A educação é a arma mais poderosa que você pode usar para mudar o mundo.&rdquo;
              </blockquote>

              <h2 className="text-2xl font-black text-wire-black mt-10 mb-4">Considerações finais</h2>
              <p className="text-base text-wire-600 leading-relaxed mb-6">
                O conteúdo editorial completo será carregado do WordPress. Este é apenas um wireframe demonstrando a estrutura visual do post individual dentro do nosso design system.
              </p>
            </div>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-wire-200 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-wire-400 uppercase tracking-widest mb-2">Compartilhar</p>
                <div className="flex gap-2">
                  {["Fb", "X", "Li", "Wpp"].map((s) => (
                    <button key={s} className="w-9 h-9 rounded-lg bg-wire-100 border border-wire-200 flex items-center justify-center text-xs font-bold text-wire-600 hover:bg-wire-200 transition-colors cursor-pointer">
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <button className="flex items-center gap-2 text-sm font-bold text-wire-600 hover:text-wire-black transition-colors cursor-pointer">
                <Share2 size={16} /> Copiar link
              </button>
            </div>
          </article>
        </FadeIn>
      </section>

      {/* CTA */}
      <FadeIn>
        <section className="px-4 sm:px-6 pb-16 sm:pb-20">
          <div className="max-w-[1200px] mx-auto bg-wire-100 rounded-2xl py-12 sm:py-16 px-6 sm:px-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-wire-black mb-4">
              Conheça nossos cursos
            </h2>
            <p className="text-base sm:text-lg text-wire-500 mb-8 max-w-[460px] mx-auto">
              Quer saber mais sobre como a Ensina Mais pode ajudar seu filho? Agende uma aula experimental gratuita.
            </p>
            <a href="/cursos" className="text-sm sm:text-base font-bold text-white bg-wire-black rounded-xl px-8 py-4 inline-flex items-center gap-2 hover:bg-wire-900 transition-colors">
              Ver todos os cursos <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </FadeIn>

      {/* Related posts */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-wire-black mb-8">
              Leia também
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedPosts.map((p, i) => (
              <FadeIn key={p.slug} delay={i * 0.08}>
                <a
                  href={`/blog/${p.slug}`}
                  className="card-lift group bg-white rounded-2xl border border-wire-200 overflow-hidden hover:shadow-md transition-all block h-full"
                >
                  <Placeholder className="w-full aspect-[16/10] rounded-none" label={p.title} />
                  <div className="p-5">
                    <p className="text-xs font-bold text-wire-400 uppercase tracking-widest mb-2">{p.category} · {formatDate(p.date)}</p>
                    <h3 className="text-base font-extrabold text-wire-black group-hover:text-wire-600 transition-colors leading-snug">{p.title}</h3>
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
