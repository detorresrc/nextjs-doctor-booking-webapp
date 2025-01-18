'use client'
import { useGetDoctorById } from '@/features/doctors/hooks/use-get-doctor-by-id'
import { Loader2 } from 'lucide-react'
import React from 'react'
import { DoctorDetails } from './doctor-details'
import { DoctorSuggestions } from './doctor-suggestions'

interface Props {
  doctorId: string
}

export const DoctorDetailsClient = ({
  doctorId
} : Props) => {
  const { data: doctor, isLoading } = useGetDoctorById(doctorId);
  
  if(isLoading) {
    return (
      <div className='w-full h-screen flex justify-center items-center'>
        <Loader2 className='size-6 animate-spin'/>
      </div>
    )
  }

  return (
    <div className='p-5 md:px-20'>
      <h2 className='font-bold text-[22px]'>Details</h2>

      <div className='grid grid-cols-1 md:grid-cols-4'>
        <div className='col-span-3'>
          {doctor && <DoctorDetails doctor={doctor.data}/>}
        </div>
        <div>
          <DoctorSuggestions/>
        </div>
      </div>
    </div>
  )
}
