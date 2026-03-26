import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/layout";
import { FuturePageIntro } from "@/components/sections/shared";
import { Card } from "@/components/ui";
import { caseStudyPlaceholders } from "@/data/case-studies";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Case Studies | Deal in Dev",
  description: "Deep dives into how Deal in Dev ships systems that improve operations and growth.",
};

export default function CaseStudiesIndexPage() {
  return (
    <>
      <FuturePageIntro
        eyebrow="Case Studies"
        title="Detailed stories will live here."
        description="Each case study will outline the business context, technical approach, and measurable outcomes. Add content via your future CMS or static data in data/case-studies.ts."
      />
      {caseStudyPlaceholders.length > 0 ? (
        <Section className="pt-0">
          <ul className="grid gap-4 md:grid-cols-2">
            {caseStudyPlaceholders.map((item) => (
              <li key={item.slug}>
                <Link href={`${routes.caseStudies}/${item.slug}`}>
                  <Card className="p-6 transition hover:border-primary/40">
                    <p className="font-semibold text-foreground">{item.title}</p>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}
    </>
  );
}
