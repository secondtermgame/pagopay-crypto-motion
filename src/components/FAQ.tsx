import { useTranslation } from "react-i18next";
import FaqAccordion from "@/components/FaqAccordion";

const FAQ = () => {
  const { t } = useTranslation();

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              {t("faq.heading")}
            </h2>
            <p className="text-xl text-muted-foreground">{t("faq.subtitle")}</p>
          </div>

          <FaqAccordion />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
