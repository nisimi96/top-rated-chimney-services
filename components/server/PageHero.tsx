import React from 'react';
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
    <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
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
          {/* Fallback Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${bgImage}")` }}
          />

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
          <p className="text-xl text-gray-200 max-w-2xl mx-auto font-medium drop-shadow-md">
            {subtitle}
          </p>
        )}
      </div>

    </section>
  );
};

export default PageHero;
