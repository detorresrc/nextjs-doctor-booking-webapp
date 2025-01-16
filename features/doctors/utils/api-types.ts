import { z } from 'zod';

export const ImageFormatSchema = z.object({
  ext: z.string(),
  url: z.string(),
  hash: z.string(),
  mime: z.string(),
  name: z.string(),
  path: z.string().nullable(),
  size: z.number(),
  width: z.number(),
  height: z.number(),
  sizeInBytes: z.number(),
  provider_metadata: z.object({
    public_id: z.string(),
    resource_type: z.string()
  })
});

export const CategorySchema = z.object({
  id: z.number(),
  documentId: z.string(),
  Name: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string()
});

export const DoctorImageSchema = z.object({
  id: z.number(),
  documentId: z.string(),
  name: z.string(),
  alternativeText: z.string().nullable(),
  caption: z.string().nullable(),
  width: z.number(),
  height: z.number(),
  formats: z.object({
    thumbnail: ImageFormatSchema
  }),
  hash: z.string(),
  ext: z.string(),
  mime: z.string(),
  size: z.number(),
  url: z.string(),
  previewUrl: z.string().nullable(),
  provider: z.string(),
  provider_metadata: z.object({
    public_id: z.string(),
    resource_type: z.string()
  }),
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string()
});

export const DoctorSchema = z.object({
  id: z.number(),
  documentId: z.string(),
  Name: z.string(),
  Address: z.string().optional().nullable(),
  Patients: z.string().optional().nullable(),
  Year_of_Experience: z.string().optional().nullable(),
  StartTime: z.string().optional().nullable(),
  EndTime: z.string().optional().nullable(),
  About: z.string().optional().nullable(),
  Phone: z.string().optional().nullable(),
  Premium: z.boolean().optional().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string(),
  categories: z.array(CategorySchema).optional().nullable(),
  Image: DoctorImageSchema
});

export const DoctorsResponseSchema = z.object({
  data: z.array(DoctorSchema),
  meta: z.object({
    pagination: z.object({
      page: z.number(),
      pageSize: z.number(),
      pageCount: z.number(),
      total: z.number()
    })
  })
});

export type Doctor = z.infer<typeof DoctorSchema>;
export type DoctorsResponse = z.infer<typeof DoctorsResponseSchema>;
export type Category = z.infer<typeof CategorySchema>;
export type DoctorImage = z.infer<typeof DoctorImageSchema>;
export type ImageFormat = z.infer<typeof ImageFormatSchema>;