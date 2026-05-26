import LegalPageLayout from "@/components/LegalPageLayout";
import { PrivacyPolicyContent } from "@/components/LegalPolicies";

const PrivacyPolicyPage = () => (
  <LegalPageLayout
    breadcrumb="Privacy Policy"
    heroTitle="Privacy Policy"
    documentTitle="PagoPay Privacy Policy"
    documentSubtitle="Effective Date: May 26, 2026 — Last Updated: May 26, 2026"
  >
    <PrivacyPolicyContent />
  </LegalPageLayout>
);

export default PrivacyPolicyPage;
