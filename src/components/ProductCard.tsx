import { useState } from "react";
import { Heart, ShoppingBag, Star, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useLocale } from "@/contexts/LocaleContext";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { QuickViewModal } from "./QuickViewModal";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  gender: string;
  isNew?: boolean;
  isSale?: boolean;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { formatCurrency } = useLocale();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  
  const isWishlisted = isInWishlist(product.id);

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <>
    <Card 
      className="group relative border border-border/50 hover:border-foreground/30 transition-all duration-300 bg-background overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-muted/30">
        {product.image.startsWith('/') ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl opacity-40">
            {product.image}
          </div>
        )}
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isSoldOut && (
            <Badge className="bg-red-500 text-white font-light tracking-wide px-3 py-1">
              Sold Out
            </Badge>
          )}
          {product.isNew && !product.isSoldOut && (
            <Badge className="bg-foreground text-background font-light tracking-wide px-3 py-1">
              New
            </Badge>
          )}
          {product.isSale && discountPercentage > 0 && !product.isSoldOut && (
            <Badge variant="secondary" className="font-light tracking-wide px-3 py-1">
              -{discountPercentage}%
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-background/80 hover:bg-background transition-all duration-300 translate-y-0 opacity-100"
          onClick={() => isWishlisted ? removeFromWishlist(product.id) : addToWishlist(product)}
        >
          <Heart 
            className={`h-4 w-4 transition-colors ${
              isWishlisted ? 'fill-foreground text-foreground' : 'text-muted-foreground'
            }`} 
          />
        </Button>

        {/* Quick Actions */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-3 transition-all duration-300 translate-y-0 opacity-100">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 bg-background/90 hover:bg-background border-border/50 font-light tracking-wide"
            onClick={() => setIsQuickViewOpen(true)}
          >
            <Eye className="h-4 w-4 mr-2" />
            Quick View
          </Button>
          {product.isSoldOut ? (
            <Button 
              size="sm" 
              disabled
              className="flex-1 bg-gray-400 text-white font-light tracking-wide cursor-not-allowed"
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Sold Out
            </Button>
          ) : (
            <Button 
              size="sm" 
              className="flex-1 bg-foreground text-background hover:bg-foreground/90 font-light tracking-wide"
              onClick={() => addToCart(product)}
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          )}
        </div>
      </div>

      <CardContent className="p-6">
        {/* Category */}
        <p className="text-xs text-muted-foreground mb-3 uppercase tracking-widest font-light">
          {product.category}
        </p>

        {/* Product Name */}
        <h3 className="font-light text-foreground mb-3 text-lg leading-relaxed group-hover:text-foreground/70 transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-3 w-3 ${
                  star <= product.rating
                    ? 'fill-foreground text-foreground'
                    : 'text-muted-foreground'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground font-light">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-xl font-light text-foreground">
            {formatCurrency(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through font-light">
              {formatCurrency(product.originalPrice)}
            </span>
          )}
        </div>
      </CardContent>
    </Card>

    {/* Quick View Modal */}
    <QuickViewModal
      product={product}
      isOpen={isQuickViewOpen}
      onClose={() => setIsQuickViewOpen(false)}
    />
  </>
  );
};