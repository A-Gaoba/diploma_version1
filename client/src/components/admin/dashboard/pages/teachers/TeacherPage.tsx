import React from 'react';
import { useParams } from 'react-router-dom';
import { teachersData, TeacherPageProps } from '../../data/teachers';

interface PersonalInfoProps {
  label: string;
  value?: string | number; // Make value optional
}

interface AcademicInfoProps {
  label: string;
  value?: string | number; // Make value optional
}

interface TeacherScheduleProps {
  day: string;
  date: string;
  time: string;
}

interface TeacherProfileProps {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  subject: string;
  timeOfClass: string;
  gender?: string;
  dateOfBirth?: string;
  email: string;
  phone?: string;
  degrees: string[];
  institutions: string[];
  specializations: string[];
  yearsOfExperience?: number;
  previousInstitutions: string[];
  subjectsTaught: string[];
  awards: string[];
  achievements?: string;
  classSchedule?: string;
  officeLocation?: string;
  preferredCommunication?: string;
  bio?: string;
}

interface TeacherProfileRouteParams {
  id?: string;
  [key: string]: string | undefined;
}
const AcademicInfo: React.FC<AcademicInfoProps> = ({ label, value }) => (
  <p className="mb-2 md:text-base text-sm">
    <span className="font-bold">{label}:</span> {value || 'N/A'} {/* Use a default value if value is undefined */}
  </p>
);

const PersonalInfo: React.FC<PersonalInfoProps> = ({ label, value }) => (
  <p className="mb-2 text-sm md:text-base">
    <span className="text-gray-700 font-bold">{label}:</span> {value || 'N/A'} {/* Use a default value if value is undefined */}
  </p>
);

const TeacherSchedule: React.FC<TeacherScheduleProps> = ({ day, date, time }) => (
  <p className="mb-2 text-sm md:text-base">
    <span className="text-gray-700 font-bold">Schedule:</span> {`${day}, ${date}, ${time}`}
  </p>
);

const TeacherProfile: React.FC<TeacherProfileProps> = () => {
  const { id } = useParams<TeacherProfileRouteParams>();
  const teacher = teachersData.find((t) => t.id === parseInt(id || '', 10));

  if (!teacher) {
    return <div className="text-red-500">{!id ? 'Invalid teacher ID' : 'Teacher not found'}</div>;
  }

  return (
    <div className="md:p-1 bg-gray-100">
      <div className="flex flex-col md:flex-row">
        <main className="md:w-3/4">
          <h1 className="md:text-3xl font-bold bg-white p-2">{`${teacher.firstName} ${teacher.lastName}'s Profile`}</h1>

          <section className="mb-8 bg-white p-6 rounded-md shadow-md">
            <h2 className="md:text-xl font-semibold mb-2">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <img
                  src={teacher.image}
                  alt={`${teacher.firstName} ${teacher.lastName}`}
                  className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover rounded-3xl bg-slate-300"
                />
              </div>
              <div>
                <PersonalInfo label="Full Name" value={`${teacher.firstName} ${teacher.lastName}`} />
                <PersonalInfo label="Date of Birth" value={teacher.dateOfBirth} />
                <PersonalInfo label="Email" value={teacher.email} />
              </div>
              <div>
                <PersonalInfo label="Phone Number" value={teacher.phone} />
                <PersonalInfo label="Gender" value={teacher.gender} />
              </div>
            </div>
          </section>

          <section className="mb-8 bg-white p-6 rounded-md shadow-md">
            <h2 className="md:text-xl font-semibold mb-2">Academic Information</h2>
            <AcademicInfo label="Subject" value={teacher.subject} />
            <AcademicInfo label="Time of Class" value={teacher.timeOfClass} />
            {/* Add more AcademicInfo components as needed for other academic information */}
            {/* <AcademicInfo label="Degrees" value={teacher.degrees.join(', ')} /> */}
            {/* <AcademicInfo label="Institutions" value={teacher.institutions.join(', ')} /> */}
            {/* <AcademicInfo label="Specializations" value={teacher.specializations.join(', ')} /> */}
          </section>

          {/* Add more sections for other details such as awards, achievements, etc. */}
          <section className="mb-8 bg-white p-6 rounded-md shadow-md">
            <PersonalInfo label="Awards" value={teacher.awards.join(', ')} />
          </section>

          <section className="mb-8 bg-white p-6 rounded-md shadow-md">
            <PersonalInfo label="Achievements" value={teacher.achievements} />
          </section>

          <section className="mb-8 bg-white p-6 rounded-md shadow-md">
            <PersonalInfo label="Class Schedule" value={teacher.classSchedule} />
          </section>

          <section className="mb-8 bg-white p-6 rounded-md shadow-md">
            <h2 className="md:text-xl font-semibold mb-2">Office Location</h2>
            {/* Uncomment and modify the following line as needed */}
            {/* <PersonalInfo label="Office Location" value={teacher.officeLocation} /> */}
          </section>

          {/* Add more sections for other details such as preferred communication, bio, etc. */}
        </main>

        <aside className="md:w-1/4 pr-0 md:pl-8 mb-8 md:mb-0">
          <section className="mb-8 bg-white p-6 rounded-md shadow-md">
            <h2 className=" font-semibold mb-2">Schedule Details</h2>
            <TeacherSchedule day="Monday" date="1st February" time="10:00" />
            <TeacherSchedule day="Wednesday" date="3rd February" time="14:30" />
            {/* Add more TeacherSchedule components as needed for other schedule details */}
          </section>

          {/* Add more sections for other details such as preferred communication, bio, etc. */}
          <section className="mb-8 bg-white p-6 rounded-md shadow-md">
            <PersonalInfo label="Preferred Communication" value={teacher.preferredCommunication} />
            <p>{teacher.email}</p>
          </section>

          <section className="mb-8 bg-white p-6 rounded-md shadow-md">
            <PersonalInfo label="Bio" value={teacher.bio} />
          </section>
        </aside>
      </div>
    </div>
  );
};


export default TeacherProfile;
