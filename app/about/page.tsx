import type { Metadata } from 'next';
import PageHero from '@/components/server/PageHero';
import TrustBar from '@/components/server/TrustBar';
import Location from '@/components/server/Location';
import { ShieldCheck, Users, Clock, Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us | Top Rated Chimney Services | Atlanta\'s Trusted Team',
  description: 'Learn about our licensed and insured chimney service team. Dedicated to protecting Georgia homes with expert chimney care and inspections.',
  alternates: {
    canonical: 'https://topratedchimney.com/about/',
  },
};

export default function About() {
  return (
    <>
      <PageHero
        title="About Our Team"
        subtitle="Dedicated to protecting Georgia homes through expert chimney care and inspections."
        bgImage="/images/van.png"
      />

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-6">
                Safety Is Our #1 Priority
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Top Rated Chimney Services, we believe that every family deserves a safe and warm home. Chimney maintenance isn't just about cleanliness; it's about preventing dangerous chimney fires and carbon monoxide hazards.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We started this business with a simple goal: to provide honest, high-quality chimney services to North Georgia without the high-pressure sales tactics. We treat every home as if it were our own.
              </p>
              <div className="flex flex-col gap-4 mt-8">
                <div className="flex items-center gap-4">
                  <div className="bg-red-50 p-3 rounded-full">
                    <ShieldCheck className="text-brand-red" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-brand-black">Fully Licensed & Insured</h4>
                    <p className="text-gray-600">Complete liability coverage for your peace of mind.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-red-50 p-3 rounded-full">
                    <Users className="text-brand-red" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-brand-black">Certified Technicians</h4>
                    <p className="text-gray-600">Ongoing training in the latest safety standards.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="/images/van.png"
                alt="Chimney technician at work"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-12">
            The Top Rated Difference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <Clock size={40} className="text-brand-red mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Punctual Service</h3>
              <p className="text-gray-600">We respect your time. We show up when we say we will and communicate clearly.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <ShieldCheck size={40} className="text-brand-red mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">No hidden fees or surprise upcharges. You'll know exactly what the job costs.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <Users size={40} className="text-brand-red mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Local Experts</h3>
              <p className="text-gray-600">We know Atlanta homes and local building codes inside and out.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-brand-black py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to work with the best?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Experience the difference of a professional, safety-focused chimney service.
          </p>
          <a
            href={`tel:${COMPANY_INFO.phoneTel}`}
            className="inline-flex items-center gap-3 bg-brand-red text-white px-8 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-brand-red transition-colors shadow-lg"
          >
            <Phone size={24} />
            <span>Call {COMPANY_INFO.phoneDisplay} Today</span>
          </a>
        </div>
      </section>

      <Location />
    </>
  );
}
