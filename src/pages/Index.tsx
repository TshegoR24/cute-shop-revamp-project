import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { RegionalInfo } from "@/components/RegionalInfo";
import { Footer } from "@/components/Footer";
import { EmailSignupPopup } from "@/components/EmailSignupPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero section with video background that extends behind navbar */}
      <div className="relative">
        <Hero />
        <Header />
      </div>
      <ProductGrid />
      <FeaturesSection />
      <TestimonialsSection />
      <RegionalInfo />
      <NewsletterSection />
      <Footer />
      <EmailSignupPopup />
    </div>
  );
};

export default Index;
