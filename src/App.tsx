import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LocaleProvider } from "@/contexts/LocaleContext";
import { CartProvider } from "@/contexts/CartContext";
import { WishlistProvider } from "@/contexts/WishlistContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ProductDetail } from "./pages/ProductDetail";
import Ladies from "./pages/Ladies";
import LittleGirls from "./pages/LittleGirls";
import Sleepwear from "./pages/Sleepwear";
import Wishlist from "./pages/Wishlist";
import { ShopAll } from "./pages/ShopAll";
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
        <CartProvider>
          <WishlistProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/ladies" element={<Ladies />} />
                <Route path="/little-girls" element={<LittleGirls />} />
                <Route path="/sleepwear" element={<Sleepwear />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/shop-all" element={<ShopAll />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
          </WishlistProvider>
        </CartProvider>
      </LocaleProvider>
    </QueryClientProvider>
  );
};

export default App;
