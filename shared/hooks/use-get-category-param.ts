import category from "@/admin/src/api/category/controllers/category";
import { useParams } from "next/navigation"

export const useGetCategoryParam = () => {
  const { category } = useParams();

  return category as string;
}