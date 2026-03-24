export type Region = "global" | "latam" | "africa";

export interface RegionConfig {
  id: Region;
  path: string;
  languages: string[];
  defaultLang: string;
}

export const regions: RegionConfig[] = [
  { id: "global", path: "/", languages: ["en", "es", "fr"], defaultLang: "en" },
  { id: "latam", path: "/latam", languages: ["es", "en"], defaultLang: "es" },
  { id: "africa", path: "/africa", languages: ["fr", "en"], defaultLang: "fr" },
  { id: "asia", path: "/asia", languages: ["en"], defaultLang: "en" },
];

export const getRegionByPath = (path: string): RegionConfig => {
  return regions.find((r) => r.path === path) || regions[0];
};

export const getRegionById = (id: Region): RegionConfig => {
  return regions.find((r) => r.id === id) || regions[0];
};

// Country-code to region mapping for geo-IP
const latamCountries = new Set([
  "MX", "GT", "HN", "SV", "NI", "CR", "PA", "CO", "VE", "EC", "PE", "BO",
  "CL", "AR", "UY", "PY", "BR", "CU", "DO", "PR", "JM", "HT", "TT",
]);

const africaCountries = new Set([
  "DZ", "AO", "BJ", "BW", "BF", "BI", "CM", "CV", "CF", "TD", "KM", "CG",
  "CD", "CI", "DJ", "EG", "GQ", "ER", "SZ", "ET", "GA", "GM", "GH", "GN",
  "GW", "KE", "LS", "LR", "LY", "MG", "MW", "ML", "MR", "MU", "MA", "MZ",
  "NA", "NE", "NG", "RW", "ST", "SN", "SC", "SL", "SO", "ZA", "SS", "SD",
  "TZ", "TG", "TN", "UG", "ZM", "ZW",
]);

const asiaCountries = new Set([
  "AF", "AM", "AZ", "BH", "BD", "BT", "BN", "KH", "CN", "GE", "IN", "ID",
  "IR", "IQ", "IL", "JP", "JO", "KZ", "KW", "KG", "LA", "LB", "MY", "MV",
  "MN", "MM", "NP", "OM", "PK", "PH", "QA", "SA", "SG", "KR", "LK", "SY",
  "TW", "TJ", "TH", "TL", "TR", "TM", "AE", "UZ", "VN", "YE",
]);

export const getRegionFromCountryCode = (code: string): Region => {
  if (latamCountries.has(code)) return "latam";
  if (africaCountries.has(code)) return "africa";
  if (asiaCountries.has(code)) return "asia";
  return "global";
};
