"use client";

import { useGetDoctors } from "../hooks/use-get-doctors";
import { Doctor } from "./doctor";
import { DoctorListLoader } from "./doctor-list-loader";

export const DoctorList = () => {
  const { data: doctors, isLoading } = useGetDoctors();

  if (isLoading)
    return <DoctorListLoader/>;

  return (
    <div className='mb-10 px-10'>
      <h2 className='font-bold text-xl py-4'>Popular Doctors</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {doctors && doctors.data.map((doctor) => (
            <Doctor key={doctor.documentId} doctor={doctor} />
          ))}
      </div>
    </div>
  );
};
