"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Search, ArrowRight, Phone } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";

const FEATURED_SCHOOLS = [
  {
    name: "Ensina Mais São José do Rio Preto",
    address: "Av. Bady Bassitt, 4960 — Boa Vista",
    city: "São José do Rio Preto, SP",
    phone: "(17) 3214-8699",
    courses: ["Apoio Escolar", "Robótica", "Programação", "Inglês"],
    img: "/images/schools/fachada-1.jpg",
  },
  {
    name: "Ensina Mais Campinas",
    address: "Rua Barão de Jaguara, 1481 — Centro",
    city: "Campinas, SP",
    phone: "(19) 3232-5500",
    courses: ["Apoio Escolar", "Robótica", "Programação"],
    img: "/images/schools/fachada-2.jpg",
  },
  {
    name: "Ensina Mais Belo Horizonte",
    address: "Av. Afonso Pena, 2300 — Funcionários",
    city: "Belo Horizonte, MG",
    phone: "(31) 3223-4400",
    courses: ["Apoio Escolar", "Robótica", "Inglês"],
    img: "/images/schools/recepcao.jpg",
  },
];

const COURSE_COLORS: Record<string, string> = {
  "Apoio Escolar": "#039BE5",
  "Robótica": "#7CB342",
  "Programação": "#FF9800",
  "Inglês": "#EF5350",
};

export default function SchoolFinder() {
  const [search, setSearch] = useState("");

  return (
    <section id="escolas" className="bg-gray-50 py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-em-teal/[0.09] text-em-teal">
              <MapPin size={13} /> Nossas Escolas
            </Badge>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-em-dark mb-4">
              Encontre a escola mais perto de você
            </h2>
            <p className="text-lg text-gray-500 max-w-[520px] mx-auto">
              Mais de 100 unidades espalhadas pelo Brasil. Agende uma aula
              experimental gratuita na unidade da sua cidade.
            </p>
          </div>
        </FadeIn>

        {/* Search bar */}
        <FadeIn delay={0.1}>
          <div className="max-w-[600px] mx-auto mb-14">
            <div className="relative">
              <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Digite sua cidade ou CEP..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full text-base font-medium pl-14 pr-36 py-5 rounded-2xl border-2 border-gray-200 bg-white outline-none transition-all duration-200 focus:border-em-green focus:ring-4 focus:ring-em-green/10 shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-extrabold text-white bg-em-green rounded-xl px-6 py-3 hover:bg-em-green-dark transition-colors cursor-pointer">
                Buscar
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Featured schools */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_SCHOOLS.map((school, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] h-full flex flex-col">
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={school.img}
                    alt={school.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-xs font-bold text-white/90 flex items-center gap-1">
                      <MapPin size={12} /> {school.city}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-extrabold text-em-dark mb-1">
                    {school.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{school.address}</p>

                  {/* Courses tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {school.courses.map((c) => (
                      <span
                        key={c}
                        className="text-[11px] font-bold rounded-full px-2.5 py-1"
                        style={{
                          color: COURSE_COLORS[c],
                          background: `${COURSE_COLORS[c]}12`,
                        }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-sm text-gray-400 flex items-center gap-1.5">
                      <Phone size={13} /> {school.phone}
                    </span>
                    <a
                      href="#lead"
                      className="text-sm font-bold text-em-green hover:text-em-green-dark transition-colors flex items-center gap-1"
                    >
                      Agendar <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center mt-10">
            <a
              href="/escolas"
              className="text-base font-extrabold text-em-teal border-2 border-em-teal rounded-2xl px-8 py-4 inline-flex items-center gap-2 hover:bg-em-teal hover:text-white transition-all duration-250"
            >
              Ver todas as escolas <ArrowRight size={16} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
