import type { ServiceIcon as ServiceIconName } from "@/data/services";
import { cn } from "@/lib/utils";

type IconName = ServiceIconName | "automation" | "systems" | "chat" | "calendar" | "support" | "phone" | "link" | "target";

const paths: Record<IconName, React.ReactNode> = {
  web: (
    <>
      <rect x="3" y="5" width="26" height="20" rx="3" fill="currentColor" fillOpacity="0.15" />
      <rect x="3" y="5" width="26" height="20" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 10h26" stroke="currentColor" strokeWidth="1.8" />
      <path d="m12 15-3 3 3 3m8-6 3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  app: (
    <>
      <rect x="9" y="3" width="14" height="26" rx="3.5" fill="currentColor" fillOpacity="0.15" />
      <rect x="9" y="3" width="14" height="26" rx="3.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="12.5" y="8" width="7" height="5" rx="1.2" fill="currentColor" />
      <path d="M12.5 17h7M12.5 20.5h4.5M14.5 25.5h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  ai: (
    <>
      <rect x="6" y="8" width="20" height="17" rx="5" fill="currentColor" fillOpacity="0.15" />
      <rect x="6" y="8" width="20" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 4v4M3 15v4M29 15v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="16" r="1.8" fill="currentColor" />
      <circle cx="20" cy="16" r="1.8" fill="currentColor" />
      <path d="M13 20.5h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  automation: (
    <>
      <circle cx="16" cy="16" r="5" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 3v4M16 25v4M3 16h4M25 16h4M6.8 6.8l2.8 2.8M22.4 22.4l2.8 2.8M6.8 25.2l2.8-2.8M22.4 9.6l2.8-2.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  systems: (
    <>
      <rect x="4" y="4" width="10" height="10" rx="2.5" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.8" />
      <rect x="18" y="18" width="10" height="10" rx="2.5" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.8" />
      <path d="M14 9h5a4 4 0 0 1 4 4v5M18 23h-5a4 4 0 0 1-4-4v-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  chat: (
    <>
      <path d="M5 8a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H13l-6 5v-5H8a3 3 0 0 1-3-3V8Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M11 12h10M11 16h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="6" width="24" height="22" rx="3" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 12h24M10 3v6M22 3v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="m12 20 3 3 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  support: (
    <>
      <path d="M6 17v-2a10 10 0 0 1 20 0v2" stroke="currentColor" strokeWidth="1.8" />
      <rect x="4" y="16" width="6" height="8" rx="2" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.8" />
      <rect x="22" y="16" width="6" height="8" rx="2" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.8" />
      <path d="M25 24v1a3 3 0 0 1-3 3h-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  phone: (
    <>
      <path d="M8 4h4l2 6-3 2a14 14 0 0 0 7 7l2-3 6 2v4a3 3 0 0 1-3 3A20 20 0 0 1 5 7a3 3 0 0 1 3-3Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </>
  ),
  link: (
    <>
      <path d="M13 19l6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14 9l2-2a5 5 0 0 1 7 7l-2 2M18 23l-2 2a5 5 0 0 1-7-7l2-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  target: (
    <>
      <circle cx="16" cy="16" r="12" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16" cy="16" r="6.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16" cy="16" r="2" fill="currentColor" />
    </>
  ),
};

export type { IconName };

export function ServiceIcon({ name, className }: { name: IconName; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-accent-soft text-accent-text ring-1 ring-accent/25",
        className,
      )}
    >
      <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
        {paths[name]}
      </svg>
    </span>
  );
}
