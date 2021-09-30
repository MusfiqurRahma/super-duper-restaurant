import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../logo/logo.webp';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
          <img src={logo} alt="" />
           <Navbar bg="dark" expand="lg">
        <Container fluid>
      <Navbar.Brand href="#"  style={{ color:'pink'}}> <h4>Super Duper Restaurant</h4> </Navbar.Brand>
     <Navbar.Toggle aria-controls="navbarScroll" />
     <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0 "
        style={{ maxHeight: '100px'}}
        navbarScroll
      >
        <Link to='/home'style={{ color:'white',margin:'10px',textDecoration:'none'}}>Home</Link>
        <Link to='/about'  style={{ color:'white',margin:'10px',textDecoration:'none'}}>About</Link>
        <Link to='/about/contact'  style={{ color:'white',margin:'10px',textDecoration:'none'}}>Contact</Link>
        </Nav>
        
    </Navbar.Collapse>
  </Container>
</Navbar>
 </div>
    );
};

export default Header;