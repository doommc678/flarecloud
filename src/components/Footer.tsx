import { Logo } from "./Logo";
import { Github, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="relative mt-20 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground">
            Premium Minecraft, VPS and VDS hosting engineered for speed,
            uptime, and zero compromise.
          </p>
          <div className="mt-5 flex gap-2">
            <SocialIcon href="#"><Twitter className="h-4 w-4" /></SocialIcon>
            <SocialIcon href="#"><Github className="h-4 w-4" /></SocialIcon>
            <SocialIcon href="#"><Youtube className="h-4 w-4" /></SocialIcon>
          </div>
        </div>
        <FooterCol title="Hosting" links={[
          { l: "Minecraft Hosting", h: "#minecraft" },
          { l: "VPS Hosting", h: "#vps" },
          { l: "VDS Hosting", h: "#vds" },
          { l: "Features", h: "#features" },
        ]} />
        <FooterCol title="Support" links={[
          { l: "Help Center", h: "#" },
          { l: "Status", h: "#" },
          { l: "Discord Community", h: "https://discord.gg/FgCkbJA5Mf" },
          { l: "Contact Us", h: "#contact" },
        ]} />
        <FooterCol title="Company" links={[
          { l: "About", h: "#" },
          { l: "Terms of Service", h: "#" },
          { l: "Privacy Policy", h: "#" },
          { l: "Refund Policy", h: "#" },
        ]} />
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} FlareCloud. All rights reserved.</div>
          <a
            href="https://discord.gg/FgCkbJA5Mf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-electric px-3 py-1.5 text-[#020611] font-semibold glow-sm hover:glow-md transition-all"
          >
            Join our Discord
          </a>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="h-9 w-9 inline-flex items-center justify-center rounded-lg glass hover:border-primary/40 hover:text-electric transition-colors">
      {children}
    </a>
  );
}

function FooterCol({ title, links }: { title: string; links: { l: string; h: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((x) => (
          <li key={x.l}>
            <a href={x.h} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{x.l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
