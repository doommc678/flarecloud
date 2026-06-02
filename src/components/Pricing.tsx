import { motion } from "framer-motion";
import { PlanCard } from "./PlanCard";
import { minecraftPlans, vpsPlans, vdsPlans, type Plan } from "@/lib/plans";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

function Section({
  id, eyebrow, title, sub, plans, features, viewAllHref,
}: {
  id: string; eyebrow: string; title: string; sub: string;
  plans: Plan[]; features?: string[]; viewAllHref: string;
}) {
  return (
    <section id={id} className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-electric font-medium">
            {eyebrow}
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-3xl md:text-5xl font-bold text-gradient"
          >
            {title}
          </motion.h2>
          <p className="mt-3 text-muted-foreground">{sub}</p>
        </div>
        {features && (
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {features.map((f) => (
              <span key={f} className="text-xs px-3 py-1.5 rounded-full glass text-muted-foreground">{f}</span>
            ))}
          </div>
        )}
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {plans.slice(0, 3).map((p, i) => (
            <PlanCard key={p.name} plan={p} index={i} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            to={viewAllHref}
            className="inline-flex items-center gap-2 rounded-xl border border-primary/30 glass px-5 py-2.5 text-sm font-semibold hover:bg-primary/10 transition-colors"
          >
            View All {eyebrow.split(" ")[0]} Plans <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <>
      <Section
        id="minecraft"
        eyebrow="MINECRAFT HOSTING"
        title="Lag-Free Minecraft Servers"
        sub="From vanilla to massive modpacks — deploy in 30 seconds with one click."
        features={["Instant Setup", "DDoS Protection", "Unlimited Slots", "One-click Modpacks", "NVMe Storage", "99.99% Uptime"]}
        plans={minecraftPlans}
        viewAllHref="/minecraft"
      />
      <Section
        id="vps"
        eyebrow="VPS HOSTING"
        title="Blazing-Fast Virtual Servers"
        sub="KVM-virtualized VPS on enterprise hardware with full root access."
        plans={vpsPlans}
        viewAllHref="/vps"
      />
      <Section
        id="vds"
        eyebrow="VDS HOSTING"
        title="Dedicated Performance, On Demand"
        sub="Real dedicated resources. No overselling. No noisy neighbors."
        plans={vdsPlans}
        viewAllHref="/vds"
      />
    </>
  );
}
