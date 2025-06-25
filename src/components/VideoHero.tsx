import React, { useRef, useEffect } from 'react';

export const VideoHero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        {/* Mobile Video */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover md:hidden"
          autoPlay
          muted
          loop
          playsInline
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect width='1920' height='1080' fill='%23000'/%3E%3C/svg%3E"
        >
          <source 
            src="https://studyratna.co/wp-content/uploads/2025/06/New-Project-21-3CDB8BE.mp4" 
            type="video/mp4" 
          />
        </video>

        {/* Desktop Video */}
        <video
          className="w-full h-full object-cover hidden md:block"
          autoPlay
          muted
          loop
          playsInline
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect width='1920' height='1080' fill='%23000'/%3E%3C/svg%3E"
        >
          <source 
            src="https://studyratna.co/wp-content/uploads/2025/06/New-Project-19-E09929F.mp4" 
            type="video/mp4" 
          />
        </video>

        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-transparent to-blue-900/10"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-sm mt-2 font-medium tracking-wider">SCROLL TO ENTER</span>
        </div>
      </div>

      {/* Ambient Effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse delay-2000"></div>
    </section>
  );
};
