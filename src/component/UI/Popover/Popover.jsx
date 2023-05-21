import Portal from "../Portal";
import "./Popover.css";
export const PopoverHeader = ({ children }) => {
  return <div className="popover_header">{children}</div>;
};

export const PopoverBody = ({ children }) => {
  return <div className="popover_body">{children}</div>;
};
const Popover = ({ children }) => {
  return <div className="popover">{children}</div>;
};
export default Popover;
