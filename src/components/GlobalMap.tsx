import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

type Location = {
  city: string;
  country: string;
  // percentages on the equirectangular SVG (0-100)
  x: number;
  y: number;
  flag: string;
};

const LOCATIONS: Location[] = [
  { city: "New York", country: "USA", x: 27, y: 38, flag: "🇺🇸" },
  { city: "Los Angeles", country: "USA", x: 16, y: 41, flag: "🇺🇸" },
  { city: "São Paulo", country: "Brazil", x: 35, y: 67, flag: "🇧🇷" },
  { city: "London", country: "UK", x: 48, y: 32, flag: "🇬🇧" },
  { city: "Frankfurt", country: "Germany", x: 51, y: 33, flag: "🇩🇪" },
  { city: "Mumbai", country: "India", x: 67, y: 50, flag: "🇮🇳" },
  { city: "Singapore", country: "Singapore", x: 76, y: 58, flag: "🇸🇬" },
  { city: "Tokyo", country: "Japan", x: 86, y: 40, flag: "🇯🇵" },
  { city: "Sydney", country: "Australia", x: 88, y: 73, flag: "🇦🇺" },
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
          <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
          <div className="relative aspect-[2/1] w-full">
            <WorldMap />
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
      className="absolute -translate-x-1/2 -translate-y-1/2 group"
      style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
    >
      <motion.span
        className="absolute inset-0 -m-1.5 rounded-full bg-primary/50"
        animate={{ scale: [1, 3.5], opacity: [0.6, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, delay, ease: "easeOut" }}
        style={{ width: 12, height: 12 }}
      />
      <motion.span
        className="absolute inset-0 -m-1.5 rounded-full bg-primary/30"
        animate={{ scale: [1, 2.4], opacity: [0.5, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, delay: delay + 0.6, ease: "easeOut" }}
        style={{ width: 12, height: 12 }}
      />
      <span
        className="relative block h-3 w-3 rounded-full bg-electric"
        style={{ boxShadow: "0 0 14px #00A8FF, 0 0 4px #fff" }}
      />
      <div className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md glass-strong px-2 py-1 text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        {loc.flag} {loc.city}
      </div>
    </div>
  );
}

/**
 * Simplified continent silhouettes on an equirectangular projection (viewBox 1000x500).
 * Stylized — not geographically perfect, optimized for a futuristic look.
 */
function WorldMap() {
  return (
    <svg
      viewBox="0 0 1000 500"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="land" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00A8FF" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0066FF" stopOpacity="0.15" />
        </linearGradient>
        <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.1" fill="#00A8FF" fillOpacity="0.55" />
        </pattern>
        <mask id="continents">
          {/* North America */}
          <path d="M120 90 L260 70 L320 130 L300 200 L240 230 L170 220 L130 180 Z" fill="white" />
          {/* Central / South America */}
          <path d="M250 240 L320 245 L340 310 L320 400 L280 420 L260 350 L240 290 Z" fill="white" />
          {/* Europe */}
          <path d="M460 110 L560 105 L580 150 L540 180 L470 170 Z" fill="white" />
          {/* Africa */}
          <path d="M480 200 L580 195 L610 290 L560 380 L510 380 L470 290 Z" fill="white" />
          {/* Asia */}
          <path d="M580 90 L820 80 L880 160 L820 230 L720 240 L640 210 L590 160 Z" fill="white" />
          {/* India */}
          <path d="M660 220 L710 215 L700 290 L680 300 L660 260 Z" fill="white" />
          {/* SE Asia / Indonesia */}
          <path d="M760 270 L860 275 L880 310 L800 320 L740 295 Z" fill="white" />
          {/* Australia */}
          <path d="M820 350 L920 345 L935 410 L850 420 L810 390 Z" fill="white" />
        </mask>
      </defs>
      {/* base ocean */}
      <rect width="1000" height="500" fill="transparent" />
      {/* continents fill + dot overlay */}
      <g mask="url(#continents)">
        <rect width="1000" height="500" fill="url(#land)" />
        <rect width="1000" height="500" fill="url(#dots)" />
      </g>
      {/* meridians / parallels grid */}
      <g stroke="#00A8FF" strokeOpacity="0.08" strokeWidth="1">
        {[...Array(10)].map((_, i) => (
          <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="500" />
        ))}
        {[...Array(6)].map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 100} x2="1000" y2={i * 100} />
        ))}
      </g>
    </svg>
  );
}
