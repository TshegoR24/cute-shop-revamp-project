import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";
import { useWishlist } from "@/contexts/WishlistContext";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlist, clearWishlist } = useWishlist();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BreadcrumbNav />
      
      <div className="pt-20">
        <section className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                My Wishlist
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-pink-300 to-purple-300 mx-auto mb-4 rounded-full"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Save your favorite items for later. Your wishlist is saved across sessions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            {wishlist.length > 0 ? (
              <>
                {/* Wishlist Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <Heart className="h-6 w-6 text-pink-500" />
                    <h2 className="text-2xl font-light">
                      {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} in your wishlist
                    </h2>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={clearWishlist}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Clear All
                  </Button>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {wishlist.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="text-center mt-16">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button size="lg" className="px-8 py-6">
                      <ShoppingBag className="mr-2 h-5 w-5" />
                      Add All to Cart
                    </Button>
                    <Button variant="outline" size="lg" className="px-8 py-6">
                      <Link to="/" className="flex items-center">
                        Continue Shopping
                      </Link>
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              /* Empty Wishlist */
              <div className="text-center py-24">
                <Heart className="h-24 w-24 text-muted-foreground/30 mx-auto mb-6" />
                <h3 className="text-2xl font-light text-foreground mb-4">
                  Your wishlist is empty
                </h3>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Start adding items you love to your wishlist. They'll be saved here for you to revisit later.
                </p>
                <Button size="lg" className="px-8 py-6">
                  <Link to="/" className="flex items-center">
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Start Shopping
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Wishlist;
