"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Search, User } from "lucide-react";
import { MAIN_NAV, COURSE_CATEGORIES } from "@/lib/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const isDark = scrolled || megaOpen || activeDropdown;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-300 ${isDark ? "bg-white border-b border-wire-200" : "bg-transparent"}`}
      onMouseLeave={() => { setMegaOpen(false); setActiveDropdown(null); }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo placeholder */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-wire-800 rounded-lg" />
          <span className={`text-lg font-black ${isDark ? "text-wire-black" : "text-white"}`}>Ensina Mais</span>
        </a>

        {/* Nav links */}
        <div className="hidden lg:flex items-center gap-1">
          {MAIN_NAV.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => {
                if (item.label === "Cursos") setMegaOpen(true);
                else if (item.children) setActiveDropdown(item.label);
              }}
              onMouseLeave={() => {
                if (item.label !== "Cursos") setActiveDropdown(null);
              }}
            >
              <a
                href={item.href}
                className={`flex items-center gap-1 text-sm font-semibold px-3 py-2 rounded-lg transition-colors ${isDark ? "text-wire-700 hover:text-wire-black hover:bg-wire-50" : "text-white/80 hover:text-white"}`}
              >
                {item.label}
                {(item.label === "Cursos" || item.children) && <ChevronDown size={14} />}
              </a>

              {/* Simple dropdown */}
              {item.children && activeDropdown === item.label && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-white rounded-xl shadow-lg border border-wire-100 py-2 min-w-[200px]">
                    {item.children.map((c) => (
                      <a key={c.label} href={c.href} className="block px-4 py-2 text-sm text-wire-700 hover:bg-wire-50 hover:text-wire-black">{c.label}</a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <a href="#" className={`hidden lg:flex items-center gap-1.5 text-sm font-semibold px-3 py-2 rounded-lg ${isDark ? "text-wire-600" : "text-white/70"}`}>
            <User size={15} /> Portal
          </a>
          <a href="#lead" className="text-sm font-bold text-white bg-wire-black rounded-lg px-5 py-2.5 hover:bg-wire-900 transition-colors">
            Agendar Aula
          </a>
          <button onClick={() => setMobileOpen(!mobileOpen)} className={`lg:hidden p-2 cursor-pointer ${isDark ? "text-wire-black" : "text-white"}`}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mega menu */}
      {megaOpen && (
        <div className="hidden lg:block bg-white border-t border-wire-100">
          <div className="max-w-[1200px] mx-auto px-6 py-8 grid grid-cols-4 gap-8">
            {COURSE_CATEGORIES.map((cat) => (
              <div key={cat.title}>
                <a href={cat.href} className="block text-sm font-black text-wire-black uppercase tracking-widest mb-3 hover:text-wire-600 transition-colors">
                  {cat.title}
                </a>
                {cat.courses.map((c) => (
                  <a key={c.label} href={c.href} className="block text-sm text-wire-600 hover:text-wire-black py-1.5">{c.label}</a>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-wire-100 max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-4 flex flex-col gap-1">
            {MAIN_NAV.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="text-sm font-semibold text-wire-700 py-3 border-b border-wire-100">{item.label}</a>
            ))}
            <a href="#lead" onClick={() => setMobileOpen(false)} className="mt-4 text-center text-sm font-bold text-white bg-wire-black rounded-lg py-3">Agendar Aula Grátis</a>
          </div>
        </div>
      )}
    </nav>
  );
}
