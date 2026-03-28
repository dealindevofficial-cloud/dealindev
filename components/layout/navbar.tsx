"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { primaryNavigation } from "@/data/navigation";
import { motionTransitionFast } from "@/lib/motion";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

const MotionLink = motion.create(Link);

type MobileNavContextValue = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNavContext = createContext<MobileNavContextValue | null>(null);

function useMobileNav() {
  const ctx = useContext(MobileNavContext);
  if (!ctx) {
    throw new Error("useMobileNav must be used within MobileNavProvider");
  }
  return ctx;
}

/** Remount on `pathname` change so the menu closes without syncing state in an effect. */
function MobileNavProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MobileNavContext.Provider value={{ isOpen, setIsOpen }}>{children}</MobileNavContext.Provider>
  );
}

function MobileNavToggle() {
  const { isOpen, setIsOpen } = useMobileNav();

  return (
    <button
      type="button"
      className="focus-ring inline-flex h-11 min-h-11 min-w-11 w-11 items-center justify-center rounded-md border border-surface-border/80 bg-surface/65 text-foreground shadow-sm backdrop-blur md:hidden"
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      onClick={() => setIsOpen((prev) => !prev)}
      suppressHydrationWarning
    >
      <div className="relative h-3.5 w-4">
        <span
          className={cn(
            "absolute left-0 top-0 h-0.5 w-4 bg-current transition-all",
            isOpen && "top-[6px] rotate-45",
          )}
        />
        <span
          className={cn(
            "absolute left-0 top-[6px] h-0.5 w-4 bg-current transition-opacity",
            isOpen && "opacity-0",
          )}
        />
        <span
          className={cn(
            "absolute left-0 top-3 h-0.5 w-4 bg-current transition-all",
            isOpen && "top-[6px] -rotate-45",
          )}
        />
      </div>
    </button>
  );
}

function MobileNavMenu({ pathname }: { pathname: string }) {
  const { isOpen, setIsOpen } = useMobileNav();
  const reduceMotion = useReducedMotion();

  return (
    <nav
      id="mobile-menu"
      aria-label="Mobile"
      className={cn(
        "grid transition-all duration-400 ease-out md:hidden",
        isOpen ? "grid-rows-[1fr] pb-4 opacity-100" : "grid-rows-[0fr] opacity-0",
      )}
    >
      <div className="overflow-hidden" inert={!isOpen || undefined}>
        <div className="surface-card mt-1 space-y-2 rounded-xl p-3.5">
          {primaryNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "focus-ring block rounded-md px-3 py-2.5 text-sm transition-all duration-300",
                pathname === item.href
                  ? "bg-slate-800/65 text-foreground"
                  : "text-foreground-muted hover:bg-slate-800/70 hover:text-foreground",
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <MotionLink
            href={routes.bookACall}
            transition={motionTransitionFast}
            whileHover={reduceMotion ? undefined : { y: -1 }}
            whileTap={reduceMotion ? undefined : { scale: 0.985 }}
            className="focus-ring mt-3 inline-flex h-10 w-full items-center justify-center rounded-md border border-primary/30 bg-primary px-4 text-sm font-semibold text-slate-950 shadow-[0_10px_28px_-16px_rgb(56_189_248_/_0.95)] transition-all duration-300 hover:bg-primary-strong"
            onClick={() => setIsOpen(false)}
          >
            Book a Call
          </MotionLink>
        </div>
      </div>
    </nav>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-500",
        isScrolled
          ? "border-surface-border/65 bg-slate-950/72 shadow-lg backdrop-blur-2xl"
          : "border-transparent bg-slate-950/20 backdrop-blur-md",
      )}
    >
      <Container>
        <MobileNavProvider key={pathname}>
          <div className="flex h-[4.25rem] items-center justify-between gap-6">
            <Link
              href={routes.home}
              className="focus-ring group rounded-sm transition-opacity hover:opacity-95"
            >
              <span className="inline-flex items-center gap-2">
                <span
                  aria-hidden
                  className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_14px_rgb(56_189_248_/_0.7)] transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-gradient-brand text-lg font-semibold tracking-[-0.02em]">
                  Deal in Dev
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
              {primaryNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "focus-ring relative rounded-md px-3.5 py-2 text-sm font-medium transition-all duration-300",
                    pathname === item.href
                      ? "text-foreground"
                      : "text-foreground-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute inset-x-3 bottom-1 h-px origin-left bg-primary/80 transition-transform duration-300",
                      pathname === item.href ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </Link>
              ))}
            </nav>

            <div className="hidden md:block">
              <MotionLink
                href={routes.bookACall}
                transition={motionTransitionFast}
                whileHover={reduceMotion ? undefined : { y: -1 }}
                whileTap={reduceMotion ? undefined : { scale: 0.985 }}
                className="focus-ring inline-flex h-10 items-center justify-center rounded-md border border-primary/25 bg-primary px-5 text-sm font-semibold text-slate-950 shadow-[0_10px_28px_-14px_rgb(56_189_248_/_0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-strong hover:shadow-[0_16px_34px_-16px_rgb(56_189_248_/_1)]"
              >
                Book a Call
              </MotionLink>
            </div>

            <MobileNavToggle />
          </div>

          <MobileNavMenu pathname={pathname} />
        </MobileNavProvider>
      </Container>
    </header>
  );
}
