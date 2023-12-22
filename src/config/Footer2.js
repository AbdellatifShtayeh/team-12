import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

function Footer2() {
 
  return (
    <div className="App">
       <Navbar bg="white" expand="lg">
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#about">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;About</Nav.Link>
      <Nav.Link href="#support">Support</Nav.Link>
      <Nav.Link href="#docs">Docs</Nav.Link>
      <Nav.Link href="#privacy">Privacy & Terms</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  <footer className="text-center">
  <Row>
    <Col>©2023 Webestica All rights reserved.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</Col>
  </Row>
</footer>
</Navbar>
<Container>
  {/* Your main content goes here */}
</Container>
    </div>
  );
}

export default Footer2;
