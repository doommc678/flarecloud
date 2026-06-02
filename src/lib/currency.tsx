import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type CurrencyCode = "USD" | "EUR" | "INR";

const RATES: Record<CurrencyCode, number> = {
  USD: 1,
  EUR: 0.92,
  INR: 83.2,
};

const SYMBOLS: Record<CurrencyCode, string> = {
  USD: "$",
  EUR: "€",
  INR: "₹",
};

const FLAGS: Record<CurrencyCode, string> = {
  USD: "🇺🇸",
  EUR: "🇪🇺",
  INR: "🇮🇳",
};

type Ctx = {
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
  format: (usd: number) => string;
  symbol: string;
  flag: string;
};

const CurrencyContext = createContext<Ctx | null>(null);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("USD");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("fc_currency") as CurrencyCode | null) : null;
    if (saved && RATES[saved]) setCurrencyState(saved);
  }, []);

  const setCurrency = (c: CurrencyCode) => {
    setCurrencyState(c);
    if (typeof window !== "undefined") localStorage.setItem("fc_currency", c);
  };

  const format = (usd: number) => {
    const v = usd * RATES[currency];
    if (currency === "INR") return `${SYMBOLS[currency]}${Math.round(v).toLocaleString("en-IN")}`;
    return `${SYMBOLS[currency]}${v.toFixed(2)}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, format, symbol: SYMBOLS[currency], flag: FLAGS[currency] }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
  return ctx;
}

export const CURRENCIES: { code: CurrencyCode; label: string; flag: string }[] = [
  { code: "USD", label: "USD", flag: FLAGS.USD },
  { code: "EUR", label: "EUR", flag: FLAGS.EUR },
  { code: "INR", label: "INR", flag: FLAGS.INR },
];
