# Cute Shop - Multi-Region E-commerce Platform

A beautiful, modern e-commerce website designed specifically for the Nigerian and South African markets, featuring comprehensive localization, regional payment methods, and culturally adapted shopping experiences.

## 🌍 Multi-Region Support

### Nigeria 🇳🇬
- **Currency**: ₦ NGN (Naira)
- **Payment Methods**: Paystack, Flutterwave, Bank Transfer, Cash on Delivery
- **Shipping**: Free on orders over ₦50,000, 3-5 business days delivery
- **Contact**: +234 1 234 5678, hello@velaa.ng

### South Africa 🇿🇦
- **Currency**: R ZAR (Rand)
- **Payment Methods**: PayFast, SnapScan, EFT, Credit Card, Cash on Delivery
- **Shipping**: Free on orders over R1,000, 2-4 business days delivery
- **Contact**: +27 11 234 5678, hello@velaa.co.za

## ✨ Features

### 🎨 Modern Design
- Beautiful, responsive UI with smooth animations
- Video hero section with fallback animations
- Elegant typography and spacing
- Mobile-first design approach

### 🌐 Localization System
- **Dynamic Currency Display**: Automatic formatting for ₦ and R
- **Regional Content**: Country-specific welcome messages and information
- **Payment Integration**: Local payment gateway support
- **Shipping Information**: Region-specific delivery times and thresholds

### 🛍️ E-commerce Features
- Product grid with hover effects
- Wishlist functionality
- Shopping cart with badge indicators
- Product categories and filtering
- Responsive product cards

### 📱 User Experience
- Smooth transitions and animations
- Intuitive navigation
- Region selector in header
- Welcome banner with local information
- Regional payment method display

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd cute-shop-revamp-project

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
npm run build
npm run preview
```

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── ui/            # Shadcn/ui components
│   ├── Header.tsx     # Navigation with locale selector
│   ├── Hero.tsx       # Video hero section
│   ├── ProductCard.tsx # Product display component
│   ├── Footer.tsx     # Site footer with contact info
│   ├── LocaleSelector.tsx # Region switching component
│   ├── WelcomeBanner.tsx # Regional welcome messages
│   └── RegionalInfo.tsx # Payment/shipping information
├── contexts/
│   └── LocaleContext.tsx # Localization state management
├── lib/
│   ├── localization.ts # Localization configuration
│   └── utils.ts       # Utility functions
└── pages/
    ├── Index.tsx      # Home page
    ├── ProductDetail.tsx # Product detail page
    └── NotFound.tsx   # 404 page
```

## 🛠️ Technology Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Shadcn/ui
- **Routing**: React Router v6
- **State Management**: React Context API
- **Build Tool**: Vite
- **Package Manager**: npm

## 🎯 Key Components

### LocaleSelector
Allows users to switch between Nigerian and South African markets with visual indicators (flags, currency codes).

### WelcomeBanner
Displays region-specific welcome messages with local shipping and payment information.

### RegionalInfo
Shows payment methods, shipping thresholds, and delivery times specific to each region.

### ProductCard
Displays products with localized currency formatting and regional pricing.

## 🔧 Configuration

### Adding New Regions
1. Add locale configuration in `src/lib/localization.ts`
2. Update text localization in `getLocalizedText` function
3. Add welcome message in `WelcomeBanner` component
4. Test currency formatting and payment methods

### Customizing Regional Content
- Modify `localizationConfigs` for region-specific settings
- Update component text in the localization function
- Test across all supported regions

## 📊 Localization Features

### Currency Formatting
```typescript
const { formatCurrency } = useLocale();
const price = formatCurrency(25000); // ₦25,000 or R25,000
```

### Text Localization
```typescript
const { getText } = useLocale();
const title = getText('hero.title'); // "Sweet Dreams Begin Here"
```

### Regional Configuration
```typescript
const { config } = useLocale();
const paymentMethods = config.payment.methods; // Array of payment methods
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] Switch between Nigeria and South Africa locales
- [ ] Verify currency formatting (₦ vs R)
- [ ] Check payment methods display correctly
- [ ] Confirm shipping thresholds show proper amounts
- [ ] Test contact information updates
- [ ] Verify welcome banner messages
- [ ] Check localStorage persistence
- [ ] Test responsive design on mobile

### Development Testing
The app includes built-in localization tests that run in development mode. Check the browser console for test results.

## 🚀 Deployment

### Build Process
```bash
npm run build
```

### Environment Variables
- `VITE_API_URL`: Backend API URL
- `VITE_STRIPE_PUBLIC_KEY`: Stripe public key (if using)
- `VITE_PAYSTACK_PUBLIC_KEY`: Paystack public key (Nigeria)
- `VITE_PAYFAST_PUBLIC_KEY`: PayFast public key (South Africa)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly across both regions
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support or questions about the localization system, please refer to the [LOCALIZATION.md](./LOCALIZATION.md) file for detailed documentation.

---

*Built with ❤️ for the Nigerian and South African markets*
