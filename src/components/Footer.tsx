import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              All Things Cute
            </h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              Your one-stop destination for the cutest accessories, jewelry, and home decor. 
              Spreading joy one adorable item at a time! 💕
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="icon" className="border-background/20 hover:bg-primary hover:border-primary">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-background/20 hover:bg-primary hover:border-primary">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-background/20 hover:bg-primary hover:border-primary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-background/20 hover:bg-primary hover:border-primary">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["New Arrivals", "Best Sellers", "Sale", "Gift Cards", "Size Guide", "Care Instructions"].map((link) => (
                <li key={link}>
                  <Button variant="link" className="text-background/80 hover:text-primary p-0 h-auto">
                    {link}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-3">
              {["Contact Us", "FAQ", "Shipping Info", "Returns & Exchanges", "Track Your Order", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <Button variant="link" className="text-background/80 hover:text-primary p-0 h-auto">
                    {link}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-background/80 text-sm">
                  123 Cute Street, Kawaii City, KC 12345
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-background/80 text-sm">
                  +1 (555) 123-CUTE
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-background/80 text-sm">
                  hello@allthingscute.com
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h5 className="font-medium mb-3">Stay Updated</h5>
              <div className="flex gap-2">
                <Input 
                  placeholder="Your email" 
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
                />
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Join
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-background/80">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>for cute souls everywhere</span>
          </div>
          
          <div className="text-background/80 text-sm">
            © {currentYear} All Things Cute. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};