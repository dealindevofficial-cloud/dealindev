import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion";
import { Card, Heading } from "@/components/ui";
import { servicesOverviewSection } from "@/data/home";
import { servicePillars } from "@/data/services";
import { staggerDelay } from "@/lib/motion";

export function ServicesOverviewSection() {
  return (
    <Section>
      <Reveal>
        <Heading
          eyebrow={servicesOverviewSection.eyebrow}
          level={2}
          title={servicesOverviewSection.title}
          description={servicesOverviewSection.description}
        />
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {servicePillars.map((service, index) => (
          <Reveal key={service.title} delay={staggerDelay(index)} className="h-full min-w-0">
            <Card className="h-full space-y-4">
              <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="text-sm text-foreground-muted">{service.homeOverview.description}</p>
              <p className="text-sm font-medium text-primary-readable">
                {service.homeOverview.outcomeLine}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
