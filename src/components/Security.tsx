import { Shield, Lock, Eye, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import securityBg from "@/assets/security-bg.jpg";

const securityFeatures = [
  {
    icon: Shield,
    title: "Military-Grade Encryption",
    description: "All sensitive data is protected using AES-256 encryption, the same military-grade standard trusted by banks and governments across the globe.",
  },
  {
    icon: Lock,
    title: "Multi-Factor & Biometric Authentication",
    description: "Secure your account with two-factor authentication (2FA) and biometric login, giving you full control and added protection from unauthorized access.",
  },
  {
    icon: Eye,
    title: "Real-Time AI-Powered Monitoring",
    description: "Our systems are continuously monitored by AI-driven fraud detection engines, scanning for suspicious activity 24/7 and automatically blocking threats in real time.",
  },
  {
    icon: FileCheck,
    title: "Full Regulatory Compliance",
    description: "PagoPay is in process of registering with FINTRAC (Canada) and operates under strict adherence to international AML, KYC, and data privacy regulations, including GDPR and PCI DSS standards.",
  },
];

const Security = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${securityBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Security You Can Trust
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At PagoPay, your security isn't an afterthought — it's our foundation. We use advanced technology 
            and adhere to the highest industry standards to ensure your funds, data, and identity remain safe at all times.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {securityFeatures.map((feature, index) => (
            <Card 
              key={index}
              className="border-border bg-card/80 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
            >
              <CardContent className="p-8">
                <div className="mb-4 inline-flex p-4 rounded-xl bg-gradient-accent">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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

export default Security;
