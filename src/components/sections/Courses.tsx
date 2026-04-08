"use client";

import { useState } from "react";
import Image from "next/image";
import { GraduationCap, ArrowRight, Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import Wave from "@/components/layout/Wave";
import { COURSES } from "@/lib/constants";

const FEATURES = [
  "Ensino individualizado sem turmas",
  "Material didatico interdisciplinar",
  "Acompanhamento continuo dos pais",
];

export default function Courses() {
  const [active, setActive] = useState(0);
  const course = COURSES[active];

  return (
    <>
      <Wave color="#F1F8E9" flip height={60} />
      <section
        id="cursos"
        className="bg-em-green-pale py-10 px-6 relative overflow-hidden"
        style={{ paddingBottom: 80 }}
      >
        {/* Background watermark */}
        <div className="absolute right-[5%] bottom-[10%] text-[clamp(120px,18vw,220px)] font-black text-em-green opacity-[0.06] leading-none pointer-events-none select-none">
          E+
        </div>

        <div className="max-w-[1200px] mx-auto relative z-2">
          <FadeIn>
            <div className="text-center mb-10">
              <Badge className="mb-3 bg-em-green/[0.09] text-em-green-dark">
                <GraduationCap size={12} /> Nossos Cursos
              </Badge>
              <h2 className="text-[clamp(1.7rem,3.5vw,2.4rem)] font-black text-em-dark">
                Desenvolvemos multiplos saberes
              </h2>
            </div>
          </FadeIn>

          {/* Tab buttons */}
          <FadeIn delay={0.1}>
            <div className="flex gap-2.5 justify-center mb-9 flex-wrap">
              {COURSES.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="text-sm font-bold rounded-[14px] px-5 py-3 flex items-center gap-2 transition-all duration-250 cursor-pointer"
                  style={{
                    color: active === i ? "#fff" : "#1A2744",
                    background: active === i ? c.color : "#fff",
                    border: active === i ? "none" : "2px solid #E2E8F0",
                    boxShadow: active === i ? `0 6px 20px ${c.color}40` : "none",
                  }}
                >
                  <c.icon size={16} /> {c.title}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Course detail card */}
          <FadeIn delay={0.15}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-0 bg-white rounded-[28px] p-2 shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-gray-200"
              >
                {/* Image */}
                <div className="rounded-3xl overflow-hidden relative">
                  <Image
                    src={course.img}
                    alt={course.title}
                    width={480}
                    height={360}
                    className="w-full h-[300px] lg:h-[360px] object-cover block"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, ${course.color}CC 0%, transparent 60%)`,
                    }}
                  />
                  <div className="absolute bottom-6 left-6">
                    <Badge className="bg-white/95 text-em-dark">
                      <course.icon size={12} style={{ color: course.color }} />{" "}
                      {course.title}
                    </Badge>
                  </div>
                </div>

                {/* Text */}
                <div className="p-6 lg:pl-2 lg:pr-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: course.light }}
                  >
                    <course.icon size={28} style={{ color: course.color }} strokeWidth={2} />
                  </div>
                  <h3 className="text-[26px] font-black text-em-dark mb-3">
                    {course.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-gray-500 mb-6">
                    {course.desc}
                  </p>
                  <div className="flex flex-col gap-2.5 mb-7">
                    {FEATURES.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <div
                          className="w-[22px] h-[22px] rounded-[7px] flex items-center justify-center"
                          style={{ background: course.light }}
                        >
                          <Check
                            size={12}
                            style={{ color: course.color }}
                            strokeWidth={3}
                          />
                        </div>
                        <span className="text-[13px] font-semibold text-em-dark">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="#lead"
                    className="text-sm font-extrabold text-white rounded-[14px] px-7 py-3.5 inline-flex items-center gap-2 transition-all duration-250 hover:-translate-y-0.5"
                    style={{
                      background: course.color,
                      boxShadow: `0 6px 20px ${course.color}40`,
                    }}
                  >
                    Quero saber mais <ArrowRight size={15} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </FadeIn>
        </div>
      </section>
      <Wave color="#F1F8E9" height={60} />
    </>
  );
}
