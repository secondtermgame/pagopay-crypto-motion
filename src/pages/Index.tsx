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
import Seo from "@/components/Seo";
import { useTranslation } from "react-i18next";

const Index = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="min-h-screen scroll-smooth">
      <Seo
        title="PagoPay — Spend your crypto anywhere with a prepaid Mastercard"
        description="PagoPay turns Bitcoin, Ethereum, USDC, and USDT into everyday spending power. Zero FX markup, global ATM access, and a prepaid Mastercard accepted worldwide."
        path="/"
      />
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
