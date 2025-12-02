import type { Metadata } from 'next';
import Script from 'next/script';
import PageHero from '@/components/server/PageHero';
import Location from '@/components/server/Location';
import { Phone, Search, FileCheck, Home, AlertOctagon, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';
import { serviceSchema, breadcrumbSchema } from '@/lib/schemas';

const serviceData = {
  name: 'Chimney Inspection',
  description: 'NFPA 211 compliant chimney inspections using advanced camera technology. Level 1, 2, & 3 inspections perfect for real estate transactions and annual safety checks.',
};

const breadcrumbs = [
  { name: 'Home', url: 'https://topratedchimney.com/' },
  { name: 'Services', url: 'https://topratedchimney.com/services/' },
  { name: 'Chimney Inspection', url: 'https://topratedchimney.com/services/chimney-inspection/' },
];

export const metadata: Metadata = {
  title: 'Chimney Inspections Atlanta | Level 1, 2 & 3 | Real Estate',
  description: serviceData.description,
  keywords: ['chimney inspection', 'Level 1 inspection', 'Level 2 inspection', 'Atlanta chimney inspector', 'real estate inspection'],
  alternates: {
    canonical: 'https://topratedchimney.com/services/chimney-inspection/',
  },
  openGraph: {
    title: 'Professional Chimney Inspections | Atlanta',
    description: serviceData.description,
    url: 'https://topratedchimney.com/services/chimney-inspection/',
    siteName: 'Top Rated Chimney Services',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://topratedchimney.com/og-service-inspection.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional chimney inspection service in Atlanta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Chimney Inspections | Atlanta',
    description: serviceData.description,
    images: ['https://topratedchimney.com/og-service-inspection.jpg'],
  },
};

export default function ChimneyInspection() {
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
        title="Chimney Safety Inspections"
        subtitle="Certified Level 1, 2, & 3 inspections for real estate transactions and annual safety."
        bgImage="/images/fireplace-image.webp"
      />

      <section className="py-12 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16 lg:mb-24">
            {/* Main content */}
            <div className="lg:col-span-2">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-black mb-6 lg:mb-8 leading-tight">
                Professional Chimney Inspections in Metro Atlanta
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8 leading-relaxed">
                The National Fire Protection Association (NFPA) recommends an annual chimney inspection for every fireplace, wood stove, or gas log set. At {COMPANY_INFO.name}, we use advanced camera technology to look deep inside your flue system, identifying hidden hazards that could lead to carbon monoxide leaks or chimney fires.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 lg:mb-12 leading-relaxed">
                Whether you are buying a new home in Marietta, switching fuel types, or just ensuring your family's safety for the winter, our comprehensive reports give you the peace of mind you need.
              </p>

              <h3 className="text-3xl lg:text-4xl font-bold text-brand-black mb-10 lg:mb-14">Understanding Inspection Levels (NFPA 211)</h3>

              <div className="space-y-6 lg:space-y-8 mb-16 lg:mb-24">
                {/* Level 1 */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 lg:gap-6">
                    <div className="bg-green-100 p-3 lg:p-4 rounded-full shrink-0 flex-shrink-0">
                      <CheckCircle2 className="text-green-600" size={28} />
                    </div>
                    <div>
                      <h4 className="text-lg lg:text-2xl font-bold text-brand-black mb-3 lg:mb-4">Level 1 Inspection (Routine)</h4>
                      <p className="text-sm lg:text-base text-gray-600 mb-3 lg:mb-4">
                        <strong>When:</strong> Annual maintenance if nothing has changed.
                      </p>
                      <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                        This is the standard checkup. We inspect readily accessible portions of the chimney exterior and interior, as well as the appliance connection. We verify the flue is free of obstruction and combustible deposits.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Level 2 */}
                <div className="bg-white border-l-4 lg:border-l-8 border-brand-red rounded-xl p-6 lg:p-8 shadow-md">
                  <div className="flex items-start gap-4 lg:gap-6">
                    <div className="bg-red-100 p-3 lg:p-4 rounded-full shrink-0 flex-shrink-0">
                      <Search className="text-brand-red" size={28} />
                    </div>
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 lg:gap-3 mb-3 lg:mb-4">
                        <h4 className="text-lg lg:text-2xl font-bold text-brand-black">Level 2 Inspection (Real Estate)</h4>
                        <span className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full w-fit">MOST POPULAR</span>
                      </div>
                      <p className="text-sm lg:text-base text-gray-600 mb-3 lg:mb-4">
                        <strong>When:</strong> Buying/selling a home, changing fuel type, or after a malfunction/fire.
                      </p>
                      <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                        Includes everything in Level 1, plus a video scan of the internal flue surfaces. We inspect accessible areas of attics, crawl spaces, and basements. <strong>This is required for all real estate transactions.</strong>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Level 3 */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 lg:gap-6">
                    <div className="bg-orange-100 p-3 lg:p-4 rounded-full shrink-0 flex-shrink-0">
                      <AlertOctagon className="text-orange-600" size={28} />
                    </div>
                    <div>
                      <h4 className="text-lg lg:text-2xl font-bold text-brand-black mb-3 lg:mb-4">Level 3 Inspection (Destructive)</h4>
                      <p className="text-sm lg:text-base text-gray-600 mb-3 lg:mb-4">
                        <strong>When:</strong> A serious hazard is suspected in a concealed area.
                      </p>
                      <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                        This involves the removal of permanent components (like drywall or siding) to gain access to concealed areas of the chimney structure. This is rare and only performed when absolutely necessary.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Real Estate Section */}
              <div className="bg-gray-50 p-6 lg:p-10 rounded-xl lg:rounded-2xl border border-gray-200">
                <div className="flex flex-col md:flex-row gap-6 lg:gap-8 items-start md:items-center">
                  <div className="bg-white p-4 lg:p-6 rounded-full shadow-md flex-shrink-0">
                    <Home size={48} className="text-brand-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-brand-black mb-2 lg:mb-4">Buying a Home in Atlanta?</h3>
                    <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                      Unlike standard home inspectors, we perform comprehensive Level 2 chimney inspections with internal cameras. Don't inherit a costly fire hazard or structural repair bill—schedule a dedicated chimney inspection before closing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-brand-black text-white p-6 lg:p-10 rounded-xl lg:rounded-2xl shadow-lg lg:shadow-2xl sticky top-20 lg:top-24">
                <div className="flex justify-center mb-4 lg:mb-6">
                  <FileCheck size={56} className="text-brand-red" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-center">Get Your Report</h3>
                <p className="text-sm lg:text-base text-gray-300 text-center mb-6 lg:mb-8 leading-relaxed">
                  Fast scheduling for real estate closings. Detailed photo documentation included.
                </p>

                <a
                  href={`tel:${COMPANY_INFO.phoneTel}`}
                  className="flex items-center justify-center gap-2 lg:gap-3 bg-brand-red text-white px-6 lg:px-8 py-4 lg:py-5 rounded-lg lg:rounded-xl font-bold text-base lg:text-lg hover:bg-white hover:text-brand-red active:scale-95 transition-all w-full mb-4 lg:mb-6 shadow-md hover:shadow-lg"
                >
                  <Phone size={24} />
                  <span>Call {COMPANY_INFO.phoneDisplay}</span>
                </a>
                <p className="text-xs lg:text-sm text-gray-400 text-center leading-relaxed">
                  Official inspection reports provided.
                </p>

                <div className="mt-6 lg:mt-8 pt-6 lg:pt-8 border-t border-gray-700">
                  <h4 className="font-bold text-white mb-4 lg:mb-5 text-center text-sm lg:text-base">We Inspect:</h4>
                  <ul className="text-gray-300 text-sm space-y-2 lg:space-y-3">
                    <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-brand-red shrink-0"/> Masonry Fireplaces</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-brand-red shrink-0"/> Prefab / Factory-Built</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-brand-red shrink-0"/> Gas Log Sets</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-brand-red shrink-0"/> Wood Stoves</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-brand-red shrink-0"/> Furnace Flues</li>
                  </ul>
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
