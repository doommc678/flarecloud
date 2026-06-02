import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#040406] overflow-hidden"
        >
          {/* lightning streaks */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent animate-streak"
                style={{
                  top: `${15 + i * 12}%`,
                  animationDelay: `${i * 0.4}s`,
                  filter: "blur(0.5px)",
                }}
              />
            ))}
          </div>
          {/* particles */}
          {[...Array(30)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-primary"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: [0, 1, 0], y: [-20, -200] }}
              transition={{
                duration: 2.5,
                delay: Math.random() * 1.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${50 + Math.random() * 30}%`,
                boxShadow: "0 0 10px #00A8FF",
              }}
            />
          ))}
          <motion.div
            initial={{ scale: 0.7, opacity: 0, filter: "blur(8px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0)" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center gap-5"
          >
            <div className="relative animate-pulse-glow rounded-2xl">
              <Logo size={64} withWord={false} />
            </div>
            <div className="text-2xl font-display font-bold tracking-tight">
              Flare<span className="text-electric">Cloud</span>
            </div>
            <div className="h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                className="h-full w-1/2 bg-gradient-electric"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
