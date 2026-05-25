import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Security from "@/components/Security";
import FAQ from "@/components/FAQ";
import CryptoTicker from "@/components/CryptoTicker";
import Footer from "@/components/Footer";
import { LatamPopup } from "@/components/LatamPopup";
import { SignupForm } from "@/components/SignupForm";

const Index = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <div className="min-h-screen scroll-smooth">
      <Navbar />
      <Hero />
      <Features />
      <Benefits />
      <Security />
      <FAQ />
      <CryptoTicker />
      <Footer />
      <LatamPopup onSignup={() => setIsSignupOpen(true)} />
      <SignupForm open={isSignupOpen} onOpenChange={setIsSignupOpen} />
    </div>
  );
};

export default Index;
