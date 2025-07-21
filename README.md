# All Things Cute - Nightwear E-commerce Website

A beautiful, modern e-commerce website for "All Things Cute" - a nightwear brand specializing in cozy sleepwear for ladies, little girls, and little boys.

## 🌸 Project Overview

**All Things Cute** is a dreamy, pastel-themed nightwear e-commerce website built with React, TypeScript, and Tailwind CSS. The website features a stunning 4K video background, custom animations, and a responsive design perfect for showcasing adorable nightwear collections.

### Key Features
- ✨ **4K Video Hero Section** - Dreamy veil video background
- 🎨 **Custom Pastel Color Palette** - Soft, dreamy colors
- 📱 **Mobile-Optimized** - Device-specific video loading
- 🛍️ **E-commerce Ready** - Product pages, cart functionality
- 🌟 **Custom Animations** - Floating elements and smooth transitions
- 🎯 **Responsive Design** - Works perfectly on all devices

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cute-shop-revamp-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

## 🎨 Design System

### Color Palette
The website uses a custom pastel color palette inspired by [Coolors](https://coolors.co/palette/cdb4db-ffc8dd-ffafcc-bde0fe-a2d2ff):

- **Soft Lavender** (`#cdb4db`) - Primary color
- **Light Pink** (`#ffc8dd`) - Secondary color  
- **Deeper Pink** (`#ffafcc`) - Muted backgrounds
- **Light Blue** (`#bde0fe`) - Accent color
- **Sky Blue** (`#a2d2ff`) - Border colors

### Typography
- **Font Family**: System fonts with elegant styling
- **Font Weights**: Light (300) for headings, Normal (400) for body text
- **Tracking**: Wide letter spacing for elegant appearance

### Animations
- **Floating Elements**: Gentle up-and-down motion
- **Sparkle Effects**: Twinkling animations
- **Hover Transitions**: Smooth 200ms color transitions
- **Video Loading**: Graceful fallbacks with animated backgrounds

## 📁 Project Structure

```
cute-shop-revamp-project/
├── public/
│   ├── 1113242_Front_view_Veil_3840x2160.mp4    # 4K Desktop Video
│   ├── 7509446-hd_1066_1920_25fps.mp4          # Mobile Video
│   └── placeholder.svg                           # Fallback Image
├── src/
│   ├── components/
│   │   ├── ui/                                  # Shadcn UI Components
│   │   ├── Header.tsx                           # Navigation Bar
│   │   ├── Hero.tsx                            # Video Hero Section
│   │   ├── Logo.tsx                            # Brand Logo
│   │   ├── ProductGrid.tsx                     # Product Display
│   │   ├── ProductCard.tsx                     # Individual Products
│   │   ├── FeaturesSection.tsx                 # Trust Features
│   │   ├── TestimonialsSection.tsx             # Customer Reviews
│   │   ├── NewsletterSection.tsx               # Email Signup
│   │   └── Footer.tsx                          # Site Footer
│   ├── pages/
│   │   ├── Index.tsx                           # Home Page
│   │   ├── ProductDetail.tsx                   # Product Pages
│   │   └── NotFound.tsx                        # 404 Page
│   ├── hooks/                                  # Custom React Hooks
│   ├── lib/                                    # Utility Functions
│   ├── App.tsx                                 # Main App Component
│   ├── main.tsx                                # Entry Point
│   └── index.css                               # Global Styles
├── tailwind.config.ts                          # Tailwind Configuration
├── package.json                                # Dependencies
└── README.md                                   # This File
```

## 🎬 Video Implementation

### Video Files
- **Desktop Video**: `1113242_Front_view_Veil_3840x2160.mp4` (4K, 6.3MB)
- **Mobile Video**: `7509446-hd_1066_1920_25fps.mp4` (HD, 10MB)

### Video Features
- **Auto-play**: Videos start automatically
- **Loop**: Continuous playback
- **Muted**: Required for mobile autoplay
- **Responsive**: Device-specific video loading
- **Fallback**: Animated gradient if video fails

### Mobile Optimization
- Smaller file size for faster loading
- Lower resolution for mobile screens
- Reduced data usage
- Better browser compatibility

## 🛍️ E-commerce Features

### Product Categories
- **Ladies**: Elegant sleepwear and loungewear
- **Little Girls**: Princess and unicorn-themed pajamas
- **Little Boys**: Dinosaur and space-themed pajamas
- **Sleepwear**: All nightwear items
- **Loungewear**: Comfortable home wear

### Product Features
- **Product Grid**: Filterable product display
- **Product Details**: Individual product pages
- **Size Selection**: XS, S, M, L, XL
- **Color Options**: Pink, Blue, Lavender, Mint
- **Reviews & Ratings**: Customer feedback system
- **Wishlist**: Save favorite items

### Shopping Features
- **Shopping Cart**: Add/remove items
- **Quantity Selection**: Adjust item quantities
- **Secure Checkout**: Payment processing ready
- **Free Shipping**: Promotional messaging
- **Easy Returns**: 30-day return policy

## 🎨 Custom Components

### Logo Component
- **Animated Heart**: Pulsing heart icon
- **Sparkle Effect**: Twinkling sparkle animation
- **Brand Typography**: "All Things" + "Cute" styling
- **Responsive Design**: Scales on all devices

### Navigation
- **Custom Hover Colors**: 
  - Little Boys → Blue
  - Ladies/Little Girls → Pink
  - Other categories → Lavender
- **Active States**: Color-coded selected categories
- **Mobile Menu**: Responsive hamburger menu

### Hero Section
- **4K Video Background**: Dreamy veil video
- **Animated Elements**: Floating emojis and stars
- **Call-to-Action**: "Shop Nightwear" buttons
- **Trust Indicators**: Free shipping, quality guarantee

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Environment Variables
Create a `.env` file for any API keys or configuration:
```env
VITE_API_URL=your_api_url_here
VITE_STRIPE_PUBLIC_KEY=your_stripe_key_here
```

### Recommended Hosting
- **Vercel**: Excellent for React apps
- **Netlify**: Great for static sites
- **Firebase**: Good for full-stack apps
- **AWS S3**: For static hosting

## 🛠️ Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

### Adding New Features
1. **New Components**: Create in `src/components/`
2. **New Pages**: Add to `src/pages/` and update routes
3. **Styling**: Use Tailwind classes or add to `src/index.css`
4. **Animations**: Add keyframes to `src/index.css`

### Customization
- **Colors**: Update CSS variables in `src/index.css`
- **Fonts**: Modify typography in Tailwind config
- **Animations**: Add new keyframes to CSS
- **Video**: Replace video files in `public/` folder

## 📱 Mobile Optimization

### Performance Features
- **Device Detection**: Automatic mobile/desktop detection
- **Optimized Videos**: Smaller files for mobile
- **Touch-Friendly**: Large buttons and touch targets
- **Fast Loading**: Optimized images and assets

### Mobile-Specific Features
- **Hamburger Menu**: Collapsible navigation
- **Touch Gestures**: Swipe-friendly interactions
- **Responsive Images**: Optimized for mobile screens
- **Reduced Animations**: Better performance on mobile

## 🎯 SEO & Performance

### SEO Features
- **Meta Tags**: Proper title and description tags
- **Structured Data**: Product schema markup
- **Fast Loading**: Optimized assets and lazy loading
- **Mobile-Friendly**: Responsive design

### Performance Optimizations
- **Video Optimization**: Compressed video files
- **Image Optimization**: WebP format support
- **Code Splitting**: Lazy-loaded components
- **Caching**: Browser caching strategies

## 🔧 Troubleshooting

### Common Issues

**Video Not Playing**
- Check browser console for errors
- Ensure video files are in `public/` folder
- Verify video format is MP4
- Check mobile autoplay restrictions

**Styling Issues**
- Clear browser cache
- Check Tailwind CSS compilation
- Verify CSS variables are defined
- Check for conflicting styles

**Mobile Issues**
- Test on different mobile devices
- Check responsive breakpoints
- Verify touch interactions
- Test mobile video loading

### Debug Mode
Enable debug logging by checking browser console for:
- Video loading messages
- Mobile detection logs
- Error messages
- Performance metrics

## 🤝 Contributing

### Development Guidelines
1. **Code Style**: Follow existing patterns
2. **Component Structure**: Use functional components with hooks
3. **Styling**: Use Tailwind CSS classes
4. **Testing**: Test on multiple devices and browsers

### Adding Features
1. **Create Component**: Add new component files
2. **Update Routes**: Add new pages to routing
3. **Style Consistently**: Use design system colors
4. **Test Thoroughly**: Test on mobile and desktop

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Shadcn UI**: Beautiful component library
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide Icons**: Beautiful icon set
- **Coolors**: Color palette inspiration
- **Pexels/Pixabay**: Video and image resources

## 📞 Support

For questions or support:
- **Email**: support@allthingscute.com
- **Instagram**: [@allthingscut8](https://www.instagram.com/allthingscut8)
- **Website**: [All Things Cute](https://allthingscute.com)

---

**Made with ❤️ for All Things Cute** 🌸✨
