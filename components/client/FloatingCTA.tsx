'use client';

import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past header (100px)
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden bg-gradient-to-t from-white/90 to-transparent pb-6">
      <a
        href={`tel:${COMPANY_INFO.phoneTel}`}
        className="flex items-center justify-center gap-3 bg-brand-red text-white w-full py-4 rounded-xl shadow-2xl font-bold text-xl animate-pulse"
      >
        <Phone size={24} fill="currentColor" />
        CALL {COMPANY_INFO.phoneDisplay}
      </a>
    </div>
  );
};

export default FloatingCTA;
