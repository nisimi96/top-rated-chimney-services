'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Flame, Menu, X } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-3 shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
          {!logoError ? (
            <img
              src="/images/top-rated-logo.png"
              alt={COMPANY_INFO.name}
              className="h-20 md:h-24 w-auto object-contain"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="flex items-center gap-2">
              <div className="text-brand-red">
                <Flame size={32} strokeWidth={2.5} fill="#E31837" className="text-brand-red" />
              </div>
              <div className="leading-tight">
                <div className="text-brand-black font-black text-xl md:text-2xl tracking-tighter">
                  TOP RATED
                </div>
                <div className="text-brand-red font-bold text-sm md:text-base tracking-wide -mt-1">
                  CHIMNEY SERVICES
                </div>
              </div>
            </div>
          )}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-brand-black font-bold hover:text-brand-red transition-colors">Home</Link>
          <Link href="/services/" className="text-brand-black font-bold hover:text-brand-red transition-colors">Services</Link>
          <Link href="/about/" className="text-brand-black font-bold hover:text-brand-red transition-colors">About</Link>
          <Link href="/service-areas/" className="text-brand-black font-bold hover:text-brand-red transition-colors">Service Areas</Link>
        </nav>

        {/* Desktop Call to Action */}
        <div className="hidden md:flex items-center gap-4">
          <div className="text-right hidden xl:block">
            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Need Immediate Service?</p>
            <p className="text-sm font-bold text-brand-black">{COMPANY_INFO.area}</p>
          </div>
          <a
            href={`tel:${COMPANY_INFO.phoneTel}`}
            className="flex items-center gap-2 bg-brand-red text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-colors shadow-lg animate-pulse hover:animate-none"
          >
            <Phone size={20} />
            <span>{COMPANY_INFO.phoneDisplay}</span>
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-4">
          <a
            href={`tel:${COMPANY_INFO.phoneTel}`}
            className="flex items-center justify-center bg-brand-red text-white p-2 rounded-full shadow-lg"
            aria-label="Call Now"
          >
            <Phone size={24} />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-brand-black p-1"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 border-t shadow-xl p-4 flex flex-col gap-4">
          <Link href="/" className="text-lg font-bold py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/services/" className="text-lg font-bold py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link href="/about/" className="text-lg font-bold py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link href="/service-areas/" className="text-lg font-bold py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Service Areas</Link>
          <a href={`tel:${COMPANY_INFO.phoneTel}`} className="text-lg font-bold py-2 text-brand-red" onClick={() => setIsMobileMenuOpen(false)}>Call Now</a>
        </div>
      )}
    </header>
  );
};

export default Header;
