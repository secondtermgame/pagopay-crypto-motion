import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <article className="container mx-auto px-4 py-12 max-w-3xl">
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Last updated: May 2026</p>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About PagoPay & How It Works</h1>

        <h2 className="text-2xl font-bold text-foreground mb-3">What is PagoPay?</h2>
        <p className="text-foreground/90 mb-8 leading-relaxed">
          <strong>PagoPay</strong> is a crypto-to-fiat payment platform operated from Québec, Canada. You deposit Bitcoin,
          Ethereum, stablecoins, or other supported crypto; funds are converted to USD at market rates; you spend with a prepaid
          card with <strong>zero foreign exchange markup</strong> on international purchases.
        </p>
        <p className="text-foreground/90 mb-8 leading-relaxed">
          It's built for travelers, remote workers, freelancers paid in crypto, and anyone who wants everyday spending power from digital assets — without a traditional bank rail.
        </p>

        <h2 className="text-2xl font-bold text-foreground mb-3">Who operates PagoPay?</h2>
        <p className="text-foreground/90 mb-8 leading-relaxed">
          PagoPay services are operated by <strong>9538-8310 Québec Inc.</strong>, a registered Money Services Business with{" "}
          <strong>FINTRAC (Canada)</strong> under registration N300000116 and licensed by Revenu Québec under permit 0000000000022125.
        </p>
        <p className="text-foreground/90 mb-8 leading-relaxed">
          Crypto custody, conversion, and card-issuing functions are provided through regulated partners. Card programs are subject to partner issuer terms, identity verification, and applicable limits.
        </p>

        <h2 className="text-2xl font-bold text-foreground mb-3">Where do PagoPay cards work?</h2>
        <p className="text-foreground/90 mb-8 leading-relaxed">
          PagoPay cards are accepted anywhere Mastercard is accepted — at millions of merchants and ATMs across the globe, online and in person.
        </p>

        <h2 className="text-2xl font-bold text-foreground mb-4">How PagoPay works</h2>
        <p className="text-foreground/90 mb-6 leading-relaxed">
          Link crypto to a prepaid card in three moves: verify your identity, deposit supported assets, and spend or withdraw as USD anywhere Mastercard is accepted.
        </p>

        <ol className="list-decimal pl-5 space-y-6 text-foreground/90 mb-12">
          <li>
            <strong className="text-foreground">Create your account and complete verification.</strong>{" "}
            Sign up with your email, then complete identity verification (KYC). This unlocks your wallet and card features, and keeps the program compliant with anti-money-laundering rules.
          </li>
          <li>
            <strong className="text-foreground">Deposit crypto.</strong>{" "}
            Send BTC, ETH, USDT, USDC, or other supported assets to your PagoPay wallet. Conversion to USD happens at market rates the moment your deposit confirms — your balance is always ready to spend.
          </li>
          <li>
            <strong className="text-foreground">Spend or withdraw.</strong>{" "}
            Use your physical prepaid card at merchants and ATMs anywhere Mastercard is accepted. Daily limits and per-transaction fees depend on your card tier.
          </li>
        </ol>

        <p className="text-sm text-muted-foreground mt-12">
          <strong>Author:</strong> PagoPay Editorial · <strong>Last updated:</strong> May 2026
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
