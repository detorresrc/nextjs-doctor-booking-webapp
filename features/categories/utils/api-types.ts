import { z } from "zod";

export const ProviderMetadataSchema = z.object({
  public_id: z.string(),
  resource_type: z.string(),
});

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
  sizeInBytes: z.number().optional(),
  provider_metadata: ProviderMetadataSchema,
});

export const IconSchema = z.object({
  id: z.number(),
  documentId: z.string(),
  name: z.string(),
  alternativeText: z.string().nullable(),
  caption: z.string().nullable(),
  width: z.number(),
  height: z.number(),
  formats: z.object({
    small: ImageFormatSchema.optional(),
    thumbnail: ImageFormatSchema.optional(),
  }),
  hash: z.string(),
  ext: z.string(),
  mime: z.string(),
  size: z.number(),
  url: z.string(),
  previewUrl: z.string().nullable(),
  provider: z.string(),
  provider_metadata: ProviderMetadataSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string(),
});

export const CategorySchema = z.object({
  id: z.number(),
  documentId: z.string(),
  Name: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string(),
  Icon: IconSchema,
});

export const CategoryResponseSchema = z.object({
  data: z.array(CategorySchema),
  meta: z.object({
    pagination: z.object({
      page: z.number(),
      pageSize: z.number(),
      pageCount: z.number(),
      total: z.number(),
    }),
  })
});

export type CategoryResponse = z.infer<typeof CategoryResponseSchema>;
export type Category = z.infer<typeof CategorySchema>;
export type Icon = z.infer<typeof IconSchema>;
export type ImageFormat = z.infer<typeof ImageFormatSchema>;
export type ProviderMetadata = z.infer<typeof ProviderMetadataSchema>;