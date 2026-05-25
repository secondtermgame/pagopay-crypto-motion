import { useTranslation } from "react-i18next";
import FaqAccordion from "@/components/FaqAccordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FAQ = () => {
  const { t } = useTranslation();
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="faq" className="py-24 md:py-32 bg-background relative">
      <div ref={ref} className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 scroll-fade">
            <div className="eyebrow text-primary mb-5 justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              FAQ
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-[1.05] tracking-tight">
              {t("faq.heading")}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{t("faq.subtitle")}</p>
          </div>
          <div className="scroll-fade">
            <FaqAccordion />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
