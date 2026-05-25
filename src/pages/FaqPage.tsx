import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";

const FaqPage = () => {
  const { t } = useTranslation();

  return (
    <PageShell>
      <PageHero
        eyebrow="FAQ"
        title={t("faq.heading")}
        subtitle={t("faq.subtitle")}
        align="center"
      />

      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative mb-10">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
              <input
                type="text"
                placeholder="Search frequently asked questions…"
                className="w-full pl-12 pr-5 py-4 rounded-full bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 focus:shadow-[0_0_0_4px_rgba(16,75,54,0.06)] transition-all"
              />
            </div>
            <FaqAccordion />
            <p className="mt-12 text-center">
              <Link to="/" className="text-primary font-semibold hover:underline">
                ← Home
              </Link>
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default FaqPage;
