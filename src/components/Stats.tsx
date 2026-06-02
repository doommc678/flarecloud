import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 12480, suffix: "+", label: "Active Servers" },
  { value: 8200, suffix: "+", label: "Happy Customers" },
  { value: 99.99, suffix: "%", label: "Uptime", decimals: 2 },
  { value: 8, suffix: "", label: "Global Locations" },
];

function Counter({ to, decimals = 0 }: { to: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const display = useTransform(mv, (v) =>
    decimals ? v.toFixed(decimals) : Math.floor(v).toLocaleString()
  );
  useEffect(() => {
    if (inView) animate(mv, to, { duration: 1.8, ease: [0.22, 1, 0.36, 1] });
  }, [inView, mv, to]);
  return <motion.span ref={ref}>{display}</motion.span>;
}

export function Stats() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-3xl glass-strong p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 ring-glow">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-3xl md:text-5xl font-bold text-gradient">
                <Counter to={s.value} decimals={s.decimals} />
                {s.suffix}
              </div>
              <div className="mt-1 text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
