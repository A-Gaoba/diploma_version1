// Students.tsx

import React from 'react';
import { motion } from 'framer-motion';

interface Student {
  id: number;
  name: string;
  class: string;
  achievements: string[];
  imageUrl: string;
}

interface StudentsProps {
  students: Student[];
}

const Students: React.FC<StudentsProps> = ({ students }) => {
  return (
    <section className="flex flex-col justify-center items-center bg-gradient-to-r from-orange-100 via-blue-200 to-yellow-50 rounded-lg shadow-lg py-12 px-4 w-90 mx-auto my-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Star Students</h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center flex-wrap gap-4 w-[90%] 2xl:w-[80%]"
      >
        {students.map((student) => (
          <motion.div
            key={student.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="p-4 shadow-xl shadow-orange-600 bg-gradient-to-r from-orange-100 via-blue-200 to-yellow-50 rounded-lg text-gray-800"
          >
            <motion.img
              src={student.imageUrl}
              alt={student.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-64 h-72 object-cover rounded-md mb-4 bg-white"
            />
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl font-bold mb-2 text-blue-800"
            >
              {student.name}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-700 mb-2"
            >
              Class: {student.class}
            </motion.p>

          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Students;