import MarkdownArticlePage from "./MarkdownArticlePage";

const PricingPage = () => (
  <MarkdownArticlePage
    title="Pricing — PagoPay"
    date="Last updated: April 2026"
    markdownPath="/pricing.md"
    backHref="/"
    backLabel="← Home"
    stripFirstHeading
  />
);

export default PricingPage;
