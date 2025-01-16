"use client";

import { Doctor as DoctorType } from "../utils/api-types";
import { Doctor } from "./doctor";

interface Props {
  doctors: DoctorType[]
  heading?: string
}

export const DoctorList = ({
  doctors,
  heading = "Popular Doctors"
} : Props) => {

  return (
    <div className='mb-10 px-10'>
      <h2 className='font-bold text-xl py-4'>{heading}</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {doctors && doctors.map((doctor) => (
            <Doctor key={doctor.documentId} doctor={doctor} />
          ))}
      </div>
    </div>
  );
};
