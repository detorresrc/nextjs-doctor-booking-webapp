import { axiosClient } from "@/shared/utils/global-api"
import { 
  DoctorResponse, 
  DoctorResponseSchema, 
  DoctorsResponse, 
  DoctorsResponseSchema 
} from "./api-types";

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
  const response = await axiosClient.get<DoctorsResponse>('/doctors?populate=*&filters[categories][Name][$containsi]=' + categoryName);

  if (response.status !== 200) return null;

  const { success, data, error } = DoctorsResponseSchema.safeParse(response.data);
  if (!success) {
    console.error(error);
    return null;
  }

  return data;
}

export const getDoctorById = async (id: string) => {
  const response = await axiosClient.get<DoctorResponse>(`/doctors/${id}?populate=*`);

  if (response.status !== 200) return null;

  const { success, data, error } = DoctorResponseSchema.safeParse(response.data);
  if (!success) {
    console.error(error);
    return null;
  }

  return data;
}

export default {
  getDoctors,
  getDoctorByCategoryName,
  getDoctorById
}