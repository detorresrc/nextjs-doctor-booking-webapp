import { cache } from "react";

import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { CategorySearch } from "@/features/categories/components/category-search";
import { DoctorList } from "@/features/doctors/components/doctor-list";
import { getHomePage } from "@/shared/utils/api-get-home-page";
import { Metadata } from "next";
import { notFound } from "next/navigation";


export const generateMetadata = async() : Promise<Metadata> => {
  const homePageData = await getHomePageData();
  if(!homePageData) 
    return {};

  const [ metaHeader ] = homePageData.Meta_Headers;

  return {
    title: metaHeader.Title || "Home Page - Title",
    description: metaHeader.Description || "Home Page - Description",
    openGraph: {
      images: [
        ...(metaHeader.OG_Image.url ? [metaHeader.OG_Image.url] : [])
      ]
    }
  }
}

export default async function Home() {
  const homePageData = await getHomePageData();
  if(!homePageData) return notFound();

  const [ heroSecion ] = homePageData.Hero_Section;

  return (
    <Container>
      {homePageData && <Hero data={heroSecion}/>}
      <CategorySearch/>
      <DoctorList/>
    </Container>
  );
}

const getHomePageData = cache(async () => {
  return await getHomePage();
})