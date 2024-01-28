import React, { useState } from 'react';
import { subjectsData, Subject } from '../../data/subjects';
import { Link } from 'react-router-dom';

interface HomeProps { }

const Home: React.FC<HomeProps> = () => {
  const classes = Object.keys(subjectsData);

  const [selectedClass, setSelectedClass] = useState<string>(classes[0]);

  const handleClassChange = (newClass: string) => {
    setSelectedClass(newClass);
  };

  const filteredSubjects = subjectsData[selectedClass] || [];


  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-end text-white p-4 ">
        <Link to="/admin/subjects/add">
          <button type='button' className=" bg-dark-purple p-2 text-white flex items-center mb-4">Add Subject</button>
        </Link>
      </div>
      {/* Navigation Bar */}
      <div className="flex justify-center space-x-4">
        {classes.map((cls) => (
          <button
            key={cls}
            className={`px-4 py-2 rounded ${cls === selectedClass ? 'bg-white text-dark-purple' : 'bg-dark-purple text-white'
              }`}
            onClick={() => handleClassChange(cls)}
          >
            {cls}
          </button>
        ))}
      </div>

      {/* Subject Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 2xl:grid-cols-6 gap-8 mt-8">
        {filteredSubjects.map((subject: Subject, index: number) => (
          <SubjectBox key={index} subject={subject} />
        ))}
      </div>
    </div>
  );
};

interface SubjectBoxProps {
  subject: Subject;
}

const SubjectBox: React.FC<SubjectBoxProps> = ({ subject }) => (
  <div className="bg-white p-4 rounded shadow-md">
    {/* <img src={subject.image} alt={`${subject.name} Image`} className="w-full h-48 object-cover mb-4 rounded bg-dark-purple" /> */}
    <img src="https://assets.cambridge.org/97811076/47831/cover/9781107647831.jpg" alt={`${subject.name} Image`} className="w-full h-48 object-contain mb-4 rounded bg-white" />
    <h3 className="text-xl font-semibold mb-2">{subject.name}</h3>
    <p className="text-gray-600">Teacher: {subject.teacher}</p>
  </div>
);

export default Home;
