import React from 'react';
import PersonalInfo from './PersonalInfo';

const StudentProfile = ({ student }) => (
  <section className="bg-white rounded-md shadow-md mb-4">
    <div className="flex items-center justify-center">
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
);

export default StudentProfile;
