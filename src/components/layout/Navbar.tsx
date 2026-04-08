"use client";

import { useState, useEffect } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-400 ease-[cubic-bezier(.22,1,.36,1)] ${
        scrolled
          ? "bg-white/97 backdrop-blur-2xl shadow-[0_1px_20px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-[42px] h-[42px] rounded-[14px] bg-gradient-to-br from-em-green to-em-green-dark flex items-center justify-center shadow-[0_4px_14px_rgba(124,179,66,0.3)]">
            <GraduationCap size={22} color="#fff" strokeWidth={2.5} />
          </div>
          <div>
            <div
              className={`font-black text-lg leading-tight transition-colors duration-400 ${
                scrolled ? "text-em-dark" : "text-white"
              }`}
            >
              Ensina Mais
            </div>
            <div
              className={`text-[9px] font-bold tracking-widest uppercase transition-colors duration-400 ${
                scrolled ? "text-gray-500" : "text-white/70"
              }`}
            >
              Turma da Monica
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-bold transition-colors duration-300 hover:text-em-yellow ${
                scrolled ? "text-em-dark" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#lead"
            className="text-[13px] font-extrabold text-em-dark bg-em-yellow rounded-xl px-5 py-2.5 shadow-[0_4px_14px_rgba(253,216,53,0.25)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(253,216,53,0.4)] transition-all duration-200"
          >
            Agendar aula
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-em-dark" : "text-white"
            }`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-bold text-em-dark py-2 hover:text-em-green transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
