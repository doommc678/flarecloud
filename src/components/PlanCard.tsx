import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, Rocket, ExternalLink } from "lucide-react";
import type { Plan } from "@/lib/plans";
import { useCurrency } from "@/lib/currency";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const DISCORD_URL = "https://discord.gg/FgCkbJA5Mf";
const REDIRECT_MS = 3500;

export function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const { format } = useCurrency();
  const [open, setOpen] = useState(false);
  const [countdown, setCountdown] = useState(Math.ceil(REDIRECT_MS / 1000));

  useEffect(() => {
    if (!open) return;
    setCountdown(Math.ceil(REDIRECT_MS / 1000));
    const tick = setInterval(() => setCountdown((c) => Math.max(0, c - 1)), 1000);
    const redirect = setTimeout(() => {
      window.open(DISCORD_URL, "_blank", "noopener,noreferrer");
      setOpen(false);
    }, REDIRECT_MS);
    return () => {
      clearInterval(tick);
      clearTimeout(redirect);
    };
  }, [open]);

  return (
    <>
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
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={`mt-6 w-full text-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
            plan.popular
              ? "bg-gradient-electric text-[#020611] glow-sm hover:glow-md"
              : "border border-primary/30 hover:bg-primary/10"
          }`}
        >
          Deploy Now
        </button>
      </motion.div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="glass-strong border-primary/30 sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-electric glow-md">
              <Rocket className="h-7 w-7 text-[#020611]" />
            </div>
            <DialogTitle className="text-center text-2xl text-gradient">
              Deploying {plan.name}…
            </DialogTitle>
            <DialogDescription className="text-center text-muted-foreground">
              To complete your order and get instant setup, please open a ticket on our
              Discord. Our team is online 24/7 and will spin up your server in minutes.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-2 rounded-xl border border-primary/20 bg-white/[0.03] p-4 text-center text-sm">
            Redirecting you to Discord in{" "}
            <span className="font-bold text-electric">{countdown}s</span>…
          </div>

          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-electric px-4 py-3 text-sm font-semibold text-[#020611] glow-sm hover:glow-md transition-all"
          >
            Go to Discord now <ExternalLink className="h-4 w-4" />
          </a>
        </DialogContent>
      </Dialog>
    </>
  );
}
