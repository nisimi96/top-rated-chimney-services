'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Flame, Menu, X, ChevronDown } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';
import { useThrottle } from '@/lib/hooks';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const services = [
    { name: 'Chimney Repair', href: '/services/chimney-repair' },
    { name: 'Chimney Inspection', href: '/services/chimney-inspection' },
    { name: 'Chimney Sweeping', href: '/services/chimney-sweeping' },
    { name: 'Cap Installation', href: '/services/cap-installation' },
    { name: 'Gas Logs', href: '/services/gas-logs' },
  ];

  const handleScroll = useThrottle(() => {
    setIsScrolled(window.scrollY > 20);
  }, 150);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-3 shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
          {!logoError ? (
            <Image
              src="/images/top-rated-logo.png"
              alt={COMPANY_INFO.name}
              width={96}
              height={96}
              className="h-16 md:h-20 lg:h-24 w-auto object-contain"
              onError={() => setLogoError(true)}
              priority
            />
          ) : (
            <div className="flex items-center gap-2">
              <div className="text-brand-red">
                <Flame size={24} strokeWidth={2.5} fill="#E31837" className="text-brand-red md:w-8 md:h-8" />
              </div>
              <div className="leading-tight">
                <div className="text-brand-black font-black text-lg md:text-xl lg:text-2xl tracking-tighter">
                  TOP RATED
                </div>
                <div className="text-brand-red font-bold text-xs md:text-sm lg:text-base tracking-wide -mt-1">
                  CHIMNEY SERVICES
                </div>
              </div>
            </div>
          )}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 flex-1 justify-center px-4">
          <Link href="/" className="text-brand-black font-bold hover:text-brand-red transition-colors text-sm lg:text-base">Home</Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button
              className="text-brand-black font-bold hover:text-brand-red transition-colors flex items-center gap-1 text-sm lg:text-base"
              aria-label="Services submenu"
              aria-expanded="false"
            >
              Services
              <ChevronDown size={16} className="group-hover:text-brand-red transition-colors" aria-hidden="true" />
            </button>
            <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block px-4 py-2 text-brand-black hover:text-brand-red hover:bg-gray-50 transition-colors font-semibold text-sm"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/about/" className="text-brand-black font-bold hover:text-brand-red transition-colors text-sm lg:text-base">About</Link>
          <Link href="/service-areas/" className="text-brand-black font-bold hover:text-brand-red transition-colors text-sm lg:text-base">Service Areas</Link>
          <Link href="/contact/" className="text-brand-black font-bold hover:text-brand-red transition-colors text-sm lg:text-base">Contact</Link>
        </nav>

        {/* Desktop Call to Action */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-4 shrink-0">
          <div className="text-right hidden xl:block">
            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Need Immediate Service?</p>
            <p className="text-sm font-bold text-brand-black">{COMPANY_INFO.area}</p>
          </div>
          <a
            href={`tel:${COMPANY_INFO.phoneTel}`}
            className="flex items-center gap-2 bg-brand-red text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-bold hover:bg-red-700 transition-colors shadow-lg animate-pulse hover:animate-none whitespace-nowrap text-sm lg:text-base"
          >
            <Phone size={20} />
            <span className="hidden lg:inline">{COMPANY_INFO.phoneDisplay}</span>
          </a>
        </div>

        {/* Mobile Controls - Show on tablets and phones (up to 1023px) */}
        <div className="flex lg:hidden items-center gap-4">
          <a
            href={`tel:${COMPANY_INFO.phoneTel}`}
            className="flex items-center justify-center bg-brand-red text-white p-2 rounded-full shadow-lg"
            aria-label="Call Now"
          >
            <Phone size={24} aria-hidden="true" />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-brand-black p-1"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="flex lg:hidden bg-white absolute top-full left-0 right-0 border-t shadow-xl p-4 flex-col gap-4 z-50">
          <Link href="/" className="text-lg font-bold py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>

          {/* Mobile Services Dropdown */}
          <div className="w-full">
            <button
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              className="text-lg font-bold py-2 border-b border-gray-100 w-full text-left flex items-center justify-between"
            >
              Services
              <ChevronDown size={20} className={`transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isServicesDropdownOpen && (
              <div className="bg-gray-50 rounded mt-2 py-2 w-full">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-2 text-brand-black hover:text-brand-red hover:bg-gray-100 transition-colors font-semibold text-sm"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsServicesDropdownOpen(false);
                    }}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about/" className="text-lg font-bold py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link href="/service-areas/" className="text-lg font-bold py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Service Areas</Link>
          <Link href="/contact/" className="text-lg font-bold py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <a href={`tel:${COMPANY_INFO.phoneTel}`} className="text-lg font-bold py-2 text-brand-red" onClick={() => setIsMobileMenuOpen(false)}>Call Now</a>
        </div>
      )}
    </header>
  );
};

export default Header;
