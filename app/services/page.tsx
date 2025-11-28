import type { Metadata } from 'next';
import PageHero from '@/components/server/PageHero';
import Services from '@/components/server/Services';
import { Phone, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Professional Chimney Services | Cleaning, Repair & Inspection',
  description: 'Comprehensive chimney care including sweeping, repairs, inspections, and installations. Serving Atlanta metro area.',
  alternates: {
    canonical: 'https://topratedchimney.com/services/',
  },
};

export default function ServicesIndex() {
  return (
    <>
      <PageHero
        title="Professional Chimney Services"
        subtitle="Comprehensive cleaning, repair, and inspection services for Greater Atlanta homeowners."
        bgImage="/images/placeholder.jpg"
      />

      {/* Intro Text */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-2xl font-bold text-brand-black mb-4">Why Choose Top Rated Chimney Services?</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Your chimney is a complex system that requires regular maintenance to operate safely.
            From annual sweeping to complex masonry repairs, our certified technicians have the experience
            to handle any job. We pride ourselves on transparent pricing, punctuality, and leaving your home cleaner than we found it.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 text-brand-black font-semibold">
              <CheckCircle className="text-brand-red" size={20} /> Licensed & Insured
            </div>
            <div className="flex items-center gap-2 text-brand-black font-semibold">
              <CheckCircle className="text-brand-red" size={20} /> Certified Technicians
            </div>
            <div className="flex items-center gap-2 text-brand-black font-semibold">
              <CheckCircle className="text-brand-red" size={20} /> Fast Response Times
            </div>
          </div>
        </div>
      </section>

      <Services />

      {/* CTA Section */}
      <section className="bg-brand-black py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Not sure which service you need?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Call us today and let our experts assess your chimney and recommend the best solution.
          </p>
          <a
            href={`tel:${COMPANY_INFO.phoneTel}`}
            className="inline-flex items-center gap-3 bg-brand-red text-white px-8 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-brand-red transition-colors shadow-lg"
          >
            <Phone size={24} />
            <span>Call {COMPANY_INFO.phoneDisplay}</span>
          </a>
        </div>
      </section>
    </>
  );
}
