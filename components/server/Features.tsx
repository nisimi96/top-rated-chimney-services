'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Features: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  const slides = [
    {
      type: 'video' as const,
      src: '/videos/luxury-fireplace-video.mp4',
      alt: 'Luxury fireplace installation and design showcase',
      description: 'Professional luxury fireplace installation featuring high-end craftsmanship and modern design elements.',
    },
    {
      type: 'image' as const,
      src: '/images/fireplace-image.webp',
      alt: 'Beautiful fireplace installation with professional finishing',
      description: 'Showcase of our professional fireplace installation work with attention to detail.',
    },
    {
      type: 'image' as const,
      src: '/images/fireplace-image-2.webp',
      alt: 'Luxury fireplace design with modern aesthetic',
      description: 'Example of luxury fireplace design customized to complement home architecture.',
    },
  ];

  useEffect(() => {
    // Detect mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Auto-rotate carousel slides
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearInterval(interval);
    };
  }, [slides.length]);
  return (
    <section
      className="py-12 md:py-16 bg-white relative"
      style={{
        backgroundImage: 'url(/images/wall-bg.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-white/80" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-brand-black text-2xl md:text-4xl font-extrabold mb-3">
            What We Can Build
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            From stunning fireplace installations to complete chimney systems, we create beautiful and functional solutions for your home.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto mb-8 relative">
          {/* Screen reader announcement for current slide */}
          <div className="sr-only" aria-live="polite" aria-atomic="true">
            Slide {currentSlide + 1} of {slides.length}: {slides[currentSlide].description}
          </div>

          {/* Main Carousel */}
          <div
            className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 h-96 bg-black relative"
            role="region"
            aria-label="Featured fireplace installations carousel"
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {slide.type === 'video' ? (
                  <>
                    {/* Fallback Image */}
                    <Image
                      src="/images/fireplace-image.webp"
                      alt="Fireplace installation"
                      fill
                      className="w-full h-full object-cover"
                      priority={index === 0}
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                    {/* Video - loads only on desktop to improve mobile performance */}
                    {!isMobile && (
                      <video
                        className="w-full h-full object-cover absolute inset-0"
                        autoPlay={index === currentSlide}
                        muted
                        loop
                        playsInline
                        preload="none"
                        aria-label={slide.alt}
                        title={slide.description}
                      >
                        <source src={slide.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </>
                ) : (
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="w-full h-full object-cover"
                    priority={index === 0}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                )}
              </div>
            ))}

            {/* Dots Navigation */}
            <nav className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10" aria-label="Slide navigation">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-white w-8'
                      : 'bg-white/50 w-2 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}: ${slides[index].description}`}
                  aria-current={index === currentSlide ? 'true' : 'false'}
                />
              ))}
            </nav>
          </div>
        </div>

        {/* Features List Below */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: 'Professional Installation',
                description: 'Expert craftsmanship in every project, from concept to completion.',
              },
              {
                title: 'Premium Materials',
                description: 'We use only high-quality, durable materials built to last.',
              },
              {
                title: 'Custom Designs',
                description: 'Personalized solutions tailored to match your home\'s style.',
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center font-bold text-sm mb-3">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-brand-black mb-1">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <a
            href="tel:7707996264"
            className="inline-block bg-brand-red text-white px-8 py-3 rounded-full font-bold text-base hover:bg-red-700 transition-colors shadow-lg"
          >
            Get Your Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
