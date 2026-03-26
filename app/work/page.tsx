import type { Metadata } from "next";
import { FuturePageIntro } from "@/components/sections/shared";

export const metadata: Metadata = {
  title: "Work | Deal in Dev",
  description: "Selected projects and systems built for business performance — full portfolio coming soon.",
};

export default function WorkPage() {
  return (
    <FuturePageIntro
      eyebrow="Work"
      title="Portfolio and project stories are on the way."
      description="We are preparing a dedicated space for selected builds across web, apps, and AI operations. Until then, reach out for relevant examples aligned to your industry."
    />
  );
}
