import { Skeleton } from "@/components/ui/skeleton";

export const CategorySearchLoader = () => {
  return (
    <div className='mb-10 flex items-center flex-col gap-3 mt-4'>
      <Skeleton className='h-10 w-48' /> {/* Title skeleton */}
      <Skeleton className='h-6 w-96 mb-4' /> {/* Subtitle skeleton */}
      <div className='flex flex-row gap-2'>
        <Skeleton className='h-10 w-64' /> {/* Search input skeleton */}
        <Skeleton className='h-10 w-24' /> {/* Button skeleton */}
      </div>
      <div className='w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-4'>
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className='flex flex-col items-center text-center gap-2 p-5 m-2 bg-blue-50 rounded-lg'
          >
            <Skeleton className='h-10 w-10 rounded-full' />{" "}
            {/* Icon skeleton */}
            <Skeleton className='h-4 w-20' /> {/* Label skeleton */}
          </div>
        ))}
      </div>
    </div>
  );
};
