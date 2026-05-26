import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Benefits = () => {
  const { t } = useTranslation();
  const logos = t("assets.logos", { returnObjects: true }) as string[];
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="assets" className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden grain">
      <div className="pointer-events-none absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary-glow/40 blur-3xl" />

      <div ref={ref} className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center scroll-fade">
          <div className="eyebrow text-accent mb-5 justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {t("assets.eyebrow")}
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.05] tracking-tight text-balance">
            {t("assets.heading")}
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed max-w-2xl mx-auto">
            {t("assets.subtitle")}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {logos.map((logo, i) => (
              <span
                key={i}
                className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm md:text-base text-white/90 backdrop-blur-sm hover:border-accent/40 hover:bg-white/10 transition-colors"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
