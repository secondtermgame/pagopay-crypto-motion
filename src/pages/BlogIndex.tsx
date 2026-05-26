import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Newspaper } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import { blogPosts } from "@/data/blogPosts";

const SITE_URL = "https://pagopay-crypto-motion.lovable.app";

const BlogIndex = () => {
  const [featured, ...rest] = blogPosts;

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: blogPosts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/blog/${p.slug}`,
      name: p.title,
    })),
  };

  return (
    <PageShell>
      <Helmet>
        <title>PagoPay Blog | Crypto Card Insights, Guides & Tips</title>
        <meta
          name="description"
          content="Explore the PagoPay blog for guides on spending crypto, how crypto cards work, stablecoin spending, freelancer tips, travel advice, and more."
        />
        <link rel="canonical" href={`${SITE_URL}/blog`} />
        <meta property="og:title" content="PagoPay Blog | Crypto Card Insights, Guides & Tips" />
        <meta
          property="og:description"
          content="Guides on spending crypto, how crypto cards work, stablecoin spending, freelancer tips, travel advice, and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/blog`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PagoPay Blog | Crypto Card Insights, Guides & Tips" />
        <meta
          name="twitter:description"
          content="Guides on spending crypto, how crypto cards work, stablecoin spending, freelancer tips, travel advice, and more."
        />
        <script type="application/ld+json">{JSON.stringify(itemListJsonLd)}</script>
      </Helmet>

      <PageHero
        eyebrow="Blog"
        title="PagoPay Blog"
        subtitle="Crypto Card Insights, Guides, and Tips"
        align="left"
      />

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
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {featured.category} · {featured.date}
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
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">{p.category} · {p.date}</p>
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
        </div>
      </section>
    </PageShell>
  );
};

export default BlogIndex;
