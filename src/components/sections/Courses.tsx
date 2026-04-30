"use client";

import { ArrowRight } from "lucide-react";
import Placeholder from "@/components/ui/Placeholder";

/*
 * Bento courses — dense, visual-first, each card unique
 *
 * ┌───────────────────┬───────────┐
 * │                   │           │
 * │  Apoio Escolar    │ Robótica  │  row 1: image bg + text overlay
 * │  (image bg,       │ (tall,    │
 * │   heading large)  │  image)   │
 * ├─────────┬─────────┤           │
 * │         │         │           │
 * │ Program.│ Inglês  ├───────────┤
 * │ (dark)  │ (light) │  CTA card │
 * │         │         │           │
 * └─────────┴─────────┴───────────┘
 */

export default function Courses() {
  return (
    <section id="cursos" className="px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12 max-w-[560px]">
          <p className="text-xs font-bold text-wire-400 uppercase tracking-widest mb-2">Nossos Cursos</p>
          <h2 className="text-2xl sm:text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-wire-black">
            Tudo que seu filho ou filha precisa, dentro e além da escola
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2 gap-3 lg:auto-rows-[220px]">

          {/* Apoio Escolar — wide, image bg with text overlay */}
          <a href="/cursos/apoio-escolar" className="card-tilt group lg:col-span-7 lg:row-span-1 rounded-2xl overflow-hidden relative" data-tilt="left">
            <Placeholder className="absolute inset-0 rounded-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-wire-900/80 via-wire-900/30 to-transparent" />
            <div className="relative h-full p-7 flex flex-col justify-end min-h-[200px]">
              <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-1">6 a 14 anos</p>
              <h3 className="text-3xl font-black text-white mb-1">Apoio Escolar</h3>
              <p className="text-sm text-white/70 max-w-[340px]">Português e Matemática com plano feito para cada criança, com acompanhamento contínuo e evolução real.</p>
            </div>
          </a>

          {/* Robótica — tall right, image fills */}
          <a href="/cursos/robotica-ensina" className="card-tilt group lg:col-span-5 lg:row-span-2 rounded-2xl overflow-hidden relative" data-tilt="right">
            <Placeholder className="absolute inset-0 rounded-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-wire-900/80 via-wire-900/20 to-transparent" />
            <div className="relative h-full p-7 flex flex-col justify-end min-h-[200px] lg:min-h-0">
              <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-1">4 a 14 anos</p>
              <h3 className="text-3xl font-black text-white mb-1">Robótica Educacional</h3>
              <p className="text-sm text-white/70">Raciocínio lógico, criatividade e resolução de problemas na prática, habilidades que o futuro vai exigir.</p>
            </div>
          </a>

          {/* Programação — compact, dark bg */}
          <a href="/cursos/programacao-ensina" className="card-tilt group lg:col-span-4 lg:row-span-1 rounded-2xl bg-wire-800 p-6 flex flex-col justify-between min-h-[200px]" data-tilt="left">
            <div>
              <p className="text-xs font-bold text-wire-500 uppercase tracking-widest mb-2">8 a 14 anos</p>
              <h3 className="text-2xl font-black text-white">Programação</h3>
            </div>
            <div className="flex items-end justify-between">
              <p className="text-sm text-wire-400 max-w-[220px]">Aprende a criar e resolver. Games, apps e lógica que ensinam a pensar.</p>
              <ArrowRight size={18} className="text-wire-500 group-hover:text-white transition-colors shrink-0" />
            </div>
          </a>

          {/* Inglês — compact, light bg */}
          <a href="/cursos/ingles-ensina" className="card-tilt group lg:col-span-3 lg:row-span-1 rounded-2xl bg-wire-100 p-6 flex flex-col justify-between min-h-[200px]" data-tilt="right">
            <div>
              <p className="text-xs font-bold text-wire-500 uppercase tracking-widest mb-2">6 a 14 anos</p>
              <h3 className="text-2xl font-black text-wire-black">Inglês</h3>
            </div>
            <div>
              <p className="text-sm text-wire-600 mb-3">Fluência desde a infância com abordagem comunicativa.</p>
              <span className="text-sm font-bold text-wire-700 group-hover:text-wire-black flex items-center gap-1">
                Saiba mais <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
