import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import LegalPageLayout from "@/components/LegalPageLayout";

interface Props {
  breadcrumb: string;
  heroTitle: string;
  documentTitle: string;
  documentSubtitle?: string;
  markdownPath: string;
}

const LegalMarkdownPage = ({ breadcrumb, heroTitle, documentTitle, documentSubtitle, markdownPath }: Props) => {
  const [md, setMd] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(markdownPath)
      .then((r) => {
        if (!r.ok) throw new Error("not found");
        return r.text();
      })
      .then((text) => {
        if (!cancelled) {
          // strip first H1 (rendered in hero already)
          const stripped = text.replace(/^#\s[^\n]+\n+/, "").trimStart();
          setMd(stripped);
        }
      })
      .catch(() => !cancelled && setFailed(true));
    return () => {
      cancelled = true;
    };
  }, [markdownPath]);

  return (
    <LegalPageLayout
      breadcrumb={breadcrumb}
      heroTitle={heroTitle}
      documentTitle={documentTitle}
      documentSubtitle={documentSubtitle}
    >
      {failed ? (
        <p className="text-muted-foreground">Could not load this document.</p>
      ) : md === null ? (
        <div className="space-y-3">
          <div className="h-4 w-1/2 bg-muted rounded animate-pulse" />
          <div className="h-4 w-full bg-muted rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-muted rounded animate-pulse" />
          <div className="h-4 w-3/4 bg-muted rounded animate-pulse" />
        </div>
      ) : (
        <div
          className="prose prose-slate max-w-none
            prose-headings:text-foreground prose-headings:tracking-tight prose-headings:font-semibold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-foreground/85 prose-p:leading-relaxed
            prose-strong:text-foreground prose-strong:font-semibold
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-li:text-foreground/85 prose-li:marker:text-primary
            prose-table:text-sm prose-table:rounded-2xl prose-table:overflow-hidden prose-table:border prose-table:border-border
            prose-thead:bg-muted/60
            prose-th:text-left prose-th:font-semibold prose-th:text-foreground prose-th:p-3 prose-th:border-b prose-th:border-border
            prose-td:p-3 prose-td:border-b prose-td:border-border/60
            prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:bg-accent/15 prose-blockquote:rounded-r-2xl prose-blockquote:py-1 prose-blockquote:px-5 prose-blockquote:not-italic prose-blockquote:text-foreground
          "
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({ href, children }) => {
                const external = href?.startsWith("http") || href?.startsWith("mailto:");
                return external ? (
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                ) : (
                  <a href={href}>{children}</a>
                );
              },
            }}
          >
            {md}
          </ReactMarkdown>
        </div>
      )}
    </LegalPageLayout>
  );
};

export default LegalMarkdownPage;
