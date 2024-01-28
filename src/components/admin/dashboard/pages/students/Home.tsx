import React, { useState } from 'react';
import { studentsData, StudentPageProps } from '../../data/student';
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
        <img
          src={student.image}
          alt={`${student.firstName} ${student.lastName}`}
          className="w-8 h-8 object-cover rounded-full bg-dark-purple"
        />
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
        <button type='button' className="bg-dark-purple text-white px-4 py-2 rounded hover:bg-blue-600">View</button>
      </Link>
    </td>
  </tr>
);
// Updated Home component
const Home: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = 10;

  const filteredStudents = filter
    ? studentsData.filter((student) => student.class === filter)
    : studentsData;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedStudents = filteredStudents.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);

  const handleFilterClick = (selectedFilter: string | null) => {
    setFilter(selectedFilter);
    setCurrentPage(1);
  };

  const showPagination = filteredStudents.length > itemsPerPage;

  return (
    <div>
      <div className="flex justify-end text-white p-4 ">
        <Link to="/admin/students/add">
          <button type='button' className=" bg-dark-purple p-2 text-white flex items-center mb-4">Add Student</button>
        </Link>
      </div>

      {/* Navbar for filtering */}
      <nav className=" ">
        <div className="flex items-center text-white">
          <span className="text-black text-lg font-semibold">Class:</span>
          <button
            className={`ml-4 bg-dark-purple p-2 rounded-sm ${filter === null ? 'text-dark-purple bg-white' : ''}`}
            onClick={() => handleFilterClick(null)}
          >
            All
          </button>
          {["Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"].map((classOption) => (
            <button
              key={classOption}
              className={`ml-4 bg-dark-purple p-2 rounded-sm text-sm${filter === classOption ? ' text-dark-purple bg-white' : ''}`}
              onClick={() => handleFilterClick(classOption)}
            >
              {classOption}
            </button>
          ))}
        </div>
      </nav>

      {/* Student cards table */}
      <table className="mt-8 w-full">
        <thead>
          <tr>
            <th className="border p-1 text-center">No</th>
            <th className="border p-1 text-center">Image</th>
            <th className="border p-1 text-center">Name</th>
            <th className="border p-1 text-center">ID</th>
            <th className="border p-1 text-center">BirthDay</th>
            <th className="border p-1 text-center">City</th>
            <th className="border p-1 text-center">Grade</th>
            <th className="border p-1 text-center">Class</th>
            <th className="border p-1 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedStudents.map((student, index) => (
            <StudentCard key={student.id} student={student} index={index} />
          ))}
        </tbody>
      </table>

      <p className="text-sm text-gray-600 mt-4">
        Showing {startIndex + 1} to {endIndex} of {filteredStudents.length} entries
      </p>

      {showPagination && (
        <div className="flex justify-center items-center mt-8">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-dark-purple text-white' : 'bg-white'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
