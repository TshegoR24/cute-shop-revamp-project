import { useState } from "react";
import { Filter, SlidersHorizontal, Grid3X3, List, ChevronDown, ShoppingBag, Heart, Star, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "./ProductCard";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { getProductsByCategory } from "@/data/products";

interface CategoryProductGridProps {
  category: 'ladies' | 'little-girls' | 'sleepwear';
}

export const CategoryProductGrid = ({ category }: CategoryProductGridProps) => {
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const getProducts = () => {
    switch (category) {
      case 'ladies':
        return getProductsByCategory('Ladies');
      case 'little-girls':
        return getProductsByCategory('Little Girls');
      case 'sleepwear':
        return getProductsByCategory('Sleepwear');
      default:
        return getProductsByCategory('Ladies');
    }
  };

  const products = getProducts();

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return b.id - a.id;
      default:
        return 0;
    }
  });

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="flex items-center gap-4 ml-auto">
            {/* Sort Dropdown */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px] border-border/50">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>

            {/* View Mode Toggle */}
            <div className="flex border border-border/50 rounded-none">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-none border-r border-border/50"
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-8 ${
          viewMode === "grid" 
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
            : "grid-cols-1"
        }`}>
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Enhanced View All Products Section */}
        <div className="text-center mt-16 space-y-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                size="lg"
                className="border border-foreground/20 text-foreground hover:bg-foreground hover:text-background px-8 py-6 rounded-none font-light tracking-wide transition-all duration-300"
              >
                Browse Other Collections
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56">
              {category !== 'ladies' && (
                <DropdownMenuItem asChild>
                  <Link to="/ladies" className="flex items-center w-full">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Ladies Collection
                  </Link>
                </DropdownMenuItem>
              )}
              {category !== 'little-girls' && (
                <DropdownMenuItem asChild>
                  <Link to="/little-girls" className="flex items-center w-full">
                    <Heart className="mr-2 h-4 w-4" />
                    Little Girls Collection
                  </Link>
                </DropdownMenuItem>
              )}
              {category !== 'sleepwear' && (
                <DropdownMenuItem asChild>
                  <Link to="/sleepwear" className="flex items-center w-full">
                    <Star className="mr-2 h-4 w-4" />
                    Sleepwear Collection
                  </Link>
                </DropdownMenuItem>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/" className="flex items-center w-full">
                  <Filter className="mr-2 h-4 w-4" />
                  All Products
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            {category === 'ladies' && "Explore more elegant nightwear and loungewear for women."}
            {category === 'little-girls' && "Discover more adorable sleepwear for little princesses."}
            {category === 'sleepwear' && "Find more comfortable sleepwear for the whole family."}
          </p>
        </div>
      </div>
    </section>
  );
};
