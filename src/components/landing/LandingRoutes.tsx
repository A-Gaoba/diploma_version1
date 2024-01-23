// LandingRoutes.tsx

import React from 'react';
import Navbar from './shared/Navbar';
import Hero from './home/Hero';
import About from './about/About';
import Teachers from './teachers/TeachersList';
import Courses from './courses/CoursesList';
import Contact from "./contact/Contact"
import Students from './students/StudensList';
import Footer from './shared/Footer';
import NotFound from './NotFound'; // Import the NotFound component
import { heroData, teachersData, studentsData, coursesData } from './data/data';

const LandingRoutes = () => {
  return (
    <div>
      <Navbar />
      <Hero {...heroData} />
      <About />
      <Teachers teachers={teachersData} />
      <Courses courses={coursesData} />
      <Students students={studentsData} />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingRoutes;
