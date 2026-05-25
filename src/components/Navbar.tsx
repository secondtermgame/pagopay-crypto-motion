import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import logoWhite from "@/assets/pagopay-white.png";

const navLinks = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "aboutPage", href: "/about" },
  { key: "howItWorks", href: "/how-it-works" },
  { key: "pricing", href: "/pricing" },
  { key: "pagopay", href: "#pagopay" },
  { key: "security", href: "/security" },
  { key: "faq", href: "/faq" },
  { key: "blog", href: "/blog" },
] as const;

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

const availableLanguages = ["en", "es", "fr"];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!langDropdownOpen) return;
    const close = () => setLangDropdownOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [langDropdownOpen]);

  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const goTo = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/")) {
      navigate(href);
      return;
    }
    scrollTo(href);
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
        <Link to="/" onClick={() => setMobileOpen(false)}>
          <img src={logoWhite} alt="PagoPay" className="h-8 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.key}
              onClick={() => goTo(link.href)}
              className="text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium transition-colors"
            >
              {t(`nav.${link.key}`)}
            </button>
          ))}

          {/* Language dropdown */}
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLangDropdownOpen(!langDropdownOpen);
              }}
              className="flex items-center gap-1 text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium transition-colors border border-primary-foreground/30 rounded px-2 py-1"
            >
              <Globe className="h-3.5 w-3.5" />
              {langLabels[i18n.language.split('-')[0]] ?? i18n.language.split('-')[0].toUpperCase()}
              <ChevronDown className="h-3 w-3" />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 bg-primary/95 backdrop-blur-md border border-primary-foreground/20 rounded-lg shadow-xl overflow-hidden min-w-[140px]">
                {availableLanguages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      switchLanguage(lang);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                      i18n.language === lang
                        ? "bg-primary-foreground/20 text-primary-foreground font-semibold"
                        : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                    }`}
                  >
                    {langLabels[lang]}
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
                onClick={() => goTo(link.href)}
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
                    {langLabels[lang]}
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
