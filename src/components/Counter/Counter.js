import React from 'react'
import classes from './Counter.scss'

// components
import Button from 'react-bootstrap/lib/Button';

export const Counter = (props) => (
  <div>
    <p>Note: this still shows the counter control that came with the template, but it should show a table of issues in the future</p>
    <h2 className={classes.counterContainer}>
      Counter:
      {' '}
      <span className={classes['counter--green']}>
        {props.counter}
      </span>
    </h2>
    <Button className='btn btn-default' onClick={props.increment}>
      Increment
    </Button>
    {' '}
    <Button className='btn btn-default' onClick={props.doubleAsync}>
      Double (Async)
    </Button>
  </div>
)

Counter.propTypes = {
  counter: React.PropTypes.number.isRequired,
  doubleAsync: React.PropTypes.func.isRequired,
  increment: React.PropTypes.func.isRequired
}

export default Counter
