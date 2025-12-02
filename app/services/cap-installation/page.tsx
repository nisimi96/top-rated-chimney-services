import type { Metadata } from 'next';
import Script from 'next/script';
import PageHero from '@/components/server/PageHero';
import Location from '@/components/server/Location';
import { Phone, Umbrella, Cat, ShieldCheck, CloudRain, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';
import { serviceSchema, breadcrumbSchema } from '@/lib/schemas';

const serviceData = {
  name: 'Chimney Cap Installation',
  description: 'High-quality stainless steel chimney cap installation. Protect your home from water damage, animals, and debris with professional cap and chase cover installation.',
};

const breadcrumbs = [
  { name: 'Home', url: 'https://topratedchimney.com/' },
  { name: 'Services', url: 'https://topratedchimney.com/services/' },
  { name: 'Cap Installation', url: 'https://topratedchimney.com/services/cap-installation/' },
];

export const metadata: Metadata = {
  title: 'Chimney Caps & Chase Covers | Marietta & Atlanta Installation',
  description: serviceData.description,
  keywords: ['chimney cap installation', 'chase cover', 'stainless steel chimney cap', 'Atlanta chimney cap', 'animal prevention'],
  alternates: {
    canonical: 'https://topratedchimney.com/services/cap-installation/',
  },
  openGraph: {
    title: 'Chimney Cap & Chase Cover Installation | Atlanta',
    description: serviceData.description,
    url: 'https://topratedchimney.com/services/cap-installation/',
    siteName: 'Top Rated Chimney Services',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://topratedchimney.com/og-service-caps.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional chimney cap installation in Atlanta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chimney Cap Installation | Atlanta',
    description: serviceData.description,
    images: ['https://topratedchimney.com/og-service-caps.jpg'],
  },
};

export default function CapInstallation() {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema(serviceData.name, serviceData.description)),
        }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
        }}
      />
      <PageHero
        title="Chimney Caps & Chase Covers"
        subtitle="Protect your home from water damage and wildlife with high-quality stainless steel installations."
        bgImage="/images/fireplace-image.webp"
      />

      <section className="py-12 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16 lg:mb-24">
            {/* Main content */}
            <div className="lg:col-span-2">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-black mb-6 lg:mb-8 leading-tight">
                Expert Chimney Cap Installation in Atlanta and Up to 60 Miles Away
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8 leading-relaxed">
                A chimney without a cap is like a house without a roof. It's an open hole directly into your home. At {COMPANY_INFO.name}, we install premium custom-fitted chimney caps and chase covers that provide the ultimate defense against the elements.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 lg:mb-12 leading-relaxed">
                Water is the primary cause of chimney deterioration. Rainwater mixing with soot creates a corrosive acid that eats away at mortar joints and flue liners. A high-quality stainless steel cap is the most cost-effective investment you can make to extend the life of your chimney.
              </p>

              {/* The 3 Dangers */}
              <h3 className="text-3xl lg:text-4xl font-bold text-brand-black mb-10 lg:mb-14">3 Reasons You Need a Chimney Cap</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-24">
                <div className="bg-blue-50 p-6 lg:p-8 rounded-xl border border-blue-100">
                  <CloudRain className="text-blue-500 mb-4 lg:mb-6" size={36} />
                  <h4 className="font-bold text-lg lg:text-xl text-brand-black mb-3 lg:mb-4">Block Rain</h4>
                  <p className="text-sm lg:text-base text-gray-700 leading-relaxed">Prevents water from entering the flue, rusting dampers, and damaging the firebox.</p>
                </div>
                <div className="bg-orange-50 p-6 lg:p-8 rounded-xl border border-orange-100">
                  <Cat className="text-orange-500 mb-4 lg:mb-6" size={36} />
                  <h4 className="font-bold text-lg lg:text-xl text-brand-black mb-3 lg:mb-4">Stop Animals</h4>
                  <p className="text-sm lg:text-base text-gray-700 leading-relaxed">Keeps out birds, squirrels, and raccoons looking for a nesting spot.</p>
                </div>
                <div className="bg-red-50 p-6 lg:p-8 rounded-xl border border-red-100">
                  <ShieldCheck className="text-brand-red mb-4 lg:mb-6" size={36} />
                  <h4 className="font-bold text-lg lg:text-xl text-brand-black mb-3 lg:mb-4">Spark Arrestor</h4>
                  <p className="text-sm lg:text-base text-gray-700 leading-relaxed">Mesh sides prevent hot embers from flying out and igniting your roof or trees.</p>
                </div>
              </div>

              {/* Chase Covers vs Caps */}
              <div className="bg-gray-50 rounded-xl lg:rounded-2xl p-6 lg:p-10 mb-16 lg:mb-24 border-l-4 lg:border-l-8 border-brand-black">
                <h3 className="text-2xl lg:text-3xl font-bold text-brand-black mb-4 lg:mb-6">Chase Covers vs. Caps</h3>
                <p className="text-base lg:text-lg text-gray-700 mb-4 lg:mb-5 leading-relaxed">
                  <strong>Chimney Caps</strong> are installed on masonry chimneys (brick).
                </p>
                <p className="text-base lg:text-lg text-gray-700 mb-6 lg:mb-8 leading-relaxed">
                  <strong>Chase Covers</strong> are for prefabricated fireplaces (wood/siding chimneys). Builders often install cheap galvanized steel covers that rust and leak after a few years.
                </p>
                <p className="text-base lg:text-lg text-gray-900 font-bold leading-relaxed">
                  We replace rusted chase covers with custom-fabricated Stainless Steel covers that carry a Lifetime Warranty against rust.
                </p>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-brand-black mb-8 lg:mb-12">Our Material Options</h3>
              <ul className="space-y-4 lg:space-y-6 mb-8">
                <li className="flex items-start gap-3 lg:gap-4">
                  <ArrowRight className="text-brand-red mt-1 shrink-0" size={24} />
                  <div>
                    <strong className="text-base lg:text-lg text-brand-black">Stainless Steel:</strong>
                    <span className="text-base lg:text-lg text-gray-700"> The industry standard. Durable, rust-resistant, and looks great forever. Most popular choice.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 lg:gap-4">
                  <ArrowRight className="text-brand-red mt-1 shrink-0" size={24} />
                  <div>
                    <strong className="text-base lg:text-lg text-brand-black">Copper:</strong>
                    <span className="text-base lg:text-lg text-gray-700"> For a premium aesthetic. Copper patinas over time to a beautiful green, adding character to historic homes.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 lg:gap-4">
                  <ArrowRight className="text-brand-red mt-1 shrink-0" size={24} />
                  <div>
                    <strong className="text-base lg:text-lg text-brand-black">Black Galvanized:</strong>
                    <span className="text-base lg:text-lg text-gray-700"> Powder-coated finish for a sleek, modern look that matches dark trim.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Call to Action Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white border-2 lg:border-4 border-brand-red rounded-xl lg:rounded-2xl shadow-lg lg:shadow-2xl p-6 lg:p-10 sticky top-20 lg:top-24">
                <div className="flex justify-center mb-4 lg:mb-6">
                  <Umbrella size={52} className="text-brand-red" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-brand-black mb-4 lg:mb-6 text-center">Stop The Leaks</h3>
                <p className="text-sm lg:text-base text-gray-600 text-center mb-6 lg:mb-8 leading-relaxed">
                  Not sure if you need a cap or a chase cover? We inspect the top of your chimney for you.
                </p>

                <a
                  href={`tel:${COMPANY_INFO.phoneTel}`}
                  className="flex items-center justify-center gap-2 lg:gap-3 bg-brand-red text-white px-6 lg:px-8 py-4 lg:py-5 rounded-lg lg:rounded-xl font-bold text-base lg:text-lg hover:bg-red-700 active:scale-95 transition-all w-full mb-4 lg:mb-6 shadow-md hover:shadow-lg"
                >
                  <Phone size={24} />
                  <span>Call {COMPANY_INFO.phoneDisplay}</span>
                </a>
                <p className="text-xs lg:text-sm text-gray-500 text-center leading-relaxed mb-6 lg:mb-8">
                  Custom sizes available for any chimney.
                </p>

                <div className="pt-6 lg:pt-8 border-t border-gray-200">
                  <h4 className="font-bold text-brand-black mb-4 lg:mb-5 text-center text-sm lg:text-base">We Install:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['Single Flue Caps', 'Multi-Flue Caps', 'Chase Covers', 'Top-Sealing Dampers'].map(item => (
                      <span key={item} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-bold hover:bg-brand-red hover:text-white transition-colors">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Location />
    </>
  );
}
