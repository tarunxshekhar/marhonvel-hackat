import React from 'react';
import { Navigation } from './components/Navigation';
import { VideoHero } from './components/VideoHero';
import { TitleSection } from './components/TitleSection';
import { FloatingElements } from './components/FloatingElements';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { TracksSection } from './components/TracksSection';
import { PrizesSection } from './components/PrizesSection';
import { ScheduleSection } from './components/ScheduleSection';
import { Footer } from './components/Footer';
import { MusicPlayer } from './components/MusicPlayer';

function App() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <Navigation />
      <VideoHero />
      <TitleSection />
      <FloatingElements />
      <HeroSection />
      <AboutSection />
      <TracksSection />
      <PrizesSection />
      <ScheduleSection />
      <Footer />
      <MusicPlayer />
    </div>
  );
}

export default App;