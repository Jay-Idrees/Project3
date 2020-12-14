import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

function Headbar() {
  return (
 
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
    <Navbar.Brand href="#home">USRA.Tech, Discover the Truth Beyond Numbers</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        
      </Nav>

      
      <Nav>
        <Nav.Link href="#deets">Services</Nav.Link>
        <Nav.Link href="#deets">Contact</Nav.Link>
        <Nav.Link href="#deets">About</Nav.Link>
       
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  );
}

export default Headbar