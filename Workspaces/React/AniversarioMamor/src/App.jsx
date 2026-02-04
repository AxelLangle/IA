import React from 'react';
import MainLayout from './components/layout/MainLayout';
import Hero from './components/sections/Hero';
import LoveCounter from './components/features/LoveCounter';
import Timeline from './components/features/Timeline';
import PhotoGallery from './components/features/PhotoGallery';
import CouponBook from './components/features/CouponBook';
import MusicPlayer from './components/features/MusicPlayer';

function App() {
  return (
    <MainLayout>
      <Hero />
      <LoveCounter />
      <Timeline />
      <PhotoGallery />
      <CouponBook />
      <MusicPlayer />

      {/* Footer / Copyright */}
      <footer className="text-center py-6 text-xs text-gray-300 bg-white">
        Con todo mi amor, para ti. ❤️
      </footer>
    </MainLayout>
  );
}

export default App;
