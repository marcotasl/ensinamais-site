"use client";

import { useState, useMemo } from "react";
import { Search, ArrowRight, SlidersHorizontal, X } from "lucide-react";
import Placeholder from "@/components/ui/Placeholder";
import FadeIn from "@/components/ui/FadeIn";
import LearningPaths from "@/components/sections/LearningPaths";
import { CATEGORIES, COURSES, type Course } from "@/lib/courses-data";

const MODALITIES = ["Presencial", "Semi-presencial"];
const AGE_GROUPS = [
  { label: "4 a 6 anos", min: 4, max: 6 },
  { label: "6 a 8 anos", min: 6, max: 8 },
  { label: "8 a 15 anos", min: 8, max: 15 },
];

// Cor de marca por categoria — cards, badges e ícones herdam o hue do curso
const CATEGORY_STYLES: Record<
  string,
  { badge: string; iconBg: string; accent: string }
> = {
  "apoio-escolar": { badge: "bg-em-blue", iconBg: "bg-em-blue", accent: "text-em-blue-dark" },
  "robotica-ensina": { badge: "bg-em-green", iconBg: "bg-em-green", accent: "text-em-green-dark" },
  "programacao-ensina": { badge: "bg-em-orange", iconBg: "bg-em-orange", accent: "text-em-orange" },
  "ingles-ensina": { badge: "bg-em-coral", iconBg: "bg-em-coral", accent: "text-em-coral-dark" },
};

const FALLBACK_STYLE = CATEGORY_STYLES["apoio-escolar"];

function styleFor(slug: string) {
  return CATEGORY_STYLES[slug] ?? FALLBACK_STYLE;
}

function parseAgeRange(range: string): { min: number; max: number } {
  const match = range.match(/(\d+)\s*a\s*(\d+)/);
  if (!match) return { min: 0, max: 99 };
  return { min: parseInt(match[1]), max: parseInt(match[2]) };
}

