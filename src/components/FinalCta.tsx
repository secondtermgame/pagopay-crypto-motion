import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Props {
  onSignup: () => void;
}

const FinalCta = ({ onSignup }: Props) => {
  const { t } = useTranslation();
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-24 md:py-32 bg-gradient-hero text-white relative overflow-hidden grain">
      <div className="pointer-events-none absolute -top-32 -left-20 w-[500px] h-[500px] rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary-glow/30 blur-3xl" />

      <div ref={ref} className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center scroll-fade">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.05] tracking-tight text-balance">
            {t("finalCta.heading")}
          </h2>
          <p className="text-lg md:text-xl text-white/75 mb-10 leading-relaxed">
            {t("finalCta.subtitle")}
          </p>
          <button onClick={onSignup} className="btn-lime px-8 py-4 text-base">
            {t("finalCta.button")}
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
