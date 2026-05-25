import { Link } from "react-router-dom";
import { ArrowRight, Newspaper, Scale } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import { blogPosts } from "@/data/blogPosts";

const BlogIndex = () => {
  const [featured, ...rest] = blogPosts;

  return (
    <PageShell>
      <PageHero
        eyebrow="Blog"
        title="Guides, comparisons & ideas"
        subtitle="Stories from the PagoPay team about spending crypto, sending money, and life beyond traditional banking."
        align="left"
      />

      <section className="pb-12 -mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {["All", "Guides", "Comparisons", "Product"].map((c, i) => (
              <button
                key={c}
                className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  i === 0
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground/70 border-border hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          {/* Featured */}
          {featured && (
            <Link
              to={`/blog/${featured.slug}`}
              className="group block mb-16 rounded-[2rem] overflow-hidden border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_-25px_rgba(16,75,54,0.3)]"
            >
              <div className="grid lg:grid-cols-[1.2fr_1fr]">
                <div className="relative aspect-[16/10] lg:aspect-auto bg-gradient-hero overflow-hidden grain">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Newspaper className="h-24 w-24 text-accent/40" strokeWidth={1} />
                  </div>
                  <div className="absolute top-5 left-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <p className="eyebrow text-primary mb-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Guide · {featured.date}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight mb-4 group-hover:text-primary transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">
                    {featured.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                    Read article <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Rest */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {rest.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="group rounded-3xl overflow-hidden border border-border bg-card flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_60px_-25px_rgba(16,75,54,0.25)]"
              >
                <div className="relative aspect-[16/10] bg-gradient-to-br from-primary to-primary-glow overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Newspaper className="h-16 w-16 text-accent/40 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                  </div>
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Guide · {p.date}</p>
                  <h3 className="text-lg font-semibold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                    {p.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold">
                    Read <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Comparison hubs */}
          <div className="mt-16 rounded-3xl border border-border bg-card p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-accent text-primary">
                <Scale className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground tracking-tight">Comparison hubs</h3>
                <p className="text-sm text-muted-foreground mt-1">See how PagoPay stacks up against other crypto cards.</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link
                to="/compare/pagopay-vs-coinbase-card"
                className="group flex items-center justify-between rounded-2xl border border-border bg-background px-5 py-4 hover:border-primary/30 transition-colors"
              >
                <span className="text-sm font-semibold text-foreground">PagoPay vs Coinbase Card</span>
                <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/compare/pagopay-vs-crypto-com-card"
                className="group flex items-center justify-between rounded-2xl border border-border bg-background px-5 py-4 hover:border-primary/30 transition-colors"
              >
                <span className="text-sm font-semibold text-foreground">PagoPay vs Crypto.com Card</span>
                <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default BlogIndex;
