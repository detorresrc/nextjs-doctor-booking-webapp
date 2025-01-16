'use client'

import { DoctorList } from '@/features/doctors/components/doctor-list';
import { DoctorListLoader } from '@/features/doctors/components/doctor-list-loader';
import { useGetDoctors } from '@/features/doctors/hooks/use-get-doctors';

export const DoctorListWrapper = () => {
  const { data: doctors, isLoading } = useGetDoctors();
  
  if (isLoading)
    return <DoctorListLoader/>;

  return (
    <DoctorList doctors={doctors?.data || []}/>
  )
}
