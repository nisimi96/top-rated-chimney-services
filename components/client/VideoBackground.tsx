'use client';

import React, { useState, useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  videos: string[]; // Array of video URLs
  fallbackImage: string;
  duration?: number; // Duration each video plays in milliseconds
  transitionDuration?: number; // Fade transition duration in ms
  posterImage?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  videos,
  fallbackImage,
  duration = 15000, // 15 seconds per video
  transitionDuration = 1000, // 1 second fade transition
  posterImage,
}) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Handle video transition
  useEffect(() => {
    setIsVisible(true);

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set timeout for next video transition
    timeoutRef.current = setTimeout(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, duration);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentVideoIndex, duration, videos.length]);

  // Sync all videos but only play the current one
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentVideoIndex) {
          video.play().catch(() => {
            // Autoplay might be blocked, that's okay
          });
        } else {
          video.pause();
        }
      }
    });
  }, [currentVideoIndex]);

  return (
    <div className="absolute inset-0 z-0">
      {/* Fallback Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url("${fallbackImage}")`,
        }}
      />

      {/* Video Elements */}
      {videos.map((videoUrl, index) => (
        <video
          key={index}
          ref={(el) => {
            videoRefs.current[index] = el;
          }}
          autoPlay={index === 0}
          loop={false}
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-10 transition-opacity"
          style={{
            opacity: currentVideoIndex === index ? 1 : 0,
            transitionDuration: `${transitionDuration}ms`,
            transitionProperty: 'opacity',
          }}
          poster={posterImage || fallbackImage}
          onEnded={() => {
            // When current video ends, move to next
            if (currentVideoIndex === index) {
              setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
            }
          }}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 z-20"></div>
    </div>
  );
};

export default VideoBackground;
