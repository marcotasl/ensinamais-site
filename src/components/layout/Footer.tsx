import {
  Phone,
  Mail,
  MapPin,
  Star,
  Sparkles,
  Heart,
  Plus,
  Rocket,
  Pencil,
  Sun,
  GraduationCap,
} from "lucide-react";
import CloudDivider from "@/components/ui/CloudDivider";

const FOOTER_COLUMNS = [
  {
    title: "Cursos",
    dot: "bg-em-coral",
    links: [
      { label: "Apoio Escolar", href: "/cursos/apoio-escolar" },
      { label: "Robótica Educacional", href: "/cursos/robotica-ensina" },
      { label: "Programação", href: "/cursos/programacao-ensina" },
      { label: "Inglês", href: "/cursos/ingles-ensina" },
      { label: "Todos os cursos", href: "/cursos" },
    ],
  },
  {
    title: "A Ensina Mais",
    dot: "bg-em-yellow",
    links: [
      { label: "Quem Somos", href: "/sobre-nos" },
      { label: "Conheça a Ensina Mais", href: "/conheca-a-ensinamais" },
      { label: "Nossa História", href: "/nossa-historia" },
      { label: "Metodologia", href: "/metodologia" },
      { label: "App dos Pais", href: "/app-dos-pais/" },
      { label: "Super Aluno", href: "/super-aluno/" },
      { label: "Benefícios", href: "/beneficios" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Franquia",
    dot: "bg-em-blue",
    links: [
      { label: "Seja um Franqueado", href: "/seja-um-franqueado" },
      { label: "Depoimentos", href: "/depoimentos" },
    ],
  },
  {
    title: "Institucional",
    dot: "bg-em-green",
    links: [
      { label: "Encontre uma Escola", href: "/escolas" },
      { label: "Fale Conosco", href: "/fale-conosco" },
      { label: "Trabalhe Conosco", href: "/carreiras" },
      { label: "Portal do Aluno", href: "#" },
    ],
  },
];

const CONTACT = [
  { icon: Phone, text: "(17) 3214-8699" },
  { icon: Mail, text: "sac@moveedu.com.br" },
  { icon: MapPin, text: "Av. Bady Bassitt, 4960 · São José do Rio Preto, SP" },
];

const SOCIALS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/ensinamais.oficial/",
    external: true,
    path: "M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C17.174 2.097 15.943 2 14.643 2 11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ensinamais.brasil/",
    external: true,
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/c/EnsinaMaisBrasil",
    external: true,
    path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    name: "LinkedIn",
    href: "#",
    external: false,
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    name: "WhatsApp",
    href: "#",
    external: false,
    path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
  },
];

const SEALS = [
  { src: "/images/selos/selo-abf-excelencia.webp", alt: "Selo ABF de Excelência em Franchising", tilt: "-rotate-3" },
  { src: "/images/selos/selo-melhores-franquias.webp", alt: "Selo Melhores Franquias do Brasil", tilt: "rotate-2" },
  { src: "/images/selos/selo-melhor-microfranquia.webp", alt: "Selo Melhor Microfranquia do Brasil", tilt: "-rotate-1" },
];

/* Marcas do grupo MoveEdu, mesma ordem/tratamento do footer moveedu.com.br.
   brightness-0 invert força branco pleno nos SVGs coloridos; os .webp já vêm brancos. */
const BRAND_LOGOS = [
  { src: "/images/brands/ensina-mais.webp", alt: "Ensina Mais Turma da Mônica", href: "/", external: false, className: "h-9 sm:h-11 w-auto" },
  { src: "/images/brands/microlins.svg", alt: "Microlins", href: "https://www.microlins.com.br", external: true, className: "h-7 sm:h-9 w-auto brightness-0 invert" },
  { src: "/images/brands/faculdade-microlins.svg", alt: "Faculdade Microlins", href: "https://www.microlins.com.br", external: true, className: "h-7 sm:h-8 w-auto brightness-0 invert" },
  { src: "/images/brands/prepara.svg", alt: "Prepara Cursos", href: "https://www.prepara.com.br", external: true, className: "h-7 sm:h-9 w-auto brightness-0 invert" },
  { src: "/images/brands/faculdade-prepara.svg", alt: "Faculdade Prepara", href: "https://www.prepara.com.br", external: true, className: "h-8 sm:h-10 w-auto brightness-0 invert" },
  { src: "/images/brands/yazigi.webp", alt: "Yázigi", href: "https://www.yazigi.com.br", external: true, className: "h-8 sm:h-10 w-auto" },
];

/* Rabiscos de giz coloridos espalhados no quadro-negro (decorativo, atrás do conteúdo) */
const DOODLES = [
  { Icon: GraduationCap, className: "top-10 left-[5%] w-16 h-16 text-em-yellow/25 -rotate-12" },
  { Icon: Rocket, className: "top-28 right-[16%] w-12 h-12 text-em-coral/25 rotate-12 hidden sm:block" },
  { Icon: Star, className: "top-1/2 left-[2%] w-10 h-10 text-em-blue-light/30 rotate-6 hidden lg:block" },
  { Icon: Sparkles, className: "bottom-36 left-[10%] w-12 h-12 text-em-yellow/20 -rotate-6 hidden sm:block" },
  { Icon: Heart, className: "top-20 left-[43%] w-9 h-9 text-em-coral/25 rotate-12 hidden md:block" },
  { Icon: Plus, className: "bottom-28 right-[7%] w-12 h-12 text-em-green-light/30 -rotate-12 hidden sm:block" },
  { Icon: Pencil, className: "bottom-44 right-[32%] w-10 h-10 text-em-yellow/25 rotate-45 hidden lg:block" },
  { Icon: Sun, className: "top-44 right-[3%] w-14 h-14 text-em-yellow/20 hidden lg:block" },
];

