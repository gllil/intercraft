import React from "react";
import { Container, Jumbotron, Button, Row, Col, Card } from "react-bootstrap";
import "./Home.css";

function Home() {
  return (
    <Container className="home-wrapper">
      <Jumbotron className="text-center banner">
        <h1>InterCraft Upholstery</h1>
        <h3>
          <em>
            Orlando's Best Value For Auto Upholstery Repair and Replacement!
          </em>
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
        <h3 className="phone">
          <em>Call Us Today!</em>
        </h3>
        <h3>(407) 300-5441</h3>
      </Jumbotron>
      <Row className="text-center">
        <Col className="title">
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
      <Row className="text-center">
        <Col className="title">
          <p>
            Orlando's Best Value For Car Seat Repair, Convertible Top
            Replacement, Auto Carpet Replacement, Headliner Replacement & More
            We are Orlando's one-stop shop for auto interior upholstery repairs,
            including car seat upholstery and insert repair and replacement,
            interior and trunk carpet replacement, side door panel upholstery
            replacement, headliner replacement, and convertible top replacement.
            We excel at working with leather, vinyl, and cloth upholstery
            fabrics and take great care to select the material and color to
            create a seamless look. Whether you have a faded and cracked leather
            seat or a delaminated, drooping headliner, our highly experienced
            upholstery experts can fix it so that it looks as good as new or
            better. Our professional auto upholstery repair services are
            affordably priced and available for vehicles of all makes and
            models.
          </p>
          <p>
            Our Auto Upholstery Shop in Orlando, Serving Kissimmee, Sanford, and
            Surrounding Cities Since 20 years! We provide quick turnaround
            times, superior craftsmanship, and reasonable prices for custom auto
            upholstery and interior repairs in Orlando. We offer free
            over-the-phone estimates for minor car upholstery repair services
            and free in-shop consultations for custom upholstery restoration and
            repair jobs. Give us a call or visit us at our auto upholstery shop
            in Orlando, Florida, today.
          </p>
          <h3 className="phone">
            <em>Call Us Today!</em>
          </h3>
          <h3>(407) 300-5441</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
