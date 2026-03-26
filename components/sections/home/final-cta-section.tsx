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
        <Card className="space-y-8 border-primary/25 p-8 text-center md:p-12">
          <Heading
            eyebrow={finalCtaSection.eyebrow}
            level={2}
            title={finalCtaSection.title}
            description={finalCtaSection.description}
            className="mx-auto max-w-3xl"
          />
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={routes.bookACall}
              className="focus-ring inline-flex h-12 items-center justify-center rounded-md bg-primary px-7 text-base font-medium text-slate-950 shadow-md transition-all duration-200 hover:-translate-y-px hover:bg-primary-strong hover:shadow-lg active:translate-y-0"
            >
              {finalCtaSection.primaryCta.label}
            </Link>
            <Link
              href={routes.services}
              className="focus-ring inline-flex h-12 items-center justify-center rounded-md border border-surface-border bg-surface-muted px-7 text-base font-medium text-foreground transition-all duration-200 hover:-translate-y-px hover:bg-slate-700/70 active:translate-y-0"
            >
              {finalCtaSection.secondaryCta.label}
            </Link>
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}
