import { Phone, Mail, MapPin } from "lucide-react";

const FOOTER_COLUMNS = [
  {
    title: "Cursos",
    links: [
      { label: "Apoio Escolar", href: "/cursos/apoio-escolar" },
      { label: "Robótica Educacional", href: "/cursos/robotica" },
      { label: "Programação", href: "/cursos/programacao" },
      { label: "Inglês", href: "/cursos/ingles" },
      { label: "Todos os cursos", href: "/cursos" },
    ],
  },
  {
    title: "A Ensina Mais",
    links: [
      { label: "Quem Somos", href: "/sobre" },
      { label: "Metodologia", href: "/sobre/metodologia" },
      { label: "Benefícios", href: "/sobre/beneficios" },
      { label: "Depoimentos", href: "/depoimentos" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Franquia",
    links: [
      { label: "Seja um Franqueado", href: "/franquia" },
      { label: "Modelos de Negócio", href: "/franquia/modelos" },
      { label: "Investimento", href: "/franquia/investimento" },
      { label: "Suporte MoveEdu", href: "/franquia/suporte" },
      { label: "Histórias de Franqueados", href: "/franquia/historias" },
    ],
  },
  {
    title: "Institucional",
    links: [
      { label: "Encontre uma Escola", href: "/escolas" },
      { label: "Fale Conosco", href: "/contato" },
      { label: "Portal do Aluno", href: "#" },
      { label: "Trabalhe Conosco", href: "/contato" },
      { label: "O Grupo MoveEdu", href: "/sobre/moveedu" },
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
    <footer className="bg-wire-900 pt-16 px-6 mt-8">
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-12">
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
          <div className="flex gap-4">
            <a href="/politica-de-privacidade" className="text-xs text-wire-600 hover:text-wire-400 transition-colors">Política de Privacidade</a>
            <a href="/termos-de-uso" className="text-xs text-wire-600 hover:text-wire-400 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
