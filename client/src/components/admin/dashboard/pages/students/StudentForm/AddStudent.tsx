import React from 'react';
import AddStudentForm from './AddStudentForm';

const AddStudent: React.FC = () => {
  return (
    <div className="flex p-8 bg-gray-100">
      <AddStudentForm />
    </div>
  );
};

export default AddStudent;
