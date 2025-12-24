import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import PortfolioPreview from "@/components/PortfolioPreview";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Packages />
      <PortfolioPreview />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
