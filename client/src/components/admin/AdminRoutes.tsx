import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Layout = React.lazy(() => import('./dashboard/shared/Layout'));
const Dashboard = React.lazy(() => import('./dashboard/Home'));
const Students = React.lazy(() => import('./dashboard/pages/students/Home/HomeStudents'));
const StudentProfile = React.lazy(() => import('./dashboard/pages/students/StudentPage'));
// const AddStudent = React.lazy(() => import('./dashboard/pages/students/AddStudentForm'));
const AddStudent = React.lazy(() => import('./dashboard/pages/students/StudentForm/AddStudent.tsx'));

const Teachers = React.lazy(() => import('./dashboard/pages/teachers/HomeTeachers.tsx'));
const TeacherProfile = React.lazy(() => import('./dashboard/pages/Teachers/TeacherPage.tsx'));
const AddTeacher = React.lazy(() => import('./dashboard/pages/Teachers/AddTeacher'));

const ClassesList = React.lazy(() => import('./dashboard/pages/classes/HomeClasses'));
const CreateClass = React.lazy(() => import('./dashboard/pages/Classes/CreateClass'));

const SubjectsList = React.lazy(() => import('./dashboard/pages/Subjects/HomeSubjects'));
const AddSubject = React.lazy(() => import('./dashboard/pages/Subjects/AddSubject'));

const Attendence = React.lazy(() => import('./dashboard/pages/attendance/HomeAttandence'));
const NotFound = React.lazy(() => import('../NotFound'));



const handleAddStudent = (newStudent) => {
  console.log('Adding new student:', newStudent);
};

const handleAddTeacher = (newTeacher) => {
  console.log('Adding new teacher:', newTeacher);
};

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<React.Suspense fallback={<div>Loading...</div>}><Layout /></React.Suspense>}>
        <Route index element={<React.Suspense fallback={<div>Loading...</div>}><Dashboard /></React.Suspense>} />
        {/* students */}
        <Route path="students" element={<React.Suspense fallback={<div>Loading...</div>}><Students /></React.Suspense>} />
        <Route path="/students/:id" element={<React.Suspense fallback={<div>Loading...</div>}><StudentProfile /></React.Suspense>} />
        <Route path="/students/add" element={<React.Suspense fallback={<div>Loading...</div>}><AddStudent onAddStudent={handleAddStudent} /></React.Suspense>} />
        {/* teachers */}
        <Route path="teachers" element={<React.Suspense fallback={<div>Loading...</div>}><Teachers /></React.Suspense>} />
        <Route path="/teachers/:id" element={<React.Suspense fallback={<div>Loading...</div>}><TeacherProfile id={1} firstName="John" lastName="Doe" image="teacher.jpg" subject="Math" timeOfClass="9:00 AM" email="john.doe@example.com" degrees={[]} institutions={[]} specializations={[]} awards={[]} subjectsTaught={[]} previousInstitutions={[]} /></React.Suspense>} />
        <Route path="/teachers/add" element={<React.Suspense fallback={<div>Loading...</div>}><AddTeacher onAddTeacher={handleAddTeacher} /></React.Suspense>} />

        {/* classes */}
        <Route path="/classes" element={<React.Suspense fallback={<div>Loading...</div>}><ClassesList /></React.Suspense>} />
        <Route path="/classes/create" element={<React.Suspense fallback={<div>Loading...</div>}><CreateClass /></React.Suspense>} />

        <Route path="/subjects" element={<React.Suspense fallback={<div>Loading...</div>}><SubjectsList /></React.Suspense>} />
        <Route path="/subjects/add" element={<React.Suspense fallback={<div>Loading...</div>}><AddSubject /></React.Suspense>} />

        <Route path='/attendance' element={<React.Suspense fallback={<div>Loading...</div>}><Attendence /></React.Suspense>} />

        <Route path="*" element={<React.Suspense fallback={<div>Loading...</div>}><NotFound /></React.Suspense>} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
