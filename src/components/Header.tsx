import { useState, useEffect } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Logo } from "./Logo";
import { LocaleSelector } from "./LocaleSelector";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(2);
  const [activeCategory, setActiveCategory] = useState("New Arrivals");
  const [isOverHero, setIsOverHero] = useState(true);

  // Check if header is over hero section
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollTop = window.pageYOffset;
        setIsOverHero(scrollTop < heroBottom - 80); // 80px is header height
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = ["New Arrivals", "Ladies", "Little Girls", "Little Boys", "Sleepwear", "Loungewear", "Sale"];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isOverHero 
        ? 'bg-transparent border-b border-white/20' 
        : 'bg-background/80 backdrop-blur-md border-b border-border/50'
    }`}>
      {/* Main Header */}
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden transition-colors duration-300 ${
                isOverHero ? 'text-white hover:bg-white/10' : 'hover:bg-accent'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <Logo isOverHero={isOverHero} />
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
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${
                    isOverHero 
                      ? `text-white/90 ${hoverClass} ${activeClass}` 
                      : `${hoverClass} ${activeClass}`
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <LocaleSelector />
            <Button 
              variant="ghost" 
              size="icon" 
              className={`hidden md:flex transition-colors duration-300 ${
                isOverHero ? 'text-white hover:bg-white/10' : 'hover:bg-accent'
              }`}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className={`relative transition-colors duration-300 ${
                isOverHero ? 'text-white hover:bg-white/10' : 'hover:bg-accent'
              }`}
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge 
                  variant="secondary" 
                  className={`absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs ${
                    isOverHero ? 'bg-white text-black' : 'bg-foreground text-background'
                  }`}
                >
                  {cartCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className={`md:hidden py-4 border-t transition-colors duration-300 ${
          isOverHero ? 'border-white/20' : 'border-border/50'
        }`}>
          <div className="relative">
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 transition-colors duration-300 ${
              isOverHero ? 'text-white/60' : 'text-muted-foreground'
            }`} />
            <Input
              placeholder="Search..."
              className={`pl-10 w-full rounded-full transition-colors duration-300 ${
                isOverHero 
                  ? 'border border-white/30 focus:border-white/50 bg-white/10 text-white placeholder:text-white/60' 
                  : 'border border-border/50 focus:border-foreground/50 bg-background/50'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={`md:hidden backdrop-blur-md border-t transition-colors duration-300 ${
          isOverHero 
            ? 'bg-black/80 border-white/20' 
            : 'bg-background/95 border-border/50'
        }`}>
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
                  className={`w-full justify-start text-left font-light tracking-wide transition-colors duration-300 ${
                    isOverHero 
                      ? `text-white/90 ${hoverClass} ${activeClass}` 
                      : `${hoverClass} ${activeClass}`
                  }`}
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