import { CreditCard, Truck, Shield } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';

export const RegionalInfo = () => {
  const { config } = useLocale();

  return (
    <div className="bg-muted/30 border-t border-border/50 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Payment Methods */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <CreditCard className="h-8 w-8 text-foreground" />
            </div>
            <h3 className="text-lg font-light mb-3">Payment Methods</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {config.payment.methods.map((method) => (
                <span
                  key={method}
                  className="px-3 py-1 bg-background border border-border rounded-full text-xs font-light"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>

          {/* Shipping Info */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Truck className="h-8 w-8 text-foreground" />
            </div>
            <h3 className="text-lg font-light mb-3">Shipping</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Free shipping on orders over {config.currency.symbol}{config.shipping.freeThreshold.toLocaleString()}
            </p>
            <p className="text-sm text-muted-foreground">
              Delivery: {config.shipping.deliveryTime}
            </p>
          </div>

          {/* Security */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Shield className="h-8 w-8 text-foreground" />
            </div>
            <h3 className="text-lg font-light mb-3">Secure Shopping</h3>
            <p className="text-sm text-muted-foreground">
              Your payment information is protected with bank-level security
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 