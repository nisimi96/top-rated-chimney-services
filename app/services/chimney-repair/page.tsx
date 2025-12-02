import type { Metadata } from 'next';
import Script from 'next/script';
import PageHero from '@/components/server/PageHero';
import Location from '@/components/server/Location';
import { Phone, Hammer, Droplets, Construction, BrickWall, AlertTriangle, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';
import { serviceSchema, breadcrumbSchema } from '@/lib/schemas';

const serviceData = {
  name: 'Chimney Repair',
  description: 'Expert chimney repair, masonry work, tuckpointing, and crown rebuilding. Professional restoration and leak resolution for Atlanta & North GA.',
};

const breadcrumbs = [
  { name: 'Home', url: 'https://topratedchimney.com/' },
  { name: 'Services', url: 'https://topratedchimney.com/services/' },
  { name: 'Chimney Repair', url: 'https://topratedchimney.com/services/chimney-repair/' },
];

export const metadata: Metadata = {
  title: 'Chimney Repair & Masonry | Atlanta & North GA',
  description: serviceData.description,
  keywords: ['chimney repair', 'masonry repair', 'tuckpointing', 'Atlanta chimney repair', 'crown rebuilding'],
  alternates: {
    canonical: 'https://topratedchimney.com/services/chimney-repair/',
  },
  openGraph: {
    title: 'Expert Chimney Repair & Masonry | Atlanta',
    description: serviceData.description,
    url: 'https://topratedchimney.com/services/chimney-repair/',
    siteName: 'Top Rated Chimney Services',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://topratedchimney.com/og-service-repair.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional chimney repair and masonry work in Atlanta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Chimney Repair | Atlanta',
    description: serviceData.description,
    images: ['https://topratedchimney.com/og-service-repair.jpg'],
  },
};

export default function ChimneyRepair() {
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
        title="Chimney Repair & Masonry"
        subtitle="Expert restoration, leak resolution, and structural repairs for Atlanta & North GA."
        bgImage="/images/fireplace-image.webp"
      />

      <section className="py-12 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16 lg:mb-24">
            {/* Main content */}
            <div className="lg:col-span-2">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-black mb-6 lg:mb-8 leading-tight">
                Expert Chimney Masonry Repair in Atlanta & North GA
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8 leading-relaxed">
                Weather, age, and usage take a toll on your chimney. At {COMPANY_INFO.name}, we specialize in restoring the structural integrity and beauty of your chimney. From fixing minor mortar cracks to complete rebuilds, our masonry experts serve homeowners across the greater Atlanta area.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 lg:mb-12 leading-relaxed">
                <strong>Water is your chimney's worst enemy.</strong> If you notice damp walls near your fireplace, white staining (efflorescence) on the bricks, or pieces of mortar in your firebox, you likely need professional repair. Ignoring these signs can lead to costly structural damage.
              </p>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-16 lg:mb-24">
                {/* Service 1: Leak Repair */}
                <div className="bg-gray-50 p-6 lg:p-8 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mb-4 lg:mb-6">
                    <Droplets className="text-blue-600" size={28} />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-brand-black mb-3 lg:mb-4">Chimney Leak Repair</h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                    We stop water intrusion at the source. This includes replacing rusted flashing, applying industrial-grade waterproofing agents, and repairing the chimney shoulder.
                  </p>
                </div>

                {/* Service 2: Crown Replacement */}
                <div className="bg-gray-50 p-6 lg:p-8 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="bg-orange-100 w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mb-4 lg:mb-6">
                    <Construction className="text-orange-600" size={28} />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-brand-black mb-3 lg:mb-4">Crown Repair & Replacement</h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                    The concrete crown at the top of your chimney prevents water from entering the flue. We repair cracks or pour entirely new concrete floating crowns for long-lasting protection.
                  </p>
                </div>

                {/* Service 3: Tuckpointing */}
                <div className="bg-gray-50 p-6 lg:p-8 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="bg-red-100 w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mb-4 lg:mb-6">
                    <BrickWall className="text-brand-red" size={28} />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-brand-black mb-3 lg:mb-4">Tuckpointing Services</h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                    Crumbling mortar joints? We grind out the damaged mortar and replace it with fresh compound, restoring the strength and aesthetic of your brickwork.
                  </p>
                </div>

                {/* Service 4: Firebox Repair */}
                <div className="bg-gray-50 p-6 lg:p-8 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="bg-gray-200 w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mb-4 lg:mb-6">
                    <Hammer className="text-gray-700" size={28} />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-brand-black mb-3 lg:mb-4">Firebox Rebuilding</h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                    The area where you burn wood takes extreme heat abuse. We repair loose firebricks and use refractory mortar to ensure your firebox is safe and code-compliant.
                  </p>
                </div>
              </div>

              {/* Warning Signs Section */}
              <div className="bg-brand-black text-white p-8 lg:p-10 rounded-xl lg:rounded-2xl">
                <div className="flex items-center gap-3 lg:gap-4 mb-6 lg:mb-8">
                  <AlertTriangle className="text-brand-red flex-shrink-0" size={36} />
                  <h3 className="text-2xl lg:text-3xl font-bold">Signs You Need Repair</h3>
                </div>
                <ul className="space-y-4 lg:space-y-5">
                  <li className="flex items-start gap-3 lg:gap-4">
                    <ArrowRight className="text-brand-red mt-1 shrink-0" size={22} />
                    <span className="text-base lg:text-lg text-gray-300">Rusted damper or firebox components.</span>
                  </li>
                  <li className="flex items-start gap-3 lg:gap-4">
                    <ArrowRight className="text-brand-red mt-1 shrink-0" size={22} />
                    <span className="text-base lg:text-lg text-gray-300">Spalling bricks (face of the brick popping off).</span>
                  </li>
                  <li className="flex items-start gap-3 lg:gap-4">
                    <ArrowRight className="text-brand-red mt-1 shrink-0" size={22} />
                    <span className="text-base lg:text-lg text-gray-300">White staining (efflorescence) on the chimney exterior.</span>
                  </li>
                  <li className="flex items-start gap-3 lg:gap-4">
                    <ArrowRight className="text-brand-red mt-1 shrink-0" size={22} />
                    <span className="text-base lg:text-lg text-gray-300">Visible cracks in the chimney crown or mortar joints.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Call to Action Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white border-2 lg:border-4 border-brand-red rounded-xl lg:rounded-2xl shadow-lg lg:shadow-2xl p-6 lg:p-10 sticky top-20 lg:top-24">
                <h3 className="text-2xl lg:text-3xl font-bold text-brand-black mb-4 lg:mb-6 text-center">Get a Repair Quote</h3>
                <p className="text-sm lg:text-base text-gray-600 mb-6 lg:mb-8 leading-relaxed text-center">
                  Structural issues do not get better with time. Call us for a professional assessment.
                </p>
                <a
                  href={`tel:${COMPANY_INFO.phoneTel}`}
                  className="flex items-center justify-center gap-2 lg:gap-3 bg-brand-red text-white px-6 lg:px-8 py-4 lg:py-5 rounded-lg lg:rounded-xl font-bold text-base lg:text-lg hover:bg-red-700 active:scale-95 transition-all w-full mb-4 lg:mb-6 shadow-md hover:shadow-lg"
                >
                  <Phone size={24} />
                  <span>Call {COMPANY_INFO.phoneDisplay}</span>
                </a>
                <p className="text-xs lg:text-sm text-gray-500 text-center leading-relaxed mb-6 lg:mb-8">
                  Licensed & Insured for your protection.
                </p>

                <div className="pt-6 lg:pt-8 border-t border-gray-200">
                  <h4 className="font-bold text-brand-black mb-4 lg:mb-5 text-center text-sm lg:text-base">Service Areas Include:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['Marietta', 'Atlanta', 'Sandy Springs', 'Roswell', 'Smyrna', 'Kennesaw', 'Alpharetta', 'Cumming', 'Woodstock'].map(city => (
                      <span key={city} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-brand-red hover:text-white transition-colors">
                        {city}
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
