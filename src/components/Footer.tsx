import { Linkedin } from "lucide-react";
import { PrivacyPolicyDialog, TermsOfServiceDialog, CookiePolicyDialog } from "./LegalPolicies";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";
import logoWhite from "@/assets/pagopay-white.png";

const navLinks = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "pagopay", href: "#pagopay" },
  { key: "security", href: "#security" },
  { key: "faq", href: "#faq" },
];

const Footer = () => {
  const { t } = useTranslation();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <img src={logoWhite} alt="PagoPay" className="h-8 w-auto" />
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => scrollTo(link.href)}
                className="text-primary-foreground/70 hover:text-primary-foreground text-sm font-medium transition-colors"
              >
                {t(`nav.${link.key}`)}
              </button>
            ))}
          </div>
          <div className="flex gap-4">
            <a href="https://www.x.com/mypagopay" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/mypagopay" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6">
          <p className="text-xs text-primary-foreground/50 leading-relaxed mb-4">
            {t("footer.disclaimer")}
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">{t("footer.copyright")}</p>
            <div className="flex gap-6">
              <PrivacyPolicyDialog>
                <Button variant="link" className="text-primary-foreground/60 hover:text-primary-foreground p-0 h-auto text-sm">
                  {t("footer.privacy")}
                </Button>
              </PrivacyPolicyDialog>
              <TermsOfServiceDialog>
                <Button variant="link" className="text-primary-foreground/60 hover:text-primary-foreground p-0 h-auto text-sm">
                  {t("footer.terms")}
                </Button>
              </TermsOfServiceDialog>
              <CookiePolicyDialog>
                <Button variant="link" className="text-primary-foreground/60 hover:text-primary-foreground p-0 h-auto text-sm">
                  {t("footer.cookies")}
                </Button>
              </CookiePolicyDialog>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
