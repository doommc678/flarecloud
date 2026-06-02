import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PlanCard } from "@/components/PlanCard";
import { CurrencyToggle } from "@/components/CurrencyToggle";
import type { Plan } from "@/lib/plans";
import type { ReactNode } from "react";

export function CategoryPage({
  eyebrow, title, sub, plans, features, hero,
}: {
  eyebrow: string;
  title: string;
  sub: string;
  plans: Plan[];
  features?: string[];
  hero?: ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24">
        <section className="relative">
          <div className="absolute inset-0 grid-bg pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-electric font-medium">
              {eyebrow}
            </div>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold text-gradient leading-[1.05]">{title}</h1>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">{sub}</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <CurrencyToggle />
              <span className="text-xs text-muted-foreground">Prices shown in your selected currency</span>
            </div>
            {hero}
            {features && (
              <div className="mt-8 flex flex-wrap justify-center gap-2">
                {features.map((f) => (
                  <span key={f} className="text-xs px-3 py-1.5 rounded-full glass text-muted-foreground">{f}</span>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="relative mt-16">
          <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {plans.map((p, i) => (
              <PlanCard key={p.name} plan={p} index={i} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
