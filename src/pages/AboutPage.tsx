import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <article className="container mx-auto px-4 py-12 max-w-3xl prose prose-slate dark:prose-invert max-w-none">
        <p className="text-xs text-muted-foreground uppercase tracking-wide not-prose mb-2">Last updated: April 2026</p>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground not-prose mb-6">What is PagoPay?</h1>

        <p className="text-lg leading-relaxed text-foreground/90 not-prose border-l-4 border-primary pl-4 py-1 mb-10">
          <strong>PagoPay</strong> is a crypto-to-fiat payment platform operated from Québec, Canada. You deposit Bitcoin,
          Ethereum, stablecoins, or other supported crypto; funds convert to USD at market rates; you spend with a prepaid
          card worldwide with <strong>zero foreign exchange fees</strong> on international purchases. It is built for
          travelers, remote workers, and anyone who wants everyday spending power from digital assets without a
          traditional bank rail.
        </p>

        <h2 className="text-2xl font-bold text-foreground">Who operates PagoPay?</h2>
        <p>
          Services are operated by <strong>9538-8310 Québec Inc.</strong>, a registered Money Services Business with{" "}
          <strong>FINTRAC</strong> (Canada). Crypto custody and related infrastructure involve regulated partners such as{" "}
          <strong>ALT 5 Sigma</strong>. Card programs are subject to partner issuer terms, identity verification, and
          applicable limits.
        </p>

        <h2 className="text-2xl font-bold text-foreground">Where is PagoPay available?</h2>
        <p>
          PagoPay targets a <strong>global</strong> audience plus dedicated experiences for{" "}
          <Link to="/latam" className="text-primary font-medium hover:underline">
            Latin America
          </Link>{" "}
          and{" "}
          <Link to="/africa" className="text-primary font-medium hover:underline">
            Africa
          </Link>
          . Cards work where major card networks are accepted.
        </p>

        <h2 className="text-2xl font-bold text-foreground">What makes PagoPay different?</h2>
        <ul>
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

        <p className="text-sm text-muted-foreground not-prose mt-12">
          <strong>Author:</strong> PagoPay Editorial · <strong>Last updated:</strong> April 2026
        </p>
        <p className="not-prose mt-6">
          <Link to="/" className="text-primary font-medium hover:underline">
            ← Home
          </Link>
        </p>
      </article>
    </div>
  );
};

export default AboutPage;
