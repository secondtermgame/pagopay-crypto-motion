import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Newspaper } from "lucide-react";
import PageShell from "@/components/PageShell";
import { blogPosts } from "@/data/blogPosts";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const [markdown, setMarkdown] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!post || !slug) return;
    let cancelled = false;
    fetch(`/blog/${slug}.md`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.text();
      })
      .then((text) => {
        if (!cancelled) {
          const withoutMainTitle = text.replace(/^#\s[^\n]+\n+/, "").trimStart();
          setMarkdown(withoutMainTitle);
        }
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [post, slug]);

  if (!post) return <NotFound />;

  if (failed) {
    return (
      <PageShell showCtaBand={false}>
        <main className="container mx-auto px-4 py-32 text-center">
          <p className="text-muted-foreground mb-4">Could not load this article.</p>
          <Link to="/blog" className="text-primary font-medium hover:underline">
            Back to blog
          </Link>
        </main>
      </PageShell>
    );
  }

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <PageShell>
      <section className="bg-gradient-hero text-white pt-32 md:pt-40 pb-32 md:pb-44 relative overflow-hidden grain">
        <div className="pointer-events-none absolute -top-32 -left-20 w-[500px] h-[500px] rounded-full bg-accent/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary-glow/30 blur-3xl" />
        <div className="container mx-auto px-4 relative">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-accent text-sm font-medium mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>
          <div className="max-w-3xl">
            <div className="eyebrow text-accent mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Guide · {post.date}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-balance">
              {post.title}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/75 leading-relaxed">{post.description}</p>
            <div className="mt-10 flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-accent text-primary font-bold flex items-center justify-center">P</div>
              <div>
                <p className="text-sm font-semibold text-white">PagoPay Editorial</p>
                <p className="text-xs text-white/60">{post.date}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-20 md:-mt-28 pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto bg-card border border-border rounded-3xl p-8 md:p-12 shadow-[var(--shadow-soft)]">
            {markdown === null ? (
              <div className="space-y-3">
                <div className="h-4 w-1/2 bg-muted rounded animate-pulse" />
                <div className="h-4 w-full bg-muted rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-muted rounded animate-pulse" />
              </div>
            ) : (
              <div className="prose prose-slate max-w-none
                prose-headings:text-foreground prose-headings:tracking-tight prose-headings:font-semibold
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-foreground/85 prose-p:leading-relaxed prose-p:text-[17px]
                prose-strong:text-foreground prose-strong:font-semibold
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-li:text-foreground/85 prose-li:marker:text-primary
                prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:bg-accent/15 prose-blockquote:rounded-r-2xl prose-blockquote:py-1 prose-blockquote:px-5 prose-blockquote:not-italic prose-blockquote:text-foreground
                prose-table:text-sm
                first-letter:prose-p:first-of-type:float-left first-letter:prose-p:first-of-type:text-6xl first-letter:prose-p:first-of-type:font-bold first-letter:prose-p:first-of-type:leading-none first-letter:prose-p:first-of-type:pr-2 first-letter:prose-p:first-of-type:pt-1 first-letter:prose-p:first-of-type:text-primary
              ">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    a: ({ href, children }) => (
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        {children}
                      </a>
                    ),
                  }}
                >
                  {markdown}
                </ReactMarkdown>
              </div>
            )}
          </article>

          {related.length > 0 && (
            <div className="max-w-5xl mx-auto mt-20">
              <h3 className="text-2xl font-semibold text-foreground tracking-tight mb-8">Keep reading</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/blog/${r.slug}`}
                    className="group rounded-3xl overflow-hidden border border-border bg-card flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_60px_-25px_rgba(16,75,54,0.25)]"
                  >
                    <div className="relative aspect-[16/8] bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                      <Newspaper className="h-12 w-12 text-accent/40" strokeWidth={1} />
                    </div>
                    <div className="p-6">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{r.date}</p>
                      <h4 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                        {r.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
};

export default BlogPost;
