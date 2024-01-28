import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './shared/Navbar';
import Home from './Home';
import Footer from './shared/Footer';
import NotFound from '../NotFound';
import Courses from './courses/CoursesList';
import { coursesData } from './data/data';


const LandingRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses courses={coursesData}/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default LandingRoutes;
