export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  gender: string;
  isNew?: boolean;
  isSale?: boolean;
}

export interface SweetDreamProduct {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  rating: number;
}

// Centralized product data - update prices here and they'll be reflected everywhere
export const allProducts: Product[] = [
  // Ladies Collection
  {
    id: 1,
    name: "Hearts Out PJs",
    price: 850,
    originalPrice: 99.99,
    image: "/DSC08764.jpg",
    rating: 5,
    reviews: 0,
    category: "Ladies",
    gender: "Ladies",
    isNew: true,
    isSale: true
  },
  {
    id: 2,
    name: "Hearts Out PJs",
    price: 850,
    image: "/DSC08794.jpg",
    rating: 4,
    reviews: 0,
    category: "Ladies",
    gender: "Ladies",
    isNew: true
  },
  {
    id: 3,
    name: "Bow tie PJ (pink and red)",
    price: 1100,
    originalPrice: 119.99,
    image: "/DSC08890.jpg",
    rating: 5,
    reviews: 0,
    category: "Ladies",
    gender: "Ladies",
    isSale: true
  },
  {
    id: 4,
    name: "",
    price: 350,
    image: "/DSC08531 (1).jpg",
    rating: 4,
    reviews: 0,
    category: "Ladies",
    gender: "Ladies",
    isNew: true
  },
  {
    id: 5,
    name: "Belle dayjama",
    price: 2000,
    image: "/DSC09025.jpg",
    rating: 4,
    reviews: 0,
    category: "Ladies",
    gender: "Ladies"
  },
  {
    id: 6,
    name: "",
    price: 150,
    image: "/DSC08561.jpg",
    rating: 4,
    reviews: 0,
    category: "Ladies",
    gender: "Ladies"
  },
  {
    id: 7,
    name: "",
    price: 150,
    originalPrice: 125.99,
    image: "/DSC08579.jpg",
    rating: 5,
    reviews: 0,
    category: "Ladies",
    gender: "Ladies",
    isSale: true
  },
  {
    id: 8,
    name: "Key Chainz",
    price: 150,
    image: "/DSC08581.jpg",
    rating: 4,
    reviews: 0,
    category: "Ladies",
    gender: "Ladies"
  },
  {
    id: 9,
    name: "",
    price: 150,
    image: "/DSC08583.jpg",
    rating: 5,
    reviews: 0,
    category: "Ladies",
    gender: "Ladies",
    isNew: true
  },
  {
    id: 10,
    name: "",
    price: 350,
    image: "/DSC08537 (1).jpg",
    rating: 4,
    reviews: 0,
    category: "Ladies",
    gender: "Ladies",
    isNew: true
  },

  // Little Girls Collection
  {
    id: 11,
    name: "Mami dayjama",
    price: 2000,
    image: "/DSC09183.jpg",
    rating: 5,
    reviews: 0,
    category: "Little Girls",
    gender: "Little Girls",
    isNew: true
  },
  {
    id: 12,
    name: "Bow Tie PJ (red)(pink)",
    price: 850,
    originalPrice: 44.99,
    image: "/DSC08817.jpg",
    rating: 5,
    reviews: 76,
    category: "Little Girls",
    gender: "Little Girls",
    isSale: true
  },
  {
    id: 13,
    name: "",
    price: 350,
    image: "/DSC08533 (1).jpg",
    rating: 4,
    reviews: 0,
    category: "Little Girls",
    gender: "Little Girls"
  },
  {
    id: 14,
    name: "Moonblue",
    price: 850,
    image: "/DSC08910.jpg",
    rating: 4,
    reviews: 0,
    category: "Little Girls",
    gender: "Little Girls"
  },
  {
    id: 15,
    name: "Mami dayjama",
    price: 2000,
    image: "/DSC09115.jpg",
    rating: 4,
    reviews: 234,
    category: "Little Girls",
    gender: "Little Girls"
  },
  {
    id: 16,
    name: "",
    price: 150,
    image: "/DSC08567.jpg",
    rating: 5,
    reviews: 0,
    category: "Little Girls",
    gender: "Little Girls",
    isNew: true
  },
  {
    id: 17,
    name: "",
    price: 350,
    image: "/DSC08576.jpg",
    rating: 5,
    reviews: 0,
    category: "Little Girls",
    gender: "Little Girls"
  },
  {
    id: 18,
    name: "(paired with sleeping mask)",
    price: 350,
    image: "/DSC08607.jpg",
    rating: 4,
    reviews: 167,
    category: "Little Girls",
    gender: "Little Girls"
  },
  {
    id: 19,
    name: "(paired with sleeping mask)",
    price: 350,
    image: "/DSC08611.jpg",
    rating: 5,
    reviews: 0,
    category: "Little Girls",
    gender: "Little Girls",
    isNew: true
  },
  {
    id: 20,
    name: "",
    price: 350,
    image: "/DSC08555.jpg",
    rating: 4,
    reviews: 143,
    category: "Little Girls",
    gender: "Little Girls"
  },

  // Sleepwear Collection
  {
    id: 21,
    name: "",
    price: 850,
    image: "/DSC08764.jpg",
    rating: 5,
    reviews: 0,
    category: "Sleepwear",
    gender: "Ladies"
  },
  {
    id: 22,
    name: "Hearts Out PJ",
    price: 850,
    image: "/DSC08794.jpg",
    rating: 4,
    reviews: 67,
    category: "Sleepwear",
    gender: "Ladies"
  },
  {
    id: 23,
    name: "Hearts Out PJ",
    price: 1100,
    image: "/DSC08890.jpg",
    rating: 5,
    reviews: 123,
    category: "Sleepwear",
    gender: "Little Girls"
  },
  {
    id: 24,
    name: "Bow Tie PJ",
    price: 2000,
    image: "/DSC09025.jpg",
    rating: 4,
    reviews: 45,
    category: "Sleepwear",
    gender: "Ladies"
  },
  {
    id: 25,
    name: "Belle Dayjama",
    price: 150,
    image: "/DSC08570.jpg",
    rating: 4,
    reviews: 167,
    category: "Sleepwear",
    gender: "Ladies"
  },
  {
    id: 26,
    name: "",
    price: 150,
    image: "/DSC08581.jpg",
    rating: 4,
    reviews: 0,
    category: "Sleepwear",
    gender: "Ladies"
  },
  {
    id: 27,
    name: "(paired with sleeping mask)",
    price: 350,
    image: "/DSC08615.jpg",
    rating: 5,
    reviews: 0,
    category: "Sleepwear",
    gender: "Ladies"
  },
  {
    id: 28,
    name: "",
    price: 75,
    image: "/DSC08640.jpg",
    rating: 4,
    reviews: 0,
    category: "Sleepwear",
    gender: "Ladies",
    isNew: true
  },
  {
    id: 29,
    name: "",
    price: 350,
    originalPrice: 129.99,
    image: "/DSC08540 (1).jpg",
    rating: 5,
    reviews: 87,
    category: "Sleepwear",
    gender: "Ladies",
    isSale: true
  },
  {
    id: 30,
    name: "(paired with sleeping mask)",
    price: 350,
    image: "/DSC08613.jpg",
    rating: 4,
    reviews: 176,
    category: "Sleepwear",
    gender: "Ladies"
  },

  // New Moonblue PJ Collection
  {
    id: 31,
    name: "Moonblue PJ",
    price: 850,
    image: "/DSC08910 (2).jpg",
    rating: 5,
    reviews: 0,
    category: "Ladies",
    gender: "Ladies",
    isNew: true
  },
  {
    id: 32,
    name: "Moonblue PJ",
    price: 850,
    image: "/DSC08920.jpg",
    rating: 5,
    reviews: 0,
    category: "Little Girls",
    gender: "Little Girls",
    isNew: true
  },
  {
    id: 33,
    name: "Moonblue PJ",
    price: 850,
    image: "/DSC08944.jpg",
    rating: 5,
    reviews: 0,
    category: "Sleepwear",
    gender: "Ladies",
    isNew: true
  },

  // New Mami dayjama Collection
  {
    id: 34,
    name: "Mami dayjama",
    price: 2000,
    image: "/DSC09128.jpg",
    rating: 5,
    reviews: 0,
    category: "Ladies",
    gender: "Ladies",
    isNew: true
  },
  {
    id: 35,
    name: "Mami dayjama",
    price: 2000,
    image: "/DSC09136.jpg",
    rating: 5,
    reviews: 0,
    category: "Little Girls",
    gender: "Little Girls",
    isNew: true
  },
  {
    id: 36,
    name: "Mami dayjama",
    price: 2000,
    image: "/DSC09183 (1).jpg",
    rating: 5,
    reviews: 0,
    category: "Sleepwear",
    gender: "Ladies",
    isNew: true
  }
];