export default function Footer() {
  return (
    <footer className="relative mt-16 sm:mt-20 text-white">
      <CloudDivider variant={4} cloudColor="#00695C" height={150} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/turma-da-monica/pose-9.webp"
        alt=""
        aria-hidden
        className="hidden lg:block absolute -top-20 right-8 xl:right-16 w-48 xl:w-56 z-30 animate-float pointer-events-none select-none drop-shadow-[0_18px_22px_rgba(26,39,68,0.25)]"
      />

      <div className="relative bg-em-teal-dark overflow-hidden pt-14 sm:pt-16 px-4 sm:px-6">
        {/* Camada de rabiscos de giz */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {DOODLES.map(({ Icon, className }, i) => (
            <Icon key={i} strokeWidth={1.6} className={`absolute ${className}`} />
          ))}
        </div>

        <div className="relative max-w-[1200px] mx-auto">
          {/* Topo: recado do quadro + marca + sociais */}
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start pb-12 border-b border-dashed border-white/15">
            <div className="max-w-[440px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo-ensina-mais.svg" alt="Ensina Mais" className="h-16 sm:h-[70px] w-auto mb-5" />
              <h2 className="font-black text-2xl sm:text-[1.75rem] leading-[1.15] tracking-tight">
                Bora <span className="marker-yellow text-white">crescer</span> com a gente
              </h2>
              <p className="mt-3 text-sm sm:text-[15px] text-white/65 leading-relaxed">
                Rede de apoio escolar licenciada pela Turma da Mônica. Desenvolvemos crianças e
                adolescentes para o futuro desde 2012.
              </p>
            </div>

            <div className="lg:justify-self-end">
              <span className="block text-[11px] font-black uppercase tracking-widest text-em-yellow mb-4">
                Cola com a gente
              </span>
              <div className="flex flex-wrap gap-2.5">
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="w-11 h-11 rounded-2xl bg-white/8 text-white/85 flex items-center justify-center transition-all duration-200 hover:bg-em-yellow hover:text-em-dark hover:-rotate-6 hover:scale-105"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[19px] h-[19px]" aria-hidden>
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>

              {/* Reconhecimentos: selos transparentes, na mesma linha da marca do grupo */}
              <span className="block text-[11px] font-black uppercase tracking-widest text-em-yellow mt-8 mb-4">
                Reconhecimentos
              </span>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-5">
                {SEALS.map((seal) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={seal.src}
                    src={seal.src}
                    alt={seal.alt}
                    className="h-16 sm:h-[72px] w-auto object-contain"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Colunas de links + contato */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 py-12 sm:py-14">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="flex items-center gap-2 text-xs font-black text-white mb-4 uppercase tracking-widest">
                  <span className={`w-2 h-2 rounded-sm rotate-45 ${col.dot}`} />
                  {col.title}
                </h4>
                <div className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-sm text-white/65 hover:text-em-yellow hover:translate-x-1 transition-all duration-200 w-fit"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <h4 className="flex items-center gap-2 text-xs font-black text-white mb-4 uppercase tracking-widest">
                <span className="w-2 h-2 rounded-sm rotate-45 bg-em-purple" />
                Franqueadora
              </h4>
              <div className="flex flex-col gap-3.5">
                {CONTACT.map((item) => (
                  <div key={item.text} className="flex gap-2.5 items-start">
                    <item.icon size={16} strokeWidth={1.8} className="text-em-yellow mt-0.5 shrink-0" />
                    <span className="text-sm text-white/65 leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Marcas do grupo MoveEdu */}
          <div className="py-10 border-t border-dashed border-white/15 text-center">
            <span className="block text-[11px] font-black uppercase tracking-widest text-white/45 mb-7">
              Uma marca do grupo MoveEdu
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-10 sm:gap-x-14 gap-y-7">
              {BRAND_LOGOS.map((b) => (
                <a
                  key={b.alt}
                  href={b.href}
                  aria-label={b.alt}
                  {...(b.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.src} alt={b.alt} className={b.className} loading="lazy" />
                </a>
              ))}
            </div>
          </div>

          {/* Barra inferior */}
          <div className="py-6 border-t border-dashed border-white/15 flex flex-col sm:flex-row justify-between items-center gap-3">
            <span className="text-xs text-white/35 text-center sm:text-left">
              &copy; 2026 Ensina Mais · Turma da Mônica. Grupo MoveEdu. Todos os direitos reservados.
            </span>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 items-center">
              <a href="/politica-de-privacidade" className="text-xs text-white/50 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="/termos-de-uso" className="text-xs text-white/50 hover:text-white transition-colors">
                Termos de Uso
              </a>
              <span className="text-white/20 hidden sm:inline">·</span>
              <a
                href="https://virtusdesign.com.br/?utm_source=ensinamais&utm_medium=footer-credit&utm_campaign=desenvolvido-por"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/50 hover:text-white transition-colors"
              >
                Desenvolvido por <span className="font-semibold">Virtus Design</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
