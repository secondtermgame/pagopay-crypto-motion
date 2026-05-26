import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import AboutPage from "./pages/AboutPage";

import PricingPage from "./pages/PricingPage";
import SecurityPage from "./pages/SecurityPage";
import FaqPage from "./pages/FaqPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import CardholderAgreementPage from "./pages/CardholderAgreementPage";
import AccountDeletionPage from "./pages/AccountDeletionPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/latam" element={<Navigate to="/" replace />} />
          <Route path="/africa" element={<Navigate to="/" replace />} />
          <Route path="/latam/how-it-works" element={<Navigate to="/about" replace />} />
          <Route path="/africa/how-it-works" element={<Navigate to="/about" replace />} />
          <Route path="/how-it-works" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/cardholder-agreement" element={<CardholderAgreementPage />} />
          <Route path="/account-deletion" element={<AccountDeletionPage />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/best-crypto-cards" element={<Navigate to="/blog/what-is-a-crypto-card" replace />} />
          <Route path="/blog/best-crypto-debit-cards-2026" element={<Navigate to="/blog/what-is-a-crypto-card" replace />} />
          <Route path="/blog/how-to-spend-crypto" element={<Navigate to="/blog/how-to-spend-crypto-in-real-life" replace />} />
          <Route path="/blog/how-to-spend-bitcoin-at-any-store" element={<Navigate to="/blog/how-to-spend-crypto-in-real-life" replace />} />
          <Route path="/blog/pagopay-vs-coinbase-card" element={<Navigate to="/blog/plastic-vs-metal-pagopay-card" replace />} />
          <Route path="/compare/coinbase-card" element={<Navigate to="/blog" replace />} />
          <Route path="/compare/crypto-com" element={<Navigate to="/blog" replace />} />
          <Route path="/compare/pagopay-vs-coinbase-card" element={<Navigate to="/blog" replace />} />
          <Route path="/compare/pagopay-vs-crypto-com-card" element={<Navigate to="/blog" replace />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
