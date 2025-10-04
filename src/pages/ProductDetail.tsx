import { useState, useEffect } from "react";
import { ArrowLeft, Heart, Star, Truck, RotateCcw, Shield, ShoppingBag, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useParams, Link } from "react-router-dom";
import { allProducts } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { shopifyHelpers } from "@/lib/shopify";
import { useLocale } from "@/contexts/LocaleContext";

export const ProductDetail = () => {
  const { id } = useParams();
  const { formatCurrency } = useLocale();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [shopifyProduct, setShopifyProduct] = useState<any>(null);
  const [relatedProducts, setRelatedProducts] = useState(allProducts.slice(0, 4));

  // Find product by ID
  const product = allProducts.find(p => p.id === parseInt(id || "1")) || allProducts[0];

  // Fetch Shopify product data
  useEffect(() => {
    const fetchShopifyProduct = async () => {
      try {
        const shopifyProducts = await shopifyHelpers.getAllProducts();
        if (shopifyProducts && shopifyProducts.length > 0) {
          const shopifyProduct = shopifyProducts.find((p: any) => 
            parseInt(p.id.split('/').pop()) === parseInt(id || "1")
          );
          if (shopifyProduct) {
            setShopifyProduct(shopifyProduct);
          }
        }
      } catch (error) {
        console.log('⚠️ Could not fetch Shopify product data');
      }
    };

    fetchShopifyProduct();
  }, [id]);

  // Get related products (same category, excluding current product)
  useEffect(() => {
    const related = allProducts
      .filter(p => p.id !== product.id && p.category === product.category)
      .slice(0, 4);
    
    // If not enough in same category, fill with random products
    if (related.length < 4) {
      const additional = allProducts
        .filter(p => p.id !== product.id && !related.some(r => r.id === p.id))
        .slice(0, 4 - related.length);
      setRelatedProducts([...related, ...additional]);
    } else {
      setRelatedProducts(related);
    }
  }, [product]);

  // Mock additional product data
  const productImages = [
    product.image,
    "/optimized/DSC08531 (1).jpg",
    "/optimized/DSC08533 (1).jpg", 
    "/optimized/DSC08537 (1).jpg",
    "/optimized/DSC08540 (1).jpg",
    "/optimized/DSC08555.jpg"
  ];

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const savings = product.originalPrice ? product.originalPrice - product.price : 0;

  return (
    <div className="min-h-screen bg-background pt-20"> {/* pt-20 for header */}
      <div className="container mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Shop
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Product Images */}
          <div className="space-y-6">
            {/* Thumbnail Gallery */}
            <div className="flex flex-col gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square w-20 bg-muted/30 rounded-lg overflow-hidden transition-all ${
                    selectedImage === index 
                      ? "ring-2 ring-foreground" 
                      : "hover:ring-2 ring-foreground/50"
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`Product view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="aspect-square bg-muted/30 rounded-lg overflow-hidden relative">
              <img 
                src={productImages[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && (
                  <Badge className="bg-foreground text-background font-light tracking-wide px-3 py-1">
                    New
                  </Badge>
                )}
                {product.isSale && (
                  <Badge className="bg-red-500 text-white font-light tracking-wide px-3 py-1">
                    {discountPercentage}% OFF
                  </Badge>
                )}
              </div>
              
              {product.isSoldOut && (
                <Badge className="absolute top-4 right-4 bg-red-500 text-white font-light tracking-wide px-3 py-1">
                  Sold Out
                </Badge>
              )}
            </div>

            {/* Size Guide Button */}
            <Button 
              variant="outline" 
              size="sm"
              className="border-border/50 hover:bg-muted/50 font-light"
            >
              See In Your Size
            </Button>
          </div>

          {/* Product Information */}
          <div className="space-y-8">
            {/* Title */}
            <div>
              <h1 className="text-3xl font-light text-foreground mb-4 tracking-wide leading-tight">
                {product.name}
              </h1>
              
              {/* Reviews */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < product.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground text-sm font-light">
                  {product.reviews} reviews
                </span>
              </div>
            </div>

            {/* Pricing */}
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-light text-foreground">
                  {formatCurrency(product.price)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">
                      {formatCurrency(product.originalPrice)}
                    </span>
                    <Badge className="bg-red-500 text-white font-light tracking-wide px-2 py-1">
                      {discountPercentage}% OFF - Save {formatCurrency(savings)}
                    </Badge>
                  </>
                )}
              </div>
              <p className="text-sm text-muted-foreground font-light">
                Price includes VAT. No surprises!
              </p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-light mb-3">Color: Black</h3>
              <div className="flex gap-3">
                <button
                  className={`w-10 h-10 rounded-full border-2 transition-all ${
                    selectedColor === "black"
                      ? "border-foreground ring-2 ring-foreground/20"
                      : "border-border hover:border-foreground/50"
                  }`}
                  onClick={() => setSelectedColor("black")}
                >
                  <div className="w-full h-full rounded-full bg-black"></div>
                </button>
                <button
                  className={`w-10 h-10 rounded-full border-2 transition-all ${
                    selectedColor === "pink"
                      ? "border-foreground ring-2 ring-foreground/20"
                      : "border-border hover:border-foreground/50"
                  }`}
                  onClick={() => setSelectedColor("pink")}
                >
                  <div className="w-full h-full rounded-full bg-pink-300"></div>
                </button>
                <button
                  className={`w-10 h-10 rounded-full border-2 transition-all ${
                    selectedColor === "lavender"
                      ? "border-foreground ring-2 ring-foreground/20"
                      : "border-border hover:border-foreground/50"
                  }`}
                  onClick={() => setSelectedColor("lavender")}
                >
                  <div className="w-full h-full rounded-full bg-purple-300"></div>
                </button>
              </div>
            </div>

            {/* Size Guide Link */}
            <div>
              <Link to="#" className="text-sm text-foreground hover:text-foreground/70 transition-colors font-light">
                Size and Fit Guide
              </Link>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-light mb-3">Size: S</h3>
              <div className="flex flex-wrap gap-3">
                {["XS", "S", "M", "L", "XL", "2XL", "3XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 border rounded-none transition-all font-light ${
                      selectedSize === size
                        ? "border-foreground bg-foreground text-background"
                        : "border-border hover:border-foreground/50"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-2 font-light">
                Fits sizes: 6-8 | Waist: 26-29 in, Hips: 35.5-38 in
              </p>
            </div>

            {/* Quantity Selector */}
            <div>
              <h3 className="text-lg font-light mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-none">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="rounded-none border-r border-border"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 text-center min-w-[60px] font-light">
                    {quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                    className="rounded-none border-l border-border"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="pt-4">
              <Button
                size="lg"
                className="w-full bg-foreground text-background hover:bg-foreground/90 px-8 py-6 rounded-none font-light tracking-wide transition-all duration-300 text-lg"
                disabled={product.isSoldOut}
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                {product.isSoldOut ? "SOLD OUT" : "ADD TO CART"}
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-light text-foreground">Free Shipping</p>
                  <p className="text-xs text-muted-foreground">On orders over $50</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-light text-foreground">Easy Returns</p>
                  <p className="text-xs text-muted-foreground">30-day policy</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-light text-foreground">Secure Checkout</p>
                  <p className="text-xs text-muted-foreground">SSL encrypted</p>
                </div>
              </div>
            </div>

            {/* Wishlist Button */}
            <div className="flex justify-center pt-4">
              <Button
                variant="outline"
                size="lg"
                className="border border-border/50 hover:bg-muted/50 px-8 py-6 rounded-none font-light tracking-wide transition-all duration-300"
              >
                <Heart className="mr-2 h-5 w-5" />
                Add to Wishlist
              </Button>
            </div>
          </div>
        </div>

        {/* Product Description Section */}
        {shopifyProduct?.description && (
          <div className="mt-16 pt-16 border-t border-border/50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-light text-foreground mb-8 tracking-wide">
                Product Description
              </h2>
              <div 
                className="prose prose-sm max-w-none text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: shopifyProduct.description }}
              />
            </div>
          </div>
        )}

        {/* You Will Also Love Section */}
        <div className="mt-16 pt-16 border-t border-border/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-foreground mb-12 text-center tracking-wide">
              You Will Also Love
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/shop-all">
                <Button
                  variant="outline"
                  size="lg"
                  className="border border-foreground/20 text-foreground hover:bg-foreground hover:text-background px-8 py-6 rounded-none font-light tracking-wide transition-all duration-300"
                >
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};