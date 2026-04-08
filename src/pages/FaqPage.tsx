import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SiteHeader from "@/components/SiteHeader";
import FaqAccordion from "@/components/FaqAccordion";

const FaqPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Last updated: April 2026</p>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{t("faq.heading")}</h1>
        <p className="text-lg text-muted-foreground mb-10">{t("faq.subtitle")}</p>
        <FaqAccordion />
        <p className="mt-12">
          <Link to="/" className="text-primary font-medium hover:underline">
            ← Home
          </Link>
        </p>
      </main>
    </div>
  );
};

export default FaqPage;
