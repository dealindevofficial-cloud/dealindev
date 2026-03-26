import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion";
import { Card } from "@/components/ui";
import { heroContent, heroOutcomePanel } from "@/data/home";
import { staggerDelay } from "@/lib/motion";
import { routes } from "@/lib/routes";

export function HeroSection() {
  return (
    <Section className="pt-10 md:pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="space-y-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-readable">
            {heroContent.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {heroContent.title}
          </h1>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-foreground-muted sm:text-lg">
            {heroContent.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={routes.bookACall}
              className="focus-ring inline-flex h-12 items-center justify-center rounded-md bg-primary px-7 text-base font-medium text-slate-950 shadow-md transition-all duration-200 hover:-translate-y-px hover:bg-primary-strong hover:shadow-lg active:translate-y-0"
            >
              {heroContent.primaryCta.label}
            </Link>
            <Link
              href={routes.services}
              className="focus-ring inline-flex h-12 items-center justify-center rounded-md border border-surface-border bg-surface-muted px-7 text-base font-medium text-foreground transition-all duration-200 hover:-translate-y-px hover:bg-slate-700/70 active:translate-y-0"
            >
              {heroContent.secondaryCta.label}
            </Link>
          </div>
        </Reveal>

        <Reveal delay={staggerDelay(1, 0.07)} className="min-w-0">
          <Card className="relative overflow-hidden border-primary/25 p-8">
            <div
              aria-hidden
              className="absolute -right-20 -top-24 h-52 w-52 rounded-full bg-primary/20 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-28 -left-16 h-56 w-56 rounded-full bg-secondary/20 blur-3xl"
            />
            <div className="relative space-y-6">
              <p className="text-sm font-medium text-primary-readable">{heroOutcomePanel.title}</p>
              <ul className="list-none space-y-3 text-sm text-foreground-muted">
                {heroOutcomePanel.bullets.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span aria-hidden className="text-primary-readable">
                      –
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
