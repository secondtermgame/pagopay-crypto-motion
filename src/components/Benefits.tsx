import pagopay3d from "@/assets/pagopay-3d.png";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Benefits = () => {
  const { t } = useTranslation();
  const items = t("benefits.items", { returnObjects: true }) as string[];
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="pagopay" className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden grain">
      <div className="pointer-events-none absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary-glow/40 blur-3xl" />

      <div ref={ref} className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 scroll-fade">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2/3 h-2/3 rounded-full bg-accent/30 blur-3xl" />
              </div>
              <img
                src={pagopay3d}
                alt="PagoPay"
                className="relative w-full max-w-sm mx-auto animate-float drop-shadow-2xl"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 scroll-fade">
            <div className="eyebrow text-accent mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {t("benefits.slogan")}
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.05] tracking-tight text-balance">
              Built for <span className="font-serif-accent text-accent">every asset</span> you own
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-xl">
              {t("benefits.subtitle")}
            </p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {items.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-6 w-6 rounded-full bg-accent/15 ring-1 ring-accent/30 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                      <Check className="h-3.5 w-3.5 text-accent" strokeWidth={2.5} />
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-white/85 leading-relaxed">{benefit}</p>
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
