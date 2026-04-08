import { Phone, Mail, MapPin } from "lucide-react";
import { FOOTER_LINKS } from "@/lib/constants";

const CONTACT = [
  { icon: Phone, text: "(17) 3214-8699" },
  { icon: Mail, text: "sac@moveedu.com.br" },
  { icon: MapPin, text: "Av. Bady Bassitt, 4960 — São José do Rio Preto, SP" },
];

export default function Footer() {
  return (
    <footer className="bg-wire-900 pt-14 px-6 mt-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/15 rounded-lg" />
              <span className="text-lg font-black text-white">Ensina Mais</span>
            </div>
            <p className="text-sm text-wire-500 leading-relaxed max-w-[260px] mb-5">
              Rede de apoio escolar licenciada pela Turma da Mônica. Desenvolvemos crianças e adolescentes para o futuro desde 2012.
            </p>
            <div className="flex gap-2">
              {["Fb", "Ig", "Yt", "Wpp"].map((s) => (
                <div key={s} className="w-9 h-9 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center text-xs font-bold text-wire-500 hover:text-white hover:bg-white/15 transition-all cursor-pointer">{s}</div>
              ))}
            </div>
          </div>

          {/* Links */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-bold text-wire-500 mb-4 uppercase tracking-widest">{group.title}</h4>
              {group.links.map((link) => (
                <a key={link.label} href={link.href} className="block text-sm text-wire-400 mb-2.5 hover:text-white transition-colors">{link.label}</a>
              ))}
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

        <div className="py-4 flex justify-between items-center flex-wrap gap-3">
          <span className="text-xs text-wire-600">&copy; 2025 Ensina Mais – Turma da Mônica. Grupo MoveEdu.</span>
          <div className="flex gap-4">
            {["Política de Privacidade", "Termos de Uso"].map((l) => (
              <a key={l} href="#" className="text-xs text-wire-600 hover:text-wire-400 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
