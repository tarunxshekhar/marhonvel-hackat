import React, { useState } from 'react';
import { Zap, Shield, Skull, Github, Twitter, Linkedin, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const [activeIcon, setActiveIcon] = useState(0);

  const marvelIcons = [
    { icon: Zap, color: 'text-yellow-400', name: 'Iron Man', bg: 'bg-yellow-400/20' },
    { icon: Shield, color: 'text-blue-400', name: 'Captain America', bg: 'bg-blue-400/20' },
    { icon: Skull, color: 'text-green-400', name: 'Doctor Doom', bg: 'bg-green-400/20' }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % marvelIcons.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="flex space-x-2 mr-4">
                {marvelIcons.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div 
                      key={index}
                      className={`relative p-2 rounded-full transition-all duration-500 ${
                        activeIcon === index ? item.bg : 'bg-gray-800'
                      }`}
                    >
                      <IconComponent 
                        className={`w-6 h-6 transition-colors duration-500 ${
                          activeIcon === index ? item.color : 'text-gray-500'
                        }`} 
                      />
                      {activeIcon === index && (
                        <div className={`absolute inset-0 rounded-full ${item.bg} animate-ping`}></div>
                      )}
                    </div>
                  );
                })}
              </div>
              <h3 className="text-2xl font-bold font-orbitron">
                MARVEL MULTIVERSE
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Where heroes, villains, and innovators collide to forge the future. 
              Join the greatest hackathon in the multiverse and unleash your potential.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-400 font-orbitron">
              QUICK ACCESS
            </h4>
            <ul className="space-y-2">
              {[
                'About the Event',
                'Tracks & Challenges',
                'Prizes & Rewards',
                'Schedule',
                'Mentors',
                'FAQs'
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-colors duration-200 block py-1"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-blue-400 font-orbitron">
              MISSION CONTROL
            </h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Stark Tower<br />
                    New York City, NY<br />
                    Earth-616
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-yellow-400 mr-3" />
                <p className="text-gray-300">
                  support@marvelhackathon.com
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg border border-gray-600">
              <p className="text-sm text-gray-300">
                <span className="text-green-400 font-semibold">Status:</span> Portal Active
              </p>
              <p className="text-sm text-gray-300">
                <span className="text-blue-400 font-semibold">Security:</span> SHIELD Protected
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Marvel Multiverse Hackathon. All rights reserved across all dimensions.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Code of Conduct
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Footer Glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-32 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
    </footer>
  );
};