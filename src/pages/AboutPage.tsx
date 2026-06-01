import { Link } from "react-router-dom";
import { UserCheck, Wallet, CreditCard } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";

const AboutPage = () => {
  const steps = [
    {
      icon: CreditCard,
      title: "Choose your card and sign up.",
      body: "Create your account and pick the card that fits how you spend — Plastic or Metal. Pay your one-time setup fee to lock in your card and start the process.",
    },
    {
      icon: UserCheck,
      title: "Complete verification.",
      body: "Submit your identity documents for verification. Once approved, your card is prepared and shipped directly to you.",
    },
    {
      icon: Wallet,
      title: "Activate and start spending.",
      body: "When your card arrives, deposit crypto to load your balance. Your funds convert to USD instantly, ready to spend anywhere Mastercard is accepted — in stores, online, or at ATMs worldwide.",
    },
  ];

  return (
    <PageShell>
      <Seo
        title="About PagoPay — How crypto-to-fiat spending works"
        description="Meet PagoPay: a crypto-to-fiat payment platform built for travelers, remote workers, and freelancers. Learn how our Mastercard prepaid cards turn digital assets into everyday spending power."
        path="/about"
      />
      <PageHero
        eyebrow="About PagoPay"
        title={<>About PagoPay <span className="text-primary">&amp; How It Works</span></>}
        subtitle="The crypto-to-fiat payment platform built for travelers, remote workers, and freelancers paid in crypto."
        align="left"
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 max-w-6xl">
            <div className="lg:sticky lg:top-28 self-start">
              <div className="eyebrow text-primary mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Overview
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight leading-tight">
                What is PagoPay?
              </h2>
            </div>
            <div className="space-y-8 text-foreground/90 text-lg leading-relaxed">
              <p>
                <strong>PagoPay</strong> is a crypto-to-fiat payment platform. You deposit Bitcoin,
                Ethereum, stablecoins, or other supported crypto; funds are converted to USD at market rates; you spend with a prepaid
                card with <strong>zero foreign exchange markup</strong> on international purchases.
              </p>

              <blockquote className="relative rounded-3xl border-l-4 border-accent bg-accent/15 p-8 text-xl md:text-2xl font-medium text-foreground leading-snug">
                It's built for travelers, remote workers, freelancers paid in crypto, and anyone who wants everyday spending power from digital assets — without a traditional bank rail.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden grain">
        <div className="pointer-events-none absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-accent/15 blur-3xl" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 max-w-6xl">
            <div className="lg:sticky lg:top-28 self-start">
              <div className="eyebrow text-accent mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Our story
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                Made for how money moves now.
              </h2>
            </div>
            <div className="space-y-6 text-white/85 text-lg leading-relaxed">
              <p>
                PagoPay was born from a simple idea — that the way people hold and spend money is changing, and the tools around it should change too. We're a team obsessed with making digital assets feel as easy to use as cash. Every part of the experience is designed around clarity, simplicity, and people. Whether you're a freelancer, a traveler, or just someone who believes the future of money belongs to you — we built this for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 max-w-6xl">
            <div className="lg:sticky lg:top-28 self-start">
              <div className="eyebrow text-primary mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Acceptance
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight leading-tight">
                Where do PagoPay cards work?
              </h2>
            </div>
            <div className="text-foreground/90 text-lg leading-relaxed space-y-6">
              <p>
                PagoPay cards are accepted anywhere Mastercard is accepted — at millions of merchants and ATMs across the globe, online and in person.
              </p>
              <p>
                Use it for groceries, restaurants, hotels, flights, online shopping, subscriptions, ride-shares, fuel, or ATM withdrawals. Anywhere you'd normally pay with a debit or credit card, your PagoPay card works the same way — fast, secure, and ready when you are.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/40 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/20 blur-3xl" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mb-16">
            <div className="eyebrow text-primary mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> How it works
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.05] mb-6">
              How PagoPay works
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Getting started with PagoPay takes three steps: choose your card, complete verification, and start spending the moment your card arrives.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-12 left-12 right-12 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div
                    key={i}
                    className="group glass-card rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-25px_rgba(16,75,54,0.3)]"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-12 w-12 rounded-full bg-accent text-primary font-bold flex items-center justify-center text-lg ring-4 ring-background shadow-[var(--shadow-lime)]">
                        {i + 1}
                      </div>
                      <div className="p-2.5 rounded-xl bg-primary/5 text-primary">
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-12">
            <strong>Author:</strong> PagoPay Editorial · <strong>Last updated:</strong> May 2026
          </p>
          <p className="mt-6">
            <Link to="/" className="text-primary font-semibold hover:underline">
              ← Home
            </Link>
          </p>
        </div>
      </section>
    </PageShell>
  );
};

export default AboutPage;
