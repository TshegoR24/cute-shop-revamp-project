import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-light tracking-wide mb-6 text-foreground">
              All Things Cute
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed font-light">
              Cozy nightwear that brings sweet dreams to life. 
              Each piece is designed with comfort and cuteness in mind.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="border-border/50 hover:bg-foreground hover:text-background">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-border/50 hover:bg-foreground hover:text-background">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-border/50 hover:bg-foreground hover:text-background">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-border/50 hover:bg-foreground hover:text-background">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-light tracking-wide mb-6 text-foreground">Quick Links</h4>
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
            <h4 className="text-lg font-light tracking-wide mb-6 text-foreground">Customer Service</h4>
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
            <h4 className="text-lg font-light tracking-wide mb-6 text-foreground">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground text-sm font-light">
                  123 Elegance Street, Style City, SC 12345
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground text-sm font-light">
                  +1 (555) 123-STYLE
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground text-sm font-light">
                  hello@velaa.com
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h5 className="font-light tracking-wide mb-4 text-foreground">Stay Updated</h5>
              <div className="flex gap-3">
                <Input 
                  placeholder="Your email" 
                  className="bg-background border-border/50 text-foreground placeholder:text-muted-foreground font-light"
                />
                <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90 font-light tracking-wide">
                  Join
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-border/50" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-muted-foreground font-light">
            <span>Crafted with</span>
            <span className="text-foreground">love</span>
            <span>for sweet dreams</span>
          </div>
          
          <div className="text-muted-foreground text-sm font-light">
            © {currentYear} All Things Cute. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};