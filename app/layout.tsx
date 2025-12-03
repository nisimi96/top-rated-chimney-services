import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/client/Header';
import Footer from '@/components/server/Footer';
import FloatingCTA from '@/components/client/FloatingCTA';
import { localBusinessSchema } from '@/lib/schemas';
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
  icons: {
    icon: '/favicon-32x32.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName: 'Top Rated Chimney Services',
    locale: 'en_US',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#E31837',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-red selection:text-white flex flex-col">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-50 focus:bg-brand-red focus:text-white focus:px-4 focus:py-2"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="grow">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
