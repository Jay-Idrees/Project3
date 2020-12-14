import React from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap'
import LoginForm from "../LoginForm"
function FormModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Login / Sign Up
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <LoginForm />
      </Modal.Body>
      <Modal.Footer>
  
      </Modal.Footer>
    </Modal>
  );
}

export default FormModal

