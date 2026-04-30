import { Phone, Mail, MapPin } from "lucide-react";

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
  { icon: MapPin, text: "Av. Bady Bassitt, 4960 — São José do Rio Preto, SP" },
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
    <footer className="bg-wire-900 pt-12 sm:pt-16 px-4 sm:px-6 mt-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Top: Brand + CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-white/15 rounded-lg" />
              <span className="text-lg font-black text-white">Ensina Mais</span>
            </div>
            <p className="text-sm text-wire-500 leading-relaxed max-w-[360px]">
              Rede de apoio escolar licenciada pela Turma da Mônica. Desenvolvemos crianças e adolescentes para o futuro desde 2012.
            </p>
          </div>
          <div className="flex gap-2">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} className="w-10 h-10 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center text-xs font-bold text-wire-500 hover:text-white hover:bg-white/15 transition-all">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Middle: Link columns + Contact */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 py-10 sm:py-12">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold text-wire-500 mb-4 uppercase tracking-widest">{col.title}</h4>
              <div className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <a key={link.label} href={link.href} className="text-sm text-wire-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold text-wire-500 mb-4 uppercase tracking-widest">Franqueadora</h4>
            <div className="flex flex-col gap-3">
              {CONTACT.map((item, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <item.icon size={14} className="text-wire-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-wire-400 leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-xs text-wire-600">&copy; 2025 Ensina Mais – Turma da Mônica. Grupo MoveEdu. Todos os direitos reservados.</span>
          <div className="flex gap-4 items-center">
            <a href="/politica-de-privacidade" className="text-xs text-wire-600 hover:text-wire-400 transition-colors">Política de Privacidade</a>
            <a href="/termos-de-uso" className="text-xs text-wire-600 hover:text-wire-400 transition-colors">Termos de Uso</a>
            <span className="text-wire-700">·</span>
            <a href="https://virtusdesign.com.br" target="_blank" rel="noopener noreferrer" className="text-xs text-wire-600 hover:text-wire-400 transition-colors">Desenvolvido por <span className="font-semibold">Virtus Design</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
