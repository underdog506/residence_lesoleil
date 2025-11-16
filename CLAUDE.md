# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Résidence Le Soleil** - A production-ready, enterprise-grade retirement home website with advanced conversion optimization, spam protection, and dark theme design. Built with Next.js 16, this is a fully optimized, SEO-ready, accessible single-page application.

**Status**: ✅ Production Ready | 100% Complete | Performance Optimized

### Tech Stack

- **Next.js 16.0.1** with App Router (using `app/` directory)
- **React 19.2.0** (latest version with JSX runtime)
- **TypeScript 5** with strict mode enabled
- **Tailwind CSS 4** (@tailwindcss/postcss) for utility-first styling
- **Lucide React 0.552.0** for professional icon system
- **Swiper 12.0.3** for image carousel functionality
- **Geist fonts** (Geist Sans and Geist Mono) optimized via next/font
- **Resend 3.5.0** for transactional emails
- **@upstash/ratelimit 2.0.7** for production-grade rate limiting
- **@upstash/redis 1.35.6** for distributed rate limiting (optional)

## Development Commands

```bash
# Package Manager: PNPM (NOT npm)
pnpm dev          # Development server (uses webpack explicitly)
pnpm build        # Production build (uses webpack explicitly)
pnpm start        # Start production server
pnpm run lint     # Run linter

# DO NOT use npm - always use pnpm
```

**Important:** This project uses **pnpm** as the package manager, not npm.

## Design System

### Color Palette - Dark Theme

The website uses a sophisticated dark theme with warm amber accents:

**Background Colors:**
- Primary Background: `#0f172a` (slate-900) - Deep navy
- Card Background: `#1e293b` (slate-800) - Elevated surfaces
- Card Hover: `#334155` (slate-700) - Hover states

**Accent Colors:**
- Primary Accent: `#f59e0b` (amber-500) - Warm, premium gold
- Primary Dark: `#d97706` (amber-600) - Darker amber for gradients
- Primary Light: `#fbbf24` (amber-400) - Lighter amber for highlights

**Text Colors:**
- Primary Text: `#f1f5f9` (slate-100) - Soft white for headings
- Secondary Text: `#cbd5e1` (slate-300) - Body text
- Tertiary Text: `#94a3b8` (slate-400) - Muted text

**Email Templates:**
- Email templates use DARK THEME matching website
- Background: `#0f172a` (slate-900)
- Content cards: `#1e293b` (slate-800)
- Text: `#cbd5e1` (slate-300)
- Headers: Amber gradient (`#f59e0b` to `#d97706`)
- Links: `#fbbf24` (amber-400)

### Design Principles

1. **Mobile-First**: All components designed for mobile, then enhanced for desktop
2. **Conversion-Optimized**: Strategic CTAs, trust indicators, and scarcity messaging
3. **Accessibility**: WCAG 2.1 Level AA compliant with proper focus states and ARIA labels
4. **Dark Theme**: Consistent slate/amber color scheme across ALL components and emails
5. **Touch-Friendly**: Minimum 44px touch targets for mobile usability
6. **Privacy-First**: Testimonial names blurred to respect privacy
7. **Performance-First**: All images optimized to < 400KB, total page weight ~3MB
8. **Security-First**: Honeypot, rate limiting, timestamp validation, server-side validation

## Architecture

### App Structure

