import React from 'react';
import { Zap, Shield, Skull, Cpu, Target, Atom, Heart, Brain, Eye, Flame, Snowflake, Star } from 'lucide-react';

export const FloatingElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Priority SVG - Main Marvel Logo (only 3 instances, well spaccgcgced) */}
      <div className="absolute top-1/4 left-1/6 animate-float-slow opacity-12">
        <img 
          src="https://res.cloudinary.com/dhrxupu5i/image/upload/v1750355424/1_kfge4p.svg" 
          alt="Marvel Logo" 
          className="w-8 h-8 filter drop-shadow-lg"
        />
      </div>
      <div className="absolute top-2/3 right-1/5 animate-float-delayed opacity-10">
        <img 
          src="https://res.cloudinary.com/dhrxupu5i/image/upload/v1750355424/1_kfge4p.svg" 
          alt="Marvel Logo" 
          className="w-10 h-10 filter drop-shadow-lg"
        />
      </div>
      <div className="absolute bottom-1/3 left-2/3 animate-float-reverse opacity-15">
        <img 
          src="https://res.cloudinary.com/dhrxupu5i/image/upload/v1750355424/1_kfge4p.svg" 
          alt="Marvel Logo" 
          className="w-6 h-6 filter drop-shadow-lg"
        />
      </div>

      {/* Infinity Gauntlet (only 2 instances) */}
      <div className="absolute top-1/2 right-1/4 animate-float-slow opacity-8">
        <img 
          src="https://res.cloudinary.com/dhrxupu5i/image/upload/v1750355424/Avengers_Thanos_Infinity_pjoiyd.svg" 
          alt="Infinity Gauntlet" 
          className="w-7 h-7 filter drop-shadow-lg"
        />
      </div>
      <div className="absolute bottom-1/4 left-1/4 animate-float-delayed opacity-12">
        <img 
          src="https://res.cloudinary.com/dhrxupu5i/image/upload/v1750355424/Avengers_Thanos_Infinity_pjoiyd.svg" 
          alt="Infinity Gauntlet" 
          className="w-8 h-8 filter drop-shadow-lg"
        />
      </div>

      {/* Robot Head (only 1 instance) */}
      <div className="absolute top-3/4 right-1/6 animate-float-reverse opacity-10">
        <img 
          src="https://img.freepik.com/premium-vector/illustration-robot-head_994245-9115.jpg" 
          alt="Robot Head" 
          className="w-6 h-6 rounded-full filter drop-shadow-lg"
        />
      </div>

      {/* Iron Man Elements - reduced and smaller */}
      <div className="absolute top-1/3 left-1/8 animate-float-slow">
        <Zap className="w-4 h-4 text-yellow-400 opacity-30 drop-shadow-lg" />
      </div>
      <div className="absolute bottom-1/2 right-1/8 animate-float-delayed">
        <Atom className="w-5 h-5 text-cyan-400 opacity-25" />
      </div>
      
      {/* Captain America Elements - reduced */}
      <div className="absolute top-1/2 left-1/3 animate-spin-slow">
        <Shield className="w-6 h-6 text-blue-600 opacity-20" />
      </div>
      
      {/* Doctor Doom Elements - reduced */}
      <div className="absolute bottom-1/5 right-1/3 animate-pulse-doom">
        <Skull className="w-5 h-5 text-green-500 opacity-25" />
      </div>
      
      {/* Scarlet Witch Elements - minimal */}
      <div className="absolute top-1/5 right-2/3 animate-magic-pulse">
        <Star className="w-4 h-4 text-red-600 opacity-20" />
      </div>
      
      {/* Subtle Power Orbs - very minimal */}
      <div className="absolute top-1/6 left-1/2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-8 animate-pulse-reactor blur-lg"></div>
      </div>
      <div className="absolute bottom-1/6 right-1/2">
        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-500 to-pink-500 opacity-10 animate-magic-pulse blur-md"></div>
      </div>
    </div>
  );
};
