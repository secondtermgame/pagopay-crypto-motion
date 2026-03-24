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
          <DialogTitle className="text-2xl">PagoPay Privacy Policy</DialogTitle>
          <DialogDescription>Effective Date: November 18, 2025 — Last Updated: March 2026</DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-foreground">
            <section>
              <h3 className="text-xl font-semibold mb-2">1. Introduction</h3>
              <p className="text-muted-foreground leading-relaxed">
                PagoPay is committed to protecting the privacy and security of personal information.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                This Privacy Policy describes how personal information is collected, used, stored, and disclosed when users access or use the PagoPay platform, mobile applications, and related services (the "Platform").
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                By accessing or using the Platform, users consent to the collection and use of personal information in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">2. Operator of the Platform</h3>
              <p className="text-muted-foreground leading-relaxed">
                PagoPay Payment Services is operated by 9538-8310 Québec Inc., a company incorporated in Québec, Canada.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Certain operational services may be conducted by 1001529768 Ontario Inc., acting as a registered MSB agent on behalf of the principal MSB.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                These entities are responsible for processing personal information collected through the Platform.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">3. Information We Collect</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                PagoPay may collect various categories of personal information in order to provide services and comply with legal and regulatory requirements.
              </p>

              <h4 className="text-lg font-semibold mt-4 mb-2">Identity Information</h4>
              <p className="text-muted-foreground leading-relaxed mb-2">
                To verify user identity and comply with regulatory obligations, PagoPay may collect:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>full name</li>
                <li>date of birth</li>
                <li>residential address</li>
                <li>email address</li>
                <li>phone number</li>
                <li>government-issued identification documents</li>
                <li>proof of address documentation.</li>
              </ul>

              <h4 className="text-lg font-semibold mt-4 mb-2">Biometric Verification Data</h4>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Identity verification may require biometric verification procedures including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>live selfie verification</li>
                <li>facial recognition comparisons between the user and identity documents.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Biometric data is used solely for identity verification and fraud prevention purposes.
              </p>

              <h4 className="text-lg font-semibold mt-4 mb-2">Financial and Transaction Information</h4>
              <p className="text-muted-foreground leading-relaxed mb-2">
                PagoPay may collect financial and transactional information including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>wallet balances</li>
                <li>cryptocurrency wallet addresses</li>
                <li>transaction history</li>
                <li>payment transfers</li>
                <li>prepaid card transactions.</li>
              </ul>

              <h4 className="text-lg font-semibold mt-4 mb-2">Device and Technical Information</h4>
              <p className="text-muted-foreground leading-relaxed mb-2">
                When users access the Platform, PagoPay may collect technical data including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>IP address</li>
                <li>device identifiers</li>
                <li>browser type</li>
                <li>operating system</li>
                <li>login activity and session information.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                This information helps maintain the security and performance of the Platform.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">4. How We Use Personal Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Personal information may be used for the following purposes:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>verifying user identity (KYC / KYB)</li>
                <li>preventing fraud and financial crime</li>
                <li>complying with anti-money laundering regulations</li>
                <li>processing transactions and providing services</li>
                <li>maintaining platform security</li>
                <li>providing customer support.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">5. Identity Verification Providers</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                PagoPay uses trusted third-party verification providers to confirm user identity and prevent fraud.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">These providers may include:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>SumSub</li>
                <li>Didit</li>
                <li>Trulio</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                These providers may process identity documents and biometric verification data in order to verify user identity and comply with regulatory obligations.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">6. Sharing of Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                PagoPay may share personal information with trusted partners when necessary to provide services or comply with legal obligations.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">This may include sharing information with:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>identity verification providers</li>
                <li>payment processors</li>
                <li>card issuing institutions</li>
                <li>cryptocurrency liquidity providers</li>
                <li>banking partners</li>
                <li>regulatory authorities when required by law.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                PagoPay does not sell personal information to third parties.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">7. Data Security</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                PagoPay uses industry-standard security measures designed to protect personal information from unauthorized access, misuse, or disclosure.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">Security controls may include:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>encrypted communications</li>
                <li>secure data storage</li>
                <li>restricted system access</li>
                <li>monitoring for suspicious activity.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">8. Data Retention</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Personal information may be retained for as long as necessary to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>provide services</li>
                <li>comply with legal and regulatory obligations</li>
                <li>resolve disputes and enforce agreements.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Certain financial records may be retained for longer periods where required by law.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">9. User Rights</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Users may have rights regarding their personal information, including the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>request access to their personal information</li>
                <li>request correction of inaccurate information</li>
                <li>request deletion of personal data where permitted by law.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Requests may be submitted by contacting PagoPay support.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">10. Cookies and Tracking Technologies</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                PagoPay may use cookies and similar technologies to enhance the functionality and security of the Platform.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">Cookies may be used to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>maintain login sessions</li>
                <li>improve user experience</li>
                <li>analyze platform performance.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Users may adjust cookie preferences through their browser settings.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">11. International Data Transfers</h3>
              <p className="text-muted-foreground leading-relaxed">
                PagoPay services may involve data processing by service providers located in multiple jurisdictions.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Personal information may therefore be transferred to and processed in countries outside the user's jurisdiction when necessary to provide services.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                PagoPay takes reasonable steps to ensure that such transfers comply with applicable privacy laws.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">12. Updates to This Policy</h3>
              <p className="text-muted-foreground leading-relaxed">
                PagoPay may update this Privacy Policy from time to time.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Updated versions will be published on the Platform with a revised effective date.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Continued use of the Platform after updates constitutes acceptance of the revised policy.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">13. Contact</h3>
              <p className="text-muted-foreground leading-relaxed">
                For privacy-related questions or requests, please contact:
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                <a href="mailto:support@mypagopay.com" className="text-primary hover:underline">support@mypagopay.com</a>
                <br />
                <a href="mailto:privacy@mypagopay.com" className="text-primary hover:underline">privacy@mypagopay.com</a>
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
