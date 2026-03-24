import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import { getRegionByPath, Region } from "@/lib/regions";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Security from "@/components/Security";
import FAQ from "@/components/FAQ";
import CryptoTicker from "@/components/CryptoTicker";
import Footer from "@/components/Footer";

const RegionalLanding = () => {
  const { region } = useParams<{ region: string }>();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const regionPath = `/${region || ""}`;
  const regionConfig = getRegionByPath(regionPath);

  useEffect(() => {
    // If invalid region, redirect to global
    if (region && !["latam", "africa", "asia"].includes(region)) {
      navigate("/", { replace: true });
      return;
    }

    // Set language to region default if current language isn't available in this region
    if (!regionConfig.languages.includes(i18n.language)) {
      i18n.changeLanguage(regionConfig.defaultLang);
    }
  }, [region, regionConfig, i18n, navigate]);

  return (
    <div className="min-h-screen scroll-smooth">
      <Navbar currentRegion={regionConfig.id} />
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

export default RegionalLanding;
