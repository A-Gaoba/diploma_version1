import axios from 'axios';

export const addStudent  = async (studentData: any) => {
  try {
    return await axios.post('http://localhost:5000/students', studentData);
  } catch (error) {
    throw new Error('Error creating student');
  }
};
