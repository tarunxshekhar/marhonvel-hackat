import React, { useState, useRef, useEffect } from 'react';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('canplaythrough', () => setIsLoaded(true));
      audio.addEventListener('ended', () => setIsPlaying(false));
      
      return () => {
        audio.removeEventListener('canplaythrough', () => setIsLoaded(true));
        audio.removeEventListener('ended', () => setIsPlaying(false));
      };
    }
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio || !isLoaded) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Audio playback failed:', error);
    }
  };

  return (
    <>
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="https://studyratna.co/wp-content/uploads/2025/06/marvel_intro.mp3"
      />

      {/* Floating Music Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleMusic}
          disabled={!isLoaded}
          className={`group relative w-16 h-16 rounded-full bg-gradient-to-br from-red-600 via-yellow-500 to-blue-600 p-1 shadow-2xl transition-all duration-300 hover:scale-110 ${
            !isLoaded ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-yellow-500/30'
          }`}
        >
          {/* Inner Circle */}
          <div className="w-full h-full bg-black rounded-full flex items-center justify-center relative overflow-hidden">
            {/* Arc Reactor Effect */}
            <div className={`absolute inset-2 rounded-full border-2 border-cyan-400 ${isPlaying ? 'animate-spin-slow' : ''}`}>
              <div className="absolute inset-1 rounded-full border border-cyan-300 opacity-60"></div>
              <div className="absolute inset-2 rounded-full border border-cyan-200 opacity-40"></div>
            </div>

            {/* Iron Man Arc Reactor Core */}
            <div className={`relative z-10 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 ${
              isPlaying ? 'animate-pulse-reactor' : ''
            }`}>
              <div className="absolute inset-0.5 rounded-full bg-white opacity-80"></div>
              <div className="absolute inset-1 rounded-full bg-cyan-300"></div>
            </div>

            {/* Play/Pause Indicator */}
            <div className="absolute inset-0 flex items-center justify-center">
              {isPlaying ? (
                <div className="flex space-x-0.5">
                  <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
                  <div className="w-1 h-3 bg-white rounded-full animate-pulse delay-100"></div>
                </div>
              ) : (
                <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5"></div>
              )}
            </div>

            {/* Glow Effect */}
            {isPlaying && (
              <div className="absolute inset-0 rounded-full bg-cyan-400 opacity-20 animate-ping"></div>
            )}
          </div>

          {/* Hover Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <div className="bg-black text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap border border-gray-700">
              {!isLoaded ? 'Loading...' : isPlaying ? 'Pause Music' : 'Play Music'}
              <div className="absolute top-full right-4 w-0 h-0 border-l-2 border-r-2 border-t-4 border-l-transparent border-r-transparent border-t-black"></div>
            </div>
          </div>

          {/* Loading Indicator */}
          {!isLoaded && (
            <div className="absolute inset-0 rounded-full border-2 border-gray-600 border-t-yellow-400 animate-spin"></div>
          )}
        </button>

        {/* Sound Waves Animation */}
        {isPlaying && (
          <div className="absolute -top-2 -left-2 -right-2 -bottom-2 pointer-events-none">
            <div className="absolute inset-0 rounded-full border border-yellow-400 opacity-60 animate-ping"></div>
            <div className="absolute inset-2 rounded-full border border-red-400 opacity-40 animate-ping delay-300"></div>
            <div className="absolute inset-4 rounded-full border border-blue-400 opacity-30 animate-ping delay-700"></div>
          </div>
        )}
      </div>
    </>
  );
};