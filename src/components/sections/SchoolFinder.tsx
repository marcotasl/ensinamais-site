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
    <section id="escolas" className="px-6">
      <div className="max-w-[1200px] mx-auto bg-wire-50 rounded-2xl py-10 sm:py-16 px-4 sm:px-6 lg:px-12 border border-wire-200">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
          <div className="max-w-[480px]">
            <p className="text-xs font-bold text-wire-400 uppercase tracking-widest mb-2">Nossas Escolas</p>
            <h2 className="text-2xl sm:text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-wire-black mb-3">Encontre a escola mais perto de você</h2>
            <p className="text-base sm:text-lg text-wire-500">Mais de 100 unidades espalhadas pelo Brasil inteiro.</p>
          </div>

          <div className="w-full lg:max-w-[480px]">
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-wire-400" />
              <input type="text" placeholder="Digite sua cidade ou CEP..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full text-base sm:text-lg pl-11 sm:pl-12 pr-24 sm:pr-28 py-4 sm:py-5 rounded-xl border border-wire-300 bg-white outline-none focus:border-wire-600 transition-colors" />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-sm font-bold text-white bg-wire-black rounded-lg px-5 py-2.5 cursor-pointer hover:bg-wire-900 transition-colors">Buscar</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {SCHOOLS.map((school, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-wire-200 hover:shadow-md transition-all">
              <Placeholder className="w-full h-36 rounded-none" label="Foto da unidade" />
              <div className="p-5">
                <h3 className="text-base font-extrabold text-wire-black mb-1">{school.name}</h3>
                <p className="text-sm text-wire-500 mb-1 flex items-center gap-1"><MapPin size={12} /> {school.address}</p>
                <p className="text-xs text-wire-400 mb-3">{school.city}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-wire-400 flex items-center gap-1"><Phone size={11} /> {school.phone}</span>
                  <a href="#lead" className="text-sm font-bold text-wire-700 flex items-center gap-1 hover:text-wire-black">Agendar <ArrowRight size={12} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="/escolas" className="text-base font-bold text-wire-700 border border-wire-300 rounded-xl px-8 py-3.5 inline-flex items-center gap-2 hover:bg-white hover:border-wire-400 transition-all">
            Ver todas as escolas <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
