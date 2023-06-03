import { React , useState } from 'react'
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import { container , nav , header , img } from 'reactstrap';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from './img/logoo.png';


import "./App.css"



 const NavBarr = () => {
 
  const mystyle = {
    color: "white",
    backgroundColor: "#06020e",
    fontFamily: "Arial"
  };
 
  return (
    <>
<Navbar collapseOnSelect expand="lg"  variant="dark" id='header'>
      <Container>
        
        <Navbar.Brand className='nav-logo'  href="#home"><img src={logo} width="120px" alt="" /></Navbar.Brand>
        <Navbar.Toggle  className='tog' aria-controls="responsive-navbar-nav" />
      
        <Navbar.Collapse id="responsive-navbar-nav">
       
          <Nav className="me-auto" style={mystyle} id='nav-link'>
            
            <HashLink className="active" to="#Home" id='link'>Home</HashLink>
            <HashLink to="/#about" id='link'>About</HashLink>
            <HashLink to="/#skills" id='link'>My Skills</HashLink>
            <HashLink to="/#services" id='link'>Services</HashLink>
            <HashLink to="/#resume" id='link'>Resume</HashLink>
            <HashLink to="/#projects" id='link'>Projects</HashLink>
            <HashLink to="/#contact" id='link'>Contact</HashLink>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBarr