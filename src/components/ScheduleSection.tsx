import React from 'react';
import { Clock, Calendar, MapPin, Users, Coffee, Trophy } from 'lucide-react';

export const ScheduleSection: React.FC = () => {
  const scheduleItems = [
    {
      time: "18:00",
      title: "MULTIVERSE PORTAL OPENS",
      description: "Registration & Welcome Reception",
      icon: Users,
      color: "blue",
      day: "Friday"
    },
    {
      time: "19:00",
      title: "OPENING CEREMONY",
      description: "Keynote: Tony Stark on Innovation",
      icon: Calendar,
      color: "yellow",
      day: "Friday"
    },
    {
      time: "20:00",
      title: "TEAM ASSEMBLY",
      description: "Form your Avengers squad",
      icon: Users,
      color: "red",
      day: "Friday"
    },
    {
      time: "21:00",
      title: "HACK BEGINS",
      description: "48 hours of pure innovation",
      icon: Clock,
      color: "green",
      day: "Friday"
    },
    {
      time: "08:00",
      title: "BREAKFAST & CAFFEINE",
      description: "Fuel for your genius",
      icon: Coffee,
      color: "yellow",
      day: "Saturday"
    },
    {
      time: "12:00",
      title: "MENTOR MEETINGS",
      description: "Guidance from industry legends",
      icon: Users,
      color: "blue",
      day: "Saturday"
    },
    {
      time: "18:00",
      title: "MIDPOINT SHOWCASE",
      description: "Demo your progress",
      icon: Calendar,
      color: "purple",
      day: "Saturday"
    },
    {
      time: "08:00",
      title: "FINAL SPRINT",
      description: "Last chance to perfect your creation",
      icon: Clock,
      color: "red",
      day: "Sunday"
    },
    {
      time: "15:00",
      title: "SUBMISSIONS CLOSE",
      description: "Deploy your final solution",
      icon: Calendar,
      color: "orange",
      day: "Sunday"
    },
    {
      time: "16:00",
      title: "FINAL PRESENTATIONS",
      description: "Present to the Marvel Council",
      icon: Users,
      color: "blue",
      day: "Sunday"
    },
    {
      time: "18:00",
      title: "AWARDS CEREMONY",
      description: "Crown the champions",
      icon: Trophy,
      color: "yellow",
      day: "Sunday"
    }
  ];

  const days = ["Friday", "Saturday", "Sunday"];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 font-orbitron">
            MISSION TIMELINE
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Three epic days. Unlimited possibilities. Follow the timeline to victory 
            in this multiverse-spanning competition.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 hidden lg:block"></div>

          {days.map((day, dayIndex) => (
            <div key={day} className="mb-16">
              {/* Day Header */}
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-2 font-orbitron">
                  {day.toUpperCase()}
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
              </div>

              {/* Day Events */}
              <div className="space-y-8">
                {scheduleItems
                  .filter(item => item.day === day)
                  .map((item, index) => {
                    const IconComponent = item.icon;
                    const isEven = index % 2 === 0;
                    
                    return (
                      <div 
                        key={index}
                        className={`relative flex items-center ${
                          isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                        } flex-col lg:justify-center`}
                      >
                        {/* Event Card */}
                        <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
                          <div className={`group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-${item.color}-500/30 hover:border-${item.color}-400 transition-all duration-300 hover:scale-105`}>
                            <div className="flex items-start">
                              <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-full flex items-center justify-center mr-4`}>
                                <IconComponent className="w-6 h-6 text-white" />
                              </div>
                              <div className="flex-grow">
                                <div className={`text-${item.color}-400 font-bold text-lg mb-1 font-orbitron`}>
                                  {item.time}
                                </div>
                                <h4 className="text-white font-bold text-xl mb-2">
                                  {item.title}
                                </h4>
                                <p className="text-gray-300">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                            
                            {/* Hover Glow Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-${item.color}-500/10 to-${item.color}-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                          </div>
                        </div>

                        {/* Timeline Node */}
                        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-10">
                          <div className={`w-4 h-4 bg-gradient-to-br from-${item.color}-400 to-${item.color}-600 rounded-full border-4 border-gray-900`}></div>
                          <div className={`absolute inset-0 w-4 h-4 bg-${item.color}-400 rounded-full animate-ping opacity-20`}></div>
                        </div>

                        {/* Spacer for opposite side */}
                        <div className="hidden lg:block w-5/12"></div>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4 font-orbitron">
              READY TO JOIN THE MULTIVERSE?
            </h3>
            <p className="text-gray-300 mb-6">
              Save the date and prepare for 48 hours of legendary innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:scale-105 transition-transform duration-200">
                <Calendar className="w-5 h-5 inline mr-2" />
                ADD TO CALENDAR
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:scale-105 transition-transform duration-200">
                <MapPin className="w-5 h-5 inline mr-2" />
                GET DIRECTIONS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};