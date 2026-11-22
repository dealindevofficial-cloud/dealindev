import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion";
import { ArrowIcon, buttonVariants, Heading } from "@/components/ui";
import { AiFlow, GlowBackdrop } from "@/components/visuals";
import { aiSolutionsHighlight } from "@/data/home";
import { routes } from "@/lib/routes";

export function AiSolutionsSection() {
  const { capabilities, valuePoints, eyebrow, title, highlight, description } = aiSolutionsHighlight;

  return (
    <Section tone="dark" aria-labelledby="ai-title" background={<GlowBackdrop />}>
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <Reveal>
          <Heading id="ai-title" eyebrow={eyebrow} title={title} highlight={highlight} description={description} />
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="space-y-3.5">
            {valuePoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-foreground/90">
                <svg aria-hidden viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0 text-accent">
                  <path d="m3.5 8.5 3 3 6-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-16">
        <AiFlow />
      </Reveal>

      <Reveal delay={0.15} className="mt-14 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <ul aria-label="AI capabilities" className="flex flex-wrap gap-2.5">
          {capabilities.map((cap) => (
            <li
              key={cap}
              className="rounded-full border border-surface-border bg-surface px-4 py-2 text-sm font-medium text-foreground/90 transition-colors hover:border-accent hover:text-accent"
            >
              {cap}
            </li>
          ))}
        </ul>
        <Link href={routes.aiSolutions} className={buttonVariants({ className: "shrink-0" })}>
          Explore AI Solutions
          <ArrowIcon />
        </Link>
      </Reveal>
    </Section>
  );
}
