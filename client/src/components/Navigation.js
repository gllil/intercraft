import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Navigation.css";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/">InterCraft Upholstery</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="navlink" href="/services">
              Services
            </Nav.Link>
            <Nav.Link className="navlink" href="/contact">
              Get A Qoute
            </Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Navbar.Brand href="tel:4073005441">
              Call us at (407) 300-5441
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
