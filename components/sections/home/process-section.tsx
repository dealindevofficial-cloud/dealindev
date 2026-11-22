import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion";
import { Heading } from "@/components/ui";
import { ProcessTimeline } from "@/components/sections/shared/process-timeline";
import { homeProcessSection } from "@/data/process";

export function ProcessSection() {
  const { steps, ...heading } = homeProcessSection;

  return (
    <Section tone="light" aria-labelledby="process-title">
      <Reveal>
        <Heading id="process-title" {...heading} />
      </Reveal>
      <div className="mt-16">
        <ProcessTimeline steps={steps.map((s) => ({ title: s.name, detail: s.detail }))} />
      </div>
    </Section>
  );
}
