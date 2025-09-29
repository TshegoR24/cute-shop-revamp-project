import { useState } from "react";
import { X, Heart, ShoppingBag, Star, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Product } from "@/data/products";
import { useLocale } from "@/contexts/LocaleContext";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { ImageHoverZoom } from "./ImageHoverZoom";

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const QuickViewModal = ({ product, isOpen, onClose }: QuickViewModalProps) => {
  const { formatCurrency } = useLocale();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  if (!product) return null;

  const isWishlisted = isInWishlist(product.id);
  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  // Sample product images (in real app, this would come from product data)
  const productImages = [product.image, product.image, product.image];
  
  // Dynamic options based on product type
  const isKeyChain = product.name.toLowerCase().includes('key chain') || product.name.toLowerCase().includes('keychain');
  const isClothing = product.category === 'Ladies' || product.category === 'Little Girls' || product.category === 'Sleepwear';
  const isPajamas = product.name.toLowerCase().includes('pj') || product.name.toLowerCase().includes('pajama') || product.name.toLowerCase().includes('dayjama');
  const isAccessory = isKeyChain || product.name.toLowerCase().includes('chain') || product.name.toLowerCase().includes('accessory');
  
  // Only show sizes for clothing items (not key chains or accessories)
  const sizes = isClothing && !isAccessory ? ["XS", "S", "M", "L", "XL"] : [];
  
  // Show colors based on product type
  const isBowTiePJ = product.name.toLowerCase().includes('bow tie') || product.name.toLowerCase().includes('bowtie');
  const isMoonBluePJ = product.name.toLowerCase().includes('moonblue') || product.name.toLowerCase().includes('moon blue');
  
  let colors = [];
  if (isBowTiePJ) {
    colors = ["Red", "Pink"];
  } else if (isMoonBluePJ) {
    colors = ["Blue"];
  } else if (isClothing || isKeyChain) {
    colors = ["Pink", "Blue", "Red", "White"];
  }

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">Quick View</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-muted/30 rounded-lg overflow-hidden">
              <ImageHoverZoom
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-full"
                zoomScale={2.0}
                zoomPosition="center"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square w-16 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index 
                      ? "border-foreground" 
                      : "border-transparent hover:border-muted-foreground"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Badges */}
            <div className="flex gap-2">
              {product.isNew && (
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                  New
                </Badge>
              )}
              {product.isSale && (
                <Badge variant="destructive" className="bg-red-100 text-red-800 border-red-200">
                  -{discountPercentage}% Sale
                </Badge>
              )}
            </div>

            {/* Product Name */}
            <h2 className="text-2xl font-light text-foreground">
              {product.name}
            </h2>

            {/* Category */}
            <p className="text-sm text-muted-foreground uppercase tracking-widest">
              {product.category}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${
                      star <= product.rating
                        ? 'fill-foreground text-foreground'
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-light text-foreground">
                {formatCurrency(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  {formatCurrency(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Size Selection - Only for clothing items */}
            {sizes.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-foreground">Size</h3>
                <div className="flex gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-2 text-sm border rounded-md transition-all ${
                        selectedSize === size
                          ? "border-foreground bg-foreground text-background"
                          : "border-border hover:border-foreground/50"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection - Only for items that have color options */}
            {colors.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-foreground">Color</h3>
                <div className="flex gap-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-3 py-2 text-sm border rounded-md transition-all ${
                        selectedColor === color
                          ? "border-foreground bg-foreground text-background"
                          : "border-border hover:border-foreground/50"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity - Show for all products */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-foreground">Quantity</h3>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button
                variant="outline"
                onClick={handleWishlistToggle}
                className={`flex-1 ${
                  isWishlisted 
                    ? "bg-red-50 border-red-200 text-red-600 hover:bg-red-100" 
                    : ""
                }`}
              >
                <Heart className={`h-4 w-4 mr-2 ${isWishlisted ? "fill-current" : ""}`} />
                {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
              </Button>
              <Button 
                onClick={handleAddToCart}
                className="flex-1 bg-foreground text-background hover:bg-foreground/90"
              >
                <ShoppingBag className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </div>

            {/* Product Description */}
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {isKeyChain 
                  ? "A beautiful and functional key chain that adds a touch of style to your keys. Perfect as a gift or for personal use."
                  : isPajamas 
                    ? "Experience the perfect blend of comfort and style with these beautiful pajamas. Made with premium materials and designed for a good night's sleep."
                    : "Experience the perfect blend of comfort and style with this beautiful piece. Made with premium materials and designed for everyday elegance."
                }
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
