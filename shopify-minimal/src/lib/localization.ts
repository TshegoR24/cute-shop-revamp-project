export type Locale = 'ng' | 'za';

export interface LocalizationConfig {
  locale: Locale;
  currency: {
    code: string;
    symbol: string;
    position: 'before' | 'after';
  };
  language: {
    code: string;
    name: string;
  };
  region: {
    name: string;
    flag: string;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  shipping: {
    freeThreshold: number;
    deliveryTime: string;
  };
  payment: {
    methods: string[];
  };
}

export const localizationConfigs: Record<Locale, LocalizationConfig> = {
  ng: {
    locale: 'ng',
    currency: {
      code: 'NGN',
      symbol: '₦',
      position: 'before'
    },
    language: {
      code: 'en',
      name: 'English'
    },
    region: {
      name: 'Nigeria',
      flag: '🇳🇬'
    },
    contact: {
      phone: '0749747975',
      email: 'allthingscute@icloud.com',
      address: 'Cape Town'
    },
    shipping: {
      freeThreshold: 50000, // ₦50,000
      deliveryTime: '3-5 business days'
    },
    payment: {
      methods: ['Paystack', 'Flutterwave', 'Bank Transfer', 'Cash on Delivery']
    }
  },
  za: {
    locale: 'za',
    currency: {
      code: 'ZAR',
      symbol: 'R',
      position: 'before'
    },
    language: {
      code: 'en',
      name: 'English'
    },
    region: {
      name: 'South Africa',
      flag: '🇿🇦'
    },
    contact: {
      phone: '0749747975',
      email: 'allthingscute@icloud.com',
      address: 'Cape Town'
    },
    shipping: {
      freeThreshold: 1000, // R1,000
      deliveryTime: '2-4 business days'
    },
    payment: {
      methods: ['PayFast', 'SnapScan', 'EFT', 'Credit Card', 'Cash on Delivery']
    }
  }
};

export const formatCurrency = (amount: number, locale: Locale): string => {
  const config = localizationConfigs[locale];
  
  // Convert Rand to Naira for Nigeria (1 Rand = 25 Naira)
  const convertedAmount = locale === 'ng' ? amount * 25 : amount;
  
  const formattedAmount = convertedAmount.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  
  return config.currency.position === 'before' 
    ? `${config.currency.symbol}${formattedAmount}`
    : `${formattedAmount}${config.currency.symbol}`;
};

export const getLocalizedText = (key: string, locale: Locale): string => {
  const texts: Record<string, Record<Locale, string>> = {
    'hero.title': {
      ng: 'Sweet Dreams Begin Here',
      za: 'Sweet Dreams Begin Here'
    },
    'hero.subtitle': {
      ng: 'Discover adorable nightwear for the whole family. From cozy pajamas to cute sleepwear, make bedtime the sweetest part of the day.',
      za: 'Discover adorable nightwear for the whole family. From cozy pajamas to cute sleepwear, make bedtime the sweetest part of the day.'
    },
    'hero.cta.primary': {
      ng: 'Shop Nightwear',
      za: 'Shop Nightwear'
    },
    'hero.cta.secondary': {
      ng: 'View Collections',
      za: 'View Collections'
    },
    'trust.freeShipping': {
      ng: 'Free Shipping',
      za: 'Free Shipping'
    },
    'trust.qualityGuaranteed': {
      ng: 'Quality Guaranteed',
      za: 'Quality Guaranteed'
    },
    'trust.secureCheckout': {
      ng: 'Secure Checkout',
      za: 'Secure Checkout'
    },
    'footer.brandName': {
      ng: 'All Things Cute',
      za: 'All Things Cute'
    },
    'footer.brandDescription': {
      ng: 'Cozy nightwear that brings sweet dreams to life. Each piece is designed with comfort and cuteness in mind.',
      za: 'Cozy nightwear that brings sweet dreams to life. Each piece is designed with comfort and cuteness in mind.'
    },
    'footer.quickLinks': {
      ng: 'Quick Links',
      za: 'Quick Links'
    },
    'footer.customerService': {
      ng: 'Customer Service',
      za: 'Customer Service'
    },
    'footer.getInTouch': {
      ng: 'Get In Touch',
      za: 'Get In Touch'
    },
    'footer.stayUpdated': {
      ng: 'Stay Updated',
      za: 'Stay Updated'
    },
    'footer.newsletterPlaceholder': {
      ng: 'Your email',
      za: 'Your email'
    },
    'footer.join': {
      ng: 'Join',
      za: 'Join'
    },
    'footer.craftedWith': {
      ng: 'Crafted with love for sweet dreams',
      za: 'Crafted with love for sweet dreams'
    }
  };
  
  return texts[key]?.[locale] || key;
}; 