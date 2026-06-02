import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";
import { minecraftPlans } from "@/lib/plans";

export const Route = createFileRoute("/minecraft")({
  head: () => ({
    meta: [
      { title: "Minecraft Hosting — FlareCloud" },
      { name: "description", content: "Lag-free Minecraft hosting with NVMe storage, DDoS protection and one-click modpacks. From $2.99/mo." },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="MINECRAFT HOSTING"
      title="Lag-Free Minecraft Servers"
      sub="Deploy any version, modpack or plugin in 30 seconds. Unlimited slots, full FTP access and one-click backups."
      features={["Instant Setup", "DDoS Protection", "Unlimited Slots", "One-click Modpacks", "NVMe Storage", "99.99% Uptime", "Free Subdomain", "Pterodactyl Panel"]}
      plans={minecraftPlans}
    />
  ),
});
