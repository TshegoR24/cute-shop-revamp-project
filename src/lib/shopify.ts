import Client from 'shopify-buy';

// Initialize Shopify client
const client = Client.buildClient({
  domain: 'allthingscut8.shop',
  storefrontAccessToken: '9e70582428de3466cab37b697333de10'
});

export default client;

// Helper functions for Shopify integration
export const shopifyHelpers = {
  // Fetch all products
  async getAllProducts() {
    try {
      const products = await client.product.fetchAll();
      return products;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  },

  // Fetch a single product by ID
  async getProduct(id: string) {
    try {
      const product = await client.product.fetch(id);
      return product;
    } catch (error) {
      console.error('Error fetching product:', error);
      return null;
    }
  },

  // Create a checkout
  async createCheckout(lineItems: any[]) {
    try {
      const checkout = await client.checkout.create({
        lineItems: lineItems
      });
      return checkout;
    } catch (error) {
      console.error('Error creating checkout:', error);
      return null;
    }
  },

  // Create checkout with product variants (proper implementation)
  async createCheckoutWithVariants(cartItems: any[]) {
    try {
      // First, we need to fetch products from Shopify to get proper variant IDs
      const products = await this.getAllProducts();
      console.log('🔍 Shopify products found:', products.length);
      console.log('🔍 Shopify product names:', products.map(p => p.title));
      console.log('🔍 Cart items:', cartItems.map(item => item.name));
      
      if (products.length === 0) {
        throw new Error('No products found in Shopify store');
      }
      
      // Map local cart items to Shopify variants
      const lineItems = cartItems.map(cartItem => {
        console.log(`🔍 Looking for match for: "${cartItem.name}"`);
        
        // Find matching product in Shopify with more flexible matching
        const shopifyProduct = products.find(p => {
          const shopifyTitle = p.title.toLowerCase();
          const cartName = cartItem.name.toLowerCase();
          
          console.log(`🔍 Comparing: "${shopifyTitle}" vs "${cartName}"`);
          
          // Try multiple matching strategies
          const matches = shopifyTitle.includes(cartName) ||
                 cartName.includes(shopifyTitle) ||
                 shopifyTitle.includes('bow tie') && cartName.includes('bow tie') ||
                 shopifyTitle.includes('moonblue') && cartName.includes('moonblue') ||
                 shopifyTitle.includes('belle') && cartName.includes('belle') ||
                 shopifyTitle.includes('hearts') && cartName.includes('hearts') ||
                 // More flexible matching
                 (shopifyTitle.includes('pj') && cartName.includes('pj')) ||
                 (shopifyTitle.includes('dayjama') && cartName.includes('dayjama'));
          
          console.log(`🔍 Match result: ${matches}`);
          return matches;
        });
        
        if (shopifyProduct && shopifyProduct.variants && shopifyProduct.variants.length > 0) {
          console.log(`✅ Found match: ${shopifyProduct.title}`);
          return {
            variantId: shopifyProduct.variants[0].id,
            quantity: cartItem.quantity
          };
        }
        
        console.log(`❌ No match found for: ${cartItem.name}`);
        // If no exact match, try to use the first available product as fallback
        if (products.length > 0 && products[0].variants && products[0].variants.length > 0) {
          console.log(`🔄 Using fallback product: ${products[0].title}`);
          return {
            variantId: products[0].variants[0].id,
            quantity: cartItem.quantity
          };
        }
        
        return null;
      }).filter(item => item !== null);

      console.log('🔍 Final line items:', lineItems);

      if (lineItems.length === 0) {
        throw new Error('No matching products found in Shopify store');
      }

      const checkout = await client.checkout.create({
        lineItems: lineItems
      });
      
      console.log('✅ Checkout created successfully:', checkout.webUrl);
      return checkout;
    } catch (error) {
      console.error('Error creating checkout with variants:', error);
      return null;
    }
  },

  // Add item to cart
  async addToCart(checkoutId: string, lineItems: any[]) {
    try {
      const checkout = await client.checkout.addLineItems(checkoutId, lineItems);
      return checkout;
    } catch (error) {
      console.error('Error adding to cart:', error);
      return null;
    }
  }
};
