import React from 'react';
import { Link } from 'react-router-dom';
import { classes } from '../../data/index'; // You need to replace this with your actual data

const ClassTable: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Class List</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Class Title</th>
            <th className="py-2 px-4 border-b">Number of Students</th>
            <th className="py-2 px-4 border-b">Number of Groups</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((cls) => (
            <tr key={cls.id}>
              <td className="py-2 px-4 border-b">
                <Link to={`/classes/${cls.id}`}>{cls.title}</Link>
              </td>
              <td className="py-2 px-4 border-b">{cls.numberOfStudents}</td>
              <td className="py-2 px-4 border-b">{cls.numberOfGroups}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassTable;
