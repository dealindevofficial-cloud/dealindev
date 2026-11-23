import Link from "next/link";
import { Section } from "@/components/layout";
import { Reveal } from "@/components/motion";
import { CtaBand, PageHero } from "@/components/sections/shared";
import { ArrowIcon, buttonVariants, Card } from "@/components/ui";
import { caseStudyPlaceholders } from "@/data/case-studies";
import { routes } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Case Studies: Software & AI Projects That Delivered ROI",
  description:
    "In-depth Deal in Dev case studies covering the business context, technical approach and measurable outcomes of our web, app and AI automation projects.",
  path: routes.caseStudies,
});

export default function CaseStudiesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="The full story behind every result."
        highlight="every result"
        description="Each case study covers the business challenge, the technical approach and the measurable outcomes, so you can see exactly how we work."
        breadcrumbs={[{ name: "Case Studies", path: routes.caseStudies }]}
      />

      <Section tone="light" aria-label="Case study list">
        {caseStudyPlaceholders.length > 0 ? (
          <ul className="grid gap-6 md:grid-cols-2">
            {caseStudyPlaceholders.map((item) => (
              <li key={item.slug}>
                <Link href={`${routes.caseStudies}/${item.slug}`} className="focus-ring block rounded-[var(--radius-lg)]">
                  <Card interactive>
                    <p className="text-xl font-semibold text-foreground">{item.title}</p>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <Reveal>
            <Card featured className="mx-auto max-w-2xl p-10 text-center md:p-14">
              <h2 className="text-2xl text-foreground sm:text-3xl">Detailed case studies are coming soon</h2>
              <p className="mx-auto mt-4 max-w-md leading-relaxed text-foreground-muted">
                In the meantime, browse our featured projects or ask us for examples relevant to your industry.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href={routes.work} className={buttonVariants()}>
                  View Featured Projects
                  <ArrowIcon />
                </Link>
                <Link href={routes.contact} className={buttonVariants({ variant: "secondary" })}>
                  Request Examples
                </Link>
              </div>
            </Card>
          </Reveal>
        )}
      </Section>

      <CtaBand
        title="Let's write your success story next."
        description="Book a free strategy call and get a clear plan for your SaaS, CRM, app or AI automation project."
      />
    </>
  );
}
