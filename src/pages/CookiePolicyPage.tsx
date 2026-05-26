import LegalPageLayout from "@/components/LegalPageLayout";
import { CookiePolicyContent } from "@/components/LegalPolicies";

const CookiePolicyPage = () => (
  <LegalPageLayout
    breadcrumb="Cookie Policy"
    heroTitle="Cookie Policy"
    documentTitle="Cookie Policy"
    documentSubtitle="Effective Date: November 18, 2025"
  >
    <CookiePolicyContent />
  </LegalPageLayout>
);

export default CookiePolicyPage;
