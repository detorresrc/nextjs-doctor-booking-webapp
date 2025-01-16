import { z } from "zod";
import qs from "qs";

import { axiosClient } from "@/shared/utils/global-api"

export const getHomePage = async () => {
  const query = qs.stringify({
    populate: {
      Meta_Headers: {
        populate: '*'
      },
      Hero_Section: {
        populate: '*'
      }
    }
  });

  const response = await axiosClient.get('/page-home?' + query);

  if(response.status !== 200) return null;

  const { success, error, data: homePageData } = HomePageSchema.safeParse(response.data);
  if(!success){
    console.error(error);
    return null;
  }

  return homePageData?.data;
}


// Define the image format schema
const ImageFormatSchema = z.object({
  ext: z.string(),
  url: z.string().url(),
  hash: z.string(),
  mime: z.string(),
  name: z.string(),
  size: z.number(),
  width: z.number(),
  height: z.number(),
  sizeInBytes: z.number(),
  provider_metadata: z.object({
    public_id: z.string(),
    resource_type: z.string()
  })
});

// Define the image schema
const ImageSchema = z.object({
  id: z.number(),
  documentId: z.string(),
  name: z.string(),
  alternativeText: z.null(),
  caption: z.null(),
  width: z.number(),
  height: z.number(),
  formats: z.object({
    large: ImageFormatSchema.optional(),
    small: ImageFormatSchema.optional(),
    medium: ImageFormatSchema.optional(),
    thumbnail: ImageFormatSchema.optional()
  }),
  hash: z.string(),
  ext: z.string(),
  mime: z.string(),
  size: z.number(),
  url: z.string().url(),
  previewUrl: z.null(),
  provider: z.string(),
  provider_metadata: z.object({
    public_id: z.string(),
    resource_type: z.string()
  }),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  publishedAt: z.string().datetime()
});

// Define the meta headers schema
const MetaHeaderSchema = z.object({
  __component: z.literal("global.meta"),
  id: z.number(),
  Title: z.string(),
  Description: z.string(),
  OG_Image: ImageSchema
});

const LinkOutButtonSchema = z.object({
  id: z.number(),
  Label: z.string(),
  Url: z.string().url(),
  Is_External: z.boolean()
});

// Define the hero section schema
const HeroSectionSchema = z.object({
  __component: z.literal("section.hero"),
  id: z.number(),
  Title: z.string(),
  Description: z.string(),
  Background_Image: ImageSchema,
  LinkOutButton: LinkOutButtonSchema.optional().nullable()
});

// Define the main data schema
const HomePageSchema = z.object({
  data: z.object({
    id: z.number(),
    documentId: z.string(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
    publishedAt: z.string().datetime(),
    Meta_Headers: z.array(MetaHeaderSchema),
    Hero_Section: z.array(HeroSectionSchema)
  }),
  meta: z.object({})
});

export type HomePage = z.infer<typeof HomePageSchema>;
export type MetaHeader = z.infer<typeof MetaHeaderSchema>;
export type HeroSection = z.infer<typeof HeroSectionSchema>;
export type Image = z.infer<typeof ImageSchema>;
export type ImageFormat = z.infer<typeof ImageFormatSchema>;
export type LinkOutButton = z.infer<typeof LinkOutButtonSchema>;