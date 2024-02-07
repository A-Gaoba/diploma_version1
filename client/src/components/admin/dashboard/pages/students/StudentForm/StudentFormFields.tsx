import React from 'react';
import { FormikProps } from 'formik';

interface StudentFormValues {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
  address: string;
  grade: string;
  className: string;
  city: string;
  image: string;
}

const StudentFormFields: React.FC<{ formik: FormikProps<StudentFormValues> }> = ({ formik }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {/* First Name Field */}
    <div className="mb-4">
      <label className="block text-sm font-semibold mb-2" htmlFor="firstName">
        First Name
      </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
        placeholder="Enter first name"
        className="w-full border p-2 rounded-md"
        required
      />
    </div>

    {/* Last Name Field */}
    <div className="mb-4">
      <label className="block text-sm font-semibold mb-2" htmlFor="lastName">
        Last Name
      </label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
        placeholder="Enter last name"
        className="w-full border p-2 rounded-md"
        required
      />
    </div>

    {/* Date of Birth Field */}
    <div className="mb-4">
      <label className="block text-sm font-semibold mb-2" htmlFor="dateOfBirth">
        Date of Birth
      </label>
      <input
        type="date"
        id="dateOfBirth"
        name="dateOfBirth"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.dateOfBirth}
        className="w-full border p-2 rounded-md"
      />
    </div>

    {/* Email Field */}
    <div className="mb-4">
      <label className="block text-sm font-semibold mb-2" htmlFor="email">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        placeholder="Enter email"
        className="w-full border p-2 rounded-md"
      />
    </div>

    {/* Phone Number Field */}
    <div className="mb-4">
      <label className="block text-sm font-semibold mb-2" htmlFor="phoneNumber">
        Phone Number
      </label>
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.phoneNumber}
        placeholder="Enter phone number"
        className="w-full border p-2 rounded-md"
      />
    </div>

    {/* Address Field */}
    <div className="mb-4">
      <label className="block text-sm font-semibold mb-2" htmlFor="address">
        Address
      </label>
      <input
        type="text"
        id="address"
        name="address"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.address}
        placeholder="Enter address"
        className="w-full border p-2 rounded-md"
      />
    </div>

    {/* Grade Field */}
    <div className="mb-4">
      <label className="block text-sm font-semibold mb-2" htmlFor="grade">
        Grade
      </label>
      <input
        type="number"
        id="grade"
        name="grade"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.grade}
        placeholder="Enter grade"
        className="w-full border p-2 rounded-md"
      />
    </div>

    {/* Class Name Field */}
    <div className="mb-4">
      <label className="block text-sm font-semibold mb-2" htmlFor="className">
        Class Name
      </label>
      <input
        type="text"
        id="className"
        name="className"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.className}
        placeholder="Enter class name"
        className="w-full border p-2 rounded-md"
      />
    </div>

    {/* City Field */}
    <div className="mb-4">
      <label className="block text-sm font-semibold mb-2" htmlFor="city">
        City
      </label>
      <input
        type="text"
        id="city"
        name="city"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.city}
        placeholder="Enter city"
        className="w-full border p-2 rounded-md"
      />
    </div>

    {/* Image Field */}
    <div className="mb-4">
      <label className="block text-sm font-semibold mb-2" htmlFor="image">
        Image
      </label>
      <input
        type="text"
        id="image"
        name="image"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.image}
        placeholder="Enter image URL"
        className="w-full border p-2 rounded-md"
      />
    </div>
  </div>
);

export default StudentFormFields;
