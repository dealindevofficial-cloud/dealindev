import Link from "next/link";
import { Logo, LogoMark } from "@/components/brand/logo";
import { Container } from "@/components/layout/container";
import { ArrowIcon, buttonVariants } from "@/components/ui/button";
import { footerLinkGroups } from "@/data/navigation";
import { siteBrand } from "@/data/site";
import { routes } from "@/lib/routes";

export function Footer() {
  return (
    <footer className="tone-dark relative isolate overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,#34d399,transparent)] opacity-60" />
        <LogoMark className="absolute -bottom-24 -right-10 h-[26rem] opacity-[0.05]" />
      </div>
      <Container className="py-20">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_2fr]">
          <div className="max-w-sm space-y-6">
            <Logo size="md" />
            <p className="text-[0.95rem] leading-relaxed text-foreground-muted">{siteBrand.tagline}</p>
            <Link href={routes.contact} className={buttonVariants({ size: "sm" })}>
              Book a Free Strategy Call
              <ArrowIcon />
            </Link>
          </div>

          <nav aria-label="Footer" className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {footerLinkGroups.map((group) => (
              <div key={group.title} className="space-y-4">
                <h2 className="label text-accent-text">{group.title}</h2>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={`${group.title}-${link.label}`}>
                      <Link
                        href={link.href}
                        className="focus-ring rounded-sm text-[0.92rem] text-foreground/85 transition-colors hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-surface-border pt-6 text-sm text-foreground-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteBrand.legalName}. All rights reserved.</p>
          <a href={`mailto:${siteBrand.email}`} className="focus-ring rounded-sm transition-colors hover:text-accent">
            {siteBrand.email}
          </a>
        </div>
      </Container>
    </footer>
  );
}
