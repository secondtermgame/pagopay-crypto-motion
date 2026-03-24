import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, Globe, ChevronDown, ArrowRight, Send, RefreshCw, CreditCard, Globe2, Coins, Zap, Shield, Lock, ShieldCheck, CheckCircle, Linkedin, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Region, regions, getRegionById } from "@/lib/regions";
import { useNavigate } from "react-router-dom";
import { SignupForm } from "@/components/SignupForm";
import { LatamPopup } from "@/components/LatamPopup";
import CryptoTicker from "@/components/CryptoTicker";
import { PrivacyPolicyDialog, TermsOfServiceDialog, CookiePolicyDialog } from "@/components/LegalPolicies";
import logoWhite from "@/assets/pagopay-white.png";
import heroCard from "@/assets/hero-card.png";
import appPreview from "@/assets/app-phone-mockup.png";

const stepIcons = [Send, RefreshCw, CreditCard];
const stepColors = ["from-primary to-primary-glow", "from-primary to-primary-glow", "from-primary to-primary-glow"];
const benefitIcons = [Globe2, Coins, Eye, Zap, Shield, Coins];
const benefitGradients = ["from-latam-teal to-latam-cyan", "from-latam-orange to-latam-pink", "from-latam-purple to-latam-teal", "from-latam-lime to-latam-cyan", "from-latam-purple to-latam-teal", "from-latam-teal to-latam-lime"];
const trustIcons = [Lock, ShieldCheck, Shield];
const trustGradients = ["from-latam-purple to-latam-teal", "from-latam-teal to-latam-cyan", "from-latam-lime to-latam-teal"];

