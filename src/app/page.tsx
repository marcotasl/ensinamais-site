import Hero from "@/components/sections/Hero";
import LeadForm from "@/components/sections/LeadForm";
import EmotionalIntro from "@/components/sections/EmotionalIntro";
import Courses from "@/components/sections/Courses";
import HowItWorks from "@/components/sections/HowItWorks";
import Numbers from "@/components/sections/Numbers";
import Reasons from "@/components/sections/Reasons";
import TurmaDaMonica from "@/components/sections/TurmaDaMonica";
import Testimonials from "@/components/sections/Testimonials";
import SchoolFinder from "@/components/sections/SchoolFinder";
import FranchiseCTA from "@/components/sections/FranchiseCTA";
import BlogPreview from "@/components/sections/BlogPreview";
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
    <main className="min-h-screen bg-[#fafafa]">
      <Hero banners={banners} />
      <LeadForm />
      <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16 py-8 sm:py-12 lg:py-16">
        <EmotionalIntro />
        <Courses />
        <HowItWorks />
        <Reasons />
        <TurmaDaMonica />
        <Numbers />
        <Testimonials />
        <SchoolFinder />
        <FranchiseCTA />
        <BlogPreview />
      </div>
    </main>
  );
}
