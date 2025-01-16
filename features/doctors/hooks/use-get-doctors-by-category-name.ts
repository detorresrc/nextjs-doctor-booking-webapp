import { useQuery } from "@tanstack/react-query";
import { getDoctorByCategoryName } from "../utils/api";


export const useGetDoctorsByCategoryName = (categoryName: string) => {

  const query = useQuery({
    queryKey: ['doctors', categoryName],
    queryFn: () => getDoctorByCategoryName(categoryName),
  });

  return query;
}