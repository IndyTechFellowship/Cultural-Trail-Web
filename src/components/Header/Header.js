import React from 'react'
import classes from './Header.scss'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'

// components
import { Navbar, Nav, NavItem } from 'react-bootstrap';
console.log(classes)

export const Header = () => (
  <div>
    <Navbar className={classes.container}>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/"><img src="ict-logo.png" className={classes.img} /></a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <IndexLinkContainer to="/">
          <NavItem>Dashboard<div className="arrow"></div></NavItem>
        </IndexLinkContainer>
        <LinkContainer to="/issues">
          <NavItem>Issues<div className="arrow"></div></NavItem>
        </LinkContainer>
      </Nav>
      <Navbar.Header>
        <div className={classes.avatar}>BW</div>
        <div className={classes.user}>Ben Wencke</div>
      </Navbar.Header>
    </Navbar>
  </div>
)

export default Header
