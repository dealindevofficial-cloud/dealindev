import { CtaBand } from "@/components/sections/shared/cta-band";
import { finalCtaSection } from "@/data/home";

export function FinalCtaSection() {
  return (
    <CtaBand
      eyebrow={finalCtaSection.eyebrow}
      title={finalCtaSection.title}
      description={finalCtaSection.description}
      valuePoints={finalCtaSection.valuePoints}
      primaryLabel={finalCtaSection.primaryCta.label}
      secondaryLabel={finalCtaSection.secondaryCta.label}
    />
  );
}
