import CancelIcon from "../UI/Icons/CancelIcon";
import CheckIcon from "../UI/Icons/CheckIcon";
import DeleteIcon from "../UI/Icons/DeleteIcon";
import Popover, { PopoverBody, PopoverHeader } from "../UI/Popover/Popover";

const DeletePopver = ({ onClose, onSubmit }) => {
  return (
    <Popover>
      <PopoverHeader>
        <DeleteIcon size={"13px"} /> <span>Remove</span>
      </PopoverHeader>
      <PopoverBody>
        <div className="delete_popver">
          <p>Are you sure ? </p>
          <div>
            <button
              onClick={onClose}
              className="reset_button popover_cancel_button"
            >
              <CancelIcon />
            </button>
            <button
              onClick={onSubmit}
              className="reset_button popover_submit_button"
            >
              <CheckIcon />
            </button>
          </div>
        </div>
      </PopoverBody>
    </Popover>
  );
};
export default DeletePopver;
