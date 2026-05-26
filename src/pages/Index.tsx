import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import CardsSection from "@/components/CardsSection";
import FAQ from "@/components/FAQ";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import { LatamPopup } from "@/components/LatamPopup";
import { SignupForm } from "@/components/SignupForm";
import FloatingCTA from "@/components/FloatingCTA";
import { useTranslation } from "react-i18next";

const Index = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="min-h-screen scroll-smooth">
      <Navbar />
      <Hero />
      <Features />
      <Benefits />
      <CardsSection />
      <FAQ />
      <FinalCta onSignup={() => setIsSignupOpen(true)} />
      <Footer />
      <FloatingCTA onClick={() => setIsSignupOpen(true)} label={t("hero.cta")} />
      <LatamPopup onSignup={() => setIsSignupOpen(true)} />
      <SignupForm open={isSignupOpen} onOpenChange={setIsSignupOpen} />
    </div>
  );
};

export default Index;
