import React from 'react'
import { connect } from 'react-redux'

import { increment, decrement } from './actions'

export const Counter = ({count, increment, decrement}) => {
  return (
    <p>
      <span className='counter'>Counter: {count}</span>
      <br />
      <button className='decrement' onClick={() => decrement(1)}>-</button>
      <button className='increment' onClick={() => increment(1)}>+</button>
    </p>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
