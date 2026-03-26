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
      <div className="relative mt-12 grid gap-5 md:gap-6 lg:grid-cols-4">
        <div
          className="pointer-events-none absolute left-6 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary/70 via-primary/35 to-transparent md:block lg:hidden"
          aria-hidden="true"
        />

        {homeProcessSection.steps.map((step, index) => (
          <Reveal key={step.name} delay={staggerDelay(index)} className="min-w-0 lg:hidden">
            <div className="relative pl-16">
              <div
                className="absolute left-6 top-7 z-10 flex size-8 -translate-x-1/2 items-center justify-center rounded-full border border-primary/35 bg-surface text-xs font-semibold text-primary-readable shadow-sm"
                aria-hidden="true"
              >
                0{index + 1}
              </div>
              <Card className="space-y-3 border border-white/6 bg-[linear-gradient(160deg,rgb(15_23_42_/_0.92),rgb(15_23_42_/_0.72))] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-readable">
                  Stage {index + 1}
                </p>
                <h3 className="text-lg font-semibold text-foreground">{step.name}</h3>
                <p className="text-sm leading-6 text-foreground-muted">{step.detail}</p>
              </Card>
            </div>
          </Reveal>
        ))}

        <div className="relative hidden lg:block lg:col-span-4">
          <div className="grid grid-cols-4 gap-6">
            {homeProcessSection.steps.map((step, index) => (
              <Reveal key={step.name} delay={staggerDelay(index)} className="min-w-0">
                <div className="relative">
                  {index < homeProcessSection.steps.length - 1 ? (
                    <div
                      className="pointer-events-none absolute left-1/2 top-4 h-px w-[calc(100%+1.5rem)] bg-gradient-to-r from-primary/65 via-primary/35 to-primary/65"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div
                    className="relative z-10 mb-2 flex justify-center"
                    aria-hidden="true"
                  >
                    <span className="flex size-8 items-center justify-center rounded-full border border-primary/35 bg-surface text-xs font-semibold text-primary-readable shadow-sm">
                      0{index + 1}
                    </span>
                  </div>
                  <div
                    className="pointer-events-none absolute left-1/2 top-8 h-5 w-px -translate-x-1/2 bg-gradient-to-b from-primary/45 to-transparent"
                    aria-hidden="true"
                  />
                  <Card
                    className={`space-y-3 border border-white/6 bg-[linear-gradient(160deg,rgb(15_23_42_/_0.92),rgb(15_23_42_/_0.72))] p-6 min-h-[230px] ${
                      index % 2 === 1 ? "mt-8" : ""
                    }`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-readable">
                      Stage {index + 1}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground">{step.name}</h3>
                    <p className="text-sm leading-6 text-foreground-muted">{step.detail}</p>
                  </Card>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
