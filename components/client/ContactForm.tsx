'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Check, Mail, Phone } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  address: string;
  message: string;
  contactPreference: 'email' | 'phone';
}

const services = [
  'Chimney Sweeping',
  'Safety Inspection',
  'Chimney Repair',
  'Cap Installation',
  'Gas Logs & Fireplaces',
  'Other',
];

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const [showSuccessOnly, setShowSuccessOnly] = useState(false);
  const [contactPreference, setContactPreference] = useState<'email' | 'phone' | ''>('');

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
      setShowSuccessOnly(true);

      // Reset form after 8 seconds
      setTimeout(() => {
        setShowSuccessOnly(false);
        setSubmitStatus({ type: null, message: '' });
      }, 8000);
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.',
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-gray-50 rounded-xl p-8 md:p-12">
      {showSuccessOnly ? (
        <div className="flex flex-col items-center justify-center py-16 animate-fadeIn">
          <div className="mb-6 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse opacity-25"></div>
              <div className="relative bg-green-50 rounded-full p-4">
                <Check className="text-green-600 animate-bounce" size={48} />
              </div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black text-center mb-4">
            Message Sent!
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl">
            Thank you! Your message has been sent. We will get back to you within 24 hours.
          </p>
        </div>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-brand-black mb-8">
            Send us a Message
          </h2>

          {submitStatus.type && (
            <div
              className={`mb-6 p-4 rounded-lg animate-slideDown ${
                submitStatus.type === 'success'
                  ? 'bg-green-50 border border-green-200 text-green-800'
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 animate-fadeIn">
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

          {/* Contact Preference */}
          <div>
            <label className="block text-sm font-bold text-brand-black mb-4">
              How would you prefer we contact you? *
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label
                htmlFor="contact-email"
                className="relative cursor-pointer group"
              >
                <input
                  {...register('contactPreference', {
                    required: 'Please select a contact preference',
                  })}
                  type="radio"
                  id="contact-email"
                  value="email"
                  className="sr-only peer"
                  onChange={(e) => setContactPreference(e.target.value as 'email' | 'phone')}
                />
                <div className="p-4 border-2 border-gray-200 rounded-lg transition-all duration-200 peer-checked:border-brand-red peer-checked:bg-red-50 hover:border-gray-300 flex flex-col items-center gap-3 group-hover:shadow-md">
                  <Mail className="w-6 h-6 text-gray-600 peer-checked:text-brand-red transition-colors" />
                  <span className="font-semibold text-gray-700 peer-checked:text-brand-red transition-colors">
                    Email
                  </span>
                  <span className="text-xs text-gray-500 peer-checked:text-brand-red/70">
                    Response within 24 hours
                  </span>
                </div>
              </label>

              <label
                htmlFor="contact-phone"
                className="relative cursor-pointer group"
              >
                <input
                  {...register('contactPreference', {
                    required: 'Please select a contact preference',
                  })}
                  type="radio"
                  id="contact-phone"
                  value="phone"
                  className="sr-only peer"
                  onChange={(e) => setContactPreference(e.target.value as 'email' | 'phone')}
                />
                <div className="p-4 border-2 border-gray-200 rounded-lg transition-all duration-200 peer-checked:border-brand-red peer-checked:bg-red-50 hover:border-gray-300 flex flex-col items-center gap-3 group-hover:shadow-md">
                  <Phone className="w-6 h-6 text-gray-600 peer-checked:text-brand-red transition-colors" />
                  <span className="font-semibold text-gray-700 peer-checked:text-brand-red transition-colors">
                    Phone Call
                  </span>
                  <span className="text-xs text-gray-500 peer-checked:text-brand-red/70">
                    Same day service
                  </span>
                </div>
              </label>
            </div>
            {errors.contactPreference && (
              <p className="text-red-600 text-sm mt-2">{errors.contactPreference.message}</p>
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
        </>
      )}
    </div>
  );
}
