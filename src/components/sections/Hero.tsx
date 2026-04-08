"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Star, ArrowRight, ChevronLeft, ChevronRight, Check, BookOpen, Cpu, Monitor, Globe } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Blob from "@/components/ui/Blob";
import DotGrid from "@/components/ui/DotGrid";
import Wave from "@/components/layout/Wave";

const SLIDES = [
  {
    id: 0,
    bg: "from-em-green-dark via-em-green to-[#8BC34A]",
    badge: "Licenciado Turma da Monica",
    title: (
      <>
        Aqui, aprender e<br />mais{" "}
        <span className="text-em-yellow relative inline-block">
          experiencia
          <svg viewBox="0 0 200 12" className="absolute -bottom-1 left-0 w-full">
            <path d="M0,8 Q50,0 100,6 T200,4" stroke="#FDD835" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>
        </span>
      </>
    ),
    desc: "Apoio escolar, Ingles, Robotica e Programacao com metodologia individualizada que desenvolve seu filho para o presente e o futuro.",
    cta: { label: "Agendar aula gratis", href: "#lead" },
    image: "/images/hero/aluna-computador.jpg",
    imageAlt: "Aluna sorrindo no computador da Ensina Mais",
    secondaryImage: "/images/hero/professora-alunos.jpg",
    secondaryAlt: "Professora ajudando alunos",
    character: "/images/turma-da-monica/pose-6.png",
    badges: ["Metodologia Exclusiva", "Ensino Hibrido"],
    stats: [
      { value: "100+", label: "Escolas" },
      { value: "12+", label: "Anos" },
      { value: "4", label: "Cursos" },
    ],
  },
  {
    id: 1,
    bg: "from-em-blue-dark via-em-blue to-[#29B6F6]",
    badge: "Nossos Cursos",
    title: (
      <>
        4 cursos para<br />
        <span className="text-em-yellow">todas as idades</span>
      </>
    ),
    desc: "Do apoio escolar as profissoes do futuro. Cada curso com metodologia propria, material exclusivo e acompanhamento individualizado.",
    cta: { label: "Conheca os cursos", href: "#cursos" },
    image: "/images/courses/robotica.jpg",
    imageAlt: "Aluno na aula de robotica",
    secondaryImage: "/images/courses/programacao.jpg",
    secondaryAlt: "Aula de programacao",
    character: "/images/turma-da-monica/pose-16.png",
    courses: [
      { icon: BookOpen, label: "Apoio Escolar", color: "#039BE5" },
      { icon: Cpu, label: "Robotica", color: "#7CB342" },
      { icon: Monitor, label: "Programacao", color: "#FF9800" },
      { icon: Globe, label: "Ingles", color: "#EF5350" },
    ],
  },
  {
    id: 2,
    bg: "from-[#3949AB] via-em-purple to-[#7986CB]",
    badge: "Seja um Franqueado",
    title: (
      <>
        Invista no futuro<br />da{" "}
        <span className="text-em-yellow">educacao</span>
      </>
    ),
    desc: "Micro franquia com mais de 100 unidades no Brasil. Investimento a partir de R$90 mil com retorno em ate 12 meses.",
    cta: { label: "Quero ser franqueado", href: "#franquia" },
    image: "/images/franchise/render-fachada.jpg",
    imageAlt: "Fachada modelo Ensina Mais",
    secondaryImage: "/images/franchise/render-recepcao.jpg",
    secondaryAlt: "Recepcao modelo Ensina Mais",
    character: "/images/turma-da-monica/pose-10.png",
    stats: [
      { value: "R$90k", label: "Investimento" },
      { value: "40%", label: "Rentabilidade" },
      { value: "12m", label: "Retorno" },
    ],
  },
];

