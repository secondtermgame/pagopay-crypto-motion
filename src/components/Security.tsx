import { CreditCard, FileCode, Clock, Monitor } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const icons = [CreditCard, FileCode, Clock, Monitor];

const Security = () => {
  const { t } = useTranslation();
  const items = t("security.items", { returnObjects: true }) as { title: string; description: string }[];
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="security" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="pointer-events-none absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-secondary/30 blur-3xl" />
      <div ref={ref} className="container mx-auto px-4 relative">
        <div className="max-w-3xl mb-16 scroll-fade">
          <div className="eyebrow text-primary mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Security
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-[1.05] tracking-tight text-balance">
            {t("security.heading")}
          </h2>
          <p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
            dangerouslySetInnerHTML={{ __html: t("security.subtitle") }}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map((feature, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="scroll-fade group relative rounded-3xl p-8 bg-card border border-border transition-all duration-500 hover:-translate-y-1 hover:border-accent hover:shadow-[0_30px_80px_-25px_rgba(16,75,54,0.3)]"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="mb-6 inline-flex p-3.5 rounded-2xl bg-primary text-accent shadow-[var(--shadow-glow)] group-hover:scale-105 transition-transform">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold mb-3 text-foreground uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p
                  className="text-sm text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: feature.description }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Security;
