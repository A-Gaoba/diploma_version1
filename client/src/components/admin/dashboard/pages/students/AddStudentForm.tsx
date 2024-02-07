import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';


interface AddStudentProps {
  onAddStudent: (newStudent: any) => void;
}

const AddStudent: React.FC<AddStudentProps> = ({ onAddStudent }) =>  {
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
        const response = await axios.post('http://localhost:5000/students', values);
        console.log(response.data); // Log the response from the backend
        // You can handle success, redirect, or any other logic here
      } catch (error) {
        console.error('Error creating student:', error);
        // Handle error - display a message or other error handling logic
      }
    },
  });

  return (
    <div className="flex p-8 bg-gray-100">
      <form onSubmit={formik.handleSubmit} className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              placeholder="Enter first name"
              className="w-full border p-2 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              placeholder="Enter last name"
              className="w-full border p-2 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="dateOfBirth">
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formik.values.dateOfBirth}
              onChange={formik.handleChange}
              placeholder="Select date of birth"
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Enter email"
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              placeholder="Enter phone number"
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              placeholder="Enter address"
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="grade">
              Grade
            </label>
            <input
              type="number"
              id="grade"
              name="grade"
              value={formik.values.grade}
              onChange={formik.handleChange}
              placeholder="Enter grade"
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="className">
              Class Name
            </label>
            <input
              type="text"
              id="className"
              name="className"
              value={formik.values.className}
              onChange={formik.handleChange}
              placeholder="Enter class name"
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="city">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              placeholder="Enter city"
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="image">
              Image
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={formik.values.image}
              onChange={formik.handleChange}
              placeholder="Enter image URL"
              className="w-full border p-2 rounded-md"
            />
          </div>
        </div>

        {/* Submit button */}
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
