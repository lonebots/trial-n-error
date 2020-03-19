import React from "react";
import { Nav, Navbar } from "react-bootstrap";

import "./assets/css/nav.css";

export const Nabar = () => (
  <Navbar
    collapsOnSelect
    expand-="lg"
    fixed="top"
    className="hi"
    variant="dark"
  >
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="li">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/help">Help</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
