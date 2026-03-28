import type { Metadata } from "next";
import { FuturePageIntro } from "@/components/sections/shared";
import { aiSolutionsHighlight } from "@/data/home";

export const metadata: Metadata = {
  title: "AI Solutions | Deal in Dev",
  description:
    "AI agents and automation for real operations—not novelty demos.",
};

export default function AiSolutionsPage() {
  return (
    <FuturePageIntro
      eyebrow={aiSolutionsHighlight.eyebrow}
      title="A dedicated AI and automation hub is coming."
      description={`${aiSolutionsHighlight.description} More service detail, examples, and engagement options soon.`}
    />
  );
}
