import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";

type MarkdownArticlePageProps = {
  title: string;
  date?: string;
  markdownPath: string;
  backHref: string;
  backLabel: string;
  stripFirstHeading?: boolean;
  eyebrow?: string;
};

const MarkdownArticlePage = ({
  title,
  date,
  markdownPath,
  backHref,
  backLabel,
  stripFirstHeading = true,
  eyebrow,
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

  const guessedEyebrow = eyebrow ?? (title.toLowerCase().includes("pricing") ? "Pricing" : "Article");

  if (failed) {
    return (
      <PageShell showCtaBand={false}>
        <main className="container mx-auto px-4 py-32 text-center">
          <p className="text-muted-foreground mb-4">Could not load this page.</p>
          <Link to="/" className="text-primary font-medium hover:underline">
            Home
          </Link>
        </main>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <PageHero
        eyebrow={guessedEyebrow}
        title={title.replace(/\s*—.*$/, "")}
        subtitle={date}
        align="center"
      />

      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto bg-card border border-border rounded-3xl p-8 md:p-12 shadow-[var(--shadow-soft)]">
            {markdown === null ? (
              <div className="space-y-3">
                <div className="h-4 w-1/2 bg-muted rounded animate-pulse" />
                <div className="h-4 w-full bg-muted rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-muted rounded animate-pulse" />
                <div className="h-4 w-3/4 bg-muted rounded animate-pulse" />
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
                prose-table:text-sm prose-table:rounded-2xl prose-table:overflow-hidden prose-table:border prose-table:border-border
                prose-thead:bg-muted/60
                prose-th:text-left prose-th:font-semibold prose-th:text-foreground prose-th:p-3 prose-th:border-b prose-th:border-border
                prose-td:p-3 prose-td:border-b prose-td:border-border/60
                prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:bg-accent/15 prose-blockquote:rounded-r-2xl prose-blockquote:py-1 prose-blockquote:px-5 prose-blockquote:not-italic prose-blockquote:text-foreground
                prose-code:text-primary prose-code:bg-primary/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-medium prose-code:before:content-[''] prose-code:after:content-['']
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
          <div className="max-w-3xl mx-auto mt-10 text-center">
            <Link to={backHref} className="text-primary font-semibold hover:underline">
              {backLabel}
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default MarkdownArticlePage;
