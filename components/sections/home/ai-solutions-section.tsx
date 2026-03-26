import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion";
import { Card, Heading } from "@/components/ui";
import { aiSolutionsHighlight } from "@/data/home";

export function AiSolutionsSection() {
  return (
    <Section>
      <Reveal>
        <Card className="relative overflow-hidden border-primary/30 bg-slate-950/80 p-8 shadow-lg md:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(85%_90%_at_0%_0%,rgb(56_189_248_/_0.18)_0%,transparent_55%),radial-gradient(70%_80%_at_100%_0%,rgb(168_85_247_/_0.18)_0%,transparent_58%),linear-gradient(135deg,rgb(15_23_42_/_0.65)_0%,rgb(2_6_23_/_0.8)_100%)]"
          />
          <div aria-hidden className="ai-float-slow absolute -right-12 top-12 h-28 w-28 rounded-full bg-primary/15 blur-2xl" />
          <div
            aria-hidden
            className="ai-float-fast absolute bottom-8 right-1/3 h-20 w-20 rounded-full bg-secondary/15 blur-2xl"
          />

          <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <div className="space-y-6">
              <Heading
                eyebrow={aiSolutionsHighlight.eyebrow}
                level={2}
                title={aiSolutionsHighlight.title}
                description={aiSolutionsHighlight.description}
              />

              <ul className="grid gap-3 sm:grid-cols-2">
                {aiSolutionsHighlight.capabilities.map((capability, index) => (
                  <li
                    key={capability}
                    className="rounded-md border border-sky-200/15 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-slate-900"
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    <span className="inline-flex items-center gap-2">
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {capability}
                    </span>
                  </li>
                ))}
              </ul>

              <ul className="space-y-2 text-sm text-foreground-muted">
                {aiSolutionsHighlight.valuePoints.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/90" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              {aiSolutionsHighlight.useCases.map((useCase, index) => (
                <Reveal key={useCase} delay={index * 0.06} y={10}>
                  <div className="rounded-lg border border-slate-300/15 bg-slate-950/60 p-4 text-sm leading-relaxed text-slate-200 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-primary/35 hover:bg-slate-900/70">
                    {useCase}
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
