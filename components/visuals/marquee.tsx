import { LogoMark } from "@/components/brand/logo";

export function Marquee({ items, label }: { items: readonly string[]; label: string }) {
  return (
    <div className="marquee mask-fade-x overflow-hidden" aria-label={label} role="region">
      <ul className="sr-only">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div aria-hidden className="animate-marquee flex w-max items-center">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-10 pr-10 text-lg font-semibold tracking-tight text-foreground/90 sm:text-xl">
            {item}
            <LogoMark className="h-4 opacity-80" />
          </span>
        ))}
      </div>
    </div>
  );
}
