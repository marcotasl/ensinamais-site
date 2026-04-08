"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import { SCHOOL_IMAGES } from "@/lib/constants";

export default function SchoolsGallery() {
  return (
    <section
      id="escolas"
      className="bg-white py-10 px-6"
      style={{ paddingBottom: 80 }}
    >
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="text-center mb-10">
            <Badge className="mb-3 bg-em-teal/[0.09] text-em-teal">
              <MapPin size={12} /> Nossas Escolas
            </Badge>
            <h2 className="text-[clamp(1.7rem,3.5vw,2.4rem)] font-black text-em-dark">
              Mais de 100 unidades pelo Brasil
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SCHOOL_IMAGES.map((img, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="group rounded-[20px] overflow-hidden relative cursor-pointer transition-transform duration-300 hover:scale-[1.03]">
                <Image
                  src={img.src}
                  alt={img.label}
                  width={400}
                  height={300}
                  className="w-full aspect-[4/3] object-cover block"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-white/90 text-em-dark">
                      <MapPin size={11} /> {img.label}
                    </Badge>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
