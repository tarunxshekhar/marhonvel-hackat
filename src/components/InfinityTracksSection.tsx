import React, { useState } from 'react';
import { Brain, Shield, Lock, Blocks, Lightbulb, Smartphone } from 'lucide-react';

export const InfinityTracksSection: React.FC = () => {
  const [activeStone, setActiveStone] = useState<number | null>(null);

  const infinityStones = [
    {
      name: "MIND STONE",
      track: "AI/ML",
      icon: Brain,
      color: "yellow",
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-900/30 to-orange-900/30",
      borderColor: "border-yellow-500/50",
      description: "Harness the power of artificial intelligence and machine learning to create intelligent solutions that can think, learn, and adapt.",
      powers: ["Neural Networks", "Deep Learning", "Computer Vision", "NLP"],
      glowColor: "shadow-yellow-500/50"
    },
    {
      name: "SPACE STONE",
      track: "Open Source",
      icon: Shield,
      color: "blue",
      gradient: "from-blue-400 to-cyan-500",
      bgGradient: "from-blue-900/30 to-cyan-900/30",
      borderColor: "border-blue-500/50",
      description: "Contribute to the open source universe, building tools and platforms that benefit developers worldwide.",
      powers: ["GitHub Projects", "Community Tools", "Developer APIs", "Libraries"],
      glowColor: "shadow-blue-500/50"
    },
    {
      name: "REALITY STONE",
      track: "Cybersecurity",
      icon: Lock,
      color: "red",
      gradient: "from-red-400 to-pink-500",
      bgGradient: "from-red-900/30 to-pink-900/30",
      borderColor: "border-red-500/50",
      description: "Bend the reality of digital security, creating impenetrable defenses against cyber threats and vulnerabilities.",
      powers: ["Threat Detection", "Encryption", "Secure Systems", "Privacy Tools"],
      glowColor: "shadow-red-500/50"
    },
    {
      name: "POWER STONE",
      track: "Blockchain",
      icon: Blocks,
      color: "purple",
      gradient: "from-purple-400 to-violet-500",
      bgGradient: "from-purple-900/30 to-violet-900/30",
      borderColor: "border-purple-500/50",
      description: "Wield the raw power of blockchain technology to create decentralized solutions and revolutionary financial systems.",
      powers: ["Smart Contracts", "DeFi", "NFTs", "Crypto Solutions"],
      glowColor: "shadow-purple-500/50"
    },
    {
      name: "TIME STONE",
      track: "Open Innovation",
      icon: Lightbulb,
      color: "green",
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-900/30 to-emerald-900/30",
      borderColor: "border-green-500/50",
      description: "Manipulate time itself with innovative solutions that transcend traditional boundaries and create the future.",
      powers: ["Creative Solutions", "Cross-Domain", "Future Tech", "Breakthrough Ideas"],
      glowColor: "shadow-green-500/50"
    },
    {
      name: "SOUL STONE",
      track: "Mobile Innovation",
      icon: Smartphone,
      color: "orange",
      gradient: "from-orange-400 to-red-500",
      bgGradient: "from-orange-900/30 to-red-900/30",
      borderColor: "border-orange-500/50",
      description: "Connect with the soul of mobile technology, creating apps and experiences that touch millions of lives.",
      powers: ["Native Apps", "Cross-Platform", "AR/VR", "IoT Integration"],
      glowColor: "shadow-orange-500/50"
    }
  ];

  return (
    <section id="tracks" className="py-20 bg-gradient-to-br from-black via-gray-900 to-purple-900 relative overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-1/4 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-80"></div>
        <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-50"></div>
        <div className="absolute bottom-10 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-pulse opacity-70"></div>
        <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-red-400 rounded-full animate-bounce opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-green-400 font-orbitron">
            INFINITY STONES
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Six legendary stones, each containing the power to reshape reality. 
            Choose your stone and master its domain to become the ultimate champion.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Infinity Gauntlet Layout */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Gauntlet Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-96 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          </div>

          {/* Stones Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {infinityStones.map((stone, index) => {
              const IconComponent = stone.icon;
              const isActive = activeStone === index;
              
              return (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br ${stone.bgGradient} rounded-3xl p-8 border-2 ${stone.borderColor} transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden ${
                    isActive ? `${stone.glowColor} shadow-2xl scale-105` : ''
                  }`}
                  onMouseEnter={() => setActiveStone(index)}
                  onMouseLeave={() => setActiveStone(null)}
                >
                  {/* Stone Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stone.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  {/* Infinity Stone */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${stone.gradient} flex items-center justify-center animate-pulse-slow relative overflow-hidden`}>
                        <IconComponent className="w-10 h-10 text-white relative z-10" />
                        {/* Inner glow */}
                        <div className={`absolute inset-2 rounded-full bg-gradient-to-br ${stone.gradient} opacity-60 animate-pulse`}></div>
                        {/* Outer glow */}
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${stone.gradient} blur-xl opacity-50 animate-pulse-slow`}></div>
                      </div>
                      {/* Power emanation */}
                      {isActive && (
                        <div className={`absolute inset-0 w-20 h-20 bg-gradient-to-br ${stone.gradient} rounded-full animate-ping opacity-30`}></div>
                      )}
                    </div>
                  </div>

                  {/* Stone Details */}
                  <div className="relative z-10 text-center">
                    <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stone.gradient} mb-2 font-orbitron`}>
                      {stone.name}
                    </h3>
                    <h4 className="text-xl font-semibold text-white mb-4">
                      {stone.track}
                    </h4>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {stone.description}
                    </p>

                    {/* Powers */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {stone.powers.map((power, powerIndex) => (
                        <div
                          key={powerIndex}
                          className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${stone.gradient} bg-opacity-20 border border-${stone.color}-500/30 text-${stone.color}-300`}
                        >
                          {power}
                        </div>
                      ))}
                    </div>

                    {/* Stone Activation Button */}
                    <button className={`w-full py-3 bg-gradient-to-r ${stone.gradient} text-white font-bold rounded-lg transform transition-all duration-300 hover:scale-105 relative overflow-hidden group`}>
                      <span className="relative z-10">CLAIM THIS STONE</span>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </button>
                  </div>

                  {/* Floating Particles */}
                  <div className="absolute top-4 left-4 w-1 h-1 bg-white rounded-full opacity-60 animate-ping"></div>
                  <div className="absolute top-8 right-8 w-2 h-2 bg-white rounded-full opacity-40 animate-bounce"></div>
                  <div className="absolute bottom-8 left-8 w-1 h-1 bg-white rounded-full opacity-50 animate-pulse"></div>
                </div>
              );
            })}
          </div>

          {/* Infinity Gauntlet Message */}
          <div className="text-center mt-16">
            <div className="inline-block bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-8 border border-purple-500/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4 font-orbitron">
                ASSEMBLE THE INFINITY GAUNTLET
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl">
                Master one stone or dare to wield multiple domains. 
                The most powerful solutions often combine the essence of several stones.
              </p>
              <div className="flex justify-center space-x-2">
                {infinityStones.map((stone, index) => (
                  <div
                    key={index}
                    className={`w-4 h-4 rounded-full bg-gradient-to-br ${stone.gradient} animate-pulse-slow`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cosmic Ambient Effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>
    </section>
  );
};