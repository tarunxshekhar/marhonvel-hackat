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

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-lg w-full mx-4">
        {/* Modal Content */}
        <div className={`relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border-2 border-purple-500/50 shadow-2xl transform transition-all duration-300 hover:scale-105`}>
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-red-600/20 hover:bg-red-600/40 rounded-full flex items-center justify-center transition-colors duration-200 group"
          >
            <X className="w-5 h-5 text-red-400 group-hover:text-red-300" />
          </button>

          {/* Stone Glow Effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${stoneGradient} opacity-10 rounded-3xl blur-xl`}></div>

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Stone Title */}
            <h2 className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stoneGradient} mb-6 font-orbitron`}>
              {stoneName}
            </h2>

            {/* Stone Image Container */}
            <div className="relative mb-6">
              <div className={`absolute inset-0 bg-gradient-to-r ${stoneGradient} rounded-full blur-2xl opacity-30 animate-pulse-slow`}></div>
              <div className="relative bg-black/50 rounded-2xl p-6 border border-purple-500/30">
                <img
                  src={stoneImage}
                  alt={stoneName}
                  className="w-full h-64 object-contain animate-pulse-slow"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect width="200" height="200" fill="%23374151"/%3E%3Ctext x="100" y="100" text-anchor="middle" dy=".3em" fill="%23fff" font-size="14"%3EStone Image%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
            </div>

            {/* Stone Power Message */}
            <div className={`bg-gradient-to-r ${stoneGradient} bg-opacity-20 rounded-xl p-4 border border-purple-400/30`}>
              <p className="text-white font-semibold text-lg mb-2">
                🎉 STONE CLAIMED! 🎉
              </p>
              <p className="text-gray-300">
                You have successfully claimed the {stoneName}! 
                The power of this infinity stone now flows through your team.
              </p>
            </div>

            {/* Mystical Effects */}
            <div className="absolute top-8 left-8 w-2 h-2 bg-white rounded-full opacity-60 animate-ping"></div>
            <div className="absolute top-12 right-12 w-3 h-3 bg-white rounded-full opacity-40 animate-bounce"></div>
            <div className="absolute bottom-12 left-12 w-2 h-2 bg-white rounded-full opacity-50 animate-pulse"></div>
          </div>
        </div>

        {/* Ambient Glow */}
        <div className={`absolute inset-0 bg-gradient-to-r ${stoneGradient} rounded-3xl blur-3xl opacity-20 animate-pulse-slow`}></div>
      </div>
    </div>
  );
};