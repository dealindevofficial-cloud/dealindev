import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion";
import { Card, Heading } from "@/components/ui";
import { portfolioPreviewSection, portfolioPreviews } from "@/data/portfolio";
import { staggerDelay } from "@/lib/motion";
import { routes } from "@/lib/routes";

export function PortfolioPreviewSection() {
  return (
    <Section>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <Reveal className="min-w-0 flex-1">
          <Heading
            eyebrow={portfolioPreviewSection.eyebrow}
            level={2}
            title={portfolioPreviewSection.title}
            description={portfolioPreviewSection.description}
          />
        </Reveal>
        <Reveal delay={0.06} className="shrink-0">
          <Link
            href={routes.work}
            className="focus-ring inline-flex h-11 items-center justify-center rounded-md border border-surface-border/60 px-6 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-px hover:border-primary/50 hover:bg-surface/70 active:translate-y-0"
          >
            {portfolioPreviewSection.ctaLabel}
          </Link>
        </Reveal>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {portfolioPreviews.map((item, index) => (
          <Reveal key={item.name} delay={staggerDelay(index)} className="min-w-0">
            <Card className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
              <p className="text-sm text-foreground-muted">{item.summary}</p>
              <p className="text-sm text-primary-readable">{item.impact}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
