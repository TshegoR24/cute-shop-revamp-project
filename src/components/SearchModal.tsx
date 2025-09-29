import { useState, useEffect } from "react";
import { Search, X, Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { ProductCard } from "./ProductCard";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchFilters {
  category: string[];
  priceRange: [number, number];
  colors: string[];
  sizes: string[];
  rating: number;
}

const categories = ["Ladies", "Little Girls", "Sleepwear"];
const colors = ["Pink", "Blue", "White", "Black", "Purple", "Green", "Yellow", "Red"];
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

export const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [filters, setFilters] = useState<SearchFilters>({
    category: [],
    priceRange: [0, 200],
    colors: [],
    sizes: [],
    rating: 0
  });
  const [showFilters, setShowFilters] = useState(false);

  // Sample products for search (in real app, this would come from API)
  const allProducts = [
    { id: 1, name: "Pink Floral Pajama Set", price: 49.99, category: "Ladies", color: "Pink", size: "M", rating: 5, image: "/DSC08764.jpg" },
    { id: 2, name: "Blue Star Print Sleep Dress", price: 39.99, category: "Ladies", color: "Blue", size: "L", rating: 4, image: "/DSC08794.jpg" },
    { id: 3, name: "White Unicorn Graphic Tee", price: 79.99, category: "Little Girls", color: "White", size: "S", rating: 5, image: "/DSC08890.jpg" },
    { id: 4, name: "Black Polka-Dot Dress", price: 65.99, category: "Ladies", color: "Black", size: "M", rating: 4, image: "/DSC08587.jpg" },
    { id: 5, name: "Purple Rainbow Hoodie", price: 55.99, category: "Little Girls", color: "Purple", size: "S", rating: 5, image: "/DSC09025.jpg" },
  ];

  // Filter products based on search query and filters
  useEffect(() => {
    let filtered = allProducts;

    // Text search
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (filters.category.length > 0) {
      filtered = filtered.filter(product =>
        filters.category.includes(product.category)
      );
    }

    // Price range filter
    filtered = filtered.filter(product =>
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );

    // Color filter
    if (filters.colors.length > 0) {
      filtered = filtered.filter(product =>
        filters.colors.includes(product.color)
      );
    }

    // Size filter
    if (filters.sizes.length > 0) {
      filtered = filtered.filter(product =>
        filters.sizes.includes(product.size)
      );
    }

    // Rating filter
    if (filters.rating > 0) {
      filtered = filtered.filter(product =>
        product.rating >= filters.rating
      );
    }

    setSearchResults(filtered);
  }, [searchQuery, filters]);

  const handleFilterChange = (filterType: keyof SearchFilters, value: any) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: [],
      priceRange: [0, 200],
      colors: [],
      sizes: [],
      rating: 0
    });
    setSearchQuery("");
  };

  const activeFiltersCount = 
    filters.category.length + 
    filters.colors.length + 
    filters.sizes.length + 
    (filters.rating > 0 ? 1 : 0) +
    (filters.priceRange[0] > 0 || filters.priceRange[1] < 200 ? 1 : 0);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search Products
          </DialogTitle>
        </DialogHeader>

        <div className="flex gap-6 h-full">
          {/* Search Input and Results */}
          <div className="flex-1 flex flex-col">
            {/* Search Bar */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4"
              />
            </div>

            {/* Filter Toggle */}
            <div className="flex items-center justify-between mb-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
                {activeFiltersCount > 0 && (
                  <Badge variant="secondary" className="ml-1">
                    {activeFiltersCount}
                  </Badge>
                )}
              </Button>

              {activeFiltersCount > 0 && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear All
                </Button>
              )}
            </div>

            {/* Search Results */}
            <div className="flex-1 overflow-y-auto">
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {searchResults.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    {searchQuery ? "No products found matching your search." : "Start typing to search for products."}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-80 border-l pl-6 space-y-6 overflow-y-auto">
              <h3 className="font-semibold">Filters</h3>

              {/* Category Filter */}
              <div>
                <h4 className="font-medium mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={`category-${category}`}
                        checked={filters.category.includes(category)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            handleFilterChange('category', [...filters.category, category]);
                          } else {
                            handleFilterChange('category', filters.category.filter(c => c !== category));
                          }
                        }}
                      />
                      <label htmlFor={`category-${category}`} className="text-sm">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="space-y-3">
                  <Slider
                    value={filters.priceRange}
                    onValueChange={(value) => handleFilterChange('priceRange', value)}
                    max={200}
                    min={0}
                    step={10}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>${filters.priceRange[0]}</span>
                    <span>${filters.priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Color Filter */}
              <div>
                <h4 className="font-medium mb-3">Color</h4>
                <div className="space-y-2">
                  {colors.map((color) => (
                    <div key={color} className="flex items-center space-x-2">
                      <Checkbox
                        id={`color-${color}`}
                        checked={filters.colors.includes(color)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            handleFilterChange('colors', [...filters.colors, color]);
                          } else {
                            handleFilterChange('colors', filters.colors.filter(c => c !== color));
                          }
                        }}
                      />
                      <label htmlFor={`color-${color}`} className="text-sm">
                        {color}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div>
                <h4 className="font-medium mb-3">Size</h4>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map((size) => (
                    <div key={size} className="flex items-center space-x-2">
                      <Checkbox
                        id={`size-${size}`}
                        checked={filters.sizes.includes(size)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            handleFilterChange('sizes', [...filters.sizes, size]);
                          } else {
                            handleFilterChange('sizes', filters.sizes.filter(s => s !== size));
                          }
                        }}
                      />
                      <label htmlFor={`size-${size}`} className="text-sm">
                        {size}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <h4 className="font-medium mb-3">Minimum Rating</h4>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center space-x-2">
                      <Checkbox
                        id={`rating-${rating}`}
                        checked={filters.rating === rating}
                        onCheckedChange={(checked) => {
                          handleFilterChange('rating', checked ? rating : 0);
                        }}
                      />
                      <label htmlFor={`rating-${rating}`} className="text-sm flex items-center gap-1">
                        {rating}+ stars
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
