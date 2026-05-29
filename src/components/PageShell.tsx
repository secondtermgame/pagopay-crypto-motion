import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/SiteHeader";
import FloatingCTA from "@/components/FloatingCTA";
import { SignupForm } from "@/components/SignupForm";
import { useTranslation } from "react-i18next";

interface Props {
  children: ReactNode;
  showCtaBand?: boolean;
  afterCta?: ReactNode;
}

const PageShell = ({ children, showCtaBand = true, afterCta }: Props) => {
  const { t } = useTranslation();
  const [signupOpen, setSignupOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>

      {showCtaBand && (
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-hero p-10 md:p-20 text-center grain">
              <div className="pointer-events-none absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-accent/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-primary-glow/40 blur-3xl" />
              <div className="relative max-w-2xl mx-auto">
                <div className="eyebrow text-accent justify-center mb-5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Ready when you are
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-[1.05] mb-8 text-balance">
                  Freedom to Move. Power to Spend.
                </h2>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button onClick={() => setSignupOpen(true)} className="btn-lime px-8 py-4 text-base">
                    {t("hero.cta")} <ArrowRight className="h-5 w-5" />
                  </button>
                  <button onClick={() => navigate("/")} className="btn-ghost-light px-8 py-4 text-base">
                    Back to home
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
      <FloatingCTA onClick={() => setSignupOpen(true)} label={t("hero.cta")} />
      <SignupForm open={signupOpen} onOpenChange={setSignupOpen} />
    </div>
  );
};

export default PageShell;
