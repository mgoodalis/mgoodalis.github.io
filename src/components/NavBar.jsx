import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm w-100">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="fw-semibold text-dark me-4">
          Matt Goodalis Photography
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/about" className="text-dark">
              About Me
            </Nav.Link>
            <Nav.Link as={Link} to="/portfolio" className="text-dark">
              Portfolio
            </Nav.Link>
            <Nav.Link as={Link} to="/prints" className="text-dark">
              Prints
            </Nav.Link>
            <Nav.Link as={Link} to="/equipment" className="text-dark">
              Equipment
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-dark">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
