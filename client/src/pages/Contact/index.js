import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Maps from "../../components/Maps";
import "./Contact.css";
import ContactForm from "../../components/ContactForm";

function Contact() {
  return (
    <Container>
      <Row className="text-center">
        <Col md={6} sm={12}>
          <Card className="text-center infocrd ">
            <Card.Body className="addr">
              <Card.Title>
                <i className="fas fa-map-marked-alt fa-3x"></i>
              </Card.Title>
              <div className="text-left">
                <strong>Address: </strong>
                <p>
                  11245 S Orange Blossom Trail #306 <br /> Orlando, FL 32837
                </p>
                <strong>Phone: </strong>
                <p>(407) 300-5441</p>
                <strong>Hours: </strong>
                <p>
                  Monday - Friday <em>8:00AM-6:00PM</em> <br />
                  Saturday <em>9:30AM-1:30PM </em> Sunday <em>Closed</em>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} sm={12} className="map">
          <Maps />
        </Col>
      </Row>
      <Row>
        <Col>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
