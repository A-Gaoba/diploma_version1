import { useFormik } from 'formik';
import { addStudent } from './studentAPI';

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

// Props type for the hook, if you need to pass additional props
interface UseStudentFormProps {
  onAddStudent: (newStudent: any) => void; // Adjust the type as necessary
  initialValues: StudentFormValues;
}

export const useStudentForm = ({ onAddStudent, initialValues }: UseStudentFormProps) => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await addStudent(values);
        console.log(response.data); // Log the response from the backend
        onAddStudent(response.data); // Assuming you want to do something with the newly added student data
        resetForm(); // Reset form after successful submission
      } catch (error) {
        console.error('Error creating student:', error);
        // Handle error - display a message or other error handling logic
      }
      setSubmitting(false); // Reset submitting state
    },
  });

  return { formik };
};
