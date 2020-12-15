import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


function Headbar() {
  return (
 
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
    <Navbar.Brand href="/">USRA.Tech, Discover the Truth Beyond Numbers</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        
      </Nav>

      
      <Nav>
        <Nav.Link href="/services">Services</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
       
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  );
}

export default Headbar