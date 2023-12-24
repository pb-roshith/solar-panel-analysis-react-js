import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavUI() {
    return (
      <Navbar style={{}} expand="lg" className="">
        <Container>
          <Navbar.Brand href="/"><h1 style={{color:'#fff', paddingRight:'400px', paddingLeft:'60px'}}>Solar Analysis</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={{color:'#fff'}} href='#dec'><h6>Description</h6></Nav.Link>
              <Nav.Link style={{color:'#fff'}} href="#ana"><h6>Analyse</h6></Nav.Link>
              <Nav.Link style={{color:'#fff'}} href="#con"><h6>Contact</h6></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavUI;