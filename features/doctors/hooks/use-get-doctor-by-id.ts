import { useQuery } from "@tanstack/react-query";
import { getDoctorById } from "../utils/api";


export const useGetDoctorById = (doctorId: string) => {

  const query = useQuery({
    queryKey: ['doctors', doctorId],
    queryFn: () => getDoctorById(doctorId),
  });

  return query;
}