import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import AcademicInfo from './AcademicInfo';
import PersonalInfo from './PersonalInfo';
import TeacherBox from './TeacherBox';
import { studentsData } from '../../../data/student'; // Adjust path as needed
import { teachersData } from '../../../data/teachers'; // Adjust path as needed

const StudentPage: React.FC = () => {
  const [showAllTeachers, setShowAllTeachers] = useState(false);
  const { id } = useParams<{ id: string }>();
  const studentId = parseInt(id || '0', 10);
  const student = studentsData.find(student => student.id === studentId);

  const toggleShowAllTeachers = () => setShowAllTeachers(!showAllTeachers);

  if (!student) {
    return <div className="text-red-500">Student not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{student.firstName} {student.lastName}'s Profile</h1>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <section className="bg-white p-6 rounded-lg shadow mb-4">
            <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
            <PersonalInfo label="Full Name" value={`${student.firstName} ${student.lastName}`} />
            <PersonalInfo label="Date of Birth" value={student.dateOfBirth} />
            <PersonalInfo label="Email" value={student.email} />
            <PersonalInfo label="Phone Number" value={student.phoneNumber} />
            <PersonalInfo label="Address" value={student.address} />
          </section>

          <section className="bg-white p-6 rounded-lg shadow mb-4">
            <h2 className="text-xl font-semibold mb-2">Academic Information</h2>
            <AcademicInfo label="Student ID" value={student.id} />
            <AcademicInfo label="Class/Grade Level" value={`Class ${student.grade}`} />
            {/* Additional academic info can go here */}
          </section>
        </div>

        <aside className="md:col-span-1">
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Teachers</h2>
            <div className="space-y-4">
              {teachersData.slice(0, showAllTeachers ? teachersData.length : 3).map(teacher => (
                <TeacherBox key={teacher.id} teacher={teacher} />
              ))}
            </div>
            {teachersData.length > 3 && (
              <button
                className="mt-4 text-blue-600 hover:text-blue-800"
                onClick={toggleShowAllTeachers}
              >
                {showAllTeachers ? 'Show Less' : 'Show More'}
              </button>
            )}
          </section>
        </aside>
      </div>
    </div>
  );
};

export default StudentPage;
