import { useEffect, useState } from "react";
import { Region, getRegionFromCountryCode } from "@/lib/regions";

const GEO_STORAGE_KEY = "pagopay_detected_region";

export const useGeoDetection = () => {
  const [detectedRegion, setDetectedRegion] = useState<Region | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(GEO_STORAGE_KEY);
    if (stored) {
      setDetectedRegion(stored as Region);
      setLoading(false);
      return;
    }

    const detect = async () => {
      try {
        const res = await fetch("http://ip-api.com/json/?fields=countryCode");
        const data = await res.json();
        const region = getRegionFromCountryCode(data.countryCode || "");
        localStorage.setItem(GEO_STORAGE_KEY, region);
        setDetectedRegion(region);
      } catch {
        setDetectedRegion("global");
      } finally {
        setLoading(false);
      }
    };

    detect();
  }, []);

  return { detectedRegion, loading };
};
