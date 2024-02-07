export interface PersonalInfoProps {
  label: string;
  value: string | number;
}

export interface AcademicInfoProps {
  label: string;
  value: string | number;
}

export interface Teacher {
  id: number;
  firstName: string;
  subject: string;
  timeOfClass: string;
  image: string;
}
