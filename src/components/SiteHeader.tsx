import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logoWhite from "@/assets/pagopay-white.png";

const linkClass = "text-primary-foreground/90 hover:text-primary-foreground transition-colors shrink-0";

const SiteHeader = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-primary border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 min-h-16 py-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <Link to="/" className="flex items-center shrink-0">
          <img src={logoWhite} alt="PagoPay" className="h-8 w-auto" />
        </Link>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium justify-end">
          <Link to="/" className={linkClass}>
            {t("nav.home")}
          </Link>
          <Link to="/about" className={linkClass}>
            {t("nav.aboutPage")}
          </Link>
          <Link to="/how-it-works" className={linkClass}>
            {t("nav.howItWorks")}
          </Link>
          <Link to="/pricing" className={linkClass}>
            {t("nav.pricing")}
          </Link>
          <Link to="/security" className={linkClass}>
            {t("nav.security")}
          </Link>
          <Link to="/faq" className={linkClass}>
            {t("nav.faq")}
          </Link>
          <Link to="/blog" className={linkClass}>
            {t("nav.blog")}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
