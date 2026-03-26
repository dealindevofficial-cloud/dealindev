import {
  AiSolutionsSection,
  FinalCtaSection,
  HeroSection,
  PortfolioPreviewSection,
  ProcessSection,
  ServicesOverviewSection,
  TestimonialsSection,
  TrustStrip,
  WhyDealInDevSection,
} from "@/components/sections/home";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <ServicesOverviewSection />
      <WhyDealInDevSection />
      <ProcessSection />
      <PortfolioPreviewSection />
      <AiSolutionsSection />
      <TestimonialsSection />
      <FinalCtaSection />
    </>
  );
}
