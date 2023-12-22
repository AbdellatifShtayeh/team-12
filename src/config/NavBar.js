import React from 'react';
import { Navbar, Container,  Button, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
function Navpar_bolg() {
  return (
    <div className="App">
      <Navbar lg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#" onClick={() => window.location.reload()}>
          <img src="https://social.webestica.com/assets/images/logo.svg"width="35" height="35"></img>
         
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="me-auto" >
              <input type="text" className="form-control" placeholder="Search..." /> 
            </div>
            
            <div className="d-flex align-items-center">
                 <a href="#" className="list-group-item list-group-item-action disabled">Demo<font size="1">&nbsp;⌵</font> &nbsp; &nbsp; &nbsp;Pages<font size="1">&nbsp;⌵</font> &nbsp; &nbsp; &nbsp;AccountMy<font size="1">&nbsp;⌵</font> &nbsp; &nbsp; &nbsp;Network<font size="1">&nbsp;⌵</font> &nbsp; &nbsp; &nbsp; </a>
              <Button variant="outline-secondary" className="me-2"  style={{borderColor: "white",backgroundColor: "#EBEBEB"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
</svg>


              </Button>
              <Button variant="outline-secondary" className="me-2" style={{borderColor: "white" , backgroundColor: "#EBEBEB"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>
</svg>
              </Button>
              <Button variant="outline-secondary" className="me-2" style={{borderColor: "white",backgroundColor: "#EBEBEB"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
</svg>
              
                <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle p-1"> 
                  <span className="visually-hidden">New notifications</span>
                  
                </Badge>
              </Button>
           
              <Navbar.Brand href="#" >
              <img src="https://social.webestica.com/assets/images/avatar/07.jpg"  width="35" height="35" style={{borderRadius: 5}}></img>
         
          </Navbar.Brand>
            
           
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
    </div>
  );
}

export default Navpar_bolg;
