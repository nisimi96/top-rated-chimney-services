import Image from 'next/image';
import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-white pt-16 pb-24 md:pb-8" suppressHydrationWarning>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 border-b border-gray-800 pb-8 mb-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="bg-brand-black p-3 rounded-lg inline-block">
                <Image
                  src="/images/top-rate-logo-footer.png"
                  alt={COMPANY_INFO.name}
                  width={128}
                  height={128}
                  className="h-24 md:h-32 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 max-w-xs mx-auto md:mx-0">
              Your trusted partner for safe, efficient, and clean chimneys in Marietta and the greater Atlanta area.
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="font-bold text-2xl mb-2 text-brand-red">{COMPANY_INFO.phoneDisplay}</p>
            <p className="text-gray-400 mb-4">{COMPANY_INFO.fullAddress}</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-red text-white font-bold px-6 py-3 rounded-lg hover:bg-red-700 transition-all hover:scale-105 active:scale-95 border-2 border-transparent hover:border-red-400"
            >
              <Calendar size={20} />
              <span>Book Now</span>
            </Link>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {year} {COMPANY_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
