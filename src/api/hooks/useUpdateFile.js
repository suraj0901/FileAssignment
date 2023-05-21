import { toast } from "react-hot-toast";
import useFiles from "./useFiles";
import { updateFilesApi } from "../fetcher";

const useUpdateFile = () => {
  const { mutate } = useFiles();
  const updateFile = async (body) => {
    try {
      await mutate(updateFilesApi({ body }), {
        optimisticData: (files = []) => {
          const previousFileId = files.findIndex((file) => file.id === body.id);
          return [
            ...files.slice(0, previousFileId),
            body,
            ...files.slice(previousFileId + 1),
          ];
        },
        revalidate: false,
        rollbackOnError: true,
        populateCache: (updatedFile, files) => {
          const previousFileId = files.findIndex(
            (file) => file.id === updatedFile.id
          );
          return [
            ...files.slice(0, previousFileId),
            updatedFile,
            ...files.slice(previousFileId + 1),
          ];
        },
      });
      toast.success("Updated Files");
    } catch (error) {
      console.log(error.stack);
      toast.error(error.message);
    }
  };
  return updateFile;
};
export default useUpdateFile;
