# Migration Plan: Vite + React to Next.js 15 with Tailwind CSS (Static Export)

## Overview

This plan outlines the migration of the Top Rated Chimney Services website from a Vite + React SPA to a modern Next.js 15 static application with App Router and proper Tailwind CSS setup.

**Current Stack:**
- Vite + React 19.2.0
- React Router DOM (HashRouter)
- Tailwind CSS (via CDN)
- TypeScript
- Lucide React icons

**Target Stack:**
- Next.js 15 (App Router with Static Export)
- React 19
- Tailwind CSS (proper setup)
- TypeScript
- Self-hosted images

**Application Characteristics:**
- 9 pages (all static content)
- 9 components (3 client, 6 server capable)
- No API calls needed
- Heavy local SEO focus for Metro Atlanta area
- Deploy to Hostinger or customer's choice of hosting
- All images self-hosted in project

---

## Phase 1: Project Setup & Dependencies

### 1.1 Install Dependencies

```bash
# Install Next.js and core dependencies
npm install next@latest react@latest react-dom@latest

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install TypeScript types
npm install -D @types/react @types/node typescript

# Remove Vite dependencies
npm uninstall vite @vitejs/plugin-react react-router-dom
```

**Note:** TanStack Query is NOT needed since there are no API calls or data fetching requirements.

### 1.2 Update package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

## Phase 2: Directory Structure Setup

### 2.1 Create Next.js Directory Structure

```
src/
├── app/
│   ├── layout.tsx                          # Root layout
│   ├── page.tsx                            # Home page
│   ├── about/page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   ├── chimney-sweeping/page.tsx
│   │   ├── chimney-repair/page.tsx
│   │   ├── chimney-inspection/page.tsx
│   │   ├── cap-installation/page.tsx
│   │   └── gas-logs/page.tsx
│   └── service-areas/page.tsx
├── components/
│   ├── client/                             # 'use client' components
│   │   ├── Header.tsx
│   │   └── FloatingCTA.tsx
│   └── server/                             # Server components (default)
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── TrustBar.tsx
│       ├── Location.tsx
│       ├── PageHero.tsx
│       └── Footer.tsx
├── lib/
│   ├── constants.ts
│   └── types.ts
└── styles/
    └── globals.css
public/
├── images/                                 # Self-hosted images folder
│   ├── hero-bg.jpg
│   ├── logo.png
│   └── (other downloaded images)
└── videos/                                 # Self-hosted videos folder
    └── (video files if needed)
```

### 2.2 Move Existing Files

1. Move `constants.ts` → `src/lib/constants.ts`
2. Move `types.ts` → `src/lib/types.ts`
3. Move components to `src/components/client/` or `src/components/server/`
4. Migrate pages to `src/app/` structure

---

## Phase 3: Configuration Files

### 3.1 Create next.config.ts

```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',  // Enable static export for hosting on Hostinger
  images: {
    unoptimized: true,  // Required for static export
  },
  reactStrictMode: true,
  trailingSlash: true,  // Better compatibility with static hosting
};

export default nextConfig;
```

**Note:**
- `output: 'export'` generates a static site in the `out/` folder
- `images: { unoptimized: true }` is required for static export (Next.js Image still works but without optimization)
- All images will be self-hosted in `public/images/` folder

### 3.2 Update tailwind.config.ts

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#E31837',
          black: '#000000',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
```

### 3.3 Create postcss.config.mjs

```javascript
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
```

### 3.4 Update tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### 3.5 Create src/styles/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## Phase 4: Core Layout

### 4.1 Create Root Layout

**File:** `src/app/layout.tsx`

```typescript
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/client/Header';
import Footer from '@/components/server/Footer';
import FloatingCTA from '@/components/client/FloatingCTA';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Top Rated Chimney Services | Marietta, GA',
    template: '%s | Top Rated Chimney Services',
  },
  description: 'Expert Chimney Services in Marietta & Atlanta. Call 770-799-6264 for inspections, sweeping, and repairs. Top Rated, Licensed & Insured.',
  themeColor: '#E31837',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-red selection:text-white flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
