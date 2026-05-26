import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CardsSection = () => {
  const { t } = useTranslation();
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="cards" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div ref={ref} className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16 scroll-fade">
          <div className="eyebrow text-primary mb-5 justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {t("cards.eyebrow")}
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-[1.05] tracking-tight text-balance">
            {t("cards.heading")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          <div className="scroll-fade glass-card rounded-3xl p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_-20px_rgba(16,75,54,0.25)]">
            <div className="h-32 rounded-2xl bg-gradient-to-br from-muted to-muted-foreground/20 mb-8" />
            <h3 className="text-2xl font-semibold mb-3 text-foreground tracking-tight">{t("cards.plastic.title")}</h3>
            <p className="text-muted-foreground leading-relaxed">{t("cards.plastic.description")}</p>
          </div>

          <div className="scroll-fade glass-card rounded-3xl p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_-20px_rgba(16,75,54,0.25)]" style={{ transitionDelay: "80ms" }}>
            <div className="h-32 rounded-2xl bg-gradient-to-br from-primary to-primary-glow mb-8" />
            <h3 className="text-2xl font-semibold mb-3 text-foreground tracking-tight">{t("cards.metal.title")}</h3>
            <p className="text-muted-foreground leading-relaxed">{t("cards.metal.description")}</p>
          </div>
        </div>

        <div className="text-center mt-12 scroll-fade">
          <Link to="/pricing" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
            {t("cards.link")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
