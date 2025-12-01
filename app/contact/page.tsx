'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, LogOut } from 'lucide-react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { COMPANY_INFO } from '@/lib/constants';

export const dynamic = 'force-dynamic';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  address: string;
  message: string;
}

const services = [
  'Chimney Sweeping',
  'Safety Inspection',
  'Chimney Repair',
  'Cap Installation',
  'Gas Logs & Fireplaces',
  'Other',
];

export default function ContactPage() {
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      address: '',
      message: '',
    },
  });

  useEffect(() => {
    if (session?.user) {
      setValue('name', session.user.name || '');
      setValue('email', session.user.email || '');
    }
  }, [session, setValue]);

  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setSubmitStatus({ type: null, message: '' });

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to send message');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent. We will get back to you within 24 hours.',
      });
      reset();

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 5000);
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.',
      });
    }
  };

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
          <div className="max-w-3xl mx-auto bg-gray-50 rounded-xl p-8 md:p-12">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-brand-black">
                Send us a Message
              </h2>
              {session?.user && (
                <div className="flex items-center gap-3">
                  <img
                    src={session.user.image || ''}
                    alt={session.user.name || 'User'}
                    className="w-10 h-10 rounded-full"
                  />
                  <button
                    onClick={() => signOut()}
                    className="flex items-center gap-2 text-gray-600 hover:text-brand-red transition-colors text-sm"
                  >
                    <LogOut size={16} />
                    Sign Out
                  </button>
                </div>
              )}
            </div>

            {submitStatus.type && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 border border-green-200 text-green-800'
                    : 'bg-red-50 border border-red-200 text-red-800'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            {!session?.user ? (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-6 text-lg">
                  Sign in with your Gmail account to fill out the contact form.
                </p>
                <button
                  onClick={() => signIn('google')}
                  className="inline-flex items-center gap-3 bg-white border-2 border-gray-300 px-8 py-4 rounded-lg font-bold text-gray-700 hover:border-brand-red hover:text-brand-red transition-colors"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Sign in with Google
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* User Info Display */}
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">
                    Signed in as <strong>{session.user.name}</strong> ({session.user.email})
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-brand-black mb-2">
                    Full Name *
                  </label>
                  <input
                    {...register('name', {
                      required: 'Name is required',
                      minLength: {
                        value: 2,
                        message: 'Name must be at least 2 characters',
                      },
                    })}
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-red-50"
                  />
                  <p className="text-gray-500 text-xs mt-1">Pre-filled from your account. Feel free to edit.</p>
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-brand-black mb-2">
                    Email Address *
                  </label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Invalid email address',
                      },
                    })}
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-red-50"
                  />
                  <p className="text-gray-500 text-xs mt-1">Pre-filled from your account. Feel free to edit.</p>
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-brand-black mb-2">
                    Phone Number *
                  </label>
                  <input
                    {...register('phone', {
                      required: 'Phone number is required',
                      minLength: {
                        value: 10,
                        message: 'Phone number must be at least 10 digits',
                      },
                    })}
                    type="tel"
                    id="phone"
                    placeholder="(770) 799-6264"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-red-50"
                  />
                  {errors.phone && (
                    <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                {/* Address */}
                <div>
                  <label htmlFor="address" className="block text-sm font-bold text-brand-black mb-2">
                    Property Address *
                  </label>
                  <input
                    {...register('address', {
                      required: 'Property address is required',
                      minLength: {
                        value: 5,
                        message: 'Please enter a valid address',
                      },
                    })}
                    type="text"
                    id="address"
                    placeholder="123 Main Street, City, State 12345"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-red-50"
                  />
                  {errors.address && (
                    <p className="text-red-600 text-sm mt-1">{errors.address.message}</p>
                  )}
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-brand-black mb-2">
                    Service You're Interested In *
                  </label>
                  <select
                    {...register('service', {
                      required: 'Please select a service',
                    })}
                    id="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-red-50 bg-white"
                  >
                    <option value="">-- Select a Service --</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-red-600 text-sm mt-1">{errors.service.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-brand-black mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register('message', {
                      required: 'Message is required',
                      minLength: {
                        value: 10,
                        message: 'Message must be at least 10 characters',
                      },
                    })}
                    id="message"
                    placeholder="Tell us more about your needs..."
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-red-50 resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-red text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                <p className="text-center text-gray-600 text-sm">
                  * Required fields
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
