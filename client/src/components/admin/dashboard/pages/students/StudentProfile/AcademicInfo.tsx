import React from 'react';
import { AcademicInfoProps } from './index';

const AcademicInfo: React.FC<AcademicInfoProps> = ({ label, value }) => (
  <p className="mb-2 md:text-base text-sm">
    <span className="font-bold">{label}:</span> {value}
  </p>
);

export default AcademicInfo;
