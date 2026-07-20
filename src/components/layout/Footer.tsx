import { Phone, Mail, MapPin } from "lucide-react";
import CloudDivider from "@/components/ui/CloudDivider";

const FOOTER_COLUMNS = [
  {
    title: "Cursos",
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
    links: [
      { label: "Seja um Franqueado", href: "/seja-um-franqueado" },
      { label: "Depoimentos", href: "/depoimentos" },
    ],
  },
  {
    title: "Institucional",
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
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]" aria-hidden>
        <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C17.174 2.097 15.943 2 14.643 2 11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ensinamais.brasil/",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/c/EnsinaMaisBrasil",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]" aria-hidden>
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "#",
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

const SEALS = [
  {
    src: "/images/selos/selo-abf-excelencia.webp",
    alt: "Selo ABF de Excelência em Franchising",
  },
  {
    src: "/images/selos/selo-melhores-franquias.webp",
    alt: "Selo Melhores Franquias do Brasil",
  },
  {
    src: "/images/selos/selo-melhor-microfranquia.webp",
    alt: "Selo Melhor Microfranquia do Brasil",
  },
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

      <div className="relative bg-em-teal-dark overflow-hidden pt-12 sm:pt-16 px-4 sm:px-6">
        {/* Textura confetti bem sutil no fundo escuro */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/3d/pattern-confetti.webp"
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-[0.07] mix-blend-soft-light"
        />

        <div className="relative max-w-[1200px] mx-auto">
          {/* Topo: marca + sociais */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pb-12 border-b border-white/10">
            <div className="max-w-[400px]">
              <div className="flex items-center mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo-ensina-mais.svg"
                  alt="Ensina Mais"
                  className="h-16 sm:h-[72px] w-auto"
                />
              </div>
              <p className="text-sm sm:text-[15px] text-white/65 leading-relaxed">
                Rede de apoio escolar licenciada pela Turma da Mônica. Desenvolvemos crianças e
                adolescentes para o futuro desde 2012.
              </p>
              <div className="mt-7">
                <span className="block text-[11px] uppercase tracking-wider text-white/45 mb-2.5">
                  Uma marca do grupo
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/moveedu/logo-moveedu-white.svg"
                  alt="Grupo MoveEdu"
                  className="h-7 w-auto opacity-85"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <span className="text-[11px] font-bold uppercase tracking-widest text-em-yellow">
                Siga a gente
              </span>
              <div className="flex flex-wrap gap-2.5">
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    {...(s.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="w-10 h-10 rounded-full bg-white/8 text-white/80 flex items-center justify-center transition-all duration-200 hover:bg-em-yellow hover:text-em-dark hover:scale-105"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Colunas de links + contato */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 py-10 sm:py-14">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-bold text-em-yellow mb-4 uppercase tracking-widest">
                  {col.title}
                </h4>
                <div className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <h4 className="text-xs font-bold text-em-yellow mb-4 uppercase tracking-widest">
                Franqueadora
              </h4>
              <div className="flex flex-col gap-3.5">
                {CONTACT.map((item) => (
                  <div key={item.text} className="flex gap-2.5 items-start">
                    <item.icon
                      size={16}
                      strokeWidth={1.8}
                      className="text-em-yellow/80 mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-white/70 leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reconhecimentos */}
          <div className="py-8 border-t border-white/10">
            <h4 className="text-[11px] font-bold text-white/45 mb-4 uppercase tracking-widest">
              Reconhecimentos
            </h4>
            <div className="flex flex-wrap gap-3">
              {SEALS.map((seal) => (
                <div
                  key={seal.src}
                  className="bg-white rounded-2xl px-3 py-2.5 shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={seal.src}
                    alt={seal.alt}
                    className="h-14 sm:h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Barra inferior */}
          <div className="py-5 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
            <span className="text-xs text-white/35 text-center sm:text-left">
              &copy; 2026 Ensina Mais · Turma da Mônica. Grupo MoveEdu. Todos os direitos reservados.
            </span>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 items-center">
              <a
                href="/politica-de-privacidade"
                className="text-xs text-white/50 hover:text-white transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="/termos-de-uso"
                className="text-xs text-white/50 hover:text-white transition-colors"
              >
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
