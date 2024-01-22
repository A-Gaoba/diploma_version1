// LandingRoutes.tsx

import React from 'react';
import Navbar from "./shared/Navbar"
import Hero from './home/Hero';
import About from './about/About';

const heroData = {
  title: 'Welcome to Al-Nahdah School',
  description: 'Empowering Minds, Building Futures.',
  videoFileName: '../../../public/landing/hero.mp4'
};

const LandingRoutes = () => {
  return (
    <div >
      <Navbar />
      <Hero {...heroData} />
      <About />
    </div>
  );
};

export default LandingRoutes;
