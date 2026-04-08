import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import LeadForm from "@/components/sections/LeadForm";
import Courses from "@/components/sections/Courses";
import HowItWorks from "@/components/sections/HowItWorks";
import Numbers from "@/components/sections/Numbers";
import Reasons from "@/components/sections/Reasons";
import Testimonials from "@/components/sections/Testimonials";
import SchoolFinder from "@/components/sections/SchoolFinder";
import FranchiseCTA from "@/components/sections/FranchiseCTA";
import BlogPreview from "@/components/sections/BlogPreview";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
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
    <>
      <Navbar />
      {/* 1. Hero — Carrossel de banners */}
      <Hero banners={banners} />
      <div className="flex flex-col gap-6 lg:gap-8">
        {/* 2. Barra de Confiança — Logos em marquee */}
        <TrustBar />
        {/* 3. Formulário de Lead — Conversão primária */}
        <LeadForm />
        {/* 4. Cursos — 4 cards com CTA para página individual */}
        <Courses />
        {/* 5. Como Funciona — 3 steps da metodologia */}
        <HowItWorks />
        {/* 6. Números — Stats da marca com counters animados */}
        <Numbers />
        {/* 7. Diferenciais — 6 cards de motivos para escolher */}
        <Reasons />
        {/* 8. Depoimentos — 3 cards de pais */}
        <Testimonials />
        {/* 9. Buscador de Escolas — Preview com busca e 3 escolas */}
        <SchoolFinder />
        {/* 10. CTA Franquia — Seção B2B com stats e renders */}
        <FranchiseCTA />
        {/* 11. Blog Preview — 3 posts recentes */}
        <BlogPreview />
      </div>
      {/* 12. Footer */}
      <Footer />
      {/* WhatsApp flutuante */}
      <WhatsAppButton />
    </>
  );
}
