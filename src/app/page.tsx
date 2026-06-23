import Hero from "@/components/sections/Hero";
import LeadForm from "@/components/sections/LeadForm";
import EmotionalIntro from "@/components/sections/EmotionalIntro";
import Courses from "@/components/sections/Courses";
import LearningPaths from "@/components/sections/LearningPaths";
import HowItWorks from "@/components/sections/HowItWorks";
import Numbers from "@/components/sections/Numbers";
import Reasons from "@/components/sections/Reasons";
import TurmaDaMonica from "@/components/sections/TurmaDaMonica";
import Testimonials from "@/components/sections/Testimonials";
import SchoolFinder from "@/components/sections/SchoolFinder";
import BlogPreview from "@/components/sections/BlogPreview";
import CloudDivider from "@/components/ui/CloudDivider";
import FloatingIcon from "@/components/ui/FloatingIcon";
import { getBanners } from "@/lib/wordpress";
import { FALLBACK_BANNERS } from "@/lib/fallback-banners";

export default async function Home() {
  const wpBanners = await getBanners();

  const banners =
    wpBanners.length > 0
      ? wpBanners.map((b) => ({
          id: b.id,
          title: b.title.rendered,
          subtitle: b.acf.subtitulo,
          desc: b.acf.descricao,
          ctaText: b.acf.cta_texto,
          ctaHref: b.acf.cta_link,
          overlayColor: b.acf.cor_overlay,
          image: b.acf.imagem_destaque,
          bgImage: b.acf.imagem_fundo,
        }))
      : FALLBACK_BANNERS;

  return (
    <main className="relative min-h-screen bg-[#fafafa] overflow-x-clip">
      <Hero banners={banners} />

      <LeadForm />

      {/* Floaters 1: book-pencil à direita (topo da EmotionalIntro) + asset-3 à esquerda em altura diferente (mais perto do final da section) */}
      <div className="relative h-0 max-w-[1400px] mx-auto">
        <FloatingIcon src="/images/3d/book-pencil.webp" side="right" offsetX={-20} offsetY={-60} size={190} delay={0} rotate={-8} />
        <FloatingIcon src="/images/3d/asset-3.webp" side="left" offsetX={-80} offsetY={320} size={190} delay={0.5} rotate={8} />
      </div>

      <div className="flex flex-col">
        <div className="pt-8 sm:pt-12 lg:pt-16">
          <EmotionalIntro />
        </div>

        {/* Floater 2: puzzle-idea flutuando à esquerda entre Intro e Courses */}
        <div className="relative h-0 max-w-[1400px] mx-auto">
          <FloatingIcon src="/images/3d/puzzle-idea.webp" side="left" offsetX={-40} offsetY={-50} size={220} delay={1.2} rotate={6} />
        </div>

        <div className="pt-16 sm:pt-20 lg:pt-24">
          <Courses />
        </div>

        <LearningPaths className="pt-14 sm:pt-16 lg:pt-20" />

        {/* Floater 3: journey-wave à direita logo antes do cloud divider azul */}
        <div className="relative h-0 max-w-[1400px] mx-auto">
          <FloatingIcon src="/images/3d/journey-wave.webp" side="right" offsetX={-10} offsetY={20} size={240} delay={0.6} rotate={-4} />
        </div>

        {/* Entrada HowItWorks (dark section — sólido, sem gradient) */}
        <div className="mt-16 sm:mt-20">
          <CloudDivider variant={2} cloudColor="#00AEEF" height={130} />
        </div>
        <div className="bg-em-blue">
          <HowItWorks />
        </div>
        {/* Saída HowItWorks: cloud azul (cor da section anterior) pingando no white da Diferenciais */}
        <CloudDivider variant={4} cloudColor="#00AEEF" flip height={150} />

        {/* Floater 4: rocket à esquerda + robot (asset-4) à direita dentro da Reasons */}
        <div className="relative h-0 max-w-[1400px] mx-auto">
          <FloatingIcon src="/images/3d/rocket.webp" side="left" offsetX={-40} offsetY={-50} size={220} delay={1.5} rotate={-6} />
          <FloatingIcon src="/images/3d/asset-4.webp" side="right" offsetX={40} offsetY={120} size={230} delay={1.0} rotate={-6} />
        </div>

        <div className="pt-8 sm:pt-12 lg:pt-16">
          <Reasons />
        </div>

        {/* Floater 5: trophy à direita antes da Turma da Mônica */}
        <div className="relative h-0 max-w-[1400px] mx-auto">
          <FloatingIcon src="/images/3d/trophy.webp" side="right" offsetX={-30} offsetY={20} size={200} delay={0.9} rotate={8} />
        </div>

        {/* Entrada TurmaDaMonica (sem cloud — só gradient bleed suave) */}
        <div className="mt-12 sm:mt-16 h-16 bg-gradient-to-b from-[#fafafa] to-em-green-pale" />
        <div className="bg-em-green-pale pb-12 sm:pb-16">
          <TurmaDaMonica />
        </div>

        <div className="pt-12 sm:pt-16">
          <Numbers />
        </div>

        {/* Floater 6: checklist à esquerda entre Numbers e Testimonials */}
        <div className="relative h-0 max-w-[1400px] mx-auto">
          <FloatingIcon src="/images/3d/checklist.webp" side="left" offsetX={-40} offsetY={-30} size={190} delay={1.8} rotate={-6} />
        </div>

        <div className="pt-12 sm:pt-16">
          <Testimonials />
        </div>

        {/* Floater 7: english-globe à direita entre Testimonials e SchoolFinder */}
        <div className="relative h-0 max-w-[1400px] mx-auto">
          <FloatingIcon src="/images/3d/english-globe.webp" side="right" offsetX={-30} offsetY={-20} size={200} delay={0.4} rotate={5} />
        </div>

        <div className="pt-12 sm:pt-16">
          <SchoolFinder />
        </div>

        {/* Floater 8: hero-cluster à esquerda entre SchoolFinder e BlogPreview */}
        <div className="relative h-0 max-w-[1400px] mx-auto">
          <FloatingIcon src="/images/3d/hero-cluster.webp" side="left" offsetX={-40} offsetY={20} size={230} delay={2.2} rotate={-4} />
        </div>

        <div className="pt-12 sm:pt-16">
          <BlogPreview />
        </div>
      </div>
    </main>
  );
}
