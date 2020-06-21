import React from "react";
import { Container, Jumbotron, Button, Row, Col, Card } from "react-bootstrap";
import "./Home.css";

function Home() {
  return (
    <Container>
      <Jumbotron className="text-center banner">
        <h1>InterCraft Upholstery</h1>
        <h3>
          <em>Orlando's Best Value For Car Seat Repair!</em>
        </h3>
        <p>
          We are Orlando's one-stop shop for auto interior upholstery repairs,
          including car seat upholstery and insert repair and replacement,
          interior and trunk carpet replacement, side door panel upholstery
          replacement, headliner replacement, and convertible top replacement.
        </p>
        <Row>
          <Col>
            <Button
              className="btn"
              href="/services"
              variant="outline-secondary"
            >
              See All Our Services
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className="btn" href="/contact" variant="outline-secondary">
              Get a Quote
            </Button>{" "}
          </Col>
        </Row>
        <h3 className="phone">(407) 300-5441</h3>
        <h3>
          <em>Call Us Today!</em>
        </h3>
      </Jumbotron>
      <Row className="text-center">
        <Col md={{ span: 6, offset: 3 }} className="title">
          <h2>What Sets Us Apart</h2>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className="text-center crd justify-content-center">
            <Card.Body>
              <Card.Title>Superior Craftsmanship</Card.Title>
              <Card.Text>
                <i className="fas fa-award fa-5x"></i>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center crd ">
            <Card.Body>
              <Card.Title>Reasonable Prices</Card.Title>
              <Card.Text className="justify-content-center icn">
                <i className="fas fa-dollar-sign fa-5x"></i>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center crd">
            <Card.Body>
              <Card.Title>Quick Turnaround Times</Card.Title>
              <Card.Text>
                <i className="fas fa-history fa-5x"></i>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
