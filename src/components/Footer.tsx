import { Mail, Phone, MapPin, Instagram, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useLocale } from "@/contexts/LocaleContext";

export const Footer = () => {
  const { getText, config } = useLocale();
  const currentYear = new Date().getFullYear();

  // Payment method icons mapping
  const getPaymentIcon = (method: string) => {
    switch (method.toLowerCase()) {
      case 'visa':
        return <div className="w-6 h-4 bg-blue-600 rounded text-white text-xs font-bold flex items-center justify-center">VISA</div>;
      case 'mastercard':
        return <div className="w-6 h-4 bg-gradient-to-r from-red-500 to-orange-500 rounded flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-full mr-1"></div>
          <div className="w-3 h-3 bg-white rounded-full ml-1"></div>
        </div>;
      case 'amex':
        return <div className="w-6 h-4 bg-blue-700 rounded text-white text-xs font-bold flex items-center justify-center">AMEX</div>;
      case 'apple pay':
        return <div className="w-6 h-4 bg-black rounded text-white text-xs font-medium flex items-center justify-center">🍎</div>;
      case 'google pay':
        return <div className="w-6 h-4 bg-white border border-gray-300 rounded text-black text-xs font-bold flex items-center justify-center">G</div>;
      case 'discover':
        return <div className="w-6 h-4 bg-orange-500 rounded text-white text-xs font-bold flex items-center justify-center">D</div>;
      default:
        return <CreditCard className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-light tracking-wide mb-6 text-foreground">
              {getText('footer.brandName')}
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed font-light">
              {getText('footer.brandDescription')}
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="border-border/50 hover:bg-foreground hover:text-background"
                onClick={() => window.open('https://www.instagram.com/allthingscut8/?hl=en', '_blank')}
              >
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-light tracking-wide mb-6 text-foreground">{getText('footer.quickLinks')}</h4>
            <ul className="space-y-4">
              {["New Arrivals", "Best Sellers", "Sale", "Gift Cards", "Size Guide", "Care Instructions"].map((link) => (
                <li key={link}>
                  <Button variant="link" className="text-muted-foreground hover:text-foreground p-0 h-auto font-light tracking-wide">
                    {link}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-light tracking-wide mb-6 text-foreground">{getText('footer.customerService')}</h4>
            <ul className="space-y-4">
              {["Contact Us", "FAQ", "Shipping Info", "Returns & Exchanges", "Track Your Order", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <Button variant="link" className="text-muted-foreground hover:text-foreground p-0 h-auto font-light tracking-wide">
                    {link}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-light tracking-wide mb-6 text-foreground">{getText('footer.getInTouch')}</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground text-sm font-light">
                  {config.contact.address}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground text-sm font-light">
                  {config.contact.phone}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground text-sm font-light">
                  {config.contact.email}
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h5 className="font-light tracking-wide mb-4 text-foreground">{getText('footer.stayUpdated')}</h5>
              <div className="flex gap-3">
                <Input 
                  placeholder={getText('footer.newsletterPlaceholder')}
                  className="bg-background border-border/50 text-foreground placeholder:text-muted-foreground font-light"
                />
                <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90 font-light tracking-wide">
                  {getText('footer.join')}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-border/50" />

        {/* Payment Methods */}
        <div className="text-center mb-8">
          <h5 className="font-light tracking-wide mb-6 text-foreground">We Accept</h5>
          <div className="flex flex-wrap justify-center gap-3">
            {config.payment.methods.map((method) => (
              <div
                key={method}
                className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full text-sm font-light text-foreground hover:bg-muted/50 transition-colors duration-200"
              >
                {getPaymentIcon(method)}
                <span>{method}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-muted-foreground font-light">
            <span>{getText('footer.craftedWith')}</span>
          </div>
          
          <div className="text-muted-foreground text-sm font-light">
            © {currentYear} {getText('footer.brandName')}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};