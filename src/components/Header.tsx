import { useState } from "react";
import { Search, ShoppingCart, Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(3);

  const categories = ["New Arrivals", "Girls", "Boys", "Accessories", "Jewelry", "Bags", "Home Decor", "Sale"];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground text-center py-2 text-sm">
        ✨ Free shipping on orders over $50! Use code CUTE50
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ml-2 md:ml-0">
              All Things Cute
            </h1>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search for cute items..."
                className="pl-10 w-full rounded-full border-2 border-accent focus:border-primary"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                >
                  {cartCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-8 py-4 border-t border-border">
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {category}
            </Button>
          ))}
        </nav>

        {/* Mobile Search */}
        <div className="md:hidden py-3 border-t border-border">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search..."
              className="pl-10 w-full rounded-full border-2 border-accent focus:border-primary"
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                className="w-full justify-start text-left font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {category}
              </Button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};