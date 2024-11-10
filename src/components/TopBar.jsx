import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const TopBar = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">
          400 Hotels & Holiday <br /> rentals found
        </Navbar.Brand>
        <Nav className="me-auto" style={{ marginLeft: 200 }}>
          <Nav.Link href="#home" className="fw-bold fs-5">
            Hotel Name
          </Nav.Link>
          <Nav.Link href="#features" className="fw-bold fs-5">
            Star Rating
          </Nav.Link>
          <Nav.Link href="#pricing" className="fw-bold fs-5">
            Price
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopBar;
