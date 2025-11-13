import appPreview from "@/assets/app-preview.jpg";
import { Check } from "lucide-react";

const benefits = [
  "Freedom to Move. Power to Spend",
  "Simple Crypto-to-Fiat Swaps",
  "Global Acceptance",
  "Real-time Exchange Rates",
  "Zero Hidden Fees",
  "24/7 Customer Support",
];

const Benefits = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src={appPreview} 
              alt="PagoPay App" 
              className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Built For Every Coin You Touch
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you're holding Bitcoin, Ethereum, or any other cryptocurrency, 
              PagoPay makes it effortless to use your digital assets in the real world.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-6 w-6 rounded-full bg-gradient-hero flex items-center justify-center">
                      <Check className="h-4 w-4 text-primary-foreground" />
                    </div>
                  </div>
                  <p className="text-lg text-foreground font-medium">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
