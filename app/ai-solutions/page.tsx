import { Section } from "@/components/layout";
import { Reveal } from "@/components/motion";
import { CtaBand, PageHero } from "@/components/sections/shared";
import { JsonLd } from "@/components/seo/json-ld";
import { Card, Heading } from "@/components/ui";
import { AiFlow, ServiceIcon, type IconName } from "@/components/visuals";
import { aiSolutionsHighlight } from "@/data/home";
import { siteBrand } from "@/data/site";
import { routes } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AI Automation Agency: AI Chatbots & Voice Agents",
  description:
    "Deal in Dev builds custom AI chatbots, AI voice agents and workflow automation for US businesses. Qualify leads, book appointments and resolve support 24/7.",
  path: routes.aiSolutions,
});

const capabilityIcons: IconName[] = ["chat", "target", "calendar", "support", "phone", "automation"];
const useCaseIcons: IconName[] = ["target", "calendar", "support", "link"];

const aiServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Agents & Automation",
  serviceType: "AI automation and chatbot development",
  description: aiSolutionsHighlight.description,
  url: `${siteBrand.url}${routes.aiSolutions}`,
  provider: { "@id": `${siteBrand.url}/#organization` },
  areaServed: { "@type": "Country", name: siteBrand.areaServed },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI capabilities",
    itemListElement: aiSolutionsHighlight.capabilities.map((c) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: c },
    })),
  },
};

export default function AiSolutionsPage() {
  const { eyebrow, title, highlight, description, capabilities, useCases, valuePoints } = aiSolutionsHighlight;

  return (
    <>
      <JsonLd data={aiServiceJsonLd} />
      <PageHero
        eyebrow={eyebrow}
        title={title}
        highlight={highlight}
        description={description}
        breadcrumbs={[{ name: "AI Solutions", path: routes.aiSolutions }]}
      >
        <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-foreground-muted">
          {valuePoints.map((point) => (
            <li key={point} className="flex items-center gap-2">
              <svg aria-hidden viewBox="0 0 16 16" className="h-4 w-4 text-accent">
                <path d="m3.5 8.5 3 3 6-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {point}
            </li>
          ))}
        </ul>
      </PageHero>

      <Section tone="light" aria-labelledby="flow-title">
        <Reveal>
          <Heading
            id="flow-title"
            eyebrow="How It Works"
            title="From first message to booked call, automatically."
            highlight="automatically"
            description="Every AI agent we deploy connects to your existing tools, so leads and requests move through your business without manual handoffs."
          />
        </Reveal>
        <Reveal delay={0.1} className="mt-14">
          <AiFlow />
        </Reveal>
      </Section>

      <Section tone="tint" aria-labelledby="capabilities-title">
        <Reveal>
          <Heading
            id="capabilities-title"
            eyebrow="Capabilities"
            title="AI solutions built around your workflows."
            highlight="your workflows"
            description="Pick a single high-impact automation or combine several into a complete AI operations layer."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, index) => (
            <Reveal key={cap} delay={(index % 3) * 0.08} className="h-full">
              <Card interactive className="h-full">
                <ServiceIcon name={capabilityIcons[index] ?? "ai"} />
                <h3 className="mt-6 text-xl text-foreground">{cap}</h3>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="dark" aria-labelledby="use-cases-title">
        <Reveal>
          <Heading
            id="use-cases-title"
            eyebrow="Use Cases"
            title="Where AI pays off first."
            highlight="pays off"
            description="We start where automation delivers the clearest return, then expand as results compound."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {useCases.map((useCase, index) => (
            <Reveal key={useCase.title} delay={index * 0.08} className="h-full">
              <Card interactive className="flex h-full gap-5">
                <ServiceIcon name={useCaseIcons[index] ?? "ai"} />
                <div>
                  <h3 className="text-xl text-foreground">{useCase.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-foreground-muted">{useCase.description}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Start Automating"
        title="See where AI can save your team hours every week."
        description="Book a free AI automation audit. We will map your workflows and show you exactly where AI agents can deliver measurable ROI."
        primaryLabel="Book a Free AI Audit"
      />
    </>
  );
}