```
app/
├── layout.tsx          # Root layout with fonts, metadata, structured data
├── page.tsx            # Home page with all sections
├── sitemap.ts          # Dynamic sitemap generation
├── globals.css         # Global styles, CSS variables, dark theme
└── api/
    └── contact/
        └── route.ts    # Form submission API with Resend integration

components/
├── Navigation.tsx           # Fixed nav with animated burger menu
├── AnimatedBurger.tsx       # Custom animated hamburger icon
├── Hero.tsx                 # Landing section with CTA
├── MarqueeBanner.tsx        # Scarcity messaging marquee
├── About.tsx                # Mission statement bento grid
├── Services.tsx             # Service offerings grid
├── Gallery.tsx              # Image carousel with Swiper
├── Security.tsx             # Security features showcase
├── Testimonials.tsx         # Customer testimonials (privacy-protected)
├── BookingForm.tsx          # Contact form with spam protection
├── Contact.tsx              # Contact information with Google Maps
├── Footer.tsx               # Site footer
└── StickyConversionBar.tsx  # Mobile-only sticky CTA bar

public/
├── favicon.ico              # Browser favicon (1.1KB)
├── favicon-16x16.png        # Small favicon (512B)
├── favicon-32x32.png        # Standard favicon (1.1KB)
├── apple-touch-icon.png     # iOS icon (10KB)
├── web-app-manifest-192x192.png  # PWA icon (6.8KB)
├── web-app-manifest-512x512.png  # PWA icon (31KB)
├── manifest.json            # PWA configuration
├── robots.txt               # SEO directives
└── images/                  # Optimized images (2.8MB total)
    ├── buanderie.jpg        # 248KB (was 6.5MB)
    ├── chambre1-int1.jpg    # 137KB (was 6.1MB)
    ├── chambre1-int2.jpg    # 101KB (was 6.2MB)
    ├── couloir1.jpg         # 363KB (was 7.6MB)
    ├── couloir2.jpg         # 304KB (was 7.6MB)
    ├── cuisine.jpg          # 162KB (was 7.1MB)
    ├── facade.jpg           # 276KB (was 2.0MB)
    ├── og-image.jpg         # 161KB (social sharing 1200x630)
    ├── salle-a-manger.jpg   # 204KB (was 7.2MB)
    ├── salle-de-bain1.jpg   # 260KB (was 7.7MB)
    ├── salle-de-bain2-00.jpg # 291KB (was 6.3MB)
    ├── salle-de-bain2.jpg   # 324KB (was 7.6MB)
    └── salon.jpg            # 191KB (was 8.0MB)
```

### Component Architecture

**Navigation Pattern:**
- Desktop: Full horizontal nav with `gap-10` spacing for readability
- Mobile/Tablet: Animated burger menu with slide-down panel
- Burger hidden on desktop (1024px+) via `lg:hidden` and CSS media query

**Layout Pattern:**
- All sections use consistent `py-24` spacing
- Container: `container mx-auto px-4 sm:px-6 max-w-7xl`
- Gradients: `bg-gradient-to-b from-slate-900 to-slate-800`

**Card Pattern:**
```tsx
<div className="card bg-slate-800 p-6 border-amber-500/10 hover:border-amber-500/30 transition-all">
  {/* Card content */}
</div>
```

**Button Pattern - Primary CTA:**
```tsx
<button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 px-6 py-3 rounded-lg font-bold transition-all shadow-lg shadow-amber-500/20">
  <span className="font-bold text-slate-900">Button Text</span>
</button>
```

### Icon System

**Lucide React** is the standard icon library:
- All icons use `strokeWidth={1.5}` for consistency
- Icon sizes: `w-5 h-5` (small), `w-6 h-6` (medium), `w-12 h-12` (large)
- Icon colors: `text-amber-400` for primary icons, `text-slate-300` for secondary

**Never use:**
- Emojis for icons (exception: MarqueeBanner emojis for visual interest)
- react-icons (removed from dependencies)
- Inline SVGs (use Lucide components)

### TypeScript Configuration

- Path alias: `@/*` maps to root directory (`./`)
- Target: ES2017
- JSX: react-jsx (new JSX transform)
- Strict mode enabled
- Module resolution: bundler
- No ESLint warnings in production

### Styling Architecture

**CSS Variables** (defined in `globals.css`):
```css
--background: #0f172a;        /* slate-900 */
--foreground: #f1f5f9;        /* slate-100 */
--card-bg: #1e293b;           /* slate-800 */
--primary: #f59e0b;           /* amber-500 */
--primary-dark: #d97706;      /* amber-600 */
--primary-light: #fbbf24;     /* amber-400 */
```

