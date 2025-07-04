import React from 'react';
import { X } from 'lucide-react';

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const PopupModal: React.FC<PopupModalProps> = ({
  isOpen,
  onClose,
  title,
  children
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
    >
      {/* Close Button */}
      <button
        onClick={handleCloseClick}
        className="fixed top-6 right-6 z-[60] w-12 h-12 bg-red-600/80 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-200 group border-2 border-red-400 hover:border-red-300 shadow-lg hover:shadow-red-500/50"
        style={{ zIndex: 9999 }}
      >
        <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
      </button>

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
        <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 rounded-2xl p-8 border border-purple-500/30 shadow-2xl">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-green-400 font-orbitron mb-6 text-center">
            {title}
          </h2>
          <div className="text-gray-300">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};