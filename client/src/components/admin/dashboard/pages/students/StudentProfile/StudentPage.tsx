// components/StudentPage.tsx

import React from 'react';
import { useParams } from 'react-router-dom';
import StudentProfile from './StudentProfile';
import AcademicDetails from './AcademicDetails';
import TeachersList from './TeachersList';
import { studentsData } from '../../../data/student'; // Adjust path as needed
import { teachersData } from '../../../data/teachers'; // Adjust path as needed

const StudentPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const studentId = parseInt(id || '0', 10); // Default to '0' to avoid NaN
  const student = studentsData.find(student => student.id === studentId);

  if (!student) {
    return <div className="text-red-500">Student not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{student.firstName} {student.lastName}'s Profile</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <StudentProfile student={student} />
          <AcademicDetails student={student} />
        </div>
        <TeachersList teachersData={teachersData} />
      </div>
    </div>
  );
};

export default StudentPage;
