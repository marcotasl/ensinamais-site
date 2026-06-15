"use client";

import { ArrowRight, BookOpen, Bot, Code2, Languages } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Course {
  href: string;
  title: string;
  age: string;
  desc: string;
  Icon: LucideIcon;
  bg: string;
  bgImage: string;
  span: string;
  tilt: string;
}

const COURSES: Course[] = [
  {
    href: "/cursos/apoio-escolar",
    title: "Apoio Escolar",
    age: "6 a 14 anos",
    desc: "Português e Matemática com plano feito para cada criança, com acompanhamento contínuo e evolução real.",
    Icon: BookOpen,
    bg: "bg-em-blue",
    bgImage: "/images/courses/bento-apoio-escolar.webp",
    span: "lg:col-span-7 lg:row-span-1",
    tilt: "lg:tilt-l1",
  },
  {
    href: "/cursos/robotica-ensina",
    title: "Robótica Educacional",
    age: "4 a 14 anos",
    desc: "Raciocínio lógico, criatividade e resolução de problemas na prática, habilidades que o futuro vai exigir.",
    Icon: Bot,
    bg: "bg-em-green",
    bgImage: "/images/courses/bento-robotica.webp",
    span: "lg:col-span-5 lg:row-span-2",
    tilt: "lg:tilt-r1",
  },
  {
    href: "/cursos/programacao-ensina",
    title: "Programação",
    age: "8 a 14 anos",
    desc: "Aprende a criar e resolver. Games, apps e lógica que ensinam a pensar.",
    Icon: Code2,
    bg: "bg-em-orange",
    bgImage: "/images/courses/bento-programacao.webp",
    span: "lg:col-span-4 lg:row-span-1",
    tilt: "lg:tilt-l1",
  },
  {
    href: "/cursos/ingles-ensina",
    title: "Inglês",
    age: "6 a 14 anos",
    desc: "Fluência desde a infância com abordagem comunicativa.",
    Icon: Languages,
    bg: "bg-em-coral",
    bgImage: "/images/courses/bento-ingles.webp",
    span: "lg:col-span-3 lg:row-span-1",
    tilt: "lg:tilt-r1",
  },
];

export default function Courses() {
  return (
    <section id="cursos" className="px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12 max-w-[640px]">
          <p className="eyebrow text-em-blue mb-3">Nossos Cursos</p>
          <h2 className="text-2xl sm:text-[1.875rem] lg:text-[2.5rem] font-black tracking-tight text-em-dark leading-[1.1]">
            Tudo que seu filho ou filha precisa, <span className="marker-blue">dentro e além</span> da escola
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2 gap-5 lg:gap-6 lg:auto-rows-[240px]">
          {COURSES.map((c) => (
            <a
              key={c.href}
              href={c.href}
              className={`group relative rounded-3xl ${c.span} ${c.bg} ${c.tilt} tilt-hover-straighten p-7 sm:p-8 flex flex-col justify-between min-h-[240px] shadow-[0_18px_42px_-22px_rgba(26,39,68,0.35)] overflow-hidden bg-cover bg-no-repeat bg-right-bottom`}
              style={{ backgroundImage: `url(${c.bgImage})` }}
            >
              <div className="relative">
                <c.Icon size={32} strokeWidth={2} className="text-white mb-5" />
                <p className="text-xs font-bold text-white/85 uppercase tracking-widest mb-2">{c.age}</p>
                <h3 className="text-2xl sm:text-3xl font-black text-white max-w-[260px] leading-tight">{c.title}</h3>
              </div>
              <div className="relative flex items-end justify-between gap-4">
                <p className="text-sm text-white/90 max-w-[280px] leading-relaxed">{c.desc}</p>
                <span className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/15 backdrop-blur text-white group-hover:bg-white group-hover:text-em-dark transition-colors">
                  <ArrowRight size={18} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
