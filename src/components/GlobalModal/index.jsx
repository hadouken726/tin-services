import React from "react";
import Modal from "react-modal";
import { Container, Button, CloseIcon } from "./styles";

const GlobalModal = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>{children}</Container>

      <Button
        type="button"
        onClick={onRequestClose}
        className="close-react-modal"
      >
        <CloseIcon />
      </Button>
    </Modal>
  );
};

export default GlobalModal;
