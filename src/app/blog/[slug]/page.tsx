import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock, MessageCircle, Share2 } from "lucide-react";
import type { ComponentType } from "react";
import Placeholder from "@/components/ui/Placeholder";
import FadeIn from "@/components/ui/FadeIn";
import { BLOG_POSTS, getPostBySlug, formatDate } from "@/lib/blog-data";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

// Accent de marca rotativo nos cards de "Leia também"
const RELATED_ACCENTS = ["bg-em-coral", "bg-em-green", "bg-em-blue"] as const;

// Marcas de redes sociais como SVG inline: o build de lucide-react do projeto
// nao expoe mais os glyphs de marca (Facebook/X/Linkedin), so o generico MessageCircle.
type IconProps = { size?: number; strokeWidth?: number };

const FacebookIcon = ({ size = 16, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const XIcon = ({ size = 16, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M4 4l16 16M20 4L4 20" />
  </svg>
);

const LinkedinIcon = ({ size = 16, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const SOCIALS: { label: string; Icon: ComponentType<IconProps> }[] = [
  { label: "Facebook", Icon: FacebookIcon },
  { label: "X", Icon: XIcon },
  { label: "LinkedIn", Icon: LinkedinIcon },
  { label: "WhatsApp", Icon: MessageCircle },
];

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
      <section className="relative bg-em-dark pt-28 pb-36 px-4 sm:px-6 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-12 bg-repeat pointer-events-none"
          style={{ backgroundImage: "url(/images/3d/pattern-dense.webp)", backgroundSize: "520px" }}
        />
        <div className="relative max-w-[800px] mx-auto">
          <FadeIn>
            <a href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-em-yellow mb-8 transition-colors">
              <ArrowLeft size={15} strokeWidth={2.2} /> Voltar para o blog
            </a>

            <p className="eyebrow text-em-yellow mb-4">{post.category}</p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-5 text-sm text-white/70 pt-6 border-t border-white/12">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-em-yellow" />
                <span className="font-bold text-white">{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar size={14} strokeWidth={1.8} /> {formatDate(post.date)}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={14} strokeWidth={1.8} /> {post.readTime} de leitura
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Cover image */}
      <section className="px-4 sm:px-6 -mt-24 relative z-10 mb-12">
        <FadeIn>
          <div className="max-w-[960px] mx-auto">
            <Placeholder className="w-full aspect-[16/9] rounded-3xl shadow-[0_24px_56px_-28px_rgba(26,39,68,0.45)]" label={post.title} />
          </div>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-20">
        <FadeIn>
          <article className="max-w-[720px] mx-auto">
            <div className="prose-article">
              <p className="text-lg text-em-dark-soft leading-relaxed mb-6">
                Este é um post do blog da Ensina Mais. O conteúdo real virá do WordPress headless via API, permitindo que a equipe editorial publique artigos sem precisar mexer no código.
              </p>
              <p className="text-base text-em-dark-soft/85 leading-relaxed mb-6">
                {post.excerpt}
              </p>

              <h2 className="text-2xl font-black text-em-dark mt-10 mb-4">Introdução ao tema</h2>
              <p className="text-base text-em-dark-soft/85 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis nisi quis est tempus faucibus. Vivamus sit amet turpis quis sapien malesuada commodo. Fusce eget sapien quis metus aliquet ultricies.
              </p>
              <p className="text-base text-em-dark-soft/85 leading-relaxed mb-6">
                Duis eget augue a augue aliquam ultrices. Sed euismod mauris nec est commodo, sit amet facilisis eros sagittis. Integer efficitur mauris vel dolor posuere, ut vehicula enim commodo.
              </p>

              <h2 className="text-2xl font-black text-em-dark mt-10 mb-4">Pontos principais</h2>
              <ul className="flex flex-col gap-2 mb-6">
                {[
                  "Primeiro ponto importante que todo pai deve saber",
                  "Como identificar os sinais nas crianças",
                  "Estratégias práticas para aplicar no dia a dia",
                  "Quando procurar ajuda especializada",
                ].map((item) => (
                  <li key={item} className="text-base text-em-dark-soft/85 leading-relaxed pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-em-green-dark before:font-black">
                    {item}
                  </li>
                ))}
              </ul>

              <blockquote className="border-l-4 border-em-yellow pl-6 my-8 italic text-xl text-em-dark leading-relaxed">
                &ldquo;A educação é a arma mais poderosa que você pode usar para mudar o mundo.&rdquo;
              </blockquote>

              <h2 className="text-2xl font-black text-em-dark mt-10 mb-4">Considerações finais</h2>
              <p className="text-base text-em-dark-soft/85 leading-relaxed mb-6">
                O conteúdo editorial completo será carregado do WordPress. Este é apenas um wireframe demonstrando a estrutura visual do post individual dentro do nosso design system.
              </p>
            </div>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-em-dark/10 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-em-dark-soft/55 uppercase tracking-widest mb-2">Compartilhar</p>
                <div className="flex gap-2">
                  {SOCIALS.map((s) => (
                    <button key={s.label} aria-label={`Compartilhar no ${s.label}`} className="w-9 h-9 rounded-full bg-em-purple/10 flex items-center justify-center text-em-purple-dark hover:bg-em-purple hover:text-white transition-colors cursor-pointer">
                      <s.Icon size={16} strokeWidth={1.8} />
                    </button>
                  ))}
                </div>
              </div>
              <button className="flex items-center gap-2 text-sm font-bold text-em-dark-soft hover:text-em-purple-dark transition-colors cursor-pointer">
                <Share2 size={16} strokeWidth={1.8} /> Copiar link
              </button>
            </div>
          </article>
        </FadeIn>
      </section>

      {/* CTA */}
      <FadeIn>
        <section className="px-4 sm:px-6 pb-16 sm:pb-20">
          <div className="relative max-w-[1200px] mx-auto bg-em-green rounded-[2rem] lg:rounded-[2.5rem] py-12 sm:py-16 px-6 sm:px-12 text-center overflow-hidden shadow-[0_24px_56px_-28px_rgba(26,39,68,0.4)]">
            <div
              aria-hidden
              className="absolute inset-0 opacity-15 bg-repeat pointer-events-none"
              style={{ backgroundImage: "url(/images/3d/pattern-confetti.webp)", backgroundSize: "480px" }}
            />
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-black text-em-dark mb-4">
                Conheça nossos cursos
              </h2>
              <p className="text-base sm:text-lg text-em-dark-soft/80 mb-8 max-w-[480px] mx-auto leading-relaxed">
                Quer saber mais sobre como a Ensina Mais pode ajudar seu filho? Agende uma aula experimental gratuita.
              </p>
              <a href="/cursos" className="text-sm sm:text-base font-black text-em-dark bg-em-yellow rounded-full px-8 py-4 inline-flex items-center gap-2 hover:bg-white transition-colors shadow-button">
                Ver todos os cursos <ArrowRight size={16} strokeWidth={2.4} />
              </a>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Related posts */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-em-dark mb-8">
              Leia também
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedPosts.map((p, i) => (
                <a
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="card-lift group bg-white rounded-3xl overflow-hidden shadow-[0_14px_36px_-22px_rgba(26,39,68,0.24)] hover:shadow-[0_24px_52px_-26px_rgba(26,39,68,0.36)] transition-all block h-full"
                >
                  <div className="relative">
                    <Placeholder className="w-full aspect-[16/10] rounded-none" label={p.title} />
                    <span className={`absolute top-3 left-3 ${RELATED_ACCENTS[i % RELATED_ACCENTS.length]} text-white text-[11px] font-bold uppercase tracking-widest rounded-full px-3 py-1`}>
                      {p.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold text-em-dark-soft/55 uppercase tracking-wide mb-2">{formatDate(p.date)}</p>
                    <h3 className="text-base font-extrabold text-em-dark group-hover:text-em-purple-dark transition-colors leading-snug">{p.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
