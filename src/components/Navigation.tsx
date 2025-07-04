import React, { useState, useEffect } from 'react';
import { Zap, Shield, Skull, Menu, X } from 'lucide-react';
import { PopupModal } from './PopupModal';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

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
    { name: 'About', href: 'about', type: 'scroll' },
    { name: 'Vision', href: 'vision', type: 'scroll' },
    { name: 'Tracks', href: 'tracks', type: 'scroll' },
    { name: 'Prizes', href: 'prizes', type: 'scroll' },
    { name: 'Schedule', href: 'schedule', type: 'scroll' },
    { name: 'Mentors', href: 'mentors', type: 'modal' },
    { name: 'FAQs', href: 'faqs', type: 'modal' }
  ];

  const handleNavClick = (item: any) => {
    if (item.type === 'scroll') {
      scrollToSection(item.href);
    } else if (item.type === 'modal') {
      setActiveModal(item.href);
    }
    setIsMobileMenuOpen(false);
  };

  const renderModalContent = () => {
    switch (activeModal) {
      case 'mentors':
        return (
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Our mentors are industry experts and Marvel Universe legends who will guide you through your journey:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-yellow-900/30 to-red-900/30 rounded-xl p-6 border border-yellow-500/30">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Tony Stark</h3>
                <p className="text-gray-300">AI/ML and Innovation Expert</p>
              </div>
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-500/30">
                <h3 className="text-xl font-bold text-blue-400 mb-2">Steve Rogers</h3>
                <p className="text-gray-300">Leadership and Team Building</p>
              </div>
              <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-500/30">
                <h3 className="text-xl font-bold text-green-400 mb-2">Victor Von Doom</h3>
                <p className="text-gray-300">Advanced Technology and Strategy</p>
              </div>
              <div className="bg-gradient-to-br from-red-900/30 to-pink-900/30 rounded-xl p-6 border border-red-500/30">
                <h3 className="text-xl font-bold text-red-400 mb-2">Natasha Romanoff</h3>
                <p className="text-gray-300">Cybersecurity and Tactical Planning</p>
              </div>
            </div>
            <p className="text-center text-gray-400 mt-6">
              More mentors will be announced soon. Stay tuned for updates!
            </p>
          </div>
        );
      case 'faqs':
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl p-6 border border-purple-500/30">
                <h3 className="text-lg font-bold text-purple-400 mb-2">Q: Who can participate?</h3>
                <p className="text-gray-300">A: Students from all universities and colleges are welcome to participate. Teams can have 2-4 members.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl p-6 border border-blue-500/30">
                <h3 className="text-lg font-bold text-blue-400 mb-2">Q: Is there a registration fee?</h3>
                <p className="text-gray-300">A: No, the hackathon is completely free to participate in.</p>
              </div>
              <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-500/30">
                <h3 className="text-lg font-bold text-green-400 mb-2">Q: What should I bring?</h3>
                <p className="text-gray-300">A: Bring your laptop, chargers, and your creativity! Food and accommodation will be provided.</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-xl p-6 border border-yellow-500/30">
                <h3 className="text-lg font-bold text-yellow-400 mb-2">Q: How are teams formed?</h3>
                <p className="text-gray-300">A: You can register with your existing team or join our team formation session at the event.</p>
              </div>
              <div className="bg-gradient-to-br from-red-900/30 to-pink-900/30 rounded-xl p-6 border border-red-500/30">
                <h3 className="text-lg font-bold text-red-400 mb-2">Q: What technologies can we use?</h3>
                <p className="text-gray-300">A: Any technology stack is allowed. We encourage innovation and creativity in your choice of tools.</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const getModalTitle = () => {
    switch (activeModal) {
      case 'mentors':
        return 'MARVEL MENTORS';
      case 'faqs':
        return 'FREQUENTLY ASKED QUESTIONS';
      default:
        return '';
    }
  };
  return (
    <>
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
                onClick={() => handleNavClick(item)}
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
                  onClick={() => handleNavClick(item)}
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

    {/* Modal */}
    <PopupModal
      isOpen={activeModal !== null}
      onClose={() => setActiveModal(null)}
      title={getModalTitle()}
    >
      {renderModalContent()}
    </PopupModal>
    </>
  );
};