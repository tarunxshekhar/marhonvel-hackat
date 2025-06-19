import React, { useState, useEffect } from 'react';
import { Zap, Shield, Skull, Play } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 8,
    minutes: 42,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-red-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-20 right-20 w-6 h-6 bg-blue-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-20 left-20 w-8 h-8 bg-green-400 rounded-full animate-bounce opacity-30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Character Icons */}
        <div className="flex justify-center items-center space-x-8 mb-8">
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

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600 animate-gradient-shift font-orbitron tracking-wider">
          MARVEL
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 font-orbitron">
          MULTIVERSE HACKATHON
        </h2>
        
        <div className="text-xl md:text-2xl text-gray-300 mb-8 font-bold tracking-wide">
          <span className="text-yellow-400">BUILD.</span> 
          <span className="text-red-500 mx-2">FIGHT.</span> 
          <span className="text-blue-400">DOMINATE.</span>
        </div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto mb-12">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <div key={unit} className="relative group">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:scale-105">
                <div className="text-2xl md:text-3xl font-bold text-white font-orbitron">
                  {value.toString().padStart(2, '0')}
                </div>
                <div className="text-xs uppercase text-gray-400 tracking-wider">
                  {unit}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-yellow-600 text-white font-bold text-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <span className="relative z-10 flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              JOIN THE MISSION
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <span className="relative z-10 flex items-center">
              <Play className="w-5 h-5 mr-2" />
              WATCH TRAILER
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>
    </section>
  );
};