// Shopify GraphQL API configuration
const SHOPIFY_DOMAIN = import.meta.env.VITE_SHOPIFY_DOMAIN;
const SHOPIFY_TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const SHOPIFY_API_URL = `https://${SHOPIFY_DOMAIN}.myshopify.com/api/2024-01/graphql.json`;

console.log('🔧 Shopify Configuration:');
console.log('  - Domain:', SHOPIFY_DOMAIN);
console.log('  - Token:', SHOPIFY_TOKEN ? 'Set' : 'Missing');
console.log('  - API URL:', SHOPIFY_API_URL);
console.log('  - Environment:', import.meta.env.MODE);
console.log('  - All env vars:', {
  VITE_SHOPIFY_DOMAIN: import.meta.env.VITE_SHOPIFY_DOMAIN,
  VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN: import.meta.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN
});

// Helper function to make GraphQL requests
async function shopifyFetch(query: string, variables: any = {}) {
  console.log('🔍 Making GraphQL request to:', SHOPIFY_API_URL);
  console.log('🔍 Request headers:', {
    'Content-Type': 'application/json',
    'X-Shopify-Storefront-Access-Token': SHOPIFY_TOKEN ? 'Set' : 'Missing'
  });
  
  const response = await fetch(SHOPIFY_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_TOKEN
    },
    body: JSON.stringify({
      query,
      variables
    })
  });

  console.log('🔍 Response status:', response.status);
  console.log('🔍 Response ok:', response.ok);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  
  if (data.errors) {
    console.error('❌ GraphQL errors:', data.errors);
    throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`);
  }

  return data;
}

// Helper functions for Shopify integration
export const shopifyHelpers = {
  // Test Shopify connection
  async testConnection() {
    try {
      console.log('🔍 Testing Shopify connection...');
      const response = await shopifyFetch('{ shop { name } }');
      console.log('✅ Shopify connection test successful');
      return true;
    } catch (error) {
      console.error('❌ Shopify connection test error:', error);
      return false;
    }
  },

  // Fetch all products using GraphQL
  async getAllProducts() {
    try {
      console.log('🔍 Fetching products from Shopify...');
      
      const query = `
        query getProducts($first: Int!) {
          products(first: $first) {
            edges {
              node {
                id
                title
                handle
                variants(first: 10) {
                  edges {
                    node {
                      id
                      title
                      price {
                        amount
                        currencyCode
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `;
      
      const response = await shopifyFetch(query, { first: 50 });
      const products = response.data.products.edges.map((edge: any) => ({
        id: edge.node.id,
        title: edge.node.title,
        handle: edge.node.handle,
        variants: edge.node.variants.edges.map((variantEdge: any) => ({
          id: variantEdge.node.id,
          title: variantEdge.node.title,
          price: variantEdge.node.price
        }))
      }));
      
      console.log('✅ Products fetched successfully:', products.length);
      return products;
    } catch (error) {
      console.error('❌ Error fetching products:', error);
      console.error('❌ Error details:', error.message);
      return [];
    }
  },

  // Fetch a single product by ID using GraphQL
  async getProduct(id: string) {
    try {
      const query = `
        query getProduct($id: ID!) {
          product(id: $id) {
            id
            title
            handle
            variants(first: 10) {
              edges {
                node {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      `;
      
      const response = await shopifyFetch(query, { id });
      return response.data.product;
    } catch (error) {
      console.error('Error fetching product:', error);
      return null;
    }
  },

  // Create checkout with product variants using GraphQL
  async createCheckoutWithVariants(cartItems: any[]) {
    try {
      console.log('🔍 Creating checkout with GraphQL...');
      
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
            merchandiseId: shopifyProduct.variants[0].id,
            quantity: cartItem.quantity
          };
        }
        
        console.log(`❌ No match found for: ${cartItem.name}`);
        // If no exact match, try to use the first available product as fallback
        if (products.length > 0 && products[0].variants && products[0].variants.length > 0) {
          console.log(`🔄 Using fallback product: ${products[0].title}`);
          return {
            merchandiseId: products[0].variants[0].id,
            quantity: cartItem.quantity
          };
        }
        
        return null;
      }).filter(item => item !== null);

      console.log('🔍 Final line items:', lineItems);

      if (lineItems.length === 0) {
        throw new Error('No matching products found in Shopify store');
      }

      // Create cart using Storefront API (Storefront API doesn't have checkoutCreate)
      const cartCreateMutation = `
        mutation cartCreate($input: CartInput!) {
          cartCreate(input: $input) {
            cart {
              id
              checkoutUrl
              totalQuantity
              cost {
                totalAmount {
                  amount
                  currencyCode
                }
              }
            }
            userErrors {
              field
              message
            }
          }
        }
      `;

      const input = {
        lines: lineItems
      };

      console.log('🔍 Creating cart with input:', input);
      const response = await shopifyFetch(cartCreateMutation, { input });
      
      if (response.data.cartCreate.userErrors.length > 0) {
        throw new Error(`Cart errors: ${JSON.stringify(response.data.cartCreate.userErrors)}`);
      }

      const cart = response.data.cartCreate.cart;
      
      console.log('✅ Cart created successfully:');
      console.log('  - Cart ID:', cart.id);
      console.log('  - Checkout URL:', cart.checkoutUrl);
      console.log('  - Total Price:', cart.cost.totalAmount);
      
      return {
        id: cart.id,
        webUrl: cart.checkoutUrl,
        totalPrice: cart.cost.totalAmount
      };
    } catch (error) {
      console.error('Error creating checkout with variants:', error);
      return null;
    }
  },

};