```

---

## Phase 5: Component Migration

### 5.1 Client Components (Add 'use client' directive)

#### Header.tsx
**Location:** `src/components/client/Header.tsx`

**Changes:**
1. Add `'use client'` at the top
2. Change `import { Link } from 'react-router-dom'` → `import Link from 'next/link'`
3. Change all `to=` props → `href=`
4. Update import: `@/lib/constants`

#### FloatingCTA.tsx
**Location:** `src/components/client/FloatingCTA.tsx`

**Changes:**
1. Add `'use client'` at the top
2. Update import: `@/lib/constants`

### 5.2 Server Components (No directive needed)

Move these to `src/components/server/` and update imports to `@/lib/constants`:
- Hero.tsx
- Services.tsx
- TrustBar.tsx
- Location.tsx
- PageHero.tsx
- Footer.tsx

Replace React Router `Link` with Next.js `Link`:
- Change `import { Link } from 'react-router-dom'` → `import Link from 'next/link'`
- Change `to=` → `href=`

### 5.3 Remove ScrollToTop Component

Delete `components/ScrollToTop.tsx` - Next.js handles this automatically.

---

## Phase 6: Page Migration to App Router

### 6.1 Page Migration Pattern

For each page, follow this pattern:

1. Create the page file in the appropriate `app/` directory
2. Add metadata export for SEO
3. Copy component content from `pages/` directory
4. Update imports to use `@/components/` paths
5. Replace React Router `Link` with Next.js `Link`

### 6.2 Metadata Template

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
  alternates: {
    canonical: 'https://topratedchimney.com/page-url',
  },
  openGraph: {
    title: 'Page Title',
    description: 'Page description',
    url: 'https://topratedchimney.com/page-url',
    siteName: 'Top Rated Chimney Services',
    locale: 'en_US',
    type: 'website',
  },
};
```

### 6.3 Pages to Migrate

1. **Home:** `pages/Home.tsx` → `src/app/page.tsx`
   - Title: "Top Rated Chimney Services | Marietta, GA"

2. **About:** `pages/About.tsx` → `src/app/about/page.tsx`
   - Title: "About Us | Top Rated Chimney Services"

3. **Services Index:** `pages/ServicesIndex.tsx` → `src/app/services/page.tsx`
   - Title: "Professional Chimney Services | Cleaning, Repair & Inspection"

4. **Chimney Sweeping:** `pages/Sweeping.tsx` → `src/app/services/chimney-sweeping/page.tsx`
   - Title: "Professional Chimney Sweeping | Metro Atlanta"

5. **Chimney Repair:** `pages/Repairs.tsx` → `src/app/services/chimney-repair/page.tsx`
   - Title: "Chimney Repair & Masonry | Atlanta & North GA"

6. **Chimney Inspection:** `pages/Inspections.tsx` → `src/app/services/chimney-inspection/page.tsx`
   - Title: "Chimney Inspections Atlanta | Level 1, 2 & 3"

7. **Cap Installation:** `pages/CapInstallation.tsx` → `src/app/services/cap-installation/page.tsx`
   - Title: "Chimney Caps & Chase Covers | Marietta & Atlanta"

8. **Gas Logs:** `pages/GasLogs.tsx` → `src/app/services/gas-logs/page.tsx`
   - Title: "Gas Log Installation & Repair | Marietta GA"

9. **Service Areas:** `pages/ServiceAreas.tsx` → `src/app/service-areas/page.tsx`
   - Title: "Service Areas | Greater Metro Atlanta Chimney Services"

---

## Phase 7: Image Setup & Optimization

### 7.1 Download and Organize Images

**Create folders:**
```bash
mkdir public/images
mkdir public/videos
```

**Download all images from:**
- Current Unsplash URLs in components
- Current Pexels video URLs
- Any other external media

**Place downloaded files in:**
- `public/images/` for all image files
- `public/videos/` for all video files

### 7.2 Replace img tags with Next.js Image

**Before:**
```tsx
<img src="https://images.unsplash.com/photo-..." alt="Chimney" className="h-64" />
```

**After:**
```tsx
import Image from 'next/image';

<Image src="/images/chimney.jpg" alt="Chimney" width={800} height={600} className="h-64" />
```

**Note:** With static export and `unoptimized: true`, images still use Next.js Image component but without server-side optimization.

---

## Phase 8: Build & Deployment Preparation

### 8.1 Build the Static Site

```bash
npm run build
```

This creates an `out/` folder with your static website.

