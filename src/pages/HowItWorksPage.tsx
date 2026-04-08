import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <article className="container mx-auto px-4 py-12 max-w-3xl">
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Last updated: April 2026</p>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How PagoPay works</h1>
        <p className="text-lg text-foreground/90 mb-10 leading-relaxed">
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
            <strong className="text-foreground">Spend or withdraw.</strong> Use your virtual or physical prepaid card at
            merchants and ATMs. Limits and fees depend on your tier (
            <Link to="/pricing" className="text-primary font-medium hover:underline">
              see pricing
            </Link>
            ).
          </li>
        </ol>

        <h2 className="text-2xl font-bold text-foreground mb-3">Regional guides</h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/90 mb-10">
          <li>
            <Link to="/latam/how-it-works" className="text-primary font-medium hover:underline">
              How it works — Latin America (ES)
            </Link>
          </li>
          <li>
            <Link to="/africa/how-it-works" className="text-primary font-medium hover:underline">
              How it works — Africa (FR)
            </Link>
          </li>
        </ul>

        <p className="text-sm text-muted-foreground">
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

export default HowItWorksPage;
