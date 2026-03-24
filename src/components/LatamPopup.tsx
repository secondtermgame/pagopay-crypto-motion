import { useState, useEffect } from "react";
import { X, Bitcoin, ArrowRight, CreditCard, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const DISMISS_KEY = "pagopay_latam_popup_dismissed";

interface LatamPopupProps {
  onSignup: () => void;
}

export function LatamPopup({ onSignup }: LatamPopupProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(DISMISS_KEY)) return;

    let triggered = false;
    const trigger = () => {
      if (triggered) return;
      triggered = true;
      setVisible(true);
    };

    // Timer: 3 seconds
    const timer = setTimeout(trigger, 3000);

    // Scroll: 25%
    const onScroll = () => {
      const scrollPct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrollPct >= 0.25) trigger();
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem(DISMISS_KEY, "1");
  };

  const handleCta = () => {
    dismiss();
    onSignup();
  };

  const scrollToHow = () => {
    dismiss();
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-300">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={dismiss} />

      {/* Modal */}
      <div className="relative w-full sm:max-w-md bg-popover rounded-t-3xl sm:rounded-3xl p-6 pb-8 sm:p-8 shadow-2xl animate-in slide-in-from-bottom-4 duration-300 z-10">
        {/* Close */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Cerrar"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Visual flow: Crypto → USD → Card */}
        <div className="flex items-center justify-center gap-3 mb-6 pt-2">
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-lg">
              <Bitcoin className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-[10px] font-medium text-muted-foreground">Crypto</span>
          </div>

          <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 mt-[-12px]" />

          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-primary-glow/60 flex items-center justify-center shadow-lg">
              <DollarSign className="h-6 w-6 text-accent-foreground" />
            </div>
            <span className="text-[10px] font-medium text-muted-foreground">USD</span>
          </div>

          <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 mt-[-12px]" />

          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
              <CreditCard className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-[10px] font-medium text-muted-foreground">Tarjeta</span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-[28px] font-bold text-foreground text-center leading-tight mb-3">
          Usa tu crypto sin complicaciones
        </h2>

        {/* Body */}
        <p className="text-center text-muted-foreground text-sm leading-relaxed mb-6">
          Envía tu crypto.<br />
          Se convierte automáticamente a USD.<br />
          Y paga en cualquier lugar.
        </p>

        {/* Primary CTA */}
        <Button
          onClick={handleCta}
          size="lg"
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-glow)] font-semibold text-base h-12 rounded-xl transition-all duration-300 hover:scale-[1.02]"
        >
          Crear cuenta gratis
        </Button>

        {/* Secondary CTA */}
        <button
          onClick={scrollToHow}
          className="w-full text-center mt-3 text-sm text-primary font-medium hover:underline transition-colors"
        >
          Ver cómo funciona
        </button>

        {/* Trust line */}
        <p className="text-center text-[11px] text-muted-foreground mt-4">
          Seguro • Rápido • Sin complicaciones
        </p>
      </div>
    </div>
  );
}
