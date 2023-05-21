import useSWR from "swr";
import { filesEndpoint } from "../urls";
import { getFilesApi } from "../fetcher";

const useFiles = () => {
  const { data, isLoading, error, mutate } = useSWR(filesEndpoint, getFilesApi);
  return {
    files: data,
    isLoading,
    error,
    mutate,
  };
};
export default useFiles;
