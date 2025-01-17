import React from 'react'
import { HeroSection } from '@/shared/utils/api-get-home-page'
import { HeroLeft, HeroRight } from './hero';

interface Props {
  data: HeroSection[]
}

export const HeroWrapper = ({ data } : Props) => {
  const heroComponents = [
    HeroRight,
    HeroLeft
  ];

  return (
    <div className='w-full flex flex-col gap-4 pb-4'>
      {data.map((hero, index) => {
        const HeroComponent = heroComponents[index % 2];
        return <HeroComponent data={hero} key={index} />
      })}
    </div>
  )
}
