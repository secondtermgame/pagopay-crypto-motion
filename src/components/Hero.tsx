import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroCard from "@/assets/hero-card.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJWMzRoLTJ6bTAtNGgydjJoLTJ2LTJ6bS0yIDJoLTJ2Mmgydi0yem0wLTJoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yem0tMi0yaDJ2Mmgtdi0yem0wIDRoMnYyaC0ydi0yem0tMiAyaDJ2Mmgtdi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground leading-tight">
              SINGLE APP FOR
              <br />
              <span className="bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
                SPENDING, SENDING,
              </span>
              <br />
              AND BANKING
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto lg:mx-0">
              PagoPay makes finances simple, no matter crypto or fiat
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-background text-primary hover:bg-background/90 shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105"
              >
                Get PagoPay Card
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm"
              >
                Partner with Us
              </Button>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="relative animate-float">
              <img 
                src={heroCard} 
                alt="PagoPay Card" 
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
