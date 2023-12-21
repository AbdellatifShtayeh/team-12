import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Footer2() {
 
  return (
    <div className="App">
      <Navbar bg="white" expand="lg" color='white'>
        <Container fluid>
          <Nav className="mr-auto">
            <Nav.Link  href="#about"><font>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;About&nbsp; </font></Nav.Link>
            <Nav.Link href="#support"><font>&nbsp; &nbsp; &nbsp;Support</font></Nav.Link>
            <Nav.Link href="#docs"><font>&nbsp; &nbsp; &nbsp;Docs</font></Nav.Link>
            <Nav.Link href="#privacy"><font>&nbsp; &nbsp; &nbsp;Privacy & Terms</font></Nav.Link>
          </Nav>
          <Navbar.Text className="ml-auto">
         <font>  ©2023 Webestica All rights reserved.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</font>
          </Navbar.Text>
        </Container>
      </Navbar>
      <Container>
        {/* Your main content goes here */}
      </Container>
    </div>
  );
}

export default Footer2;
