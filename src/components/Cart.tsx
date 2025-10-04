import { useState, useEffect } from "react";
import { X, Plus, Minus, ShoppingBag, ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { useLocale } from "@/contexts/LocaleContext";
import { shopifyHelpers } from "@/lib/shopify";
import { Link } from "react-router-dom";
import { OptimizedImage } from "./OptimizedImage";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Cart = ({ isOpen, onClose }: CartProps) => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart();
  const { formatCurrency, currentLocale } = useLocale();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    try {
      const checkout = await shopifyHelpers.createCheckoutWithVariants(cartItems);
      
      if (checkout && checkout.webUrl) {
        window.location.href = checkout.webUrl;
        return;
      }
      
      // Fallback to email
      const productNames = cartItems.map(item => `${item.name} (Qty: ${item.quantity})`).join(', ');
      const totalPrice = getTotalPrice();
      
      const subject = `New Order Request - ${formatCurrency(totalPrice)}`;
      const body = `Hello,\n\nI would like to place an order:\n\nProducts:\n${productNames}\n\nTotal: ${formatCurrency(totalPrice)}\n\nPlease confirm availability and provide payment details.\n\nThank you!`;
      const emailUrl = `mailto:orders@allthingscut8.shop?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      window.location.href = emailUrl;
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Sorry, there was an error processing your order. Please try again or contact us directly.');
    } finally {
      setIsCheckingOut(false);
    }
  };

  const getSavings = () => {
    return cartItems.reduce((total, item) => {
      if (item.originalPrice) {
        return total + ((item.originalPrice - item.price) * item.quantity);
      }
      return total;
    }, 0);
  };

  const getFreeShippingProgress = () => {
    const total = getTotalPrice(); // This is in ZAR
    // Free shipping thresholds based on locale
    const freeShippingThreshold = currentLocale === 'ng' ? 900 : 900; // R900 for both (equivalent to $50)
    const progress = Math.min((total / freeShippingThreshold) * 100, 100);
    const remaining = Math.max(freeShippingThreshold - total, 0);
    
    return { progress, remaining, threshold: freeShippingThreshold };
  };

  const freeShippingData = getFreeShippingProgress();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Cart Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full sm:max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center gap-3">
              <ShoppingBag className="h-5 w-5 text-gray-700" />
              <h2 className="text-xl font-medium text-gray-900">
                Shopping Bag ({getTotalItems()})
              </h2>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-gray-200 text-gray-600"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Free Shipping Progress */}
          {freeShippingData.remaining > 0 && (
            <div className="px-4 sm:px-6 py-4 bg-blue-50 border-b border-blue-100">
              <div className="flex items-center justify-between text-sm">
                <span className="text-blue-800 font-medium">
                  Add {formatCurrency(freeShippingData.remaining)} more for FREE shipping!
                </span>
                <span className="text-blue-600">
                  {formatCurrency(getTotalPrice())} / {formatCurrency(freeShippingData.threshold)}
                </span>
              </div>
              <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${freeShippingData.progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-6">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <ShoppingBag className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Your bag is empty</h3>
                <p className="text-gray-500 mb-6 max-w-sm">
                  Looks like you haven't added anything to your bag yet. Start shopping to fill it up!
                </p>
                <Button 
                  onClick={onClose} 
                  className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-3 rounded-lg font-medium"
                >
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                {cartItems.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="flex gap-4 pb-6 border-b border-gray-100 last:border-b-0 last:pb-0">
                    {/* Product Image */}
                    <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <OptimizedImage
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                        {item.name}
                      </h3>
                      
                      <div className="text-xs text-gray-500 space-y-1 mb-2">
                        {item.selectedColor && (
                          <p>Color: <span className="font-medium">{item.selectedColor}</span></p>
                        )}
                        {item.selectedSize && (
                          <p>Size: <span className="font-medium">{item.selectedSize}</span></p>
                        )}
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm font-semibold text-gray-900">
                          {formatCurrency(item.price)}
                        </span>
                        {item.originalPrice && item.originalPrice > item.price && (
                          <span className="text-xs text-gray-500 line-through">
                            {formatCurrency(item.originalPrice)}
                          </span>
                        )}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1), item.selectedSize, item.selectedColor)}
                            className="h-8 w-8 p-0 hover:bg-gray-100"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="px-3 py-1 text-sm font-medium min-w-[40px] text-center border-x border-gray-300">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedSize, item.selectedColor)}
                            className="h-8 w-8 p-0 hover:bg-gray-100"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        
                        {/* Remove Button */}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                          className="text-gray-400 hover:text-red-500 hover:bg-red-50 p-1"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 bg-gray-50 p-4 sm:p-6 space-y-4">
              {/* Order Summary */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium text-gray-900">{formatCurrency(getTotalPrice())}</span>
                </div>
                
                {getSavings() > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-green-600">You save</span>
                    <span className="text-green-600 font-medium">{formatCurrency(getSavings())}</span>
                  </div>
                )}
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-green-600 font-medium">
                    {freeShippingData.remaining > 0 ? 'Calculated at checkout' : 'FREE'}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <Button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full bg-gray-900 text-white hover:bg-gray-800 py-4 rounded-lg font-medium transition-colors"
              >
                {isCheckingOut ? (
                  "Processing..."
                ) : (
                  <>
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

              {/* Continue Shopping */}
              <Button
                variant="outline"
                onClick={onClose}
                className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-lg font-medium"
              >
                Continue Shopping
              </Button>

              {/* Security Badge */}
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-2">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Secure checkout • SSL encrypted</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};