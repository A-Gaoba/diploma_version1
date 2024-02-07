import React, { useState } from 'react';
import TeacherBox from './TeacherBox';

const TeachersList = ({ teachersData }) => {
  const [showAllTeachers, setShowAllTeachers] = useState(false);

  const toggleShowAllTeachers = () => setShowAllTeachers(!showAllTeachers);

  return (
    <aside className=" md:pl-2 mb-8 md:mb-0">
      <section className="mb-8 bg-white p-2 rounded-md shadow-md">
        <h2 className="md:text-xl font-semibold mb-7">Teachers</h2>
        {teachersData.slice(0, showAllTeachers ? teachersData.length : 3).map(teacher => (
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
  );
};

export default TeachersList;