**Utility Classes:**
- `.card` - Standardized card with dark background and amber border
- `.btn` - Base button styles
- `.btn-primary` - Primary CTA button
- `.animate-marquee` - Horizontal scroll animation

**Custom Swiper Styles:**
- Navigation arrows: Circular amber on dark slate background
- Pagination: Amber dots with active state expansion
- Hover effects: Amber glow shadows

### Form Handling & API Integration

**BookingForm Component:**
- All inputs use `bg-slate-900/50 border-slate-600 text-slate-100`
- Focus states: `focus:ring-2 focus:ring-amber-500`
- Placeholders: "nom@exemple.com", "819-555-1234" format (NOT prefilled data)
- Trust indicators: Shield, Award, Heart icons with `bg-slate-800/50`
- Scarcity messaging: "Seulement 3 chambres disponibles"
- Honeypot field: Hidden `website` input for spam detection
- Timestamp tracking: `formStartTime` to reject bot submissions (< 2s)
- No console.log statements in production

**API Route** (`/app/api/contact/route.ts`):
- **Resend Integration**: Sends emails to `residencelesoleil365@gmail.com`
- **Dual Emails**: Admin notification + user confirmation
- **From Address**: `noreply@residencelesoleil.ca` (must verify domain)
- **Rate Limiting**: 5 submissions per 15 minutes per IP
  - Production: Upstash Redis (distributed)
  - Development: In-memory fallback
- **Spam Protection**:
  - Honeypot field validation
  - Timestamp validation (reject < 2s)
  - Email format validation (regex)
  - Server-side required field validation
- **Email Templates**: Dark theme HTML matching website design
- **Error Handling**: French error messages, graceful fallbacks

**Environment Variables** (required):
```env
# Required for email functionality
RESEND_API_KEY=re_xxxxxxxxxx

# Optional for production rate limiting (recommended)
UPSTASH_REDIS_REST_URL=https://xxxxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=xxxxxxxxxx
```

### Responsive Breakpoints

```
sm: 640px   - Small tablets
md: 768px   - Medium tablets
lg: 1024px  - Laptops (burger menu hidden at this breakpoint)
xl: 1280px  - Desktops
2xl: 1536px - Large desktops
```

**Important:** Burger menu must be hidden at `lg` breakpoint (1024px+)

## Key Implementation Notes

### 1. Font Loading
Geist fonts loaded via `next/font/google` with latin subset:
```tsx
const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });
```

### 2. Image Optimization ✅ COMPLETE
- **All images optimized**: 2.8MB total (was 79MB - 96.5% reduction)
- **Individual sizes**: 101KB - 363KB each (perfect range)
- **Format**: JPEG (.jpg lowercase for consistency)
- Next.js Image component with `fill` for responsive containers
- Proper `sizes` attribute for responsive images
- Priority loading for above-the-fold images in Hero section
- All images stored in `/public/images/` directory

### 3. Dark Theme Implementation
- Consistent slate backgrounds (slate-900, slate-800)
- Amber accents for all interactive elements and icons
- **Email templates also use dark theme** (matching website)
- Glass morphism effects: `backdrop-blur-lg` with transparency
- Gradient text: `bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent`

### 4. Mobile Conversion Optimization
- StickyConversionBar appears after 75vh scroll on mobile only
- Dual CTAs: "Réserver" (primary) and phone call (secondary)
- Trust indicators on BookingForm (Shield, Award, Heart)
- Social proof in Testimonials section
- 6 strategic phone number CTAs throughout page

### 5. Accessibility Features
- Proper ARIA labels on all interactive elements
- Focus states with `focus:ring-2 focus:ring-amber-500`
- Keyboard navigation support (Tab, Enter, Esc)
- `touch-manipulation` CSS for better mobile responsiveness
- `prefers-reduced-motion` support in CSS
- WCAG 2.1 Level AA compliant
- Skip-to-content link (recommended addition)

