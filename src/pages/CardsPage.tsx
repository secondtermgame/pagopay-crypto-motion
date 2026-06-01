import { useState } from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import { SignupForm } from "@/components/SignupForm";
import { Button } from "@/components/ui/button";
import JsonLd from "@/components/JsonLd";
import Seo from "@/components/Seo";
import plasticCard from "@/assets/plastic-card.png";
import metalCard from "@/assets/metal-card.png";

const plasticFeatures = [
  "Free Physical PagoPay card",
  "Delivered to your door",
  "Zero FX markup",
  "ATM withdrawals",
  "Zero load fees",
  "No transaction fees",
  "No cross-border fees",
  "No decline fees",
  "3D Secure online protection",
  "Accepted anywhere Mastercard is accepted",
  "Supports BTC, ETH, USDC, USDT, and more",
];

const metalFeatures = [
  "Premium metal PagoPay Card",
  "Lowest conversion rate available",
  "Zero FX markup",
  "ATM withdrawals (up to $2,000 per withdrawal)",
  "Zero load fees",
  "No transaction fees",
  "No cross-border fees",
  "No decline fees",
  "Daily POS limit: $100,000",
  "3D Secure online protection",
  "Accepted anywhere Mastercard is accepted",
  "Supports BTC, ETH, USDC, USDT, and more",
];

const metalBenefits = [
  "Luxury Marketplace access",
  "Private Jet booking",
  "Exclusive Member Events",
  "24/7 Concierge Support",
];

const includedAll = [
  "No card top-up fees",
  "Zero foreign exchange markup on international purchases",
  "Zero load fees, decline fees, or per-swipe fees",
  "Strong encryption and 2FA protection",
  "Biometric login support",
  "3D Secure for online transactions",
  "Major cryptocurrencies supported (BTC, ETH, USDC, USDT, and more)",
  "Accepted anywhere Mastercard is accepted",
];

const CardsPage = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const feeDisclosure = (
    <div className="py-6 text-center">
      <p className="max-w-[800px] mx-auto text-sm text-muted-foreground italic">
        Account Setup Fee, monthly maintenance fees, and crypto conversion fees apply. Full details in the app and{" "}
        <Link to="/cardholder-agreement" className="underline hover:text-foreground transition-colors">
          Cardholder Agreement
        </Link>
        .
      </p>
    </div>
  );

  return (
    <PageShell afterCta={feeDisclosure}>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: "PagoPay Plastic Card",
            description: "Physical prepaid Mastercard for everyday crypto-to-fiat spending. Zero FX markup, ATM withdrawals, no transaction fees.",
            brand: { "@type": "Brand", name: "PagoPay" },
            category: "Prepaid Card",
            additionalProperty: plasticFeatures.map((f) => ({
              "@type": "PropertyValue",
              name: f,
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: "PagoPay Metal Card",
            description: "Premium metal prepaid Mastercard with lowest conversion rate, luxury marketplace access, and 24/7 concierge support.",
            brand: { "@type": "Brand", name: "PagoPay" },
            category: "Prepaid Card",
            additionalProperty: [...metalFeatures, ...metalBenefits].map((f) => ({
              "@type": "PropertyValue",
              name: f,
            })),
          },
        ]}
      />
      <PageHero
        eyebrow="Cards"
        title="Choose your PagoPay card."
        subtitle="No hidden fees. No surprises. Choose the card that fits how you spend."
        align="center"
      />
      <section className="pb-20 md:pb-28 relative overflow-hidden">
        <div className="pointer-events-none absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="container mx-auto px-4 relative">

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Plastic */}
            <div className="glass-card rounded-3xl p-6 md:p-10 flex flex-col">
              <div className="h-40 md:h-48 mb-8 flex items-center justify-center">
                <img
                  src={plasticCard}
                  alt="PagoPay plastic card"
                  className="max-w-[85%] max-h-full w-auto h-auto object-contain rounded-xl drop-shadow-[0_20px_30px_rgba(16,75,54,0.35)]"
                />
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-foreground tracking-tight">Plastic</h2>
              <p className="text-muted-foreground mb-5">Start spending fast.</p>
              <ul className="space-y-3">
                {plasticFeatures.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-foreground/90">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <Button className="w-full" size="lg" onClick={() => setIsSignupOpen(true)}>
                  Get started
                </Button>
              </div>
            </div>

            {/* Metal */}
            <div className="glass-card rounded-3xl p-6 md:p-10 flex flex-col ring-1 ring-primary/30">
              <div className="h-40 md:h-48 mb-8 flex items-center justify-center">
                <img
                  src={metalCard}
                  alt="PagoPay metal card"
                  className="max-w-[85%] max-h-full w-auto h-auto object-contain rounded-xl drop-shadow-[0_20px_30px_rgba(0,0,0,0.45)]"
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight">Metal</h2>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">Best Value</span>
              </div>
              <p className="text-muted-foreground mb-5">Premium.</p>
              <ul className="space-y-3">
                {metalFeatures.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-foreground/90">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-border/50">
                <p className="text-sm font-semibold text-foreground mb-3">Exclusive Metal benefits</p>
                <ul className="space-y-3">
                  {metalBenefits.map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-foreground/90">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto pt-8">
                <Button className="w-full" size="lg" onClick={() => setIsSignupOpen(true)}>
                  Get started
                </Button>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-20">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 tracking-tight">
              Included with every card
            </h2>
            <ul className="columns-1 sm:columns-2 gap-x-8 gap-y-3 space-y-3">
              {includedAll.map((f) => (
                <li key={f} className="flex gap-3 text-foreground/90 break-inside-avoid">
                  <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 tracking-tight">
              Start spending in three steps
            </h2>
            <ol className="space-y-4">
              {[
                ["Sign up", "Create your account at mypagopay.com"],
                ["Complete verification", "Verify your identity (KYC) to unlock card features"],
                ["Deposit and spend", "Deposit crypto, auto-converted to USD, ready to spend on your card"],
              ].map(([title, desc], i) => (
                <li key={title} className="flex gap-4">
                  <span className="h-8 w-8 shrink-0 rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{title}</p>
                    <p className="text-muted-foreground">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <SignupForm open={isSignupOpen} onOpenChange={setIsSignupOpen} />
    </PageShell>
  );
};

export default CardsPage;
