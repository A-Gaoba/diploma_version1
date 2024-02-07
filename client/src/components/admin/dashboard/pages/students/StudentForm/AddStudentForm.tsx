import React from 'react';
import { useFormik } from 'formik';
import { createStudent } from './studentAPI';

const AddStudentForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
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
    },
    onSubmit: async (values) => {
      try {
        const response = await createStudent(values);
        console.log(response.data); // Log the response from the backend
        // You can handle success, redirect, or any other logic here
      } catch (error) {
        console.error('Error creating student:', error);
        // Handle error - display a message or other error handling logic
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex-1">
      {/* Form fields */}
    </form>
  );
};

export default AddStudentForm;
