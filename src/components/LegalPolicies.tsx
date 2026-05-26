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
          <DialogDescription>Effective Date: May 26, 2026 — Last Updated: May 26, 2026</DialogDescription>
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
                PagoPay Payment Services is operated by 9538-8310 Québec Inc., a registered Money Services Business with the Financial Transactions and Reports Analysis Centre of Canada (FINTRAC) under registration N300000116, and licensed by Revenu Québec under permit 0000000000022125.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Certain operational services may be conducted by 1001529768 Ontario Inc., acting as a registered MSB agent on behalf of the principal MSB.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                These entities are responsible for processing personal information collected through the Platform and act as the data controllers under applicable privacy laws.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">3. Information We Collect</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                PagoPay collects various categories of personal information in order to provide services and comply with legal and regulatory requirements.
              </p>

              <h4 className="text-lg font-semibold mt-4 mb-2">Identity Information</h4>
              <p className="text-muted-foreground leading-relaxed mb-2">
                To verify user identity and comply with regulatory obligations, PagoPay collects:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Full name</li>
                <li>Date of birth</li>
                <li>Residential address</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Government-issued identification documents</li>
                <li>Proof of address documentation</li>
              </ul>

              <h4 className="text-lg font-semibold mt-4 mb-2">Biometric Verification Data</h4>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Identity verification may require biometric verification procedures including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Live selfie verification</li>
                <li>Facial recognition comparisons between the user and identity documents</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Biometric data is used solely for identity verification and fraud prevention. Biometric data is retained only for as long as necessary to complete the verification process and meet applicable record-keeping obligations, after which it is deleted or anonymized in accordance with applicable law.
              </p>

              <h4 className="text-lg font-semibold mt-4 mb-2">Financial and Transaction Information</h4>
              <p className="text-muted-foreground leading-relaxed mb-2">
                PagoPay collects financial and transactional information including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Account balances</li>
                <li>Cryptocurrency wallet addresses</li>
                <li>Transaction history</li>
                <li>Payment transfers</li>
                <li>Prepaid card transactions</li>
              </ul>

              <h4 className="text-lg font-semibold mt-4 mb-2">Device and Technical Information</h4>
              <p className="text-muted-foreground leading-relaxed mb-2">
                When users access the Platform, PagoPay may collect technical data including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>IP address</li>
                <li>Device identifiers</li>
                <li>Browser type</li>
                <li>Operating system</li>
                <li>Login activity and session information</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                This information may be used to maintain the security and performance of the Platform.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">4. How We Use Personal Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Personal information is used for the following purposes:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Verifying user identity (KYC / KYB)</li>
                <li>Preventing fraud and financial crime</li>
                <li>Complying with anti-money laundering regulations</li>
                <li>Processing transactions and providing services</li>
                <li>Maintaining platform security</li>
                <li>Providing customer support</li>
                <li>Complying with legal, regulatory, and reporting obligations under Canadian and international law</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">5. Identity Verification Providers</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                PagoPay uses trusted third-party verification providers to confirm user identity and prevent fraud. These providers may process identity documents and biometric verification data in order to verify user identity and comply with regulatory obligations.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                All verification providers are bound by strict contractual obligations regarding the confidentiality and security of personal information, and are required to comply with applicable privacy and data-protection laws.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">6. Sharing of Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                PagoPay may share personal information with trusted partners when necessary to provide services or comply with legal obligations.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">This may include sharing information with:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Identity verification providers</li>
                <li>Payment processors</li>
                <li>Card-issuing institutions</li>
                <li>Cryptocurrency liquidity providers</li>
                <li>Banking partners</li>
                <li>Regulatory and law enforcement authorities when required by law</li>
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
                <li>Encrypted communications</li>
                <li>Secure data storage</li>
                <li>Restricted system access</li>
                <li>Monitoring for suspicious activity</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">8. Data Retention</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Personal information is retained for as long as necessary to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Provide services</li>
                <li>Comply with legal and regulatory obligations</li>
                <li>Resolve disputes and enforce agreements</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Certain financial records are retained for a minimum of five (5) years following account closure, as required by Canadian anti-money-laundering regulations. Biometric data is retained only for the duration necessary to complete identity verification, unless longer retention is required by law.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">9. User Rights</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Users have rights regarding their personal information, including the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Request access to their personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of personal data where permitted by law</li>
                <li>Withdraw consent to processing where consent is the legal basis</li>
                <li>Request restriction of processing where applicable</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Requests may be submitted by contacting the Privacy Officer (see Section 13). PagoPay will respond to verified requests within the timeframes required by applicable law.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">10. Cookies and Tracking Technologies</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                PagoPay may use cookies and similar technologies to enhance the functionality and security of the Platform.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">Cookies may be used to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Maintain login sessions</li>
                <li>Improve user experience</li>
                <li>Analyze platform performance</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Users may adjust cookie preferences through their browser settings.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">11. International Data Transfers</h3>
              <p className="text-muted-foreground leading-relaxed">
                PagoPay services may involve data processing by service providers located in multiple jurisdictions, including outside Canada.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Personal information may therefore be transferred to and processed in countries outside the user's jurisdiction when necessary to provide services. PagoPay takes reasonable steps to ensure that such transfers comply with applicable privacy laws and that appropriate safeguards are in place to protect personal information.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">12. Updates to This Policy</h3>
              <p className="text-muted-foreground leading-relaxed">
                PagoPay may update this Privacy Policy from time to time. Updated versions will be published on the Platform with a revised effective date.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Continued use of the Platform after updates constitutes acceptance of the revised policy.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">13. Privacy Officer and Contact</h3>
              <p className="text-muted-foreground leading-relaxed">
                For privacy-related questions, requests, or complaints, users may contact PagoPay's Privacy Officer:
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                <a href="mailto:privacy@mypagopay.com" className="text-primary hover:underline">privacy@mypagopay.com</a>
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                For all other support matters, users may contact:
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                <a href="mailto:support@mypagopay.com" className="text-primary hover:underline">support@mypagopay.com</a>
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Users in Québec also have the right to lodge a complaint with the Commission d'accès à l'information du Québec (CAI). Users in other Canadian provinces may lodge complaints with the Office of the Privacy Commissioner of Canada (OPC).
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
          <DialogTitle className="text-2xl">PagoPay Terms of Service</DialogTitle>
          <DialogDescription>Effective Date: November 18, 2025 — Last Updated: March 2026</DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-foreground">
            <section>
              <h3 className="text-xl font-semibold mb-2">1. Introduction</h3>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service ("Terms") govern your access to and use of the PagoPay platform, mobile applications, and related services (collectively, the "Platform").
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                By accessing or using the Platform, you agree to be bound by these Terms. If you do not agree with these Terms, you must not use the Platform.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">2. Operator of the Platform</h3>
              <p className="text-muted-foreground leading-relaxed">
                PagoPay Payment Services is operated by 9538-8310 Québec Inc., a company incorporated in Québec, Canada and registered as a Money Services Business (MSB) with the Financial Transactions and Reports Analysis Centre of Canada (FINTRAC).
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Certain operational services may be conducted by 1001529768 Ontario Inc., acting as a registered MSB agent on behalf of the principal MSB.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">PagoPay provides financial technology services including:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>digital wallet services</li>
                <li>payment transfers and balance transfers</li>
                <li>cryptocurrency conversion services</li>
                <li>prepaid card funding and spending services</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                PagoPay is a financial technology platform and not a bank.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Funds held within the Platform are not deposits and are not insured by the Canada Deposit Insurance Corporation (CDIC).
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">3. Eligibility</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">To use the Platform, users must:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>be at least 18 years old</li>
                <li>complete required identity verification procedures</li>
                <li>comply with applicable laws and regulations</li>
                <li>not be subject to applicable sanctions restrictions.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                PagoPay reserves the right to refuse, restrict, or terminate accounts that do not meet eligibility requirements.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">4. Identity Verification</h3>
              <p className="text-muted-foreground leading-relaxed">
                PagoPay is required to verify the identity of users in accordance with anti-money laundering and financial crime regulations.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2 mb-2">Users may be required to submit:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>government-issued identification</li>
                <li>proof of residential address</li>
                <li>biometric verification such as live selfie verification.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                PagoPay may request additional documentation or information to comply with regulatory obligations.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">5. Services Offered</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">The Platform may provide access to the following services:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>digital wallet services</li>
                <li>cryptocurrency on-ramping and off-ramping</li>
                <li>peer-to-peer transfers</li>
                <li>foreign exchange conversion services</li>
                <li>prepaid card funding and spending</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Availability of services may vary depending on regulatory requirements and geographic restrictions.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">6. Fees</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">Certain services may involve fees, including but not limited to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>card issuance fees</li>
                <li>monthly card or account subscription fees</li>
                <li>cryptocurrency conversion spreads or fees</li>
                <li>foreign exchange conversion fees.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Applicable fees will be disclosed within the Platform prior to completing transactions.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">7. Card Subscription and Renewal Fees</h3>
              <p className="text-muted-foreground leading-relaxed">
                Certain prepaid card products offered through the Platform may require a recurring subscription or maintenance fee.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                By activating and using a PagoPay card, the cardholder authorizes PagoPay and its issuing partners to charge applicable card subscription or renewal fees.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Where applicable, card subscription fees may be automatically deducted from the cardholder's available balance at the time of renewal.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                If sufficient funds are not available at the time of renewal, card functionality may be suspended until the applicable subscription fee is paid.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">8. Account Responsibilities</h3>
              <p className="text-muted-foreground leading-relaxed">
                Users are responsible for maintaining the confidentiality of their account credentials.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2 mb-2">Users must:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>protect login information and authentication credentials</li>
                <li>immediately report unauthorized access or suspicious activity</li>
                <li>ensure all information provided to PagoPay is accurate and current.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                PagoPay is not responsible for losses resulting from unauthorized access caused by failure to safeguard account credentials.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">9. Transaction Responsibility</h3>
              <p className="text-muted-foreground leading-relaxed">
                Users are responsible for ensuring the accuracy of all transaction details submitted through the Platform.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2 mb-2">This includes verifying:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>recipient wallet addresses</li>
                <li>recipient account information</li>
                <li>transaction amounts</li>
                <li>selected blockchain networks where applicable.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Cryptocurrency transactions are generally irreversible once submitted to the blockchain network.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                PagoPay cannot cancel, reverse, or recover transactions once confirmed on the blockchain.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                PagoPay is not responsible for losses resulting from transactions sent to incorrect wallet addresses, incorrect recipients, or incorrect network selections.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">10. Blockchain Network Risk</h3>
              <p className="text-muted-foreground leading-relaxed">
                Cryptocurrency transactions are processed through decentralized blockchain networks that are not controlled by PagoPay.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Transaction processing times, network fees, and confirmation speeds are determined by the underlying blockchain networks.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2 mb-2">Users acknowledge that:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>blockchain networks may experience congestion or delays</li>
                <li>transaction fees may fluctuate</li>
                <li>confirmation times may vary depending on network activity.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                PagoPay is not responsible for delays, increased transaction fees, or failed transactions resulting from blockchain network conditions outside its control.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">11. Prohibited Activities</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">Users may not use the Platform to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>engage in illegal or fraudulent activities</li>
                <li>conduct transactions involving sanctioned individuals or jurisdictions</li>
                <li>attempt to bypass identity verification procedures</li>
                <li>process transactions on behalf of third parties without authorization</li>
                <li>violate applicable financial regulations.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                PagoPay reserves the right to restrict or terminate accounts involved in prohibited activities.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">12. Regulatory Compliance and Anti-Money Laundering</h3>
              <p className="text-muted-foreground leading-relaxed">
                PagoPay operates in accordance with applicable anti-money laundering and counter-terrorist financing regulations.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                PagoPay may monitor transactions and account activity to ensure compliance with applicable laws.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2 mb-2">Users acknowledge that PagoPay may:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>conduct transaction monitoring</li>
                <li>request additional identity verification</li>
                <li>delay or block transactions</li>
                <li>restrict or suspend accounts.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                PagoPay may report certain transactions or account activity to regulatory authorities as required by law.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">13. Source of Funds Verification</h3>
              <p className="text-muted-foreground leading-relaxed">
                PagoPay may request documentation regarding the source of funds associated with transactions conducted through the Platform.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Failure to provide requested information may result in transaction delays, account restrictions, or account termination.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">14. Sanctions and Geographic Restrictions</h3>
              <p className="text-muted-foreground leading-relaxed">
                PagoPay services may not be available in certain jurisdictions due to regulatory requirements or international sanctions.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Users may not access or use the Platform if they are located in, resident in, or conducting transactions from jurisdictions subject to comprehensive sanctions.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2 mb-2">These sanctions may include those administered by:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>the Government of Canada</li>
                <li>the United States Office of Foreign Assets Control (OFAC)</li>
                <li>the United Nations Security Council</li>
                <li>other applicable governmental authorities.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2 mb-2">Examples of sanctioned jurisdictions may include:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>North Korea</li>
                <li>Iran</li>
                <li>Syria</li>
                <li>Cuba</li>
                <li>Crimea Region of Ukraine</li>
                <li>Donetsk Region of Ukraine</li>
                <li>Luhansk Region of Ukraine.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                PagoPay reserves the right to restrict services in any jurisdiction where providing services would violate applicable laws or regulations.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">15. Third-Party Crypto Payments</h3>
              <p className="text-muted-foreground leading-relaxed">
                Individual users may receive cryptocurrency transfers from external blockchain wallets, including transfers originating from third parties.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Business Accounts may also receive cryptocurrency payments from customers or other counterparties as part of legitimate commercial activity.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                However, transfers made to PagoPay for the purpose of funding corporate wallets or corporate prepaid card programs must originate from the verified Business Account associated with the onboarded corporate entity.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                PagoPay does not accept direct third-party transfers intended to fund corporate card programs from individuals or entities that have not been verified through the Business Account.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                All incoming transactions remain subject to compliance review and monitoring.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">16. Third-Party Services</h3>
              <p className="text-muted-foreground leading-relaxed">
                Certain services provided through the Platform may rely on third-party service providers including payment processors, card issuing institutions, and cryptocurrency liquidity providers.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                PagoPay is not responsible for delays, outages, or service disruptions caused by third-party providers.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">17. Card Program and Issuer Disclaimer</h3>
              <p className="text-muted-foreground leading-relaxed">
                Prepaid card services offered through the Platform are issued and managed by licensed third-party issuing institutions.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                These issuing institutions are responsible for the custody of card balances and administration of card program funds.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                PagoPay does not hold or control card program funds.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                If a card program is suspended or terminated by the issuing institution or card network, PagoPay will use reasonable efforts to notify users and facilitate communication with the issuing institution.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Users may be required to contact the issuing institution directly to recover funds held by the issuer.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">18. Program Changes</h3>
              <p className="text-muted-foreground leading-relaxed">
                PagoPay may modify, suspend, replace, or discontinue certain services or programs where required by regulatory requirements, banking partners, card issuers, or service providers.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                PagoPay will use reasonable efforts to notify users of material changes where practicable.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">19. Inactive or Dormant Accounts</h3>
              <p className="text-muted-foreground leading-relaxed">
                Accounts that remain inactive for twelve (12) consecutive months may be classified as dormant.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                PagoPay may apply a monthly inactivity maintenance fee to dormant accounts where permitted by applicable regulations.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Users may avoid inactivity fees by logging into their account or conducting a transaction.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">20. Disclaimers and Limitation of Liability</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">PagoPay disclaims liability for:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>losses resulting from cryptocurrency price volatility</li>
                <li>unauthorized account access caused by user negligence</li>
                <li>service interruptions caused by third-party infrastructure providers.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                To the maximum extent permitted by law, PagoPay shall not be liable for indirect or consequential damages arising from the use of the Platform.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">21. Force Majeure</h3>
              <p className="text-muted-foreground leading-relaxed">
                PagoPay shall not be liable for delays or failure to perform obligations due to events beyond its control, including natural disasters, government actions, banking disruptions, blockchain network outages, or telecommunications failures.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">22. Modifications to Terms</h3>
              <p className="text-muted-foreground leading-relaxed">
                PagoPay may update these Terms from time to time.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Updated versions will be published on the Platform with a revised effective date.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Continued use of the Platform constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">23. Privacy Policy</h3>
              <p className="text-muted-foreground leading-relaxed">
                The collection and use of personal information is governed by the PagoPay Privacy Policy, which forms part of these Terms.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">24. Entire Agreement</h3>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service, together with the Privacy Policy and any policies referenced herein, constitute the entire agreement between the user and PagoPay regarding use of the Platform.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                If any provision of these Terms is determined to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">25. Governing Law</h3>
              <p className="text-muted-foreground leading-relaxed">
                These Terms are governed by the laws of the Province of Québec and the applicable laws of Canada.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">26. Contact Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                For questions regarding these Terms or PagoPay services:
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                <a href="mailto:support@mypagopay.com" className="text-primary hover:underline">support@mypagopay.com</a>
                <br />
                <a href="mailto:compliance@mypagopay.com" className="text-primary hover:underline">compliance@mypagopay.com</a>
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
