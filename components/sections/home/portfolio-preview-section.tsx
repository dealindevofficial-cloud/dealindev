import Link from "next/link";
import { Section } from "@/components/layout/section";
import { CountUp, Reveal } from "@/components/motion";
import { ArrowIcon, buttonVariants, Heading } from "@/components/ui";
import { ProjectVisual } from "@/components/visuals";
import { portfolioPreviewSection, portfolioPreviews } from "@/data/portfolio";
import { routes } from "@/lib/routes";

export function PortfolioPreviewSection() {
  const { ctaLabel, ...heading } = portfolioPreviewSection;

  return (
    <Section tone="tint" aria-labelledby="work-title">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <Heading id="work-title" {...heading} />
        </Reveal>
        <Reveal delay={0.1}>
          <Link href={routes.work} className={buttonVariants({ variant: "secondary" })}>
            {ctaLabel}
            <ArrowIcon />
          </Link>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {portfolioPreviews.map((project, index) => (
          <Reveal key={project.name} delay={index * 0.08} className="h-full">
            <article className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-surface-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <ProjectVisual kind={project.visual} />
            <div className="flex flex-1 flex-col p-7">
              <p className="label text-accent-text">{project.category}</p>
              <h3 className="mt-3 text-xl text-foreground">{project.name}</h3>
              <p className="mt-2.5 mb-6 text-[0.95rem] leading-relaxed text-foreground-muted">{project.summary}</p>
              <div className="mt-auto flex items-baseline gap-3 border-t border-surface-border pt-5">
                <span className="text-3xl font-bold tracking-tight text-foreground">
                  <CountUp value={project.metric.value} suffix={project.metric.suffix} />
                </span>
                <span className="text-sm text-foreground-muted">{project.metric.label}</span>
              </div>
            </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
