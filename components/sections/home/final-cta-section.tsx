import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion";
import { Card, Heading } from "@/components/ui";
import { finalCtaSection } from "@/data/home";
import { routes } from "@/lib/routes";

export function FinalCtaSection() {
  return (
    <Section className="pt-0">
      <Reveal>
        <Card className="relative overflow-hidden border-primary/30 bg-slate-950/65 p-8 md:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(56,189,248,0.16),transparent_38%),radial-gradient(circle_at_85%_0%,rgba(168,85,247,0.14),transparent_40%)]"
          />
          <div className="relative grid gap-9 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-7">
              <Heading
                eyebrow={finalCtaSection.eyebrow}
                level={2}
                title={finalCtaSection.title}
                description={finalCtaSection.description}
                className="max-w-3xl"
              />
              <p className="max-w-2xl text-sm font-medium text-primary-readable md:text-base">
                {finalCtaSection.leadIntent}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={routes.bookACall}
                  className="focus-ring inline-flex h-12 min-w-[11.5rem] items-center justify-center rounded-md bg-primary px-8 text-base font-semibold text-slate-950 shadow-lg shadow-sky-950/45 transition-all duration-200 hover:-translate-y-px hover:bg-primary-strong hover:shadow-xl active:translate-y-0"
                >
                  {finalCtaSection.primaryCta.label}
                </Link>
                <Link
                  href={routes.contact}
                  className="focus-ring inline-flex h-12 items-center justify-center rounded-md border border-surface-border/90 bg-slate-900/65 px-7 text-base font-medium text-foreground transition-all duration-200 hover:-translate-y-px hover:border-primary/45 hover:bg-slate-800/70 active:translate-y-0"
                >
                  {finalCtaSection.secondaryCta.label}
                </Link>
              </div>
            </div>
            <div className="rounded-lg border border-surface-border/75 bg-slate-900/55 p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-readable">
                What You Leave With
              </p>
              <ul className="space-y-3">
                {finalCtaSection.valuePoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-foreground-muted md:text-base">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}
