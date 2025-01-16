import { axiosClient } from "@/shared/utils/global-api"
import { DoctorsResponse, DoctorsResponseSchema } from "./api-types";

export const getDoctors = async () => {
  const response = await axiosClient.get<DoctorsResponse>('/doctors?populate=*');

  if (response.status !== 200) return null;

  const { success, data, error } = DoctorsResponseSchema.safeParse(response.data);
  if (!success) {
    console.error(error);
    return null;
  }

  return data;
}

export const getDoctorByCategoryName = async (categoryName: string) => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  const response = await axiosClient.get<DoctorsResponse>('/doctors?populate=*&filters[categories][Name][$containsi]=' + categoryName);

  if (response.status !== 200) return null;

  const { success, data, error } = DoctorsResponseSchema.safeParse(response.data);
  if (!success) {
    console.error(error);
    return null;
  }

  return data;
}

export default {
  getDoctors
}