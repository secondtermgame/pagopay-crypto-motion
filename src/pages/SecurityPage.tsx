import { Link } from "react-router-dom";
import { Shield, Lock, Eye, FileCheck, Check } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";

const features = [
  {
    icon: Lock,
    title: "Encryption & authentication",
    body: "Sensitive data is protected with strong industry-standard encryption. You can secure your account with two-factor authentication (2FA) and biometric login where supported by your device.",
  },
  {
    icon: Eye,
    title: "Fraud monitoring",
    body: "Transactions and account activity are monitored to surface suspicious patterns and help block unauthorized use. You can freeze your card instantly in the app if it is lost or stolen.",
  },
  {
    icon: FileCheck,
    title: "Regulatory posture",
    body: "PagoPay Payment Services is operated by 9538-8310 Québec Inc., a registered Money Services Business with FINTRAC (Canada) under registration N300000116 and licensed by Revenu Québec under permit 0000000000022125. We follow applicable AML, KYC, and data-protection requirements and work with regulated partners for crypto custody, conversion, and card issuance.",
  },
  {
    icon: Shield,
    title: "Card security",
    body: "Cards support 3D Secure where the network and merchant require step-up authentication. USD balances backing card spend are held with licensed issuing partners per program rules.",
  },
];

const badges = [
  "FINTRAC Registered MSB",
  "Licensed by Revenu Québec",
  "Mastercard Network",
  "Bank-level encryption",
];

const SecurityPage = () => {
  return (
    <PageShell>
      <PageHero
        eyebrow="Security"
        title="Security & compliance"
        subtitle="PagoPay is designed so security and regulatory compliance are built in — not bolted on. Below is how we protect your account, funds, and data."
        align="left"
        variant="dark"
      />

      <section className="bg-primary text-primary-foreground -mt-1 pb-20 md:pb-28 relative overflow-hidden grain">
        <div className="pointer-events-none absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl" />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-wrap gap-3 mb-16">
            {badges.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs font-medium text-white/85 backdrop-blur-md"
              >
                <Check className="h-3.5 w-3.5 text-accent" strokeWidth={2.5} /> {b}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className="group glass-dark rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_30px_80px_-20px_rgba(218,254,183,0.25)]"
                >
                  <div className="mb-6 inline-flex p-3.5 rounded-2xl bg-gradient-to-br from-accent to-accent/60 text-primary shadow-[var(--shadow-lime)] group-hover:scale-105 transition-transform">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-semibold mb-3 text-white uppercase tracking-wide">
                    {f.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">{f.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-sm text-muted-foreground">
            This page summarizes common controls for marketing purposes. See our{" "}
            <Link to="/" className="text-primary hover:underline font-medium">
              homepage legal disclosures
            </Link>{" "}
            and in-app policies for binding terms.
          </p>
          <p className="mt-6">
            <Link to="/" className="text-primary font-semibold hover:underline">
              ← Home
            </Link>
          </p>
        </div>
      </section>
    </PageShell>
  );
};

export default SecurityPage;
