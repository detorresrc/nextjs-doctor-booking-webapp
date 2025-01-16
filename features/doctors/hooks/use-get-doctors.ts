import { useQuery } from "@tanstack/react-query";

import { getDoctors } from "@/features/doctors/utils/api";

export const useGetDoctors = () => {

  const query = useQuery({
    queryKey: ['doctors'],
    queryFn: () => getDoctors(),
  });

  return query;
}