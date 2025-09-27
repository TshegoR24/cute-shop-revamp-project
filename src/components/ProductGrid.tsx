import { useState } from "react";
import { Filter, SlidersHorizontal, Grid3X3, List, ChevronDown, ShoppingBag, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "./ProductCard";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const sampleProducts = [
  {
    id: 1,
    name: "",
    price: 49.99,
    originalPrice: 69.99,
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
    price: 39.99,
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
    price: 79.99,
    originalPrice: 99.99,
    image: "/DSC08890.jpg",
    rating: 5,
    reviews: 203,
    category: "Ladies",
    gender: "Ladies",
    isSale: true
  },
  {
    id: 5,
    name: "",
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
    name: "",
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
    name: "",
    price: 59.99,
    image: "/DSC09025.jpg",
    rating: 4,
    reviews: 112,
    category: "Loungewear",
    gender: "Ladies"
  },
  {
    id: 8,
    name: "",
    price: 65.99,
    image: "/DSC08561.jpg",
    rating: 4,
    reviews: 145,
    category: "Ladies",
    gender: "Ladies"
  },
  {
    id: 9,
    name: "",
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
    name: "",
    price: 55.99,
    image: "/DSC08570.jpg",
    rating: 4,
    reviews: 167,
    category: "Sleepwear",
    gender: "Ladies"
  },
  {
    id: 11,
    name: "",
    price: 29.99,
    image: "/DSC08576.jpg",
    rating: 5,
    reviews: 203,
    category: "Little Girls",
    gender: "Little Girls"
  },
  {
    id: 12,
    name: "",
    price: 89.99,
    originalPrice: 119.99,
    image: "/DSC08579.jpg",
    rating: 5,
    reviews: 78,
    category: "Ladies",
    gender: "Ladies",
    isSale: true
  }
];

export const ProductGrid = () => {
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedGender, setSelectedGender] = useState<string>("All");

  const categories = ["All", "Ladies", "Little Girls", "Sleepwear"];
  const genders = ["All", "Ladies", "Little Girls"];

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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-wide">
            Sweet Dreams Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Discover adorable nightwear for ladies, little girls, and little boys. 
            Cozy, comfortable, and absolutely cute!
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Gender Filters */}
          <div className="flex flex-wrap gap-3">
            {genders.map((gender) => (
                          <Badge
              key={gender}
              variant={selectedGender === gender ? "default" : "outline"}
              className={`cursor-pointer transition-colors px-4 py-2 font-light tracking-wide ${
                selectedGender === gender 
                  ? "bg-lavender text-foreground hover:bg-pink" 
                  : "border-lavender text-lavender hover:bg-lavender hover:text-foreground"
              }`}
              onClick={() => setSelectedGender(gender)}
            >
              {gender}
            </Badge>
            ))}
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
                          <Badge
              key={category}
              variant={selectedCategories.includes(category) || (category === "All" && selectedCategories.length === 0) ? "default" : "outline"}
              className={`cursor-pointer transition-colors px-4 py-2 font-light tracking-wide ${
                selectedCategories.includes(category) || (category === "All" && selectedCategories.length === 0)
                  ? "bg-pink text-foreground hover:bg-blue" 
                  : "border-pink text-pink hover:bg-pink hover:text-foreground"
              }`}
              onClick={() => toggleCategory(category)}
            >
              {category}
            </Badge>
            ))}
          </div>

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
                Browse Collections
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56">
              <DropdownMenuItem asChild>
                <Link to="/ladies" className="flex items-center w-full">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Ladies Collection
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/little-girls" className="flex items-center w-full">
                  <Heart className="mr-2 h-4 w-4" />
                  Little Girls Collection
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/sleepwear" className="flex items-center w-full">
                  <Star className="mr-2 h-4 w-4" />
                  Sleepwear Collection
                </Link>
              </DropdownMenuItem>
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
            Discover our complete collection of premium sleepwear and accessories for the whole family.
          </p>
        </div>
      </div>
    </section>
  );
};