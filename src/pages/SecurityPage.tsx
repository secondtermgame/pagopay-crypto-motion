import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";

const SecurityPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <article className="container mx-auto px-4 py-12 max-w-3xl">
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Last updated: April 2026</p>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Security & compliance</h1>
        <p className="text-lg text-foreground/90 mb-10 leading-relaxed">
          PagoPay is designed so security and regulatory compliance are built in — not bolted on. Below is how we
          protect your account, funds, and data.
        </p>

        <section className="space-y-8 text-foreground/90">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-2">Encryption & authentication</h2>
            <p className="leading-relaxed">
              Sensitive data is protected with <strong>AES-256 encryption</strong>. You can secure your account with{" "}
              <strong>two-factor authentication (2FA)</strong> and <strong>biometric login</strong> where supported by
              your device.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground mb-2">Fraud monitoring</h2>
            <p className="leading-relaxed">
              Transactions and account activity are monitored using <strong>AI-assisted fraud detection</strong> to
              surface suspicious patterns and help block unauthorized use. You can freeze your card instantly in the
              app if it is lost or stolen.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground mb-2">Regulatory posture</h2>
            <p className="leading-relaxed">
              PagoPay Payment Services is operated by <strong>9538-8310 Québec Inc.</strong>, a registered Money
              Services Business with <strong>FINTRAC (Canada)</strong>. We follow applicable{" "}
              <strong>AML, KYC, and data-protection</strong> requirements and work with regulated partners for custody
              and card issuance.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground mb-2">Card security</h2>
            <p className="leading-relaxed">
              Cards support <strong>3-D Secure</strong> where the network and merchant require step-up authentication.
              Fiat balances backing card spend are held with <strong>licensed issuing partners</strong> per program
              rules.
            </p>
          </div>
        </section>

        <p className="text-sm text-muted-foreground mt-12">
          This page summarizes common controls for marketing purposes. See our{" "}
          <Link to="/" className="text-primary hover:underline">
            homepage legal disclosures
          </Link>{" "}
          and in-app policies for binding terms.
        </p>
        <p className="mt-6">
          <Link to="/" className="text-primary font-medium hover:underline">
            ← Home
          </Link>
        </p>
      </article>
    </div>
  );
};

export default SecurityPage;
