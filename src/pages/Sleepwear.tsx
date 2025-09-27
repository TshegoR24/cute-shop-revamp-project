import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductGrid } from "@/components/ProductGrid";

const Sleepwear = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <ProductGrid />
      </div>
      <Footer />
    </div>
  );
};

export default Sleepwear;
