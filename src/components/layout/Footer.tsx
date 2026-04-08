import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { FOOTER_LINKS } from "@/lib/constants";

const SOCIAL = [
  { label: "Fb", href: "#" },
  { label: "Ig", href: "#" },
  { label: "Yt", href: "#" },
  { label: "Wpp", href: "#" },
];

const CONTACT = [
  { icon: Phone, text: "(17) 3214-8699" },
  { icon: Mail, text: "sac@moveedu.com.br" },
  { icon: MapPin, text: "Av. Bady Bassitt, 4960 — São José do Rio Preto, SP" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-em-teal-dark to-em-teal pt-14 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 pb-11 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo/logo-branca-nav.png"
                alt="Ensina Mais - Turma da Monica"
                width={160}
                height={48}
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-[13px] text-white/55 leading-relaxed max-w-[280px] mb-5">
              Rede de apoio escolar licenciada pela Turma da Mônica. Desenvolvemos crianças e
              adolescentes para o futuro desde 2012.
            </p>
            <div className="flex gap-2.5">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-[38px] h-[38px] rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-[11px] font-bold text-white/50 hover:bg-white/15 hover:text-em-yellow transition-all duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-extrabold text-white/40 mb-4 uppercase tracking-widest">
                {group.title}
              </h4>
              {group.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm font-semibold text-white/60 mb-3 hover:text-em-yellow transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-xs font-extrabold text-white/40 mb-4 uppercase tracking-widest">
              Franqueadora
            </h4>
            <div className="flex flex-col gap-3">
              {CONTACT.map((item, i) => (
                <div key={i} className="flex gap-2.5 items-start">
                  <item.icon
                    size={15}
                    className="text-white/40 mt-0.5 shrink-0"
                  />
                  <span className="text-[13px] text-white/60 leading-relaxed">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-4 flex justify-between items-center flex-wrap gap-3">
          <span className="text-xs text-white/30">
            &copy; 2025 Ensina Mais – Turma da Mônica. Uma marca do Grupo MoveEdu.
          </span>
          <div className="flex gap-4">
            {["Política de Privacidade", "Termos de Uso"].map((label) => (
              <a
                key={label}
                href="#"
                className="text-xs text-white/30 hover:text-white/60 transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
