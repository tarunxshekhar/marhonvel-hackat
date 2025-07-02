import React from 'react';
import { X } from 'lucide-react';

interface InfinityStoneModalProps {
  isOpen: boolean;
  onClose: () => void;
  stoneName: string;
  stoneImage: string;
  stoneGradient: string;
}

export const InfinityStoneModal: React.FC<InfinityStoneModalProps> = ({
  isOpen,
  onClose,
  stoneName,
  stoneImage,
  stoneGradient
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCloseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
    >
      {/* Close Button - Fixed Position with Higher Z-Index */}
      <button
        onClick={handleCloseClick}
        className="fixed top-6 right-6 z-[60] w-12 h-12 bg-red-600/80 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-200 group border-2 border-red-400 hover:border-red-300 shadow-lg hover:shadow-red-500/50"
        style={{ zIndex: 9999 }}
      >
        <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
      </button>

      {/* Fullscreen Image Container */}
      <div className="relative w-full h-full flex items-center justify-center p-4">
        {/* Stone Title */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-40">
          <h2 className={`text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stoneGradient} font-orbitron text-center`}>
            {stoneName}
          </h2>
        </div>

        {/* Plain Stone Image - Fullscreen */}
        <img
          src={stoneImage}
          alt={stoneName}
          className="max-w-full max-h-full object-contain pointer-events-none"
          onError={(e) => {
            e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect width="400" height="400" fill="%23374151"/%3E%3Ctext x="200" y="200" text-anchor="middle" dy=".3em" fill="%23fff" font-size="24"%3EStone Image%3C/text%3E%3C/svg%3E';
          }}
        />

        {/* Success Message - Bottom */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40">
          <div className={`bg-gradient-to-r ${stoneGradient} bg-opacity-20 rounded-xl px-6 py-3 border border-white/30 backdrop-blur-sm`}>
            <p className="text-white font-semibold text-lg text-center">
              🎉 STONE CLAIMED! 🎉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};