import React from "react";
import { Link, useLocation } from "react-router-dom";

import { Navbar, Nav, NavItem } from "react-bootstrap";
import AppLogo from "../../assets/black-logo.png";
import "../style/home/header.scss";

function Header() {
  const pathname = useLocation().pathname;
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="transparent">
        <Navbar.Brand href="#home">
          <img src={AppLogo} alt="App Icon" width="120" className="app-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav activeKey={pathname}>
            <Nav.Link as={Link} to="/" eventKey="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/about" eventKey="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" eventKey="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/login" eventKey="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/register" eventKey="/register">
              <span className="btn-nav-get-started">Get Started</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
