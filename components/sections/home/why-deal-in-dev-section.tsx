import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion";
import { Card, Heading } from "@/components/ui";
import { whyDealInDevSection } from "@/data/home";

export function WhyDealInDevSection() {
  return (
    <Section className="relative">
      <Reveal>
        <Card className="relative overflow-hidden border-surface-border/80 p-0">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_0%_0%,rgb(56_189_248_/_0.12),transparent_55%),radial-gradient(90%_90%_at_100%_10%,rgb(168_85_247_/_0.1),transparent_55%)]" />
          <div className="relative grid gap-8 p-8 md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:p-10 lg:p-12">
            <div className="space-y-6">
              <Heading
                eyebrow={whyDealInDevSection.eyebrow}
                level={2}
                title={whyDealInDevSection.title}
                description={whyDealInDevSection.description}
                className="space-y-4"
              />
            </div>

            <div className="grid gap-3">
              {whyDealInDevSection.differentiators.map((item, index) => (
                <Reveal key={item} delay={0.05 * (index + 1)}>
                  <div className="group rounded-lg border border-surface-border/70 bg-slate-950/45 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:bg-slate-950/60">
                    <p className="text-sm leading-relaxed text-foreground-muted transition-colors duration-300 group-hover:text-foreground/90">
                      {item}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}
