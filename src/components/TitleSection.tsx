import React from 'react';
import { Zap, Shield, Skull } from 'lucide-react';

export const TitleSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-20 right-20 w-6 h-6 bg-blue-400 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-8 h-8 bg-green-400 rounded-full animate-bounce opacity-20"></div>
        <div className="absolute top-1/2 right-10 w-3 h-3 bg-red-400 rounded-full animate-ping opacity-50"></div>
        <div className="absolute bottom-10 right-1/3 w-5 h-5 bg-purple-400 rounded-full animate-pulse opacity-30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Character Icons */}
        <div className="flex justify-center items-center space-x-8 mb-12">
          <div className="relative">
            <Zap className="w-16 h-16 text-yellow-400 animate-pulse drop-shadow-2xl" />
            <div className="absolute inset-0 w-16 h-16 bg-yellow-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
          </div>
          <div className="relative">
            <Shield className="w-20 h-20 text-blue-600 animate-spin-slow drop-shadow-2xl" />
            <div className="absolute inset-0 w-20 h-20 bg-blue-600 rounded-full blur-xl opacity-30"></div>
          </div>
          <div className="relative">
            <Skull className="w-16 h-16 text-green-500 animate-pulse-doom drop-shadow-2xl" />
            <div className="absolute inset-0 w-16 h-16 bg-green-500 rounded-full blur-xl opacity-30 animate-pulse-doom"></div>
          </div>
        </div>

        {/* Marvel Logo Effect */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600 animate-gradient-shift font-orbitron tracking-wider drop-shadow-2xl mb-4">
            MARVEL
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 font-orbitron">
            MULTIVERSE HACKATHON
          </h2>
        </div>

        {/* Tagline */}
        <div className="text-2xl md:text-3xl text-white mb-8 font-bold tracking-wide drop-shadow-lg">
          <span className="text-yellow-400">BUILD.</span> 
          <span className="text-red-500 mx-3">FIGHT.</span> 
          <span className="text-blue-400">DOMINATE.</span>
        </div>

        {/* Epic Description */}
        <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
          When genius meets justice and power converges with innovation, legends are born. 
          Join the greatest hackathon in the multiverse where heroes and villains unite to forge the future.
        </p>

        {/* Decorative Elements */}
        <div className="flex justify-center items-center space-x-4 opacity-60">
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-yellow-400"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="w-24 h-0.5 bg-gradient-to-r from-yellow-400 via-red-500 to-blue-400"></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-500"></div>
          <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-blue-400"></div>
        </div>
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>
    </section>
  );
};