import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Globe, ChevronDown, ArrowRight } from "lucide-react";
import { SignupForm } from "@/components/SignupForm";
import logoColor from "@/assets/pagopay-color.png";
import logoWhite from "@/assets/pagopay-white.png";

const navLinks = [
  { key: "aboutPage", href: "/about" },
  { key: "pricing", href: "/pricing" },
  { key: "security", href: "/security" },
  { key: "faq", href: "/faq" },
  { key: "blog", href: "/blog" },
] as const;

const langLabels: Record<string, string> = { en: "English", es: "Español", fr: "Français" };
const availableLanguages = ["en", "es", "fr"];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!langOpen) return;
    const close = () => setLangOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [langOpen]);

  const goTo = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/")) navigate(href);
    else document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:pt-6 pointer-events-none">
        <div
          className={`pointer-events-auto mx-auto flex items-center justify-between gap-3 rounded-full transition-all duration-500 ${
            scrolled
              ? "max-w-5xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_10px_40px_-20px_rgba(16,75,54,0.25)] py-2 pl-5 pr-2"
              : "max-w-6xl bg-white/15 backdrop-blur-md border border-white/15 py-3 pl-6 pr-3"
          }`}
        >
          <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center shrink-0">
            <img
              src={scrolled ? logoColor : logoWhite}
              alt="PagoPay"
              className="h-7 w-auto transition-opacity"
            />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => goTo(link.href)}
                className={`relative px-3 py-1.5 text-sm font-medium rounded-full transition-colors group ${
                  scrolled ? "text-primary/80 hover:text-primary" : "text-white/85 hover:text-white"
                }`}
              >
                <span>{t(`nav.${link.key}`)}</span>
                <span
                  className={`absolute left-3 right-3 -bottom-0.5 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    scrolled ? "bg-primary" : "bg-accent"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <div className="relative">
              <button
                onClick={(e) => { e.stopPropagation(); setLangOpen(!langOpen); }}
                className={`flex items-center gap-1.5 text-xs font-medium rounded-full border px-3 py-1.5 transition-colors ${
                  scrolled
                    ? "text-primary/80 border-primary/15 hover:bg-primary/5"
                    : "text-white/90 border-white/25 hover:bg-white/10"
                }`}
              >
                <Globe className="h-3.5 w-3.5" />
                {(langLabels[i18n.language.split('-')[0]] ?? i18n.language.split('-')[0].toUpperCase())}
                <ChevronDown className="h-3 w-3" />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white/95 backdrop-blur-xl border border-border rounded-2xl shadow-xl overflow-hidden min-w-[150px]">
                  {availableLanguages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => { i18n.changeLanguage(lang); setLangOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                        i18n.language === lang
                          ? "bg-primary/5 text-primary font-semibold"
                          : "text-foreground/70 hover:bg-muted"
                      }`}
                    >
                      {langLabels[lang]}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={() => setSignupOpen(true)}
              className="btn-lime px-4 py-2 text-sm"
            >
              {t("hero.cta")}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>


          <button
            className={`md:hidden p-2 rounded-full ${scrolled ? "text-primary" : "text-white"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden pointer-events-auto mt-3 mx-auto max-w-5xl bg-white/95 backdrop-blur-xl rounded-3xl border border-border shadow-2xl overflow-hidden">
            <div className="px-6 py-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => goTo(link.href)}
                  className="text-left text-base font-medium text-foreground/80 hover:text-primary transition-colors py-1"
                >
                  {t(`nav.${link.key}`)}
                </button>
              ))}
              <div className="border-t border-border pt-3 mt-1">
                <p className="text-muted-foreground text-xs uppercase tracking-wider mb-2">Language</p>
                <div className="flex gap-2">
                  {availableLanguages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => i18n.changeLanguage(lang)}
                      className={`text-sm px-3 py-1.5 rounded-full transition-colors ${
                        i18n.language === lang
                          ? "bg-primary text-primary-foreground font-semibold"
                          : "text-foreground/70 hover:bg-muted"
                      }`}
                    >
                      {langLabels[lang]}
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={() => { setMobileOpen(false); setSignupOpen(true); }} className="btn-lime px-5 py-3 mt-2">
                {t("hero.cta")}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </nav>
      <SignupForm open={signupOpen} onOpenChange={setSignupOpen} />
    </>
  );
};

export default Navbar;
