import { Wallet, Send, TrendingUp, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Wallet,
    title: "Secure Custodial Wallets",
    description: "Easily store and manage your crypto assets in one secure, custodial wallet — connected to your prepaid card and accessible anywhere, anytime.",
  },
  {
    icon: Send,
    title: "Instant Wallet-to-Wallet Transfers",
    description: "Send crypto or fiat instantly to other PagoPay users — whether they're across the street or across the world. Transfers settle in seconds with zero hassle.",
  },
  {
    icon: TrendingUp,
    title: "Smart Currency Swaps",
    description: "Convert between crypto and fiat at real-time rates with a clear, low-margin spread. No hidden fees — just transparent, competitive pricing.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Your funds are protected by industry-standard encryption, secure infrastructure, and verified KYC. All payments and exchanges are safeguarded via our regulated partners.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Your Money, In Motion
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience seamless financial control across crypto and fiat — with instant transfers, effortless swaps, 
            and secure card access. All powered by PagoPay's modern wallet and real-time infrastructure.
          </p>
        </div>
        
        <div className="mb-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
            All-In-One Digital Wallet for Crypto and Fiat
          </h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-glow)] group"
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-accent">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
