import { useState, useEffect } from "react";
import { X, Bitcoin, ArrowRight, CreditCard, DollarSign, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import mascot from "@/assets/pagopay-mascot.png";

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

    const timer = setTimeout(trigger, 3000);

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
      <div className="relative w-full sm:max-w-md overflow-hidden rounded-t-3xl sm:rounded-3xl shadow-2xl animate-in slide-in-from-bottom-4 duration-300 z-10">
        {/* Green gradient header */}
        <div className="bg-gradient-to-br from-[hsl(163,65%,18%)] via-[hsl(174,72%,36%)] to-[hsl(84,81%,44%)] px-6 pt-6 pb-10 relative">
          {/* Close */}
          <button
            onClick={dismiss}
            className="absolute top-4 right-4 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Mascot */}
          <div className="flex justify-center mb-3">
            <img
              src={mascot}
              alt="PagoPay mascot"
              className="w-20 h-20 drop-shadow-lg"
              loading="lazy"
              width={80}
              height={80}
            />
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-[28px] font-bold text-primary-foreground text-center leading-tight">
            Usa tu crypto sin complicaciones
          </h2>
        </div>

        {/* White body */}
        <div className="bg-popover px-6 pb-8 pt-6 -mt-4 rounded-t-3xl relative">
          {/* Visual flow: Crypto → USD → Card */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="flex flex-col items-center gap-1">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[hsl(163,65%,18%)] to-[hsl(174,72%,36%)] flex items-center justify-center shadow-md">
                <Bitcoin className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-[10px] font-semibold text-muted-foreground">Crypto</span>
            </div>

            <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 mt-[-12px]" />

            <div className="flex flex-col items-center gap-1">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[hsl(84,81%,44%)] to-[hsl(163,50%,45%)] flex items-center justify-center shadow-md">
                <DollarSign className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-[10px] font-semibold text-muted-foreground">USD</span>
            </div>

            <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 mt-[-12px]" />

            <div className="flex flex-col items-center gap-1">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[hsl(163,65%,18%)] to-[hsl(163,50%,35%)] flex items-center justify-center shadow-md">
                <CreditCard className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-[10px] font-semibold text-muted-foreground">Tarjeta</span>
            </div>
          </div>

          {/* Body */}
          <p className="text-center text-muted-foreground text-sm leading-relaxed mb-2">
            Envía tu crypto.<br />
            Se convierte automáticamente a USD.<br />
            Y paga en cualquier lugar.
          </p>

          {/* No FX badge */}
          <div className="flex items-center justify-center gap-1.5 mb-5">
            <BadgeCheck className="h-4 w-4 text-[hsl(84,81%,44%)]" />
            <span className="text-xs font-bold text-foreground">
              Sin comisiones FX — Gasta en cualquier moneda local
            </span>
          </div>

          {/* Primary CTA */}
          <Button
            onClick={handleCta}
            size="lg"
            className="w-full bg-gradient-to-r from-[hsl(163,65%,18%)] to-[hsl(174,72%,36%)] text-primary-foreground hover:opacity-90 shadow-[var(--shadow-glow)] font-semibold text-base h-12 rounded-xl transition-all duration-300 hover:scale-[1.02]"
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
    </div>
  );
}
