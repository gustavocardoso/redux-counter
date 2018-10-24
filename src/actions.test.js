import { increment, decrement } from './actions'

// TODO: verify code completion

test('Action INCREMENT', () => {
  let incr = increment(10)
  
  expect(incr).toEqual(
    {
      type: 'INCREMENT',
      value: 10
    }
  )
})

test('Action DECREMENT', () => {
  let decr = decrement(5)
  
  expect(decr).toEqual({
    type: 'DECREMENT',
    value: 5
  })
})
