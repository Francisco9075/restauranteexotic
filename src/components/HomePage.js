import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import MenuSection from './MenuSection';
import ContactSection from './ContactSection'

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;