import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SiteHeader from "@/components/SiteHeader";
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

  if (!post) {
    return <NotFound />;
  }

  if (failed) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <main className="container mx-auto px-4 py-16 text-center">
          <p className="text-muted-foreground mb-4">Could not load this article.</p>
          <Link to="/blog" className="text-primary font-medium hover:underline">
            Back to blog
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <article className="container mx-auto px-4 py-12 max-w-3xl">
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">{post.date}</p>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">{post.title}</h1>
        {markdown === null ? (
          <p className="text-muted-foreground">Loading…</p>
        ) : (
          <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-foreground prose-table:text-sm prose-th:border prose-td:border">
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
        <div className="mt-12 pt-8 border-t border-border">
          <Link to="/blog" className="text-primary font-medium hover:underline">
            ← All posts
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
