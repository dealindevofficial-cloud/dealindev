import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand, PageHero } from "@/components/sections/shared";
import { caseStudyPlaceholders } from "@/data/case-studies";
import { routes } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudyPlaceholders.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = caseStudyPlaceholders.find((c) => c.slug === slug);
  if (!entry) return {};
  return pageMetadata({
    title: `${entry.title} Case Study`,
    description: `How Deal in Dev delivered measurable results for ${entry.title}: the challenge, our technical approach and the outcomes.`,
    path: `${routes.caseStudies}/${entry.slug}`,
  });
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const entry = caseStudyPlaceholders.find((c) => c.slug === slug);
  if (!entry) notFound();

  return (
    <>
      <PageHero
        eyebrow="Case Study"
        title={entry.title}
        description={`How Deal in Dev delivered measurable results for ${entry.title}.`}
        breadcrumbs={[
          { name: "Case Studies", path: routes.caseStudies },
          { name: entry.title, path: `${routes.caseStudies}/${entry.slug}` },
        ]}
      />
      <CtaBand
        title="Want similar results?"
        description="Book a free strategy call and we will map the fastest path to your goals."
      />
    </>
  );
}