const AUTOPLAY_MS = 6000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (idx: number) => {
      setDirection(idx > current ? 1 : -1);
      setCurrent(idx);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // Autoplay
  useEffect(() => {
    const timer = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [next]);

  const slide = SLIDES[current];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "60%" : "-60%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-60%" : "60%", opacity: 0 }),
  };

  return (
    <section className={`relative bg-gradient-to-br ${slide.bg} pt-[72px] overflow-hidden min-h-[85vh] flex flex-col transition-colors duration-700`}>
      {/* Decorative elements */}
      <Blob color="#fff" size={500} top="-100px" right="-150px" opacity={0.06} />
      <Blob color="#FDD835" size={300} bottom="60px" left="-80px" opacity={0.1} />
      <DotGrid top="100px" right="60px" />
      <div className="absolute bottom-0 right-[5%] w-[40%] h-[70%] bg-white/[0.04] rounded-t-[40%] pointer-events-none" />

      {/* Slide content */}
      <div className="flex-1 max-w-[1200px] mx-auto px-6 pt-12 lg:pt-15 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center relative z-2">
        {/* Text side */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={slide.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge className="mb-5 bg-white/[0.18] text-white backdrop-blur-lg border border-white/15">
              <Star size={13} fill="#FDD835" color="#FDD835" /> {slide.badge}
            </Badge>

            <h1 className="text-[clamp(2rem,5vw,3.4rem)] font-black leading-[1.1] text-white mb-5">
              {slide.title}
            </h1>

            <p className="text-[16px] leading-relaxed text-white/[0.85] max-w-[460px] mb-7">
              {slide.desc}
            </p>

            {/* Course pills (slide 2) */}
            {"courses" in slide && slide.courses && (
              <div className="flex gap-2 flex-wrap mb-7">
                {slide.courses.map((c) => (
                  <span
                    key={c.label}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/15 backdrop-blur-sm rounded-full px-3.5 py-2 border border-white/10"
                  >
                    <c.icon size={13} /> {c.label}
                  </span>
                ))}
              </div>
            )}

            {/* Mini stats (slides 1 & 3) */}
            {"stats" in slide && slide.stats && (
              <div className="flex gap-6 items-center mb-7">
                {slide.stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-[22px] font-black text-em-yellow">{s.value}</div>
                    <div className="text-[11px] font-semibold text-white/60 uppercase tracking-wide">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <a
              href={slide.cta.href}
              className="text-[15px] font-extrabold text-em-green-dark bg-white rounded-[14px] px-8 py-4 inline-flex items-center gap-2 shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.18)] transition-all duration-250"
            >
              {slide.cta.label} <ArrowRight size={16} />
            </a>
          </motion.div>
        </AnimatePresence>

        {/* Image side */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={`img-${slide.id}`}
            custom={direction}
            variants={{
              enter: (dir: number) => ({ x: dir > 0 ? "40%" : "-40%", opacity: 0, scale: 0.9 }),
              center: { x: 0, opacity: 1, scale: 1 },
              exit: (dir: number) => ({ x: dir > 0 ? "-40%" : "40%", opacity: 0, scale: 0.9 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            {/* Main image */}
            <div className="relative rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.2)] border-4 border-white/15">
              <Image
                src={slide.image}
                alt={slide.imageAlt}
                width={600}
                height={440}
                priority
                className="w-full block object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

              {/* Badges on image (slide 1) */}
              {"badges" in slide && slide.badges && (
                <div className="absolute bottom-5 left-5 right-5 flex gap-2">
                  {slide.badges.map((b) => (
                    <Badge key={b} className="bg-white/95 text-em-dark">
                      <Check size={12} className="text-em-green" strokeWidth={3} /> {b}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* Secondary image */}
            <div className="absolute -bottom-5 -left-5 rounded-[20px] overflow-hidden w-[140px] h-[100px] shadow-[0_8px_24px_rgba(0,0,0,0.15)] border-[3px] border-white z-3">
              <Image
                src={slide.secondaryImage}
                alt={slide.secondaryAlt}
                width={280}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>

            {/* TM character */}
            <div className="absolute -bottom-8 -right-6 z-4 pointer-events-none">
              <Image
                src={slide.character}
                alt="Turma da Monica"
                width={160}
                height={130}
                className="drop-shadow-lg"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="relative z-10 max-w-[1200px] mx-auto w-full px-6 pb-4">
        <div className="flex items-center justify-between">
          {/* Arrows */}
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all duration-200 cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all duration-200 cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === current
                    ? "w-8 bg-white"
                    : "w-2 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <Wave color="#fff" height={80} />
    </section>
  );
}
