// AllRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminRoutes from './components/admin/AdminRoutes';
import LandingRoutes from './components/landing/LandingRoutes';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="/" element={<LandingRoutes />} />
    </Routes>
  );
};

export default AllRoutes;
