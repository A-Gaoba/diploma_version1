import React, { useState, ChangeEvent, FormEvent } from 'react';

interface StudentPageProps {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  email: string;
  phoneNumber: number | string;
  address: string;
  grade: number;
  class?: string;
  city: string;
  image: string;
}

interface AddStudentFormProps {
  onAddStudent: (newStudent: StudentPageProps) => void;
}

const AddStudentForm: React.FC<AddStudentFormProps> = ({ onAddStudent }) => {
  const [formData, setFormData] = useState<StudentPageProps>({
    id: 0,
    firstName: '',
    lastName: '',
    dateOfBirth: new Date(),
    email: '',
    phoneNumber: '',
    address: '',
    grade: 0,
    class: '',
    city: '',
    image: '',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === 'phoneNumber' ? (value ? +value : '') : value });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadButtonClick = () => {
    const input = document.getElementById('imageInput');
    if (input) {
      input.click();
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onAddStudent(formData);
    setFormData({
      id: 0,
      firstName: '',
      lastName: '',
      dateOfBirth: new Date(),
      email: '',
      phoneNumber: '',
      address: '',
      grade: 0,
      class: '',
      city: '',
      image: '',
    });
    setImageFile(null);
  };

  return (
    <div className="flex p-8 bg-gray-100">
      {/* Image section */}
      <div className="flex-shrink-0 mb-4 mr-8 flex flex-col">
        <div className="w-32 h-32 mb-2 border border-gray-300 rounded-md overflow-hidden flex items-center justify-center">
          {formData.image ? (
            <img src={formData.image} alt="Student" className="w-full h-full object-cover" />
          ) : (
            <svg
              height="100px"
              width="100px"
              version="1.1"
              id="_x32_"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              fill="#081A51"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path fill="#081A51" d="M364.032,355.035c-3.862-1.446-8.072-3.436-12.35-5.794l-71.57,98.935l-5.09-64.814h-38.033l-5.091,64.814 l-71.569-98.935c-4.408,2.466-8.656,4.487-12.361,5.794c-37.478,13.193-129.549,51.136-123.607,122.21 C25.787,494.301,119.582,512,256.006,512c136.413,0,230.208-17.699,231.634-34.755 C493.583,406.102,401.273,368.961,364.032,355.035z"></path>
                  <path fill="#081A51" d="M171.501,208.271c5.21,29.516,13.966,55.554,25.494,68.38c0,15.382,0,26.604,0,35.587 c0,0.902-0.158,1.852-0.416,2.833l40.41,19.462v28.545h38.033v-28.545l40.39-19.452c-0.258-0.981-0.416-1.932-0.416-2.843 c0-8.983,0-20.205,0-35.587c11.548-12.826,20.304-38.864,25.514-68.38c12.143-4.338,19.096-11.281,27.762-41.658 c9.231-32.358-13.876-31.258-13.876-31.258c18.69-61.873-5.922-120.022-47.124-115.753c-28.426-49.73-123.627,11.36-153.48,7.102 c0,17.055,7.112,29.842,7.112,29.842c-10.379,19.69-6.378,58.951-3.446,78.809c-1.704-0.03-22.602,0.188-13.728,31.258 C152.405,196.99,159.338,203.934,171.501,208.271z"></path>
                </g>
              </g>
            </svg>
          )}
        </div>
        <label htmlFor="">
          <input
            type="file"
            id="imageInput"
            name="image"
            onChange={handleImageChange}
            className="hidden"
            accept="image/*"
          />
          {/* adsfas */}
        </label>

        <button
          type="button"
          onClick={handleUploadButtonClick}
          className="bg-dark-purple text-white px-4 py-2 rounded-md hover:bg-white hover:text-black focus:outline-none focus:ring focus:border-blue-300"
        >
          Upload
        </button>
      </div>
      {/* Form section */}
      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-4">Add New Student</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter first name"
                className="w-full border p-2 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter last name"
                className="w-full border p-2 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="dateOfBirth">Date of Birth</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth.toISOString().split('T')[0]}
                onChange={handleInputChange}
                placeholder="Select date of birth"
                className="w-full border p-2 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email"
                className="w-full border p-2 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Enter phone number"
                className="w-full border p-2 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter address"
                className="w-full border p-2 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="grade">Grade</label>
              <input
                type="number"
                id="grade"
                name="grade"
                value={formData.grade}
                onChange={handleInputChange}
                placeholder="Enter grade"
                className="w-full border p-2 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="class">Class</label>
              <input
                type="text"
                id="class"
                name="class"
                value={formData.class}
                onChange={handleInputChange}
                placeholder="Enter class"
                className="w-full border p-2 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="Enter city"
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
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudentForm;
