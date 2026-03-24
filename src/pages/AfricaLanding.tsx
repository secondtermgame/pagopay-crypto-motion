import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, Globe, ChevronDown, ArrowRight, Send, RefreshCw, CreditCard, Globe2, Coins, Zap, Shield, Lock, ShieldCheck, CheckCircle, Linkedin, Banknote, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Region, regions, getRegionById } from "@/lib/regions";
import { useNavigate } from "react-router-dom";
import { SignupForm } from "@/components/SignupForm";
import CryptoTicker from "@/components/CryptoTicker";
import { PrivacyPolicyDialog, TermsOfServiceDialog, CookiePolicyDialog } from "@/components/LegalPolicies";
import logoWhite from "@/assets/pagopay-white.png";
import heroCard from "@/assets/hero-card.png";
import appPreviewEn from "@/assets/app-phone-mockup-en.png";

const stepIcons = [Send, RefreshCw, CreditCard];
const benefitIcons = [Globe2, Coins, Banknote, Zap, Eye, Shield];
const trustIcons = [Lock, ShieldCheck, Shield];

const langFlags: Record<string, string> = { en: "🇬🇧", fr: "🇫🇷" };
const langLabels: Record<string, string> = { en: "English", fr: "Français" };

const AfricaLanding = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [regionDropdownOpen, setRegionDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    if (!["fr", "en"].includes(i18n.language)) {
      i18n.changeLanguage("en");
    }
  }, [i18n]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!regionDropdownOpen && !langDropdownOpen) return;
    const close = () => { setRegionDropdownOpen(false); setLangDropdownOpen(false); };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [regionDropdownOpen, langDropdownOpen]);

  const switchRegion = (regionId: Region) => {
    const config = getRegionById(regionId);
    localStorage.setItem("pagopay_region_chosen", "true");
    navigate(config.path);
    setRegionDropdownOpen(false);
    setMobileOpen(false);
  };

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const openSignup = () => setIsSignupOpen(true);

  const navLinks = [
    { label: t("africa.nav.home"), href: "#home-africa" },
    { label: t("africa.nav.howItWorks"), href: "#how-it-works" },
    { label: t("africa.nav.benefits"), href: "#benefits" },
    { label: t("africa.nav.security"), href: "#security" },
  ];

  const steps = t("africa.howItWorks.steps", { returnObjects: true }) as { title: string; desc: string }[];
  const benefits = t("africa.benefits.items", { returnObjects: true }) as { title: string; desc: string }[];
  const showcaseChecks = t("africa.showcase.checks", { returnObjects: true }) as string[];
  const trustItems = t("africa.trust.items", { returnObjects: true }) as { title: string; desc: string }[];

  return (
    <div className="min-h-screen scroll-smooth africa-theme">
      {/* ==================== NAVBAR ==================== */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <a href="#home-africa" onClick={() => scrollTo("#home-africa")}>
            <img src={logoWhite} alt="PagoPay" className="h-8 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button key={link.href} onClick={() => scrollTo(link.href)} className="text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium transition-colors">
                {link.label}
              </button>
            ))}
            <Button onClick={openSignup} className="bg-africa-gold text-africa-dark hover:bg-africa-gold/90 font-bold rounded-full px-6">
              {t("africa.cta")}
            </Button>

            {/* Language dropdown */}
            <div className="relative">
              <button
                onClick={(e) => { e.stopPropagation(); setLangDropdownOpen(!langDropdownOpen); }}
                className="flex items-center gap-1 text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium transition-colors border border-primary-foreground/30 rounded px-2 py-1"
              >
                <Globe className="h-3.5 w-3.5" />
                {langFlags[i18n.language] || "🇬🇧"} {i18n.language.toUpperCase()}
                <ChevronDown className="h-3 w-3" />
              </button>
              {langDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 bg-primary/95 backdrop-blur-md border border-primary-foreground/20 rounded-lg shadow-xl overflow-hidden min-w-[140px]">
                  {["en", "fr"].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => { i18n.changeLanguage(lang); setLangDropdownOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${i18n.language === lang ? "bg-primary-foreground/20 text-primary-foreground font-semibold" : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground"}`}
                    >
                      {langFlags[lang]} {langLabels[lang]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Region selector */}
            <div className="relative">
              <button onClick={(e) => { e.stopPropagation(); setRegionDropdownOpen(!regionDropdownOpen); }} className="flex items-center gap-1 text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium transition-colors border border-primary-foreground/30 rounded px-2 py-1">
                <Globe className="h-3.5 w-3.5" />
                {t("region.africa")}
                <ChevronDown className="h-3 w-3" />
              </button>
              {regionDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 bg-primary/95 backdrop-blur-md border border-primary-foreground/20 rounded-lg shadow-xl overflow-hidden min-w-[160px]">
                  {regions.map((r) => (
                    <button key={r.id} onClick={() => switchRegion(r.id)} className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${"africa" === r.id ? "bg-primary-foreground/20 text-primary-foreground font-semibold" : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground"}`}>
                      {t(`region.${r.id}`)}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button className="md:hidden text-primary-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-primary/95 backdrop-blur-md border-t border-primary-foreground/10">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button key={link.href} onClick={() => scrollTo(link.href)} className="text-primary-foreground/80 hover:text-primary-foreground text-left text-sm font-medium">
                  {link.label}
                </button>
              ))}
              <Button onClick={() => { setMobileOpen(false); openSignup(); }} className="bg-africa-gold text-africa-dark hover:bg-africa-gold/90 font-bold rounded-full w-full">
                {t("africa.cta")}
              </Button>
              {/* Mobile language */}
              <div className="border-t border-primary-foreground/10 pt-3">
                <div className="flex gap-2">
                  {["en", "fr"].map((lang) => (
                    <button key={lang} onClick={() => i18n.changeLanguage(lang)} className={`text-sm px-3 py-1.5 rounded transition-colors ${i18n.language === lang ? "bg-primary-foreground/20 text-primary-foreground font-semibold" : "text-primary-foreground/60 hover:text-primary-foreground"}`}>
                      {langFlags[lang]} {langLabels[lang]}
                    </button>
                  ))}
                </div>
              </div>
              {/* Mobile region */}
              <div className="border-t border-primary-foreground/10 pt-3">
                <div className="flex flex-col gap-1">
                  {regions.map((r) => (
                    <button key={r.id} onClick={() => switchRegion(r.id)} className={`text-left text-sm px-3 py-1.5 rounded transition-colors ${"africa" === r.id ? "bg-primary-foreground/20 text-primary-foreground font-semibold" : "text-primary-foreground/60 hover:text-primary-foreground"}`}>
                      {t(`region.${r.id}`)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ==================== HERO ==================== */}
      <section id="home-africa" className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-gradient-to-br from-africa-earth via-primary to-africa-teal">
        <div className="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-africa-gold/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-[-5%] w-[400px] h-[400px] bg-africa-teal/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-africa-amber/10 rounded-full blur-[150px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-primary-foreground leading-[1.1]">
                {t("africa.hero.heading1")}
                <br />
                <span className="bg-gradient-to-r from-africa-gold to-africa-amber bg-clip-text text-transparent">
                  {t("africa.hero.heading2")}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/80 mb-4 max-w-xl mx-auto lg:mx-0">
                {t("africa.hero.subtitle")}
              </p>
              <p className="text-sm text-primary-foreground/50 mb-8 tracking-wide">
                {t("africa.hero.trust")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button onClick={openSignup} size="lg" className="bg-africa-gold text-africa-dark hover:bg-africa-gold/90 shadow-[0_0_30px_rgba(245,158,11,0.3)] font-bold rounded-full text-lg px-10 py-6 transition-all duration-300 hover:scale-105">
                  {t("africa.cta")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="relative animate-float">
                <img src={heroCard} alt="PagoPay Card" className="w-full h-auto max-w-lg mx-auto drop-shadow-2xl" />
                <div className="absolute top-4 left-4 md:top-8 md:left-0 bg-primary-foreground/10 backdrop-blur-xl rounded-2xl p-4 border border-primary-foreground/20 shadow-2xl">
                  <p className="text-primary-foreground/60 text-xs font-medium mb-1">{t("africa.balance.title")}</p>
                  <p className="text-primary-foreground text-2xl font-bold">$2,200.50</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-africa-gold text-xs font-semibold">{t("africa.balance.topup")}</span>
                  </div>
                </div>
                <div className="absolute bottom-8 left-0 md:left-[-20px] bg-primary-foreground/10 backdrop-blur-xl rounded-xl p-3 border border-primary-foreground/20 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-africa-amber flex items-center justify-center text-primary-foreground text-xs font-bold">₿</div>
                    <div>
                      <p className="text-primary-foreground text-xs font-bold">BTC</p>
                      <p className="text-africa-gold text-[10px]">+2.4%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section id="how-it-works" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              {t("africa.howItWorks.heading")}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-africa-gold to-africa-teal rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((item, i) => {
              const Icon = stepIcons[i];
              const stepNum = String(i + 1).padStart(2, "0");
              return (
                <div key={i} className="group text-center p-8 rounded-3xl bg-card border border-border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-bold text-muted-foreground tracking-widest uppercase">{t("africa.howItWorks.step")} {stepNum}</span>
                  <h3 className="text-xl font-bold text-foreground mt-2 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              );
            })}
          </div>
          <p className="text-center text-muted-foreground mt-8 text-sm font-medium">{t("africa.howItWorks.note")}</p>
        </div>
      </section>

      {/* ==================== BENEFITS ==================== */}
      <section id="benefits" className="py-24 bg-gradient-to-br from-africa-earth via-primary to-africa-earth">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">
              {t("africa.benefits.heading")}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-africa-gold to-africa-amber rounded-full mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((item, i) => {
              const Icon = benefitIcons[i];
              return (
                <div key={i} className="group p-6 rounded-3xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-300 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-africa-gold to-africa-amber flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-africa-dark" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-foreground mb-2">{item.title}</h3>
                  <p className="text-primary-foreground/60 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== PRODUCT SHOWCASE ==================== */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative mx-auto max-w-sm">
                <img src={appPreview} alt="PagoPay App" className="w-full rounded-[2.5rem] shadow-2xl" />
                <div className="absolute -bottom-4 -right-4 md:-right-8 bg-card rounded-2xl p-4 shadow-2xl border border-border animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-africa-gold to-africa-teal flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{t("africa.showcase.paymentSuccess")}</p>
                      <p className="text-sm font-bold text-foreground">- $45.00 USD</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
                {t("africa.showcase.heading1")}
                <span className="bg-gradient-to-r from-africa-gold to-africa-teal bg-clip-text text-transparent">{t("africa.showcase.heading2")}</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                {t("africa.showcase.subtitle")}
              </p>
              <div className="space-y-4">
                {showcaseChecks.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-africa-gold to-africa-teal flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <p className="text-foreground font-medium">{item}</p>
                  </div>
                ))}
              </div>
              <Button onClick={openSignup} size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full text-lg px-10 py-6 transition-all duration-300 hover:scale-105">
                {t("africa.cta")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TRUST / SECURITY ==================== */}
      <section id="security" className="py-24 bg-gradient-to-br from-foreground via-primary to-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">
              {t("africa.trust.heading")}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-africa-gold to-africa-amber rounded-full mx-auto mb-6" />
            <p className="text-primary-foreground/60 max-w-2xl mx-auto text-lg">
              {t("africa.trust.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {trustItems.map((item, i) => {
              const Icon = trustIcons[i];
              return (
                <div key={i} className="group text-center p-8 rounded-3xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:-translate-y-2 transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-africa-gold to-africa-teal flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-africa-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-foreground mb-3">{item.title}</h3>
                  <p className="text-primary-foreground/50">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="py-24 bg-gradient-to-r from-primary via-africa-teal to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.15),transparent_70%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4">
            {t("africa.finalCta.heading")}
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            {t("africa.finalCta.subtitle")}
          </p>
          <Button onClick={openSignup} size="lg" className="bg-africa-gold text-africa-dark hover:bg-africa-gold/90 shadow-[0_0_40px_rgba(245,158,11,0.4)] font-extrabold rounded-full text-xl px-14 py-7 transition-all duration-300 hover:scale-105">
            {t("africa.finalCta.button")}
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </section>

      <CryptoTicker />

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-foreground text-primary-foreground">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <img src={logoWhite} alt="PagoPay" className="h-8 w-auto mb-4" />
              <p className="text-primary-foreground/50 text-sm">{t("africa.footer.tagline")}</p>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-primary-foreground/70">{t("africa.footer.product")}</h4>
              <div className="flex flex-col gap-3">
                <button onClick={() => scrollTo("#how-it-works")} className="text-primary-foreground/50 hover:text-primary-foreground text-sm text-left transition-colors">{t("africa.nav.howItWorks")}</button>
                <button onClick={() => scrollTo("#benefits")} className="text-primary-foreground/50 hover:text-primary-foreground text-sm text-left transition-colors">{t("africa.nav.benefits")}</button>
                <button onClick={() => scrollTo("#security")} className="text-primary-foreground/50 hover:text-primary-foreground text-sm text-left transition-colors">{t("africa.nav.security")}</button>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-primary-foreground/70">{t("africa.footer.legal")}</h4>
              <div className="flex flex-col gap-3">
                <PrivacyPolicyDialog>
                  <button className="text-primary-foreground/50 hover:text-primary-foreground text-sm text-left transition-colors">{t("africa.footer.privacy")}</button>
                </PrivacyPolicyDialog>
                <TermsOfServiceDialog>
                  <button className="text-primary-foreground/50 hover:text-primary-foreground text-sm text-left transition-colors">{t("africa.footer.terms")}</button>
                </TermsOfServiceDialog>
                <CookiePolicyDialog>
                  <button className="text-primary-foreground/50 hover:text-primary-foreground text-sm text-left transition-colors">{t("africa.footer.cookies")}</button>
                </CookiePolicyDialog>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-primary-foreground/70">{t("africa.footer.support")}</h4>
              <div className="flex flex-col gap-3">
                <a href="mailto:support@mypagopay.com" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">support@mypagopay.com</a>
              </div>
              <div className="flex gap-4 mt-6">
                <a href="https://www.x.com/mypagopay" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
                <a href="https://www.linkedin.com/company/mypagopay" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/10 pt-8">
            <p className="text-xs text-primary-foreground/30 leading-relaxed mb-4">
              {t("footer.disclaimer")}
            </p>
            <p className="text-sm text-primary-foreground/40">{t("africa.footer.copyright")}</p>
          </div>
        </div>
      </footer>

      <SignupForm open={isSignupOpen} onOpenChange={setIsSignupOpen} />
    </div>
  );
};

export default AfricaLanding;
