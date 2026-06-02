import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { WORLD_PATH } from "@/lib/world-path";

type Location = {
  city: string;
  country: string;
  // percentages on the equirectangular SVG (0-100)
  x: number;
  y: number;
  flag: string;
};

const LOCATIONS: Location[] = [
  { city: "New York", country: "USA", x: 29.44, y: 25.62, flag: "🇺🇸" },
  { city: "Los Angeles", country: "USA", x: 17.16, y: 29.32, flag: "🇺🇸" },
  { city: "São Paulo", country: "Brazil", x: 37.05, y: 61.32, flag: "🇧🇷" },
  { city: "London", country: "UK", x: 49.96, y: 19.62, flag: "🇬🇧" },
  { city: "Frankfurt", country: "Germany", x: 52.41, y: 20.4, flag: "🇩🇪" },
  { city: "Mumbai", country: "India", x: 70.24, y: 37.64, flag: "🇮🇳" },
  { city: "Singapore", country: "Singapore", x: 78.84, y: 47.48, flag: "🇸🇬" },
  { city: "Tokyo", country: "Japan", x: 88.8, y: 28.41, flag: "🇯🇵" },
  { city: "Sydney", country: "Australia", x: 92.0, y: 67.05, flag: "🇦🇺" },
];

// Great-circle-ish connections between hubs (just for visual flair)
const CONNECTIONS: Array<[number, number]> = [
  [0, 3], // NY → London
  [3, 4], // London → Frankfurt
  [4, 5], // Frankfurt → Mumbai
  [5, 6], // Mumbai → Singapore
  [6, 7], // Singapore → Tokyo
  [6, 8], // Singapore → Sydney
  [1, 7], // LA → Tokyo
  [0, 1], // NY → LA
  [2, 0], // São Paulo → NY
];

export function GlobalMap() {
  return (
    <section id="locations" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-electric font-medium">
            <MapPin className="h-3 w-3" /> GLOBAL NETWORK
          </div>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gradient">
            Hosted Across the Globe
          </h2>
          <p className="mt-3 text-muted-foreground">
            9 strategically located datacenters keep your players, apps and APIs blazing fast — wherever they are.
          </p>
        </div>

        <div className="relative mt-12 rounded-3xl glass p-4 md:p-8 overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
          {/* radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0,168,255,0.18), transparent 60%)",
            }}
          />
          <div className="relative aspect-[2/1] w-full">
            <WorldMap />
            {/* connection arcs overlay */}
            <svg
              viewBox="0 0 100 50"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full pointer-events-none"
            >
              {CONNECTIONS.map(([a, b], i) => {
                const A = LOCATIONS[a];
                const B = LOCATIONS[b];
                const mx = (A.x + B.x) / 2;
                const my = (A.y + B.y) / 2 - Math.abs(A.x - B.x) * 0.18 - 2;
                const d = `M ${A.x / 2} ${A.y / 2} Q ${mx / 2} ${my / 2} ${B.x / 2} ${B.y / 2}`;
                return (
                  <g key={i}>
                    <path d={d} stroke="#FF8A1F" strokeOpacity="0.35" strokeWidth="0.15" fill="none" strokeDasharray="0.6 0.6" />
                    <motion.circle
                      r="0.35"
                      fill="#FFB347"
                      initial={{ offsetDistance: "0%" }}
                      animate={{ offsetDistance: "100%" }}
                      transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: i * 0.4, ease: "linear" }}
                      style={{ offsetPath: `path('${d}')`, filter: "drop-shadow(0 0 1.2px #FF8A1F)" } as React.CSSProperties}
                    />
                  </g>
                );
              })}
            </svg>

            {LOCATIONS.map((loc, i) => (
              <Marker key={loc.city} loc={loc} delay={i * 0.25} />
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {LOCATIONS.map((l) => (
              <div key={l.city} className="flex items-center gap-2 rounded-lg bg-white/[0.03] border border-white/5 px-3 py-2 text-xs">
                <span className="text-base leading-none">{l.flag}</span>
                <div className="min-w-0">
                  <div className="font-medium truncate">{l.city}</div>
                  <div className="text-muted-foreground truncate">{l.country}</div>
                </div>
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Marker({ loc, delay }: { loc: Location; delay: number }) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 group z-10"
      style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
    >
      <motion.span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/50"
        animate={{ scale: [1, 3.5], opacity: [0.6, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, delay, ease: "easeOut" }}
        style={{ width: 12, height: 12 }}
      />
      <motion.span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30"
        animate={{ scale: [1, 2.4], opacity: [0.5, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, delay: delay + 0.6, ease: "easeOut" }}
        style={{ width: 12, height: 12 }}
      />
      <span
        className="relative block h-2.5 w-2.5 rounded-full bg-electric"
        style={{ boxShadow: "0 0 14px #00A8FF, 0 0 4px #fff" }}
      />
      <div className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md glass-strong px-2 py-1 text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        {loc.flag} {loc.city}
      </div>
    </div>
  );
}

/**
 * Realistic world map rendered from natural-earth (110m) topojson,
 * projected to equirectangular and inlined as a single SVG path.
 */
function WorldMap() {
  return (
    <svg
      viewBox="0 0 2000 1000"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="land-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00A8FF" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#0066FF" stopOpacity="0.25" />
        </linearGradient>
        <pattern id="land-dots" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.3" fill="#7fd0ff" fillOpacity="0.55" />
        </pattern>
        <mask id="land-mask">
          <path d={WORLD_PATH} fill="white" />
        </mask>
        <filter id="land-glow">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      {/* graticule */}
      <g stroke="#00A8FF" strokeOpacity="0.06" strokeWidth="1">
        {Array.from({ length: 19 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 100} y1={0} x2={i * 100} y2={1000} />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`h${i}`} x1={0} y1={i * 100} x2={2000} y2={i * 100} />
        ))}
      </g>

      {/* land — gradient fill + dot pattern overlay via mask */}
      <g mask="url(#land-mask)">
        <rect width="2000" height="1000" fill="url(#land-grad)" />
        <rect width="2000" height="1000" fill="url(#land-dots)" />
      </g>

      {/* crisp coastline stroke */}
      <path
        d={WORLD_PATH}
        fill="none"
        stroke="#00A8FF"
        strokeOpacity="0.75"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
