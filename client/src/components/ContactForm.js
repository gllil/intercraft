import React, { useState } from "react";
import { Form, Row, Col, Button, Modal } from "react-bootstrap";
import "./ContactForm.css";
import axios from "axios";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleClose = () => {
    setShow(false);
    window.location.reload(false);
  };

  console.log(form);

  function handleForm(e) {
    const { dataset, value } = e.target;
    console.log(dataset, value);
    setForm({ ...form, [dataset.property]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formVal = e.currentTarget;

    if (formVal.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    console.log(form);

    axios.post("/api/email", form).then(() => {
      setValidated(true);
      setShow(true);
    });
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} className="form" validated={validated}>
        <Row className="text-center">
          <Col>
            <h3>Request a Quote</h3>
          </Col>
        </Row>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={(e) => handleForm(e)}
            data-property="name"
            className="input"
            type="text"
            required={true}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={(e) => handleForm(e)}
            data-property="email"
            className="input"
            type="email"
            required={true}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            onChange={(e) => handleForm(e)}
            data-property="phone"
            className="input"
            type="phone"
            required={true}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>What type of service will you need?</Form.Label>
          <Form.Control
            onChange={(e) => handleForm(e)}
            as="textarea"
            data-property="message"
            className="input"
            type="text"
            required={true}
          />
        </Form.Group>
        <Button type="submit" variant="secondary">
          Send Request <i className="fas fa-paper-plane"></i>
        </Button>
      </Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>You're request has been successfully submitted!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ContactForm;
