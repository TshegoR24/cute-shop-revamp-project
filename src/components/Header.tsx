import { useState, useEffect } from "react";
import { Search, ShoppingBag, Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Logo } from "./Logo";
import { LocaleSelector } from "./LocaleSelector";
import { Cart } from "./Cart";
import { SearchModal } from "./SearchModal";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getTotalItems } = useCart();
  const { wishlist } = useWishlist();
  const location = useLocation();
  const [isOverHero, setIsOverHero] = useState(true);

  // Get current active category based on route
  const getActiveCategory = () => {
    const path = location.pathname;
    if (path === '/ladies') return 'Ladies';
    if (path === '/little-girls') return 'Little Girls';
    if (path === '/sleepwear') return 'Sleepwear';
    return 'Ladies'; // default
  };

  const activeCategory = getActiveCategory();

  // Check if header is over hero section
  useEffect(() => {
    const handleScroll = () => {
      // For category pages, always use dark text
      if (location.pathname === '/ladies' || location.pathname === '/little-girls' || location.pathname === '/sleepwear') {
        setIsOverHero(false);
        return;
      }
      
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
  }, [location.pathname]);

  const categories = ["Ladies", "Little Girls", "Sleepwear"];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isOverHero 
        ? 'bg-transparent border-b border-white/20' 
        : 'bg-background/95 backdrop-blur-md border-b border-border/50'
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
              let linkPath = "";
              
              // Set link paths
              if (category === "Ladies") linkPath = "/ladies";
              else if (category === "Little Girls") linkPath = "/little-girls";
              else if (category === "Sleepwear") linkPath = "/sleepwear";
              
              // Active state colors
              if (category === "Ladies" || category === "Little Girls") {
                activeClass = activeCategory === category ? "text-pink-400" : "";
                hoverClass = "hover:text-pink-400";
              } else {
                activeClass = activeCategory === category ? "text-purple-400" : "";
                hoverClass = "hover:text-purple-400";
              }
              
              return (
                <Link key={category} to={linkPath}>
                  <Button
                    variant="ghost"
                    className={`text-sm font-light tracking-wide transition-colors duration-300 ${
                      isOverHero 
                        ? `text-white/90 ${hoverClass} ${activeClass}` 
                        : `${hoverClass} ${activeClass}`
                    }`}
                  >
                    {category}
                  </Button>
                </Link>
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
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
            
            {/* Wishlist Button */}
            <Link to="/wishlist">
              <Button 
                variant="ghost" 
                size="icon" 
                className={`relative transition-colors duration-300 ${
                  isOverHero ? 'text-white hover:bg-white/10' : 'hover:bg-accent'
                }`}
              >
                <Heart className="h-5 w-5" />
                {wishlist.length > 0 && (
                  <Badge 
                    variant="secondary" 
                    className={`absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs ${
                      isOverHero ? 'bg-white text-black' : 'bg-foreground text-background'
                    }`}
                  >
                    {wishlist.length}
                  </Badge>
                )}
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              className={`relative transition-colors duration-300 ${
                isOverHero ? 'text-white hover:bg-white/10' : 'hover:bg-accent'
              }`}
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <Badge 
                  variant="secondary" 
                  className={`absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs ${
                    isOverHero ? 'bg-white text-black' : 'bg-foreground text-background'
                  }`}
                >
                  {getTotalItems()}
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
              onClick={() => setIsSearchOpen(true)}
              readOnly
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
              let linkPath = "";
              
              // Set link paths
              if (category === "Ladies") linkPath = "/ladies";
              else if (category === "Little Girls") linkPath = "/little-girls";
              else if (category === "Sleepwear") linkPath = "/sleepwear";
              
              // Active state colors
              if (category === "Ladies" || category === "Little Girls") {
                activeClass = activeCategory === category ? "text-pink-400" : "";
                hoverClass = "hover:text-pink-400";
              } else {
                activeClass = activeCategory === category ? "text-purple-400" : "";
                hoverClass = "hover:text-purple-400";
              }
              
              return (
                <Link key={category} to={linkPath}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start text-left font-light tracking-wide transition-colors duration-300 ${
                      isOverHero 
                        ? `text-white/90 ${hoverClass} ${activeClass}` 
                        : `${hoverClass} ${activeClass}`
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category}
                  </Button>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
      
      {/* Cart Modal */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      
      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
};