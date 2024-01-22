import React from 'react';
import BasicInfo from './BasicInfo';
import CoursesList from './CoursesList';
import ExamsAndMarks from './ExamsAndMarks';
import LectureSchedule from './LectureSchedule';
import StudentInteraction from './StudentInteraction';

interface Student {
  name: string;
  class: string;
}

interface Exam {
  name: string;
  date: string;
  duration: string;
  class: string;
}

interface ExamsAndMarksProps {
  students: Student[];
  exams: Exam[];
  marks: Record<string, number>;
}

const TeacherProfilePage: React.FC = () => {
  // Dummy data (replace with actual data fetched from your API)
  const teacherData = {
    teacherName: 'John Doe',
    profilePicture: 'https://example.com/profile.jpg',
    contactInfo: 'john.doe@example.com | (123) 456-7890',
    bio: 'An experienced teacher passionate about education...',
  };

  const studentsData: Student[] = [
    { name: 'Student 1', class: 'Class 7' },
    { name: 'Student 2', class: 'Class 5' },
    // Add more students as needed
  ];

  const coursesData = [
    {
      title: 'Introduction to Science',
      code: 'SCI101',
      description: 'Fundamental principles of various scientific disciplines.',
      imageUrl: '',
    },
    {
      title: 'Mathematics for Beginners',
      code: 'MATH100',
      description: 'Basic concepts and applications of mathematics.',
      imageUrl: '',
    },
    {
      title: 'Introduction to Science',
      code: 'SCI101',
      description: 'Fundamental principles of various scientific disciplines.',
      imageUrl: '',
    },
  ];

  const examsData = [
    {
      name: 'Midterm Exam',
      date: '2024-02-15',
      duration: '2 hours',
      class: 'Class 7',
    },
    {
      name: 'Final Exam',
      date: '2024-05-10',
      duration: '3 hours',
      class: 'Class 5',
    },
    // Add more exams as needed
  ];

  const marksData = {
    'Midterm Exam': 85,
    'Final Exam': 90,
    // Add more marks as needed
  };

  const lecturesData = [
    {
      day: 'Monday',
      time: '10:00 AM - 12:00 PM',
      course: 'Introduction to Science',
      room: 'Room 101',
    },
    {
      day: 'Wednesday',
      time: '2:00 PM - 4:00 PM',
      course: 'Mathematics for Beginners',
      room: 'Room 201',
    },
    // Add more lectures as needed
  ];

  const interactionData = {
    email: 'john.doe@example.com',
    messagingLink: 'https://example.com/messaging',
  };

  return (
    <div className='flex justify-center items-center h-full'>
      <div className='w-[90%]'>
        <BasicInfo {...teacherData} />
        <CoursesList courses={coursesData} />
        <ExamsAndMarks students={studentsData} exams={examsData} marks={marksData} />
        <LectureSchedule lectures={lecturesData} />
        <StudentInteraction {...interactionData} />
      </div>
    </div>
  );
};

export default TeacherProfilePage;
