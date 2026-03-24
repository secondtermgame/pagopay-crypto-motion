import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, Globe, ChevronDown, ArrowRight, Send, RefreshCw, CreditCard, Globe2, Coins, Zap, Shield, Lock, ShieldCheck, CheckCircle, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Region, regions, getRegionById } from "@/lib/regions";
import { useNavigate } from "react-router-dom";
import { SignupForm } from "@/components/SignupForm";
import { PrivacyPolicyDialog, TermsOfServiceDialog, CookiePolicyDialog } from "@/components/LegalPolicies";
import logoWhite from "@/assets/pagopay-white.png";
import heroCard from "@/assets/hero-card.png";
import appPreview from "@/assets/app-preview.jpg";

const LatamLanding = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [regionDropdownOpen, setRegionDropdownOpen] = useState(false);

  // Force Spanish for LATAM
  useEffect(() => {
    if (i18n.language !== "es") {
      i18n.changeLanguage("es");
    }
  }, [i18n]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!regionDropdownOpen) return;
    const close = () => setRegionDropdownOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [regionDropdownOpen]);

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
    { label: "Inicio", href: "#inicio" },
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Beneficios", href: "#beneficios" },
    { label: "Seguridad", href: "#seguridad" },
  ];

  return (
    <div className="min-h-screen scroll-smooth latam-theme">
      {/* ==================== NAVBAR ==================== */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-latam-dark/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
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
              Empieza ahora
            </Button>

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
                      {r.id === "global" ? "Mundial" : r.id === "latam" ? "América Latina" : r.id === "africa" ? "África" : "Asia"}
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
                Empieza ahora
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* ==================== HERO ==================== */}
      <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-gradient-to-br from-latam-purple via-latam-dark to-latam-teal">
        {/* Decorative gradient orbs */}
        <div className="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-latam-purple/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-[-5%] w-[400px] h-[400px] bg-latam-teal/30 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-latam-lime/10 rounded-full blur-[150px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white leading-[1.1]">
                Usa tu crypto
                <br />
                <span className="bg-gradient-to-r from-latam-lime to-latam-cyan bg-clip-text text-transparent">
                  como dinero real
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-4 max-w-xl mx-auto lg:mx-0">
                Convierte tu crypto y paga en cualquier lugar del mundo al instante.
              </p>
              <p className="text-sm text-white/50 mb-8 tracking-wide">
                Seguro • Rápido • Sin complicaciones
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button onClick={openSignup} size="lg" className="bg-latam-lime text-latam-dark hover:bg-latam-lime/90 shadow-[0_0_30px_rgba(163,230,53,0.3)] font-bold rounded-full text-lg px-10 py-6 transition-all duration-300 hover:scale-105">
                  Empieza ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full text-lg px-10 py-6 font-semibold">
                  <Download className="mr-2 h-5 w-5" />
                  Descargar app
                </Button>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="relative animate-float">
                <img src={heroCard} alt="PagoPay Card" className="w-full h-auto max-w-lg mx-auto drop-shadow-2xl" />
                {/* Floating balance widget */}
                <div className="absolute top-4 right-4 md:top-8 md:right-0 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-2xl">
                  <p className="text-white/60 text-xs font-medium mb-1">Saldo</p>
                  <p className="text-white text-2xl font-bold">$2,200.50</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-latam-lime text-xs font-semibold">+ Recargar</span>
                  </div>
                </div>
                {/* Floating crypto badge */}
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
              Cómo funciona
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-latam-purple to-latam-teal rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Send, step: "01", title: "Envía tu crypto", desc: "Deposita BTC, ETH o USDT", color: "from-latam-purple to-latam-purple/80" },
              { icon: RefreshCw, step: "02", title: "Convierte al instante", desc: "Cambia a moneda local en segundos", color: "from-latam-teal to-latam-teal/80" },
              { icon: CreditCard, step: "03", title: "Paga fácilmente", desc: "Usa tu tarjeta en todo el mundo", color: "from-latam-lime to-latam-cyan" },
            ].map((item) => (
              <div key={item.step} className="group text-center p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`h-8 w-8 ${item.step === "03" ? "text-latam-dark" : "text-white"}`} />
                </div>
                <span className="text-xs font-bold text-latam-purple/60 tracking-widest uppercase">Paso {item.step}</span>
                <h3 className="text-xl font-bold text-latam-dark mt-2 mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== BENEFITS ==================== */}
      <section id="beneficios" className="py-24 bg-gradient-to-br from-latam-dark via-latam-purple/90 to-latam-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Todo lo que necesitas
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-latam-lime to-latam-cyan rounded-full mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Globe2, title: "Sin fronteras", desc: "Usa tu dinero en cualquier país", gradient: "from-latam-teal to-latam-cyan" },
              { icon: Coins, title: "Bajas comisiones", desc: "Más control para ti", gradient: "from-latam-orange to-latam-pink" },
              { icon: Zap, title: "Rápido y simple", desc: "Todo desde tu celular", gradient: "from-latam-lime to-latam-cyan" },
              { icon: Shield, title: "Seguro", desc: "Protección en cada transacción", gradient: "from-latam-purple to-latam-teal" },
            ].map((item) => (
              <div key={item.title} className="group p-6 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-300 text-center">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
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
                {/* Floating card element */}
                <div className="absolute -bottom-4 -right-4 md:-right-8 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-latam-lime to-latam-teal flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Pago exitoso</p>
                      <p className="text-sm font-bold text-latam-dark">- $45.00 USD</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-extrabold text-latam-dark mb-6">
                Todo en un
                <span className="bg-gradient-to-r from-latam-purple to-latam-teal bg-clip-text text-transparent"> solo lugar</span>
              </h2>
              <p className="text-xl text-gray-500 mb-8 max-w-lg">
                Controla tu dinero, convierte crypto y paga fácilmente desde la app PagoPay.
              </p>
              <div className="space-y-4">
                {["Convierte crypto a moneda local", "Paga con tarjeta virtual o física", "Consulta tus balances en tiempo real"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-latam-lime to-latam-teal flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-gray-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
              <Button onClick={openSignup} size="lg" className="mt-8 bg-latam-purple text-white hover:bg-latam-purple/90 font-bold rounded-full text-lg px-10 py-6 transition-all duration-300 hover:scale-105">
                Empieza ahora
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
              Tu dinero está protegido
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-latam-lime to-latam-cyan rounded-full mx-auto mb-6" />
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Trabajamos con partners globales para garantizar seguridad y transparencia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Lock, title: "Tecnología segura", desc: "Encriptación de nivel militar para cada transacción", gradient: "from-latam-purple to-latam-teal" },
              { icon: ShieldCheck, title: "Cumplimiento global", desc: "Regulados bajo estándares internacionales AML y KYC", gradient: "from-latam-teal to-latam-cyan" },
              { icon: Shield, title: "Infraestructura confiable", desc: "Partners regulados y auditoría continua", gradient: "from-latam-lime to-latam-teal" },
            ].map((item) => (
              <div key={item.title} className="group text-center p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="py-24 bg-gradient-to-r from-latam-purple via-latam-teal to-latam-purple relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(163,230,53,0.15),transparent_70%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Empieza hoy con PagoPay
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
            Abre tu cuenta gratis en minutos
          </p>
          <Button onClick={openSignup} size="lg" className="bg-latam-lime text-latam-dark hover:bg-latam-lime/90 shadow-[0_0_40px_rgba(163,230,53,0.4)] font-extrabold rounded-full text-xl px-14 py-7 transition-all duration-300 hover:scale-105">
            Crear cuenta
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-latam-dark text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <img src={logoWhite} alt="PagoPay" className="h-8 w-auto mb-4" />
              <p className="text-white/50 text-sm">Tu crypto, tu dinero real.</p>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/70">Producto</h4>
              <div className="flex flex-col gap-3">
                <button onClick={() => scrollTo("#como-funciona")} className="text-white/50 hover:text-white text-sm text-left transition-colors">Cómo funciona</button>
                <button onClick={() => scrollTo("#beneficios")} className="text-white/50 hover:text-white text-sm text-left transition-colors">Beneficios</button>
                <button onClick={() => scrollTo("#seguridad")} className="text-white/50 hover:text-white text-sm text-left transition-colors">Seguridad</button>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/70">Legal</h4>
              <div className="flex flex-col gap-3">
                <PrivacyPolicyDialog>
                  <button className="text-white/50 hover:text-white text-sm text-left transition-colors">Política de Privacidad</button>
                </PrivacyPolicyDialog>
                <TermsOfServiceDialog>
                  <button className="text-white/50 hover:text-white text-sm text-left transition-colors">Términos de Servicio</button>
                </TermsOfServiceDialog>
                <CookiePolicyDialog>
                  <button className="text-white/50 hover:text-white text-sm text-left transition-colors">Política de Cookies</button>
                </CookiePolicyDialog>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/70">Soporte</h4>
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
              Aviso Legal: PagoPay es una plataforma de tecnología financiera y no un banco. Ciertos servicios bancarios o de pago pueden ser proporcionados a través de instituciones financieras asociadas autorizadas. PagoPay Payment Services es operado por 9538-8310 Québec Inc., un Negocio de Servicios Monetarios registrado ante FINTRAC. Las transacciones con criptomonedas implican riesgo y el valor de los activos digitales puede fluctuar.
            </p>
            <p className="text-sm text-white/40">© 2025 PagoPay. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <SignupForm open={isSignupOpen} onOpenChange={setIsSignupOpen} />
    </div>
  );
};

export default LatamLanding;
