import { cache } from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/container";
import { CategorySearch } from "@/features/categories/components/category-search";
import { getHomePage } from "@/shared/utils/api-get-home-page";
import { DoctorListWrapper } from "@/app/(public)/_components/doctor-list-wrapper";
import { HeroWrapper } from "@/components/hero-wrapper";


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

  const heroSections = homePageData.Hero_Section;

  return (
    <Container>
      {heroSections && <HeroWrapper  data={heroSections}/>}
      <CategorySearch/>
      <DoctorListWrapper/>
    </Container>
  );
}

const getHomePageData = cache(async () => {
  return await getHomePage();
})