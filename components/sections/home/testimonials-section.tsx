import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion";
import { Card, Heading } from "@/components/ui";
import { testimonials, testimonialsSection } from "@/data/testimonials";
import { staggerDelay } from "@/lib/motion";

export function TestimonialsSection() {
  return (
    <Section>
      <Reveal>
        <Heading
          eyebrow={testimonialsSection.eyebrow}
          level={2}
          title={testimonialsSection.title}
        />
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <Reveal
            key={`${item.name}-${item.company}`}
            delay={staggerDelay(index)}
            className="min-w-0"
          >
            <Card className="space-y-5">
              <p className="text-sm text-foreground-muted">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold text-foreground">{item.name}</p>
                <p className="text-xs uppercase tracking-[0.16em] text-foreground-muted">
                  {item.company}
                </p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
