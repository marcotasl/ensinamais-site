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
  { label: "Fb", href: "#" },
  { label: "Ig", href: "#" },
  { label: "Yt", href: "#" },
  { label: "Li", href: "#" },
  { label: "Wpp", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative mt-16 sm:mt-20 text-white">
      {/* Entrada Footer (dark section — sólido, sem gradient) */}
      <CloudDivider variant={4} cloudColor="#00695C" height={150} />
      {/* Character pose flutuante na entrada do footer */}
      <img
        src="/images/turma-da-monica/pose-9.webp"
        alt=""
        aria-hidden
        className="hidden lg:block absolute -top-20 right-8 xl:right-16 w-48 xl:w-56 z-30 animate-float pointer-events-none select-none drop-shadow-[0_18px_22px_rgba(26,39,68,0.25)]"
      />

      <div className="bg-em-teal-dark pt-12 sm:pt-16 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Top: Brand + CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center mb-3">
              <img src="/images/logo-ensina-mais.svg" alt="Ensina Mais" className="h-16 w-auto" />
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-[360px]">
              Rede de apoio escolar licenciada pela Turma da Mônica. Desenvolvemos crianças e adolescentes para o futuro desde 2012.
            </p>
            <div className="mt-6">
              <span className="block text-xs text-white/50 mb-2">Uma marca do grupo</span>
              <img src="/images/moveedu/logo-moveedu-white.svg" alt="Grupo MoveEdu" className="h-7 w-auto opacity-80" />
            </div>
          </div>
          <div className="flex gap-2">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Middle: Link columns + Contact */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 py-10 sm:py-12">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold text-white/40 mb-4 uppercase tracking-widest">{col.title}</h4>
              <div className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <a key={link.label} href={link.href} className="text-sm text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold text-white/40 mb-4 uppercase tracking-widest">Franqueadora</h4>
            <div className="flex flex-col gap-3">
              {CONTACT.map((item, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <item.icon size={14} className="text-white/40 mt-0.5 shrink-0" />
                  <span className="text-sm text-white/70 leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reconhecimentos: selos em chip branco (footer é escuro) */}
        <div className="py-8 border-t border-white/10">
          <h4 className="text-xs font-bold text-white/40 mb-4 uppercase tracking-widest">Reconhecimentos</h4>
          <div className="flex flex-wrap gap-3">
            <div className="bg-white rounded-xl p-2.5">
              <img src="/images/selos/selo-abf-excelencia.webp" alt="Selo ABF de Excelência em Franchising" className="h-14 sm:h-16 w-auto object-contain" />
            </div>
            <div className="bg-white rounded-xl p-2.5">
              <img src="/images/selos/selo-melhores-franquias.webp" alt="Selo Melhores Franquias do Brasil" className="h-14 sm:h-16 w-auto object-contain" />
            </div>
            <div className="bg-white rounded-xl p-2.5">
              <img src="/images/selos/selo-melhor-microfranquia.webp" alt="Selo Melhor Microfranquia do Brasil" className="h-14 sm:h-16 w-auto object-contain" />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-xs text-white/30">&copy; 2025 Ensina Mais · Turma da Mônica. Grupo MoveEdu. Todos os direitos reservados.</span>
          <div className="flex gap-4 items-center">
            <a href="/politica-de-privacidade" className="text-xs text-white/50 hover:text-white transition-colors">Política de Privacidade</a>
            <a href="/termos-de-uso" className="text-xs text-white/50 hover:text-white transition-colors">Termos de Uso</a>
            <span className="text-white/20">·</span>
            <a href="https://virtusdesign.com.br/?utm_source=ensinamais&utm_medium=footer-credit&utm_campaign=desenvolvido-por" target="_blank" rel="noopener noreferrer" className="text-xs text-white/50 hover:text-white transition-colors">Desenvolvido por <span className="font-semibold">Virtus Design</span></a>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
