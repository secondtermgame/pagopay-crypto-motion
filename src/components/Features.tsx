import { Wallet, Send, TrendingUp, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Wallet,
    title: "Crypto Wallet",
    description: "Store and manage all your cryptocurrencies in one secure place with instant access.",
  },
  {
    icon: Send,
    title: "Instant Transfers",
    description: "Send crypto or fiat to anyone, anywhere in the world within seconds.",
  },
  {
    icon: TrendingUp,
    title: "Simple Swaps",
    description: "Convert between crypto and fiat currencies with transparent, competitive rates.",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Your assets are protected with enterprise-level encryption and security protocols.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Your Crypto in Motion
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience seamless financial freedom with our comprehensive suite of crypto and fiat services
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-glow)] group"
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-hero">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
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
