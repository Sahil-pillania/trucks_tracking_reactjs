import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import DarkModeToggle from "../../Utilites/DarkMode";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary py-0">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="favicon.jpg"
            className="popping2 brand_logo"
            alt="Brand_logo"
          />
          <span className="brand_text">Truck-Tracking</span>
          {/* Truck-Tracking */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes"></Nav.Link>
            <Nav.Link href="#deets">
              <DarkModeToggle />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
