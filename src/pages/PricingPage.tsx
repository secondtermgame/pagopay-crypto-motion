import MarkdownArticlePage from "./MarkdownArticlePage";
import CardsSection from "@/components/CardsSection";

const PricingPage = () => (
  <>
    <CardsSection />
    <MarkdownArticlePage
      title="Pricing"
      date="Last updated: May 2026"
      markdownPath="/pricing.md"
      backHref="/"
      backLabel="← Home"
      stripFirstHeading
      eyebrow="Pricing"
    />
  </>
);

export default PricingPage;
