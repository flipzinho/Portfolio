import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Collapse, NavbarToggler } from 'reactstrap';
import logo from '../../assets/logo.jpg';

import './Navbar.css'
export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
       <Navbar className="navbar-container" light expand="md">
    <NavbarBrand href="/" className="navbar-brand">
      <img className="imgLogo" src={logo} alt="" />
    </NavbarBrand>
    <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/" className="nav-item">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/about" className="nav-item">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/portfolio" className="nav-item">Portfolio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/contact" className="nav-item">Contact</NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
    </nav>
   
   
  );
};