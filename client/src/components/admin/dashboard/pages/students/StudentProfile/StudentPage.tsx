import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { studentsData } from '../../../data/student'; 
import { teachersData } from '../../../data/teachers'; 
import AcademicInfo from './AcademicInfo';
import PersonalInfo from './PersonalInfo';
import TeacherBox from './TeacherBox';

const StudentPage: React.FC = () => {
  const [showAllTeachers, setShowAllTeachers] = useState(false);
  const { id } = useParams<{ id?: string }>();
  const student = studentsData.find(s => s.id === parseInt(id || '', 10));

  if (!student) {
    return <div className="text-red-500">{!id ? 'Invalid student ID' : 'Student not found'}</div>;
  }

  return (
    <div className="md:p-1 bg-gray-100">
      {/* Student Profile and other sections */}
      {/* Simplified for brevity */}
      <main className="md:w-3/4">
        {/* Student's personal and academic details */}
      </main>
      <aside className="md:w-1/4 md:pl-2 mb-8 md:mb-0">
        <section className="mb-8 bg-white p-2 rounded-md shadow-md">
          <h2 className="md:text-xl font-semibold mb-7">Teachers</h2>
          {teachersData.slice(0, showAllTeachers ? teachersData.length : 3).map(teacher => (
            <TeacherBox key={teacher.id} teacher={teacher} />
          ))}
          {teachersData.length > 3 && (
            <button
              className="text-blue-500 hover:underline"
              onClick={() => setShowAllTeachers(!showAllTeachers)}
            >
              {showAllTeachers ? 'Show Less' : 'Show More'}
            </button>
          )}
        </section>
      </aside>
    </div>
  );
};

export default StudentPage;