export default function CoursesHubClient() {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedModalities, setSelectedModalities] = useState<string[]>([]);
  const [selectedAges, setSelectedAges] = useState<string[]>([]);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    return COURSES.filter((c) => {
      // Search
      if (search.trim()) {
        const q = search.toLowerCase();
        const hits =
          c.title.toLowerCase().includes(q) ||
          c.desc.toLowerCase().includes(q) ||
          c.subtitle.toLowerCase().includes(q);
        if (!hits) return false;
      }
      // Category
      if (selectedCategories.length && !selectedCategories.includes(c.categorySlug)) return false;
      // Modality
      if (selectedModalities.length && !selectedModalities.includes(c.modality)) return false;
      // Age
      if (selectedAges.length) {
        const { min: cMin, max: cMax } = parseAgeRange(c.ageRange);
        const match = selectedAges.some((label) => {
          const group = AGE_GROUPS.find((g) => g.label === label);
          if (!group) return false;
          return cMin < group.max && cMax > group.min;
        });
        if (!match) return false;
      }
      return true;
    });
  }, [search, selectedCategories, selectedModalities, selectedAges]);

  const toggleCategory = (slug: string) =>
    setSelectedCategories((p) => (p.includes(slug) ? p.filter((x) => x !== slug) : [...p, slug]));
  const toggleModality = (m: string) =>
    setSelectedModalities((p) => (p.includes(m) ? p.filter((x) => x !== m) : [...p, m]));
  const toggleAge = (a: string) =>
    setSelectedAges((p) => (p.includes(a) ? p.filter((x) => x !== a) : [...p, a]));

  const clearAll = () => {
    setSearch("");
    setSelectedCategories([]);
    setSelectedModalities([]);
    setSelectedAges([]);
  };

  const activeCount = selectedCategories.length + selectedModalities.length + selectedAges.length;

  return (
    <main className="min-h-screen bg-[#fafafa] overflow-x-clip">
      {/* Hero with search */}
      <section className="relative bg-em-dark pt-28 pb-24 px-4 sm:px-6 rounded-b-[46px] overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-15 bg-repeat pointer-events-none"
          style={{ backgroundImage: "url(/images/3d/pattern-dense.webp)", backgroundSize: "520px" }}
        />
        <div className="relative max-w-[1200px] mx-auto text-center">
          <FadeIn>
            <p className="eyebrow text-em-yellow mb-4">Nossos Cursos</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-5 max-w-[720px] mx-auto leading-[1.05]">
              Encontre o curso ideal para o <span className="marker-yellow">seu filho</span>
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-[580px] mx-auto leading-relaxed mb-10">
              {COURSES.length} cursos em {CATEGORIES.length} áreas de conhecimento, com trilhas e combos para diferentes objetivos da família.
            </p>
          </FadeIn>

          {/* Search */}
          <FadeIn delay={0.15}>
            <div className="max-w-[640px] mx-auto">
              <div className="relative">
                <Search size={20} strokeWidth={2.4} className="absolute left-5 top-1/2 -translate-y-1/2 text-white/70 pointer-events-none z-10" />
                <input
                  type="text"
                  placeholder="Buscar curso (ex: matemática, robótica, games...)"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full text-base pl-14 pr-5 py-5 rounded-2xl border border-white/15 bg-white/10 backdrop-blur text-white placeholder:text-white/50 outline-none focus:border-em-yellow/60 focus:ring-2 focus:ring-em-yellow/20 transition-all"
                />
              </div>
            </div>
          </FadeIn>

          {/* Category quick chips */}
          <FadeIn delay={0.22}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
              {CATEGORIES.map((cat) => {
                const checked = selectedCategories.includes(cat.slug);
                const s = styleFor(cat.slug);
                return (
                  <button
                    key={cat.slug}
                    onClick={() => toggleCategory(cat.slug)}
                    className={`text-xs sm:text-sm font-black rounded-full px-4 py-2 transition-colors cursor-pointer ${
                      checked
                        ? `${s.badge} text-white shadow-[0_8px_18px_-12px_rgba(0,0,0,0.5)]`
                        : "bg-white/10 text-white/85 hover:bg-white/20"
                    }`}
                  >
                    {cat.title}
                  </button>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      <LearningPaths leadHref="/fale-conosco" className="pt-14 sm:pt-16 lg:pt-20" />

      {/* Main content: sidebar + results */}
      <section id="catalogo" className="px-4 sm:px-6 pt-14 sm:pt-20 pb-12 sm:pb-16">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="mb-10 sm:mb-12 max-w-[680px]">
              <p className="eyebrow text-em-blue-dark mb-3">Catálogo completo</p>
              <h2 className="text-2xl sm:text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1]">
                Todos os cursos em um <span className="marker-blue">só lugar</span>
              </h2>
            </div>
          </FadeIn>

          {/* Mobile filter toggle */}
          <div className="lg:hidden mb-6 flex items-center justify-between">
            <button
              onClick={() => setFiltersOpen(true)}
              className="flex items-center gap-2 text-sm font-black text-em-dark bg-white rounded-full px-5 py-3 cursor-pointer hover:bg-em-blue-pale transition-colors shadow-[0_12px_28px_-18px_rgba(26,39,68,0.4)]"
            >
              <SlidersHorizontal size={16} strokeWidth={1.8} /> Filtros
              {activeCount > 0 && (
                <span className="ml-1 text-xs bg-em-blue text-white rounded-full w-5 h-5 flex items-center justify-center">
                  {activeCount}
                </span>
              )}
            </button>
            <span className="text-sm font-semibold text-em-dark-soft/70">
              {filtered.length} {filtered.length === 1 ? "curso" : "cursos"}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
            {/* Sidebar — Desktop */}
            <aside className="hidden lg:block">
              <FilterSidebar
                selectedCategories={selectedCategories}
                selectedModalities={selectedModalities}
                selectedAges={selectedAges}
                toggleCategory={toggleCategory}
                toggleModality={toggleModality}
                toggleAge={toggleAge}
                clearAll={clearAll}
                activeCount={activeCount}
              />
            </aside>

            {/* Sidebar — Mobile drawer */}
            {filtersOpen && (
              <div className="lg:hidden fixed inset-0 z-[500] bg-em-dark/50 backdrop-blur-sm" onClick={() => setFiltersOpen(false)}>
                <div
                  className="absolute right-0 top-0 bottom-0 w-[85%] max-w-[340px] bg-white overflow-y-auto rounded-l-3xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between p-5 border-b border-em-blue-pale">
                    <h3 className="text-lg font-black text-em-dark">Filtros</h3>
                    <button onClick={() => setFiltersOpen(false)} className="text-em-dark-soft/60 hover:text-em-dark cursor-pointer">
                      <X size={20} />
                    </button>
                  </div>
                  <div className="p-5">
                    <FilterSidebar
                      selectedCategories={selectedCategories}
                      selectedModalities={selectedModalities}
                      selectedAges={selectedAges}
                      toggleCategory={toggleCategory}
                      toggleModality={toggleModality}
                      toggleAge={toggleAge}
                      clearAll={clearAll}
                      activeCount={activeCount}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Results */}
            <div>
              <div className="hidden lg:flex items-center justify-between mb-6">
                <span className="text-sm text-em-dark-soft/70">
                  <strong className="text-em-dark font-black">{filtered.length}</strong> {filtered.length === 1 ? "curso encontrado" : "cursos encontrados"}
                </span>
                {activeCount > 0 && (
                  <button onClick={clearAll} className="text-sm font-bold text-em-coral-dark hover:text-em-coral cursor-pointer underline">
                    Limpar filtros
                  </button>
                )}
              </div>

              {filtered.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-3xl shadow-[0_18px_42px_-22px_rgba(26,39,68,0.24)]">
                  <p className="text-base text-em-dark-soft/70 mb-5">Nenhum curso encontrado com esses filtros</p>
                  <button onClick={clearAll} className="text-sm font-black text-em-dark bg-em-yellow rounded-full px-6 py-3 cursor-pointer hover:bg-white transition-colors shadow-button">
                    Limpar filtros
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
                  {filtered.map((course, i) => (
                    <CourseCard key={`${course.categorySlug}-${course.slug}`} course={course} index={i} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// -----------------------------------------------------------------------------
// FilterSidebar
// -----------------------------------------------------------------------------

interface FilterSidebarProps {
  selectedCategories: string[];
  selectedModalities: string[];
  selectedAges: string[];
  toggleCategory: (slug: string) => void;
  toggleModality: (m: string) => void;
  toggleAge: (a: string) => void;
  clearAll: () => void;
  activeCount: number;
}

function FilterSidebar({
  selectedCategories,
  selectedModalities,
  selectedAges,
  toggleCategory,
  toggleModality,
  toggleAge,
  clearAll,
  activeCount,
}: FilterSidebarProps) {
  return (
    <div className="flex flex-col gap-8 lg:bg-white lg:rounded-3xl lg:p-7 lg:shadow-[0_18px_42px_-22px_rgba(26,39,68,0.18)]">
      {/* Active + clear */}
      {activeCount > 0 && (
        <button
          onClick={clearAll}
          className="text-xs font-bold text-em-coral-dark hover:text-em-coral underline text-left cursor-pointer"
        >
          Limpar {activeCount} {activeCount === 1 ? "filtro" : "filtros"}
        </button>
      )}

      {/* Categories */}
      <div>
        <h4 className="eyebrow text-em-dark-soft/60 mb-4 text-xs">Categoria</h4>
        <div className="flex flex-col gap-2.5">
          {CATEGORIES.map((cat) => {
            const count = COURSES.filter((c) => c.categorySlug === cat.slug).length;
            const checked = selectedCategories.includes(cat.slug);
            const s = styleFor(cat.slug);
            return (
              <label key={cat.slug} className="flex items-center gap-3 cursor-pointer group">
                <span
                  className={`flex items-center justify-center w-5 h-5 rounded-md shrink-0 transition-colors ${
                    checked ? `${s.badge} text-white` : "bg-em-blue-pale/60 group-hover:bg-em-blue-pale"
                  }`}
                >
                  {checked && (
                    <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5">
                      <path d="M4 10l4 4 8-9" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                <input type="checkbox" checked={checked} onChange={() => toggleCategory(cat.slug)} className="sr-only" />
                <span className={`text-sm transition-colors ${checked ? "font-black text-em-dark" : "font-semibold text-em-dark-soft/80 group-hover:text-em-dark"}`}>
                  {cat.title}
                </span>
                <span className="text-xs font-semibold text-em-dark-soft/45 ml-auto">{count}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Age */}
      <div>
        <h4 className="eyebrow text-em-dark-soft/60 mb-4 text-xs">Faixa Etária</h4>
        <div className="flex flex-col gap-2.5">
          {AGE_GROUPS.map((age) => {
            const checked = selectedAges.includes(age.label);
            return (
              <label key={age.label} className="flex items-center gap-3 cursor-pointer group">
                <span
                  className={`flex items-center justify-center w-5 h-5 rounded-md shrink-0 transition-colors ${
                    checked ? "bg-em-green text-white" : "bg-em-green-pale/70 group-hover:bg-em-green-pale"
                  }`}
                >
                  {checked && (
                    <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5">
                      <path d="M4 10l4 4 8-9" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                <input type="checkbox" checked={checked} onChange={() => toggleAge(age.label)} className="sr-only" />
                <span className={`text-sm transition-colors ${checked ? "font-black text-em-dark" : "font-semibold text-em-dark-soft/80 group-hover:text-em-dark"}`}>
                  {age.label}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Modality */}
      <div>
        <h4 className="eyebrow text-em-dark-soft/60 mb-4 text-xs">Modalidade</h4>
        <div className="flex flex-col gap-2.5">
          {MODALITIES.map((m) => {
            const count = COURSES.filter((c) => c.modality === m).length;
            const checked = selectedModalities.includes(m);
            return (
              <label key={m} className="flex items-center gap-3 cursor-pointer group">
                <span
                  className={`flex items-center justify-center w-5 h-5 rounded-md shrink-0 transition-colors ${
                    checked ? "bg-em-coral text-white" : "bg-em-coral-pale/70 group-hover:bg-em-coral-pale"
                  }`}
                >
                  {checked && (
                    <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5">
                      <path d="M4 10l4 4 8-9" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                <input type="checkbox" checked={checked} onChange={() => toggleModality(m)} className="sr-only" />
                <span className={`text-sm transition-colors ${checked ? "font-black text-em-dark" : "font-semibold text-em-dark-soft/80 group-hover:text-em-dark"}`}>
                  {m}
                </span>
                <span className="text-xs font-semibold text-em-dark-soft/45 ml-auto">{count}</span>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// CourseCard
// -----------------------------------------------------------------------------

function CourseCard({ course, index }: { course: Course; index: number }) {
  const s = styleFor(course.categorySlug);
  return (
    <FadeIn delay={Math.min(index * 0.05, 0.3)}>
      <a
        href={`/cursos/${course.categorySlug}/${course.slug}`}
        className="card-lift group bg-white rounded-3xl overflow-hidden shadow-[0_18px_42px_-22px_rgba(26,39,68,0.24)] hover:shadow-[0_24px_52px_-22px_rgba(26,39,68,0.32)] transition-all block h-full"
      >
        <div className="relative">
          <Placeholder className="w-full h-40 rounded-none" label={course.title} />
          <span className={`absolute top-3 left-3 text-[11px] font-black uppercase tracking-widest text-white ${s.badge} rounded-full px-3 py-1.5 shadow-[0_8px_18px_-12px_rgba(26,39,68,0.4)]`}>
            {course.ageRange}
          </span>
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className={`sticker-icon ${s.iconBg} text-white shrink-0`} style={{ width: 44, height: 44 }}>
              <course.icon size={22} strokeWidth={1.8} />
            </span>
            <div className="min-w-0">
              <h3 className="text-base font-black text-em-dark truncate">{course.title}</h3>
              <span className={`text-xs font-bold ${s.accent}`}>{course.modality}</span>
            </div>
          </div>
          <p className="text-sm text-em-dark-soft/75 leading-relaxed mb-4 line-clamp-2">{course.desc}</p>
          <div className="flex items-center justify-between pt-4 border-t border-em-blue-pale/70">
            <span className="text-xs font-bold text-em-dark-soft/60">{course.frequency}</span>
            <span className="text-sm font-black text-em-dark inline-flex items-center gap-1.5">
              Ver curso
              <span className={`${s.iconBg} text-white rounded-full w-6 h-6 inline-flex items-center justify-center group-hover:translate-x-0.5 transition-transform`}>
                <ArrowRight size={13} strokeWidth={2.4} />
              </span>
            </span>
          </div>
        </div>
      </a>
    </FadeIn>
  );
}
