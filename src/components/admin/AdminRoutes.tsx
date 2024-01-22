import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './dashboard/shared/Layout';
import Dashboard from './dashboard/Home';
import Students from './dashboard/pages/students/Home';
import StudentProfile from './dashboard/pages/students/StudentPage';
import AddStudent from './dashboard/pages/students/AddStudentForm';

import TeachersList from './dashboard/pages/Teachers/Home';
// import TeacherProfile from './dashboard/pages/Teachers/TeacherPage';
// import AddTeacher from './dashboard/pages/Teachers/AddTeacher';
import ClassesList from './dashboard/pages/Classes//Home';
// import CreateClass from './dashboard/pages/Classes/CreateClass';
// import SubjectsList from './dashboard/pages/Subjects/Home';
// import AddSubject from './dashboard/pages/Subjects/AddSubject';

const handleAddStudent = (newStudent) => {
  // Add logic to handle adding a new student
  console.log('Adding new student:', newStudent);
};

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="students" element={<Students />} />
        <Route path="/student/:id" element={<StudentProfile />} />
        {/* <Route path="/add-student" element={<AddStudent />} /> */}
        <Route path="teachers" element={<TeachersList />} />
        <Route path="/classes" element={<ClassesList />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
