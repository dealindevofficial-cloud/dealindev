import type { Metadata } from "next";
import { Section } from "@/components/layout";
import { Reveal } from "@/components/motion";
import { Button, Card, Heading, Input, Select, Textarea } from "@/components/ui";
import { staggerDelay } from "@/lib/motion";
import {
  contactFormCopy,
  contactInfoBlocks,
  contactIntro,
  contactServiceOptions,
} from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact | Deal in Dev",
  description:
    "Connect with Deal in Dev to discuss website development, app delivery, and AI automation tailored to your business workflow.",
};

export default function ContactPage() {
  return (
    <>
      <Section className="pb-8">
        <Reveal>
          <Heading
            level={1}
            eyebrow={contactIntro.eyebrow}
            title={contactIntro.title}
            description={contactIntro.description}
            className="max-w-4xl"
          />
        </Reveal>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <Reveal className="min-w-0">
            <Card className="space-y-8 border border-surface-border/80 bg-gradient-to-br from-background-elevated to-background p-7 shadow-lg shadow-black/30 md:space-y-9 md:p-10">
              <Heading
                level={2}
                title={contactFormCopy.title}
                description={contactFormCopy.description}
              />

              <form className="space-y-6 md:space-y-7" noValidate>
                <div className="grid gap-5 md:grid-cols-2 md:gap-6">
                  <div className="space-y-2.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-readable"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      placeholder="Your full name"
                      className="h-12 rounded-lg border-surface-border/80"
                    />
                  </div>

                  <div className="space-y-2.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-readable"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      className="h-12 rounded-lg border-surface-border/80"
                    />
                  </div>
                </div>

                <div className="space-y-2.5">
                  <label
                    htmlFor="businessName"
                    className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-readable"
                  >
                    Business Name
                  </label>
                  <Input
                    id="businessName"
                    name="businessName"
                    autoComplete="organization"
                    placeholder="Your company or brand"
                    className="h-12 rounded-lg border-surface-border/80"
                  />
                </div>

                <div className="space-y-2.5">
                  <label
                    htmlFor="serviceInterestedIn"
                    className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-readable"
                  >
                    Service Interested In
                  </label>
                  <Select
                    id="serviceInterestedIn"
                    name="serviceInterestedIn"
                    defaultValue=""
                    placeholder="Select the service that best fits"
                    className="rounded-lg [&_button]:h-12 [&_button]:rounded-lg [&_button]:border-surface-border/80"
                    options={contactServiceOptions.map((service) => ({
                      value: service,
                      label: service,
                    }))}
                  />
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-end justify-between gap-3">
                    <label
                      htmlFor="projectDetails"
                      className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-readable"
                    >
                      Project Details
                    </label>
                    <span className="text-xs text-foreground-muted">Include goals, timeline, and challenges</span>
                  </div>
                  <Textarea
                    id="projectDetails"
                    name="projectDetails"
                    rows={6}
                    placeholder="Share what you want to launch or improve, what is slowing your team down today, and what a successful outcome should look like."
                    className="min-h-40 rounded-lg border-surface-border/80"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-4 border-t border-surface-border/70 pt-4 md:pt-5">
                  <Button type="submit" size="lg" className="rounded-lg px-8">
                    Start the Conversation
                  </Button>
                  <p className="max-w-md text-sm leading-relaxed text-foreground-muted">
                    {contactFormCopy.submitNote}
                  </p>
                </div>
              </form>
            </Card>
          </Reveal>

          <div className="space-y-5">
            {contactInfoBlocks.map((block, index) => (
              <Reveal key={block.title} delay={staggerDelay(index)} className="min-w-0">
                <Card className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-readable">
                  {block.title}
                </p>
                {"href" in block ? (
                  <a
                    href={block.href}
                    className="focus-ring inline-flex rounded-sm text-base font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    {block.detail}
                  </a>
                ) : (
                  <p className="text-base font-semibold text-foreground">{block.detail}</p>
                )}
                <p className="text-sm text-foreground-muted">{block.helper}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
