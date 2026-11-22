import { ContactForm } from "@/components/contact/contact-form";
import { Section } from "@/components/layout";
import { Reveal } from "@/components/motion";
import { PageHero } from "@/components/sections/shared";
import { JsonLd } from "@/components/seo/json-ld";
import { Card } from "@/components/ui";
import { ServiceIcon, type IconName } from "@/components/visuals";
import { contactInfoBlocks, contactIntro } from "@/data/contact";
import { siteBrand } from "@/data/site";
import { routes } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us: Book a Free Strategy Call",
  description:
    "Contact Deal in Dev to discuss website development, custom app development or AI automation for your business. Book a free strategy call and get a reply within one business day.",
  path: routes.contact,
});

const infoIcons: IconName[] = ["chat", "calendar", "target"];

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Deal in Dev",
  url: `${siteBrand.url}${routes.contact}`,
  mainEntity: {
    "@type": "ProfessionalService",
    "@id": `${siteBrand.url}/#service`,
    name: siteBrand.name,
    email: siteBrand.email,
    areaServed: { "@type": "Country", name: siteBrand.areaServed },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: siteBrand.email,
      areaServed: "US",
      availableLanguage: "English",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactJsonLd} />
      <PageHero {...contactIntro} breadcrumbs={[{ name: "Contact", path: routes.contact }]} />

      <Section tone="light" aria-label="Contact form and details">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-10">
          <Reveal className="min-w-0">
            <Card className="space-y-8 p-7 shadow-md md:p-10">
              <ContactForm />
            </Card>
          </Reveal>

          <div className="space-y-5">
            {contactInfoBlocks.map((block, index) => (
              <Reveal key={block.title} delay={index * 0.08}>
                <Card className="flex gap-5 p-6">
                  <ServiceIcon name={infoIcons[index] ?? "chat"} className="h-12 w-12" />
                  <div className="min-w-0 space-y-1.5">
                    <h2 className="label text-accent-text">{block.title}</h2>
                    {"href" in block ? (
                      <a
                        href={block.href}
                        className="focus-ring block break-words rounded-sm font-semibold text-foreground transition-colors hover:text-accent-text"
                      >
                        {block.detail}
                      </a>
                    ) : (
                      <p className="font-semibold text-foreground">{block.detail}</p>
                    )}
                    <p className="text-sm leading-relaxed text-foreground-muted">{block.helper}</p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
