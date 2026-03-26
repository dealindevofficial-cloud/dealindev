import type { Metadata } from "next";
import { FuturePageIntro } from "@/components/sections/shared";
import { aiSolutionsHighlight } from "@/data/home";

export const metadata: Metadata = {
  title: "AI Solutions | Deal in Dev",
  description:
    "Practical AI agents, automation, and workflow systems designed around real operations — not novelty.",
};

export default function AiSolutionsPage() {
  return (
    <FuturePageIntro
      eyebrow={aiSolutionsHighlight.eyebrow}
      title="A dedicated hub for AI systems and automation is coming."
      description={`${aiSolutionsHighlight.description} This page will expand with service detail, example architectures, and engagement models.`}
    />
  );
}
