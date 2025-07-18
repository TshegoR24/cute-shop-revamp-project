import { useState } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(2);
  const [activeCategory, setActiveCategory] = useState("New Arrivals");

  const categories = ["New Arrivals", "Ladies", "Little Girls", "Little Boys", "Sleepwear", "Loungewear", "Sale"];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      {/* Main Header */}
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
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
            <h1 className="text-2xl font-light tracking-wide text-foreground ml-2 md:ml-0">
              All Things Cute
            </h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {categories.map((category) => {
              let hoverClass = "";
              let activeClass = "";
              
              // Active state colors
              if (category === "Little Boys") {
                activeClass = activeCategory === category ? "text-blue-400" : "";
                hoverClass = "hover:text-blue-400";
              } else if (category === "Ladies" || category === "Little Girls") {
                activeClass = activeCategory === category ? "text-pink-400" : "";
                hoverClass = "hover:text-pink-400";
              } else {
                activeClass = activeCategory === category ? "text-purple-400" : "";
                hoverClass = "hover:text-purple-400";
              }
              
              return (
                <Button
                  key={category}
                  variant="ghost"
                  className={`text-sm font-light tracking-wide transition-colors duration-200 ${hoverClass} ${activeClass}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge 
                  variant="secondary" 
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-foreground text-background"
                >
                  {cartCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden py-4 border-t border-border/50">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search..."
              className="pl-10 w-full rounded-full border border-border/50 focus:border-foreground/50 bg-background/50"
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50">
          <nav className="container mx-auto px-6 py-6 space-y-2">
            {categories.map((category) => {
              let hoverClass = "";
              let activeClass = "";
              
              // Active state colors
              if (category === "Little Boys") {
                activeClass = activeCategory === category ? "text-blue-400" : "";
                hoverClass = "hover:text-blue-400";
              } else if (category === "Ladies" || category === "Little Girls") {
                activeClass = activeCategory === category ? "text-pink-400" : "";
                hoverClass = "hover:text-pink-400";
              } else {
                activeClass = activeCategory === category ? "text-purple-400" : "";
                hoverClass = "hover:text-purple-400";
              }
              
              return (
                <Button
                  key={category}
                  variant="ghost"
                  className={`w-full justify-start text-left font-light tracking-wide transition-colors duration-200 ${hoverClass} ${activeClass}`}
                  onClick={() => {
                    setActiveCategory(category);
                    setIsMenuOpen(false);
                  }}
                >
                  {category}
                </Button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};