import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import logo from '../Assets/Images/Profile-logo.png';

const MyNavbar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-dark" variant='dark'>
        <Container>
          <Navbar.Brand href="#home" className='d-flex align-items-center'>
            <img src={logo} alt="" height="50px" width="50px" className='me-2' />
            My App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home">&#x1F3E0; Home</Nav.Link>
              <Nav.Link href="#link">&#x1F3AC; Movies</Nav.Link>
              <Nav.Link href="#link">&#x1F4FA; TV</Nav.Link>
              <Nav.Link href="#link">&#x1F3D0; Sports</Nav.Link>
            </Nav>
            <div className="button-group d-flex ms-auto">
              <Button variant="primary" href='/Register' className='me-2'>Register</Button>
              <Button variant="success"  href='/Login'>Login</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default MyNavbar;