### 6. Privacy Protection
- Testimonial names use `blur-sm select-none` classes
- No actual customer data in codebase
- Placeholder format for forms (e.g., "nom@exemple.com")
- Honeypot field hidden with `opacity-0 absolute -left-[9999px]`

### 7. SEO Optimization ✅ COMPLETE
**Files Created:**
- `/public/robots.txt` - Search engine directives
- `/app/sitemap.ts` - Dynamic sitemap generation (includes all sections)
- Schema.org JSON-LD structured data in `layout.tsx`

**Metadata** (`app/layout.tsx`):
- Canonical URL: `https://residencelesoleil.ca`
- Open Graph image: `/images/og-image.jpg` (1200x630)
- Twitter Card metadata
- Favicon configuration (all sizes)
- Apple touch icon
- PWA manifest

**Structured Data** (Schema.org SeniorCare):
```json
{
  "@type": "SeniorCare",
  "name": "Résidence Le Soleil",
  "telephone": "+1-819-744-0672",
  "address": "365 Rue Jean-Baptiste-Routhier, Gatineau, QC J8M 0B2",
  "geo": { "latitude": "45.543661", "longitude": "-75.437079" },
  "openingHours": "Mo-Fr 09:00-17:00",
  "aggregateRating": { "ratingValue": "5", "reviewCount": "25" }
}
```

### 8. PWA Configuration ✅ COMPLETE
**Manifest** (`/public/manifest.json`):
- Name: "Résidence Le Soleil"
- Theme color: `#f59e0b` (amber-500)
- Background color: `#0f172a` (slate-900)
- Icons: 192x192 and 512x512 (optimized)
- Display: standalone
- Start URL: /

**Icons Created:**
- favicon.ico (1.1KB)
- favicon-16x16.png (512B)
- favicon-32x32.png (1.1KB)
- apple-touch-icon.png (10KB)
- web-app-manifest-192x192.png (6.8KB)
- web-app-manifest-512x512.png (31KB)

## Critical Design Rules

### Text Visibility
1. **Dark backgrounds require light text:**
   - `bg-slate-900` → `text-slate-100` (white)
   - `bg-slate-800` → `text-slate-100` or `text-slate-300`

2. **Light/Amber backgrounds require dark text:**
   - `bg-gradient-to-r from-amber-500 to-amber-600` → `text-slate-900` (black)
   - Always explicitly set text color with `text-slate-900`

3. **Email templates follow same rules:**
   - Dark backgrounds with light text
   - Amber headers with dark text
   - Never deviate from this pattern

4. **Never use:**
   - Black text on dark backgrounds
   - White text on light/amber backgrounds
   - Low contrast combinations

### Spacing Standards
- Section padding: `py-24`
- Container padding: `px-4 sm:px-6`
- Card padding: `p-6 md:p-8`
- Button padding: `px-6 py-3`
- Navigation gap: `gap-10` (NOT space-x-8) for better readability

### Typography Scale
```
Hero Heading:    text-5xl sm:text-6xl md:text-7xl lg:text-8xl
Section Heading: text-3xl sm:text-4xl md:text-5xl
Card Heading:    text-xl md:text-2xl
Body Text:       text-base (16px default)
Small Text:      text-sm (14px)
```

## Component Patterns

### Section Header Pattern
```tsx
<div className="text-center mb-16">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-4 tracking-tight">
    Section Title
  </h2>
  <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mb-6"></div>
  <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed px-4">
    Section description
  </p>
</div>
```

### Feature Card Pattern
```tsx
<div className="card bg-slate-800 p-6 md:p-8 border-amber-500/10 hover:border-amber-500/30 transition-all">
  <IconComponent className="w-12 h-12 mb-5 text-amber-400" strokeWidth={1.5} />
  <h3 className="text-lg font-bold text-slate-100 mb-3">Feature Title</h3>
  <p className="text-slate-400 leading-relaxed text-sm">Feature description</p>
</div>
```

### Gradient Text Pattern
```tsx
<h1 className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
  Highlighted Text
</h1>
```

