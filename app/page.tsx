import type { Metadata } from "next";
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
import { JsonLd } from "@/components/seo/json-ld";
import { siteBrand } from "@/data/site";
import { servicePillars } from "@/data/services";

export const metadata: Metadata = {
  title: { absolute: siteBrand.defaultTitle },
  description: siteBrand.defaultDescription,
  alternates: { canonical: "/" },
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteBrand.url}/#service`,
  name: siteBrand.name,
  url: siteBrand.url,
  image: `${siteBrand.url}/opengraph-image.png`,
  email: siteBrand.email,
  description: siteBrand.defaultDescription,
  areaServed: { "@type": "Country", name: siteBrand.areaServed },
  priceRange: "$$",
  parentOrganization: { "@id": `${siteBrand.url}/#organization` },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web, app and AI development services",
    itemListElement: servicePillars.map((p) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: p.title, description: p.summary },
    })),
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={professionalServiceJsonLd} />
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
