import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LocaleProvider } from "@/contexts/LocaleContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ProductDetail } from "./pages/ProductDetail";
import { testLocalization } from "@/lib/localization.test";

const queryClient = new QueryClient();

const App = () => {
  // Run localization tests in development
  if (import.meta.env.DEV) {
    setTimeout(() => {
      testLocalization();
    }, 2000);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <LocaleProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LocaleProvider>
    </QueryClientProvider>
  );
};

export default App;
