export interface ProductVariant {
  color: string;
  colorCode: string;
  image: string;
  name: string;
}

export interface ProductSize {
  size: string;
  available: boolean;
  measurements?: string;
}

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
  isSoldOut?: boolean;
  // Product-specific data
  description?: string;
  thumbnails?: string[];
  variants?: ProductVariant[];
  sizes?: ProductSize[];
  defaultColor?: string;
  defaultSize?: string;
  productType?: 'pajamas' | 'keychain' | 'sleepmask' | 'dayjama' | 'accessory';
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
    originalPrice: 29.99,
    image: "/optimized/hearts-out-pjs.jpg",
    rating: 5,
    reviews: 0,
    category: "Ladies",
    gender: "Ladies",
    isNew: true,
    isSale: true,
    isSoldOut: true,
    description: "Cozy striped pajama set with heart details and red piping. Perfect for lounging or sleeping in comfort.",
    thumbnails: [
      "/optimized/hearts-out-pjs.jpg", // Main Hearts Out PJ image
      "/optimized/heartsoutpjs.jpg" // Hearts Out PJ different angle
    ],
    variants: [
      {
        color: "Pink & White Stripes",
        colorCode: "#FFB6C1",
        image: "/optimized/hearts-out-pjs.jpg",
        name: "Classic Stripes"
      },
      {
        color: "Red & White Stripes", 
        colorCode: "#FF6B6B",
        image: "/optimized/heartsoutpjs.jpg",
        name: "Red Accent"
      }
    ],
    sizes: [
      { size: "XS", available: true, measurements: "Bust: 32-34 in, Waist: 24-26 in" },
      { size: "S", available: true, measurements: "Bust: 34-36 in, Waist: 26-28 in" },
      { size: "M", available: true, measurements: "Bust: 36-38 in, Waist: 28-30 in" },
      { size: "L", available: false, measurements: "Bust: 38-40 in, Waist: 30-32 in" },
      { size: "XL", available: false, measurements: "Bust: 40-42 in, Waist: 32-34 in" }
    ],
    defaultColor: "Pink & White Stripes",
    defaultSize: "S",
    productType: "pajamas"
  },
  {
    id: 2,
    name: "Hearts Out PJs - Red Accent",
    price: 850,
    image: "/optimized/heartsoutpjs.jpg",
    rating: 4,
    reviews: 0,
    category: "Ladies",
    gender: "Ladies",
    isNew: true,
    isSoldOut: true,
    description: "Stylish striped pajama set with red piping and heart details. Perfect for cozy nights in.",
    thumbnails: [
      "/optimized/heartsoutpjs.jpg", // Main red accent image
      "/optimized/hearts-out-pjs.jpg" // Different angle
    ],
    variants: [
      {
        color: "Red & White Stripes",
        colorCode: "#FF6B6B",
        image: "/optimized/heartsoutpjs.jpg",
        name: "Red Accent"
      },
      {
        color: "Pink & White Stripes", 
        colorCode: "#FFB6C1",
        image: "/optimized/hearts-out-pjs.jpg",
        name: "Classic Pink"
      }
    ],
    sizes: [
      { size: "XS", available: true, measurements: "Bust: 32-34 in, Waist: 24-26 in" },
      { size: "S", available: true, measurements: "Bust: 34-36 in, Waist: 26-28 in" },
      { size: "M", available: true, measurements: "Bust: 36-38 in, Waist: 28-30 in" },
      { size: "L", available: false, measurements: "Bust: 38-40 in, Waist: 30-32 in" },
      { size: "XL", available: false, measurements: "Bust: 40-42 in, Waist: 32-34 in" }
    ],
    defaultColor: "Red & White Stripes",
    defaultSize: "S",
    productType: "pajamas"
  },
  {
    id: 3,
    name: "Bow Tie PJ Collection",
    price: 1000,
    originalPrice: 39.99,
    image: "/optimized/bow tie pj.jpg",
    rating: 5,
    reviews: 0,
    category: "Ladies",
    gender: "Ladies",
    isSale: true,
    isSoldOut: true,
    description: "Elegant bow tie pajama set with pink and red accents. Perfect for special occasions or everyday comfort.",
    thumbnails: [
      "/optimized/bow tie pj.jpg", // Main bow tie image
      "/optimized/bow tie pj1.jpg" // Bow tie different angle
    ],
    variants: [
      {
        color: "Pink Bow",
        colorCode: "#FFB6C1",
        image: "/optimized/bow tie pj.jpg",
        name: "Pink Bow"
      },
      {
        color: "Red Bow", 
        colorCode: "#FF6B6B",
        image: "/optimized/bow tie pj1.jpg",
        name: "Red Bow"
      }
    ],
    sizes: [
      { size: "XS", available: true, measurements: "Bust: 32-34 in, Waist: 24-26 in" },
      { size: "S", available: true, measurements: "Bust: 34-36 in, Waist: 26-28 in" },
      { size: "M", available: true, measurements: "Bust: 36-38 in, Waist: 28-30 in" },
      { size: "L", available: false, measurements: "Bust: 38-40 in, Waist: 30-32 in" },
      { size: "XL", available: false, measurements: "Bust: 40-42 in, Waist: 32-34 in" }
    ],
    defaultColor: "Pink & Red Bow",
    defaultSize: "S",
    productType: "pajamas"
  },
  {
    id: 4,
    name: "Ladies Accessories (comes with matching sleeping mask)",
    price: 350,
    image: "/optimized/all color headbands.jpg",
    rating: 4,
    reviews: 0,
    category: "Ladies",
    gender: "Ladies",
    isNew: true,
    description: "Beautiful headband and matching sleeping mask set in multiple colors. Each set includes a headband and a matching sleeping mask for a complete sleep experience.",
    thumbnails: [
      "/optimized/all color headbands.jpg", // All colors headbands
      "/optimized/all color sleeping masks with hair bands.jpg" // All colors sleeping masks
    ],
    variants: [
      {
        color: "Blue",
        colorCode: "#87CEEB",
        image: "/optimized/blue sleeping mask 1.jpg",
        name: "Sky Blue Set"
      },
      {
        color: "Red",
        colorCode: "#FF6B6B",
        image: "/optimized/red sleeping mask 1.jpg",
        name: "Classic Red Set"
      },
      {
        color: "Pink",
        colorCode: "#FFB6C1",
        image: "/optimized/pink sleeping mask 1.jpg",
        name: "Soft Pink Set"
      },
      {
        color: "White",
        colorCode: "#FFFFFF",
        image: "/optimized/pink sleeping mask .jpg",
        name: "Pure White Set"
      }
    ],
    sizes: [
      { size: "One Size", available: true, measurements: "Adjustable headband, fits all head sizes" }
    ],
    defaultColor: "Blue",
    defaultSize: "One Size",
    productType: "accessory"
  },
  {
    id: 5,
    name: "Belle Dayjama Collection",
    price: 1600,
    image: "/optimized/belle dayjama.jpg",
    rating: 4,
    reviews: 0,
    category: "Ladies",
    gender: "Ladies",
    isSoldOut: true,
    description: "Elegant dayjama set perfect for lounging or casual wear. Features beautiful details and comfortable fit.",
    thumbnails: [
      "/optimized/belle dayjama.jpg", // Main belle dayjama image
      "/optimized/mamo dayjama.jpg", // Different angle
      "/optimized/mami dayjama.jpg" // Detail shot
    ],
    variants: [
      {
        color: "Pink",
        colorCode: "#F8BBD9",
        image: "/optimized/belle dayjama.jpg",
        name: "Classic Pink"
      }
    ],
    sizes: [
      { size: "XS", available: true, measurements: "Bust: 32-34 in, Waist: 24-26 in" },
      { size: "S", available: true, measurements: "Bust: 34-36 in, Waist: 26-28 in" },
      { size: "M", available: true, measurements: "Bust: 36-38 in, Waist: 28-30 in" },
      { size: "L", available: false, measurements: "Bust: 38-40 in, Waist: 30-32 in" },
      { size: "XL", available: false, measurements: "Bust: 40-42 in, Waist: 32-34 in" }
    ],
    defaultColor: "Classic Belle",
    defaultSize: "S",
    productType: "dayjama"
  },
  {
    id: 6,
    name: "Bow Keychain Collection",
    price: 150,
    image: "/optimized/keychain-red.jpg",
    rating: 4,
    reviews: 0,
    category: "Ladies",
    gender: "Ladies",
    description: "Adorable bow-shaped keychains perfect for adding a cute touch to your keys or bag.",
    thumbnails: [
      "/optimized/keychain-red.jpg", // Red keychain
      "/optimized/white-keychain.jpg", // White keychain
      "/optimized/keychain-blue.jpg", // Blue keychain
      "/optimized/keychain-pink.jpg", // Pink keychain
      "/optimized/red keychain.jpg"  // Additional keychain view
    ],
    variants: [
      {
        color: "Red",
        colorCode: "#FF6B6B",
        image: "/optimized/keychain-red.jpg",
        name: "Classic Red"
      },
      {
        color: "White",
        colorCode: "#FFFFFF",
        image: "/optimized/white-keychain.jpg",
        name: "Pure White"
      },
      {
        color: "Blue",
        colorCode: "#87CEEB",
        image: "/optimized/keychain-blue.jpg",
        name: "Sky Blue"
      },
      {
        color: "Pink",
        colorCode: "#FFB6C1",
        image: "/optimized/keychain-pink.jpg",
        name: "Soft Pink"
      }
    ],
    sizes: [
      { size: "One Size", available: true, measurements: "Approx 2 inches" }
    ],
    defaultColor: "Red",
    defaultSize: "One Size",
    productType: "keychain"
  },
  {
    id: 7,
    name: "White Bow Keychain",
    price: 150,
    originalPrice: 7.99,
    image: "/optimized/white-keychain.jpg",
    rating: 5,
    reviews: 0,
    category: "Ladies",
    gender: "Ladies",
    isSale: true,
    description: "Pure white bow keychain with elegant design. Perfect for adding a cute touch to your keys or bag.",
    thumbnails: [
      "/optimized/white-keychain.jpg", // Main white keychain
      "/optimized/keychain-blue.jpg" // Blue variant
    ],
    variants: [
      {
        color: "White",
        colorCode: "#FFFFFF",
        image: "/optimized/white-keychain.jpg",
        name: "Pure White"
      },
      {
        color: "Light Blue", 
        colorCode: "#87CEEB",
        image: "/optimized/keychain-blue.jpg",
        name: "Sky Blue"
      }
    ],
    sizes: [
      { size: "One Size", available: true, measurements: "Approx 2 inches" }
    ],
    defaultColor: "White",
    defaultSize: "One Size",
    productType: "keychain"
  },
  {
    id: 8,
    name: "Light Blue Bow Keychain",
    price: 150,
    image: "/optimized/keychain-blue.jpg",
    rating: 4,
    reviews: 0,
    category: "Ladies",
    gender: "Ladies",
    description: "Beautiful light blue bow keychain with soft pastel color. Perfect for spring and summer vibes.",
    thumbnails: [
      "/optimized/keychain-blue.jpg", // Main light blue keychain
      "/optimized/keychain-pink.jpg" // Pink variant
    ],
    variants: [
      {
        color: "Light Blue",
        colorCode: "#87CEEB",
        image: "/optimized/keychain-blue.jpg",
        name: "Sky Blue"
      },
      {
        color: "Pink", 
        colorCode: "#FFB6C1",
        image: "/optimized/keychain-pink.jpg",
        name: "Soft Pink"
      }
    ],
    sizes: [
      { size: "One Size", available: true, measurements: "Approx 2 inches" }
    ],
    defaultColor: "Light Blue",
    defaultSize: "One Size",
    productType: "keychain"
  },
  {
    id: 9,
    name: "Pink Bow Keychain",
    price: 150,
    image: "/optimized/keychain-pink.jpg",
    rating: 5,
    reviews: 0,
    category: "Ladies",
    gender: "Ladies",
    isNew: true,
    description: "Adorable pink bow keychain with cute design. Perfect for adding a feminine touch to your accessories.",
    thumbnails: [
      "/optimized/keychain-pink.jpg", // Main pink keychain
      "/optimized/keychain-red.jpg" // Red variant
    ],
    variants: [
      {
        color: "Pink",
        colorCode: "#FFB6C1",
        image: "/optimized/keychain-pink.jpg",
        name: "Soft Pink"
      },
      {
        color: "Red", 
        colorCode: "#FF6B6B",
        image: "/optimized/keychain-red.jpg",
        name: "Classic Red"
      }
    ],
    sizes: [
      { size: "One Size", available: true, measurements: "Approx 2 inches" }
    ],
    defaultColor: "Pink",
    defaultSize: "One Size",
    productType: "keychain"
  },
  {
    id: 10,
    name: "Sleeping Mask",
    price: 350,
    image: "/optimized/red sleeping mask 1.jpg",
    rating: 4,
    reviews: 0,
    category: "Ladies",
    gender: "Ladies",
    isNew: true,
    description: "Luxurious silk sleeping mask for the perfect night's rest. Available in multiple colors for your comfort and style.",
    thumbnails: [
      "/optimized/red sleeping mask 1.jpg", // Red sleeping mask
      "/optimized/blue sleeping mask 1.jpg", // Blue sleeping mask
      "/optimized/pink sleeping mask 1.jpg", // Pink sleeping mask
      "/optimized/pink sleeping mask .jpg" // White sleeping mask
    ],
    variants: [
      {
        color: "Red",
        colorCode: "#FF6B6B",
        image: "/optimized/red sleeping mask 1.jpg",
        name: "Classic Red"
      },
      {
        color: "Blue",
        colorCode: "#87CEEB",
        image: "/optimized/blue sleeping mask 1.jpg",
        name: "Sky Blue"
      },
      {
        color: "Pink",
        colorCode: "#FFB6C1",
        image: "/optimized/pink sleeping mask 1.jpg",
        name: "Soft Pink"
      },
      {
        color: "White",
        colorCode: "#FFFFFF",
        image: "/optimized/pink sleeping mask .jpg",
        name: "Pure White"
      }
    ],
    sizes: [
      { size: "One Size", available: true, measurements: "Adjustable strap, fits all head sizes" }
    ],
    defaultColor: "Red",
    defaultSize: "One Size",
    productType: "sleepmask"
  },

  // Little Girls Collection
  {
    id: 11,
    name: "Mami Dayjama - Little Girls",
    price: 2000,
    image: "/optimized/mami dayjama.jpg",
    rating: 5,
    reviews: 0,
    category: "Little Girls",
    gender: "Little Girls",
    isNew: true,
    isSoldOut: true,
    description: "Adorable dayjama set for little girls with cute patterns and comfortable fit. Perfect for playtime and lounging.",
    thumbnails: [
      "/optimized/mami dayjama.jpg", // Main mami dayjama
      "/optimized/mami dayjama1.jpg", // Mami dayjama different angle
      "/optimized/mami-dayjama.jpg", // Mami dayjama detail shot
      "/optimized/mamidayjama.jpg"  // Mami dayjama lifestyle shot
    ],
    variants: [
      {
        color: "Blue & White Stripes",
        colorCode: "#87CEEB",
        image: "/optimized/mami dayjama.jpg",
        name: "Classic Blue Stripes"
      },
      {
        color: "Light Blue & White Stripes", 
        colorCode: "#B0E0E6",
        image: "/optimized/mami dayjama1.jpg",
        name: "Light Blue Stripes"
      }
    ],
    sizes: [
      { size: "2T", available: true, measurements: "Chest: 20-22 in, Waist: 19-21 in" },
      { size: "3T", available: true, measurements: "Chest: 22-24 in, Waist: 21-23 in" },
      { size: "4T", available: true, measurements: "Chest: 24-26 in, Waist: 23-25 in" },
      { size: "5T", available: false, measurements: "Chest: 26-28 in, Waist: 25-27 in" }
    ],
    defaultColor: "Blue & White Stripes",
    defaultSize: "3T",
    productType: "dayjama"
  },
  {
    id: 12,
    name: "Bow Tie PJ",
    price: 850,
    originalPrice: 44.99,
    image: "/optimized/bow tie pj.jpg",
    rating: 5,
    reviews: 76,
    category: "Little Girls",
    gender: "Little Girls",
    isSale: true,
    isSoldOut: true,
    description: "Cute bow tie pajama set with red and pink accents. Perfect for bedtime stories and sweet dreams.",
    thumbnails: [
      "/optimized/bow tie pj.jpg", // Main bow tie PJ
      "/optimized/bow tie pj1.jpg" // Different angle
    ],
    variants: [
      {
        color: "Red & Pink Bow",
        colorCode: "#FF6B6B",
        image: "/optimized/bow tie pj.jpg",
        name: "Red Accent"
      },
      {
        color: "Pink & Red Bow", 
        colorCode: "#FFB6C1",
        image: "/optimized/bow tie pj1.jpg",
        name: "Pink Accent"
      }
    ],
    sizes: [
      { size: "2T", available: true, measurements: "Chest: 20-22 in, Waist: 19-21 in" },
      { size: "3T", available: true, measurements: "Chest: 22-24 in, Waist: 21-23 in" },
      { size: "4T", available: true, measurements: "Chest: 24-26 in, Waist: 23-25 in" },
      { size: "5T", available: false, measurements: "Chest: 26-28 in, Waist: 25-27 in" }
    ],
    defaultColor: "Red & Pink Bow",
    defaultSize: "3T",
    productType: "pajamas"
  },
  {
    id: 13,
    name: "White Socks",
    price: 350,
    image: "/optimized/white socks.jpg",
    rating: 4,
    reviews: 0,
    category: "Little Girls",
    gender: "Little Girls"
  },
  {
    id: 14,
    name: "Moonblue PJ - Little Girls",
    price: 850,
    image: "/optimized/moon-blue pjs.jpg",
    rating: 4,
    reviews: 0,
    category: "Little Girls",
    gender: "Little Girls",
    isSoldOut: true,
    description: "Dreamy moonblue pajama set for little girls with celestial vibes. Perfect for stargazing and bedtime adventures.",
    thumbnails: [
      "/optimized/moon-blue pjs.jpg", // Main moonblue PJ
      "/optimized/moon-blue-pjz.jpg", // Moonblue PJ different angle
      "/optimized/moonblue pjs.jpg", // Moonblue PJ detail shot
      "/optimized/moonbluepjz.jpg"  // Moonblue PJ lifestyle shot
    ],
    variants: [
      {
        color: "Blue",
        colorCode: "#87CEEB",
        image: "/optimized/moon-blue pjs.jpg",
        name: "Moonblue"
      }
    ],
    sizes: [
      { size: "2T", available: true, measurements: "Chest: 20-22 in, Waist: 19-21 in" },
      { size: "3T", available: true, measurements: "Chest: 22-24 in, Waist: 21-23 in" },
      { size: "4T", available: true, measurements: "Chest: 24-26 in, Waist: 23-25 in" },
      { size: "5T", available: false, measurements: "Chest: 26-28 in, Waist: 25-27 in" }
    ],
    defaultColor: "Moonblue",
    defaultSize: "3T",
    productType: "pajamas"
  },
  {
    id: 15,
    name: "Mami dayjama",
    price: 2000,
    image: "/optimized/mami dayjama.jpg",
    rating: 4,
    reviews: 234,
    category: "Little Girls",
    gender: "Little Girls",
    isSoldOut: true,
    description: "Adorable dayjama set for little girls with cute striped patterns and comfortable fit. Perfect for playtime and lounging.",
    thumbnails: [
      "/optimized/mami dayjama.jpg", // Main mami dayjama
      "/optimized/mami-dayjama.jpg", // Different angle
      "/optimized/mamidayjama.jpg", // Detail shot
      "/optimized/mamo dayjama.jpg" // Lifestyle shot
    ],
    variants: [
      {
        color: "Blue & White Stripes",
        colorCode: "#87CEEB",
        image: "/optimized/mami dayjama.jpg",
        name: "Classic Blue Stripes"
      },
      {
        color: "Light Blue & White Stripes",
        colorCode: "#B0E0E6",
        image: "/optimized/mami-dayjama.jpg",
        name: "Light Blue Stripes"
      }
    ],
    sizes: [
      { size: "2T", available: true, measurements: "Chest: 20-22 in, Waist: 19-21 in" },
      { size: "3T", available: true, measurements: "Chest: 22-24 in, Waist: 21-23 in" },
      { size: "4T", available: true, measurements: "Chest: 24-26 in, Waist: 23-25 in" },
      { size: "5T", available: false, measurements: "Chest: 26-28 in, Waist: 25-27 in" }
    ],
    defaultColor: "Blue & White Stripes",
    defaultSize: "3T",
    productType: "dayjama"
  },
  {
    id: 16,
    name: "Key Chain",
    price: 150,
    image: "/optimized/white-keychain.jpg",
    rating: 5,
    reviews: 0,
    category: "Little Girls",
    gender: "Little Girls",
    isNew: true,
    description: "Adorable keychain perfect for adding a cute touch to your keys or bag. Available in multiple colors.",
    thumbnails: [
      "/optimized/white-keychain.jpg", // Main white keychain
      "/optimized/keychain-red.jpg", // Red keychain
      "/optimized/keychain-blue.jpg", // Blue keychain
      "/optimized/keychain-pink.jpg" // Pink keychain
    ],
    variants: [
      {
        color: "White",
        colorCode: "#FFFFFF",
        image: "/optimized/white-keychain.jpg",
        name: "Pure White"
      },
      {
        color: "Red",
        colorCode: "#FF6B6B",
        image: "/optimized/keychain-red.jpg",
        name: "Classic Red"
      },
      {
        color: "Blue",
        colorCode: "#87CEEB",
        image: "/optimized/keychain-blue.jpg",
        name: "Sky Blue"
      },
      {
        color: "Pink",
        colorCode: "#FFB6C1",
        image: "/optimized/keychain-pink.jpg",
        name: "Soft Pink"
      }
    ],
    sizes: [
      { size: "One Size", available: true, measurements: "Approx 2 inches" }
    ],
    defaultColor: "White",
    defaultSize: "One Size",
    productType: "keychain"
  },
  {
    id: 17,
    name: "Pink Headband",
    price: 350,
    image: "/optimized/pink head band.jpg",
    rating: 5,
    reviews: 0,
    category: "Little Girls",
    gender: "Little Girls",
    description: "Beautiful pink headband perfect for styling hair and adding a cute touch to any outfit.",
    thumbnails: [
      "/optimized/pink head band.jpg", // Main pink headband
      "/optimized/blue head band.jpg", // Blue headband
      "/optimized/red headband.jpg", // Red headband
      "/optimized/whiteheadband.jpg" // White headband
    ],
    variants: [
      {
        color: "Pink",
        colorCode: "#FFB6C1",
        image: "/optimized/pink head band.jpg",
        name: "Soft Pink"
      },
      {
        color: "Blue",
        colorCode: "#87CEEB",
        image: "/optimized/blue head band.jpg",
        name: "Sky Blue"
      },
      {
        color: "Red",
        colorCode: "#FF6B6B",
        image: "/optimized/red headband.jpg",
        name: "Classic Red"
      },
      {
        color: "White",
        colorCode: "#FFFFFF",
        image: "/optimized/whiteheadband.jpg",
        name: "Pure White"
      }
    ],
    sizes: [
      { size: "One Size", available: true, measurements: "Adjustable, fits all head sizes" }
    ],
    defaultColor: "Pink",
    defaultSize: "One Size",
    productType: "accessory"
  },
  {
    id: 18,
    name: "Silk Sleep Mask Collection",
    price: 350,
    image: "/optimized/red sleeping mask 1.jpg",
    rating: 4,
    reviews: 167,
    category: "Little Girls",
    gender: "Little Girls",
    description: "Luxurious silk sleep masks for the perfect night's rest. Lightweight and comfortable.",
    thumbnails: [
      "/optimized/red sleeping mask 1.jpg", // Red sleep mask
      "/optimized/all color sleeping masks with hair bands.jpg", // All colors sleep mask
      "/optimized/blue sleeping mask 1.jpg", // Blue sleep mask
      "/optimized/pink sleeping mask .jpg", // Pink sleep mask
      "/optimized/pink sleeping mask 1.jpg"  // Additional sleep mask view
    ],
    variants: [
      {
        color: "Red",
        colorCode: "#FF6B6B",
        image: "/optimized/red sleeping mask 1.jpg",
        name: "Bold Red"
      },
      {
        color: "Blue",
        colorCode: "#87CEEB",
        image: "/optimized/blue sleeping mask 1.jpg",
        name: "Sky Blue"
      },
      {
        color: "Pink",
        colorCode: "#FFB6C1",
        image: "/optimized/pink sleeping mask .jpg",
        name: "Soft Pink"
      }
    ],
    sizes: [
      { size: "One Size", available: true, measurements: "Adjustable strap, fits all head sizes" }
    ],
    defaultColor: "Red",
    defaultSize: "One Size",
    productType: "sleepmask"
  },
  {
    id: 19,
    name: "Sleeping Mask",
    price: 350,
    image: "/optimized/all color sleeping masks with hair bands.jpg",
    rating: 5,
    reviews: 0,
    category: "Little Girls",
    gender: "Little Girls",
    isNew: true,
    description: "Luxurious silk sleeping mask for the perfect night's rest. Available in multiple colors for your comfort and style.",
    thumbnails: [
      "/optimized/all color sleeping masks with hair bands.jpg", // All colors display
      "/optimized/red sleeping mask 1.jpg", // Red sleeping mask
      "/optimized/blue sleeping mask 1.jpg", // Blue sleeping mask
      "/optimized/pink sleeping mask 1.jpg" // Pink sleeping mask
    ],
    variants: [
      {
        color: "Red",
        colorCode: "#FF6B6B",
        image: "/optimized/red sleeping mask 1.jpg",
        name: "Classic Red"
      },
      {
        color: "Blue",
        colorCode: "#87CEEB",
        image: "/optimized/blue sleeping mask 1.jpg",
        name: "Sky Blue"
      },
      {
        color: "Pink",
        colorCode: "#FFB6C1",
        image: "/optimized/pink sleeping mask 1.jpg",
        name: "Soft Pink"
      },
      {
        color: "White",
        colorCode: "#FFFFFF",
        image: "/optimized/pink sleeping mask .jpg",
        name: "Pure White"
      }
    ],
    sizes: [
      { size: "One Size", available: true, measurements: "Adjustable strap, fits all head sizes" }
    ],
    defaultColor: "Red",
    defaultSize: "One Size",
    productType: "sleepmask"
  },
  {
    id: 20,
    name: "Blue Headband",
    price: 350,
    image: "/optimized/blue head band.jpg",
    rating: 4,
    reviews: 143,
    category: "Little Girls",
    gender: "Little Girls",
    description: "Beautiful blue headband perfect for styling hair and adding a cute touch to any outfit.",
    thumbnails: [
      "/optimized/blue head band.jpg", // Main blue headband
      "/optimized/pink head band.jpg", // Pink headband
      "/optimized/red headband.jpg", // Red headband
      "/optimized/whiteheadband.jpg" // White headband
    ],
    variants: [
      {
        color: "Blue",
        colorCode: "#87CEEB",
        image: "/optimized/blue head band.jpg",
        name: "Sky Blue"
      },
      {
        color: "Pink",
        colorCode: "#FFB6C1",
        image: "/optimized/pink head band.jpg",
        name: "Soft Pink"
      },
      {
        color: "Red",
        colorCode: "#FF6B6B",
        image: "/optimized/red headband.jpg",
        name: "Classic Red"
      },
      {
        color: "White",
        colorCode: "#FFFFFF",
        image: "/optimized/whiteheadband.jpg",
        name: "Pure White"
      }
    ],
    sizes: [
      { size: "One Size", available: true, measurements: "Adjustable, fits all head sizes" }
    ],
    defaultColor: "Blue",
    defaultSize: "One Size",
    productType: "accessory"
  },

  // Sleepwear Collection
  {
    id: 21,
    name: "Hearts Out PJs",
    price: 850,
    image: "/optimized/hearts-out-pjs.jpg",
    rating: 5,
    reviews: 0,
    category: "Sleepwear",
    gender: "Ladies",
    description: "Cozy striped pajama set with heart details and red piping. Perfect for lounging or sleeping in comfort.",
    thumbnails: [
      "/optimized/hearts-out-pjs.jpg", // Main Hearts Out PJ image
      "/optimized/heartsoutpjs.jpg" // Hearts Out PJ different angle
    ],
    variants: [
      {
        color: "Pink & White Stripes",
        colorCode: "#FFB6C1",
        image: "/optimized/hearts-out-pjs.jpg",
        name: "Classic Stripes"
      },
      {
        color: "Red & White Stripes",
        colorCode: "#FF6B6B",
        image: "/optimized/heartsoutpjs.jpg",
        name: "Red Accent"
      }
    ],
    sizes: [
      { size: "XS", available: true, measurements: "Bust: 32-34 in, Waist: 24-26 in" },
      { size: "S", available: true, measurements: "Bust: 34-36 in, Waist: 26-28 in" },
      { size: "M", available: true, measurements: "Bust: 36-38 in, Waist: 28-30 in" },
      { size: "L", available: false, measurements: "Bust: 38-40 in, Waist: 30-32 in" },
      { size: "XL", available: false, measurements: "Bust: 40-42 in, Waist: 32-34 in" }
    ],
    defaultColor: "Pink & White Stripes",
    defaultSize: "S",
    productType: "pajamas"
  },
  {
    id: 22,
    name: "Hearts Out PJ",
    price: 850,
    image: "/optimized/heartsoutpjs.jpg",
    rating: 4,
    reviews: 67,
    category: "Sleepwear",
    gender: "Ladies",
    isSoldOut: true,
    description: "Stylish striped pajama set with red piping and heart details. Perfect for cozy nights in.",
    thumbnails: [
      "/optimized/heartsoutpjs.jpg", // Main red accent image
      "/optimized/hearts-out-pjs.jpg" // Different angle
    ],
    variants: [
      {
        color: "Red & White Stripes",
        colorCode: "#FF6B6B",
        image: "/optimized/heartsoutpjs.jpg",
        name: "Red Accent"
      },
      {
        color: "Pink & White Stripes",
        colorCode: "#FFB6C1",
        image: "/optimized/hearts-out-pjs.jpg",
        name: "Classic Pink"
      }
    ],
    sizes: [
      { size: "XS", available: true, measurements: "Bust: 32-34 in, Waist: 24-26 in" },
      { size: "S", available: true, measurements: "Bust: 34-36 in, Waist: 26-28 in" },
      { size: "M", available: true, measurements: "Bust: 36-38 in, Waist: 28-30 in" },
      { size: "L", available: false, measurements: "Bust: 38-40 in, Waist: 30-32 in" },
      { size: "XL", available: false, measurements: "Bust: 40-42 in, Waist: 32-34 in" }
    ],
    defaultColor: "Red & White Stripes",
    defaultSize: "S",
    productType: "pajamas"
  },
  {
    id: 23,
    name: "Hearts Out PJ",
    price: 850,
    image: "/optimized/bow tie pj.jpg",
    rating: 5,
    reviews: 123,
    category: "Sleepwear",
    gender: "Little Girls",
    isSoldOut: true,
    description: "Cute bow tie pajama set with red and pink accents. Perfect for bedtime stories and sweet dreams.",
    thumbnails: [
      "/optimized/bow tie pj.jpg", // Main bow tie PJ
      "/optimized/bow tie pj1.jpg" // Different angle
    ],
    variants: [
      {
        color: "Red & Pink Bow",
        colorCode: "#FF6B6B",
        image: "/optimized/bow tie pj.jpg",
        name: "Red Accent"
      },
      {
        color: "Pink & Red Bow",
        colorCode: "#FFB6C1",
        image: "/optimized/bow tie pj1.jpg",
        name: "Pink Accent"
      }
    ],
    sizes: [
      { size: "2T", available: true, measurements: "Chest: 20-22 in, Waist: 19-21 in" },
      { size: "3T", available: true, measurements: "Chest: 22-24 in, Waist: 21-23 in" },
      { size: "4T", available: true, measurements: "Chest: 24-26 in, Waist: 23-25 in" },
      { size: "5T", available: false, measurements: "Chest: 26-28 in, Waist: 25-27 in" }
    ],
    defaultColor: "Red & Pink Bow",
    defaultSize: "3T",
    productType: "pajamas"
  },
  {
    id: 24,
    name: "Bow Tie PJ",
    price: 1000,
    image: "/optimized/bow tie pj1.jpg",
    rating: 4,
    reviews: 45,
    category: "Sleepwear",
    gender: "Ladies",
    isSoldOut: true,
    description: "Elegant bow tie pajama set with pink and red accents. Perfect for special occasions or everyday comfort.",
    thumbnails: [
      "/optimized/bow tie pj1.jpg", // Main bow tie image
      "/optimized/bow tie pj.jpg" // Bow tie different angle
    ],
    variants: [
      {
        color: "Pink & Red Bow",
        colorCode: "#FFB6C1",
        image: "/optimized/bow tie pj1.jpg",
        name: "Pink Accent"
      },
      {
        color: "Red & Pink Bow",
        colorCode: "#FF6B6B",
        image: "/optimized/bow tie pj.jpg",
        name: "Red Accent"
      }
    ],
    sizes: [
      { size: "XS", available: true, measurements: "Bust: 32-34 in, Waist: 24-26 in" },
      { size: "S", available: true, measurements: "Bust: 34-36 in, Waist: 26-28 in" },
      { size: "M", available: true, measurements: "Bust: 36-38 in, Waist: 28-30 in" },
      { size: "L", available: false, measurements: "Bust: 38-40 in, Waist: 30-32 in" },
      { size: "XL", available: false, measurements: "Bust: 40-42 in, Waist: 32-34 in" }
    ],
    defaultColor: "Pink & Red Bow",
    defaultSize: "S",
    productType: "pajamas"
  },
  {
    id: 25,
    name: "Key Chain",
    price: 150,
    image: "/optimized/keychain-red.jpg",
    rating: 4,
    reviews: 167,
    category: "Sleepwear",
    gender: "Ladies",
    description: "Adorable red keychain perfect for adding a cute touch to your keys or bag. Available in multiple colors.",
    thumbnails: [
      "/optimized/keychain-red.jpg", // Main red keychain
      "/optimized/keychain-pink.jpg", // Pink keychain
      "/optimized/keychain-blue.jpg", // Blue keychain
      "/optimized/white-keychain.jpg" // White keychain
    ],
    variants: [
      {
        color: "Red",
        colorCode: "#FF6B6B",
        image: "/optimized/keychain-red.jpg",
        name: "Classic Red"
      },
      {
        color: "Pink",
        colorCode: "#FFB6C1",
        image: "/optimized/keychain-pink.jpg",
        name: "Soft Pink"
      },
      {
        color: "Blue",
        colorCode: "#87CEEB",
        image: "/optimized/keychain-blue.jpg",
        name: "Sky Blue"
      },
      {
        color: "White",
        colorCode: "#FFFFFF",
        image: "/optimized/white-keychain.jpg",
        name: "Pure White"
      }
    ],
    sizes: [
      { size: "One Size", available: true, measurements: "Approx 2 inches" }
    ],
    defaultColor: "Red",
    defaultSize: "One Size",
    productType: "keychain"
  },
  {
    id: 26,
    name: "Key Chain",
    price: 150,
    image: "/optimized/keychain-pink.jpg",
    rating: 4,
    reviews: 0,
    category: "Sleepwear",
    gender: "Ladies",
    description: "Adorable pink keychain perfect for adding a cute touch to your keys or bag. Available in multiple colors.",
    thumbnails: [
      "/optimized/keychain-pink.jpg", // Main pink keychain
      "/optimized/keychain-red.jpg", // Red keychain
      "/optimized/keychain-blue.jpg", // Blue keychain
      "/optimized/white-keychain.jpg" // White keychain
    ],
    variants: [
      {
        color: "Pink",
        colorCode: "#FFB6C1",
        image: "/optimized/keychain-pink.jpg",
        name: "Soft Pink"
      },
      {
        color: "Red",
        colorCode: "#FF6B6B",
        image: "/optimized/keychain-red.jpg",
        name: "Classic Red"
      },
      {
        color: "Blue",
        colorCode: "#87CEEB",
        image: "/optimized/keychain-blue.jpg",
        name: "Sky Blue"
      },
      {
        color: "White",
        colorCode: "#FFFFFF",
        image: "/optimized/white-keychain.jpg",
        name: "Pure White"
      }
    ],
    sizes: [
      { size: "One Size", available: true, measurements: "Approx 2 inches" }
    ],
    defaultColor: "Pink",
    defaultSize: "One Size",
    productType: "keychain"
  },
  {
    id: 27,
    name: "Blue Sleep Mask",
    price: 350,
    image: "/optimized/blue sleeping mask 1.jpg",
    rating: 5,
    reviews: 0,
    category: "Sleepwear",
    gender: "Ladies",
    description: "Luxurious blue silk sleeping mask for the perfect night's rest. Lightweight and comfortable with adjustable strap.",
    thumbnails: [
      "/optimized/blue sleeping mask 1.jpg", // Main blue sleep mask
      "/optimized/red sleeping mask 1.jpg", // Red sleep mask
      "/optimized/pink sleeping mask 1.jpg", // Pink sleep mask
      "/optimized/pink sleeping mask .jpg" // White sleep mask
    ],
    variants: [
      {
        color: "Blue",
        colorCode: "#87CEEB",
        image: "/optimized/blue sleeping mask 1.jpg",
        name: "Sky Blue"
      },
      {
        color: "Red",
        colorCode: "#FF6B6B",
        image: "/optimized/red sleeping mask 1.jpg",
        name: "Classic Red"
      },
      {
        color: "Pink",
        colorCode: "#FFB6C1",
        image: "/optimized/pink sleeping mask 1.jpg",
        name: "Soft Pink"
      },
      {
        color: "White",
        colorCode: "#FFFFFF",
        image: "/optimized/pink sleeping mask .jpg",
        name: "Pure White"
      }
    ],
    sizes: [
      { size: "One Size", available: true, measurements: "Adjustable strap, fits all head sizes" }
    ],
    defaultColor: "Blue",
    defaultSize: "One Size",
    productType: "sleepmask"
  },
  {
    id: 28,
    name: "Pink Sleep Mask",
    price: 350,
    image: "/optimized/pink sleeping mask 1.jpg",
    rating: 4,
    reviews: 0,
    category: "Sleepwear",
    gender: "Ladies",
    isNew: true,
    description: "Luxurious pink silk sleeping mask for the perfect night's rest. Lightweight and comfortable with adjustable strap.",
    thumbnails: [
      "/optimized/pink sleeping mask 1.jpg", // Main pink sleep mask
      "/optimized/red sleeping mask 1.jpg", // Red sleep mask
      "/optimized/blue sleeping mask 1.jpg", // Blue sleep mask
      "/optimized/pink sleeping mask .jpg" // White sleep mask
    ],
    variants: [
      {
        color: "Pink",
        colorCode: "#FFB6C1",
        image: "/optimized/pink sleeping mask 1.jpg",
        name: "Soft Pink"
      },
      {
        color: "Red",
        colorCode: "#FF6B6B",
        image: "/optimized/red sleeping mask 1.jpg",
        name: "Classic Red"
      },
      {
        color: "Blue",
        colorCode: "#87CEEB",
        image: "/optimized/blue sleeping mask 1.jpg",
        name: "Sky Blue"
      },
      {
        color: "White",
        colorCode: "#FFFFFF",
        image: "/optimized/pink sleeping mask .jpg",
        name: "Pure White"
      }
    ],
    sizes: [
      { size: "One Size", available: true, measurements: "Adjustable strap, fits all head sizes" }
    ],
    defaultColor: "Pink",
    defaultSize: "One Size",
    productType: "sleepmask"
  },
  {
    id: 29,
    name: "Red Headband",
    price: 350,
    originalPrice: 129.99,
    image: "/optimized/red headband.jpg",
    rating: 5,
    reviews: 87,
    category: "Sleepwear",
    gender: "Ladies",
    isSale: true,
    description: "Beautiful red headband perfect for styling hair and adding a cute touch to any outfit. Available in multiple colors.",
    thumbnails: [
      "/optimized/red headband.jpg", // Main red headband
      "/optimized/pink head band.jpg", // Pink headband
      "/optimized/blue head band.jpg", // Blue headband
      "/optimized/whiteheadband.jpg" // White headband
    ],
    variants: [
      {
        color: "Red",
        colorCode: "#FF6B6B",
        image: "/optimized/red headband.jpg",
        name: "Classic Red"
      },
      {
        color: "Pink",
        colorCode: "#FFB6C1",
        image: "/optimized/pink head band.jpg",
        name: "Soft Pink"
      },
      {
        color: "Blue",
        colorCode: "#87CEEB",
        image: "/optimized/blue head band.jpg",
        name: "Sky Blue"
      },
      {
        color: "White",
        colorCode: "#FFFFFF",
        image: "/optimized/whiteheadband.jpg",
        name: "Pure White"
      }
    ],
    sizes: [
      { size: "One Size", available: true, measurements: "Adjustable, fits all head sizes" }
    ],
    defaultColor: "Red",
    defaultSize: "One Size",
    productType: "accessory"
  },
  {
    id: 30,
    name: "Pink Sleep Mask",
    price: 350,
    image: "/optimized/pink sleeping mask .jpg",
    rating: 4,
    reviews: 176,
    category: "Sleepwear",
    gender: "Ladies",
    description: "Luxurious pink silk sleeping mask for the perfect night's rest. Lightweight and comfortable with adjustable strap.",
    thumbnails: [
      "/optimized/pink sleeping mask .jpg", // Main pink sleep mask
      "/optimized/red sleeping mask 1.jpg", // Red sleep mask
      "/optimized/blue sleeping mask 1.jpg", // Blue sleep mask
      "/optimized/pink sleeping mask 1.jpg" // Additional pink sleep mask
    ],
    variants: [
      {
        color: "Pink",
        colorCode: "#FFB6C1",
        image: "/optimized/pink sleeping mask .jpg",
        name: "Soft Pink"
      },
      {
        color: "Red",
        colorCode: "#FF6B6B",
        image: "/optimized/red sleeping mask 1.jpg",
        name: "Classic Red"
      },
      {
        color: "Blue",
        colorCode: "#87CEEB",
        image: "/optimized/blue sleeping mask 1.jpg",
        name: "Sky Blue"
      },
      {
        color: "White",
        colorCode: "#FFFFFF",
        image: "/optimized/pink sleeping mask 1.jpg",
        name: "Pure White"
      }
    ],
    sizes: [
      { size: "One Size", available: true, measurements: "Adjustable strap, fits all head sizes" }
    ],
    defaultColor: "Pink",
    defaultSize: "One Size",
    productType: "sleepmask"
  },

  // New Moonblue PJ Collection
  {
    id: 31,
    name: "Moonblue PJ",
    price: 850,
    image: "/optimized/moon-blue pjs.jpg",
    rating: 5,
    reviews: 0,
    category: "Ladies",
    gender: "Ladies",
    isNew: true,
    isSoldOut: true,
    description: "Dreamy moonblue pajama set with celestial vibes. Perfect for stargazing and bedtime adventures.",
    thumbnails: [
      "/optimized/moon-blue pjs.jpg", // Main moonblue PJ
      "/optimized/moonblue pjs.jpg", // Moonblue PJ different angle
      "/optimized/moonbluepjz.jpg" // Moonblue PJ detail shot
    ],
    variants: [
      {
        color: "Blue",
        colorCode: "#87CEEB",
        image: "/optimized/moon-blue pjs.jpg",
        name: "Moonblue"
      }
    ],
    sizes: [
      { size: "XS", available: true, measurements: "Bust: 32-34 in, Waist: 24-26 in" },
      { size: "S", available: true, measurements: "Bust: 34-36 in, Waist: 26-28 in" },
      { size: "M", available: true, measurements: "Bust: 36-38 in, Waist: 28-30 in" },
      { size: "L", available: false, measurements: "Bust: 38-40 in, Waist: 30-32 in" },
      { size: "XL", available: false, measurements: "Bust: 40-42 in, Waist: 32-34 in" }
    ],
    defaultColor: "Blue",
    defaultSize: "S",
    productType: "pajamas"
  },
  {
    id: 32,
    name: "Moonblue PJ",
    price: 850,
    image: "/optimized/moonblue pjs.jpg",
    rating: 5,
    reviews: 0,
    category: "Little Girls",
    gender: "Little Girls",
    isNew: true,
    isSoldOut: true,
    description: "Dreamy moonblue pajama set for little girls with celestial vibes. Perfect for stargazing and bedtime adventures.",
    thumbnails: [
      "/optimized/moonblue pjs.jpg", // Main moonblue PJ
      "/optimized/moon-blue pjs.jpg", // Moonblue PJ different angle
      "/optimized/moonbluepjz.jpg" // Moonblue PJ detail shot
    ],
    variants: [
      {
        color: "Blue",
        colorCode: "#87CEEB",
        image: "/optimized/moonblue pjs.jpg",
        name: "Moonblue"
      }
    ],
    sizes: [
      { size: "2T", available: true, measurements: "Chest: 20-22 in, Waist: 19-21 in" },
      { size: "3T", available: true, measurements: "Chest: 22-24 in, Waist: 21-23 in" },
      { size: "4T", available: true, measurements: "Chest: 24-26 in, Waist: 23-25 in" },
      { size: "5T", available: false, measurements: "Chest: 26-28 in, Waist: 25-27 in" }
    ],
    defaultColor: "Blue",
    defaultSize: "3T",
    productType: "pajamas"
  },
  {
    id: 33,
    name: "Moonblue PJ",
    price: 850,
    image: "/optimized/moonbluepjz.jpg",
    rating: 5,
    reviews: 0,
    category: "Sleepwear",
    gender: "Ladies",
    isNew: true,
    isSoldOut: true,
    description: "Dreamy moonblue pajama set with celestial vibes. Perfect for stargazing and bedtime adventures.",
    thumbnails: [
      "/optimized/moonbluepjz.jpg", // Main moonblue PJ
      "/optimized/moon-blue pjs.jpg", // Moonblue PJ different angle
      "/optimized/moonblue pjs.jpg" // Moonblue PJ detail shot
    ],
    variants: [
      {
        color: "Blue",
        colorCode: "#87CEEB",
        image: "/optimized/moonbluepjz.jpg",
        name: "Moonblue"
      }
    ],
    sizes: [
      { size: "XS", available: true, measurements: "Bust: 32-34 in, Waist: 24-26 in" },
      { size: "S", available: true, measurements: "Bust: 34-36 in, Waist: 26-28 in" },
      { size: "M", available: true, measurements: "Bust: 36-38 in, Waist: 28-30 in" },
      { size: "L", available: false, measurements: "Bust: 38-40 in, Waist: 30-32 in" },
      { size: "XL", available: false, measurements: "Bust: 40-42 in, Waist: 32-34 in" }
    ],
    defaultColor: "Blue",
    defaultSize: "S",
    productType: "pajamas"
  },

  // New Mami dayjama Collection
  {
    id: 34,
    name: "Mami dayjama",
    price: 2000,
    image: "/optimized/mami-dayjama.jpg",
    rating: 5,
    reviews: 0,
    category: "Ladies",
    gender: "Ladies",
    isNew: true,
    isSoldOut: true,
    description: "Elegant dayjama set perfect for lounging or casual wear. Features beautiful details and comfortable fit.",
    thumbnails: [
      "/optimized/mami-dayjama.jpg", // Main mami dayjama
      "/optimized/mami dayjama.jpg", // Mami dayjama different angle
      "/optimized/mamidayjama.jpg" // Mami dayjama detail shot
    ],
    variants: [
      {
        color: "Blue & White Stripes",
        colorCode: "#87CEEB",
        image: "/optimized/mami-dayjama.jpg",
        name: "Classic Blue Stripes"
      },
      {
        color: "Light Blue & White Stripes",
        colorCode: "#B0E0E6",
        image: "/optimized/mami dayjama.jpg",
        name: "Light Blue Stripes"
      }
    ],
    sizes: [
      { size: "XS", available: true, measurements: "Bust: 32-34 in, Waist: 24-26 in" },
      { size: "S", available: true, measurements: "Bust: 34-36 in, Waist: 26-28 in" },
      { size: "M", available: true, measurements: "Bust: 36-38 in, Waist: 28-30 in" },
      { size: "L", available: false, measurements: "Bust: 38-40 in, Waist: 30-32 in" },
      { size: "XL", available: false, measurements: "Bust: 40-42 in, Waist: 32-34 in" }
    ],
    defaultColor: "Blue & White Stripes",
    defaultSize: "S",
    productType: "dayjama"
  },
  {
    id: 35,
    name: "Mami dayjama",
    price: 2000,
    image: "/optimized/mamidayjama.jpg",
    rating: 5,
    reviews: 0,
    category: "Little Girls",
    gender: "Little Girls",
    isNew: true,
    isSoldOut: true,
    description: "Adorable dayjama set for little girls with cute striped patterns and comfortable fit. Perfect for playtime and lounging.",
    thumbnails: [
      "/optimized/mamidayjama.jpg", // Main mami dayjama
      "/optimized/mami dayjama.jpg", // Mami dayjama different angle
      "/optimized/mami-dayjama.jpg" // Mami dayjama detail shot
    ],
    variants: [
      {
        color: "Blue & White Stripes",
        colorCode: "#87CEEB",
        image: "/optimized/mamidayjama.jpg",
        name: "Classic Blue Stripes"
      },
      {
        color: "Light Blue & White Stripes",
        colorCode: "#B0E0E6",
        image: "/optimized/mami dayjama.jpg",
        name: "Light Blue Stripes"
      }
    ],
    sizes: [
      { size: "2T", available: true, measurements: "Chest: 20-22 in, Waist: 19-21 in" },
      { size: "3T", available: true, measurements: "Chest: 22-24 in, Waist: 21-23 in" },
      { size: "4T", available: true, measurements: "Chest: 24-26 in, Waist: 23-25 in" },
      { size: "5T", available: false, measurements: "Chest: 26-28 in, Waist: 25-27 in" }
    ],
    defaultColor: "Blue & White Stripes",
    defaultSize: "3T",
    productType: "dayjama"
  },
  {
    id: 36,
    name: "Mami dayjama",
    price: 2000,
    image: "/optimized/mamo dayjama.jpg",
    rating: 5,
    reviews: 0,
    category: "Sleepwear",
    gender: "Ladies",
    isNew: true,
    isSoldOut: true,
    description: "Elegant dayjama set perfect for lounging or casual wear. Features beautiful details and comfortable fit.",
    thumbnails: [
      "/optimized/mamo dayjama.jpg", // Main mami dayjama
      "/optimized/mami dayjama.jpg", // Mami dayjama different angle
      "/optimized/mami-dayjama.jpg" // Mami dayjama detail shot
    ],
    variants: [
      {
        color: "Blue & White Stripes",
        colorCode: "#87CEEB",
        image: "/optimized/mamo dayjama.jpg",
        name: "Classic Blue Stripes"
      },
      {
        color: "Light Blue & White Stripes",
        colorCode: "#B0E0E6",
        image: "/optimized/mami dayjama.jpg",
        name: "Light Blue Stripes"
      }
    ],
    sizes: [
      { size: "XS", available: true, measurements: "Bust: 32-34 in, Waist: 24-26 in" },
      { size: "S", available: true, measurements: "Bust: 34-36 in, Waist: 26-28 in" },
      { size: "M", available: true, measurements: "Bust: 36-38 in, Waist: 28-30 in" },
      { size: "L", available: false, measurements: "Bust: 38-40 in, Waist: 30-32 in" },
      { size: "XL", available: false, measurements: "Bust: 40-42 in, Waist: 32-34 in" }
    ],
    defaultColor: "Blue & White Stripes",
    defaultSize: "S",
    productType: "dayjama"
  }
];

