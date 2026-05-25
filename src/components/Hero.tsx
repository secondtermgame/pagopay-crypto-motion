import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import heroCard from "@/assets/hero-card.png";
import { SignupForm } from "@/components/SignupForm";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  // Cursor spotlight
  useEffect(() => {
    const section = sectionRef.current;
    const spot = spotlightRef.current;
    if (!section || !spot) return;
    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spot.style.background = `radial-gradient(600px circle at ${x}px ${y}px, hsl(90 97% 86% / 0.10), transparent 50%)`;
    };
    section.addEventListener("mousemove", onMove);
    return () => section.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero grain pt-32 pb-20"
    >
      {/* Spotlight */}
      <div ref={spotlightRef} className="pointer-events-none absolute inset-0 z-0" />

      {/* Floating orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-accent/20 blur-3xl animate-orb" />
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-primary-glow/30 blur-3xl animate-orb" style={{ animationDelay: "-3s" }} />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl animate-orb" style={{ animationDelay: "-6s" }} />
      </div>

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <div className="eyebrow text-accent mb-6 justify-center lg:justify-start">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Crypto · Card · USD
            </div>
            <h1 className="text-[15vw] sm:text-7xl md:text-8xl lg:text-[6rem] font-bold leading-[0.95] tracking-[-0.035em] text-white text-balance">
              {t("hero.heading1")}
              <br />
              <span className="font-serif-accent text-accent">
                {t("hero.heading2")}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mt-8 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button onClick={() => setIsSignupOpen(true)} className="btn-lime px-8 py-4 text-base">
                {t("hero.cta")}
                <ArrowRight className="h-5 w-5" />
              </button>
              <a href="#about" className="btn-ghost-light px-8 py-4 text-base">
                Learn more
              </a>
            </div>
          </div>

          <div className="relative animate-scale-in [perspective:1200px]">
            {/* lime glow behind */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="w-[80%] h-[80%] rounded-full bg-accent/30 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-md">
              <img
                src={heroCard}
                alt="PagoPay metal card"
                className="w-full h-auto drop-shadow-2xl animate-float-slow [transform-style:preserve-3d]"
                style={{ transform: "rotateY(-12deg) rotateX(6deg)" }}
              />
              <img
                src={heroCard}
                alt=""
                aria-hidden="true"
                className="absolute top-8 -left-6 w-[88%] h-auto opacity-90 animate-float-slower"
                style={{ transform: "rotateY(8deg) rotateX(-4deg)", filter: "hue-rotate(10deg) brightness(0.95)" }}
              />
            </div>
          </div>
        </div>
      </div>

      <SignupForm open={isSignupOpen} onOpenChange={setIsSignupOpen} />
    </section>
  );
};

export default Hero;
