import { toast } from "react-hot-toast";
import useFiles from "./useFiles";
import { postFileApi } from "../fetcher";

const useAddFile = () => {
  const { mutate } = useFiles();
  const addFile = async (body) => {
    try {
      console.log(body);
      await mutate(postFileApi({ body }), {
        optimisticData: (files) => [...files, body],
        revalidate: false,
        rollbackOnError: true,
        populateCache: (addedFile, files) => [...files, addedFile],
      });
      toast.success("File Added");
    } catch (error) {
      console.log(error.stack);
      toast.error(error.message);
    }
  };
  return addFile;
};
export default useAddFile;
