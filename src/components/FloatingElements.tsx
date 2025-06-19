import React from 'react';
import { Zap, Shield, Skull, Cpu, Target, Atom } from 'lucide-react';

export const FloatingElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Iron Man Elements */}
      <div className="absolute top-20 left-10 animate-float-slow">
        <Zap className="w-8 h-8 text-yellow-400 opacity-60 drop-shadow-lg" />
      </div>
      <div className="absolute top-40 right-20 animate-float-delayed">
        <Cpu className="w-6 h-6 text-blue-400 opacity-50" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float-reverse">
        <Atom className="w-10 h-10 text-cyan-400 opacity-40" />
      </div>
      
      {/* Captain America Elements */}
      <div className="absolute top-60 left-1/4 animate-spin-slow">
        <Shield className="w-12 h-12 text-blue-600 opacity-30" />
      </div>
      <div className="absolute bottom-60 right-1/4 animate-bounce-slow">
        <Target className="w-8 h-8 text-red-600 opacity-40" />
      </div>
      
      {/* Doctor Doom Elements */}
      <div className="absolute top-1/3 right-10 animate-pulse-doom">
        <Skull className="w-10 h-10 text-green-500 opacity-50" />
      </div>
      
      {/* Arc Reactor Glow */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-20 animate-pulse-reactor blur-xl"></div>
      </div>
    </div>
  );
};