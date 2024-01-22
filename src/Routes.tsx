// AllRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminRoutes from './components/admin/AdminRoutes';
import LandingRoutes from './components/landing/LandingRoutes';
import ProfilesRoutes from './components/profiles/ProfilesRoutes';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingRoutes />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="/teacher/*" element={<ProfilesRoutes />} />
    </Routes>
  );
};

export default AllRoutes;
