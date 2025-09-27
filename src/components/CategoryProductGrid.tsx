import { useState } from "react";
import { Filter, SlidersHorizontal, Grid3X3, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "./ProductCard";

interface CategoryProductGridProps {
  category: 'ladies' | 'little-girls' | 'sleepwear';
}

const ladiesProducts = [
  {
    id: 1,
    name: "Elegant Silk Nightgown",
    price: 79.99,
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
    name: "Cotton Sleep Dress",
    price: 49.99,
    image: "/DSC08794.jpg",
    rating: 4,
    reviews: 89,
    category: "Ladies",
    gender: "Ladies",
    isNew: true
  },
  {
    id: 3,
    name: "Luxury Robe Set",
    price: 89.99,
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
    name: "Cozy Loungewear Set",
    price: 59.99,
    image: "/DSC09025.jpg",
    rating: 4,
    reviews: 112,
    category: "Ladies",
    gender: "Ladies"
  },
  {
    id: 5,
    name: "Premium Nightwear",
    price: 75.99,
    image: "/DSC08561.jpg",
    rating: 4,
    reviews: 145,
    category: "Ladies",
    gender: "Ladies"
  },
  {
    id: 6,
    name: "Silk Sleep Set",
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
    name: "Elegant Pajama Set",
    price: 65.99,
    image: "/DSC08581.jpg",
    rating: 4,
    reviews: 134,
    category: "Ladies",
    gender: "Ladies"
  },
  {
    id: 8,
    name: "Luxury Nightdress",
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
    name: "Princess Nightgown",
    price: 34.99,
    image: "/DSC09183.jpg",
    rating: 5,
    reviews: 98,
    category: "Little Girls",
    gender: "Little Girls",
    isNew: true
  },
  {
    id: 6,
    name: "Unicorn Pajama Set",
    price: 32.99,
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
    name: "Fairy Tale Nightdress",
    price: 39.99,
    image: "/DSC08910.jpg",
    rating: 4,
    reviews: 156,
    category: "Little Girls",
    gender: "Little Girls"
  },
  {
    id: 8,
    name: "Sparkle Sleep Set",
    price: 29.99,
    image: "/DSC09115.jpg",
    rating: 4,
    reviews: 234,
    category: "Little Girls",
    gender: "Little Girls"
  },
  {
    id: 9,
    name: "Dreamy Sleep Set",
    price: 45.99,
    image: "/DSC08567.jpg",
    rating: 5,
    reviews: 89,
    category: "Little Girls",
    gender: "Little Girls",
    isNew: true
  },
  {
    id: 10,
    name: "Cute Nightdress",
    price: 29.99,
    image: "/DSC08576.jpg",
    rating: 5,
    reviews: 203,
    category: "Little Girls",
    gender: "Little Girls"
  },
  {
    id: 11,
    name: "Princess Sleepwear",
    price: 35.99,
    image: "/DSC08607.jpg",
    rating: 4,
    reviews: 167,
    category: "Little Girls",
    gender: "Little Girls"
  },
  {
    id: 12,
    name: "Fairy Nightgown",
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
    name: "Premium Cotton Pajamas",
    price: 45.99,
    image: "/DSC08764.jpg",
    rating: 5,
    reviews: 89,
    category: "Sleepwear",
    gender: "Ladies"
  },
  {
    id: 10,
    name: "Silk Sleep Set",
    price: 69.99,
    image: "/DSC08794.jpg",
    rating: 4,
    reviews: 67,
    category: "Sleepwear",
    gender: "Ladies"
  },
  {
    id: 11,
    name: "Kids Cotton PJs",
    price: 24.99,
    image: "/DSC08890.jpg",
    rating: 5,
    reviews: 123,
    category: "Sleepwear",
    gender: "Little Girls"
  },
  {
    id: 12,
    name: "Family Sleepwear Set",
    price: 89.99,
    image: "/DSC09025.jpg",
    rating: 4,
    reviews: 45,
    category: "Sleepwear",
    gender: "Ladies"
  },
  {
    id: 13,
    name: "Comfort Pajamas",
    price: 55.99,
    image: "/DSC08570.jpg",
    rating: 4,
    reviews: 167,
    category: "Sleepwear",
    gender: "Ladies"
  },
  {
    id: 14,
    name: "Soft Sleep Set",
    price: 42.99,
    image: "/DSC08581.jpg",
    rating: 4,
    reviews: 134,
    category: "Sleepwear",
    gender: "Ladies"
  },
  {
    id: 15,
    name: "Cozy Nightwear",
    price: 38.99,
    image: "/DSC08615.jpg",
    rating: 5,
    reviews: 156,
    category: "Sleepwear",
    gender: "Ladies"
  },
  {
    id: 16,
    name: "Premium Sleep Set",
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

        {/* Load More Button */}
        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            size="lg"
            className="border border-foreground/20 text-foreground hover:bg-foreground hover:text-background px-8 py-6 rounded-none font-light tracking-wide transition-all duration-300"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};
