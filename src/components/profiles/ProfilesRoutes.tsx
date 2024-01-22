import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TeacherProfilePage from './teacher/Home/profile';

const ProfilesRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/:teacherId" element={<TeacherProfilePage />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
};

export default ProfilesRoutes;

