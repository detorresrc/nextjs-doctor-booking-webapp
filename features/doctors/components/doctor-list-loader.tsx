import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export const DoctorListLoader = () => {
  return (
    <div className='mb-10 px-10'>
      <h2 className='font-bold text-xl mb-4'>Popular Doctors</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className='flex flex-col items-center justify-center gap-2 p-4 border rounded shadow-sm'
          >
            <Skeleton className='w-full h-40 rounded-lg' />

            <div className='w-full flex flex-row justify-start items-center gap-2'>
              <Skeleton className='h-6 w-1/4 rounded-md' />
              <Skeleton className='h-6 w-1/4 rounded-md' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
