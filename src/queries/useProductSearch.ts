import { useQuery } from "react-query";
import { Product } from "../interfaces/Product";

interface ApiResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const useProductSearchQuery = (searchTerm: string) => {
  return useQuery(
    ["ProductSearch", searchTerm],
    async () => {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${searchTerm}`
      );
      const responseJson: ApiResponse = await response.json();
      return responseJson;
    },
    { staleTime: Infinity, enabled: searchTerm !== "" }
  );
};

export default useProductSearchQuery;
