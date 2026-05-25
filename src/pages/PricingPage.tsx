import MarkdownArticlePage from "./MarkdownArticlePage";

const PricingPage = () => (
  <MarkdownArticlePage
    title="Pricing"
    date="Last updated: April 2026"
    markdownPath="/pricing.md"
    backHref="/"
    backLabel="← Home"
    stripFirstHeading
    eyebrow="Pricing"
  />
);

export default PricingPage;
