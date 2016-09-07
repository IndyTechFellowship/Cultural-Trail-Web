import React from 'react'
import classes from './Navbar.scss'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'

export const Navbar = (props) => (
  <div>
    <div className={classes['nav']}>
      {props.children}
    </div>
  </div>
)

export default Navbar
