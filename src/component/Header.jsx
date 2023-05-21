import PlusIcon from "./UI/Icons/PlusIcon";
import useAddFile from "../api/hooks/useAddFile";
import UpdateFileModal from "./Files/UpdateFileModal";
import { useState } from "react";

const Header = () => {
  const addFile = useAddFile();
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="main_header">
        <h1 className="main_header_title">FIle Manager</h1>
        <button
          onClick={() => setModal(true)}
          className="reset_button action main_header_button"
        >
          <PlusIcon size={"15px"} className="mr-2" /> Upload
        </button>
      </div>
      <UpdateFileModal
        onSubmit={addFile}
        open={modal}
        onClose={() => setModal(false)}
      />
    </>
  );
};
export default Header;
