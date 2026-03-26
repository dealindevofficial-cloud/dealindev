import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion";
import { Card, Heading } from "@/components/ui";
import { aiSolutionsHighlight } from "@/data/home";

export function AiSolutionsSection() {
  return (
    <Section>
      <Reveal>
        <Card className="relative overflow-hidden border-primary/30 p-8 md:p-10">
          <div
            aria-hidden
            className="absolute right-0 top-0 h-full w-full bg-[radial-gradient(70%_100%_at_100%_0%,rgb(56_189_248_/_0.18)_0%,transparent_60%)]"
          />
          <div className="relative grid gap-8 md:grid-cols-[1fr_0.9fr]">
            <Heading
              eyebrow={aiSolutionsHighlight.eyebrow}
              level={2}
              title={aiSolutionsHighlight.title}
              description={aiSolutionsHighlight.description}
            />
            <ul className="space-y-3 text-sm text-foreground-muted">
              {aiSolutionsHighlight.useCases.map((useCase) => (
                <li key={useCase} className="rounded-md border border-surface-border/70 bg-slate-950/40 p-3">
                  {useCase}
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}
