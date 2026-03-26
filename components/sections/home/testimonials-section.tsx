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
          description={testimonialsSection.description}
        />
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <Reveal
            key={`${item.name}-${item.businessType}`}
            delay={staggerDelay(index)}
            className="min-w-0"
          >
            <Card className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-800/60 to-slate-900/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg motion-reduce:hover:translate-y-0">
              <div
                aria-hidden
                className="pointer-events-none absolute right-5 top-4 text-5xl leading-none text-primary/20 transition-colors duration-300 group-hover:text-primary/30"
              >
                &ldquo;
              </div>
              <p className="relative pr-8 text-[15px] leading-relaxed text-slate-100">
                {item.quote}
              </p>
              <div className="relative mt-6 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-foreground">{item.name}</p>
                <p className="mt-1 text-xs text-foreground-muted">{item.role}</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-primary-readable/90">
                  {item.businessType}
                </p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
