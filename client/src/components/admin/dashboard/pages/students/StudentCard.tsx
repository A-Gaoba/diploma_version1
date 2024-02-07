import React from 'react';
import { StudentPageProps } from './StudentInterface';
import { Link } from 'react-router-dom';

interface StudentCardProps {
  student: StudentPageProps;
  index: number;
}

const StudentCard: React.FC<StudentCardProps> = ({ student, index }) => (
  <tr>
    <td className="border p-1 text-center">{index + 1}</td>
    <td className="border p-1 text-center">
      <div className="flex justify-center">
        <img src={student.image} alt={`${student.firstName} ${student.lastName}`} className="w-8 h-8 object-cover rounded-full bg-dark-purple" />
      </div>
    </td>
    <td className="border p-1 text-center">{`${student.firstName} ${student.lastName}`}</td>
    <td className="border p-1 text-center">{student.id}</td>
    <td className="border p-1 text-center">{student.dateOfBirth}</td>
    <td className="border p-1 text-center">{student.city}</td>
    <td className="border p-1 text-center">{student.grade}</td>
    <td className="border p-4 text-center">{student.class}</td>
    <td className="border p-1 text-center">
      <Link to={`/admin/students/${student.id}`}>
        <button type="button" className="bg-dark-purple text-white px-4 py-2 rounded hover:bg-blue-600">View</button>
      </Link>
    </td>
  </tr>
);

export default StudentCard;
