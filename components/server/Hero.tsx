import React from 'react';
import { Phone, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';
import VideoBackground from '@/components/client/VideoBackground';

const Hero: React.FC = () => {
  const heroVideos = [
    '/videos/hero-vid-1.mp4',
    '/videos/hero-vid-2.mp4',
    '/videos/hero-vid-3.mp4',
  ];

  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Media with Rotating Videos */}
      <VideoBackground
        videos={heroVideos}
        fallbackImage="/images/hero-bg.jpg"
        duration={15000}
        transitionDuration={1000}
      />

      <div className="container mx-auto px-4 z-30 relative text-center md:text-left">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-brand-red/90 text-white px-4 py-1 rounded-full text-sm font-bold mb-6 backdrop-blur-sm shadow-lg border border-red-500/30">
            <ShieldCheck size={16} />
            <span>#1 Rated Chimney Safety Experts in GA</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-2xl">
            Protect Your Home & Family from <span className="text-brand-red text-shadow-glow">Chimney Hazards</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-100 mb-8 font-medium drop-shadow-md">
            Professional Inspections, Sweeping, and Repairs. <br className="hidden md:block"/>
            Serving <span className="text-white font-bold underline decoration-brand-red decoration-4 underline-offset-4">Entire Atlanta Metro Area</span> (60-Mile Radius).
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a
              href={`tel:${COMPANY_INFO.phoneTel}`}
              className="flex items-center justify-center gap-3 bg-brand-red text-white text-xl md:text-2xl font-bold px-8 py-5 rounded-lg shadow-xl hover:bg-red-700 transition-all hover:scale-105 active:scale-95 group border-2 border-transparent hover:border-red-400"
            >
              <Phone size={28} className="animate-bounce" />
              <span>Call {COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center md:justify-start gap-2 text-gray-200 text-sm md:text-base font-medium drop-shadow-md">
            <MapPin size={16} className="text-brand-red" />
            <span>Serving All of North GA • Licensed & Insured</span>
          </div>
        </div>
      </div>

      <style>{`
        .text-shadow-glow {
          text-shadow: 0 0 20px rgba(227, 24, 55, 0.5);
        }
      `}</style>
    </section>
  );
};

export default Hero;
