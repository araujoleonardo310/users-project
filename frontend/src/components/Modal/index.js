import React from "react";

import { Modal, Button } from "react-bootstrap";

const ModalUser = ({ show, handleClose, children, save }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Novo usuário: </Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="null" className="button-save" onClick={save}>
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalUser;