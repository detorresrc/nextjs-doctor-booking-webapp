import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Doctor } from "@/features/doctors/utils/api-types";
import {
  Facebook,
  GraduationCap,
  MapPin,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';


interface Props {
  doctor: Doctor;
}

export const DoctorDetails = ({ doctor }: Props) => {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3 border-[1px] p-5 mt-5 rounded-lg shadow-md'>
        <div>
          <Image
            src={doctor.Image.url}
            alt={doctor.Name}
            width={300}
            height={300}
            className='rounded-lg h-[300px] shadow-lg object-cover'
          />
        </div>
        <div className='col-span-2 mt-5 md:mt-0 flex flex-col gap-2'>
          <h2 className='font-bold text-2xl'>{doctor.Name}</h2>
          <p className='flex flex-row items-center justify-start gap-2 text-gray-500'>
            <GraduationCap />
            <span>{doctor.Year_of_Experience} of experience</span>
          </p>
          <p className='flex flex-row items-center justify-start gap-2 text-gray-500'>
            <MapPin />
            <span>{doctor.Address}</span>
          </p>
          <div className='w-full flex flex-row justify-start items-center gap-2'>
            {doctor &&
              doctor.categories?.map((category) => (
                <Badge
                  key={category.documentId}
                  variant={"default"}
                  className='w-auto line-clamp-1 text-xs md:text-sm m-2'
                >
                  {category.Name}
                </Badge>
              ))}
          </div>
          <div className='w-full flex flex-row justify-start items-center gap-3'>
            <Link href='/' className='hover-effect'>
              <Facebook className='size-8 bg-cyan-700 text-white rounded-full p-1' />
            </Link>
            <Link href='/' className='hover-effect'>
              <Youtube className='size-8 bg-cyan-700 text-white rounded-full p-1' />
            </Link>
            <Link href='/' className='hover-effect'>
              <Twitter className='size-8 bg-cyan-700 text-white rounded-full p-1' />
            </Link>
          </div>

          <Link href='' className='pt-4'>
            <Button className='rounded-lg'>Book Appointment</Button>
          </Link>
        </div>
      </div>
      <div className="p-3 border-[1px] rounded-lg shadow-md mt-5">
        <h2 className="font-bold text-[20px]">About Me</h2>
        <div className="text-gray-500 tracking-wide">
          <ReactMarkdown remarkPlugins={[remarkBreaks, remarkGfm]}>{doctor.About}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};
