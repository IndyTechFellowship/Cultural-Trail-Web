import React from 'react'
import classes from './Header.scss'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'

// components
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export const Header = () => (
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Cultural Trail</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <IndexLinkContainer to="/">
          <NavItem>Dashboard</NavItem>
        </IndexLinkContainer>
        <LinkContainer to="/issues">
          <NavItem>Issues</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
  </div>
)

export default Header
