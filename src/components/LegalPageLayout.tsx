import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import PageShell from "@/components/PageShell";

interface Props {
  breadcrumb: string;
  heroTitle: string;
  documentTitle: ReactNode;
  documentSubtitle?: ReactNode;
  children: ReactNode;
}

const LegalPageLayout = ({ breadcrumb, heroTitle, documentTitle, documentSubtitle, children }: Props) => {
  return (
    <PageShell showCtaBand={false}>
      {/* Hero — light cyan band with breadcrumb + title */}
      <section className="bg-secondary text-secondary-foreground pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="container mx-auto px-4 text-center">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-2 text-sm text-secondary-foreground/70 mb-6"
          >
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-secondary-foreground">{breadcrumb}</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-primary text-balance">
            {heroTitle}
          </h1>
        </div>
      </section>

      {/* Document body — white card */}
      <section className="bg-background pb-24 -mt-10 md:-mt-16">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto bg-card border border-border rounded-3xl p-8 md:p-14 shadow-[var(--shadow-soft)]">
            <header className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                {documentTitle}
              </h2>
              {documentSubtitle && (
                <p className="mt-2 text-muted-foreground">{documentSubtitle}</p>
              )}
            </header>
            {children}
          </article>
        </div>
      </section>
    </PageShell>
  );
};

export default LegalPageLayout;
