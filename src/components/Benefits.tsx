import pagopay3d from "@/assets/pagopay-3d.png";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

const Benefits = () => {
  const { t } = useTranslation();
  const items = t("benefits.items", { returnObjects: true }) as string[];

  return (
    <section id="pagopay" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src={appPreview}
              alt="PagoPay App"
              className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-accent-foreground font-semibold text-lg mb-2 bg-gradient-accent bg-clip-text text-transparent">
              {t("benefits.slogan")}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t("benefits.heading")}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t("benefits.subtitle")}
            </p>

            <div className="space-y-4">
              {items.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-6 w-6 rounded-full bg-gradient-accent flex items-center justify-center">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <p className="text-lg text-foreground font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
