import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './dashboard/shared/Layout';
import Dashboard from './dashboard/Home';
import Students from './dashboard/pages/students/Home';
import StudentProfile from './dashboard/pages/students/StudentPage';
import AddStudent from './dashboard/pages/students/AddStudentForm';

import Teachers from './dashboard/pages/Teachers/Home';
import TeacherProfile from './dashboard/pages/Teachers/TeacherPage';
import AddTeacher from './dashboard/pages/Teachers/AddTeacher';
import ClassesList from './dashboard/pages/Classes/Home';
import CreateClass from './dashboard/pages/Classes/CreateClass';
import SubjectsList from './dashboard/pages/Subjects/Home';
import AddSubject from './dashboard/pages/Subjects/AddSubject';
import Attendence from './dashboard/pages/attendance/Home'
import NotFound from '../NotFound'; // Import your NotFound component


const handleAddStudent = (newStudent) => {
  console.log('Adding new student:', newStudent);
};

const handleAddTeacher = (newTeacher) => {
  console.log('Adding new teacher:', newTeacher);
};



const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        {/* students */}
        <Route path="students" element={<Students />} />
        <Route path="/students/:id" element={<StudentProfile />} />
        <Route path="/students/add" element={<AddStudent onAddStudent={handleAddStudent} />} />
        {/* teachers */}
        <Route path="teachers" element={<Teachers />} />
        <Route path="/teachers/:id" element={<TeacherProfile id={1} firstName="John" lastName="Doe" image="teacher.jpg" subject="Math" timeOfClass="9:00 AM" email="john.doe@example.com" degrees={[]} institutions={[]} specializations={[]} awards={[]} subjectsTaught={[]} previousInstitutions={[]} />} />
        <Route path="/teachers/add" element={<AddTeacher onAddTeacher={handleAddTeacher} />} />

        {/* classes */}
        <Route path="/classes" element={<ClassesList />} />
        <Route path="/classes/create" element={<CreateClass />} />

        <Route path="/subjects" element={<SubjectsList />} />
        <Route path="/subjects/add" element={<AddSubject />} />

        <Route path='/attendance' element={<Attendence />} />

        <Route path="*" element={<NotFound />} />


      </Route>
    </Routes>
  );
};

export default AdminRoutes;