const LatamLanding = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [regionDropdownOpen, setRegionDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  // Default to Spanish for LATAM if not already ES or EN
  useEffect(() => {
    if (!["es", "en"].includes(i18n.language)) {
      i18n.changeLanguage("es");
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
    { label: t("latam.nav.home"), href: "#inicio" },
    { label: t("latam.nav.howItWorks"), href: "#como-funciona" },
    { label: t("latam.nav.benefits"), href: "#beneficios" },
    { label: t("latam.nav.security"), href: "#seguridad" },
    { label: t("nav.faq"), href: "#faq" },
  ];

  const steps = t("latam.howItWorks.steps", { returnObjects: true }) as { title: string; desc: string }[];
  const benefits = t("latam.benefits.items", { returnObjects: true }) as { title: string; desc: string }[];
  const showcaseChecks = t("latam.showcase.checks", { returnObjects: true }) as string[];
  const trustItems = t("latam.trust.items", { returnObjects: true }) as { title: string; desc: string }[];

  return (
    <div className="min-h-screen scroll-smooth latam-theme">
      {/* ==================== NAVBAR ==================== */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-latam-dark shadow-lg" : "bg-transparent"}`}>
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <a href="#inicio" onClick={() => scrollTo("#inicio")}>
            <img src={logoWhite} alt="PagoPay" className="h-8 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button key={link.href} onClick={() => scrollTo(link.href)} className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                {link.label}
              </button>
            ))}
            <Button onClick={openSignup} className="bg-latam-lime text-latam-dark hover:bg-latam-lime/90 font-bold rounded-full px-6">
              {t("latam.cta")}
            </Button>

            {/* Language dropdown */}
            <div className="relative">
              <button
                onClick={(e) => { e.stopPropagation(); setLangDropdownOpen(!langDropdownOpen); }}
                className="flex items-center gap-1 text-white/80 hover:text-white text-sm font-medium transition-colors border border-white/30 rounded px-2 py-1"
              >
                <Globe className="h-3.5 w-3.5" />
                {i18n.language === "es" ? "🇪🇸" : "🇬🇧"} {i18n.language.toUpperCase()}
                <ChevronDown className="h-3 w-3" />
              </button>
              {langDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 bg-latam-dark/95 backdrop-blur-md border border-white/20 rounded-lg shadow-xl overflow-hidden min-w-[140px]">
                  {["es", "en"].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => { i18n.changeLanguage(lang); setLangDropdownOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${i18n.language === lang ? "bg-white/20 text-white font-semibold" : "text-white/80 hover:bg-white/10 hover:text-white"}`}
                    >
                      {lang === "es" ? "🇪🇸 Español" : "🇬🇧 English"}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Region selector */}
            <div className="relative">
              <button onClick={(e) => { e.stopPropagation(); setRegionDropdownOpen(!regionDropdownOpen); }} className="flex items-center gap-1 text-white/80 hover:text-white text-sm font-medium transition-colors border border-white/30 rounded px-2 py-1">
                <Globe className="h-3.5 w-3.5" />
                LATAM
                <ChevronDown className="h-3 w-3" />
              </button>
              {regionDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 bg-latam-dark/95 backdrop-blur-md border border-white/20 rounded-lg shadow-xl overflow-hidden min-w-[160px]">
                  {regions.map((r) => (
                    <button key={r.id} onClick={() => switchRegion(r.id)} className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${"latam" === r.id ? "bg-white/20 text-white font-semibold" : "text-white/80 hover:bg-white/10 hover:text-white"}`}>
                      {t(`region.${r.id}`)}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-latam-dark/95 backdrop-blur-md border-t border-white/10">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button key={link.href} onClick={() => scrollTo(link.href)} className="text-white/80 hover:text-white text-left text-sm font-medium">
                  {link.label}
                </button>
              ))}
              <Button onClick={() => { setMobileOpen(false); openSignup(); }} className="bg-latam-lime text-latam-dark hover:bg-latam-lime/90 font-bold rounded-full w-full">
                {t("latam.cta")}
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* ==================== HERO ==================== */}
      <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-gradient-to-br from-latam-purple via-latam-dark to-latam-teal">
        <div className="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-latam-purple/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-[-5%] w-[400px] h-[400px] bg-latam-teal/30 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-latam-lime/10 rounded-full blur-[150px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white leading-[1.1]">
                {t("latam.hero.heading1")}
                <br />
                <span className="bg-gradient-to-r from-latam-lime to-latam-cyan bg-clip-text text-transparent">
                  {t("latam.hero.heading2")}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-4 max-w-xl mx-auto lg:mx-0">
                {t("latam.hero.subtitle")}
              </p>
              <p className="text-sm text-white/50 mb-8 tracking-wide">
                {t("latam.hero.trust")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button onClick={openSignup} size="lg" className="bg-latam-lime text-latam-dark hover:bg-latam-lime/90 shadow-[0_0_30px_rgba(163,230,53,0.3)] font-bold rounded-full text-lg px-10 py-6 transition-all duration-300 hover:scale-105">
                  {t("latam.cta")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="relative animate-float">
                <img src={heroCard} alt="PagoPay Card" className="w-full h-auto max-w-lg mx-auto drop-shadow-2xl" />
                <div className="absolute top-4 left-4 md:top-8 md:left-0 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-2xl">
                  <p className="text-white/60 text-xs font-medium mb-1">{t("latam.balance.title")}</p>
                  <p className="text-white text-2xl font-bold">$2,200.50</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-latam-lime text-xs font-semibold">{t("latam.balance.topup")}</span>
                  </div>
                </div>
                <div className="absolute bottom-8 left-0 md:left-[-20px] bg-white/10 backdrop-blur-xl rounded-xl p-3 border border-white/20 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-latam-orange flex items-center justify-center text-white text-xs font-bold">₿</div>
                    <div>
                      <p className="text-white text-xs font-bold">BTC</p>
                      <p className="text-latam-lime text-[10px]">+2.4%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section id="como-funciona" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-latam-dark mb-4">
              {t("latam.howItWorks.heading")}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-latam-purple to-latam-teal rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((item, i) => {
              const Icon = stepIcons[i];
              const stepNum = String(i + 1).padStart(2, "0");
              return (
                <div key={i} className="group text-center p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stepColors[i]} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-bold text-latam-purple/60 tracking-widest uppercase">{t("latam.howItWorks.step")} {stepNum}</span>
                  <h3 className="text-xl font-bold text-latam-dark mt-2 mb-2">{item.title}</h3>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              );
            })}
          </div>
          <p className="text-center text-gray-400 mt-8 text-sm font-medium">{t("latam.howItWorks.note")}</p>
        </div>
      </section>

      {/* ==================== BENEFITS ==================== */}
      <section id="beneficios" className="py-24 bg-gradient-to-br from-latam-dark via-latam-purple/90 to-latam-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              {t("latam.benefits.heading")}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-latam-lime to-latam-cyan rounded-full mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((item, i) => {
              const Icon = benefitIcons[i];
              return (
                <div key={i} className="group p-6 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-300 text-center">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefitGradients[i]} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== PRODUCT SHOWCASE ==================== */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative mx-auto max-w-sm">
                <img src={appPreview} alt="PagoPay App" className="w-full rounded-[2.5rem] shadow-2xl" />
                <div className="absolute -bottom-4 -right-4 md:-right-8 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-latam-lime to-latam-teal flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">{t("latam.showcase.paymentSuccess")}</p>
                      <p className="text-sm font-bold text-latam-dark">- $45.00 USD</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-extrabold text-latam-dark mb-6">
                {t("latam.showcase.heading1")}
                <span className="bg-gradient-to-r from-latam-purple to-latam-teal bg-clip-text text-transparent">{t("latam.showcase.heading2")}</span>
              </h2>
              <p className="text-xl text-gray-500 mb-8 max-w-lg">
                {t("latam.showcase.subtitle")}
              </p>
              <div className="space-y-4">
                {showcaseChecks.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-latam-lime to-latam-teal flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-gray-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
              <Button onClick={openSignup} size="lg" className="mt-8 bg-latam-purple text-white hover:bg-latam-purple/90 font-bold rounded-full text-lg px-10 py-6 transition-all duration-300 hover:scale-105">
                {t("latam.cta")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TRUST / SECURITY ==================== */}
      <section id="seguridad" className="py-24 bg-gradient-to-br from-gray-900 via-latam-dark to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              {t("latam.trust.heading")}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-latam-lime to-latam-cyan rounded-full mx-auto mb-6" />
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              {t("latam.trust.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {trustItems.map((item, i) => {
              const Icon = trustIcons[i];
              return (
                <div key={i} className="group text-center p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${trustGradients[i]} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/50">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section id="faq" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-latam-dark mb-4">
                {t("faq.heading")}
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-latam-purple to-latam-teal rounded-full mx-auto mb-4" />
              <p className="text-xl text-gray-500">{t("faq.subtitle")}</p>
            </div>

            <div className="space-y-4">
              {(t("faq.items", { returnObjects: true }) as { question: string; answer: string }[]).map((faq, index) => (
                <details key={index} className="group border border-gray-200 rounded-lg px-6 transition-colors open:border-latam-purple/50">
                  <summary className="flex items-center justify-between py-4 cursor-pointer text-left text-lg font-semibold text-latam-dark hover:text-latam-purple transition-colors list-none [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <ChevronDown className="h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform duration-200 flex-shrink-0 ml-4" />
                  </summary>
                  <div className="pb-4 text-gray-500 leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="py-24 bg-gradient-to-r from-latam-purple via-latam-teal to-latam-purple relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(163,230,53,0.15),transparent_70%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            {t("latam.finalCta.heading")}
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
            {t("latam.finalCta.subtitle")}
          </p>
          <Button onClick={openSignup} size="lg" className="bg-latam-lime text-latam-dark hover:bg-latam-lime/90 shadow-[0_0_40px_rgba(163,230,53,0.4)] font-extrabold rounded-full text-xl px-14 py-7 transition-all duration-300 hover:scale-105">
            {t("latam.finalCta.button")}
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </section>

      <CryptoTicker />

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-latam-dark text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <img src={logoWhite} alt="PagoPay" className="h-8 w-auto mb-4" />
              <p className="text-white/50 text-sm">{t("latam.footer.tagline")}</p>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/70">{t("latam.footer.product")}</h4>
              <div className="flex flex-col gap-3">
                <button onClick={() => scrollTo("#como-funciona")} className="text-white/50 hover:text-white text-sm text-left transition-colors">{t("latam.nav.howItWorks")}</button>
                <button onClick={() => scrollTo("#beneficios")} className="text-white/50 hover:text-white text-sm text-left transition-colors">{t("latam.nav.benefits")}</button>
                <button onClick={() => scrollTo("#seguridad")} className="text-white/50 hover:text-white text-sm text-left transition-colors">{t("latam.nav.security")}</button>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/70">{t("latam.footer.legal")}</h4>
              <div className="flex flex-col gap-3">
                <PrivacyPolicyDialog>
                  <button className="text-white/50 hover:text-white text-sm text-left transition-colors">{t("latam.footer.privacy")}</button>
                </PrivacyPolicyDialog>
                <TermsOfServiceDialog>
                  <button className="text-white/50 hover:text-white text-sm text-left transition-colors">{t("latam.footer.terms")}</button>
                </TermsOfServiceDialog>
                <CookiePolicyDialog>
                  <button className="text-white/50 hover:text-white text-sm text-left transition-colors">{t("latam.footer.cookies")}</button>
                </CookiePolicyDialog>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/70">{t("latam.footer.support")}</h4>
              <div className="flex flex-col gap-3">
                <a href="mailto:support@mypagopay.com" className="text-white/50 hover:text-white text-sm transition-colors">support@mypagopay.com</a>
              </div>
              <div className="flex gap-4 mt-6">
                <a href="https://www.x.com/mypagopay" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
                <a href="https://www.linkedin.com/company/mypagopay" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-xs text-white/30 leading-relaxed mb-4">
              {t("footer.disclaimer")}
            </p>
            <p className="text-sm text-white/40">{t("latam.footer.copyright")}</p>
          </div>
        </div>
      </footer>

      <SignupForm open={isSignupOpen} onOpenChange={setIsSignupOpen} />
      <LatamPopup onSignup={() => setIsSignupOpen(true)} />
    </div>
  );
};

export default LatamLanding;
