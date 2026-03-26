import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion";
import { Card, Heading } from "@/components/ui";
import { whyDealInDevSection } from "@/data/home";

export function WhyDealInDevSection() {
  return (
    <Section>
      <Reveal>
        <Card className="grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-10">
          <Heading
            eyebrow={whyDealInDevSection.eyebrow}
            level={2}
            title={whyDealInDevSection.title}
            description={whyDealInDevSection.description}
          />
          <ul className="space-y-3 text-sm text-foreground-muted">
            {whyDealInDevSection.differentiators.map((item) => (
              <li key={item} className="rounded-md border border-surface-border/70 bg-slate-950/35 p-3">
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </Reveal>
    </Section>
  );
}