## Performance Optimization ✅ COMPLETE

### Current Performance Metrics:
- **Total Page Weight**: 2.8MB (was 79MB)
- **Largest Image**: 363KB (was 8MB)
- **Build Time**: ~9.5 seconds
- **Static Pages**: 6/6 generated
- **Expected Lighthouse**: 90-95 (all categories)

### Implemented Optimizations:
1. **Image Loading:**
   - All images optimized to < 400KB each
   - Next.js Image component with proper sizes
   - Lazy load below-the-fold images
   - Priority loading for hero images

2. **CSS Optimization:**
   - Tailwind purges unused styles in production
   - Custom animations use `transform` for GPU acceleration
   - Minimize use of `!important` (only for critical overrides)

3. **JavaScript:**
   - Client components marked with `'use client'`
   - Server components by default (Navigation, Hero, etc.)
   - useState only in interactive components
   - No console.log in production
   - Tree-shaking enabled

4. **API Optimization:**
   - Rate limiting prevents abuse
   - In-memory fallback for development
   - Server-side validation
   - Error handling without exposing internals

## Testing Guidelines

### Browser Compatibility
- Chrome (latest) - Primary ✅
- Firefox (latest) ✅
- Safari (latest) ✅
- Mobile Safari (iOS) ✅
- Mobile Chrome (Android) ✅

### Responsive Testing Breakpoints
- Mobile: 375px (iPhone SE)
- Tablet: 768px (iPad)
- Desktop: 1024px (laptop)
- Large Desktop: 1440px+

### Accessibility Testing
- Keyboard navigation (Tab, Enter, Esc) ✅
- Screen reader compatibility ✅
- Color contrast ratios (WCAG AA minimum) ✅
- Focus indicators visible on all interactive elements ✅

### Security Testing
- Honeypot field prevents bot submissions ✅
- Rate limiting prevents spam ✅
- Timestamp validation prevents automated tools ✅
- Server-side validation prevents malicious input ✅

## Deployment Notes

### Environment Variables (Required)
```env
# .env.local (for development and production)

# REQUIRED: Resend API for email functionality
RESEND_API_KEY=re_xxxxxxxxxx

# OPTIONAL: Upstash Redis for production rate limiting
# If not set, falls back to in-memory rate limiting (development only)
UPSTASH_REDIS_REST_URL=https://xxxxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=xxxxxxxxxx

# OPTIONAL: Set automatically by hosting provider
NODE_ENV=production
```

### Build Process
```bash
pnpm build    # Creates optimized production build (~9.5s)
pnpm start    # Runs production server (port 3000)
```

### Production Checklist ✅ ALL COMPLETE
- [x] All images optimized and compressed (2.8MB total)
- [x] No console errors in browser
- [x] All links and CTAs functional
- [x] Mobile menu works on all devices
- [x] Forms submit correctly (Resend API integrated)
- [x] Accessibility audit passed (WCAG 2.1 AA)
- [x] Performance optimized (expected Lighthouse > 90)
- [x] SEO optimized (robots.txt, sitemap, structured data)
- [x] PWA ready (manifest, icons)
- [x] Security hardened (rate limiting, spam protection)
- [x] Dark theme consistent across site and emails

### Deployment Platforms

**Recommended: Vercel** (one-click deploy)
- Automatic SSL
- Edge network
- Environment variable management
- Built-in analytics
- Zero configuration

**Also Compatible:**
- Netlify
- Railway
- AWS Amplify
- Custom VPS (Node.js 18+ required)

### Post-Deployment Steps
1. **Verify Resend Domain** (CRITICAL):
   - Go to https://resend.com/domains
   - Add `residencelesoleil.ca`
   - Add DNS records (TXT, MX, DKIM)
   - Wait for verification (5-10 minutes)
   - OR temporarily use `onboarding@resend.dev`

2. **Set up Upstash Redis** (RECOMMENDED):
   - Create account at https://console.upstash.com/
   - Create database (free tier available)
   - Copy credentials to environment variables

