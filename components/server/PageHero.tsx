import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';
import VideoBackground from '@/components/client/VideoBackground';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
  videoUrl?: string;
  videos?: string[]; // Array of videos for rotation
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  bgImage = '/images/map-bg.jpg',
  videoUrl,
  videos,
}) => {
  // Default to rotating hero videos if no specific videos provided
  const displayVideos = videos || [
    '/videos/hero-vid-1.mp4',
    '/videos/hero-vid-2.mp4',
    '/videos/hero-vid-3.mp4',
  ];

  return (
    <section className="relative h-[450px] md:h-[550px] flex items-center justify-center overflow-hidden">
      {/* Video Background with Rotation or Single Video */}
      {videos || !videoUrl ? (
        <VideoBackground
          videos={displayVideos}
          fallbackImage={bgImage}
          duration={15000}
          transitionDuration={1000}
        />
      ) : (
        <div className="absolute inset-0 z-0">
          {/* Fallback Image - Optimized */}
          {bgImage === '/images/fireplace-image.webp' ? (
            <Image
              src={bgImage}
              alt="Hero background"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          ) : (
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url("${bgImage}")` }}
            />
          )}

          {/* Single Video Background (Legacy Support) */}
          {videoUrl && (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-10"
              poster={bgImage}
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-brand-black/70 z-20"></div>
        </div>
      )}

      <div className="container mx-auto px-4 z-30 relative text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-gray-200 max-w-2xl mx-auto font-medium drop-shadow-md mb-8">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href={`tel:${COMPANY_INFO.phoneTel}`}
            className="flex items-center justify-center gap-3 bg-brand-red text-white text-lg md:text-xl font-bold px-8 py-4 rounded-lg shadow-xl hover:bg-red-700 transition-all hover:scale-105 active:scale-95 border-2 border-transparent hover:border-red-400"
          >
            <Phone size={24} />
            <span>Call {COMPANY_INFO.phoneDisplay}</span>
          </a>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-3 bg-white text-brand-red text-lg md:text-xl font-bold px-8 py-4 rounded-lg shadow-xl hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 border-2 border-transparent hover:border-red-400"
          >
            <Mail size={24} />
            <span>Send us an Email</span>
          </Link>
        </div>
      </div>

    </section>
  );
};

export default PageHero;
