import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import DetailTable from './DetailTable';


function DeleteModal(props) {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <i className="bi bi-trash3 btn text-danger btn-lg" onClick={handleShow}></i>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete ToDo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure that you wanna delete this todo?</p>
                    <DetailTable
                    title={props.todo.title}
                    description={props.todo.description}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="warning" onClick={() => props.deleteThisTodo(props.todo.id)}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );


}

export default DeleteModal