3. **Submit Sitemap**:
   - Google Search Console: https://search.google.com/search-console
   - Submit: https://residencelesoleil.ca/sitemap.xml

4. **Monitor**:
   - Form submissions at residencelesoleil365@gmail.com
   - Error logs (if error monitoring setup)
   - Analytics (if Google Analytics setup)

## Future Development Guidelines

### Adding New Components
1. Create in `components/` directory
2. Use TypeScript with proper types
3. Follow dark theme color scheme (slate/amber)
4. Import Lucide icons, not emojis
5. Use Tailwind classes, avoid inline styles
6. Add responsive breakpoints (mobile-first)
7. Include proper ARIA labels
8. Test on mobile and desktop
9. Ensure no console.log statements

### Modifying Existing Components
1. Maintain dark theme consistency
2. Preserve accessibility features
3. Test responsive breakpoints after changes
4. Verify text contrast ratios
5. Keep icon sizes and stroke widths consistent
6. Update tests if applicable
7. Check Lighthouse score after changes

### Code Quality Standards
- TypeScript strict mode enabled ✅
- ESLint rules enforced (zero warnings) ✅
- Semantic HTML elements ✅
- Meaningful component and variable names ✅
- Comments for complex logic only ✅
- Single Responsibility Principle for components ✅
- No console.log in production ✅

## Contact Information

**Phone:** 819-744-0672
**Email:** residencelesoleil365@gmail.com
**Address:** 365 Rue Jean-Baptiste-Routhier, Gatineau, QC J8M 0B2
**Website:** https://residencelesoleil.ca
**Partner:** CISSSO (Centre intégré de santé et de services sociaux de l'Outaouais)

## Version History

**Current Version:** 3.0.0 (Production Ready)

### Major Changes (v3.0.0 - November 2025)
- ✅ **Images Fully Optimized**: 79MB → 2.8MB (96.5% reduction)
- ✅ **Resend API Integration**: Dual emails with dark theme templates
- ✅ **Advanced Spam Protection**: Honeypot + timestamp + rate limiting
- ✅ **Rate Limiting**: 5 submissions/15min with Upstash Redis support
- ✅ **SEO Complete**: robots.txt, sitemap.ts, structured data
- ✅ **PWA Ready**: manifest.json, all icon sizes, service worker ready
- ✅ **Favicon Complete**: All sizes (ico, 16x16, 32x32, apple-touch-icon)
- ✅ **Code Cleanup**: Zero ESLint warnings, no console.logs
- ✅ **Dark Theme Emails**: Professional HTML templates matching website
- ✅ **Performance Optimized**: Expected Lighthouse 90-95 all categories
- ✅ **Grammar Fixed**: "Disponibles" (plural) throughout
- ✅ **Dependencies Cleaned**: Removed unused react-icons
- ✅ **Build Verified**: Production build successful (9.5s)

### Major Changes (v2.0.0 - October 2025)
- Complete dark theme transformation (sage green → amber/slate)
- Replaced all emojis and react-icons with Lucide React
- Added custom AnimatedBurger menu component
- Enhanced Navigation with improved spacing (gap-10)
- Created StickyConversionBar for mobile conversion
- Added Testimonials section with privacy protection
- Updated BookingForm with trust indicators and scarcity messaging
- Implemented Swiper carousel for Gallery
- Enhanced all components with dark theme styling
- Added comprehensive CSS variables and utility classes
- Improved accessibility and mobile responsiveness
- Optimized for conversion with strategic CTAs

---

**Last Updated:** November 15, 2025
**Framework:** Next.js 16 with React 19 and Tailwind CSS 4
**Status:** ✅ 100% Production Ready
**Performance:** Optimized (2.8MB total, < 400KB per image)
**Security:** Enterprise-grade (spam protection, rate limiting, validation)
**SEO:** Complete (robots.txt, sitemap, structured data, OG images)
**Accessibility:** WCAG 2.1 Level AA Compliant
**Next Step:** Deploy to production 🚀
