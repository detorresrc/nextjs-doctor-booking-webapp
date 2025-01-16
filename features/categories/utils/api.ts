import z from "zod";

import { axiosClient } from "@/shared/utils/global-api"
import { CategoryResponse, CategoryResponseSchema } from "./api-types";

export const getCategories = async () => {
  const response = await axiosClient.get<CategoryResponse>('/categories?populate=*');

  if(response.status !== 200) return null

  const { data: categories, success, error } = CategoryResponseSchema.safeParse(response.data);

  if(!success) {
    console.error("getCategories() Error : ", error?.flatten());
    return null;
  }

  return categories;
}

export default {
  getCategories
}