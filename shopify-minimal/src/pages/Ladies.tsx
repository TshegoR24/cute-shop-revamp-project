import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategoryProductGrid } from "@/components/CategoryProductGrid";

const Ladies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <section className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Ladies Collection
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-pink-300 to-purple-300 mx-auto mb-4 rounded-full"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our elegant collection of nightwear designed exclusively for women. Comfort meets style in every piece.
              </p>
            </div>
          </div>
        </section>
        <CategoryProductGrid category="ladies" />
      </div>
      <Footer />
    </div>
  );
};

export default Ladies;
