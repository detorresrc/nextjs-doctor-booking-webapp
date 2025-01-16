"use client";

import { Search } from "lucide-react";
import Image from "next/image";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useGetCategories } from "@/features/categories/hooks/use-get-categories";
import { CategorySearchLoader } from "@/features/categories/components/category-search-loader";
import Link from "next/link";

export const CategorySearch = () => {
  const { data: categories, isLoading } = useGetCategories();

  if (isLoading) return <CategorySearchLoader/>

  return (
    <div className='mb-10 flex items-center flex-col gap-3 mt-4'>
      <h2 className='font-bold text-4xl tracking-wide'>Search Doctors</h2>
      <h2 className='text-gray-500 text-xl'>
        Search Your Doctor and Book Appointment in one click
      </h2>

      <div className='flex flex-row gap-2'>
        <Input type='text' placeholder='Search..' />
        <Button type='submit'>
          <Search className='size-4' /> Search
        </Button>
      </div>

      <div className='w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-4'>
        {categories &&
          categories.data.map((category, index) => (
            <div
              key={index}
              className='flex flex-col items-center text-center gap-2 p-5 m-2 bg-blue-50 rounded-lg hover-effect'
            >
              <Link href={`/search/${category.Name.toLowerCase()}`} className="flex flex-col items-center gap-2">
                <Image
                  src={category.Icon.url}
                  alt={category.Name}
                  width={40}
                  height={40}
                />
                <label className='text-blue-600 text-sm'>{category.Name}</label>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};
