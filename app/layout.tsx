import type { Metadata, Viewport } from 'next';
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
      <body suppressHydrationWarning className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-red selection:text-white flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
