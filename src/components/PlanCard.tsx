import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { Plan } from "@/lib/plans";
import { useCurrency } from "@/lib/currency";

export function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const { format } = useCurrency();
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`relative rounded-2xl p-6 group transition-all ${
        plan.popular ? "glass-strong ring-glow" : "glass hover:border-primary/40"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-electric px-3 py-1 text-[11px] font-semibold text-[#020611] glow-sm">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-xl font-semibold">{plan.name}</h3>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-4xl font-bold text-gradient">{format(plan.price)}</span>
        <span className="text-sm text-muted-foreground">/mo</span>
      </div>
      <div className="mt-5 space-y-2.5">
        {plan.specs.map((s) => (
          <div key={s.label} className="flex items-center justify-between rounded-lg bg-white/[0.03] border border-white/5 px-3 py-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <s.icon className="h-4 w-4 text-electric" />
              {s.label}
            </div>
            <div className="text-sm font-medium">{s.value}</div>
          </div>
        ))}
      </div>
      <ul className="mt-5 space-y-2">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="h-4 w-4 text-electric shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <a
        href="#register"
        className={`mt-6 block text-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
          plan.popular
            ? "bg-gradient-electric text-[#020611] glow-sm hover:glow-md"
            : "border border-primary/30 hover:bg-primary/10"
        }`}
      >
        Deploy Now
      </a>
    </motion.div>
  );
}
