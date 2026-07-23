"use client";

import { useState } from "react";
import { Search, ArrowRight, MapPin, Phone } from "lucide-react";
import Placeholder from "@/components/ui/Placeholder";

const SCHOOLS = [
  { name: "Ensina Mais São José do Rio Preto", address: "Av. Bady Bassitt, 4960", city: "São José do Rio Preto, SP", phone: "(17) 3214-8699" },
  { name: "Ensina Mais Campinas", address: "Rua Barão de Jaguara, 1481", city: "Campinas, SP", phone: "(19) 3232-5500" },
  { name: "Ensina Mais Belo Horizonte", address: "Av. Afonso Pena, 2300", city: "Belo Horizonte, MG", phone: "(31) 3223-4400" },
];

export default function SchoolFinder() {
  const [search, setSearch] = useState("");

  return (
    <section id="escolas" className="px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto bg-em-blue-pale rounded-3xl py-12 sm:py-16 px-5 sm:px-8 lg:px-12 border border-em-blue-light/40 shadow-[0_18px_42px_-22px_rgba(2,136,209,0.2)]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
          <div className="max-w-[480px]">
            <p className="eyebrow text-em-blue-dark mb-3">Nossas Escolas</p>
            <h2 className="text-2xl sm:text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-em-dark mb-3 leading-[1.1]">
              Encontre a escola mais <span className="marker-blue">perto</span> de você
            </h2>
            <p className="text-base sm:text-lg text-em-dark-soft/85">Mais de 100 unidades espalhadas pelo Brasil inteiro.</p>
          </div>

          <div className="w-full lg:max-w-[480px]">
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-em-blue-dark/70" />
              <label htmlFor="school-search" className="sr-only">Cidade ou CEP</label>
              <input
                id="school-search"
                type="text"
                placeholder="Digite sua cidade ou CEP..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full text-base sm:text-lg text-em-dark placeholder:text-em-dark-soft/70 caret-em-dark pl-11 sm:pl-12 pr-28 py-4 sm:py-5 rounded-full border-2 border-em-blue-dark bg-white outline-none focus:border-em-dark focus:ring-2 focus:ring-em-blue-light/60 transition-colors shadow-sm"
              />
              <button type="button" className="absolute right-2 top-1/2 -translate-y-1/2 text-sm font-bold text-em-dark bg-em-blue rounded-full px-5 py-2.5 cursor-pointer hover:bg-em-blue-light transition-colors">
                Buscar
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {SCHOOLS.map((school, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden border border-em-blue-light/35 hover:shadow-card-hover hover:-translate-y-1 transition-all">
              <Placeholder className="w-full h-36 rounded-none" label="Foto da unidade" />
              <div className="p-5">
                <h3 className="text-base font-extrabold text-em-dark mb-1.5 leading-tight">{school.name}</h3>
                <p className="text-sm text-em-dark-soft/80 mb-1 flex items-center gap-1.5"><MapPin size={12} /> {school.address}</p>
                <p className="text-xs text-em-dark-soft/60 mb-3">{school.city}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-em-dark-soft/70 flex items-center gap-1"><Phone size={11} /> {school.phone}</span>
                  <a href="#lead" className="text-sm font-bold text-em-blue-dark flex items-center gap-1 hover:text-em-blue">Agendar <ArrowRight size={12} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/escolas"
            className="text-base font-bold text-em-blue-dark bg-white border-2 border-em-blue/40 rounded-full px-8 py-3.5 inline-flex items-center gap-2 hover:bg-em-blue hover:text-white hover:border-em-blue transition-all"
          >
            Ver todas as escolas <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
