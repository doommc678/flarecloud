import logo from "@/assets/flarecloud-logo.webp.asset.json";

export function Logo({ size = 36, withWord = true }: { size?: number; withWord?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="relative rounded-xl glow-sm overflow-hidden ring-1 ring-primary/40"
        style={{ width: size, height: size }}
      >
        <img src={logo.url} alt="FlareCloud" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 pointer-events-none" />
      </div>
      {withWord && (
        <span className="font-display text-lg font-bold tracking-tight">
          Flare<span className="text-electric">Cloud</span>
        </span>
      )}
    </div>
  );
}
