import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import RegionalLanding from "./pages/RegionalLanding";
import LatamLanding from "./pages/LatamLanding";
import AfricaLanding from "./pages/AfricaLanding";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import AboutPage from "./pages/AboutPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import PricingPage from "./pages/PricingPage";
import SecurityPage from "./pages/SecurityPage";
import FaqPage from "./pages/FaqPage";
import LatamHowItWorksPage from "./pages/LatamHowItWorksPage";
import AfricaHowItWorksPage from "./pages/AfricaHowItWorksPage";
import CompareCoinbasePage from "./pages/CompareCoinbasePage";
import CompareCryptoComPage from "./pages/CompareCryptoComPage";
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
          <Route path="/latam" element={<LatamLanding />} />
          <Route path="/africa" element={<AfricaLanding />} />
          <Route path="/latam/how-it-works" element={<LatamHowItWorksPage />} />
          <Route path="/africa/how-it-works" element={<AfricaHowItWorksPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/best-crypto-cards" element={<Navigate to="/blog/best-crypto-debit-cards-2026" replace />} />
          <Route path="/blog/how-to-spend-crypto" element={<Navigate to="/blog/how-to-spend-bitcoin-at-any-store" replace />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/compare/coinbase-card" element={<Navigate to="/compare/pagopay-vs-coinbase-card" replace />} />
          <Route path="/compare/crypto-com" element={<Navigate to="/compare/pagopay-vs-crypto-com-card" replace />} />
          <Route path="/compare/pagopay-vs-coinbase-card" element={<CompareCoinbasePage />} />
          <Route path="/compare/pagopay-vs-crypto-com-card" element={<CompareCryptoComPage />} />
          <Route path="/:region" element={<RegionalLanding />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
