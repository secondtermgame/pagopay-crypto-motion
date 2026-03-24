import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGeoDetection } from "@/hooks/useGeoDetection";
import { getRegionById } from "@/lib/regions";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Security from "@/components/Security";
import FAQ from "@/components/FAQ";
import CryptoTicker from "@/components/CryptoTicker";
import Footer from "@/components/Footer";

const Index = () => {
  const navigate = useNavigate();
  const { detectedRegion, loading } = useGeoDetection();

  useEffect(() => {
    if (loading || !detectedRegion) return;

    // Only auto-redirect if user hasn't explicitly chosen to stay on global
    const hasChosen = localStorage.getItem("pagopay_region_chosen");
    if (hasChosen) return;

    if (detectedRegion !== "global") {
      const regionConfig = getRegionById(detectedRegion);
      localStorage.setItem("pagopay_region_chosen", "true");
      navigate(regionConfig.path, { replace: true });
    }
  }, [detectedRegion, loading, navigate]);

  return (
    <div className="min-h-screen scroll-smooth">
      <Navbar currentRegion="global" />
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
