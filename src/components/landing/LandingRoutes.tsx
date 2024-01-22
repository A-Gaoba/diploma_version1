// LandingRoutes.tsx

import React from 'react';
import Navbar from "./shared/Navbar"
import Hero from './home/Hero';
import About from './about/About';
import Teachers from './teachers/TeachersList';

const heroData = {
  title: 'Welcome to Al-Nahdah School',
  description: 'Empowering Minds, Building Futures.',
  videoFileName: '../../../public/landing/hero.mp4'
};

const teachersData = [
  {
    id: 1,
    name: 'John Doe',
    subject: 'Mathematics',
    imageUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Jane Smith',
    subject: 'Science',
    imageUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 1,
    name: 'John Doe',
    subject: 'Mathematics',
    imageUrl: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Jane Smith',
    subject: 'Science',
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const LandingRoutes = () => {
  return (
    <div >
      <Navbar />
      <Hero {...heroData} />
      <About />
      <Teachers teachers={teachersData} />
    </div>
  );
};

export default LandingRoutes;
