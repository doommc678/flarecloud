import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { CurrencyToggle } from "./CurrencyToggle";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

type NavLink = { label: string; to?: string; href?: string };

const links: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "Minecraft", to: "/minecraft" },
  { label: "VPS", to: "/vps" },
  { label: "VDS", to: "/vds" },
  { label: "Locations", href: "/#locations" },
  { label: "Features", href: "/#features" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const renderLink = (l: NavLink, onClick?: () => void, className?: string) =>
    l.to ? (
      <Link key={l.label} to={l.to} onClick={onClick} className={className}>
        {l.label}
      </Link>
    ) : (
      <a key={l.label} href={l.href} onClick={onClick} className={className}>
        {l.label}
      </a>
    );

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all ${scrolled ? "glass-strong" : "glass"}`}>
          <Link to="/" className="shrink-0">
            <Logo />
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) =>
              renderLink(l, undefined, "px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-white/5")
            )}
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <CurrencyToggle />
            <a href="#login" className="text-sm px-3 py-2 text-muted-foreground hover:text-foreground transition-colors">
              Login
            </a>
            <a
              href="https://discord.gg/FgCkbJA5Mf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 rounded-lg bg-gradient-electric px-4 py-2 text-sm font-semibold text-[#020611] glow-sm hover:glow-md transition-all"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3a.07.07 0 0 0-.073.035c-.21.375-.444.864-.608 1.249a18.27 18.27 0 0 0-5.487 0 12.51 12.51 0 0 0-.617-1.249.07.07 0 0 0-.073-.035 19.74 19.74 0 0 0-3.76 1.369.064.064 0 0 0-.03.025C2.36 8.046 1.69 11.61 2.02 15.131a.08.08 0 0 0 .031.054 19.9 19.9 0 0 0 5.993 3.03.07.07 0 0 0 .076-.026c.462-.63.873-1.295 1.226-1.994a.07.07 0 0 0-.038-.097 13.1 13.1 0 0 1-1.872-.892.07.07 0 0 1-.007-.117c.126-.094.252-.192.371-.291a.07.07 0 0 1 .073-.01c3.927 1.793 8.18 1.793 12.062 0a.07.07 0 0 1 .074.009c.12.099.245.198.371.292a.07.07 0 0 1-.006.117c-.598.349-1.22.644-1.873.891a.07.07 0 0 0-.038.098c.36.7.772 1.363 1.225 1.994a.07.07 0 0 0 .076.027 19.84 19.84 0 0 0 6.002-3.03.08.08 0 0 0 .032-.054c.5-4.177-.838-7.71-3.548-10.737a.055.055 0 0 0-.028-.026ZM8.02 12.96c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.419 0 1.334-.955 2.42-2.157 2.42Zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.419 0 1.334-.946 2.42-2.157 2.42Z" />
              </svg>
              Discord
            </a>
          </div>
          <div className="flex md:hidden items-center gap-2">
            <CurrencyToggle compact />
            <button className="p-2 rounded-md hover:bg-white/5" onClick={() => setOpen(!open)} aria-label="Menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 glass-strong rounded-2xl p-3 flex flex-col gap-1"
          >
            {links.map((l) =>
              renderLink(l, () => setOpen(false), "px-3 py-2 rounded-md text-sm hover:bg-white/5")
            )}
            <a
              href="https://discord.gg/FgCkbJA5Mf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 px-3 py-2 text-center rounded-lg bg-gradient-electric text-[#020611] text-sm font-semibold"
            >
              Join Discord
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
