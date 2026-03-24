import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plus } from "lucide-react";
import heroCard from "@/assets/hero-card.png";
import { SignupForm } from "@/components/SignupForm";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-16">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJWMzRoLTJ6bTAtNGgydjJoLTJ2LTJ6bS0yIDJoLTJ2Mmgydi0yem0wLTJoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yem0tMi0yaDJ2Mmgtdi0yem0wIDRoMnYyaC0ydi0yem0tMiAyaDJ2Mmgtdi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground leading-tight">
                {t("hero.heading1")}
                <br />
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  {t("hero.heading2")}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto lg:mx-0">
                {t("hero.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105 font-semibold"
                  onClick={() => setIsSignupOpen(true)}
                >
                  {t("hero.cta")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="relative animate-float">
                <img
                  src={heroCard}
                  alt="PagoPay Card"
                  className="w-full h-auto max-w-lg mx-auto"
                />
                {/* Balance widget overlay */}
                <div className="absolute top-4 right-4 md:top-8 md:right-0 bg-primary-foreground/10 backdrop-blur-md rounded-2xl p-4 border border-primary-foreground/20 shadow-lg">
                  <p className="text-primary-foreground/70 text-xs font-medium mb-1">{t("balance.title")}</p>
                  <p className="text-primary-foreground text-2xl font-bold">{t("balance.amount")}</p>
                  <button className="mt-2 flex items-center gap-1 text-accent text-xs font-semibold">
                    <Plus className="h-3 w-3" /> {t("balance.topup")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SignupForm open={isSignupOpen} onOpenChange={setIsSignupOpen} />
      </section>
    </>
  );
};

export default Hero;
