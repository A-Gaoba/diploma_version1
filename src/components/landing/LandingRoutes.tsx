// LandingRoutes.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './home/Hero';
import Navbar from "./shared/Navbar"

const heroData = {
  title: 'Welcome to Al-Nahdah School',
  description: 'Empowering Minds, Building Futures.',
  videoFileName: '../../../public/landing/hero.mp4'
};

const LandingRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Hero {...heroData} />} />
      </Routes>
    </div>
  );
};

export default LandingRoutes;
