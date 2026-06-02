import { motion } from "framer-motion";
import { Server, Zap, ArrowRight, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      {/* lightning bolts flashes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 h-full w-px bg-gradient-to-b from-transparent via-primary to-transparent animate-bolt"
            style={{ left: `${20 + i * 28}%`, animationDelay: `${i * 1.8}s` }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            99.99% uptime · Tier-3 datacenters · NVMe everywhere
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-gradient"
          >
            Power Your Servers<br /> With FlareCloud
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 max-w-xl text-base md:text-lg text-muted-foreground"
          >
            Lightning-fast Minecraft, VPS and VDS hosting engineered for performance,
            uptime, and zero-lag gameplay. Deploy in seconds. Scale without limits.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#minecraft"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-electric px-5 py-3 text-sm font-semibold text-[#020611] glow-md hover:glow-lg transition-all"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#minecraft"
              className="inline-flex items-center gap-2 rounded-xl border border-primary/30 glass px-5 py-3 text-sm font-semibold hover:bg-primary/10 transition-colors"
            >
              View Plans
            </a>
          </motion.div>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-electric" /> DDoS Protected</div>
            <div className="flex items-center gap-1.5"><Zap className="h-4 w-4 text-electric" /> Instant Setup</div>
            <div className="flex items-center gap-1.5"><Server className="h-4 w-4 text-electric" /> 8 Global Locations</div>
          </div>
        </div>

        {/* Floating 3D-ish server illustration */}
        <div className="lg:col-span-5 relative h-[420px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-float">
              <ServerStack />
            </div>
            {/* orbiting dots */}
            {[...Array(8)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-primary"
                style={{ boxShadow: "0 0 10px #00A8FF" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 12 + i * 2, repeat: Infinity, ease: "linear" }}
                initial={{ x: 0, y: 0 }}
              >
                <span
                  className="absolute h-1.5 w-1.5 rounded-full bg-primary"
                  style={{ transform: `translate(${120 + i * 6}px, 0)`, boxShadow: "0 0 10px #00A8FF" }}
                />
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServerStack() {
  return (
    <div className="relative w-[260px] h-[320px]" style={{ perspective: "900px" }}>
      <div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d", transform: "rotateX(12deg) rotateY(-18deg)" }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute left-0 right-0 h-20 rounded-xl glass-strong ring-glow flex items-center px-4 gap-3"
            style={{ top: i * 96 }}
          >
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse glow-sm" />
            <div className="flex-1 space-y-1.5">
              <div className="h-1.5 w-2/3 rounded-full bg-white/15" />
              <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
            </div>
            <div className="flex gap-1">
              {[...Array(4)].map((_, j) => (
                <span key={j} className="h-3 w-1 rounded-sm bg-primary/60" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
