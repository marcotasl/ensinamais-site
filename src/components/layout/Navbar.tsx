"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  BookOpen,
  Cpu,
  Monitor,
  Globe,
  ExternalLink,
  User,
} from "lucide-react";
import { MAIN_NAV, COURSE_CATEGORIES } from "@/lib/navigation";

const CATEGORY_ICONS = { BookOpen, Cpu, Monitor, Globe } as Record<
  string,
  typeof BookOpen
>;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const megaTimeout = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fechar mega menu ao scrollar
  useEffect(() => {
    if (megaOpen || activeDropdown) {
      setMegaOpen(false);
      setActiveDropdown(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrolled]);

  const handleMegaEnter = () => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setMegaOpen(true);
    setActiveDropdown(null);
  };

  const handleMegaLeave = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 150);
  };

  const handleDropdownEnter = (label: string) => {
    setActiveDropdown(label);
    setMegaOpen(false);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const isDark = scrolled || megaOpen || activeDropdown;
  const textColor = isDark ? "text-em-dark" : "text-white";
  const hoverColor = "hover:text-em-green";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-300 ${
        isDark
          ? "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            <Image
              src={
                isDark
                  ? "/images/logo/logo-preta-nav.png"
                  : "/images/logo/logo-branca-nav.png"
              }
              alt="Ensina Mais - Turma da Monica"
              width={160}
              height={48}
              priority
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {MAIN_NAV.map((item) => {
              if (item.label === "Cursos") {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={handleMegaEnter}
                    onMouseLeave={handleMegaLeave}
                  >
                    <a
                      href={item.href}
                      className={`flex items-center gap-1 text-sm font-bold px-3 py-2 rounded-lg transition-colors duration-200 ${textColor} ${hoverColor}`}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}
                      />
                    </a>
                  </div>
                );
              }

              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleDropdownEnter(item.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <a
                      href={item.href}
                      className={`flex items-center gap-1 text-sm font-bold px-3 py-2 rounded-lg transition-colors duration-200 ${textColor} ${hoverColor}`}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    </a>

                    {/* Simple dropdown */}
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 pt-2">
                        <div className="bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-gray-100 py-2 min-w-[220px]">
                          {item.children.map((child) => (
                            <a
                              key={child.label}
                              href={child.href}
                              className="block px-4 py-2.5 text-sm font-semibold text-em-dark hover:bg-em-green-pale hover:text-em-green transition-colors"
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-bold px-3 py-2 rounded-lg transition-colors duration-200 ${textColor} ${hoverColor}`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right side CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://franquias.moveedu.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs font-bold px-3 py-2 rounded-lg transition-colors duration-200 flex items-center gap-1.5 ${
                isDark
                  ? "text-em-purple hover:text-em-purple-dark"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Seja um Franqueado <ExternalLink size={11} />
            </a>

            <a
              href="#"
              className={`text-xs font-bold px-3 py-2 rounded-lg border transition-colors duration-200 flex items-center gap-1.5 ${
                isDark
                  ? "text-em-dark border-gray-200 hover:bg-gray-50"
                  : "text-white border-white/30 hover:bg-white/10"
              }`}
            >
              <User size={13} /> Portal do Aluno
            </a>

            <a
              href="#lead"
              className="text-[13px] font-extrabold text-em-dark bg-em-yellow rounded-xl px-5 py-2.5 shadow-[0_4px_14px_rgba(253,216,53,0.25)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(253,216,53,0.4)] transition-all duration-200"
            >
              Agendar aula
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors cursor-pointer ${
              isDark ? "text-em-dark" : "text-white"
            }`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mega Menu — Cursos */}
      {megaOpen && (
        <div
          className="hidden lg:block bg-white border-t border-gray-100 shadow-[0_12px_40px_rgba(0,0,0,0.1)]"
          onMouseEnter={handleMegaEnter}
          onMouseLeave={handleMegaLeave}
        >
          <div className="max-w-[1200px] mx-auto px-6 py-8">
            <div className="grid grid-cols-4 gap-8">
              {COURSE_CATEGORIES.map((cat) => {
                const Icon = CATEGORY_ICONS[cat.icon] || BookOpen;
                return (
                  <div key={cat.title}>
                    {/* Category header */}
                    <div className="flex items-center gap-2.5 mb-4 pb-3 border-b-2" style={{ borderColor: cat.color }}>
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center"
                        style={{ background: `${cat.color}15` }}
                      >
                        <Icon size={18} style={{ color: cat.color }} />
                      </div>
                      <span className="text-sm font-extrabold text-em-dark">
                        {cat.title}
                      </span>
                    </div>

                    {/* Course links */}
                    <div className="flex flex-col gap-1">
                      {cat.courses.map((course) => (
                        <a
                          key={course.label}
                          href={course.href}
                          className="text-[13px] font-medium text-gray-600 hover:text-em-dark hover:bg-gray-50 px-2 py-2 rounded-lg transition-colors"
                        >
                          {course.label}
                        </a>
                      ))}
                    </div>

                    {/* Ver todos */}
                    <a
                      href={`/cursos/${cat.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="inline-flex items-center gap-1 text-xs font-bold mt-3 px-2 py-1.5 rounded-lg transition-colors"
                      style={{ color: cat.color }}
                    >
                      Ver todos →
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <MobileMenu onClose={() => setMobileOpen(false)} />
      )}
    </nav>
  );
}

/* ═══ Mobile Menu ═══ */
function MobileMenu({ onClose }: { onClose: () => void }) {
  const [expandedCursos, setExpandedCursos] = useState(false);
  const [expandedSobre, setExpandedSobre] = useState(false);

  return (
    <div className="lg:hidden fixed inset-0 top-[72px] bg-white z-[199] overflow-y-auto">
      <div className="px-6 py-4">
        {/* Logo */}
        <div className="pb-4 border-b border-gray-100 mb-2">
          <Image
            src="/images/logo/logo-preta-nav.png"
            alt="Ensina Mais"
            width={140}
            height={42}
            className="h-9 w-auto"
          />
        </div>

        {/* Cursos (expandable) */}
        <div className="border-b border-gray-100">
          <button
            onClick={() => setExpandedCursos(!expandedCursos)}
            className="flex items-center justify-between w-full py-3.5 text-sm font-bold text-em-dark cursor-pointer"
          >
            Cursos
            <ChevronDown
              size={16}
              className={`transition-transform ${expandedCursos ? "rotate-180" : ""}`}
            />
          </button>
          {expandedCursos && (
            <div className="pb-3 pl-2">
              {COURSE_CATEGORIES.map((cat) => (
                <div key={cat.title} className="mb-3">
                  <div
                    className="text-xs font-extrabold uppercase tracking-wide mb-1.5 px-2"
                    style={{ color: cat.color }}
                  >
                    {cat.title}
                  </div>
                  {cat.courses.map((course) => (
                    <a
                      key={course.label}
                      href={course.href}
                      onClick={onClose}
                      className="block text-[13px] font-medium text-gray-600 py-2 px-2 rounded-lg hover:bg-gray-50"
                    >
                      {course.label}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Escolas */}
        <a
          href="/escolas"
          onClick={onClose}
          className="block py-3.5 text-sm font-bold text-em-dark border-b border-gray-100"
        >
          Escolas
        </a>

        {/* Sobre Nós (expandable) */}
        <div className="border-b border-gray-100">
          <button
            onClick={() => setExpandedSobre(!expandedSobre)}
            className="flex items-center justify-between w-full py-3.5 text-sm font-bold text-em-dark cursor-pointer"
          >
            Sobre Nos
            <ChevronDown
              size={16}
              className={`transition-transform ${expandedSobre ? "rotate-180" : ""}`}
            />
          </button>
          {expandedSobre && (
            <div className="pb-3 pl-2">
              {MAIN_NAV.find((n) => n.label === "Sobre Nos")?.children?.map((child) => (
                <a
                  key={child.label}
                  href={child.href}
                  onClick={onClose}
                  className="block text-[13px] font-medium text-gray-600 py-2 px-2 rounded-lg hover:bg-gray-50"
                >
                  {child.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Blog */}
        <a
          href="/blog"
          onClick={onClose}
          className="block py-3.5 text-sm font-bold text-em-dark border-b border-gray-100"
        >
          Blog
        </a>

        {/* Fale Conosco */}
        <a
          href="/contato"
          onClick={onClose}
          className="block py-3.5 text-sm font-bold text-em-dark border-b border-gray-100"
        >
          Fale Conosco
        </a>

        {/* CTAs mobile */}
        <div className="mt-6 flex flex-col gap-3">
          <a
            href="#lead"
            onClick={onClose}
            className="text-center text-sm font-extrabold text-em-dark bg-em-yellow rounded-xl px-5 py-3.5 shadow-[0_4px_14px_rgba(253,216,53,0.25)]"
          >
            Agendar aula gratis
          </a>
          <a
            href="#"
            className="text-center text-sm font-bold text-em-dark border-2 border-gray-200 rounded-xl px-5 py-3 flex items-center justify-center gap-2"
          >
            <User size={15} /> Portal do Aluno
          </a>
          <a
            href="https://franquias.moveedu.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-sm font-bold text-em-purple rounded-xl px-5 py-3 flex items-center justify-center gap-1.5"
          >
            Seja um Franqueado <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
