import { ReactNode } from "react";

interface Props {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  variant?: "light" | "dark";
}

const PageHero = ({ eyebrow, title, subtitle, align = "center", variant = "light" }: Props) => {
  const dark = variant === "dark";
  return (
    <section
      className={`relative overflow-hidden ${
        dark ? "bg-gradient-hero text-white grain" : "bg-background text-foreground"
      } pt-24 md:pt-32 pb-16 md:pb-20`}
    >
      {dark ? (
        <>
          <div className="pointer-events-none absolute -top-32 -left-20 w-[500px] h-[500px] rounded-full bg-accent/15 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary-glow/30 blur-3xl" />
        </>
      ) : (
        <>
          <div className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle, hsl(163 65% 18%) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            }}
          />
        </>
      )}
      <div className={`container mx-auto px-4 relative ${align === "center" ? "text-center" : ""}`}>
        <div className={`max-w-3xl ${align === "center" ? "mx-auto" : ""}`}>
          <div
            className={`eyebrow mb-5 ${align === "center" ? "justify-center" : ""} ${
              dark ? "text-accent" : "text-primary"
            }`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-accent" : "bg-primary"}`} />
            {eyebrow}
          </div>
          <h1
            className={`text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-balance ${
              dark ? "text-white" : "text-foreground"
            }`}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={`mt-6 text-lg md:text-xl leading-relaxed ${
                dark ? "text-white/75" : "text-muted-foreground"
              } ${align === "center" ? "mx-auto" : ""} max-w-2xl`}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
