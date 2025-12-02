import type { Metadata } from 'next';
import Script from 'next/script';
import PageHero from '@/components/server/PageHero';
import Location from '@/components/server/Location';
import { Phone, ShieldAlert, CheckCircle2, Calendar, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';
import { serviceSchema, breadcrumbSchema } from '@/lib/schemas';

const serviceData = {
  name: 'Chimney Sweeping',
  description: 'Expert creosote removal and deep cleaning for Greater Atlanta homes. NFPA-certified chimney sweeping services to prevent chimney fires and ensure safe operation.',
};

const breadcrumbs = [
  { name: 'Home', url: 'https://topratedchimney.com/' },
  { name: 'Services', url: 'https://topratedchimney.com/services/' },
  { name: 'Chimney Sweeping', url: 'https://topratedchimney.com/services/chimney-sweeping/' },
];

export const metadata: Metadata = {
  title: 'Professional Chimney Sweeping | Metro Atlanta | Creosote Removal',
  description: serviceData.description,
  keywords: ['chimney sweeping', 'creosote removal', 'chimney cleaning', 'Atlanta chimney sweep', 'Marietta chimney cleaner'],
  alternates: {
    canonical: 'https://topratedchimney.com/services/chimney-sweeping/',
  },
  openGraph: {
    title: 'Professional Chimney Sweeping | Creosote Removal',
    description: serviceData.description,
    url: 'https://topratedchimney.com/services/chimney-sweeping/',
    siteName: 'Top Rated Chimney Services',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://topratedchimney.com/og-service-sweep.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional chimney sweeping service in Atlanta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Chimney Sweeping | Atlanta',
    description: serviceData.description,
    images: ['https://topratedchimney.com/og-service-sweep.jpg'],
  },
};

export default function ChimneySweeping() {
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
        title="Professional Chimney Sweeping"
        subtitle="Expert creosote removal and deep cleaning for Greater Atlanta homes."
        bgImage="/images/fireplace-image.webp"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-2/3">
              <h2 className="text-3xl font-extrabold text-brand-black mb-6">
                Premier Chimney Sweep in Greater Atlanta
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A clean chimney is a safe chimney. At <strong>{COMPANY_INFO.name}</strong>, we provide meticulous chimney sweeping services designed to remove dangerous creosote buildup, soot, and blockages that can lead to chimney fires.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Serving the entire 60-mile metro radius, our certified technicians use industrial-grade vacuums and specialized brushes to ensure your fireplace is ready for the season. We pride ourselves on our <strong>"No Mess Guarantee"</strong>—we leave your home exactly as clean as we found it.
              </p>

              <div className="bg-red-50 border-l-4 border-brand-red p-6 rounded-r-lg mb-10">
                <div className="flex items-start gap-3">
                  <ShieldAlert className="text-brand-red shrink-0" size={28} aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-2">Why is Creosote Dangerous?</h3>
                    <p className="text-gray-700">
                      Creosote is a highly flammable substance that builds up inside your chimney flue every time you burn wood. It is the number one cause of chimney fires. Regular sweeping is the only way to effectively remove it and ensure safe operation.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-brand-black mb-6">Our Cleaning Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-red shrink-0" size={24} aria-hidden="true" />
                  <p className="text-gray-700"><strong>Inspection:</strong> We start with a visual check to assess creosote levels.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-red shrink-0" size={24} aria-hidden="true" />
                  <p className="text-gray-700"><strong>Protection:</strong> We lay down drop cloths and seal the fireplace opening.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-red shrink-0" size={24} aria-hidden="true" />
                  <p className="text-gray-700"><strong>Sweeping:</strong> High-powered brushes scrub the flue from top to bottom.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-red shrink-0" size={24} aria-hidden="true" />
                  <p className="text-gray-700"><strong>HEPA Vacuuming:</strong> All dust and soot are instantly captured.</p>
                </div>
              </div>
            </div>

            {/* Sidebar / CTA */}
            <div className="w-full lg:w-1/3">
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg sticky top-24 border-t-4 border-brand-red">
                <h3 className="text-2xl font-bold text-brand-black mb-4 text-center">Schedule Your Sweep</h3>
                <p className="text-gray-600 text-center mb-6">
                  Don't wait until the first cold snap. Slots fill up fast!
                </p>
                <div className="flex flex-col gap-4">
                  <a
                    href={`tel:${COMPANY_INFO.phoneTel}`}
                    className="flex items-center justify-center gap-2 bg-brand-red text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors shadow-md animate-pulse"
                  >
                    <Phone size={20} aria-hidden="true" />
                    <span>Call {COMPANY_INFO.phoneDisplay}</span>
                  </a>
                  <div className="text-center text-sm text-gray-500 mt-2">
                    <p>Live operator standing by.</p>
                    <p>Mon-Sat: 8am - 6pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Education Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-brand-black mb-10">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-3 mb-2">
                <Calendar className="text-brand-red" size={24} aria-hidden="true" />
                <h3 className="text-xl font-bold text-brand-black">How often should I clean my chimney?</h3>
              </div>
              <p className="text-gray-600 ml-9">
                The National Fire Protection Association (NFPA) recommends that chimneys be inspected at least once a year and cleaned as necessary. If you use your fireplace regularly (more than 1 cord of wood per season), an annual sweep is essential.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-3 mb-2">
                <Sparkles className="text-brand-red" size={24} aria-hidden="true" />
                <h3 className="text-xl font-bold text-brand-black">Will it make a mess in my house?</h3>
              </div>
              <p className="text-gray-600 ml-9">
                Absolutely not. We treat your home with the utmost respect. We use runners, drop cloths, and high-powered HEPA vacuums to ensure absolutely no soot enters your living space. We have a "No Mess Guarantee."
              </p>
            </div>
          </div>
        </div>
      </section>

      <Location />
    </>
  );
}
