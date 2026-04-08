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

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
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
