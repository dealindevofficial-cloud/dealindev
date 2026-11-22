import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion";
import { ArrowIcon, Card, Heading } from "@/components/ui";
import { ServiceIcon } from "@/components/visuals";
import { servicesOverviewSection } from "@/data/home";
import { servicePillars } from "@/data/services";
import { routes } from "@/lib/routes";

export function ServicesOverviewSection() {
  return (
    <Section tone="light" aria-labelledby="services-title">
      <Reveal>
        <Heading id="services-title" {...servicesOverviewSection} />
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {servicePillars.map((pillar, index) => (
          <Reveal key={pillar.title} delay={index * 0.08} className="h-full">
            <Card interactive featured={index === 2} className="group flex h-full flex-col">
              <ServiceIcon name={pillar.icon} />
              <h3 className="mt-7 text-xl text-foreground">{pillar.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-foreground-muted">{pillar.homeOverview.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {pillar.homeOverview.highlights.map((h) => (
                  <li key={h} className="rounded-full bg-surface-muted px-3 py-1 text-xs font-medium text-foreground-muted">
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <Link
                  href={pillar.icon === "ai" ? routes.aiSolutions : `${routes.services}#${pillar.slug}`}
                  className="focus-ring group inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-accent-text"
                >
                  Explore {pillar.title}
                  <ArrowIcon />
                </Link>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
