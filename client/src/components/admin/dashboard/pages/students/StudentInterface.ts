
export interface StudentPageProps {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email?: string; // Assuming email is optional
  phoneNumber?: string; // Assuming phoneNumber is optional
  address?: string; // Assuming address is optional
  grade: number;
  class?: string;
  city: string;
  image: string;
}
