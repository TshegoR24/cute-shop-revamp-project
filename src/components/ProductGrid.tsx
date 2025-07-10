import { useState } from "react";
import { Filter, SlidersHorizontal, Grid3X3, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "./ProductCard";

const sampleProducts = [
  {
    id: 1,
    name: "Kawaii Pink Heart Earrings",
    price: 24.99,
    originalPrice: 34.99,
    image: "💕",
    rating: 5,
    reviews: 127,
    category: "Jewelry",
    gender: "Girls",
    isNew: true,
    isSale: true
  },
  {
    id: 2,
    name: "Pastel Rainbow Hair Clips Set",
    price: 18.99,
    image: "🌈",
    rating: 4,
    reviews: 89,
    category: "Accessories",
    gender: "Girls",
    isNew: true
  },
  {
    id: 3,
    name: "Unicorn Plush Keychain",
    price: 12.99,
    originalPrice: 16.99,
    image: "🦄",
    rating: 5,
    reviews: 203,
    category: "Accessories",
    gender: "Girls",
    isSale: true
  },
  {
    id: 4,
    name: "Cat Paw Phone Case",
    price: 29.99,
    image: "🐾",
    rating: 4,
    reviews: 156,
    category: "Tech",
    gender: "Girls"
  },
  {
    id: 5,
    name: "Strawberry Milk Tumbler",
    price: 22.99,
    image: "🍓",
    rating: 5,
    reviews: 98,
    category: "Home",
    gender: "Girls",
    isNew: true
  },
  {
    id: 6,
    name: "Celestial Moon Necklace",
    price: 39.99,
    originalPrice: 49.99,
    image: "🌙",
    rating: 5,
    reviews: 76,
    category: "Jewelry",
    gender: "Girls",
    isSale: true
  },
  {
    id: 7,
    name: "Cherry Blossom Hair Band",
    price: 15.99,
    image: "🌸",
    rating: 4,
    reviews: 112,
    category: "Accessories",
    gender: "Girls"
  },
  {
    id: 8,
    name: "Pastel Butterfly Stickers",
    price: 8.99,
    image: "🦋",
    rating: 4,
    reviews: 234,
    category: "Stationery",
    gender: "Girls"
  },
  {
    id: 9,
    name: "Cool Dinosaur Backpack",
    price: 32.99,
    image: "🦕",
    rating: 5,
    reviews: 143,
    category: "Accessories",
    gender: "Boys",
    isNew: true
  },
  {
    id: 10,
    name: "Robot Action Figure",
    price: 19.99,
    originalPrice: 25.99,
    image: "🤖",
    rating: 4,
    reviews: 92,
    category: "Toys",
    gender: "Boys",
    isSale: true
  },
  {
    id: 11,
    name: "Space Adventure Watch",
    price: 27.99,
    image: "🚀",
    rating: 5,
    reviews: 74,
    category: "Accessories",
    gender: "Boys"
  },
  {
    id: 12,
    name: "Superhero Cape Set",
    price: 24.99,
    image: "🦸",
    rating: 5,
    reviews: 187,
    category: "Accessories",
    gender: "Boys",
    isNew: true
  },
  {
    id: 13,
    name: "Dragon Plushie",
    price: 26.99,
    originalPrice: 34.99,
    image: "🐉",
    rating: 5,
    reviews: 156,
    category: "Home",
    gender: "Boys",
    isSale: true
  },
  {
    id: 14,
    name: "Pirate Hat & Patch Set",
    price: 15.99,
    image: "🏴‍☠️",
    rating: 4,
    reviews: 83,
    category: "Accessories",
    gender: "Boys"
  }
];

export const ProductGrid = () => {
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedGender, setSelectedGender] = useState<string>("All");

  const categories = ["All", "Jewelry", "Accessories", "Tech", "Home", "Stationery", "Toys"];
  const genders = ["All", "Girls", "Boys"];

  const filteredProducts = sampleProducts.filter(product => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes("All") || selectedCategories.includes(product.category);
    const genderMatch = selectedGender === "All" || product.gender === selectedGender;
    return categoryMatch && genderMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
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

  const toggleCategory = (category: string) => {
    if (category === "All") {
      setSelectedCategories([]);
      return;
    }

    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked collection of the cutest accessories and items that will make your day brighter
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Gender Filters */}
          <div className="flex flex-wrap gap-2">
            {genders.map((gender) => (
              <Badge
                key={gender}
                variant={selectedGender === gender ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-3 py-1"
                onClick={() => setSelectedGender(gender)}
              >
                {gender}
              </Badge>
            ))}
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategories.includes(category) || (category === "All" && selectedCategories.length === 0) ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-3 py-1"
                onClick={() => toggleCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-4 ml-auto">
            {/* Sort Dropdown */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
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
            <div className="flex border border-border rounded-md">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === "grid" 
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
            : "grid-cols-1"
        }`}>
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Load More Products
          </Button>
        </div>
      </div>
    </section>
  );
};