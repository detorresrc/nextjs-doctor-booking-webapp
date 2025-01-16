'use client'

import { DoctorList } from '@/features/doctors/components/doctor-list';
import { DoctorListLoader } from '@/features/doctors/components/doctor-list-loader';
import { useGetDoctorsByCategoryName } from '@/features/doctors/hooks/use-get-doctors-by-category-name';
import { useGetCategoryParam } from '@/shared/hooks/use-get-category-param';
import React from 'react'

export const DoctorListWrapper = () => {
  const category = decodeURIComponent( useGetCategoryParam() );
  const { data: doctors, isLoading } = useGetDoctorsByCategoryName(category);
  
  if (isLoading)
    return <DoctorListLoader/>;

  return (
    <DoctorList doctors={doctors?.data || []} heading={category.toUpperCase()}/>
  )
}

