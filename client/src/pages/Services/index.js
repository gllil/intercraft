import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Services.css";

function Services() {
  return (
    <Container>
      <Row className="text-center">
        <Col className="services-title">
          <h2>Services</h2>
          <p>
            InterCraft Auto Upholstery is the best choice in Orlando,Kissimmee
            area for auto upholstery services. Over the last 20 years, we've
            provided thousands of satisfied clients throughout the surrounding
            cities as well as across the globe with superior auto upholstery
            repair and restoration services at a great price. Our custom auto
            upholstery restoration work has been featured all over Florida ,
            you'll always get premium auto upholstery services at a fair and
            competitive price.
          </p>
          <h3>
            <em>Call Us For More Details!</em>
          </h3>
          <h3 className="phone">(407) 300-5441</h3>
        </Col>
      </Row>

      <Row>
        <Col>
          <ul className="services-list-one">
            <li className="list-item" variant="dark">
              <strong>Leather Interiors</strong>
            </li>
            <li className="list-item" variant="dark">
              <strong>Carpet Interiors</strong>
            </li>
            <li className="list-item" variant="dark">
              <strong>Vinyl Interiors</strong>
            </li>
            <li className="list-item" variant="dark">
              <strong>Suede Alcantara Interiors</strong>
            </li>
            <li className="list-item" variant="dark">
              <strong>Stitch Work</strong>
            </li>
            <li className="list-item" variant="dark">
              <strong>Side Door Panels</strong>
            </li>
            <li className="list-item" variant="dark">
              <strong>Factory Tops</strong>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <ul className="services-list-two">
            <li className="list-item" variant="dark">
              <strong>Aftermarket Tops</strong>
            </li>
            <li className="list-item" variant="dark">
              <strong>Convertible Top Replacement</strong>
            </li>
            <li className="list-item" variant="dark">
              <strong>Headliner Replacement</strong>
            </li>
            <li className="list-item" variant="dark">
              <strong>Customer Headliner Design</strong>
            </li>
            <li className="list-item" variant="dark">
              <strong>Car Seat Upholstery Repair</strong>
            </li>
            <li className="list-item" variant="dark">
              <strong>Car Seat Cushion Replacement</strong>
            </li>
            <li className="list-item" variant="dark">
              <strong>Cut & Sewn Auto Carpet</strong>
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="text-center">
        <Col className="services-title">
          <h2>Specialty Vehicles</h2>
          <p>
            We offer High-Quality Auto Upholstery Services for Classic Cars,
            Sports Cars, Antique Cars, Show Cars, Restomods, and Rare
            Collectible Cars At InterCraft Upholstery, we specialize in
            customizing and restoring the interior upholstery for the world's
            most prestigious European cars including Ferrari, Porsche, Mercedes,
            Bentley, Bugatti, Rolls-Royce, and more. Whether you own a
            multi-million dollar classic Ferrari or a modern Mercedes Benz, our
            team of auto interior specialists has the experience, knowledge, and
            skill to return your vehicle's interior to stock condition or
            provide a custom-designed interior to complement your vehicleâ€™s
            shape and style. We provide comprehensive auto interior restoration
            from car seat replacement to new upholstery, and we always use
            materials that are authentic to your car's character for a timeless
            look.
          </p>
          <h3>
            <em>Call Us For More Details!</em>
          </h3>
          <h3 className="phone">(407) 300-5441</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
