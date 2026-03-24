import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { Region, regions, getRegionById } from "@/lib/regions";
import logoWhite from "@/assets/pagopay-white.png";

const navLinks = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "pagopay", href: "#pagopay" },
  { key: "security", href: "#security" },
  { key: "faq", href: "#faq" },
];

const langLabels: Record<string, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
};

const langFlags: Record<string, string> = {
  en: "🇬🇧",
  es: "🇪🇸",
  fr: "🇫🇷",
};

interface NavbarProps {
  currentRegion?: Region;
}

const Navbar = ({ currentRegion = "global" }: NavbarProps) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [regionDropdownOpen, setRegionDropdownOpen] = useState(false);

  const regionConfig = getRegionById(currentRegion);
  const availableLanguages = regionConfig.languages;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    if (!regionDropdownOpen) return;
    const close = () => setRegionDropdownOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [regionDropdownOpen]);

  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const switchRegion = (regionId: Region) => {
    const config = getRegionById(regionId);
    localStorage.setItem("pagopay_region_chosen", "true");
    // Switch language to region default if current isn't available
    if (!config.languages.includes(i18n.language)) {
      i18n.changeLanguage(config.defaultLang);
    }
    navigate(config.path);
    setRegionDropdownOpen(false);
    setMobileOpen(false);
  };

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#home" onClick={() => scrollTo("#home")}>
          <img src={logoWhite} alt="PagoPay" className="h-8 w-auto" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.key}
              onClick={() => scrollTo(link.href)}
              className="text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium transition-colors"
            >
              {t(`nav.${link.key}`)}
            </button>
          ))}

          {/* Language switcher */}
          <div className="flex items-center gap-1">
            {availableLanguages.map((lang) => (
              <button
                key={lang}
                onClick={() => switchLanguage(lang)}
                className={`text-xs font-semibold px-2 py-1 rounded transition-colors ${
                  i18n.language === lang
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "text-primary-foreground/60 hover:text-primary-foreground"
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Region selector */}
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setRegionDropdownOpen(!regionDropdownOpen);
              }}
              className="flex items-center gap-1 text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium transition-colors border border-primary-foreground/30 rounded px-2 py-1"
            >
              <Globe className="h-3.5 w-3.5" />
              {t(`region.${currentRegion}`)}
              <ChevronDown className="h-3 w-3" />
            </button>

            {regionDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 bg-primary/95 backdrop-blur-md border border-primary-foreground/20 rounded-lg shadow-xl overflow-hidden min-w-[160px]">
                {regions.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => switchRegion(r.id)}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                      currentRegion === r.id
                        ? "bg-primary-foreground/20 text-primary-foreground font-semibold"
                        : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                    }`}
                  >
                    {t(`region.${r.id}`)}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-md border-t border-primary-foreground/10">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => scrollTo(link.href)}
                className="text-primary-foreground/80 hover:text-primary-foreground text-left text-sm font-medium transition-colors"
              >
                {t(`nav.${link.key}`)}
              </button>
            ))}

            {/* Mobile language switcher */}
            <div className="border-t border-primary-foreground/10 pt-3">
              <p className="text-primary-foreground/50 text-xs uppercase tracking-wider mb-2">Language</p>
              <div className="flex gap-2">
                {availableLanguages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => switchLanguage(lang)}
                    className={`text-sm px-3 py-1.5 rounded transition-colors ${
                      i18n.language === lang
                        ? "bg-primary-foreground/20 text-primary-foreground font-semibold"
                        : "text-primary-foreground/60 hover:text-primary-foreground"
                    }`}
                  >
                    {langFlags[lang]} {langLabels[lang]}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile region switcher */}
            <div className="border-t border-primary-foreground/10 pt-3">
              <p className="text-primary-foreground/50 text-xs uppercase tracking-wider mb-2">{t("region.selector")}</p>
              <div className="flex flex-col gap-1">
                {regions.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => switchRegion(r.id)}
                    className={`text-left text-sm px-3 py-1.5 rounded transition-colors ${
                      currentRegion === r.id
                        ? "bg-primary-foreground/20 text-primary-foreground font-semibold"
                        : "text-primary-foreground/60 hover:text-primary-foreground"
                    }`}
                  >
                    {t(`region.${r.id}`)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
