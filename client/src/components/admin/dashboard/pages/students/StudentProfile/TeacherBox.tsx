import React from 'react';
import { Teacher } from './index';

const TeacherBox: React.FC<{ teacher: Teacher }> = ({ teacher }) => (
  <div className="border p-2 mb-4 rounded-md shadow-md flex flex-col justify-center items-center">
    <img
      src={teacher.image}
      alt={teacher.firstName}
      className="w-12 h-12 object-cover rounded-full mb-2"
    />
    <h3 className="font-semibold text-lg">{teacher.firstName}</h3>
    <p className="text-sm text-gray-600 mb-2">{teacher.subject}</p>
    <p className="text-sm text-gray-600">{teacher.timeOfClass}</p>
  </div>
);

export default TeacherBox;
