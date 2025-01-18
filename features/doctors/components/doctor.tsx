import React from 'react'
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Doctor as DoctorType } from '../utils/api-types'
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Props {
  doctor: DoctorType
}

export const Doctor = ({
  doctor
} : Props) => {
  return (
    <div
      className='bg-blue-100 shadow-lg rounded-lg p-4 hover-effect'
    >
      <Image
        src={doctor.Image.url}
        alt={doctor.Name}
        width={400}
        height={200}
        className='h=[200px] w-full object-cover rounded-lg'
      />
      <div className='w-full flex flex-col items-start justify-start gap-1 p-4'>
        <div className='w-full flex flex-row justify-start items-center gap-2'>
          {doctor && doctor.categories?.map((category) => (
            <Badge
            key={category.documentId}
            variant={"default"}
            className='w-auto line-clamp-1 text-xs md:text-sm m-2'
            >
              {category.Name}
            </Badge>
          ))}
        </div>

        <h2 className='font-bold'>{doctor.Name}</h2>
        <h2 className='text-primary text-sm'>{doctor.Year_of_Experience}</h2>
        <h2 className='text-gray-500 text-sm line-clamp-2'>{doctor.Address}</h2>

        <div className='w-full flex flex-row justify-center items-center pt-4'>
          <Link
            href={`/doctors/${doctor.Name.toLowerCase()}/${doctor.documentId}`}>
            <Button variant='outline' className='w-11/12 hover-effect'>
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
