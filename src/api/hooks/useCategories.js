import useSWR from "swr";
import { categoryEndpoint } from "../urls";
import { getCategoriesApi } from "../fetcher";

const useCategories = () => {
  const { data, isLoading, error } = useSWR(categoryEndpoint, getCategoriesApi);
  return {
    categories: data,
    isLoading,
    error,
  };
};
export default useCategories;
