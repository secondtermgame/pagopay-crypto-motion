import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import { blogPosts } from "@/data/blogPosts";

const BlogIndex = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold text-foreground mb-2">Blog</h1>
        <p className="text-muted-foreground mb-10">Guides and comparisons from the PagoPay team.</p>
        <div className="mb-12 p-6 rounded-xl border border-border bg-muted/30">
          <h2 className="text-lg font-semibold text-foreground mb-3">Comparison hubs</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/compare/pagopay-vs-coinbase-card" className="text-primary font-medium hover:underline">
                PagoPay vs Coinbase Card
              </Link>
            </li>
            <li>
              <Link to="/compare/pagopay-vs-crypto-com-card" className="text-primary font-medium hover:underline">
                PagoPay vs Crypto.com Card
              </Link>
            </li>
          </ul>
        </div>
        <ul className="space-y-8">
          {blogPosts.map((p) => (
            <li key={p.slug} className="border-b border-border pb-8 last:border-0">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{p.date}</p>
              <Link
                to={`/blog/${p.slug}`}
                className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
              >
                {p.title}
              </Link>
              <p className="text-muted-foreground mt-2 leading-relaxed">{p.description}</p>
              <Link
                to={`/blog/${p.slug}`}
                className="inline-block mt-3 text-sm font-medium text-primary hover:underline"
              >
                Read article →
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default BlogIndex;
