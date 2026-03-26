import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/layout";
import { Reveal } from "@/components/motion";
import { Card, Heading } from "@/components/ui";
import {
  serviceBenefits,
  servicePillars,
  serviceProcessSteps,
  servicesPageCopy,
} from "@/data/services";
import { staggerDelay } from "@/lib/motion";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Services | Deal in Dev",
  description:
    "Explore Deal in Dev services for website development, app development, and AI automation focused on measurable business outcomes.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="pb-8">
        <Reveal>
          <Heading
            level={1}
            eyebrow={servicesPageCopy.hero.eyebrow}
            title={servicesPageCopy.hero.title}
            description={servicesPageCopy.hero.description}
            className="max-w-4xl"
          />
        </Reveal>
      </Section>

      <Section className="pt-0">
        <h2 className="sr-only">Core service areas</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {servicePillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={staggerDelay(index)} className="min-w-0">
              <Card className="h-full space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">{pillar.title}</h3>
                <p className="text-sm text-foreground-muted">{pillar.summary}</p>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-readable">
                  Business Outcomes
                </p>
                <ul className="space-y-2 text-sm leading-normal text-foreground-muted">
                  {pillar.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="relative pl-3.5 before:absolute before:left-0 before:top-[0.5lh] before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-primary before:content-['']"
                    >
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 border-t border-surface-border/50 pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-readable">
                  Example Deliverables
                </p>
                <ul className="space-y-2 text-sm leading-normal text-foreground-muted">
                  {pillar.deliverables.map((deliverable) => (
                    <li
                      key={deliverable}
                      className="relative pl-3.5 before:absolute before:left-0 before:top-[0.5lh] before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-secondary before:content-['']"
                    >
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <Heading
            eyebrow={servicesPageCopy.benefits.eyebrow}
            level={2}
            title={servicesPageCopy.benefits.title}
            description={servicesPageCopy.benefits.description}
          />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {serviceBenefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={staggerDelay(index)} className="min-w-0">
              <Card className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
              <p className="text-sm text-foreground-muted">{benefit.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <Heading
            eyebrow={servicesPageCopy.process.eyebrow}
            level={2}
            title={servicesPageCopy.process.title}
            description={servicesPageCopy.process.description}
          />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {serviceProcessSteps.map((step, index) => (
            <Reveal key={step.title} delay={staggerDelay(index)} className="min-w-0">
              <Card className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-readable">
                {step.step}
              </p>
              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-foreground-muted">{step.detail}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <Card className="space-y-8 border-primary/25 p-8 md:p-12">
          <Heading
            eyebrow={servicesPageCopy.closingCta.eyebrow}
            level={2}
            title={servicesPageCopy.closingCta.title}
            description={servicesPageCopy.closingCta.description}
            className="max-w-3xl"
          />

          <div className="flex flex-wrap gap-3">
            <Link
              href={routes.contact}
              className="focus-ring inline-flex h-12 items-center justify-center rounded-md bg-primary px-7 text-base font-medium text-slate-950 shadow-md transition-all duration-200 hover:-translate-y-px hover:bg-primary-strong hover:shadow-lg active:translate-y-0"
            >
              {servicesPageCopy.closingCta.primaryCta}
            </Link>
            <Link
              href={routes.contact}
              className="focus-ring inline-flex h-12 items-center justify-center rounded-md border border-surface-border bg-surface-muted px-7 text-base font-medium text-foreground transition-all duration-200 hover:-translate-y-px hover:bg-slate-700/70 active:translate-y-0"
            >
              {servicesPageCopy.closingCta.secondaryCta}
            </Link>
          </div>
          </Card>
        </Reveal>
      </Section>
    </>
  );
}
