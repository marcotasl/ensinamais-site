"use client";

import { useRef, useState, useEffect } from "react";
import { Menu, X, ChevronDown, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MAIN_NAV, COURSE_CATEGORIES, STUDENT_PORTAL_URL } from "@/lib/navigation";
import { useAdaptiveNavbarTone } from "@/hooks/useAdaptiveNavbarTone";
import LeadCaptureForm from "@/components/forms/LeadCaptureForm";

const COURSE_OPTIONS = COURSE_CATEGORIES.flatMap((category) =>
  category.courses.map((course) => ({
    value: course.href.split("/").filter(Boolean).at(-1) ?? course.href,
    label: course.label,
  })),
);

function externalLinkProps(href: string) {
  return /^https?:\/\//i.test(href)
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};
}

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const backgroundTone = useAdaptiveNavbarTone(navRef);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    if (!scheduleModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setScheduleModalOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [scheduleModalOpen]);

  const handleScheduleClick = () => {
    const formTarget =
      document.getElementById("lead") ??
      document.querySelector<HTMLElement>("[data-primary-form]");

    setMobileOpen(false);

    if (formTarget) {
      formTarget.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    setScheduleModalOpen(true);
  };

  const panelOpen = Boolean(megaOpen || activeDropdown || mobileOpen);
  const useLightText = !panelOpen && backgroundTone === "dark";
  const surfaceClass = panelOpen
    ? "bg-white border-b border-wire-200"
    : scrolled
      ? backgroundTone === "dark"
        ? "bg-em-dark/95 border-b border-white/10 backdrop-blur-md"
        : "bg-white/95 border-b border-wire-200 backdrop-blur-md"
      : "bg-transparent";

  return (
    <>
      <nav
        ref={navRef}
        data-background-tone={backgroundTone}
        className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-300 ${surfaceClass}`}
        onMouseLeave={() => { setMegaOpen(false); setActiveDropdown(null); }}
      >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Ensina Mais">
          <span className="relative block h-14 w-[119px]">
            <Image
              src="/images/logo-ensina-mais.svg"
              alt="Ensina Mais"
              width={156}
              height={56}
              priority
              className="absolute inset-0 h-14 w-auto"
            />
            {useLightText && (
              <>
                <Image
                  src="/images/logo-ensina-mais.svg"
                  alt=""
                  aria-hidden
                  width={156}
                  height={56}
                  className="absolute inset-0 h-14 w-auto invert"
                  style={{ clipPath: "inset(0 38% 55% 0)" }}
                />
                <Image
                  src="/images/logo-ensina-mais.svg"
                  alt=""
                  aria-hidden
                  width={156}
                  height={56}
                  className="absolute inset-0 h-14 w-auto invert"
                  style={{ clipPath: "inset(82% 0 0 0)" }}
                />
              </>
            )}
          </span>
        </Link>

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
                {...externalLinkProps(item.href)}
                className={`flex items-center gap-1 text-sm font-semibold px-3 py-2 rounded-lg transition-colors ${useLightText ? "text-white/85 hover:text-white hover:bg-white/10" : "text-em-dark-soft hover:text-em-dark hover:bg-em-green-pale"}`}
              >
                {item.label}
                {(item.label === "Cursos" || item.children) && <ChevronDown size={14} />}
              </a>

              {/* Simple dropdown */}
              {item.children && activeDropdown === item.label && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-white rounded-xl shadow-lg border border-wire-100 py-2 min-w-[200px]">
                    {item.children.map((c) => (
                      <a key={c.label} href={c.href} {...externalLinkProps(c.href)} className="block px-4 py-2 text-sm text-em-dark-soft hover:bg-em-green-pale hover:text-em-dark">{c.label}</a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <a
            href={STUDENT_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden lg:flex items-center gap-1.5 text-sm font-semibold px-3 py-2 rounded-lg transition-colors ${useLightText ? "text-white/75 hover:text-white" : "text-em-dark-soft hover:text-em-dark"}`}
          >
            <User size={15} /> Portal
          </a>
          <button
            type="button"
            onClick={handleScheduleClick}
            className="text-sm font-bold text-em-dark bg-em-yellow rounded-lg px-5 py-2.5 hover:bg-em-yellow-dark transition-colors shadow-button cursor-pointer"
          >
            Agendar Aula
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className={`lg:hidden p-2 cursor-pointer transition-colors ${useLightText ? "text-white" : "text-em-dark"}`}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mega menu , cada coluna pinta com o pastel da frente, título e
          hover em tom sólido da própria cor pra criar a hierarquia visual */}
      {megaOpen && (
        <div className="hidden lg:block bg-white border-t border-wire-100">
          <div className="max-w-[1200px] mx-auto px-6 py-8 grid grid-cols-4 gap-4">
            {COURSE_CATEGORIES.map((cat) => (
              <div key={cat.title} className={`${cat.bgPale} rounded-2xl p-5`}>
                <a
                  href={cat.href}
                  {...externalLinkProps(cat.href)}
                  className={`block text-sm font-black uppercase tracking-widest mb-3 transition-opacity hover:opacity-70 ${cat.textBrand}`}
                >
                  {cat.title}
                </a>
                {cat.courses.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    {...externalLinkProps(c.href)}
                    className={`block text-sm text-em-dark-soft hover:text-em-dark px-2 py-1.5 rounded-md transition-colors ${cat.hoverBg}`}
                  >
                    {c.label}
                  </a>
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
              <a key={item.label} href={item.href} {...externalLinkProps(item.href)} onClick={() => setMobileOpen(false)} className="text-sm font-semibold text-em-dark-soft py-3 border-b border-wire-100">{item.label}</a>
            ))}
            <a
              href={STUDENT_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 text-sm font-semibold text-em-dark-soft py-3 border-b border-wire-100"
            >
              <User size={15} /> Portal do Aluno
            </a>
            <button
              type="button"
              onClick={handleScheduleClick}
              className="mt-4 text-center text-sm font-bold text-em-dark bg-em-yellow rounded-lg py-3 shadow-button cursor-pointer"
            >
              Agendar Aula Grátis
            </button>
          </div>
        </div>
      )}
      </nav>

      {scheduleModalOpen && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-em-dark/75 backdrop-blur-sm p-3 sm:p-6"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setScheduleModalOpen(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="schedule-modal-title"
            className="relative w-full max-w-[960px] max-h-[92vh] overflow-y-auto rounded-3xl bg-white p-5 sm:p-8 lg:p-10 shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setScheduleModalOpen(false)}
              aria-label="Fechar formulário"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-em-dark/8 text-em-dark hover:bg-em-dark/15 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            <div className="mb-6 pr-12">
              <p className="eyebrow text-em-coral-dark mb-2">Aula experimental</p>
              <h2
                id="schedule-modal-title"
                className="text-2xl sm:text-3xl font-black tracking-tight text-em-dark leading-tight"
              >
                Agende uma aula experimental gratuita
              </h2>
              <p className="mt-2 text-sm sm:text-base text-em-dark-soft/75">
                Escolha o curso e encontre a unidade mais próxima de você.
              </p>
            </div>

            <LeadCaptureForm
              courseOptions={COURSE_OPTIONS}
              campaign="site-ensina-mais-popup"
            />
          </div>
        </div>
      )}
    </>
  );
}
