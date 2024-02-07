import React from 'react';
import { PersonalInfoProps } from './index';

const PersonalInfo: React.FC<PersonalInfoProps> = ({ label, value }) => (
  <p className="mb-2 text-sm md:text-base">
    <span className="text-gray-700 font-bold">{label}:</span> {value}
  </p>
);

export default PersonalInfo;
