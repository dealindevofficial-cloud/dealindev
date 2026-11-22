import { Marquee } from "@/components/visuals";
import { trustStrip } from "@/data/home";

export function TrustStrip() {
  return (
    <div className="tone-dark border-y border-surface-border py-7">
      <Marquee items={trustStrip.points} label={trustStrip.ariaLabel} />
    </div>
  );
}
