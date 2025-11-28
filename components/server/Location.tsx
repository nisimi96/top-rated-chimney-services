import React from 'react';
import Link from 'next/link';
import { MapPin, Navigation } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

const Location: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">

          <div className="w-full md:w-1/2">
            <div className="bg-gray-100 rounded-2xl overflow-hidden h-[400px] relative flex items-center justify-center border-2 border-gray-200 shadow-lg">
              {/* Static Atlanta Map */}
              <img
                src="/images/atlanta-map.png"
                alt="Atlanta and surrounding service areas map"
                className="w-full h-full object-cover"
              />
              {/* Overlay Card - Atlanta Focus */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end">
                <div className="w-full p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">Serving Greater Atlanta</h3>
                  <p className="text-sm opacity-90">Metro Atlanta &amp; surrounding areas</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-6">
              Trusted Chimney Experts Serving Atlanta
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We are a locally owned and operated business serving Greater Atlanta with expert chimney sweeping and maintenance. We understand the unique challenges Atlanta-area homes face—from Georgia's humidity and moisture damage to wildlife intrusions and creosote buildup.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-50 p-3 rounded-full shrink-0">
                  <MapPin className="text-brand-red" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-brand-black">Physical Address</h4>
                  <p className="text-gray-600">{COMPANY_INFO.address}</p>
                  <p className="text-gray-600">{COMPANY_INFO.cityStateZip}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-50 p-3 rounded-full shrink-0">
                  <Navigation className="text-brand-red" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-brand-black">Service Areas</h4>
                  <p className="text-gray-600 mb-2">Marietta, Atlanta, Sandy Springs, Roswell, Alpharetta, Smyrna, and Kennesaw.</p>
                  <Link href="/service-areas/" className="text-brand-red font-bold hover:underline">
                    View Full Service Map →
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a
                href={`tel:${COMPANY_INFO.phoneTel}`}
                className="inline-block bg-brand-black text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors"
              >
                Get Directions / Call Us
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;
