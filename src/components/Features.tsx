import { Wallet, Send, TrendingUp, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const icons = [Wallet, Send, TrendingUp, Shield];

const Features = () => {
  const { t } = useTranslation();
  const items = t("features.items", { returnObjects: true }) as { title: string; description: string }[];
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* decorative blob */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div ref={ref} className="container mx-auto px-4 relative">
        <div className="max-w-3xl mb-20 scroll-fade">
          <div className="eyebrow text-primary mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            What you get
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground text-balance leading-[1.05]">
            {t("features.heading").split(",")[0]}
            {t("features.heading").includes(",") && (
              <>
                , <span className="font-serif-accent text-primary">
                  {t("features.heading").split(",").slice(1).join(",").trim()}
                </span>
              </>
            )}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            {t("features.subtitle")}
          </p>
        </div>

        <div className="mb-12 scroll-fade">
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
            {t("features.walletHeading")}
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map((feature, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="scroll-fade group glass-card rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_-20px_rgba(16,75,54,0.25)]"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="mb-6 inline-flex p-3.5 rounded-2xl bg-gradient-to-br from-accent to-accent/60 ring-1 ring-primary/10 shadow-[var(--shadow-lime)]">
                  <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
