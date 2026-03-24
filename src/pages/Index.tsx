import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Security from "@/components/Security";
import FAQ from "@/components/FAQ";
import CryptoTicker from "@/components/CryptoTicker";
import Footer from "@/components/Footer";

const Index = () => {
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
    </div>
  );
};

export default Index;
