import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How fast is deployment?", a: "All FlareCloud servers deploy in under 30 seconds. Once payment is confirmed, your server is automatically provisioned and ready to use." },
  { q: "Do you offer DDoS protection?", a: "Yes — every plan includes enterprise-grade DDoS mitigation up to 1 Tbps at no extra cost." },
  { q: "Can I upgrade my plan later?", a: "Absolutely. You can upgrade or downgrade your plan anytime from the control panel with zero downtime." },
  { q: "What payment methods do you accept?", a: "We accept credit/debit cards, PayPal, UPI, crypto, and several regional payment methods." },
  { q: "Do you offer a money-back guarantee?", a: "Yes, all new customers are protected by our 7-day money-back guarantee, no questions asked." },
  { q: "Do you support modpacks?", a: "Yes — install any modpack from CurseForge or Feed The Beast with a single click from your control panel." },
];

export function Faq() {
  return (
    <section id="faq" className="relative py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-electric font-medium">FAQ</div>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gradient">Frequently Asked</h2>
        </div>
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl glass px-5 border-0 data-[state=open]:border data-[state=open]:border-primary/40 data-[state=open]:bg-primary/[0.04]"
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
