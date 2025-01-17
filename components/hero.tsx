import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { HeroSection } from "@/shared/utils/api-get-home-page";

interface HeroProps {
  data: HeroSection;
  imagePosition?: 'left' | 'right';
}

export const Hero = ({ data, imagePosition = 'right' }: HeroProps) => {
  const ContentSection = () => (
    <div className="flex flex-col gap-y-4">
      <div className="max-w-lg md:max-w-none">
        <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
          {data.Title}
        </h2>
        <p className="mt-4 text-gray-700">{data.Description}</p>
      </div>
      {data.LinkOutButton && (
        <Link 
          href={data.LinkOutButton.Url} 
          target={data.LinkOutButton.Is_External ? "_blank" : undefined}
        >
          <Button 
            variant="default" 
            size="lg" 
            className="px-10 hover-effect"
          >
            {data.LinkOutButton.Label}
          </Button>
        </Link>
      )}
    </div>
  );

  const ImageSection = () => (
    <Image
      src={data.Background_Image.url}
      className="rounded-xl shadow-lg"
      alt="Doctor"
      width={800}
      height={800}
    />
  );

  return (
    <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
        {imagePosition === 'left' ? (
          <>
            <ImageSection />
            <ContentSection />
          </>
        ) : (
          <>
            <ContentSection />
            <ImageSection />
          </>
        )}
      </div>
    </section>
  );
};

// Legacy exports for backwards compatibility
export const HeroLeft = (props: Omit<HeroProps, 'imagePosition'>) => (
  <Hero {...props} imagePosition="right" />
);

export const HeroRight = (props: Omit<HeroProps, 'imagePosition'>) => (
  <Hero {...props} imagePosition="left" />
);