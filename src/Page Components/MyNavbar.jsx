import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import logo from '../Assets/Images/Profile-logo.png';

const MyNavbar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img src={logo} alt="Logo" height="50px" width="50px" className="me-2" />
            My App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive" />
          <Navbar.Collapse id="navbarResponsive">
            <Nav className="mx-auto text-center">
              <Nav.Link href="#home">
                <span role="img" aria-label="home">🏠</span> Home
              </Nav.Link>
              <Nav.Link href="#movies">
                <span role="img" aria-label="movies">🎬</span> Movies
              </Nav.Link>
              <Nav.Link href="#tv">
                <span role="img" aria-label="tv">📺</span> TV
              </Nav.Link>
              <Nav.Link href="#sports">
                <span role="img" aria-label="sports">🏀</span> Sports
              </Nav.Link>
            </Nav>
            <div className="button-group d-flex justify-content-center mt-3 mt-lg-0">
              <Button variant="primary" href="/Register" className="me-2">
                Register
              </Button>
              <Button variant="success" href="/Login">
                Login
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
