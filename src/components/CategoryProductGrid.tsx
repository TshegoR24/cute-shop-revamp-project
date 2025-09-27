import { useState } from "react";
import { Filter, SlidersHorizontal, Grid3X3, List, ChevronDown, ShoppingBag, Heart, Star, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "./ProductCard";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

interface CategoryProductGridProps {
  category: 'ladies' | 'little-girls' | 'sleepwear';
}

const ladiesProducts = [
  {
    id: 1,
    name: "",
    price: 850,
    originalPrice: 99.99,
    image: "/DSC08764.jpg",
    rating: 5,
    reviews: 127,
    category: "Ladies",
    gender: "Ladies",
    isNew: true,
    isSale: true
  },
  {
    id: 2,
    name: "",
    price: 850,
    image: "/DSC08794.jpg",
    rating: 4,
    reviews: 89,
    category: "Ladies",
    gender: "Ladies",
    isNew: true
  },
  {
    id: 3,
    name: "",
    price: 1100,
    originalPrice: 119.99,
    image: "/DSC08890.jpg",
    rating: 5,
    reviews: 203,
    category: "Ladies",
    gender: "Ladies",
    isSale: true
  },
  {
    id: 4,
    name: "",
    price: 150,
    image: "/DSC09025.jpg",
    rating: 4,
    reviews: 112,
    category: "Ladies",
    gender: "Ladies"
  },
  {
    id: 5,
    name: "",
    price: 75,
    image: "/DSC08561.jpg",
    rating: 4,
    reviews: 145,
    category: "Ladies",
    gender: "Ladies"
  },
  {
    id: 6,
    name: "",
    price: 95.99,
    originalPrice: 125.99,
    image: "/DSC08579.jpg",
    rating: 5,
    reviews: 78,
    category: "Ladies",
    gender: "Ladies",
    isSale: true
  },
  {
    id: 7,
    name: "Key Chainz",
    price: 350,
    image: "/DSC08581.jpg",
    rating: 4,
    reviews: 134,
    category: "Ladies",
    gender: "Ladies"
  },
  {
    id: 8,
    name: "",
    price: 85.99,
    image: "/DSC08583.jpg",
    rating: 5,
    reviews: 92,
    category: "Ladies",
    gender: "Ladies",
    isNew: true
  }
];

const littleGirlsProducts = [
  {
    id: 5,
    name: "",
    price: 2000,
    image: "/DSC09183.jpg",
    rating: 5,
    reviews: 98,
    category: "Little Girls",
    gender: "Little Girls",
    isNew: true
  },
  {
    id: 6,
    name: "",
    price: 650,
    originalPrice: 44.99,
    image: "/DSC08817.jpg",
    rating: 5,
    reviews: 76,
    category: "Little Girls",
    gender: "Little Girls",
    isSale: true
  },
  {
    id: 7,
    name: "",
    price: 39.99,
    image: "/DSC08910.jpg",
    rating: 4,
    reviews: 156,
    category: "Little Girls",
    gender: "Little Girls"
  },
  {
    id: 8,
    name: "",
    price: 29.99,
    image: "/DSC09115.jpg",
    rating: 4,
    reviews: 234,
    category: "Little Girls",
    gender: "Little Girls"
  },
  {
    id: 9,
    name: "",
    price: 550,
    image: "/DSC08567.jpg",
    rating: 5,
    reviews: 89,
    category: "Little Girls",
    gender: "Little Girls",
    isNew: true
  },
  {
    id: 10,
    name: "",
    price: 2000,
    image: "/DSC08576.jpg",
    rating: 5,
    reviews: 203,
    category: "Little Girls",
    gender: "Little Girls"
  },
  {
    id: 11,
    name: "",
    price: 35.99,
    image: "/DSC08607.jpg",
    rating: 4,
    reviews: 167,
    category: "Little Girls",
    gender: "Little Girls"
  },
  {
    id: 12,
    name: "",
    price: 42.99,
    image: "/DSC08611.jpg",
    rating: 5,
    reviews: 134,
    category: "Little Girls",
    gender: "Little Girls",
    isNew: true
  }
];

const sleepwearProducts = [
  {
    id: 9,
    name: "",
    price: 45.99,
    image: "/DSC08764.jpg",
    rating: 5,
    reviews: 89,
    category: "Sleepwear",
    gender: "Ladies"
  },
  {
    id: 10,
    name: "",
    price: 69.99,
    image: "/DSC08794.jpg",
    rating: 4,
    reviews: 67,
    category: "Sleepwear",
    gender: "Ladies"
  },
  {
    id: 11,
    name: "",
    price: 24.99,
    image: "/DSC08890.jpg",
    rating: 5,
    reviews: 123,
    category: "Sleepwear",
    gender: "Little Girls"
  },
  {
    id: 12,
    name: "",
    price: 89.99,
    image: "/DSC09025.jpg",
    rating: 4,
    reviews: 45,
    category: "Sleepwear",
    gender: "Ladies"
  },
  {
    id: 13,
    name: "",
    price: 55.99,
    image: "/DSC08570.jpg",
    rating: 4,
    reviews: 167,
    category: "Sleepwear",
    gender: "Ladies"
  },
  {
    id: 14,
    name: "",
    price: 42.99,
    image: "/DSC08581.jpg",
    rating: 4,
    reviews: 134,
    category: "Sleepwear",
    gender: "Ladies"
  },
  {
    id: 15,
    name: "",
    price: 38.99,
    image: "/DSC08615.jpg",
    rating: 5,
    reviews: 156,
    category: "Sleepwear",
    gender: "Ladies"
  },
  {
    id: 16,
    name: "",
    price: 65.99,
    image: "/DSC08640.jpg",
    rating: 4,
    reviews: 98,
    category: "Sleepwear",
    gender: "Ladies",
    isNew: true
  }
];

export const CategoryProductGrid = ({ category }: CategoryProductGridProps) => {
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const getProducts = () => {
    switch (category) {
      case 'ladies':
        return ladiesProducts;
      case 'little-girls':
        return littleGirlsProducts;
      case 'sleepwear':
        return sleepwearProducts;
      default:
        return ladiesProducts;
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
