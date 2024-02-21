import { useFormik } from "formik";
import { addStudent } from "./studentAPI";

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

interface UseStudentFormProps {
  onAddStudent: (newStudent: any) => void;
  initialValues: StudentFormValues;
}

export const useStudentForm = ({
  onAddStudent,
  initialValues,
}: UseStudentFormProps) => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await addStudent(values);
        console.log(response.data);
        onAddStudent(response.data);
        resetForm();
      } catch (error) {
        console.error("Error creating student:", error);
      }
      setSubmitting(false);
    },
  });

  return { formik };
};
