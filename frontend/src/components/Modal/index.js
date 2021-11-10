import React from "react";

import { Modal, Button } from "react-bootstrap";

const ModalUser = ({ show, handleClose, children, save, title }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} className="button cancelar">
                    Cancelar
                </Button>
                <Button variant="null" className="button-save button" onClick={save}>
                    Salvar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalUser;