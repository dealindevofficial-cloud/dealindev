import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion";
import { Card, Heading } from "@/components/ui";
import { homeProcessSection } from "@/data/process";
import { staggerDelay } from "@/lib/motion";

export function ProcessSection() {
  return (
    <Section>
      <Reveal>
        <Heading
          eyebrow={homeProcessSection.eyebrow}
          level={2}
          title={homeProcessSection.title}
          description={homeProcessSection.description}
        />
      </Reveal>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {homeProcessSection.steps.map((step, index) => (
          <Reveal key={step.name} delay={staggerDelay(index)} className="min-w-0">
            <Card className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-readable">
                Step {index + 1}
              </p>
              <h3 className="text-lg font-semibold text-foreground">{step.name}</h3>
              <p className="text-sm text-foreground-muted">{step.detail}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
