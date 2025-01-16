import React from 'react'
import { DoctorListWrapper } from '@/app/(public)/search/_components/doctor-list-wrapper';

interface Props {
  params: Promise<{ query: string }>
}

const SearchPage = async ({
  params
} : Props) => {
  const { query } = await params;

  return (
    <div>
      <DoctorListWrapper/>
    </div>
  )
}

export default SearchPage