import React from "react";
import { Button } from "./ui/button";
import { HeroSection } from "@/shared/utils/api-get-home-page";
import Link from "next/link";

interface Props {
  data: HeroSection
}
export const Hero = ({
  data
} : Props) => {
  console.log("Hero!!");
  return (
    <section>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8'>
          <div className="flex flex-col gap-y-4">
            <div className='max-w-lg md:max-w-none'>
              <h2 className='text-2xl font-semibold text-gray-900 sm:text-3xl'>
                {data.Title}
              </h2>
              <p className='mt-4 text-gray-700'>{data.Description}</p>
            </div>
            {data.LinkOutButton && (
              <div>
                <Link href={data.LinkOutButton.Url} target={data.LinkOutButton.Is_External ? "_blank" : ""}>
                  <Button variant={"default"} size={"lg"} className="px-10">
                      {data.LinkOutButton.Label}
                  </Button>
                </Link>
              </div>
            )}
          </div>
          <div>
            <img
              src={data.Background_Image.url}
              className='rounded-xl shadow-lg'
              alt='Doctor'
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
