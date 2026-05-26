import { ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Security = () => {
  const { t } = useTranslation();
  const pills = t("security.pills", { returnObjects: true }) as string[];
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="security" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="pointer-events-none absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-secondary/30 blur-3xl" />
      <div ref={ref} className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-12 scroll-fade">
          <div className="eyebrow text-primary mb-5 justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {t("security.eyebrow")}
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-[1.05] tracking-tight text-balance">
            {t("security.heading")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t("security.subtitle")}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 scroll-fade">
          {pills.map((pill, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border hover:border-accent hover:shadow-[0_15px_40px_-15px_rgba(16,75,54,0.25)] transition-all"
            >
              <ShieldCheck className="h-4 w-4 text-primary" strokeWidth={2} />
              <span className="text-sm md:text-base font-medium text-foreground">{pill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;
