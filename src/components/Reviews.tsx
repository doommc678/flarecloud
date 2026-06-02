import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const reviews = [
  { name: "Alex M.", role: "Modpack Owner", text: "Switched 4 servers to FlareCloud. Zero lag, instant setup, support replies in minutes.", rating: 5, avatar: "AM" },
  { name: "Priya S.", role: "SMP Admin", text: "The control panel is unreal. Backups, mods, plugins — it just works.", rating: 5, avatar: "PS" },
  { name: "Jonas K.", role: "VPS Customer", text: "Best price-to-performance VPS I've ever rented. Network is genuinely fast.", rating: 5, avatar: "JK" },
  { name: "Maya R.", role: "Network Owner", text: "We host a 500-player network here. Hardware is solid and DDoS protection saved us twice.", rating: 5, avatar: "MR" },
  { name: "Theo B.", role: "Indie Dev", text: "Deployment in 30 seconds, no exaggeration. Migrated from another host instantly.", rating: 4, avatar: "TB" },
  { name: "Sara L.", role: "VDS Customer", text: "Dedicated hardware at virtual prices. The IPMI access is a game changer.", rating: 5, avatar: "SL" },
];

export function Reviews() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % reviews.length), 4500);
    return () => clearInterval(t);
  }, []);

  const visible = [0, 1, 2].map((o) => reviews[(index + o) % reviews.length]);

  return (
    <section id="reviews" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-electric font-medium">
            CUSTOMER REVIEWS
          </div>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gradient">Loved By Server Owners</h2>
          <p className="mt-3 text-muted-foreground">Real feedback from real customers.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {visible.map((r, i) => (
            <motion.div
              key={`${r.name}-${index}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl glass p-6 hover:border-primary/40 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gradient-electric text-[#020611] font-bold flex items-center justify-center glow-sm">
                  {r.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
              <div className="mt-3 flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className={`h-4 w-4 ${j < r.rating ? "fill-primary text-primary" : "text-white/20"}`} />
                ))}
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">"{r.text}"</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-1.5">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-primary" : "w-1.5 bg-white/20"}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
