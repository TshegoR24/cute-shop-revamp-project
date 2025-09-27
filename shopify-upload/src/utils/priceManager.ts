import { allProducts, updateProductPrice, getProductById } from '@/data/products';

/**
 * Price Management Utility
 * 
 * This utility provides easy functions to manage product prices across the entire website.
 * All price changes are centralized and will be reflected everywhere automatically.
 */

export interface PriceUpdate {
  id: number;
  newPrice: number;
  originalPrice?: number;
}

/**
 * Update a single product's price
 */
export const updatePrice = (id: number, newPrice: number, originalPrice?: number): boolean => {
  const product = getProductById(id);
  if (!product) {
    console.error(`Product with ID ${id} not found`);
    return false;
  }
  
  updateProductPrice(id, newPrice, originalPrice);
  console.log(`Updated product ${id}: ${product.price} → ${newPrice}`);
  return true;
};

/**
 * Update multiple product prices at once
 */
export const updateMultiplePrices = (updates: PriceUpdate[]): { success: number; failed: number } => {
  let success = 0;
  let failed = 0;
  
  updates.forEach(update => {
    if (updatePrice(update.id, update.newPrice, update.originalPrice)) {
      success++;
    } else {
      failed++;
    }
  });
  
  return { success, failed };
};

/**
 * Get current price of a product
 */
export const getCurrentPrice = (id: number): number | null => {
  const product = getProductById(id);
  return product ? product.price : null;
};

/**
 * Get all products with their current prices
 */
export const getAllProductPrices = () => {
  return allProducts.map(product => ({
    id: product.id,
    name: product.name || `Product ${product.id}`,
    currentPrice: product.price,
    originalPrice: product.originalPrice,
    category: product.category,
    image: product.image
  }));
};

/**
 * Find products by price range
 */
export const getProductsByPriceRange = (minPrice: number, maxPrice: number) => {
  return allProducts.filter(product => 
    product.price >= minPrice && product.price <= maxPrice
  );
};

/**
 * Apply percentage discount to a product
 */
export const applyDiscount = (id: number, discountPercentage: number): boolean => {
  const product = getProductById(id);
  if (!product) {
    console.error(`Product with ID ${id} not found`);
    return false;
  }
  
  const originalPrice = product.price;
  const newPrice = originalPrice * (1 - discountPercentage / 100);
  
  updateProductPrice(id, Math.round(newPrice * 100) / 100, originalPrice);
  console.log(`Applied ${discountPercentage}% discount to product ${id}: ${originalPrice} → ${newPrice}`);
  return true;
};

/**
 * Apply percentage increase to a product
 */
export const applyPriceIncrease = (id: number, increasePercentage: number): boolean => {
  const product = getProductById(id);
  if (!product) {
    console.error(`Product with ID ${id} not found`);
    return false;
  }
  
  const currentPrice = product.price;
  const newPrice = currentPrice * (1 + increasePercentage / 100);
  
  updateProductPrice(id, Math.round(newPrice * 100) / 100);
  console.log(`Applied ${increasePercentage}% increase to product ${id}: ${currentPrice} → ${newPrice}`);
  return true;
};

/**
 * Bulk update prices by category
 */
export const updatePricesByCategory = (category: string, priceMultiplier: number): number => {
  const categoryProducts = allProducts.filter(product => product.category === category);
  let updated = 0;
  
  categoryProducts.forEach(product => {
    const newPrice = Math.round(product.price * priceMultiplier * 100) / 100;
    updateProductPrice(product.id, newPrice);
    updated++;
  });
  
  console.log(`Updated ${updated} products in ${category} category with ${priceMultiplier}x multiplier`);
  return updated;
};

// Example usage functions (commented out)
/*
// Example 1: Update a single product price
updatePrice(1, 999.99, 1299.99);

// Example 2: Update multiple products
updateMultiplePrices([
  { id: 1, newPrice: 899.99, originalPrice: 1199.99 },
  { id: 2, newPrice: 799.99 },
  { id: 3, newPrice: 1099.99, originalPrice: 1399.99 }
]);

// Example 3: Apply 20% discount
applyDiscount(1, 20);

// Example 4: Apply 15% price increase
applyPriceIncrease(2, 15);

// Example 5: Update all Ladies category products by 1.1x
updatePricesByCategory('Ladies', 1.1);

// Example 6: Get all current prices
const allPrices = getAllProductPrices();
console.log(allPrices);
*/
