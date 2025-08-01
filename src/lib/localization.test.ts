import { formatCurrency, getLocalizedText, localizationConfigs } from './localization';

// Simple test functions to verify localization works correctly
export const testLocalization = () => {
  console.log('🧪 Testing Localization System...\n');

  // Test currency formatting
  console.log('💰 Currency Formatting Tests:');
  console.log('Nigeria (₦25,000):', formatCurrency(25000, 'ng'));
  console.log('South Africa (R25,000):', formatCurrency(25000, 'za'));
  console.log('Nigeria (₦1,500,000):', formatCurrency(1500000, 'ng'));
  console.log('South Africa (R1,500,000):', formatCurrency(1500000, 'za'));

  // Test text localization
  console.log('\n📝 Text Localization Tests:');
  console.log('Hero Title (NG):', getLocalizedText('hero.title', 'ng'));
  console.log('Hero Title (ZA):', getLocalizedText('hero.title', 'za'));
  console.log('Free Shipping (NG):', getLocalizedText('trust.freeShipping', 'ng'));
  console.log('Free Shipping (ZA):', getLocalizedText('trust.freeShipping', 'za'));

  // Test configuration
  console.log('\n⚙️ Configuration Tests:');
  console.log('Nigeria Config:', {
    currency: localizationConfigs.ng.currency,
    region: localizationConfigs.ng.region,
    paymentMethods: localizationConfigs.ng.payment.methods,
    shipping: localizationConfigs.ng.shipping
  });
  console.log('South Africa Config:', {
    currency: localizationConfigs.za.currency,
    region: localizationConfigs.za.region,
    paymentMethods: localizationConfigs.za.payment.methods,
    shipping: localizationConfigs.za.shipping
  });

  console.log('\n✅ Localization tests completed!');
};

// Test welcome messages
export const testWelcomeMessages = () => {
  console.log('\n🎉 Welcome Message Tests:');
  
  const ngWelcome = {
    title: 'Welcome to Nigeria! 🇳🇬',
    subtitle: 'Free shipping on orders over ₦50,000. Pay with Paystack, Flutterwave, or Cash on Delivery.',
    highlight: 'Local delivery in 3-5 business days'
  };
  
  const zaWelcome = {
    title: 'Welcome to South Africa! 🇿🇦',
    subtitle: 'Free shipping on orders over R1,000. Pay with PayFast, SnapScan, or EFT.',
    highlight: 'Local delivery in 2-4 business days'
  };

  console.log('Nigeria Welcome:', ngWelcome);
  console.log('South Africa Welcome:', zaWelcome);
};

// Run tests if this file is executed directly
if (typeof window !== 'undefined') {
  // Only run in browser environment
  setTimeout(() => {
    testLocalization();
    testWelcomeMessages();
  }, 1000);
} 