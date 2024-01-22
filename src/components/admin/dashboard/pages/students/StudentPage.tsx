import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { studentsData } from '../../data/student';
import { teachersData } from '../../data/teachers';

interface PersonalInfoProps {
  label: string;
  value: string | number;
}

interface AcademicInfoProps {
  label: string;
  value: string | number;
}

interface Teacher {
  id: number;
  firstName: string;
  subject: string;
  timeOfClass: string;
  image: string;
}

const AcademicInfo: React.FC<AcademicInfoProps> = ({ label, value }) => (
  <p className="mb-2 md:text-base text-sm">
    <span className="font-bold">{label}:</span> {value}
  </p>
);

const PersonalInfo: React.FC<PersonalInfoProps> = ({ label, value }) => (
  <p className="mb-2 text-sm md:text-base">
    <span className="text-gray-700 font-bold">{label}:</span> {value}
  </p>
);

const TeacherBox: React.FC<{ teacher: Teacher }> = ({ teacher }) => (
  <div className="border p-2 mb-4 rounded-md shadow-md flex flex-col justify-center items-center">
    <img
      src={teacher.image}
      alt={teacher.firstName}
      className="w-12 h-12 object-cover rounded-full mb-2 bg-dark-purple"
    />
    <h3 className="font-semibold text-lg">{teacher.firstName}</h3>
    <p className="text-sm text-gray-600 mb-2">{teacher.subject}</p>
    <p className="text-sm text-gray-600">{`${teacher.timeOfClass}`}</p>
  </div>
);

const StudentPage: React.FC = () => {
  const [showAllTeachers, setShowAllTeachers] = useState(false);

  const toggleShowAllTeachers = () => {
    setShowAllTeachers(!showAllTeachers);
  };

  const attendanceInfo = {
    totalClassesAttended: 25,
    attendancePercentage: 80,
  };

  const { id } = useParams<{ id?: string }>();
  const student = studentsData.find((s) => s.id === parseInt(id || '', 10));

  if (!student) {
    return <div className="text-red-500">{!id ? 'Invalid student ID' : 'Student not found'}</div>;
  }

  return (
    <div className="md:p-1 bg-gray-100">
      <div className="flex flex-col md:flex-row">
        <main className="md:w-3/4">
          <h1 className="md:text-3xl font-bold bg-white p-2 mb-4">{`${student.firstName} ${student.lastName}'s Profile`}</h1>

          <section className="bg-white rounded-md shadow-md mb-4">
            <div className=" inset-0 flex items-center justify-center">
              {/* <span className="w-full h-32 object-cover" style={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(63,63,207,1) 35%, rgba(0,212,255,1) 100%)' }}></span> */}
              <span className="w-full h-32 object-cover bg-gray-700"></span>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden bg-dark-purple rounded-full -mt-20">
                <img
                  src={student.image}
                  alt={`${student.firstName} ${student.lastName}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6 pb-6">
              <div className="col-span-2">
                <PersonalInfo label="Full Name" value={`${student.firstName} ${student.lastName}`} />
                <PersonalInfo label="Date of Birth" value={student.dateOfBirth} />
                <PersonalInfo label="Email" value={student.email} />
              </div>
              <div>
                <PersonalInfo label="Phone Number" value={student.phoneNumber} />
                <PersonalInfo label="Address" value={student.address} />
              </div>
            </div>
          </section>

          <section className="mb-8 bg-white p-6 rounded-md shadow-md">
            <h2 className="md:text-xl font-semibold mb-2">Academic Information</h2>
            <PersonalInfo label="Student ID" value={student.id} />
            <PersonalInfo label="Class/Grade Level" value={`Class ${student.grade}`} />
          </section>

          <section className="mb-8 bg-white p-6 rounded-md shadow-md">
            <h2 className="md:text-xl font-semibold mb-2">Attendance Information</h2>
            <AcademicInfo label="Total Classes Attended" value={attendanceInfo.totalClassesAttended} />
            <AcademicInfo label="Attendance Percentage" value={`${attendanceInfo.attendancePercentage}%`} />
          </section>
        </main>

        <aside className="md:w-1/4 md:pl-2 mb-8 md:mb-0">
          <section className="mb-8 bg-white p-2 rounded-md shadow-md">
            <h2 className="md:text-xl font-semibold mb-7">Teachers</h2>
            {showAllTeachers
              ? teachersData.map((teacher) => (
                <TeacherBox key={teacher.id} teacher={teacher} />
              ))
              : teachersData.slice(0, 3).map((teacher) => (
                <TeacherBox key={teacher.id} teacher={teacher} />
              ))}
            {teachersData.length > 3 && (
              <button
                className="text-blue-500 hover:underline"
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
