import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion";
import { trustStrip } from "@/data/home";
import { staggerDelay } from "@/lib/motion";

export function TrustStrip() {
  return (
    <Section
      className="pt-0"
      containerClassName="rounded-lg border border-surface-border/70 bg-slate-950/45 py-5 sm:py-6"
      aria-label={trustStrip.ariaLabel}
    >
      <div className="grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-4">
        {trustStrip.points.map((point, index) => (
          <Reveal key={point} delay={staggerDelay(index)} y={10}>
            <p className="text-sm font-medium text-foreground/90">{point}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
