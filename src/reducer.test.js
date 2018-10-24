import reducer from './reducer'

describe('Reducer', () => {
  it('should has a null initial state', () => {
    const action = { type: 'INCREMENT', value: 10 }
    const state = reducer(undefined, action)

    expect(state).toEqual({ count: 10 })
  });
  it('should increment 10', () => {
    const initialState = { count: 0 }
    const action = { type: 'INCREMENT', value: 10 }
    const state = reducer(initialState, action)

    expect(state).toEqual({ count: 10 })
  })

  it('should decrement 10', () => {
    const initialState = { count: 20 }
    const action = { type: 'DECREMENT', value: 10 }
    const state = reducer(initialState, action)

    expect(state).toEqual({ count: 10 })
  })
})
