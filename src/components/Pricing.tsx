import { motion } from "framer-motion";
import { Check, Cpu, HardDrive, MemoryStick, Network, Box } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Plan = {
  name: string;
  price: number;
  popular?: boolean;
  specs: { icon: LucideIcon; label: string; value: string }[];
  features: string[];
};

const minecraftPlans: Plan[] = [
  {
    name: "Dirt",
    price: 2.99,
    specs: [
      { icon: MemoryStick, label: "RAM", value: "2 GB" },
      { icon: Cpu, label: "CPU", value: "100% Core" },
      { icon: HardDrive, label: "Storage", value: "10 GB NVMe" },
    ],
    features: ["Unlimited Slots", "DDoS Protection", "One-click Modpacks", "Instant Setup"],
  },
  {
    name: "Iron",
    price: 6.49,
    popular: true,
    specs: [
      { icon: MemoryStick, label: "RAM", value: "6 GB" },
      { icon: Cpu, label: "CPU", value: "250% Cores" },
      { icon: HardDrive, label: "Storage", value: "40 GB NVMe" },
    ],
    features: ["Unlimited Slots", "DDoS Protection", "One-click Modpacks", "Free Subdomain", "Auto Backups"],
  },
  {
    name: "Diamond",
    price: 12.99,
    specs: [
      { icon: MemoryStick, label: "RAM", value: "12 GB" },
      { icon: Cpu, label: "CPU", value: "400% Cores" },
      { icon: HardDrive, label: "Storage", value: "100 GB NVMe" },
    ],
    features: ["Unlimited Slots", "DDoS Protection", "Priority Support", "Auto Backups", "Dedicated IP"],
  },
];

const vpsPlans: Plan[] = [
  {
    name: "VPS Spark",
    price: 5.99,
    specs: [
      { icon: Cpu, label: "CPU", value: "2 vCPU" },
      { icon: MemoryStick, label: "RAM", value: "4 GB" },
      { icon: HardDrive, label: "Storage", value: "60 GB NVMe" },
      { icon: Network, label: "Bandwidth", value: "2 TB" },
    ],
    features: ["Full Root Access", "KVM Virtualization", "Linux / Windows"],
  },
  {
    name: "VPS Bolt",
    price: 11.99,
    popular: true,
    specs: [
      { icon: Cpu, label: "CPU", value: "4 vCPU" },
      { icon: MemoryStick, label: "RAM", value: "8 GB" },
      { icon: HardDrive, label: "Storage", value: "120 GB NVMe" },
      { icon: Network, label: "Bandwidth", value: "5 TB" },
    ],
    features: ["Full Root Access", "Snapshots", "DDoS Protection"],
  },
  {
    name: "VPS Storm",
    price: 22.99,
    specs: [
      { icon: Cpu, label: "CPU", value: "8 vCPU" },
      { icon: MemoryStick, label: "RAM", value: "16 GB" },
      { icon: HardDrive, label: "Storage", value: "240 GB NVMe" },
      { icon: Network, label: "Bandwidth", value: "10 TB" },
    ],
    features: ["Full Root Access", "Priority Network", "Free Snapshots"],
  },
];

const vdsPlans: Plan[] = [
  {
    name: "VDS Core",
    price: 39.0,
    specs: [
      { icon: Cpu, label: "CPU", value: "4 Dedicated" },
      { icon: MemoryStick, label: "RAM", value: "16 GB DDR4" },
      { icon: HardDrive, label: "Storage", value: "250 GB NVMe" },
      { icon: Box, label: "Resources", value: "Dedicated" },
    ],
    features: ["No Overselling", "Full Hardware Access", "DDoS Protection"],
  },
  {
    name: "VDS Pro",
    price: 79.0,
    popular: true,
    specs: [
      { icon: Cpu, label: "CPU", value: "8 Dedicated" },
      { icon: MemoryStick, label: "RAM", value: "32 GB DDR4" },
      { icon: HardDrive, label: "Storage", value: "500 GB NVMe" },
      { icon: Box, label: "Resources", value: "Dedicated" },
    ],
    features: ["No Overselling", "IPMI Access", "Priority Support"],
  },
  {
    name: "VDS Elite",
    price: 149.0,
    specs: [
      { icon: Cpu, label: "CPU", value: "16 Dedicated" },
      { icon: MemoryStick, label: "RAM", value: "64 GB DDR4" },
      { icon: HardDrive, label: "Storage", value: "1 TB NVMe" },
      { icon: Box, label: "Resources", value: "Dedicated" },
    ],
    features: ["No Overselling", "10 Gbit Uplink", "24/7 Premium Support"],
  },
];

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`relative rounded-2xl p-6 group transition-all ${
        plan.popular ? "glass-strong ring-glow" : "glass hover:border-primary/40"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-electric px-3 py-1 text-[11px] font-semibold text-[#020611] glow-sm">
          MOST POPULAR
        </div>
      )}
      <div className="flex items-baseline justify-between">
        <h3 className="text-xl font-semibold">{plan.name}</h3>
      </div>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-4xl font-bold text-gradient">${plan.price.toFixed(2)}</span>
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

function Section({ id, eyebrow, title, sub, plans, features }: { id: string; eyebrow: string; title: string; sub: string; plans: Plan[]; features?: string[] }) {
  return (
    <section id={id} className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-electric font-medium">
            {eyebrow}
          </div>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gradient">{title}</h2>
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
          {plans.map((p, i) => (
            <PlanCard key={p.name} plan={p} index={i} />
          ))}
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
      />
      <Section
        id="vps"
        eyebrow="VPS HOSTING"
        title="Blazing-Fast Virtual Servers"
        sub="KVM-virtualized VPS on enterprise hardware with full root access."
        plans={vpsPlans}
      />
      <Section
        id="vds"
        eyebrow="VDS HOSTING"
        title="Dedicated Performance, On Demand"
        sub="Real dedicated resources. No overselling. No noisy neighbors."
        plans={vdsPlans}
      />
    </>
  );
}
