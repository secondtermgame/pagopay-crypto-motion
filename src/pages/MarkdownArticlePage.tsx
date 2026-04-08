import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SiteHeader from "@/components/SiteHeader";

type MarkdownArticlePageProps = {
  title: string;
  date?: string;
  markdownPath: string;
  backHref: string;
  backLabel: string;
  stripFirstHeading?: boolean;
};

const MarkdownArticlePage = ({
  title,
  date,
  markdownPath,
  backHref,
  backLabel,
  stripFirstHeading = true,
}: MarkdownArticlePageProps) => {
  const [markdown, setMarkdown] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(markdownPath)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.text();
      })
      .then((text) => {
        if (!cancelled) {
          const body = stripFirstHeading ? text.replace(/^#\s[^\n]+\n+/, "").trimStart() : text;
          setMarkdown(body);
        }
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [markdownPath, stripFirstHeading]);

  if (failed) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <main className="container mx-auto px-4 py-16 text-center">
          <p className="text-muted-foreground mb-4">Could not load this page.</p>
          <Link to="/" className="text-primary font-medium hover:underline">
            Home
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <article className="container mx-auto px-4 py-12 max-w-3xl">
        {date ? (
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">{date}</p>
        ) : null}
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">{title}</h1>
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
          <Link to={backHref} className="text-primary font-medium hover:underline">
            {backLabel}
          </Link>
        </div>
      </article>
    </div>
  );
};

export default MarkdownArticlePage;
