import type { Metadata } from 'next';
import PageHero from '@/components/server/PageHero';
import InteractiveMap from '@/components/client/InteractiveMap';
import { Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Service Areas | Greater Metro Atlanta Chimney Services',
  description: 'We proudly serve Marietta, Atlanta, Alpharetta, Roswell, Sandy Springs, and 60-mile radius.',
  alternates: {
    canonical: 'https://topratedchimney.com/service-areas',
  },
};

export default function ServiceAreas() {
  const zipCodes = [
    "30060", "30062", "30064", "30066", "30067", "30068", // Marietta
    "30004", "30005", "30009", "30022", // Alpharetta/Johns Creek
    "30075", "30076", // Roswell
    "30328", "30350", "30342", "30338", // Sandy Springs/Dunwoody
    "30188", "30189", // Woodstock
    "30114", "30115", // Canton
    "30040", "30041", // Cumming
    "30269", "30270", // Peachtree City
    "30132", "30157", // Dallas
    "30080", "30082"  // Smyrna
  ];

  return (
    <>
      <PageHero
        title="Service Areas"
        subtitle="Serving the entire Greater Metro Atlanta Area within a 60-mile radius of Marietta."
        bgImage="/images/placeholder.jpg"
      />

      <InteractiveMap />

      {/* Zip Codes */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl text-center">
            <h3 className="text-2xl font-bold text-brand-black mb-8">Popular Zip Codes Served</h3>
            <div className="flex flex-wrap justify-center gap-3">
                {zipCodes.map((zip) => (
                    <span key={zip} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-mono font-medium hover:bg-brand-red hover:text-white transition-colors cursor-default">
                        {zip}
                    </span>
                ))}
            </div>
            <p className="text-sm text-gray-500 mt-6 italic">
                *Listing major service hubs. We serve all zip codes within our 60-mile operational radius.
            </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-black py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Chimney Service in North Georgia?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            From Woodstock to Peachtree City, get the 5-star safety inspection you deserve.
          </p>
          <a
            href={`tel:${COMPANY_INFO.phoneTel}`}
            className="inline-flex items-center gap-3 bg-brand-red text-white px-8 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-brand-red transition-colors shadow-lg"
          >
            <Phone size={24} />
            <span>Call {COMPANY_INFO.phoneDisplay} Now</span>
          </a>
        </div>
      </section>
    </>
  );
}
