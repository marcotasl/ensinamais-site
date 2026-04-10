"use client";

import { useState, useMemo } from "react";
import { Search, ArrowRight, SlidersHorizontal, X } from "lucide-react";
import Placeholder from "@/components/ui/Placeholder";
import FadeIn from "@/components/ui/FadeIn";
import { CATEGORIES, COURSES, type Course } from "@/lib/courses-data";

const MODALITIES = ["Presencial", "Semi-presencial"];
const AGE_GROUPS = [
  { label: "4 a 6 anos", min: 4, max: 6 },
  { label: "6 a 8 anos", min: 6, max: 8 },
  { label: "8 a 15 anos", min: 8, max: 15 },
];

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
    <main className="min-h-screen bg-[#fafafa]">
      {/* Hero with search */}
      <section className="bg-wire-900 pt-24 pb-20 px-4 sm:px-6 rounded-b-[46px]">
        <div className="max-w-[1200px] mx-auto text-center">
          <FadeIn>
            <p className="text-xs font-bold text-wire-500 uppercase tracking-widest mb-3">Nossos Cursos</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-5 max-w-[700px] mx-auto">
              Encontre o curso ideal para seu filho
            </h1>
            <p className="text-base sm:text-lg text-wire-400 max-w-[560px] mx-auto leading-relaxed mb-10">
              {COURSES.length} cursos em {CATEGORIES.length} áreas de conhecimento para crianças e adolescentes de 4 a 15 anos.
            </p>
          </FadeIn>

          {/* Search */}
          <FadeIn delay={0.15}>
            <div className="max-w-[640px] mx-auto">
              <div className="relative">
                <Search size={20} strokeWidth={2.5} className="absolute left-5 top-1/2 -translate-y-1/2 text-white/70 pointer-events-none z-10" />
                <input
                  type="text"
                  placeholder="Buscar curso (ex: matemática, robótica, games...)"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full text-base pl-14 pr-5 py-5 rounded-2xl border border-white/15 bg-white/10 backdrop-blur text-white placeholder:text-wire-500 outline-none focus:border-white/40 focus:ring-2 focus:ring-white/10 transition-all"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main content: sidebar + results */}
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-[1200px] mx-auto">
          {/* Mobile filter toggle */}
          <div className="lg:hidden mb-6 flex items-center justify-between">
            <button
              onClick={() => setFiltersOpen(true)}
              className="flex items-center gap-2 text-sm font-bold text-wire-black bg-white border border-wire-200 rounded-xl px-5 py-3 cursor-pointer hover:bg-wire-50 transition-colors"
            >
              <SlidersHorizontal size={16} /> Filtros
              {activeCount > 0 && (
                <span className="ml-1 text-xs bg-wire-black text-white rounded-full w-5 h-5 flex items-center justify-center">
                  {activeCount}
                </span>
              )}
            </button>
            <span className="text-sm text-wire-500">
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
              <div className="lg:hidden fixed inset-0 z-[500] bg-black/40" onClick={() => setFiltersOpen(false)}>
                <div
                  className="absolute right-0 top-0 bottom-0 w-[85%] max-w-[340px] bg-white overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between p-5 border-b border-wire-100">
                    <h3 className="text-lg font-black text-wire-black">Filtros</h3>
                    <button onClick={() => setFiltersOpen(false)} className="text-wire-500 hover:text-wire-black cursor-pointer">
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
                <span className="text-sm text-wire-500">
                  <strong className="text-wire-black">{filtered.length}</strong> {filtered.length === 1 ? "curso encontrado" : "cursos encontrados"}
                </span>
                {activeCount > 0 && (
                  <button onClick={clearAll} className="text-sm text-wire-500 hover:text-wire-black cursor-pointer underline">
                    Limpar filtros
                  </button>
                )}
              </div>

              {filtered.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-2xl border border-wire-200">
                  <p className="text-base text-wire-500 mb-4">Nenhum curso encontrado com esses filtros.</p>
                  <button onClick={clearAll} className="text-sm font-bold text-white bg-wire-black rounded-xl px-6 py-3 cursor-pointer hover:bg-wire-900 transition-colors">
                    Limpar filtros
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
    <div className="flex flex-col gap-8">
      {/* Active + clear */}
      {activeCount > 0 && (
        <button
          onClick={clearAll}
          className="text-xs font-bold text-wire-500 hover:text-wire-black underline text-left lg:text-left cursor-pointer"
        >
          Limpar {activeCount} {activeCount === 1 ? "filtro" : "filtros"}
        </button>
      )}

      {/* Categories */}
      <div>
        <h4 className="text-xs font-bold text-wire-500 uppercase tracking-widest mb-4">Categoria</h4>
        <div className="flex flex-col gap-2">
          {CATEGORIES.map((cat) => {
            const count = COURSES.filter((c) => c.categorySlug === cat.slug).length;
            const checked = selectedCategories.includes(cat.slug);
            return (
              <label key={cat.slug} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleCategory(cat.slug)}
                  className="w-4 h-4 rounded border-wire-300 text-wire-black focus:ring-wire-400 cursor-pointer"
                />
                <span className={`text-sm transition-colors ${checked ? "font-bold text-wire-black" : "text-wire-600 group-hover:text-wire-black"}`}>
                  {cat.title}
                </span>
                <span className="text-xs text-wire-400 ml-auto">({count})</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Age */}
      <div>
        <h4 className="text-xs font-bold text-wire-500 uppercase tracking-widest mb-4">Faixa Etária</h4>
        <div className="flex flex-col gap-2">
          {AGE_GROUPS.map((age) => {
            const checked = selectedAges.includes(age.label);
            return (
              <label key={age.label} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleAge(age.label)}
                  className="w-4 h-4 rounded border-wire-300 text-wire-black focus:ring-wire-400 cursor-pointer"
                />
                <span className={`text-sm transition-colors ${checked ? "font-bold text-wire-black" : "text-wire-600 group-hover:text-wire-black"}`}>
                  {age.label}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Modality */}
      <div>
        <h4 className="text-xs font-bold text-wire-500 uppercase tracking-widest mb-4">Modalidade</h4>
        <div className="flex flex-col gap-2">
          {MODALITIES.map((m) => {
            const count = COURSES.filter((c) => c.modality === m).length;
            const checked = selectedModalities.includes(m);
            return (
              <label key={m} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleModality(m)}
                  className="w-4 h-4 rounded border-wire-300 text-wire-black focus:ring-wire-400 cursor-pointer"
                />
                <span className={`text-sm transition-colors ${checked ? "font-bold text-wire-black" : "text-wire-600 group-hover:text-wire-black"}`}>
                  {m}
                </span>
                <span className="text-xs text-wire-400 ml-auto">({count})</span>
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
  return (
    <FadeIn delay={Math.min(index * 0.05, 0.3)}>
      <a
        href={`/cursos/${course.categorySlug}/${course.slug}`}
        className="card-lift group bg-white rounded-2xl border border-wire-200 overflow-hidden hover:shadow-lg transition-all block h-full"
      >
        <Placeholder className="w-full h-40 rounded-none" label={course.title} />
        <div className="p-5 sm:p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-wire-100 flex items-center justify-center">
              <course.icon size={20} className="text-wire-600" />
            </div>
            <div className="min-w-0">
              <h3 className="text-base font-black text-wire-black truncate">{course.title}</h3>
              <span className="text-xs font-semibold text-wire-400">{course.ageRange} · {course.modality}</span>
            </div>
          </div>
          <p className="text-sm text-wire-600 leading-relaxed mb-4 line-clamp-2">{course.desc}</p>
          <div className="flex items-center justify-between pt-4 border-t border-wire-100">
            <span className="text-xs font-semibold text-wire-500">{course.frequency}</span>
            <span className="text-sm font-bold text-wire-black group-hover:text-wire-600 flex items-center gap-1 transition-colors">
              Ver curso <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </a>
    </FadeIn>
  );
}
