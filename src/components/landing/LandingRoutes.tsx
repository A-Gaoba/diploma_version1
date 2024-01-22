// LandingRoutes.tsx

import React from 'react';
import Navbar from "./shared/Navbar"
import Hero from './home/Hero';
import About from './about/About';
import Teachers from './teachers/TeachersList';
import Courses from './courses/CoursesList'
import Students from './students/StudensList';

import { heroData, teachersData, studentsData, coursesData } from './data/data';
import Footer from './shared/Footer';


const LandingRoutes = () => {
  return (
    <div >
      <Navbar />
      <Hero {...heroData} />
      <About />
      <Teachers teachers={teachersData} />
      <Courses courses={coursesData} />
      <Students students={studentsData} />
      <Footer />

    </div>
  );
};

export default LandingRoutes;
