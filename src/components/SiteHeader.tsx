import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SignupForm } from "@/components/SignupForm";
import logoColor from "@/assets/pagopay-color.png";

const linkClass = "text-foreground/70 hover:text-primary text-sm font-medium transition-colors px-3 py-1.5 rounded-full";

const SiteHeader = () => {
  const { t } = useTranslation();
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-background/70 backdrop-blur-xl border-b border-border/60">
        <div className="container mx-auto px-4 min-h-16 py-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <Link to="/" className="flex items-center shrink-0">
            <img src={logoColor} alt="PagoPay" className="h-7 w-auto" />
          </Link>
          <nav className="flex flex-wrap items-center gap-1 text-sm font-medium justify-end">
            <Link to="/" className={linkClass}>{t("nav.home")}</Link>
            <Link to="/pricing" className={linkClass}>{t("nav.pricing")}</Link>
            <Link to="/about" className={linkClass}>{t("nav.aboutPage")}</Link>
            <Link to="/security" className={linkClass}>{t("nav.security")}</Link>
            <Link to="/faq" className={linkClass}>{t("nav.faq")}</Link>
            <Link to="/blog" className={linkClass}>{t("nav.blog")}</Link>
            <button onClick={() => setSignupOpen(true)} className="btn-lime px-4 py-2 text-sm ml-2">
              {t("hero.cta")}
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </nav>
        </div>
      </header>
      <SignupForm open={signupOpen} onOpenChange={setSignupOpen} />
    </>
  );
};

export default SiteHeader;
