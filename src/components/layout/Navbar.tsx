"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
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
        <a href="#" className="flex items-center">
          <Image
            src={scrolled ? "/images/logo/logo-preta-nav.png" : "/images/logo/logo-branca-nav.png"}
            alt="Ensina Mais - Turma da Monica"
            width={160}
            height={48}
            priority
            className="h-10 w-auto object-contain transition-opacity duration-300"
          />
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
            className={`lg:hidden p-2 rounded-lg transition-colors cursor-pointer ${
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
            {/* Logo no mobile menu */}
            <div className="pb-3 border-b border-gray-100 mb-1">
              <Image
                src="/images/logo/logo-preta-nav.png"
                alt="Ensina Mais - Turma da Monica"
                width={140}
                height={42}
                className="h-9 w-auto object-contain"
              />
            </div>
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
