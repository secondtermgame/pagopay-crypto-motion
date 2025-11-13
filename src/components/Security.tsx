import { Shield, Lock, Eye, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import securityBg from "@/assets/security-bg.jpg";

const securityFeatures = [
  {
    icon: Shield,
    title: "Military-Grade Encryption",
    description: "Your data is protected with AES-256 encryption, the same standard used by banks and governments worldwide.",
  },
  {
    icon: Lock,
    title: "Multi-Factor Authentication",
    description: "Add extra layers of security with biometric authentication and 2FA to keep your account safe.",
  },
  {
    icon: Eye,
    title: "Real-Time Monitoring",
    description: "Our AI-powered systems monitor transactions 24/7 to detect and prevent fraudulent activity.",
  },
  {
    icon: FileCheck,
    title: "Regulatory Compliance",
    description: "Fully licensed and compliant with international financial regulations and data protection laws.",
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
            Your financial security is our top priority. We employ cutting-edge technology 
            and industry best practices to protect your assets and personal information.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {securityFeatures.map((feature, index) => (
            <Card 
              key={index}
              className="border-border bg-card/80 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
            >
              <CardContent className="p-8">
                <div className="mb-4 inline-flex p-4 rounded-xl bg-gradient-hero">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
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
