import React from 'react';
import { motion } from 'framer-motion';

interface Teacher {
  id: number;
  name: string;
  subject: string;
  imageUrl: string;
}

interface TeachersProps {
  teachers: Teacher[];
}

const Teachers: React.FC<TeachersProps> = ({ teachers }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-r from-orange-100 via-blue-200 to-yellow-50 rounded-lg shadow-lg py-12 px-4">
      <h3 className="text-4xl font-bold self-start px-16 py-8 w-[90%]">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-slate-500">
          Meat Our Teachers
        </span>
      </h3>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-[90%]"
      >
        {teachers.map((teacher) => (
          <motion.div
            key={teacher.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="p-4 bg-dark-purple rounded-lg shadow-md text-white"
          >
            <motion.img
              src={teacher.imageUrl}
              alt={teacher.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full h-72 object-cover rounded-md mb-4 bg-white"
            />
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl font-bold mb-2"
            >
              {teacher.name}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className=" text-slate-200"
            >
              {teacher.subject}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>

  );
};

export default Teachers;
