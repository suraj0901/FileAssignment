import { toast } from "react-hot-toast";
import { deleteFilesApi } from "../fetcher";
import useFiles from "./useFiles";

const useDeleteFile = (id) => {
  const { mutate } = useFiles();
  const deleteFile = async () => {
    try {
      await mutate(deleteFilesApi({ id }), {
        optimisticData: (files) => files.filter((file) => file.id !== id),
        revalidate: false,
        rollbackOnError: true,
        populateCache: (_res, files) => files.filter((file) => file.id !== id),
      });
      toast.success("Deleted File");
    } catch (err) {
      console.log(err.stack);
      toast.error(err.message);
    }
  };
  return deleteFile;
};
export default useDeleteFile;
