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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'About', href: 'about' },
    { name: 'Vision', href: 'vision' },
    { name: 'Tracks', href: 'tracks' },
    { name: 'Prizes', href: 'prizes' },
    { name: 'Schedule', href: 'schedule' }
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
                <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
                <div className="absolute inset-0 w-6 h-6 bg-yellow-400 rounded-full blur-md opacity-30 animate-pulse"></div>
              </div>
              <Shield className="w-6 h-6 text-blue-400 animate-spin-slow" />
              <div className="relative">
                <Skull className="w-6 h-6 text-green-400 animate-pulse-doom" />
                <div className="absolute inset-0 w-6 h-6 bg-green-400 rounded-full blur-md opacity-30 animate-pulse-doom"></div>
              </div>
            </div>
            <span className="text-white font-bold text-lg font-orbitron">MARVEL MULTIVERSE</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium relative group"
              >
                {item.name}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-red-500 group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('hero')}
              className="px-6 py-2 bg-gradient-to-r from-red-600 to-yellow-600 text-white font-bold rounded-lg hover:scale-105 transition-transform duration-200 relative overflow-hidden group"
            >
              <span className="relative z-10">JOIN NOW</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white relative z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative">
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 animate-spin-slow" />
              ) : (
                <Menu className="w-6 h-6 animate-pulse" />
              )}
              <div className="absolute inset-0 w-6 h-6 bg-blue-400 rounded-full blur-lg opacity-20 animate-pulse"></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800 animate-fade-in">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2 relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute left-0 top-0 w-0 h-full bg-gradient-to-r from-yellow-400/20 to-red-500/20 group-hover:w-full transition-all duration-300 rounded"></div>
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('hero')}
                className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-yellow-600 text-white font-bold rounded-lg hover:scale-105 transition-transform duration-200 relative overflow-hidden group"
              >
                <span className="relative z-10">JOIN NOW</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};