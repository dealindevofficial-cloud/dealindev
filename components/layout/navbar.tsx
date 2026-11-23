"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/layout/container";
import { ArrowIcon, buttonVariants } from "@/components/ui/button";
import { primaryNavigation } from "@/data/navigation";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function MobileMenu({ pathname }: { pathname: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-surface-border bg-surface/60 text-foreground md:hidden"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="relative h-3.5 w-4">
          <span className={cn("absolute left-0 top-0 h-0.5 w-4 rounded bg-current transition-all", isOpen && "top-[6px] rotate-45")} />
          <span className={cn("absolute left-0 top-[6px] h-0.5 w-4 rounded bg-current transition-opacity", isOpen && "opacity-0")} />
          <span className={cn("absolute left-0 top-3 h-0.5 w-4 rounded bg-current transition-all", isOpen && "top-[6px] -rotate-45")} />
        </span>
      </button>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={cn(
          "absolute inset-x-0 top-full grid transition-all duration-300 ease-out md:hidden",
          isOpen ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden" inert={!isOpen || undefined}>
          <Container className="pb-5">
            <div className="space-y-1 rounded-[var(--radius-lg)] border border-surface-border bg-surface p-3 shadow-lg">
              {primaryNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  className={cn(
                    "focus-ring block rounded-[var(--radius-sm)] px-4 py-3 text-[0.95rem] font-medium transition-colors",
                    isActive(pathname, item.href)
                      ? "bg-accent-soft text-accent-text"
                      : item.href === routes.aiSolutions
                        ? "font-semibold text-accent-text hover:bg-surface-muted"
                        : "text-foreground-muted hover:bg-surface-muted hover:text-foreground",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://connectcallai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring block rounded-[var(--radius-sm)] px-4 py-3 text-[0.95rem] font-medium text-accent-text transition-colors hover:bg-surface-muted"
                onClick={() => setIsOpen(false)}
              >
                Our Brainchild ↗
              </a>
              <Link
                href={routes.contact}
                className={buttonVariants({ size: "md", className: "mt-2 w-full" })}
                onClick={() => setIsOpen(false)}
              >
                Book a Free Strategy Call
              </Link>
            </div>
          </Container>
        </div>
      </nav>
    </>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "tone-dark sticky top-0 z-50 border-b transition-all duration-500",
        isScrolled
          ? "border-surface-border bg-[rgb(4_18_13/0.85)] shadow-lg backdrop-blur-xl"
          : "border-transparent bg-[rgb(4_18_13/0.6)] backdrop-blur-md",
      )}
    >
      <Container>
        <div className="flex h-[4.5rem] items-center justify-between gap-6">
          <Link href={routes.home} className="focus-ring rounded-sm p-1" aria-label="Deal in Dev home">
            <Logo size="sm" />
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {primaryNavigation.map((item) => {
              const active = isActive(pathname, item.href);
              if (item.href === routes.aiSolutions) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "focus-ring mx-1 inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-[0.92rem] font-semibold transition-all duration-300",
                      active
                        ? "border-accent bg-accent/20 text-foreground"
                        : "border-accent/50 bg-accent/10 text-accent-text shadow-[0_0_18px_-4px_rgb(52_211_153/0.6)] hover:border-accent hover:bg-accent/20 hover:text-foreground",
                    )}
                  >
                    <svg aria-hidden viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor">
                      <path d="M8 0.5 9.6 6.4 15.5 8 9.6 9.6 8 15.5 6.4 9.6 0.5 8 6.4 6.4Z" />
                    </svg>
                    {item.label}
                  </Link>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "focus-ring relative rounded-full px-4 py-2 text-[0.92rem] font-medium transition-colors duration-300",
                    active ? "text-foreground" : "text-foreground-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded-full bg-accent transition-transform duration-300",
                      active ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </Link>
              );
            })}
            <a
              href="https://connectcallai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-1 rounded-full px-4 py-2 text-[0.92rem] font-medium text-accent-text transition-colors duration-300 hover:text-foreground"
            >
              Our Brainchild
              <span aria-hidden>↗</span>
            </a>
          </nav>

          <div className="hidden md:block">
            <Link href={routes.contact} className={buttonVariants({ size: "sm" })}>
              Book a Call
              <ArrowIcon />
            </Link>
          </div>

          <MobileMenu key={pathname} pathname={pathname} />
        </div>
      </Container>
    </header>
  );
}