### 8.2 Test Static Build Locally

```bash
# Serve the out folder locally (install serve if needed)
npx serve out
```

Visit `http://localhost:3000` to test the static build.

### 8.3 Deploy to Hostinger

**Upload the `out/` folder contents to your hosting:**
1. Build the site: `npm run build`
2. Upload all files from the `out/` folder to your web hosting root directory
3. Ensure `.htaccess` or server config supports SPA routing if needed

**Note:** The `out/` folder contains the complete static website ready for deployment.

---

## Phase 9: Cleanup

### 9.1 Delete Old Files

- `index.html`
- `index.tsx`
- `App.tsx`
- `vite.config.ts`
- `pages/` directory
- Root `components/` directory
- Root `constants.ts` and `types.ts`

### 9.2 Remove Unused Environment Variables

Remove or update `.env.local`:
- Remove `GEMINI_API_KEY` (not needed)
- Keep any other necessary variables

### 9.3 Update .gitignore

Add Next.js entries:
```
# Next.js
/.next/
/out/

# Dependencies
/node_modules

# Environment
.env
.env.local
.env.production
```

---

## Implementation Checklist

### Setup Phase
- [ ] Backup project (Git commit)
- [ ] Install Next.js dependencies
- [ ] Install Tailwind CSS
- [ ] Remove Vite dependencies
- [ ] Create directory structure
- [ ] Create `public/images` and `public/videos` folders
- [ ] Download all external images/videos to local folders

### Configuration Phase
- [ ] Create `next.config.ts`
- [ ] Create `tailwind.config.ts`
- [ ] Create `postcss.config.mjs`
- [ ] Update `tsconfig.json`
- [ ] Create `globals.css`

### Core Setup Phase
- [ ] Move `constants.ts` and `types.ts` to `src/lib/`
- [ ] Create root `layout.tsx`
- [ ] Migrate client components (Header, FloatingCTA)
- [ ] Migrate server components
- [ ] Delete ScrollToTop component

### Page Migration Phase
- [ ] Migrate Home page with metadata
- [ ] Migrate About page with metadata
- [ ] Migrate Services index with metadata
- [ ] Migrate all 5 service pages with metadata
- [ ] Migrate Service Areas page with metadata
- [ ] Update all Link components
- [ ] Update all component imports

### Image Migration Phase
- [ ] Replace all external image URLs with local paths (`/images/...`)
- [ ] Replace img tags with Next.js Image component
- [ ] Add proper width/height to all images
- [ ] Add priority prop to above-fold images

### Testing Phase
- [ ] Test development server (`npm run dev`)
- [ ] Verify all routes work
- [ ] Test mobile menu functionality
- [ ] Test FloatingCTA scroll behavior
- [ ] Test Header scroll state
- [ ] Verify all internal links
- [ ] Test production build (`npm run build`)
- [ ] Run Lighthouse audit

### Build & Deploy Phase
- [ ] Run `npm run build` to generate static site
- [ ] Test static build with `npx serve out`
- [ ] Verify all pages and routes in static build
- [ ] Upload `out/` folder contents to Hostinger

### Cleanup Phase
- [ ] Delete old Vite files
- [ ] Delete old pages directory
- [ ] Delete old components directory
- [ ] Remove GEMINI_API_KEY from .env.local
- [ ] Update .gitignore

---

## Key Benefits

1. **SEO Improvements:**
   - Proper URLs (no hash routing)
   - Built-in metadata API
   - Automatic sitemap generation
   - Better crawlability

2. **Performance:**
   - Automatic code splitting
   - Image optimization
   - Font optimization
   - Static site generation

3. **Developer Experience:**
   - File-based routing
   - Server/client component model
   - Built-in TypeScript support
   - Hot module replacement

4. **Static Export Benefits:**
   - Can host anywhere (Hostinger, Netlify, GitHub Pages, etc.)
   - No server requirements
   - Fast, secure, and cost-effective
   - Easy deployment (just upload `out/` folder)

---

## Critical Files Reference

1. **src/app/layout.tsx** - Root layout foundation
2. **src/components/client/Header.tsx** - Most complex client component
3. **next.config.ts** - Core configuration
4. **tailwind.config.ts** - Styling configuration
5. **src/app/page.tsx** - Home page template for other pages
