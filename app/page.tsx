import type { Metadata } from 'next';
import Hero from '@/components/server/Hero';
import TrustBar from '@/components/server/TrustBar';
import Services from '@/components/server/Services';
import Location from '@/components/server/Location';

export const metadata: Metadata = {
  title: 'Top Rated Chimney Services | Marietta, GA - Inspections, Sweeping & Repairs',
  description: 'Expert Chimney Services in Marietta & Atlanta. Call 770-799-6264 for professional inspections, sweeping, and repairs. Top Rated, Licensed & Insured.',
  keywords: ['chimney services', 'chimney sweep', 'Marietta GA', 'Atlanta chimney repair', 'chimney inspection'],
  openGraph: {
    title: 'Top Rated Chimney Services | Marietta, GA',
    description: 'Expert Chimney Services in Marietta & Atlanta. Call 770-799-6264 for inspections, sweeping, and repairs.',
    url: 'https://topratedchimney.com/',
    siteName: 'Top Rated Chimney Services',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />

      {/* Urgent CTA Break */}
      <section className="bg-brand-red py-12 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Worried about your chimney safety?</h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">Don't wait until smoke fills your living room. Our schedule fills up fast during the season.</p>
          <a href="tel:7707996264" className="inline-block bg-white text-brand-red px-10 py-4 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors shadow-lg">
            Book Inspection Now
          </a>
        </div>
      </section>

      <Location />
    </>
  );
}
