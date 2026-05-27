import { useState } from "react";
import { Check } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import { SignupForm } from "@/components/SignupForm";
import { Button } from "@/components/ui/button";
import plasticCard from "@/assets/plastic-card.png";
import metalCard from "@/assets/metal-card.png";

const plasticFeatures = [
  "Monthly fee: $3.50/month (first month free)",
  "Crypto conversion fee: 3%",
  "FX markup on international spend: 0%",
  "ATM withdrawals: $3 flat (up to $2,000/day)",
  "Daily POS limit: $100,000",
  "Daily transactions: 25",
  "KYC required: Yes",
  "Accepted anywhere Mastercard is accepted",
  "3D Secure enabled",
  "Supports BTC, ETH, USDC, USDT, and more",
];

const metalFeatures = [
  "Monthly fee: $0 for first 2 years (saves $84)",
  "Crypto conversion fee: 2.5% (lowest tier)",
  "FX markup on international spend: 0%",
  "ATM withdrawals: $3 flat (up to $2,000/day)",
  "Daily POS limit: $100,000",
  "Daily transactions: 25",
  "KYC required: Yes",
  "Premium metal Mastercard",
  "Accepted anywhere Mastercard is accepted",
  "3D Secure enabled",
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

const PricingPage = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <PageShell>
      <PageHero
        eyebrow="Pricing"
        title="Simple, transparent pricing."
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
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">$19.99</span>
                <span className="text-muted-foreground ml-2">one-time setup</span>
              </div>
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
              <p className="text-muted-foreground mb-5">Premium. Lifetime value.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">$500</span>
                <span className="text-muted-foreground ml-2">one-time — includes 2 years of zero monthly fees</span>
              </div>
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

export default PricingPage;
