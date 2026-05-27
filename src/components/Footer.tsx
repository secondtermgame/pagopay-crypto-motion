import { useState } from "react";
import { Linkedin, ArrowRight, CheckCircle } from "lucide-react";
import { toast } from "sonner";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import logoWhite from "@/assets/pagopay-white.png";

const productLinks = [
  { key: "aboutPage", href: "/about" },
  { key: "pricing", href: "/pricing" },
  { key: "security", href: "/security" },
] as const;

const companyLinks = [
  { key: "faq", href: "/faq" },
  { key: "blog", href: "/blog" },
] as const;

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const goTo = (href: string) => {
    if (href.startsWith("/")) navigate(href);
    else document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email: email.trim().toLowerCase() });

    if (error && error.code !== "23505") {
      toast.error("Something went wrong. Please try again.");
    } else {
      toast.success("You're subscribed!", {
        description: "Welcome to the PagoPay newsletter.",
        icon: <CheckCircle className="h-4 w-4 text-accent" />,
      });
      setEmail("");
    }
    setIsSubmitting(false);
  };

  return (
    <footer className="bg-[#1B1725] text-white relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/30 blur-3xl" />

      <div className="container mx-auto px-4 pt-20 pb-10 relative">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-10 mb-16">
          <div>
            <img src={logoWhite} alt="PagoPay" className="h-10 w-auto mb-6" />
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Freedom to move. Power to spend. Crypto meets everyday banking.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50 mb-5">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((l) => (
                <li key={l.key}>
                  <button onClick={() => goTo(l.href)} className="text-sm text-white/80 hover:text-accent transition-colors">
                    {t(`nav.${l.key}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50 mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.key}>
                  <button onClick={() => goTo(l.href)} className="text-sm text-white/80 hover:text-accent transition-colors">
                    {t(`nav.${l.key}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50 mb-5">Legal</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => goTo("/privacy-policy")} className="text-sm text-white/80 hover:text-accent transition-colors text-left">
                  {t("footer.privacy")}
                </button>
              </li>
              <li>
                <button onClick={() => goTo("/terms-of-service")} className="text-sm text-white/80 hover:text-accent transition-colors text-left">
                  {t("footer.terms")}
                </button>
              </li>
              <li>
                <button onClick={() => goTo("/cookie-policy")} className="text-sm text-white/80 hover:text-accent transition-colors text-left">
                  {t("footer.cookies")}
                </button>
              </li>
              <li>
                <button onClick={() => goTo("/cardholder-agreement")} className="text-sm text-white/80 hover:text-accent transition-colors text-left">
                  Cardholder Agreement
                </button>
              </li>
              <li>
                <button onClick={() => goTo("/account-deletion")} className="text-sm text-white/80 hover:text-accent transition-colors text-left">
                  Account Deletion
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50 mb-5">Stay in the loop</h4>
            <form onSubmit={handleSubscribe} className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 p-1 pl-4 focus-within:border-accent/50 transition-colors">
              <input
                type="email"
                required
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent flex-1 text-sm text-white placeholder:text-white/40 outline-none min-w-0"
              />
              <button type="submit" className="shrink-0 rounded-full bg-accent text-accent-foreground p-2 hover:scale-105 transition-transform" aria-label="Subscribe">
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            <div className="flex gap-3 mt-6">
              <a href="https://x.com/mypagopay?s=21" target="_blank" rel="noopener noreferrer" aria-label="X" className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-accent hover:border-accent/50 hover:shadow-[0_0_20px_rgba(218,254,183,0.3)] transition-all">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/mypagopay/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-accent hover:border-accent/50 hover:shadow-[0_0_20px_rgba(218,254,183,0.3)] transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-xs text-white/40 leading-relaxed mb-4 max-w-5xl">
            {t("footer.disclaimer")}
          </p>
          <p className="text-xs text-white/50">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
