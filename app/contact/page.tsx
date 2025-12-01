import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';
import ContactForm from '@/components/client/ContactForm';

export const dynamic = 'force-dynamic';

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-brand-black py-12 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Have questions about our services? Get in touch with our team today.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-brand-red">
              <div className="flex items-center gap-4 mb-4">
                <Phone className="text-brand-red" size={28} />
                <h3 className="text-xl font-bold text-brand-black">Call Us</h3>
              </div>
              <p className="text-gray-600 mb-2">Available Monday - Saturday</p>
              <a
                href={`tel:${COMPANY_INFO.phoneTel}`}
                className="text-brand-red font-bold text-lg hover:underline"
              >
                {COMPANY_INFO.phoneDisplay}
              </a>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-brand-red">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="text-brand-red" size={28} />
                <h3 className="text-xl font-bold text-brand-black">Email Us</h3>
              </div>
              <p className="text-gray-600 mb-2">Response within 24 hours</p>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-brand-red font-bold text-lg hover:underline"
              >
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </section>
    </>
  );
}
