import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import LeadForm from "@/components/sections/LeadForm";
import About from "@/components/sections/About";
import Reasons from "@/components/sections/Reasons";
import Courses from "@/components/sections/Courses";
import Testimonials from "@/components/sections/Testimonials";
import Stats from "@/components/sections/Stats";
import SchoolsGallery from "@/components/sections/SchoolsGallery";
import TrustBar from "@/components/sections/TrustBar";
import { getBanners } from "@/lib/wordpress";
import { FALLBACK_BANNERS } from "@/lib/fallback-banners";

export default async function Home() {
  // Tenta buscar banners do WP, fallback pra estáticos
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
      <Hero banners={banners} />
      <LeadForm />
      <About />
      <Reasons />
      <Courses />
      <Testimonials />
      <Stats />
      <SchoolsGallery />
      <TrustBar />
      <Footer />
    </>
  );
}
