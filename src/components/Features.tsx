import { motion } from "framer-motion";
import {
  ShieldCheck, HardDrive, Globe2, Headphones, Zap, Settings2, DatabaseBackup, Cpu,
} from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "DDoS Protection", desc: "Enterprise-grade mitigation up to 1 Tbps included on every plan." },
  { icon: HardDrive, title: "NVMe SSD Storage", desc: "Pure NVMe arrays deliver 6× faster I/O than traditional SSDs." },
  { icon: Globe2, title: "Global Network", desc: "8 datacenters across 3 continents with low-latency anycast." },
  { icon: Headphones, title: "24/7 Support", desc: "Real humans on live chat & Discord. No bots. No waiting." },
  { icon: Zap, title: "Instant Deployment", desc: "Servers spin up in under 30 seconds — fully provisioned." },
  { icon: Settings2, title: "Advanced Panel", desc: "Powerful control panel for full server management." },
  { icon: DatabaseBackup, title: "Automatic Backups", desc: "Daily snapshots with one-click rollback included." },
  { icon: Cpu, title: "Enterprise Hardware", desc: "AMD EPYC & Intel Xeon CPUs paired with DDR4 ECC RAM." },
];

export function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-electric font-medium">
            WHY FLARECLOUD
          </div>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gradient">
            Built For Performance, Engineered For Trust
          </h2>
          <p className="mt-3 text-muted-foreground">
            Every layer of FlareCloud is tuned for speed, reliability, and security.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              className="group relative rounded-2xl glass p-5 hover:border-primary/40 hover:bg-primary/[0.04] transition-all overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-electric text-[#020611] glow-sm">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
