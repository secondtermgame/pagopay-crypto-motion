import { Shield, Lock, Eye, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import securityBg from "@/assets/security-bg.jpg";
import { useTranslation } from "react-i18next";

const icons = [Shield, Lock, Eye, FileCheck];

const Security = () => {
  const { t } = useTranslation();
  const items = t("security.items", { returnObjects: true }) as { title: string; description: string }[];

  return (
    <section id="security" className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${securityBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t("security.heading")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("security.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {items.map((feature, index) => {
            const Icon = icons[index];
            return (
              <Card
                key={index}
                className="border-border bg-card/80 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
              >
                <CardContent className="p-8">
                  <div className="mb-4 inline-flex p-4 rounded-xl bg-gradient-accent">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Security;
