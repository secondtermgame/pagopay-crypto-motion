import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import logoWhite from "@/assets/pagopay-white.png";

const navLinks = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "pagopay", href: "#pagopay" },
  { key: "security", href: "#security" },
  { key: "faq", href: "#faq" },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
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
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.key}
              onClick={() => scrollTo(link.href)}
              className="text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium transition-colors"
            >
              {t(`nav.${link.key}`)}
            </button>
          ))}
          <button
            onClick={toggleLang}
            className="text-primary-foreground/80 hover:text-primary-foreground text-sm font-semibold border border-primary-foreground/30 rounded px-2 py-1 transition-colors"
          >
            {i18n.language === "en" ? "ES" : "EN"}
          </button>
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
            <button
              onClick={toggleLang}
              className="text-primary-foreground/80 hover:text-primary-foreground text-left text-sm font-semibold"
            >
              {i18n.language === "en" ? "🇪🇸 Español" : "🇬🇧 English"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