// Sweet Dream Collection products
export const sweetDreamProducts: SweetDreamProduct[] = [
  {
    id: 1,
    name: "",
    price: "$19.99",
    image: "/DSC08764.jpg",
    description: "Ultra-soft memory foam pillow for the perfect night's sleep",
    rating: 4.8,
  },
  {
    id: 2,
    name: "",
    price: "$29.99",
    image: "/DSC08794.jpg",
    description: "Cozy weighted blanket with celestial design",
    rating: 4.9,
  },
  {
    id: 3,
    name: "",
    price: "$24.99",
    image: "/DSC08890.jpg",
    description: "Breathable cotton pajamas for ultimate comfort",
    rating: 4.7,
  },
  {
    id: 4,
    name: "",
    price: "$34.99",
    image: "/DSC08910.jpg",
    description: "Lavender-scented pillow for relaxation",
    rating: 4.6,
  },
  {
    id: 5,
    name: "",
    price: "$39.99",
    image: "/DSC09183.jpg",
    description: "Handcrafted dream catcher for peaceful dreams",
    rating: 4.8,
  },
  {
    id: 6,
    name: "",
    price: "$27.99",
    image: "/DSC08531 (1).jpg",
    description: "Herbal tea blend for bedtime relaxation",
    rating: 4.5,
  },
  {
    id: 7,
    name: "",
    price: "$32.99",
    image: "/DSC08533 (1).jpg",
    description: "Silk sleep mask for deep rest",
    rating: 4.7,
  },
  {
    id: 8,
    name: "",
    price: "$28.99",
    image: "/DSC08537 (1).jpg",
    description: "Aromatherapy diffuser for peaceful sleep",
    rating: 4.6,
  },
  {
    id: 9,
    name: "",
    price: "$35.99",
    image: "/DSC08540 (1).jpg",
    description: "Cozy fleece blanket for winter nights",
    rating: 4.8,
  },
  {
    id: 10,
    name: "",
    price: "$22.99",
    image: "/DSC08555.jpg",
    description: "Soft cotton sleep socks",
    rating: 4.4,
  },
  {
    id: 11,
    name: "",
    price: "$26.99",
    image: "/DSC08613.jpg",
    description: "Essential oil blend for relaxation",
    rating: 4.5,
  },
];

// Helper functions to get products by category
export const getProductsByCategory = (category: string): Product[] => {
  return allProducts.filter(product => product.category === category);
};

export const getProductsByGender = (gender: string): Product[] => {
  return allProducts.filter(product => product.gender === gender);
};

export const getProductById = (id: number): Product | undefined => {
  return allProducts.find(product => product.id === id);
};

// Helper function to update product price
export const updateProductPrice = (id: number, newPrice: number, originalPrice?: number): void => {
  const product = allProducts.find(p => p.id === id);
  if (product) {
    product.price = newPrice;
    if (originalPrice !== undefined) {
      product.originalPrice = originalPrice;
    }
  }
};
