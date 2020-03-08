import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
const Styles = styled.div`

.navbar{    
    background-color=#222;
}
.navbar-brand,.navbar-nav,.navbar-link{
    color:#bbb;
    &:hover{
        color:white;
    }
}
`;
export const Nabar = () => (
  <Styles>
    <Navbar collapsOnSelect expand-="lg" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="/">Flea</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-end">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/About">About</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
