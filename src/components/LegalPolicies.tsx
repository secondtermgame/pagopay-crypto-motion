import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export const PrivacyPolicyDialog = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Privacy Policy</DialogTitle>
          <DialogDescription>Effective Date: November 18, 2025</DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-foreground">
            <section>
              <h3 className="text-xl font-semibold mb-2">Who We Are</h3>
              <p className="text-muted-foreground leading-relaxed">
                PagoPay (9538-8310 Québec Inc.) is operated by 9090 Park Ave #355, Montreal, Quebec H2N 1Y8, Canada. 
                This Privacy Policy outlines how we collect, use, and protect your personal information.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Information We Collect</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                We collect the following personal data directly from users:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Full name</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Additionally, KYC-related data may be processed by third-party providers such as Didit and Sumsub, 
                if you provide them with consent or a token to verify your identity for card issuance and financial 
                compliance purposes.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Purpose of Data Collection</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>To provide prepaid card and wallet services</li>
                <li>To enable on-ramp and off-ramp cryptocurrency services</li>
                <li>To ensure compliance with applicable anti-money laundering (AML) regulations</li>
                <li>To send transactional, service-related, and marketing communications (with opt-out options)</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Cookies & Analytics</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                We use session cookies and Google Analytics for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Basic app functionality</li>
                <li>Understanding site usage patterns</li>
                <li>Improving user experience</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                You can control your cookie preferences in your browser or app settings.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Data Sharing & Storage</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>KYC data (if shared) is stored securely by third-party providers</li>
                <li>Crypto custody is handled via API access to our licensed exchange partners</li>
                <li>Firebase may be used for app authentication and data hosting</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Your Rights</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Depending on your location (e.g. Canada, EU, USA), you have rights to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Access your personal data</li>
                <li>Request correction or deletion</li>
                <li>Object to processing or withdraw consent</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                To exercise these rights, contact: <a href="mailto:info@mypagopay.com" className="text-primary hover:underline">info@mypagopay.com</a>
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export const TermsOfServiceDialog = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Terms of Service</DialogTitle>
          <DialogDescription>Effective Date: November 18, 2025</DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-foreground">
            <section>
              <h3 className="text-xl font-semibold mb-2">1. Introduction</h3>
              <p className="text-muted-foreground leading-relaxed">
                By using PagoPay, you agree to these Terms. If you disagree, please do not use the platform.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">2. Eligibility</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">Users must:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Be at least 18 years old</li>
                <li>Reside in Canada, USA, or the European Union</li>
                <li>Not be subject to OFAC or other sanctions</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">3. Services Offered</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">PagoPay provides:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Prepaid virtual and physical card services</li>
                <li>Custodial crypto wallets</li>
                <li>Fiat and crypto on-ramping/off-ramping</li>
                <li>FX conversion and balance transfers</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">4. Account Responsibilities</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Users are responsible for keeping login credentials secure</li>
                <li>Any unauthorized access must be reported immediately</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">5. Fees & Charges</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Card issuance and monthly fees apply</li>
                <li>FX conversion and crypto conversion may include markups</li>
                <li>See app for up-to-date pricing</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">6. Fraud & Chargebacks</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fraud and chargeback handling is managed by our issuer partner, NCS Financial Services Group. 
                PagoPay assists with documentation collection and Level 1 support.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">7. Marketing Communications</h3>
              <p className="text-muted-foreground leading-relaxed">
                Users may receive emails and push notifications. These can be managed via in-app settings.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">8. Disclaimers & Liability</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">PagoPay disclaims liability for:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Loss of funds due to crypto volatility or unauthorized access</li>
                <li>Delays or downtimes caused by third-party infrastructure</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">9. Dispute Resolution</h3>
              <p className="text-muted-foreground leading-relaxed">
                All disputes are governed by the laws of Québec, Canada. Binding arbitration will be used for 
                any disputes arising from use of our services.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">10. Modifications</h3>
              <p className="text-muted-foreground leading-relaxed">
                We may revise these Terms. Continued use of the platform constitutes acceptance of the new Terms.
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export const CookiePolicyDialog = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Cookie Policy</DialogTitle>
          <DialogDescription>Effective Date: November 18, 2025</DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-foreground">
            <section>
              <h3 className="text-xl font-semibold mb-2">What Are Cookies?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files stored on your device to help improve user experience.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Types of Cookies We Use</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>
                  <strong className="text-foreground">Session Cookies:</strong> Essential for basic functionality 
                  (authentication, navigation)
                </li>
                <li>
                  <strong className="text-foreground">Analytics Cookies:</strong> Used via Google Analytics to 
                  understand how users engage with our app and site
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Managing Cookies</h3>
              <p className="text-muted-foreground leading-relaxed">
                You can manage or disable cookies via your browser or in-app settings. Disabling cookies may limit 
                certain functionalities.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Updates to This Policy</h3>
              <p className="text-muted-foreground leading-relaxed">
                We may update this policy to reflect changes in tech or regulations. You will be notified of material 
                updates via the app or website.
              </p>
            </section>

            <section>
              <p className="text-muted-foreground leading-relaxed">
                For questions, contact: <a href="mailto:info@mypagopay.com" className="text-primary hover:underline">info@mypagopay.com</a>
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
