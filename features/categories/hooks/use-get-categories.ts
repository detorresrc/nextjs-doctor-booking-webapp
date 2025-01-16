import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../utils/api";

export const useGetCategories = () => {

  const query = useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories()
  });

  return query;
}