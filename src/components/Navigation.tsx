import React, { useState, useEffect } from 'react';
import { Zap, Shield, Skull, Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Register', href: '#register' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-lg border-b border-gray-800' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1">
              <div className="relative">
                <Zap className="w-6 h-6 text-yellow-400" />
                <div className="absolute inset-0 w-6 h-6 bg-yellow-400 rounded-full blur-md opacity-30 animate-pulse"></div>
              </div>
              <Shield className="w-6 h-6 text-blue-400 animate-spin-slow" />
              <div className="relative">
                <Skull className="w-6 h-6 text-green-400" />
                <div className="absolute inset-0 w-6 h-6 bg-green-400 rounded-full blur-md opacity-30 animate-pulse-doom"></div>
              </div>
            </div>
            <span className="text-white font-bold text-lg font-orbitron">MARVEL MULTIVERSE</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium relative group"
              >
                {item.name}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-red-500 group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
            <button className="px-6 py-2 bg-gradient-to-r from-red-600 to-yellow-600 text-white font-bold rounded-lg hover:scale-105 transition-transform duration-200">
              JOIN NOW
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full px-6 py-2 bg-gradient-to-r from-red-600 to-yellow-600 text-white font-bold rounded-lg hover:scale-105 transition-transform duration-200">
                JOIN NOW
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};