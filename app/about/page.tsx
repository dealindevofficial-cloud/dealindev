import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/layout";
import { Reveal } from "@/components/motion";
import { Card, Heading } from "@/components/ui";
import { staggerDelay } from "@/lib/motion";
import { routes } from "@/lib/routes";
import {
  missionAndApproach,
  positioningNarrative,
  trustCta,
  valuePrinciples,
  valuePrinciplesSection,
} from "@/data/about";

export const metadata: Metadata = {
  title: "About | Deal in Dev",
  description:
    "Learn how Deal in Dev combines business-first strategy with modern software and AI delivery to create measurable outcomes.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="pb-8">
        <Reveal>
          <Heading
            level={1}
            eyebrow={positioningNarrative.eyebrow}
            title={positioningNarrative.title}
            description={positioningNarrative.description}
            className="max-w-4xl"
          />
        </Reveal>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <Card className="space-y-8 p-7 md:p-10">
          <Heading level={2} title={missionAndApproach.title} className="max-w-3xl" />
          <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-readable">
                Mission
              </p>
              <p className="text-base text-foreground-muted">{missionAndApproach.mission}</p>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-readable">
                Approach
              </p>
              <ul className="space-y-2 text-sm leading-normal text-foreground-muted">
                {missionAndApproach.approach.map((point) => (
                  <li
                    key={point}
                    className="relative pl-3.5 before:absolute before:left-0 before:top-[0.5lh] before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-primary before:content-['']"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </Card>
        </Reveal>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <Heading
            level={2}
            eyebrow={valuePrinciplesSection.eyebrow}
            title={valuePrinciplesSection.title}
            description={valuePrinciplesSection.description}
          />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {valuePrinciples.map((principle, index) => (
            <Reveal key={principle.title} delay={staggerDelay(index)} className="min-w-0">
              <Card className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">{principle.title}</h3>
              <p className="text-sm text-foreground-muted">{principle.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <Card className="space-y-8 border-primary/25 p-8 md:p-12">
          <Heading
            eyebrow={trustCta.eyebrow}
            level={2}
            title={trustCta.title}
            description={trustCta.description}
            className="max-w-3xl"
          />

          <div className="flex flex-wrap gap-3">
            <Link
              href={routes.bookACall}
              className="focus-ring inline-flex h-12 items-center justify-center rounded-md bg-primary px-7 text-base font-medium text-slate-950 shadow-md transition-all duration-200 hover:-translate-y-px hover:bg-primary-strong hover:shadow-lg active:translate-y-0"
            >
              Book a Call
            </Link>
            <Link
              href={routes.contact}
              className="focus-ring inline-flex h-12 items-center justify-center rounded-md border border-surface-border bg-surface-muted px-7 text-base font-medium text-foreground transition-all duration-200 hover:-translate-y-px hover:bg-slate-700/70 active:translate-y-0"
            >
              Discuss Your Workflow
            </Link>
          </div>
          </Card>
        </Reveal>
      </Section>
    </>
  );
}
