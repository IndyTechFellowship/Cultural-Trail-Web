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
          <a href="#">Cultural Trail</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <IndexLinkContainer to="/">
          <NavItem>Home</NavItem>
        </IndexLinkContainer>
        <LinkContainer to="/counter">
          <NavItem>Counter</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
  </div>
)

export default Header
