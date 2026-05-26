import LegalPageLayout from "@/components/LegalPageLayout";
import { TermsOfServiceContent } from "@/components/LegalPolicies";

const TermsOfServicePage = () => (
  <LegalPageLayout
    breadcrumb="Terms of Service"
    heroTitle="Terms of Service"
    documentTitle="PagoPay Terms of Service"
    documentSubtitle="Effective Date: May 26, 2026 — Last Updated: May 26, 2026"
  >
    <TermsOfServiceContent />
  </LegalPageLayout>
);

export default TermsOfServicePage;
