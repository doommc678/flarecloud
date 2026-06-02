import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";
import { vpsPlans } from "@/lib/plans";

export const Route = createFileRoute("/vps")({
  head: () => ({
    meta: [
      { title: "VPS Hosting — FlareCloud" },
      { name: "description", content: "KVM-virtualized VPS on enterprise hardware with full root access. From $5.99/mo." },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="VPS HOSTING"
      title="Blazing-Fast Virtual Servers"
      sub="Full root access, KVM virtualization, Linux & Windows. Spin up in under a minute."
      features={["KVM Virtualization", "Full Root Access", "Linux / Windows", "DDoS Protection", "NVMe Storage", "1 Gbps Uplink", "Snapshots", "API Access"]}
      plans={vpsPlans}
    />
  ),
});
