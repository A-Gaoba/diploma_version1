// components/AcademicDetails.tsx

import React from 'react';
import PersonalInfo from './PersonalInfo';
import AcademicInfo from './AcademicInfo';

const AcademicDetails = ({ student }) => (
  <>
    <section className="mb-8 bg-white p-6 rounded-md shadow-md">
      <h2 className="md:text-xl font-semibold mb-2">Academic Information</h2>
      <PersonalInfo label="Student ID" value={student.id} />
      <PersonalInfo label="Class/Grade Level" value={`Class ${student.grade}`} />
    </section>
    <section className="mb-8 bg-white p-6 rounded-md shadow-md">
      <h2 className="md:text-xl font-semibold mb-2">Attendance Information</h2>
      <AcademicInfo label="Total Classes Attended" value={student.attendanceInfo?.totalClassesAttended || 'N/A'} />
      <AcademicInfo label="Attendance Percentage" value={`${student.attendanceInfo?.attendancePercentage || 'N/A'}%`} />
    </section>
  </>
);

export default AcademicDetails;
