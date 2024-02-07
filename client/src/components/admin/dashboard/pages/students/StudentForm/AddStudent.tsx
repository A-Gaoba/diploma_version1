import React from 'react';
import { useStudentForm } from './useStudentForm'; 
import StudentFormFields from './StudentFormFields';

interface AddStudentProps {
  onAddStudent: (newStudent: any) => void; // Consider using a more specific type than `any` if possible
}

// Initial values for the form fields
const initialValues = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  email: '',
  phoneNumber: '',
  address: '',
  grade: '',
  className: '',
  city: '',
  image: '',
};

const AddStudent: React.FC<AddStudentProps> = ({ onAddStudent }) => {
  // Use the custom hook for form logic
  const { formik } = useStudentForm({ onAddStudent, initialValues });

  return (
    <div className="flex p-8 bg-gray-100">
      <form onSubmit={formik.handleSubmit} className="flex-1">
        <StudentFormFields formik={formik} />

        <div className="mt-6">
          <button
            type="submit"
            className="bg-dark-purple text-white px-4 py-2 rounded-md hover:bg-white hover:text-black focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
