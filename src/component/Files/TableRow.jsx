import EditIcon from "../UI/Icons/EditIcon";
import DeleteIcon from "../UI/Icons/DeleteIcon";
import { useEffect, useState } from "react";
import DeletePopver from "./DeletePopver";
import useDeleteFile from "../../api/hooks/useDeleteFile";
import UpdateFileModal from "./UpdateFileModal";
import useUpdateFile from "../../api/hooks/useUpdateFile";

function formatDate(isoString) {
  const date = new Date(isoString);

  const day = date.getDate();
  let suffix;
  if (day === 1 || day === 21 || day === 31) {
    suffix = "st";
  } else if (day === 2 || day === 22) {
    suffix = "nd";
  } else if (day === 3 || day === 23) {
    suffix = "rd";
  } else {
    suffix = "th";
  }

  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear().toString().slice(-2);

  return `${day}${suffix} ${month} ’${year}`;
}

const TableRow = ({ data, selectAll }) => {
  const [select, setSelect] = useState(false);
  useEffect(() => {
    setSelect(selectAll);
  }, [selectAll]);
  const updateFile = useUpdateFile();

  const { Name, file, Owner, ModifietAt, Type } = data;
  const [popover, setPopover] = useState(false);
  const [modal, setModal] = useState(false);

  const deleteFile = useDeleteFile(data.id);
  const closePopover = () => setPopover(false);
  const showPopover = () => setPopover(true);
  console.log("from table row", data);
  return (
    <>
      <div className="table_row">
        <input
          type="checkbox"
          checked={select}
          onChange={({ target: { checked } }) => setSelect(checked)}
        />
        <div className="flex-3 name">
          <img src={file} className="preview" />
          <span className="file_name">{Name}</span>
        </div>
        <div className="flex-1">
          <img src={Owner} alt="" className="avatar" />
        </div>
        <div className="flex-2">{data.Label ?? "No Label"}</div>
        <div className="flex-2">{Type?.toUpperCase?.()}</div>
        <div className="flex-2">{formatDate(ModifietAt)}</div>
        <div className="flex-1 action ">
          <button
            onClick={() => setModal(true)}
            className="action_button reset_button"
          >
            <EditIcon />
          </button>
          <div className="table_row_delete_button">
            <button
              onClick={showPopover}
              className="action_button reset_button"
            >
              <DeleteIcon />
            </button>
            {popover && (
              <DeletePopver onSubmit={deleteFile} onClose={closePopover} />
            )}
          </div>
        </div>
      </div>
      <UpdateFileModal
        data={data}
        open={modal}
        update={true}
        onSubmit={updateFile}
        onClose={() => setModal(false)}
      />
    </>
  );
};

export default TableRow;
