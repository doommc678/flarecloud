import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";
import { vdsPlans } from "@/lib/plans";

export const Route = createFileRoute("/vds")({
  head: () => ({
    meta: [
      { title: "VDS Hosting — FlareCloud" },
      { name: "description", content: "Dedicated virtual servers with no overselling and real hardware resources. From $39/mo." },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="VDS HOSTING"
      title="Dedicated Performance, On Demand"
      sub="No overselling. No noisy neighbors. Real dedicated CPU, RAM and NVMe — for the workloads that matter."
      features={["Dedicated Resources", "No Overselling", "IPMI / KVM", "10 Gbit Options", "DDoS Protection", "Enterprise NVMe", "ECC Memory", "24/7 Support"]}
      plans={vdsPlans}
    />
  ),
});
