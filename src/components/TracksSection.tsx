import React from 'react';
import { Brain, Shield, Heart, Zap, Code, Atom } from 'lucide-react';

export const TracksSection: React.FC = () => {
  const tracks = [
    {
      icon: Brain,
      title: "JARVIS INTELLIGENCE",
      subtitle: "AI/ML Track",
      description: "Build the next generation of artificial intelligence. Create systems that learn, adapt, and evolve like Tony Stark's JARVIS.",
      color: "yellow",
      gradient: "from-yellow-500 to-red-500",
      bgGradient: "from-yellow-900/20 to-red-900/20",
      borderColor: "border-yellow-500/30 hover:border-yellow-400",
      character: "Iron Man"
    },
    {
      icon: Shield,
      title: "SHIELD PROTOCOL",
      subtitle: "Cybersecurity Track",
      description: "Defend the digital realm with unbreakable security. Create solutions worthy of protecting the world's greatest secrets.",
      color: "blue",
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-900/20 to-purple-900/20",
      borderColor: "border-blue-500/30 hover:border-blue-400",
      character: "Captain America"
    },
    {
      icon: Heart,
      title: "HEROIC IMPACT",
      subtitle: "Social Good Track",
      description: "Use technology to make a difference. Build solutions that protect, serve, and uplift communities worldwide.",
      color: "red",
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-900/20 to-pink-900/20",
      borderColor: "border-red-500/30 hover:border-red-400",
      character: "Captain America"
    },
    {
      icon: Atom,
      title: "DOOM'S DOMAIN",
      subtitle: "Quantum Computing",
      description: "Harness the power of quantum mechanics. Push the boundaries of what's possible with reality-bending technology.",
      color: "green",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-900/20 to-emerald-900/20",
      borderColor: "border-green-500/30 hover:border-green-400",
      character: "Doctor Doom"
    },
    {
      icon: Zap,
      title: "ARC REACTOR",
      subtitle: "Clean Energy",
      description: "Power the future with sustainable technology. Create solutions for a cleaner, more efficient world.",
      color: "cyan",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-900/20 to-blue-900/20",
      borderColor: "border-cyan-500/30 hover:border-cyan-400",
      character: "Iron Man"
    },
    {
      icon: Code,
      title: "MULTIVERSE DEV",
      subtitle: "Open Innovation",
      description: "Break the rules and create something unprecedented. The multiverse is your playground for innovation.",
      color: "purple",
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-900/20 to-indigo-900/20",
      borderColor: "border-purple-500/30 hover:border-purple-400",
      character: "Doctor Doom"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Only 1 small floating SVG for Tracks Section */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-1/8 animate-float-slow opacity-8">
          <img 
            src="https://res.cloudinary.com/dhrxupu5i/image/upload/v1750355424/1_kfge4p.svg" 
            alt="Marvel Logo" 
            className="w-6 h-6 filter drop-shadow-lg"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 font-orbitron">
            CHOOSE YOUR BATTLEGROUND
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Six legendary tracks await your genius. Each path offers unique challenges and rewards 
            worthy of the Marvel Universe's greatest heroes and villains.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => {
            const IconComponent = track.icon;
            return (
              <div 
                key={index}
                className={`group relative bg-gradient-to-br ${track.bgGradient} rounded-2xl p-8 border ${track.borderColor} transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden`}
              >
                {/* Hover Effect Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${track.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Floating Icon Background */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <IconComponent className="w-24 h-24" />
                </div>

                <div className="relative z-10">
                  {/* Track Icon */}
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <IconComponent className={`w-12 h-12 text-${track.color}-400 mr-4`} />
                      <div className={`absolute inset-0 w-12 h-12 bg-${track.color}-400 rounded-full blur-lg opacity-30 animate-pulse`}></div>
                    </div>
                  </div>

                  {/* Track Info */}
                  <h3 className={`text-2xl font-bold text-${track.color}-400 mb-2 font-orbitron`}>
                    {track.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-white mb-4">
                    {track.subtitle}
                  </h4>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {track.description}
                  </p>

                  {/* Character Badge */}
                  <div className={`inline-flex items-center px-3 py-1 rounded-full bg-${track.color}-500/20 border border-${track.color}-500/30`}>
                    <span className={`text-sm text-${track.color}-400 font-semibold`}>
                      Sponsored by {track.character}
                    </span>
                  </div>

                  {/* Hover CTA */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-6">
                    <button className={`w-full py-3 bg-gradient-to-r ${track.gradient} text-white font-bold rounded-lg transform transition-transform duration-200 hover:scale-105`}>
                      ENTER THE ARENA
                    </button>
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 rounded-2xl border-2 border-${track.color}-400 animate-pulse`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};