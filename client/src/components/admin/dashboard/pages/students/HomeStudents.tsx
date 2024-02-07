import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { studentsData } from '../../data/student';
import StudentCard from './StudentCard';
import Pagination from '../../helps/Pagination';
import usePagination from '../../helps/usePagination'; 



const Home: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const itemsPerPage = 10;

  const filteredStudents = filter ? studentsData.filter(student => student.class === filter) : studentsData;

  const { currentPage, setCurrentPage, totalPages, paginatedItemsIndex } = usePagination(filteredStudents.length, itemsPerPage);
  const paginatedStudents = filteredStudents.slice(paginatedItemsIndex.startIndex, paginatedItemsIndex.endIndex);


  const handleFilterClick = (selectedFilter: string | null) => {
    setFilter(selectedFilter);
    setCurrentPage(1);
  };

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

      {/* Pagination */}
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
    </div>
  );
};

export default Home;
