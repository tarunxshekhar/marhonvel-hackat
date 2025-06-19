import React from 'react';
import { FloatingElements } from './components/FloatingElements';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { TracksSection } from './components/TracksSection';
import { PrizesSection } from './components/PrizesSection';
import { ScheduleSection } from './components/ScheduleSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <FloatingElements />
      <HeroSection />
      <AboutSection />
      <TracksSection />
      <PrizesSection />
      <ScheduleSection />
      <Footer />
    </div>
  );
}

export default App;