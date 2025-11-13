import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              PagoPay
            </h3>
            <p className="text-muted-foreground">
              Freedom to Move. Power to Spend.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Security</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="text-sm text-muted-foreground space-y-4">
            <p className="leading-relaxed">
              <strong>Legal Disclaimer:</strong> PagoPay is a financial technology company and not a bank. 
              Banking services are provided by our licensed partner institutions. Cryptocurrency investments 
              carry risk, and the value of digital assets may fluctuate. PagoPay card services are subject to 
              identity verification and approval. Fees may apply for certain transactions. Please refer to our 
              Terms of Service and Privacy Policy for complete details. PagoPay is committed to regulatory 
              compliance and operates in accordance with applicable financial services laws. By using PagoPay 
              services, you acknowledge that you have read and understood these terms.
            </p>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
              <p>© 2025 PagoPay. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
