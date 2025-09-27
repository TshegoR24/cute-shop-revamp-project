import { useState } from "react";
import { ArrowLeft, Heart, Star, Truck, RotateCcw, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useParams, Link } from "react-router-dom";

// Sample product data - in real app this would come from API
const sampleProduct = {
  id: 1,
  name: "",
  price: 49.99,
  originalPrice: 69.99,
  images: ["🌸", "🌙", "✨", "💫"],
  rating: 5,
  reviews: 127,
  category: "Ladies",
  gender: "Ladies",
  isNew: true,
  isSale: true,
  description: "Cozy and comfortable pajama set with beautiful pink floral pattern. Made from soft, breathable cotton that's perfect for a good night's sleep.",
  features: [
    "100% Cotton",
    "Breathable fabric",
    "Elastic waistband",
    "Machine washable",
    "Available in multiple sizes"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  colors: ["Pink", "Blue", "Lavender", "Mint"]
};

export const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="container mx-auto px-6 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Product Images */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="aspect-square bg-gradient-dreamy rounded-none p-12 flex items-center justify-center">
              <div className="text-8xl opacity-60 animate-float">
                {sampleProduct.images[selectedImage]}
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-4">
              {sampleProduct.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square w-20 bg-gradient-dreamy rounded-none p-4 flex items-center justify-center transition-all ${
                    selectedImage === index 
                      ? "ring-2 ring-pink-400" 
                      : "hover:ring-2 ring-pink-200"
                  }`}
                >
                  <div className="text-2xl opacity-60">{image}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Badges */}
            <div className="flex gap-3">
              {sampleProduct.isNew && (
                <Badge className="bg-lavender text-foreground">New</Badge>
              )}
              {sampleProduct.isSale && (
                <Badge className="bg-pink text-foreground">Sale</Badge>
              )}
            </div>

            {/* Title and Rating */}
            <div>
              <h1 className="text-4xl font-light text-foreground mb-4 tracking-wide">
                {sampleProduct.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < sampleProduct.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground text-sm">
                  {sampleProduct.reviews} reviews
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-light text-foreground">
                ${sampleProduct.price}
              </span>
              {sampleProduct.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  ${sampleProduct.originalPrice}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {sampleProduct.description}
            </p>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-light mb-3">Color</h3>
              <div className="flex gap-3">
                {sampleProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-none transition-all ${
                      selectedColor === color
                        ? "border-pink-400 bg-pink-50"
                        : "border-border hover:border-pink-200"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-light mb-3">Size</h3>
              <div className="flex gap-3">
                {sampleProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-none transition-all ${
                      selectedSize === size
                        ? "border-blue-400 bg-blue-50"
                        : "border-border hover:border-blue-200"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-light mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex border border-border rounded-none">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-muted transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-border">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-muted transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="flex-1 bg-foreground text-background hover:bg-foreground/90 px-8 py-6 rounded-none font-light tracking-wide"
              >
                Add to Cart
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border border-foreground/20 text-foreground hover:bg-foreground hover:text-background px-6 py-6 rounded-none"
              >
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-light mb-3">Features</h3>
              <ul className="space-y-2">
                {sampleProduct.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-1 h-1 bg-foreground/40 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4" />
                Free Shipping
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="h-4 w-4" />
                Easy Returns
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Secure Checkout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 