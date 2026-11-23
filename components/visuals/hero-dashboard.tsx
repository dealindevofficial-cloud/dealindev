import { CountUp, TiltCard } from "@/components/motion";
import { LogoMark } from "@/components/brand/logo";

const points = [22, 30, 27, 41, 38, 52, 49, 63, 71, 68, 82, 94];
const W = 320;
const H = 120;

function buildPaths() {
  const step = W / (points.length - 1);
  const coords = points.map((p, i) => [i * step, H - (p / 100) * H] as const);
  let line = `M ${coords[0][0]} ${coords[0][1]}`;
  for (let i = 1; i < coords.length; i++) {
    const [x0, y0] = coords[i - 1];
    const [x1, y1] = coords[i];
    const cx = (x0 + x1) / 2;
    line += ` C ${cx} ${y0}, ${cx} ${y1}, ${x1} ${y1}`;
  }
  const area = `${line} L ${W} ${H} L 0 ${H} Z`;
  const last = coords[coords.length - 1];
  return { line, area, last };
}

const { line, area, last } = buildPaths();

const activity = [
  { title: "Lead qualified", detail: "Sarah K. · Real estate", time: "now", tone: "bg-accent" },
  { title: "Call booked", detail: "Tue, 10:30 AM · Strategy", time: "2m", tone: "bg-sky-400" },
  { title: "Follow-up sent", detail: "12 leads · WhatsApp", time: "6m", tone: "bg-amber-300" },
];

/** Decorative "operations dashboard" mockup for the hero, built in HTML/CSS. */
export function HeroDashboard() {
  return (
    <div
      className="relative mx-auto w-full max-w-[34rem]"
      role="img"
      aria-label="Example Deal in Dev operations dashboard showing pipeline growth, AI agent activity and automation metrics"
    >
      <div aria-hidden className="absolute -inset-12 -z-10 rounded-full bg-[radial-gradient(closest-side,rgb(52_211_153/0.22),transparent)] blur-3xl" />

      <TiltCard max={4}>
        <div
          aria-hidden
          className="overflow-hidden rounded-[var(--radius-xl)] border border-white/10 bg-gradient-to-b from-surface/95 to-background/95 shadow-[0_30px_80px_-20px_rgb(0_0_0/0.6)] ring-1 ring-inset ring-white/5 backdrop-blur-xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/5 px-5 py-3.5">
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-4" />
              <span className="text-[0.8rem] font-semibold text-foreground">Deal in Dev</span>
              <span className="text-foreground-muted/50">/</span>
              <span className="text-[0.8rem] text-foreground-muted">Pipeline</span>
            </div>
            <span className="flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1 text-[0.65rem] font-semibold text-accent-text">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-pulse-ring absolute inset-0 rounded-full bg-accent" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Live
            </span>
          </div>

          {/* Hero metric + chart */}
          <div className="px-5 pt-5">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs text-foreground-muted">Pipeline value</p>
                <p className="mt-1 text-3xl font-bold tracking-tight text-foreground">
                  $<CountUp value={248} suffix="k" />
                </p>
              </div>
              <span className="mb-1 rounded-md bg-accent/10 px-2 py-1 text-xs font-semibold text-accent-text">
                ↑ <CountUp value={128} suffix="%" /> leads
              </span>
            </div>

            <svg viewBox={`0 0 ${W} ${H + 8}`} className="mt-4 h-32 w-full overflow-visible" preserveAspectRatio="none">
              <defs>
                <linearGradient id="hd-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#34d399" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[0.25, 0.5, 0.75].map((g) => (
                <line key={g} x1="0" x2={W} y1={H * g} y2={H * g} stroke="currentColor" className="text-white/5" strokeDasharray="3 5" />
              ))}
              <path d={area} fill="url(#hd-area)" />
              <path d={line} fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
              <circle cx={last[0]} cy={last[1]} r="4" fill="#34d399" />
              <circle cx={last[0]} cy={last[1]} r="9" fill="#34d399" opacity="0.2" />
            </svg>
          </div>

          {/* Stats strip */}
          <div className="mt-4 grid grid-cols-2 divide-x divide-white/5 border-y border-white/5">
            <div className="px-5 py-3.5">
              <p className="text-[0.7rem] text-foreground-muted">Avg. response</p>
              <p className="mt-0.5 text-lg font-semibold text-foreground">
                <CountUp value={1.4} suffix="s" decimals={1} />
              </p>
            </div>
            <div className="px-5 py-3.5">
              <p className="text-[0.7rem] text-foreground-muted">Hours saved / week</p>
              <p className="mt-0.5 text-lg font-semibold text-foreground">
                <CountUp value={36} />
              </p>
            </div>
          </div>

          {/* Activity feed */}
          <div className="px-5 py-4">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.12em] text-foreground-muted">AI agent activity</p>
            <ul className="mt-3 space-y-2.5">
              {activity.map((item, i) => (
                <li
                  key={item.title}
                  className="animate-rise flex items-center gap-3 rounded-lg bg-white/[0.03] px-3 py-2.5"
                  style={{ animationDelay: `${0.3 + i * 0.12}s` }}
                >
                  <span className={`h-2 w-2 shrink-0 rounded-full ${item.tone}`} />
                  <div className="min-w-0 flex-1">
                    <p className="text-[0.8rem] font-medium text-foreground">{item.title}</p>
                    <p className="truncate text-[0.7rem] text-foreground-muted">{item.detail}</p>
                  </div>
                  <span className="text-[0.68rem] text-foreground-muted">{item.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-center text-xs text-foreground-muted">
              Leads qualified in <span className="font-semibold text-accent-text">8 seconds</span>
            </p>
          </div>
        </div>
      </TiltCard>
    </div>
  );
}
