import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { CURRENCIES, useCurrency } from "@/lib/currency";

export function CurrencyToggle({ compact = false }: { compact?: boolean }) {
  const { currency, setCurrency, flag } = useCurrency();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className={`inline-flex items-center gap-1.5 rounded-lg border border-white/10 hover:border-primary/40 hover:bg-primary/10 transition-colors ${
          compact ? "px-2 py-1.5 text-xs" : "px-3 py-2 text-sm"
        }`}
        aria-label="Change currency"
      >
        <span className="text-base leading-none">{flag}</span>
        <span className="font-medium">{currency}</span>
        <ChevronDown className="h-3.5 w-3.5 opacity-60" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-36 rounded-xl glass-strong p-1 z-50 shadow-xl">
          {CURRENCIES.map((c) => (
            <button
              key={c.code}
              onClick={() => { setCurrency(c.code); setOpen(false); }}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-primary/10 transition-colors ${
                currency === c.code ? "text-electric" : ""
              }`}
            >
              <span className="text-base">{c.flag}</span>
              <span className="font-medium">{c.label}</span>
              <span className="ml-auto text-xs text-muted-foreground">
                {c.code === "USD" ? "$" : c.code === "EUR" ? "€" : "₹"}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
