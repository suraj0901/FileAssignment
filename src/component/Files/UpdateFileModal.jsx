import { useState } from "react";
import Modal, { ModalBody, ModalHeader } from "../UI/Modal";

const UpdateFileModal = ({
  onClose,
  open,
  data = {
    id: Number.MAX_SAFE_INTEGER,
  },
  update = false,
  onSubmit,
}) => {
  const [formData, setFormData] = useState(data);
  const handleChange = ({ target }) => {
    setFormData((previousFormData) => ({
      ...previousFormData,
      [target.name]: target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    onClose();
    setFormData({
      id: Number.MAX_SAFE_INTEGER,
    });
    await onSubmit(formData);
  };
  const handleCancel = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <Modal open={open} onClose={onClose}>
      <ModalHeader>Update File</ModalHeader>
      <ModalBody>
        <form className="updateFile">
          <section>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={formData.Name ?? ""}
              onChange={handleChange}
              name="Name"
              id="name"
            />
          </section>
          <section>
            <label htmlFor="file">File</label>
            <input
              onChange={handleChange}
              type="text"
              value={formData.file ?? ""}
              name="file"
              id="file"
            />
          </section>
          <section>
            <label htmlFor="owner">Owner</label>
            <input
              onChange={handleChange}
              type="text"
              value={formData.Owner ?? ""}
              name="Owner"
              id="owner"
            />
          </section>
          <section>
            <label htmlFor="label">Label</label>
            <input
              onChange={handleChange}
              type="text"
              value={formData.Label ?? ""}
              name="Label"
              id="label"
            />
          </section>
          <section>
            <label htmlFor="type">Type</label>
            <input
              onChange={handleChange}
              type="text"
              value={formData.Type ?? ""}
              name="Type"
              id="type"
            />
          </section>
          <section className="buttongrp">
            <button onClick={handleCancel} className="reset_button cancel">
              Cancel
            </button>
            <button onClick={handleSubmit} className="reset_button submit">
              {update ? "Update" : "Add"}
            </button>
          </section>
        </form>
      </ModalBody>
    </Modal>
  );
};
export default UpdateFileModal;
