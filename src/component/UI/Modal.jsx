import Portal from "./Portal";

export const ModalHeader = ({ children }) => {
  return <div className="modal_header">{children}</div>;
};
export const ModalBody = ({ children }) => {
  return <div className="modal_body">{children}</div>;
};
const Modal = ({ children, onClose, open }) => {
  return (
    <Portal>
      <div
        style={{
          zIndex: open ? "8" : "-100 ",
          opacity: open ? 1 : 0,
        }}
        onClick={onClose}
        className="modal_overlay"
      ></div>
      <div
        style={{
          zIndex: open ? 10 : -10,
          opacity: open ? 1 : 0,
          transform: open ? "translate(-50%, 30px)" : "translate(-50%, 0px)",
        }}
        className="modal"
      >
        {children}
      </div>
    </Portal>
  );
};
export default Modal;
