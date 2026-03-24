import { CreditCard, Fingerprint, ScanEye, Scale } from "lucide-react";
import { useTranslation } from "react-i18next";

const icons = [CreditCard, Fingerprint, ScanEye, Scale];

const Security = () => {
  const { t } = useTranslation();
  const items = t("security.items", { returnObjects: true }) as { title: string; description: string }[];

  return (
    <section id="security" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t("security.heading")}
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-3xl"
            dangerouslySetInnerHTML={{ __html: t("security.subtitle") }}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((feature, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="rounded-2xl bg-accent p-8 cursor-default hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-5 inline-flex p-3 rounded-xl bg-primary/10">
                  <Icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-bold uppercase mb-3 text-foreground tracking-wide">
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