// Sweet Dream Collection products
export const sweetDreamProducts: SweetDreamProduct[] = [
  {
    id: 1,
    name: "",
    price: "$19.99",
    image: "/optimized/DSC08764.jpg",
    description: "Ultra-soft memory foam pillow for the perfect night's sleep",
    rating: 4.8,
  },
  {
    id: 2,
    name: "",
    price: "$29.99",
    image: "/optimized/DSC08794.jpg",
    description: "Cozy weighted blanket with celestial design",
    rating: 4.9,
  },
  {
    id: 3,
    name: "",
    price: "$24.99",
    image: "/optimized/DSC08890.jpg",
    description: "Breathable cotton pajamas for ultimate comfort",
    rating: 4.7,
  },
  {
    id: 4,
    name: "",
    price: "$34.99",
    image: "/optimized/DSC08910.jpg",
    description: "Lavender-scented pillow for relaxation",
    rating: 4.6,
  },
  {
    id: 5,
    name: "",
    price: "$39.99",
    image: "/optimized/DSC09183.jpg",
    description: "Handcrafted dream catcher for peaceful dreams",
    rating: 4.8,
  },
  {
    id: 6,
    name: "",
    price: "$27.99",
    image: "/optimized/DSC08531 (1).jpg",
    description: "Herbal tea blend for bedtime relaxation",
    rating: 4.5,
  },
  {
    id: 7,
    name: "",
    price: "$32.99",
    image: "/optimized/DSC08533 (1).jpg",
    description: "Silk sleep mask for deep rest",
    rating: 4.7,
  },
  {
    id: 8,
    name: "",
    price: "$28.99",
    image: "/optimized/DSC08537 (1).jpg",
    description: "Aromatherapy diffuser for peaceful sleep",
    rating: 4.6,
  },
  {
    id: 9,
    name: "",
    price: "$35.99",
    image: "/optimized/DSC08540 (1).jpg",
    description: "Cozy fleece blanket for winter nights",
    rating: 4.8,
  }
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
