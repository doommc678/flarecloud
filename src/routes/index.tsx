import { createFileRoute } from "@tanstack/react-router";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { Reviews } from "@/components/Reviews";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { GlobalMap } from "@/components/GlobalMap";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FlareCloud — Premium Minecraft, VPS & VDS Hosting" },
      { name: "description", content: "Lightning-fast Minecraft, VPS and VDS hosting with DDoS protection, NVMe storage and 99.99% uptime. Deploy in 30 seconds." },
      { property: "og:title", content: "FlareCloud — Premium Minecraft, VPS & VDS Hosting" },
      { property: "og:description", content: "Power your servers with FlareCloud. Instant setup, enterprise hardware, 24/7 support." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <GlobalMap />
        <Pricing />
        <Features />
        <Reviews />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
