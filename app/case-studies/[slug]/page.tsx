import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FuturePageIntro } from "@/components/sections/shared";
import { caseStudyPlaceholders } from "@/data/case-studies";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudyPlaceholders.map((item) => ({ slug: item.slug }));
}

function titleCaseFromSlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = caseStudyPlaceholders.find((c) => c.slug === slug);
  const title = entry?.title ?? titleCaseFromSlug(slug);
  return {
    title: `${title} | Case Study | Deal in Dev`,
    description: `How Deal in Dev delivered outcomes for ${title}.`,
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const entry = caseStudyPlaceholders.find((c) => c.slug === slug);

  if (!entry && caseStudyPlaceholders.length > 0) {
    notFound();
  }

  const displayTitle = entry?.title ?? titleCaseFromSlug(slug);

  return (
    <FuturePageIntro
      eyebrow="Case Study"
      title={displayTitle}
      description="Template route for long-form case studies. Replace this intro with rich content, metrics, and stack notes when the story is ready."
    />
  );
}
