import React, { useState } from 'react';
import { teachersData, TeacherPageProps } from '../../data/teachers';
import { Link } from 'react-router-dom';

interface TeacherCardProps {
  teacher: TeacherPageProps;
}

const TeacherCard: React.FC<TeacherCardProps> = ({ teacher }) => (
  <div className="border p-4 flex flex-col justify-center items-center shadow-slate-900 shadow-sm">
    <img
      src={teacher.image || 'default-image.jpg'} // Use a default image if 'image' is undefined
      alt={`${teacher.firstName} ${teacher.lastName}`}
      className="mb-2 w-32 h-32 object-cover rounded-full"
    />
    <p className="text-lg font-semibold">{`${teacher.firstName} ${teacher.lastName}`}</p>
    <p className="text-gray-600">{` ${teacher.subject || 'Not specified'}`}</p>
    <p className="text-gray-600">{`ID: ${teacher.id || 'Not specified'}`}</p>
    <Link to={`/admin/teachers/${teacher.id}`}>
      <button className="mt-2 bg-dark-purple text-white px-4 py-2 rounded hover:bg-blue-600">View</button>
    </Link>
  </div>
);

const HomeTeachers: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  const filteredTeachers = filter
    ? teachersData.filter((teacher) => teacher.subject === filter)
    : teachersData;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedTeachers = filteredTeachers.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredTeachers.length / itemsPerPage);

  const handleFilterClick = (selectedFilter: string | null) => {
    setFilter(selectedFilter);
    setCurrentPage(1);
  };

  return (
    <div>
      {/* Navbar for filtering */}
      <nav className="bg-white p-4 ">
        <div className="flex items-center">
          <span className="text-black text-lg font-semibold">Subject:</span>
          <button className={`ml-4 ${filter === null ? 'font-bold' : ''}`} onClick={() => handleFilterClick(null)}>
            All
          </button>
          {[...new Set(teachersData.map((teacher) => teacher.subject || 'Not specified'))].map((subject) => (
            <button
              key={subject}
              className={`ml-4 ${filter === subject ? 'font-bold' : ''}`}
              onClick={() => handleFilterClick(subject)}
            >
              {subject || 'Not specified'}
            </button>
          ))}
        </div>
      </nav>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 mt-8">
        {paginatedTeachers.map((teacher) => (
          <TeacherCard key={teacher.id || 0} teacher={teacher} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 mx-2 ${currentPage === index + 1 ? ' bg-dark-purple text-white' : 'bg-white'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomeTeachers;
