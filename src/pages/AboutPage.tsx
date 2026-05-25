import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <article className="container mx-auto px-4 py-12 max-w-3xl">
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Last updated: April 2026</p>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About PagoPay & How It Works</h1>

        <p className="text-lg leading-relaxed text-foreground/90 border-l-4 border-primary pl-4 py-1 mb-10">
          <strong>PagoPay</strong> is a crypto-to-fiat payment platform operated from Québec, Canada. You deposit Bitcoin,
          Ethereum, stablecoins, or other supported crypto; funds convert to USD at market rates; you spend with a prepaid
          card worldwide with <strong>zero foreign exchange fees</strong> on international purchases. It is built for
          travelers, remote workers, and anyone who wants everyday spending power from digital assets without a
          traditional bank rail.
        </p>

        <h2 className="text-2xl font-bold text-foreground mb-3">Who operates PagoPay?</h2>
        <p className="text-foreground/90 mb-8">
          Services are operated by <strong>9538-8310 Québec Inc.</strong>, a registered Money Services Business with{" "}
          <strong>FINTRAC</strong> (Canada). Crypto custody and related infrastructure involve regulated partners such as{" "}
          <strong>ALT 5 Sigma</strong>. Card programs are subject to partner issuer terms, identity verification, and
          applicable limits.
        </p>

        <h2 className="text-2xl font-bold text-foreground mb-3">Where is PagoPay available?</h2>
        <p className="text-foreground/90 mb-8">
          PagoPay targets a <strong>global</strong> audience. Cards work where major card networks are accepted.
        </p>

        <h2 className="text-2xl font-bold text-foreground mb-3">What makes PagoPay different?</h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/90 mb-12">
          <li>
            <strong>Zero FX fees</strong> on international card spend (USD-denominated card; no extra foreign exchange
            markup).
          </li>
          <li>
            <strong>Instant</strong> crypto-to-USD conversion when you load or transact.
          </li>
          <li>
            <strong>Transparent tiers</strong> — Plastic and Metal — with clear card and load pricing (see our{" "}
            <Link to="/pricing" className="text-primary font-medium hover:underline">
              pricing page
            </Link>
            ).
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mb-4">How PagoPay works</h2>
        <p className="text-foreground/90 mb-6 leading-relaxed">
          You link crypto to a prepaid card in three moves: verify your identity, deposit supported assets, and spend
          or withdraw as USD everywhere the network is accepted — with no extra foreign exchange fees on international
          purchases.
        </p>

        <ol className="list-decimal pl-5 space-y-6 text-foreground/90 mb-12">
          <li>
            <strong className="text-foreground">Create your account and complete KYC.</strong> This unlocks wallet and
            card features and keeps the program compliant with AML rules.
          </li>
          <li>
            <strong className="text-foreground">Deposit crypto.</strong> Send BTC, ETH, USDT, USDC, or other supported
            assets to your PagoPay wallet. Conversion to USD happens at market rates when you load your card or swap in
            the app.
          </li>
          <li>
            <strong className="text-foreground">Spend or withdraw.</strong> Use your physical prepaid card at merchants
            and ATMs. Limits and fees depend on your tier (
            <Link to="/pricing" className="text-primary font-medium hover:underline">
              see pricing
            </Link>
            ).
          </li>
        </ol>

        <p className="text-sm text-muted-foreground mt-12">
          <strong>Author:</strong> PagoPay Editorial · <strong>Last updated:</strong> April 2026
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

export default AboutPage;
