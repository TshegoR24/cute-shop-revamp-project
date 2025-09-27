# Price Management Guide

## Overview

Your website now has a centralized price management system that makes it easy to update product prices across the entire site. All price changes are reflected automatically everywhere.

## How to Change Prices

### Method 1: Direct Edit (Recommended for single changes)

1. Open `src/data/products.ts`
2. Find the product you want to update
3. Change the `price` value
4. Optionally update `originalPrice` for sale items
5. Save the file

**Example:**
```typescript
{
  id: 1,
  name: "",
  price: 999.99,        // ← Change this
  originalPrice: 1299.99, // ← And this if it's on sale
  image: "/DSC08764.jpg",
  // ... rest of product data
}
```

### Method 2: Using the Price Manager Utility

For bulk changes or programmatic updates, use the price manager:

```typescript
import { updatePrice, updateMultiplePrices, applyDiscount } from '@/utils/priceManager';

// Update a single product
updatePrice(1, 999.99, 1299.99);

// Update multiple products
updateMultiplePrices([
  { id: 1, newPrice: 899.99, originalPrice: 1199.99 },
  { id: 2, newPrice: 799.99 },
  { id: 3, newPrice: 1099.99, originalPrice: 1399.99 }
]);

// Apply 20% discount
applyDiscount(1, 20);
```

## Current Product Structure

### Ladies Collection (IDs 1-10)
- ID 1: ₦850 (was ₦99.99) - **SALE**
- ID 2: ₦850
- ID 3: ₦1100 (was ₦119.99) - **SALE**
- ID 4: ₦750 - **NEW**
- ID 5: ₦150
- ID 6: ₦75
- ID 7: ₦95.99 (was ₦125.99) - **SALE**
- ID 8: ₦350 (Key Chainz)
- ID 9: ₦85.99 - **NEW**
- ID 10: ₦680 - **NEW**

### Little Girls Collection (IDs 11-20)
- ID 11: ₦2000 - **NEW**
- ID 12: ₦650 (was ₦44.99) - **SALE**
- ID 13: ₦800
- ID 14: ₦39.99
- ID 15: ₦29.99
- ID 16: ₦550 - **NEW**
- ID 17: ₦2000
- ID 18: ₦35.99
- ID 19: ₦42.99 - **NEW**
- ID 20: ₦450

### Sleepwear Collection (IDs 21-30)
- ID 21: ₦45.99
- ID 22: ₦69.99
- ID 23: ₦24.99
- ID 24: ₦89.99
- ID 25: ₦55.99
- ID 26: ₦42.99
- ID 27: ₦38.99
- ID 28: ₦65.99 - **NEW**
- ID 29: ₦920 (was ₦129.99) - **SALE**
- ID 30: ₦380

## Quick Price Update Examples

### Example 1: Update Product ID 1 to ₦999
```typescript
// In src/data/products.ts, find:
{
  id: 1,
  price: 850,  // Change to 999
  // ...
}
```

### Example 2: Put Product ID 2 on Sale
```typescript
// In src/data/products.ts, find:
{
  id: 2,
  price: 850,           // Keep current price
  originalPrice: 1100,  // Add this line
  isSale: true,         // Add this line
  // ...
}
```

### Example 3: Apply 20% Discount to All Ladies Products
```typescript
// In browser console or a script:
import { updatePricesByCategory } from '@/utils/priceManager';
updatePricesByCategory('Ladies', 0.8); // 0.8 = 20% discount
```

## Important Notes

1. **All changes are automatic** - No need to restart the server
2. **Currency formatting** - Prices are automatically formatted based on the user's region (₦ for Nigeria, R for South Africa)
3. **Sale badges** - Set `isSale: true` and `originalPrice` to show sale pricing
4. **New badges** - Set `isNew: true` to show "New" badge
5. **Backup** - Always backup your data before making bulk changes

## Troubleshooting

### Price not updating?
1. Check the product ID exists
2. Verify the file is saved
3. Refresh the browser
4. Check browser console for errors

### Sale price not showing?
1. Ensure `isSale: true` is set
2. Ensure `originalPrice` is higher than `price`
3. Check that both values are numbers

### Currency not displaying correctly?
1. Check the user's region setting
2. Verify the localization configuration in `src/lib/localization.ts`

## Support

If you encounter any issues with price management, check:
1. Browser console for errors
2. The product data structure in `src/data/products.ts`
3. The price manager utility in `src/utils/priceManager.ts`
