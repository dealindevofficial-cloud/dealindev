import { Section } from "@/components/layout";
import { Reveal } from "@/components/motion";
import { CtaBand, PageHero } from "@/components/sections/shared";
import { Card, Eyebrow, Heading } from "@/components/ui";
import { ServiceIcon, type IconName } from "@/components/visuals";
import { missionAndApproach, positioningNarrative, trustCta, valuePrinciples, valuePrinciplesSection } from "@/data/about";
import { routes } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us: Custom Software & AI Development Partner",
  description:
    "Meet Deal in Dev, a US-focused partner for SaaS and CRM development, app development and AI automation. Business-first strategy with senior-level delivery.",
  path: routes.about,
});

const principleIcons: IconName[] = ["target", "chat", "systems", "automation"];

export default function AboutPage() {
  return (
    <>
      <PageHero {...positioningNarrative} breadcrumbs={[{ name: "About", path: routes.about }]} />

      <Section tone="light" aria-labelledby="mission-title">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal className="space-y-6">
            <Eyebrow>{missionAndApproach.eyebrow}</Eyebrow>
            <h2 id="mission-title" className="text-3xl text-foreground sm:text-4xl">
              {missionAndApproach.title}
            </h2>
            <p className="max-w-[38rem] text-lg leading-relaxed text-foreground-muted">{missionAndApproach.mission}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <Card featured className="p-8 md:p-10">
              <h3 className="label text-accent-text">Our approach</h3>
              <ol className="mt-6 space-y-6">
                {missionAndApproach.approach.map((point, i) => (
                  <li key={point} className="flex gap-4">
                    <span className="text-gradient-brand text-2xl font-bold">{String(i + 1).padStart(2, "0")}</span>
                    <p className="pt-1 leading-relaxed text-foreground">{point}</p>
                  </li>
                ))}
              </ol>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section tone="tint" aria-labelledby="principles-title">
        <Reveal>
          <Heading id="principles-title" {...valuePrinciplesSection} />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {valuePrinciples.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 0.08} className="h-full">
              <Card interactive className="flex h-full gap-5">
                <ServiceIcon name={principleIcons[index] ?? "target"} />
                <div>
                  <h3 className="text-xl text-foreground">{principle.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-foreground-muted">{principle.description}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand eyebrow={trustCta.eyebrow} title={trustCta.title} description={trustCta.description} />
    </>
  );
}
